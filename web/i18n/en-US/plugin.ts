const translation = {
  category: {
    all: 'All',
    models: 'Models',
    tools: 'Tools',
    agents: 'Agent Strategies',
    extensions: 'Extensions',
    bundles: 'Bundles',
  },
  categorySingle: {
    model: 'Model',
    tool: 'Tool',
    agent: 'Agent Strategy',
    extension: 'Extension',
    bundle: 'Bundle',
  },
  search: 'Search',
  allCategories: 'All Categories',
  searchCategories: 'Search Categories',
  searchPlugins: 'Search plugins',
  from: 'From',
  findMoreInMarketplace: 'Find more in Marketplace',
  searchInMarketplace: 'Search in Marketplace',
  fromMarketplace: 'From Marketplace',
  endpointsEnabled: '{{num}} sets of endpoints enabled',
  searchTools: 'Search tools...',
  installPlugin: 'Install plugin',
  installFrom: 'INSTALL FROM',
  list: {
    noInstalled: 'No plugins installed',
    notFound: 'No plugins found',
    source: {
      marketplace: 'Install from Marketplace',
      github: 'Install from GitHub',
      local: 'Install from Local Package File',
    },
  },
  source: {
    marketplace: 'Marketplace',
    github: 'GitHub',
    local: 'Local Package File',
  },
  detailPanel: {
    switchVersion: 'Switch Version',
    categoryTip: {
      marketplace: 'Installed from Marketplace',
      github: 'Installed from Github',
      local: 'Local Plugin',
      debugging: 'Debugging Plugin',
    },
    operation: {
      install: 'Install',
      detail: 'Details',
      update: 'Update',
      info: 'Plugin Info',
      checkUpdate: 'Check Update',
      viewDetail: 'View Detail',
      remove: 'Remove',
    },
    actionNum: '{{num}} {{action}} INCLUDED',
    strategyNum: '{{num}} {{strategy}} INCLUDED',
    endpoints: 'Endpoints',
    endpointsTip: 'This plugin provides specific functionalities via endpoints, and you can configure multiple endpoint sets for current workspace.',
    endpointsDocLink: 'View the document',
    endpointsEmpty: 'Click the \'+\' button to add an endpoint',
    endpointDisableTip: 'Disable Endpoint',
    endpointDisableContent: 'Would you like to disable {{name}}? ',
    endpointDeleteTip: 'Remove Endpoint',
    endpointDeleteContent: 'Would you like to remove {{name}}? ',
    endpointModalTitle: 'Setup endpoint',
    endpointModalDesc: 'Once configured, the features provided by the plugin via API endpoints can be used.',
    serviceOk: 'Service OK',
    disabled: 'Disabled',
    modelNum: '{{num}} MODELS INCLUDED',
    toolSelector: {
      title: 'Add tool',
      toolLabel: 'Tool',
      descriptionLabel: 'Tool description',
      descriptionPlaceholder: 'Brief description of the tool\'s purpose, e.g., get the temperature for a specific location.',
      placeholder: 'Select a tool...',
      settings: 'USER SETTINGS',
      params: 'REASONING CONFIG',
      paramsTip1: 'Controls LLM inference parameters.',
      paramsTip2: 'When \'Automatic\' is off, the default value is used.',
      empty: 'Click the \'+\' button to add tools. You can add multiple tools.',
      uninstalledTitle: 'Tool not installed',
      uninstalledContent: 'This plugin is installed from the local/GitHub repository. Please use after installation.',
      uninstalledLink: 'Manage in Plugins',
      unsupportedTitle: 'Unsupported Action',
      unsupportedContent: 'The installed plugin version does not provide this action.',
      unsupportedContent2: 'Click to switch version.',
    },
    configureApp: 'Configure App',
    configureModel: 'Configure model',
    configureTool: 'Configure tool',
  },
  install: '{{num}} installs',
  installAction: 'Install',
  debugInfo: {
    title: 'Debugging',
    viewDocs: 'View Docs',
  },
  privilege: {
    title: 'Plugin Preferences',
    whoCanInstall: 'Who can install and manage plugins?',
    whoCanDebug: 'Who can debug plugins?',
    everyone: 'Everyone',
    admins: 'Admins',
    noone: 'No one',
  },
  pluginInfoModal: {
    title: 'Plugin info',
    repository: 'Repository',
    release: 'Release',
    packageName: 'Package',
  },
  action: {
    checkForUpdates: 'Check for updates',
    pluginInfo: 'Plugin info',
    delete: 'Remove plugin',
    deleteContentLeft: 'Would you like to remove ',
    deleteContentRight: ' plugin?',
    usedInApps: 'This plugin is being used in {{num}} apps.',
  },
  installModal: {
    installPlugin: 'Install Plugin',
    installComplete: 'Installation complete',
    installedSuccessfully: 'Installation successful',
    installedSuccessfullyDesc: 'The plugin has been installed successfully.',
    uploadFailed: 'Upload failed',
    installFailed: 'Installation failed',
    installFailedDesc: 'The plugin has been installed failed.',
    install: 'Install',
    installing: 'Installing...',
    uploadingPackage: 'Uploading {{packageName}}...',
    readyToInstall: 'About to install the following plugin',
    readyToInstallPackage: 'About to install the following plugin',
    readyToInstallPackages: 'About to install the following {{num}} plugins',
    fromTrustSource: 'Please make sure that you only install plugins from a <trustSource>trusted source</trustSource>.',
    dropPluginToInstall: 'Drop plugin package here to install',
    labels: {
      repository: 'Repository',
      version: 'Version',
      package: 'Package',
    },
    close: 'Close',
    cancel: 'Cancel',
    back: 'Back',
    next: 'Next',
    pluginLoadError: 'Plugin load error',
    pluginLoadErrorDesc: 'This plugin will not be installed',
  },
  installFromGitHub: {
    installPlugin: 'Install plugin from GitHub',
    updatePlugin: 'Update plugin from GitHub',
    installedSuccessfully: 'Installation successful',
    installFailed: 'Installation failed',
    uploadFailed: 'Upload failed',
    gitHubRepo: 'GitHub repository',
    selectVersion: 'Select version',
    selectVersionPlaceholder: 'Please select a version',
    installNote: 'Please make sure that you only install plugins from a trusted source.',
    selectPackage: 'Select package',
    selectPackagePlaceholder: 'Please select a package',
  },
  upgrade: {
    title: 'Install Plugin',
    successfulTitle: 'Install successful',
    description: 'About to install the following plugin',
    usedInApps: 'Used in {{num}} apps',
    upgrade: 'Install',
    upgrading: 'Installing...',
    close: 'Close',
  },
  error: {
    inValidGitHubUrl: 'Invalid GitHub URL. Please enter a valid URL in the format: https://github.com/owner/repo',
    fetchReleasesError: 'Unable to retrieve releases. Please try again later.',
    noReleasesFound: 'No releases found. Please check the GitHub repository or the input URL.',
  },
  marketplace: {
    empower: 'Empower your AI development',
    discover: 'Discover',
    and: 'and',
    difyMarketplace: 'Dify Marketplace',
    moreFrom: 'More from Marketplace',
    noPluginFound: 'No plugin found',
    pluginsResult: '{{num}} results',
    sortBy: 'Sort by',
    sortOption: {
      mostPopular: 'Most Popular',
      recentlyUpdated: 'Recently Updated',
      newlyReleased: 'Newly Released',
      firstReleased: 'First Released',
    },
    viewMore: 'View more',
  },
  task: {
    installing: 'Installing {{installingLength}} plugins, 0 done.',
    installingWithSuccess: 'Installing {{installingLength}} plugins, {{successLength}} success.',
    installingWithError: 'Installing {{installingLength}} plugins, {{successLength}} success, {{errorLength}} failed',
    installError: '{{errorLength}} plugins failed to install, click to view',
    installedError: '{{errorLength}} plugins failed to install',
    clearAll: 'Clear all',
  },
  submitPlugin: 'Submit plugin',
}

export default translation
