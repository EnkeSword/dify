import type { Plugin, PluginDeclaration, PluginManifestInMarket } from '../types'
import type { GitHubUrlInfo } from '@/app/components/plugins/types'

export const pluginManifestToCardPluginProps = (pluginManifest: PluginDeclaration): Plugin => {
  return {
    type: pluginManifest.category,
    category: pluginManifest.category,
    name: pluginManifest.name,
    version: pluginManifest.version,
    latest_version: '',
    org: pluginManifest.author,
    label: pluginManifest.label,
    brief: pluginManifest.description,
    icon: pluginManifest.icon,
    verified: pluginManifest.verified,
    introduction: '',
    repository: '',
    install_count: 0,
    endpoint: {
      settings: [],
    },
    tags: [],
  }
}

export const pluginManifestInMarketToPluginProps = (pluginManifest: PluginManifestInMarket): Plugin => {
  return {
    type: pluginManifest.category,
    category: pluginManifest.category,
    name: pluginManifest.name,
    version: pluginManifest.latest_version,
    latest_version: pluginManifest.latest_version,
    org: pluginManifest.org,
    label: pluginManifest.label,
    brief: pluginManifest.brief,
    icon: pluginManifest.icon,
    verified: pluginManifest.verified,
    introduction: pluginManifest.introduction,
    repository: '',
    install_count: 0,
    endpoint: {
      settings: [],
    },
    tags: [],
  }
}

export const parseGitHubUrl = (url: string): GitHubUrlInfo => {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/)
  return match ? { isValid: true, owner: match[1], repo: match[2] } : { isValid: false }
}
