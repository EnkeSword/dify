import json
import logging
import mimetypes
from collections.abc import Generator
from os import listdir, path
from threading import Lock
from typing import TYPE_CHECKING, Any, Union, cast

from core.plugin.entities.plugin import GenericProviderID
from core.plugin.manager.tool import PluginToolManager
from core.tools.__base.tool_runtime import ToolRuntime
from core.tools.plugin_tool.provider import PluginToolProviderController
from core.tools.plugin_tool.tool import PluginTool

if TYPE_CHECKING:
    from core.workflow.nodes.tool.entities import ToolEntity


from configs import dify_config
from core.agent.entities import AgentToolEntity
from core.app.entities.app_invoke_entities import InvokeFrom
from core.helper.module_import_helper import load_single_subclass_from_source
from core.helper.position_helper import is_filtered
from core.model_runtime.utils.encoders import jsonable_encoder
from core.tools.__base.tool import Tool
from core.tools.builtin_tool.provider import BuiltinToolProviderController
from core.tools.builtin_tool.providers._positions import BuiltinToolProviderSort
from core.tools.builtin_tool.tool import BuiltinTool
from core.tools.custom_tool.provider import ApiToolProviderController
from core.tools.custom_tool.tool import ApiTool
from core.tools.entities.api_entities import ToolProviderApiEntity, ToolProviderTypeApiLiteral
from core.tools.entities.common_entities import I18nObject
from core.tools.entities.tool_entities import (
    ApiProviderAuthType,
    ToolInvokeFrom,
    ToolParameter,
    ToolProviderType,
)
from core.tools.errors import ToolProviderNotFoundError
from core.tools.tool_label_manager import ToolLabelManager
from core.tools.utils.configuration import (
    ProviderConfigEncrypter,
    ToolParameterConfigurationManager,
)
from core.tools.workflow_as_tool.tool import WorkflowTool
from extensions.ext_database import db
from models.tools import ApiToolProvider, BuiltinToolProvider, WorkflowToolProvider
from services.tools.tools_transform_service import ToolTransformService

logger = logging.getLogger(__name__)


