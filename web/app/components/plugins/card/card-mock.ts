import { PluginType } from '../types'

export const toolNotion = {
  id: 'tool-notion',
  type: PluginType.tool,
  org: 'Notion',
  name: 'notion page search',
  version: '1.2.0',
  latest_version: '1.3.0',
  icon: 'https://via.placeholder.com/150',
  label: {
    'en-US': 'Notion Page Search',
    'zh-Hans': 'Notion 页面搜索',
  },
  brief: {
    'en-US': 'Description: Search Notion pages and open visited ones faster. No admin access required.More and more info...More and more info...More and more info...',
    'zh-Hans': '搜索 Notion 页面并更快地打开已访问的页面。无需管理员访问权限。More and more info...More and more info...More and more info...',
  },
}

export const extensionDallE = {
  id: 'extension-dalle',
  type: PluginType.extension,
  org: 'OpenAI',
  name: 'DALL-E',
  version: '1.1.0',
  latest_version: '1.2.0',
  install_count: 1234,
  icon: 'https://via.placeholder.com/150',
  label: {
    'en-US': 'DALL-E',
    'zh-Hans': 'DALL-E',
  },
  brief: {
    'en-US': 'Description: A simple plugin to use OpenAI DALL-E model.',
    'zh-Hans': '一个使用 OpenAI DALL-E 模型的简单插件。',
  },
}

export const modelGPT4 = {
  id: 'model-gpt4',
  type: PluginType.model,
  org: 'OpenAI',
  name: 'GPT-4',
  version: '1.0.0',
  latest_version: '1.0.0',
  install_count: 99999,
  icon: 'https://via.placeholder.com/150',
  label: {
    'en-US': 'GPT-4',
    'zh-Hans': 'GPT-4',
  },
  brief: {
    'en-US': 'Description: A simple plugin to use OpenAI GPT-4 model.',
    'zh-Hans': '一个使用 OpenAI GPT-4 模型的简单插件。',
  },
}
