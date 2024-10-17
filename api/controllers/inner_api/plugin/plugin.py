from flask_restful import Resource

from controllers.console.setup import setup_required
from controllers.inner_api import api
from controllers.inner_api.plugin.wraps import get_tenant, plugin_data
from controllers.inner_api.wraps import plugin_inner_api_only
from core.plugin.backwards_invocation.app import PluginAppBackwardsInvocation
from core.plugin.backwards_invocation.base import BaseBackwardsInvocationResponse
from core.plugin.backwards_invocation.encrypt import PluginEncrypter
from core.plugin.backwards_invocation.model import PluginModelBackwardsInvocation
from core.plugin.backwards_invocation.node import PluginNodeBackwardsInvocation
from core.plugin.backwards_invocation.tool import PluginToolBackwardsInvocation
from core.plugin.entities.request import (
    RequestInvokeApp,
    RequestInvokeEncrypt,
    RequestInvokeLLM,
    RequestInvokeModeration,
    RequestInvokeParameterExtractorNode,
    RequestInvokeQuestionClassifierNode,
    RequestInvokeRerank,
    RequestInvokeSpeech2Text,
    RequestInvokeTextEmbedding,
    RequestInvokeTool,
    RequestInvokeTTS,
)
from core.tools.entities.tool_entities import ToolProviderType
from libs.helper import compact_generate_response
from models.account import Tenant


class PluginInvokeLLMApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeLLM)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeLLM):
        def generator():
            response = PluginModelBackwardsInvocation.invoke_llm(user_id, tenant_model, payload)
            return PluginModelBackwardsInvocation.convert_to_event_stream(response)

        return compact_generate_response(generator())


class PluginInvokeTextEmbeddingApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeTextEmbedding)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeTextEmbedding):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginModelBackwardsInvocation.invoke_text_embedding(
                    user_id=user_id,
                    tenant=tenant_model,
                    payload=payload,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeRerankApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeRerank)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeRerank):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginModelBackwardsInvocation.invoke_rerank(
                    user_id=user_id,
                    tenant=tenant_model,
                    payload=payload,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeTTSApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeTTS)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeTTS):
        def generator():
            response = PluginModelBackwardsInvocation.invoke_tts(
                user_id=user_id,
                tenant=tenant_model,
                payload=payload,
            )
            return PluginModelBackwardsInvocation.convert_to_event_stream(response)

        return compact_generate_response(generator())


class PluginInvokeSpeech2TextApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeSpeech2Text)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeSpeech2Text):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginModelBackwardsInvocation.invoke_speech2text(
                    user_id=user_id,
                    tenant=tenant_model,
                    payload=payload,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeModerationApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeModeration)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeModeration):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginModelBackwardsInvocation.invoke_moderation(
                    user_id=user_id,
                    tenant=tenant_model,
                    payload=payload,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeToolApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeTool)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeTool):
        def generator():
            return PluginToolBackwardsInvocation.convert_to_event_stream(
                PluginToolBackwardsInvocation.invoke_tool(
                    tenant_id=tenant_model.id,
                    user_id=user_id,
                    tool_type=ToolProviderType.value_of(payload.tool_type),
                    provider=payload.provider,
                    tool_name=payload.tool,
                    tool_parameters=payload.tool_parameters,
                ),
            )

        return compact_generate_response(generator())


class PluginInvokeParameterExtractorNodeApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeParameterExtractorNode)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeParameterExtractorNode):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginNodeBackwardsInvocation.invoke_parameter_extractor(
                    tenant_id=tenant_model.id,
                    user_id=user_id,
                    parameters=payload.parameters,
                    model_config=payload.model,
                    instruction=payload.instruction,
                    query=payload.query,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeQuestionClassifierNodeApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeQuestionClassifierNode)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeQuestionClassifierNode):
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginNodeBackwardsInvocation.invoke_question_classifier(
                    tenant_id=tenant_model.id,
                    user_id=user_id,
                    query=payload.query,
                    model_config=payload.model,
                    classes=payload.classes,
                    instruction=payload.instruction,
                )
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


class PluginInvokeAppApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeApp)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeApp):
        response = PluginAppBackwardsInvocation.invoke_app(
            app_id=payload.app_id,
            user_id=user_id,
            tenant_id=tenant_model.id,
            conversation_id=payload.conversation_id,
            query=payload.query,
            stream=payload.response_mode == "streaming",
            inputs=payload.inputs,
            files=payload.files,
        )

        return compact_generate_response(PluginAppBackwardsInvocation.convert_to_event_stream(response))


class PluginInvokeEncryptApi(Resource):
    @setup_required
    @plugin_inner_api_only
    @get_tenant
    @plugin_data(payload_type=RequestInvokeEncrypt)
    def post(self, user_id: str, tenant_model: Tenant, payload: RequestInvokeEncrypt):
        """
        encrypt or decrypt data
        """
        try:
            return BaseBackwardsInvocationResponse(
                data=PluginEncrypter.invoke_encrypt(tenant_model, payload)
            ).model_dump()
        except Exception as e:
            return BaseBackwardsInvocationResponse(error=str(e)).model_dump()


api.add_resource(PluginInvokeLLMApi, "/invoke/llm")
api.add_resource(PluginInvokeTextEmbeddingApi, "/invoke/text-embedding")
api.add_resource(PluginInvokeRerankApi, "/invoke/rerank")
api.add_resource(PluginInvokeTTSApi, "/invoke/tts")
api.add_resource(PluginInvokeSpeech2TextApi, "/invoke/speech2text")
api.add_resource(PluginInvokeModerationApi, "/invoke/moderation")
api.add_resource(PluginInvokeToolApi, "/invoke/tool")
api.add_resource(PluginInvokeParameterExtractorNodeApi, "/invoke/parameter-extractor")
api.add_resource(PluginInvokeQuestionClassifierNodeApi, "/invoke/question-classifier")
api.add_resource(PluginInvokeAppApi, "/invoke/app")
api.add_resource(PluginInvokeEncryptApi, "/invoke/encrypt")