class ToolManager:
    _builtin_provider_lock = Lock()
    _hardcoded_providers = {}
    _builtin_providers_loaded = False
    _builtin_tools_labels = {}

    @classmethod
    def get_hardcoded_provider(cls, provider: str) -> BuiltinToolProviderController:
        """
        get the hardcoded provider
        """
        if len(cls._hardcoded_providers) == 0:
            # init the builtin providers
            cls.load_hardcoded_providers_cache()

        return cls._hardcoded_providers[provider]

    @classmethod
    def get_builtin_provider(
        cls, provider: str, tenant_id: str
    ) -> BuiltinToolProviderController | PluginToolProviderController:
        """
        get the builtin provider

        :param provider: the name of the provider
        :param tenant_id: the id of the tenant
        :return: the provider
        """
        # split provider to

        if len(cls._hardcoded_providers) == 0:
            # init the builtin providers
            cls.load_hardcoded_providers_cache()

        if provider not in cls._hardcoded_providers:
            # get plugin provider
            plugin_provider = cls.get_plugin_provider(provider, tenant_id)
            if plugin_provider:
                return plugin_provider

        return cls._hardcoded_providers[provider]

    @classmethod
    def get_plugin_provider(cls, provider: str, tenant_id: str) -> PluginToolProviderController:
        """
        get the plugin provider
        """
        manager = PluginToolManager()
        provider_entity = manager.fetch_tool_provider(tenant_id, provider)
        if not provider_entity:
            raise ToolProviderNotFoundError(f"plugin provider {provider} not found")

        return PluginToolProviderController(
            entity=provider_entity.declaration,
            plugin_id=provider_entity.plugin_id,
            tenant_id=tenant_id,
        )

    @classmethod
    def get_builtin_tool(cls, provider: str, tool_name: str, tenant_id: str) -> BuiltinTool | PluginTool | None:
        """
        get the builtin tool

        :param provider: the name of the provider
        :param tool_name: the name of the tool
        :param tenant_id: the id of the tenant
        :return: the provider, the tool
        """
        provider_controller = cls.get_builtin_provider(provider, tenant_id)
        tool = provider_controller.get_tool(tool_name)

        return tool

    @classmethod
    def get_tool_runtime(
        cls,
        provider_type: ToolProviderType,
        provider_id: str,
        tool_name: str,
        tenant_id: str,
        invoke_from: InvokeFrom = InvokeFrom.DEBUGGER,
        tool_invoke_from: ToolInvokeFrom = ToolInvokeFrom.AGENT,
    ) -> Union[BuiltinTool, ApiTool, WorkflowTool]:
        """
        get the tool runtime

        :param provider_type: the type of  the provider
        :param provider_name: the name of  the provider
        :param tool_name: the name of the tool

        :return: the tool
        """
        if provider_type == ToolProviderType.BUILT_IN:
            # check if the builtin tool need credentials
            provider_controller = cls.get_builtin_provider(provider_id, tenant_id)

            builtin_tool = provider_controller.get_tool(tool_name)
            if not builtin_tool:
                raise ToolProviderNotFoundError(f"builtin tool {tool_name} not found")

            if not provider_controller.need_credentials:
                return cast(
                    BuiltinTool,
                    builtin_tool.fork_tool_runtime(
                        runtime=ToolRuntime(
                            tenant_id=tenant_id,
                            credentials={},
                            invoke_from=invoke_from,
                            tool_invoke_from=tool_invoke_from,
                        )
                    ),
                )

            if isinstance(provider_controller, PluginToolProviderController):
                provider_id_entity = GenericProviderID(provider_id)
                # get credentials
                builtin_provider: BuiltinToolProvider | None = (
                    db.session.query(BuiltinToolProvider)
                    .filter(
                        BuiltinToolProvider.tenant_id == tenant_id,
                        (BuiltinToolProvider.provider == provider_id)
                        | (BuiltinToolProvider.provider == provider_id_entity.provider_name),
                    )
                    .first()
                )

                if builtin_provider is None:
                    raise ToolProviderNotFoundError(f"builtin provider {provider_id} not found")
            else:
                builtin_provider: BuiltinToolProvider | None = (
                    db.session.query(BuiltinToolProvider)
                    .filter(BuiltinToolProvider.tenant_id == tenant_id, (BuiltinToolProvider.provider == provider_id))
                    .first()
                )

                if builtin_provider is None:
                    raise ToolProviderNotFoundError(f"builtin provider {provider_id} not found")

            # decrypt the credentials
            credentials = builtin_provider.credentials
            tool_configuration = ProviderConfigEncrypter(
                tenant_id=tenant_id,
                config=[x.to_basic_provider_config() for x in provider_controller.get_credentials_schema()],
                provider_type=provider_controller.provider_type.value,
                provider_identity=provider_controller.entity.identity.name,
            )

            decrypted_credentials = tool_configuration.decrypt(credentials)

            return cast(
                BuiltinTool,
                builtin_tool.fork_tool_runtime(
                    runtime=ToolRuntime(
                        tenant_id=tenant_id,
                        credentials=decrypted_credentials,
                        runtime_parameters={},
                        invoke_from=invoke_from,
                        tool_invoke_from=tool_invoke_from,
                    )
                ),
            )

        elif provider_type == ToolProviderType.API:
            api_provider, credentials = cls.get_api_provider_controller(tenant_id, provider_id)

            # decrypt the credentials
            tool_configuration = ProviderConfigEncrypter(
                tenant_id=tenant_id,
                config=[x.to_basic_provider_config() for x in api_provider.get_credentials_schema()],
                provider_type=api_provider.provider_type.value,
                provider_identity=api_provider.entity.identity.name,
            )
            decrypted_credentials = tool_configuration.decrypt(credentials)

            return cast(
                ApiTool,
                api_provider.get_tool(tool_name).fork_tool_runtime(
                    runtime=ToolRuntime(
                        tenant_id=tenant_id,
                        credentials=decrypted_credentials,
                        invoke_from=invoke_from,
                        tool_invoke_from=tool_invoke_from,
                    )
                ),
            )
        elif provider_type == ToolProviderType.WORKFLOW:
            workflow_provider = (
                db.session.query(WorkflowToolProvider)
                .filter(WorkflowToolProvider.tenant_id == tenant_id, WorkflowToolProvider.id == provider_id)
                .first()
            )

            if workflow_provider is None:
                raise ToolProviderNotFoundError(f"workflow provider {provider_id} not found")

            controller = ToolTransformService.workflow_provider_to_controller(db_provider=workflow_provider)

            return cast(
                WorkflowTool,
                controller.get_tools(tenant_id=workflow_provider.tenant_id)[0].fork_tool_runtime(
                    runtime=ToolRuntime(
                        tenant_id=tenant_id,
                        credentials={},
                        invoke_from=invoke_from,
                        tool_invoke_from=tool_invoke_from,
                    )
                ),
            )
        elif provider_type == ToolProviderType.APP:
            raise NotImplementedError("app provider not implemented")
        else:
            raise ToolProviderNotFoundError(f"provider type {provider_type.value} not found")

    @classmethod
    def _init_runtime_parameter(cls, parameter_rule: ToolParameter, parameters: dict):
        """
        init runtime parameter
        """
        parameter_value = parameters.get(parameter_rule.name)
        if not parameter_value and parameter_value != 0:
            # get default value
            parameter_value = parameter_rule.default
            if not parameter_value and parameter_rule.required:
                raise ValueError(f"tool parameter {parameter_rule.name} not found in tool config")

        if parameter_rule.type == ToolParameter.ToolParameterType.SELECT:
            # check if tool_parameter_config in options
            options = [x.value for x in parameter_rule.options]
            if parameter_value is not None and parameter_value not in options:
                raise ValueError(
                    f"tool parameter {parameter_rule.name} value {parameter_value} not in options {options}"
                )

        return parameter_rule.type.cast_value(parameter_value)

    @classmethod
    def get_agent_tool_runtime(
        cls,
        tenant_id: str,
        app_id: str,
        agent_tool: AgentToolEntity,
        invoke_from: InvokeFrom = InvokeFrom.DEBUGGER,
    ) -> Tool:
        """
        get the agent tool runtime
        """
        tool_entity = cls.get_tool_runtime(
            provider_type=agent_tool.provider_type,
            provider_id=agent_tool.provider_id,
            tool_name=agent_tool.tool_name,
            tenant_id=tenant_id,
            invoke_from=invoke_from,
            tool_invoke_from=ToolInvokeFrom.AGENT,
        )
        runtime_parameters = {}
        parameters = tool_entity.get_merged_runtime_parameters()
        for parameter in parameters:
            # check file types
            if (
                parameter.type
                in {
                    ToolParameter.ToolParameterType.SYSTEM_FILES,
                    ToolParameter.ToolParameterType.FILE,
                    ToolParameter.ToolParameterType.FILES,
                }
                and parameter.required
            ):
                raise ValueError(f"file type parameter {parameter.name} not supported in agent")

            if parameter.form == ToolParameter.ToolParameterForm.FORM:
                # save tool parameter to tool entity memory
                value = cls._init_runtime_parameter(parameter, agent_tool.tool_parameters)
                runtime_parameters[parameter.name] = value

        # decrypt runtime parameters
        encryption_manager = ToolParameterConfigurationManager(
            tenant_id=tenant_id,
            tool_runtime=tool_entity,
            provider_name=agent_tool.provider_id,
            provider_type=agent_tool.provider_type,
            identity_id=f"AGENT.{app_id}",
        )
        runtime_parameters = encryption_manager.decrypt_tool_parameters(runtime_parameters)

        if not tool_entity.runtime:
            raise Exception("tool missing runtime")

        tool_entity.runtime.runtime_parameters.update(runtime_parameters)
        return tool_entity

    @classmethod
    def get_workflow_tool_runtime(
        cls,
        tenant_id: str,
        app_id: str,
        node_id: str,
        workflow_tool: "ToolEntity",
        invoke_from: InvokeFrom = InvokeFrom.DEBUGGER,
    ) -> Tool:
        """
        get the workflow tool runtime
        """
        tool_runtime = cls.get_tool_runtime(
            provider_type=workflow_tool.provider_type,
            provider_id=workflow_tool.provider_id,
            tool_name=workflow_tool.tool_name,
            tenant_id=tenant_id,
            invoke_from=invoke_from,
            tool_invoke_from=ToolInvokeFrom.WORKFLOW,
        )
        runtime_parameters = {}
        parameters = tool_runtime.get_merged_runtime_parameters()

        for parameter in parameters:
            # save tool parameter to tool entity memory
            if parameter.form == ToolParameter.ToolParameterForm.FORM:
                value = cls._init_runtime_parameter(parameter, workflow_tool.tool_configurations)
                runtime_parameters[parameter.name] = value

        # decrypt runtime parameters
        encryption_manager = ToolParameterConfigurationManager(
            tenant_id=tenant_id,
            tool_runtime=tool_runtime,
            provider_name=workflow_tool.provider_id,
            provider_type=workflow_tool.provider_type,
            identity_id=f"WORKFLOW.{app_id}.{node_id}",
        )

        if runtime_parameters:
            runtime_parameters = encryption_manager.decrypt_tool_parameters(runtime_parameters)

        if not tool_runtime.runtime:
            raise Exception("tool missing runtime")

        tool_runtime.runtime.runtime_parameters.update(runtime_parameters)
        return tool_runtime

    @classmethod
    def get_tool_runtime_from_plugin(
        cls,
        tool_type: ToolProviderType,
        tenant_id: str,
        provider: str,
        tool_name: str,
        tool_parameters: dict[str, Any],
    ) -> Tool:
        """
        get tool runtime from plugin
        """
        tool_entity = cls.get_tool_runtime(
            provider_type=tool_type,
            provider_id=provider,
            tool_name=tool_name,
            tenant_id=tenant_id,
            invoke_from=InvokeFrom.SERVICE_API,
            tool_invoke_from=ToolInvokeFrom.PLUGIN,
        )
        runtime_parameters = {}
        parameters = tool_entity.get_merged_runtime_parameters()
        for parameter in parameters:
            if parameter.form == ToolParameter.ToolParameterForm.FORM:
                # save tool parameter to tool entity memory
                value = cls._init_runtime_parameter(parameter, tool_parameters)
                runtime_parameters[parameter.name] = value

        if not tool_entity.runtime:
            raise Exception("tool missing runtime")

        tool_entity.runtime.runtime_parameters.update(runtime_parameters)
        return tool_entity

    @classmethod
    def get_hardcoded_provider_icon(cls, provider: str) -> tuple[str, str]:
        """
        get the absolute path of the icon of the hardcoded provider

        :param provider: the name of the provider
        :param tenant_id: the id of the tenant

        :return: the absolute path of the icon, the mime type of the icon
        """
        # get provider
        provider_controller = cls.get_hardcoded_provider(provider)

        absolute_path = path.join(
            path.dirname(path.realpath(__file__)),
            "builtin_tool",
            "providers",
            provider,
            "_assets",
            provider_controller.entity.identity.icon,
        )
        # check if the icon exists
        if not path.exists(absolute_path):
            raise ToolProviderNotFoundError(f"builtin provider {provider} icon not found")

        # get the mime type
        mime_type, _ = mimetypes.guess_type(absolute_path)
        mime_type = mime_type or "application/octet-stream"

        return absolute_path, mime_type

    @classmethod
    def list_hardcoded_providers(cls):
        # use cache first
        if cls._builtin_providers_loaded:
            yield from list(cls._hardcoded_providers.values())
            return

        with cls._builtin_provider_lock:
            if cls._builtin_providers_loaded:
                yield from list(cls._hardcoded_providers.values())
                return

            yield from cls._list_hardcoded_providers()

    @classmethod
    def list_plugin_providers(cls, tenant_id: str) -> list[PluginToolProviderController]:
        """
        list all the plugin providers
        """
        manager = PluginToolManager()
        provider_entities = manager.fetch_tool_providers(tenant_id)
        return [
            PluginToolProviderController(
                entity=provider.declaration,
                plugin_id=provider.plugin_id,
                tenant_id=tenant_id,
            )
            for provider in provider_entities
        ]

    @classmethod
    def list_builtin_providers(
        cls, tenant_id: str
    ) -> Generator[BuiltinToolProviderController | PluginToolProviderController, None, None]:
        """
        list all the builtin providers
        """
        yield from cls.list_hardcoded_providers()
        # get plugin providers
        yield from cls.list_plugin_providers(tenant_id)

    @classmethod
    def _list_hardcoded_providers(cls) -> Generator[BuiltinToolProviderController, None, None]:
        """
        list all the builtin providers
        """
        for provider_path in listdir(path.join(path.dirname(path.realpath(__file__)), "builtin_tool", "providers")):
            if provider_path.startswith("__"):
                continue

            if path.isdir(path.join(path.dirname(path.realpath(__file__)), "builtin_tool", "providers", provider_path)):
                if provider_path.startswith("__"):
                    continue

                # init provider
                try:
                    provider_class = load_single_subclass_from_source(
                        module_name=f"core.tools.builtin_tool.providers.{provider_path}.{provider_path}",
                        script_path=path.join(
                            path.dirname(path.realpath(__file__)),
                            "builtin_tool",
                            "providers",
                            provider_path,
                            f"{provider_path}.py",
                        ),
                        parent_type=BuiltinToolProviderController,
                    )
                    provider: BuiltinToolProviderController = provider_class()
                    cls._hardcoded_providers[provider.entity.identity.name] = provider
                    for tool in provider.get_tools():
                        cls._builtin_tools_labels[tool.entity.identity.name] = tool.entity.identity.label
                    yield provider

                except Exception as e:
                    logger.exception(f"load builtin provider {provider}")
                    continue
        # set builtin providers loaded
        cls._builtin_providers_loaded = True

    @classmethod
    def load_hardcoded_providers_cache(cls):
        for _ in cls.list_hardcoded_providers():
            pass

    @classmethod
    def clear_hardcoded_providers_cache(cls):
        cls._hardcoded_providers = {}
        cls._builtin_providers_loaded = False

    @classmethod
    def get_tool_label(cls, tool_name: str) -> Union[I18nObject, None]:
        """
        get the tool label

        :param tool_name: the name of the tool

        :return: the label of the tool
        """
        if len(cls._builtin_tools_labels) == 0:
            # init the builtin providers
            cls.load_hardcoded_providers_cache()

        if tool_name not in cls._builtin_tools_labels:
            return None

        return cls._builtin_tools_labels[tool_name]

    @classmethod
    def list_providers_from_api(
        cls, user_id: str, tenant_id: str, typ: ToolProviderTypeApiLiteral
    ) -> list[ToolProviderApiEntity]:
        result_providers: dict[str, ToolProviderApiEntity] = {}

        filters = []
        if not typ:
            filters.extend(["builtin", "api", "workflow"])
        else:
            filters.append(typ)

        if "builtin" in filters:
            # get builtin providers
            builtin_providers = cls.list_builtin_providers(tenant_id)

            # get db builtin providers
            db_builtin_providers: list[BuiltinToolProvider] = (
                db.session.query(BuiltinToolProvider).filter(BuiltinToolProvider.tenant_id == tenant_id).all()
            )

            # rewrite db_builtin_providers
            for db_provider in db_builtin_providers:
                tool_provider_id = GenericProviderID(db_provider.provider)
                db_provider.provider = tool_provider_id.to_string()

            find_db_builtin_provider = lambda provider: next(
                (x for x in db_builtin_providers if x.provider == provider), None
            )

            # append builtin providers
            for provider in builtin_providers:
                # handle include, exclude
                if is_filtered(
                    include_set=dify_config.POSITION_TOOL_INCLUDES_SET,  # type: ignore
                    exclude_set=dify_config.POSITION_TOOL_EXCLUDES_SET,  # type: ignore
                    data=provider,
                    name_func=lambda x: x.identity.name,
                ):
                    continue

                user_provider = ToolTransformService.builtin_provider_to_user_provider(
                    provider_controller=provider,
                    db_provider=find_db_builtin_provider(provider.entity.identity.name),
                    decrypt_credentials=False,
                )

                if isinstance(provider, PluginToolProviderController):
                    result_providers[f"plugin_provider.{user_provider.name}"] = user_provider
                else:
                    result_providers[f"builtin_provider.{user_provider.name}"] = user_provider

        # get db api providers

        if "api" in filters:
            db_api_providers: list[ApiToolProvider] = (
                db.session.query(ApiToolProvider).filter(ApiToolProvider.tenant_id == tenant_id).all()
            )

            api_provider_controllers = [
                {"provider": provider, "controller": ToolTransformService.api_provider_to_controller(provider)}
                for provider in db_api_providers
            ]

            # get labels
            labels = ToolLabelManager.get_tools_labels([x["controller"] for x in api_provider_controllers])

            for api_provider_controller in api_provider_controllers:
                user_provider = ToolTransformService.api_provider_to_user_provider(
                    provider_controller=api_provider_controller["controller"],
                    db_provider=api_provider_controller["provider"],
                    decrypt_credentials=False,
                    labels=labels.get(api_provider_controller["controller"].provider_id, []),
                )
                result_providers[f"api_provider.{user_provider.name}"] = user_provider

        if "workflow" in filters:
            # get workflow providers
            workflow_providers: list[WorkflowToolProvider] = (
                db.session.query(WorkflowToolProvider).filter(WorkflowToolProvider.tenant_id == tenant_id).all()
            )

            workflow_provider_controllers = []
            for provider in workflow_providers:
                try:
                    workflow_provider_controllers.append(
                        ToolTransformService.workflow_provider_to_controller(db_provider=provider)
                    )
                except Exception as e:
                    # app has been deleted
                    pass

            labels = ToolLabelManager.get_tools_labels(workflow_provider_controllers)

            for provider_controller in workflow_provider_controllers:
                user_provider = ToolTransformService.workflow_provider_to_user_provider(
                    provider_controller=provider_controller,
                    labels=labels.get(provider_controller.provider_id, []),
                )
                result_providers[f"workflow_provider.{user_provider.name}"] = user_provider

        return BuiltinToolProviderSort.sort(list(result_providers.values()))

    @classmethod
    def get_api_provider_controller(
        cls, tenant_id: str, provider_id: str
    ) -> tuple[ApiToolProviderController, dict[str, Any]]:
        """
        get the api provider

        :param provider_name: the name of the provider

        :return: the provider controller, the credentials
        """
        provider: ApiToolProvider | None = (
            db.session.query(ApiToolProvider)
            .filter(
                ApiToolProvider.id == provider_id,
                ApiToolProvider.tenant_id == tenant_id,
            )
            .first()
        )

        if provider is None:
            raise ToolProviderNotFoundError(f"api provider {provider_id} not found")

        controller = ApiToolProviderController.from_db(
            provider,
            ApiProviderAuthType.API_KEY if provider.credentials["auth_type"] == "api_key" else ApiProviderAuthType.NONE,
        )
        controller.load_bundled_tools(provider.tools)

        return controller, provider.credentials

    @classmethod
    def user_get_api_provider(cls, provider: str, tenant_id: str) -> dict:
        """
        get api provider
        """
        """
            get tool provider
        """
        provider_name = provider
        provider_obj: ApiToolProvider = (
            db.session.query(ApiToolProvider)
            .filter(
                ApiToolProvider.tenant_id == tenant_id,
                ApiToolProvider.name == provider,
            )
            .first()
        )

        if provider_obj is None:
            raise ValueError(f"you have not added provider {provider_name}")

        try:
            credentials = json.loads(provider_obj.credentials_str) or {}
        except:
            credentials = {}

        # package tool provider controller
        controller = ApiToolProviderController.from_db(
            provider_obj,
            ApiProviderAuthType.API_KEY if credentials["auth_type"] == "api_key" else ApiProviderAuthType.NONE,
        )
        # init tool configuration
        tool_configuration = ProviderConfigEncrypter(
            tenant_id=tenant_id,
            config=[x.to_basic_provider_config() for x in controller.get_credentials_schema()],
            provider_type=controller.provider_type.value,
            provider_identity=controller.entity.identity.name,
        )

        decrypted_credentials = tool_configuration.decrypt(credentials)
        masked_credentials = tool_configuration.mask_tool_credentials(decrypted_credentials)

        try:
            icon = json.loads(provider_obj.icon)
        except:
            icon = {"background": "#252525", "content": "\ud83d\ude01"}

        # add tool labels
        labels = ToolLabelManager.get_tool_labels(controller)

        return jsonable_encoder(
            {
                "schema_type": provider_obj.schema_type,
                "schema": provider_obj.schema,
                "tools": provider_obj.tools,
                "icon": icon,
                "description": provider_obj.description,
                "credentials": masked_credentials,
                "privacy_policy": provider_obj.privacy_policy,
                "custom_disclaimer": provider_obj.custom_disclaimer,
                "labels": labels,
            }
        )

    @classmethod
    def get_tool_icon(cls, tenant_id: str, provider_type: ToolProviderType, provider_id: str) -> Union[str, dict]:
        """
        get the tool icon

        :param tenant_id: the id of the tenant
        :param provider_type: the type of the provider
        :param provider_id: the id of the provider
        :return:
        """
        provider_type = provider_type
        provider_id = provider_id
        if provider_type == ToolProviderType.BUILT_IN:
            return (
                dify_config.CONSOLE_API_URL
                + "/console/api/workspaces/current/tool-provider/builtin/"
                + provider_id
                + "/icon"
            )
        elif provider_type == ToolProviderType.API:
            try:
                api_provider: ApiToolProvider | None = (
                    db.session.query(ApiToolProvider)
                    .filter(ApiToolProvider.tenant_id == tenant_id, ApiToolProvider.id == provider_id)
                    .first()
                )
                if not api_provider:
                    raise ValueError("api tool not found")

                return json.loads(api_provider.icon)
            except:
                return {"background": "#252525", "content": "\ud83d\ude01"}
        elif provider_type == ToolProviderType.WORKFLOW:
            workflow_provider: WorkflowToolProvider | None = (
                db.session.query(WorkflowToolProvider)
                .filter(WorkflowToolProvider.tenant_id == tenant_id, WorkflowToolProvider.id == provider_id)
                .first()
            )

            if workflow_provider is None:
                raise ToolProviderNotFoundError(f"workflow provider {provider_id} not found")

            return json.loads(workflow_provider.icon)
        else:
            raise ValueError(f"provider type {provider_type} not found")


ToolManager.load_hardcoded_providers_cache()
