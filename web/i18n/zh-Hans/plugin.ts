const translation = {
  category: {
    all: '全部',
    models: '模型',
    tools: '工具',
    extensions: '扩展',
    bundles: '捆绑包',
  },
  search: '搜索',
  allCategories: '所有类别',
  searchCategories: '搜索类别',
  searchPlugins: '搜索插件',
  from: '来自',
  findMoreInMarketplace: '在 Marketplace 中查找更多',
  searchInMarketplace: '在 Marketplace 中搜索',
  fromMarketplace: '来自市场',
  endpointsEnabled: '{{num}} 组端点已启用',
  searchTools: '搜索工具...',
  detailPanel: {
    categoryTip: {
      marketplace: '从 Marketplace 安装',
      github: '从 Github 安装',
      local: '本地插件',
      debugging: '调试插件',
    },
    operation: {
      install: '安装',
      detail: '详情',
      update: '更新',
      info: '插件信息',
      checkUpdate: '检查更新',
      viewDetail: '查看详情',
      remove: '移除',
    },
    actionNum: '{{num}} ACTIONS 已包含',
    endpoints: 'Endpoints',
    endpointsEmpty: '点击 \'+\' 按钮添加 Endpoint',
    endpointDisableTip: '停用 Endpoint',
    endpointDisableContent: '是否要停用 {{name}} 的 Endpoint ？',
    endpointDeleteTip: '移除 Endpoint',
    endpointDeleteContent: '是否要移除 {{name}} ？',
    endpointModalTitle: '设置 Endpoint',
    endpointModalDesc: '配置表单后，工作区内的所有成员都可以在编排应用时使用此端点。',
    serviceOk: '服务正常',
    disabled: '停用',
    modelNum: '{{num}} 模型已包含',
  },
  install: '{{num}} 次安装',
  installAction: '安装',
  debugInfo: {
    title: '调试',
    viewDocs: '查看文档',
  },
  privilege: {
    title: '插件偏好',
    whoCanInstall: '谁可以安装和管理插件？',
    whoCanDebug: '谁可以调试插件？',
    everyone: '所有人',
    admins: '管理员',
    noone: '无人',
  },
  pluginInfoModal: {
    title: '插件信息',
    repository: '仓库',
    release: '发布版本',
    packageName: '包',
  },
  action: {
    checkForUpdates: '检查更新',
    pluginInfo: '插件信息',
    delete: '移除插件',
    deleteContentLeft: '是否要移除 ',
    deleteContentRight: ' 插件?',
    usedInApps: '此插件正在 {{num}} 个应用中使用。',
  },
  installModal: {
    installPlugin: '安装插件',
    installedSuccessfully: '安装成功',
    installedSuccessfullyDesc: '插件已成功安装。',
    uploadFailed: '上传失败',
    installFailed: '安装失败',
    installFailedDesc: '插件安装失败。',
    install: '安装',
    installing: '安装中...',
    uploadingPackage: '上传 {{packageName}} 中...',
    readyToInstall: '即将安装以下插件',
    readyToInstallPackage: '即将安装以下插件',
    readyToInstallPackages: '即将安装以下 {{num}} 个插件',
    fromTrustSource: '请保证仅从<trustSource>可信源</trustSource>安装插件。',
    labels: {
      repository: '仓库',
      version: '版本',
      package: '包',
    },
    close: '关闭',
    cancel: '取消',
    back: '返回',
    next: '下一步',
  },
  installFromGitHub: {
    installPlugin: '从 GitHub 安装插件',
    updatePlugin: '更新来自 GitHub 的插件',
    installedSuccessfully: '安装成功',
    installFailed: '安装失败',
    uploadFailed: '上传失败',
    gitHubRepo: 'GitHub 仓库',
    selectVersion: '选择版本',
    selectVersionPlaceholder: '请选择一个版本',
    installNote: '请确保只从可信源安装插件。',
    selectPackage: '选择包',
    selectPackagePlaceholder: '请选择一个包',
  },
  upgrade: {
    title: '升级插件',
    successfulTitle: '升级成功',
    description: '即将升级以下插件',
    usedInApps: '在 {{num}} 个应用中使用',
    upgrade: '升级',
    upgrading: '升级中...',
    close: '关闭',
  },
  error: {
    inValidGitHubUrl: '无效的 GitHub URL。请输入格式为 https://github.com/owner/repo 的有效 URL',
  },
  marketplace: {
    empower: '助力您的 AI 开发',
    discover: '探索',
    and: '和',
    inDifyMarketplace: '在 Dify 市场中',
    moreFrom: '更多来自市场',
    noPluginFound: '未找到插件',
    pluginsResult: '{{num}} 个插件结果',
    sortBy: '排序方式',
    sortOption: {
      mostPopular: '最受欢迎',
      recentlyUpdated: '最近更新',
      newlyReleased: '最新发布',
      firstReleased: '首次发布',
    },
  },
  task: {
    installing: '{{installingLength}}/{{totalLength}} 插件安装中...',
    installingWithError: '{{installingLength}}/{{totalLength}} 插件安装中，{{errorLength}} 安装失败。点击查看',
    installError: '{{errorLength}} 个插件安装失败，点击查看',
    installedError: '{{errorLength}} 个插件安装失败',
  },
}

export default translation
