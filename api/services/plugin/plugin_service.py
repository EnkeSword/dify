from collections.abc import Sequence
from mimetypes import guess_type

from configs import dify_config
from core.helper.download import download_with_size_limit
from core.helper.marketplace import download_plugin_pkg
from core.plugin.entities.plugin import PluginDeclaration, PluginEntity, PluginInstallationSource
from core.plugin.entities.plugin_daemon import PluginInstallTask, PluginUploadResponse
from core.plugin.manager.asset import PluginAssetManager
from core.plugin.manager.debugging import PluginDebuggingManager
from core.plugin.manager.plugin import PluginInstallationManager


class PluginService:
    @staticmethod
    def get_debugging_key(tenant_id: str) -> str:
        """
        get the debugging key of the tenant
        """
        manager = PluginDebuggingManager()
        return manager.get_debugging_key(tenant_id)

    @staticmethod
    def list(tenant_id: str) -> list[PluginEntity]:
        """
        list all plugins of the tenant
        """
        manager = PluginInstallationManager()
        return manager.list_plugins(tenant_id)

    @staticmethod
    def get_asset(tenant_id: str, asset_file: str) -> tuple[bytes, str]:
        """
        get the asset file of the plugin
        """
        manager = PluginAssetManager()
        # guess mime type
        mime_type, _ = guess_type(asset_file)
        return manager.fetch_asset(tenant_id, asset_file), mime_type or "application/octet-stream"

    @staticmethod
    def check_plugin_unique_identifier(tenant_id: str, plugin_unique_identifier: str) -> bool:
        """
        check if the plugin unique identifier is already installed by other tenant
        """
        manager = PluginInstallationManager()
        return manager.fetch_plugin_by_identifier(tenant_id, plugin_unique_identifier)

    @staticmethod
    def fetch_plugin_manifest(tenant_id: str, plugin_unique_identifier: str) -> PluginDeclaration:
        manager = PluginInstallationManager()
        return manager.fetch_plugin_manifest(tenant_id, plugin_unique_identifier)

    @staticmethod
    def fetch_install_tasks(tenant_id: str, page: int, page_size: int) -> Sequence[PluginInstallTask]:
        manager = PluginInstallationManager()
        return manager.fetch_plugin_installation_tasks(tenant_id, page, page_size)

    @staticmethod
    def fetch_install_task(tenant_id: str, task_id: str) -> PluginInstallTask:
        manager = PluginInstallationManager()
        return manager.fetch_plugin_installation_task(tenant_id, task_id)

    @staticmethod
    def delete_install_task(tenant_id: str, task_id: str) -> bool:
        manager = PluginInstallationManager()
        return manager.delete_plugin_installation_task(tenant_id, task_id)

    @staticmethod
    def upload_pkg(tenant_id: str, pkg: bytes, verify_signature: bool = False) -> PluginUploadResponse:
        """
        Upload plugin package files

        returns: plugin_unique_identifier
        """
        manager = PluginInstallationManager()
        return manager.upload_pkg(tenant_id, pkg, verify_signature)

    @staticmethod
    def upload_pkg_from_github(
        tenant_id: str, repo: str, version: str, package: str, verify_signature: bool = False
    ) -> PluginUploadResponse:
        """
        Install plugin from github release package files,
        returns plugin_unique_identifier
        """
        pkg = download_with_size_limit(
            f"https://github.com/{repo}/releases/download/{version}/{package}", dify_config.PLUGIN_MAX_PACKAGE_SIZE
        )

        manager = PluginInstallationManager()
        return manager.upload_pkg(
            tenant_id,
            pkg,
            verify_signature,
        )

    @staticmethod
    def install_from_local_pkg(tenant_id: str, plugin_unique_identifiers: Sequence[str]):
        manager = PluginInstallationManager()
        return manager.install_from_identifiers(
            tenant_id,
            plugin_unique_identifiers,
            PluginInstallationSource.Package,
            {},
        )

    @staticmethod
    def install_from_github(tenant_id: str, plugin_unique_identifier: str, repo: str, version: str, package: str):
        """
        Install plugin from github release package files,
        returns plugin_unique_identifier
        """
        manager = PluginInstallationManager()
        return manager.install_from_identifiers(
            tenant_id,
            [plugin_unique_identifier],
            PluginInstallationSource.Github,
            {
                "repo": repo,
                "version": version,
                "package": package,
            },
        )

    @staticmethod
    def install_from_marketplace_pkg(
        tenant_id: str, plugin_unique_identifiers: Sequence[str], verify_signature: bool = False
    ):
        """
        Install plugin from marketplace package files,
        returns installation task id
        """
        manager = PluginInstallationManager()

        # check if already downloaded
        for plugin_unique_identifier in plugin_unique_identifiers:
            try:
                manager.fetch_plugin_manifest(tenant_id, plugin_unique_identifier)
                # already downloaded, skip
            except Exception:
                # plugin not installed, download and upload pkg
                pkg = download_plugin_pkg(plugin_unique_identifier)
                manager.upload_pkg(tenant_id, pkg, verify_signature)

        return manager.install_from_identifiers(
            tenant_id,
            plugin_unique_identifiers,
            PluginInstallationSource.Marketplace,
            {
                "plugin_unique_identifier": plugin_unique_identifier,
            },
        )

    @staticmethod
    def uninstall(tenant_id: str, plugin_installation_id: str) -> bool:
        manager = PluginInstallationManager()
        return manager.uninstall(tenant_id, plugin_installation_id)
