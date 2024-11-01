from typing import Optional

from yarl import URL

from core.entities.embedding_type import EmbeddingInputType
from core.model_runtime.entities.text_embedding_entities import (
    TextEmbeddingResult,
)
from core.model_runtime.model_providers.openai_api_compatible.text_embedding.text_embedding import (
    OAICompatEmbeddingModel,
)


class GPUStackTextEmbeddingModel(OAICompatEmbeddingModel):
    """
    Model class for GPUStack text embedding model.
    """

    def _invoke(
        self,
        model: str,
        credentials: dict,
        texts: list[str],
        user: Optional[str] = None,
        input_type: EmbeddingInputType = EmbeddingInputType.DOCUMENT,
    ) -> TextEmbeddingResult:
        return super()._invoke(model, credentials, texts, user, input_type)

    def validate_credentials(self, model: str, credentials: dict) -> None:
        self._add_custom_parameters(credentials)
        super().validate_credentials(model, credentials)

    @staticmethod
    def _add_custom_parameters(credentials: dict) -> None:
        credentials["endpoint_url"] = str(URL(credentials["endpoint_url"]) / "v1-openai")
