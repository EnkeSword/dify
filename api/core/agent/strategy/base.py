from abc import ABC, abstractmethod
from typing import Any, Generator, Optional, Sequence

from core.agent.entities import AgentInvokeMessage
from core.agent.plugin_entities import AgentParameter


class BaseAgentStrategy(ABC):
    """
    Agent Strategy
    """

    def invoke(
        self,
        params: dict[str, Any],
        user_id: str,
        conversation_id: Optional[str] = None,
        app_id: Optional[str] = None,
        message_id: Optional[str] = None,
    ) -> Generator[AgentInvokeMessage, None, None]:
        """
        Invoke the agent strategy.
        """
        yield from self._invoke(params, user_id, conversation_id, app_id, message_id)

    def get_parameters(self) -> Sequence[AgentParameter]:
        """
        Get the parameters for the agent strategy.
        """
        return []

    @abstractmethod
    def _invoke(
        self,
        params: dict[str, Any],
        user_id: str,
        conversation_id: Optional[str] = None,
        app_id: Optional[str] = None,
        message_id: Optional[str] = None,
    ) -> Generator[AgentInvokeMessage, None, None]:
        pass
