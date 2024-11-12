import logging
from collections.abc import Mapping
from typing import Any

import yaml
from packaging import version

from core.helper import ssrf_proxy
from core.model_runtime.utils.encoders import jsonable_encoder
from core.plugin.entities.plugin import PluginDependency
from core.workflow.nodes.enums import NodeType
from core.workflow.nodes.knowledge_retrieval.entities import KnowledgeRetrievalNodeData
from core.workflow.nodes.llm.entities import LLMNodeData
from core.workflow.nodes.parameter_extractor.entities import ParameterExtractorNodeData
from core.workflow.nodes.question_classifier.entities import QuestionClassifierNodeData
from core.workflow.nodes.tool.entities import ToolNodeData
from events.app_event import app_model_config_was_updated, app_was_created
from extensions.ext_database import db
from factories import variable_factory
from models.account import Account
from models.model import App, AppMode, AppModelConfig
from models.workflow import Workflow
from services.plugin.dependencies_analysis import DependenciesAnalysisService
from services.workflow_service import WorkflowService

from .exc import (
    ContentDecodingError,
    EmptyContentError,
    FileSizeLimitExceededError,
    InvalidAppModeError,
    InvalidYAMLFormatError,
    MissingAppDataError,
    MissingModelConfigError,
    MissingWorkflowDataError,
)

logger = logging.getLogger(__name__)

current_dsl_version = "0.1.3"


class AppDslService:
    @classmethod
    def import_and_create_new_app_from_url(cls, tenant_id: str, url: str, args: dict, account: Account) -> App:
        """
        Import app dsl from url and create new app
        :param tenant_id: tenant id
        :param url: import url
        :param args: request args
        :param account: Account instance
        """
        max_size = 10 * 1024 * 1024  # 10MB
        response = ssrf_proxy.get(url.strip(), follow_redirects=True, timeout=(10, 10))
        response.raise_for_status()
        content = response.content

        if len(content) > max_size:
            raise FileSizeLimitExceededError("File size exceeds the limit of 10MB")

        if not content:
            raise EmptyContentError("Empty content from url")

        try:
            data = content.decode("utf-8")
        except UnicodeDecodeError as e:
            raise ContentDecodingError(f"Error decoding content: {e}")

        return cls.import_and_create_new_app(tenant_id, data, args, account)

    @classmethod
    def check_dependencies(cls, tenant_id: str, data: str, account: Account) -> list[PluginDependency]:
        """
        Returns the leaked dependencies in current workspace
        """
        try:
            import_data = yaml.safe_load(data) or {}
        except yaml.YAMLError:
            raise InvalidYAMLFormatError("Invalid YAML format in data argument.")

        dependencies = [PluginDependency(**dep) for dep in import_data.get("dependencies", [])]
        if not dependencies:
            return []

        return DependenciesAnalysisService.check_dependencies(tenant_id=tenant_id, dependencies=dependencies)

    @classmethod
    def import_and_create_new_app(cls, tenant_id: str, data: str, args: dict, account: Account) -> App:
        """
        Import app dsl and create new app
        :param tenant_id: tenant id
        :param data: import data
        :param args: request args
        :param account: Account instance
        """
        try:
            import_data = yaml.safe_load(data)
        except yaml.YAMLError:
            raise InvalidYAMLFormatError("Invalid YAML format in data argument.")

        # check or repair dsl version
        import_data = _check_or_fix_dsl(import_data)

        app_data = import_data.get("app")
        if not app_data:
            raise MissingAppDataError("Missing app in data argument")

        # get app basic info
        name = args.get("name") or app_data.get("name")
        description = args.get("description") or app_data.get("description", "")
        icon_type = args.get("icon_type") or app_data.get("icon_type")
        icon = args.get("icon") or app_data.get("icon")
        icon_background = args.get("icon_background") or app_data.get("icon_background")
        use_icon_as_answer_icon = app_data.get("use_icon_as_answer_icon", False)

        # import dsl and create app
        app_mode = AppMode.value_of(app_data.get("mode"))

        if app_mode in {AppMode.ADVANCED_CHAT, AppMode.WORKFLOW}:
            workflow_data = import_data.get("workflow")
            if not workflow_data or not isinstance(workflow_data, dict):
                raise MissingWorkflowDataError(
                    "Missing workflow in data argument when app mode is advanced-chat or workflow"
                )

            app = cls._import_and_create_new_workflow_based_app(
                tenant_id=tenant_id,
                app_mode=app_mode,
                workflow_data=workflow_data,
                account=account,
                name=name,
                description=description,
                icon_type=icon_type,
                icon=icon,
                icon_background=icon_background,
                use_icon_as_answer_icon=use_icon_as_answer_icon,
            )
        elif app_mode in {AppMode.CHAT, AppMode.AGENT_CHAT, AppMode.COMPLETION}:
            model_config = import_data.get("model_config")
            if not model_config or not isinstance(model_config, dict):
                raise MissingModelConfigError(
                    "Missing model_config in data argument when app mode is chat, agent-chat or completion"
                )

            app = cls._import_and_create_new_model_config_based_app(
                tenant_id=tenant_id,
                app_mode=app_mode,
                model_config_data=model_config,
                account=account,
                name=name,
                description=description,
                icon_type=icon_type,
                icon=icon,
                icon_background=icon_background,
                use_icon_as_answer_icon=use_icon_as_answer_icon,
            )
        else:
            raise InvalidAppModeError("Invalid app mode")

        return app

    @classmethod
    def import_and_overwrite_workflow(cls, app_model: App, data: str, account: Account) -> Workflow:
        """
        Import app dsl and overwrite workflow
        :param app_model: App instance
        :param data: import data
        :param account: Account instance
        """
        try:
            import_data = yaml.safe_load(data)
        except yaml.YAMLError:
            raise InvalidYAMLFormatError("Invalid YAML format in data argument.")

        # check or repair dsl version
        import_data = _check_or_fix_dsl(import_data)

        app_data = import_data.get("app")
        if not app_data:
            raise MissingAppDataError("Missing app in data argument")

        # import dsl and overwrite app
        app_mode = AppMode.value_of(app_data.get("mode"))
        if app_mode not in {AppMode.ADVANCED_CHAT, AppMode.WORKFLOW}:
            raise InvalidAppModeError("Only support import workflow in advanced-chat or workflow app.")

        if app_data.get("mode") != app_model.mode:
            raise ValueError(f"App mode {app_data.get('mode')} is not matched with current app mode {app_mode.value}")

        workflow_data = import_data.get("workflow")
        if not workflow_data or not isinstance(workflow_data, dict):
            raise MissingWorkflowDataError(
                "Missing workflow in data argument when app mode is advanced-chat or workflow"
            )

        return cls._import_and_overwrite_workflow_based_app(
            app_model=app_model,
            workflow_data=workflow_data,
            account=account,
        )

    @classmethod
    def export_dsl(cls, app_model: App, include_secret: bool = False) -> str:
        """
        Export app
        :param app_model: App instance
        :return:
        """
        app_mode = AppMode.value_of(app_model.mode)

        export_data = {
            "version": current_dsl_version,
            "kind": "app",
            "app": {
                "name": app_model.name,
                "mode": app_model.mode,
                "icon": "🤖" if app_model.icon_type == "image" else app_model.icon,
                "icon_background": "#FFEAD5" if app_model.icon_type == "image" else app_model.icon_background,
                "description": app_model.description,
                "use_icon_as_answer_icon": app_model.use_icon_as_answer_icon,
            },
        }

        if app_mode in {AppMode.ADVANCED_CHAT, AppMode.WORKFLOW}:
            cls._append_workflow_export_data(
                export_data=export_data, app_model=app_model, include_secret=include_secret
            )
        else:
            cls._append_model_config_export_data(export_data, app_model)

        return yaml.dump(export_data, allow_unicode=True)

    @classmethod
    def _import_and_create_new_workflow_based_app(
        cls,
        tenant_id: str,
        app_mode: AppMode,
        workflow_data: Mapping[str, Any],
        account: Account,
        name: str,
        description: str,
        icon_type: str,
        icon: str,
        icon_background: str,
        use_icon_as_answer_icon: bool,
    ) -> App:
        """
        Import app dsl and create new workflow based app

        :param tenant_id: tenant id
        :param app_mode: app mode
        :param workflow_data: workflow data
        :param account: Account instance
        :param name: app name
        :param description: app description
        :param icon_type: app icon type, "emoji" or "image"
        :param icon: app icon
        :param icon_background: app icon background
        :param use_icon_as_answer_icon: use app icon as answer icon
        """
        if not workflow_data:
            raise MissingWorkflowDataError(
                "Missing workflow in data argument when app mode is advanced-chat or workflow"
            )

        app = cls._create_app(
            tenant_id=tenant_id,
            app_mode=app_mode,
            account=account,
            name=name,
            description=description,
            icon_type=icon_type,
            icon=icon,
            icon_background=icon_background,
            use_icon_as_answer_icon=use_icon_as_answer_icon,
        )

        # init draft workflow
        environment_variables_list = workflow_data.get("environment_variables") or []
        environment_variables = [
            variable_factory.build_variable_from_mapping(obj) for obj in environment_variables_list
        ]
        conversation_variables_list = workflow_data.get("conversation_variables") or []
        conversation_variables = [
            variable_factory.build_variable_from_mapping(obj) for obj in conversation_variables_list
        ]
        workflow_service = WorkflowService()
        draft_workflow = workflow_service.sync_draft_workflow(
            app_model=app,
            graph=workflow_data.get("graph", {}),
            features=workflow_data.get("features", {}),
            unique_hash=None,
            account=account,
            environment_variables=environment_variables,
            conversation_variables=conversation_variables,
        )
        workflow_service.publish_workflow(app_model=app, account=account, draft_workflow=draft_workflow)

        return app

    @classmethod
    def _import_and_overwrite_workflow_based_app(
        cls, app_model: App, workflow_data: Mapping[str, Any], account: Account
    ) -> Workflow:
        """
        Import app dsl and overwrite workflow based app

        :param app_model: App instance
        :param workflow_data: workflow data
        :param account: Account instance
        """
        if not workflow_data:
            raise MissingWorkflowDataError(
                "Missing workflow in data argument when app mode is advanced-chat or workflow"
            )

        # fetch draft workflow by app_model
        workflow_service = WorkflowService()
        current_draft_workflow = workflow_service.get_draft_workflow(app_model=app_model)
        if current_draft_workflow:
            unique_hash = current_draft_workflow.unique_hash
        else:
            unique_hash = None

        # sync draft workflow
        environment_variables_list = workflow_data.get("environment_variables") or []
        environment_variables = [
            variable_factory.build_variable_from_mapping(obj) for obj in environment_variables_list
        ]
        conversation_variables_list = workflow_data.get("conversation_variables") or []
        conversation_variables = [
            variable_factory.build_variable_from_mapping(obj) for obj in conversation_variables_list
        ]
        draft_workflow = workflow_service.sync_draft_workflow(
            app_model=app_model,
            graph=workflow_data.get("graph", {}),
            features=workflow_data.get("features", {}),
            unique_hash=unique_hash,
            account=account,
            environment_variables=environment_variables,
            conversation_variables=conversation_variables,
        )

        return draft_workflow

    @classmethod
    def _import_and_create_new_model_config_based_app(
        cls,
        tenant_id: str,
        app_mode: AppMode,
        model_config_data: Mapping[str, Any],
        account: Account,
        name: str,
        description: str,
        icon_type: str,
        icon: str,
        icon_background: str,
        use_icon_as_answer_icon: bool,
    ) -> App:
        """
        Import app dsl and create new model config based app

        :param tenant_id: tenant id
        :param app_mode: app mode
        :param model_config_data: model config data
        :param account: Account instance
        :param name: app name
        :param description: app description
        :param icon: app icon
        :param icon_background: app icon background
        """
        if not model_config_data:
            raise MissingModelConfigError(
                "Missing model_config in data argument when app mode is chat, agent-chat or completion"
            )

        app = cls._create_app(
            tenant_id=tenant_id,
            app_mode=app_mode,
            account=account,
            name=name,
            description=description,
            icon_type=icon_type,
            icon=icon,
            icon_background=icon_background,
            use_icon_as_answer_icon=use_icon_as_answer_icon,
        )

        app_model_config = AppModelConfig()
        app_model_config = app_model_config.from_model_config_dict(model_config_data)
        app_model_config.app_id = app.id
        app_model_config.created_by = account.id
        app_model_config.updated_by = account.id

        db.session.add(app_model_config)
        db.session.commit()

        app.app_model_config_id = app_model_config.id

        app_model_config_was_updated.send(app, app_model_config=app_model_config)

        return app

    @classmethod
    def _create_app(
        cls,
        tenant_id: str,
        app_mode: AppMode,
        account: Account,
        name: str,
        description: str,
        icon_type: str,
        icon: str,
        icon_background: str,
        use_icon_as_answer_icon: bool,
    ) -> App:
        """
        Create new app

        :param tenant_id: tenant id
        :param app_mode: app mode
        :param account: Account instance
        :param name: app name
        :param description: app description
        :param icon_type: app icon type, "emoji" or "image"
        :param icon: app icon
        :param icon_background: app icon background
        :param use_icon_as_answer_icon: use app icon as answer icon
        """
        app = App(
            tenant_id=tenant_id,
            mode=app_mode.value,
            name=name,
            description=description,
            icon_type=icon_type,
            icon=icon,
            icon_background=icon_background,
            enable_site=True,
            enable_api=True,
            use_icon_as_answer_icon=use_icon_as_answer_icon,
            created_by=account.id,
            updated_by=account.id,
        )

        db.session.add(app)
        db.session.commit()

        app_was_created.send(app, account=account)

        return app

    @classmethod
    def _append_workflow_export_data(cls, *, export_data: dict, app_model: App, include_secret: bool) -> None:
        """
        Append workflow export data
        :param export_data: export data
        :param app_model: App instance
        """
        workflow_service = WorkflowService()
        workflow = workflow_service.get_draft_workflow(app_model)
        if not workflow:
            raise ValueError("Missing draft workflow configuration, please check.")

        export_data["workflow"] = workflow.to_dict(include_secret=include_secret)
        dependencies = cls._extract_dependencies_from_workflow(workflow)
        export_data["dependencies"] = [
            jsonable_encoder(d.model_dump())
            for d in DependenciesAnalysisService.generate_dependencies(
                tenant_id=app_model.tenant_id, dependencies=dependencies
            )
        ]

    @classmethod
    def _append_model_config_export_data(cls, export_data: dict, app_model: App) -> None:
        """
        Append model config export data
        :param export_data: export data
        :param app_model: App instance
        """
        app_model_config = app_model.app_model_config
        if not app_model_config:
            raise ValueError("Missing app configuration, please check.")

        export_data["model_config"] = app_model_config.to_dict()
        dependencies = cls._extract_dependencies_from_model_config(app_model_config)
        export_data["dependencies"] = [
            jsonable_encoder(d.model_dump())
            for d in DependenciesAnalysisService.generate_dependencies(
                tenant_id=app_model.tenant_id, dependencies=dependencies
            )
        ]

    @classmethod
    def _extract_dependencies_from_workflow(cls, workflow: Workflow) -> list[str]:
        """
        Extract dependencies from workflow
        :param workflow: Workflow instance
        :return: dependencies list format like ["langgenius/google"]
        """
        graph = workflow.graph_dict
        dependencies = []
        for node in graph.get("nodes", []):
            try:
                typ = node.get("data", {}).get("type")
                match typ:
                    case NodeType.TOOL.value:
                        tool_entity = ToolNodeData(**node["data"])
                        dependencies.append(
                            DependenciesAnalysisService.analyze_tool_dependency(tool_entity.provider_id),
                        )
                    case NodeType.LLM.value:
                        llm_entity = LLMNodeData(**node["data"])
                        dependencies.append(
                            DependenciesAnalysisService.analyze_model_provider_dependency(llm_entity.model.provider),
                        )
                    case NodeType.QUESTION_CLASSIFIER.value:
                        question_classifier_entity = QuestionClassifierNodeData(**node["data"])
                        dependencies.append(
                            DependenciesAnalysisService.analyze_model_provider_dependency(
                                question_classifier_entity.model.provider
                            ),
                        )
                    case NodeType.PARAMETER_EXTRACTOR.value:
                        parameter_extractor_entity = ParameterExtractorNodeData(**node["data"])
                        dependencies.append(
                            DependenciesAnalysisService.analyze_model_provider_dependency(
                                parameter_extractor_entity.model.provider
                            ),
                        )
                    case NodeType.KNOWLEDGE_RETRIEVAL.value:
                        knowledge_retrieval_entity = KnowledgeRetrievalNodeData(**node["data"])
                        if knowledge_retrieval_entity.retrieval_mode == "multiple":
                            if knowledge_retrieval_entity.multiple_retrieval_config:
                                if (
                                    knowledge_retrieval_entity.multiple_retrieval_config.reranking_mode
                                    == "reranking_model"
                                ):
                                    if knowledge_retrieval_entity.multiple_retrieval_config.reranking_model:
                                        dependencies.append(
                                            DependenciesAnalysisService.analyze_model_provider_dependency(
                                                knowledge_retrieval_entity.multiple_retrieval_config.reranking_model.provider
                                            ),
                                        )
                                elif (
                                    knowledge_retrieval_entity.multiple_retrieval_config.reranking_mode
                                    == "weighted_score"
                                ):
                                    if knowledge_retrieval_entity.multiple_retrieval_config.weights:
                                        vector_setting = (
                                            knowledge_retrieval_entity.multiple_retrieval_config.weights.vector_setting
                                        )
                                        dependencies.append(
                                            DependenciesAnalysisService.analyze_model_provider_dependency(
                                                vector_setting.embedding_provider_name
                                            ),
                                        )
                        elif knowledge_retrieval_entity.retrieval_mode == "single":
                            model_config = knowledge_retrieval_entity.single_retrieval_config
                            if model_config:
                                dependencies.append(
                                    DependenciesAnalysisService.analyze_model_provider_dependency(
                                        model_config.model.provider
                                    ),
                                )
                    case _:
                        # Handle default case or unknown node types
                        pass
            except Exception as e:
                logger.exception("Error extracting node dependency", exc_info=e)

        return dependencies

    @classmethod
    def _extract_dependencies_from_model_config(cls, model_config: AppModelConfig) -> list[str]:
        """
        Extract dependencies from model config
        :param model_config: AppModelConfig instance
        :return: dependencies list format like ["langgenius/google:1.0.0@abcdef1234567890"]
        """
        dependencies = []

        try:
            # completion model
            model_dict = model_config.model_dict
            if model_dict:
                dependencies.append(
                    DependenciesAnalysisService.analyze_model_provider_dependency(model_dict.get("provider"))
                )

            # reranking model
            dataset_configs = model_config.dataset_configs_dict
            if dataset_configs:
                for dataset_config in dataset_configs:
                    if dataset_config.get("reranking_model"):
                        dependencies.append(
                            DependenciesAnalysisService.analyze_model_provider_dependency(
                                dataset_config.get("reranking_model", {})
                                .get("reranking_provider_name", {})
                                .get("provider")
                            )
                        )

            # tools
            agent_configs = model_config.agent_mode_dict
            if agent_configs:
                for agent_config in agent_configs:
                    if agent_config.get("tools"):
                        for tool in agent_config.get("tools", []):
                            dependencies.append(
                                DependenciesAnalysisService.analyze_tool_dependency(tool.get("provider_id"))
                            )
        except Exception as e:
            logger.exception("Error extracting model config dependency", exc_info=e)

        return dependencies


def _check_or_fix_dsl(import_data: dict[str, Any]) -> Mapping[str, Any]:
    """
    Check or fix dsl

    :param import_data: import data
    :raises DSLVersionNotSupportedError: if the imported DSL version is newer than the current version
    """
    if not import_data.get("version"):
        import_data["version"] = "0.1.0"

    if not import_data.get("kind") or import_data.get("kind") != "app":
        import_data["kind"] = "app"

    imported_version = import_data.get("version")
    if imported_version != current_dsl_version:
        if imported_version and version.parse(imported_version) > version.parse(current_dsl_version):
            errmsg = (
                f"The imported DSL version {imported_version} is newer than "
                f"the current supported version {current_dsl_version}. "
                f"Please upgrade your Dify instance to import this configuration."
            )
            logger.warning(errmsg)
            # raise DSLVersionNotSupportedError(errmsg)
        else:
            logger.warning(
                f"DSL version {imported_version} is older than "
                f"the current version {current_dsl_version}. "
                f"This may cause compatibility issues."
            )

    return import_data
