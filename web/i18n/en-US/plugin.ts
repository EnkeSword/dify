const translation = {
  from: 'From',
  findMoreInMarketplace: 'Find more in Marketplace',
  searchInMarketplace: 'Search in Marketplace',
  fromMarketplace: 'From Marketplace',
  endpointsEnabled: '{{num}} sets of endpoints enabled',
  searchTools: 'Search tools...',
  detailPanel: {
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
    actionNum: '{{num}} ACTIONS INCLUDED',
    endpoints: 'Endpoints',
    endpointsEmpty: 'Click the \'+\' button to add an endpoint',
    endpointDisableTip: 'Disable Endpoint',
    endpointDisableContent: 'Would you like to disable {{name}}? ',
    endpointDeleteTip: 'Remove Endpoint',
    endpointDeleteContent: 'Would you like to remove {{name}}? ',
    endpointModalTitle: 'Setup endpoint',
    endpointModalDesc: 'After configuring form, all members within the workspace can use this endpoint when orchestrating applications.',
    serviceOk: 'Service OK',
    disabled: 'Disabled',
    modelNum: '{{num}} MODELS INCLUDED',
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
    installedSuccessfully: 'Installation successful',
    installedSuccessfullyDesc: 'The plugin has been installed successfully.',
    uploadFailed: 'Upload failed',
    installFailed: 'Installation failed',
    installFailedDesc: 'The plugin has been installed failed.',
    install: 'Install',
    installing: 'Installing...',
    uploadingPackage: 'Uploading {{packageName}}...',
    readyToInstall: 'About to install the following plugin.',
    fromTrustSource: 'Please make sure that you only install plugins from a <trustSource>trusted source</trustSource>.',
    labels: {
      repository: 'Repository',
      version: 'Version',
      package: 'Package',
    },
    close: 'Close',
    cancel: 'Cancel',
    back: 'Back',
    next: 'Next',
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
    title: 'Upgrade Plugin',
    successfulTitle: 'Upgrade successful',
    description: 'About to upgrade the following plugin',
    usedInApps: 'Used in {{num}} apps',
    upgrade: 'Upgrade',
    upgrading: 'Upgrading...',
    close: 'Close',
  },
  error: {
    inValidGitHubUrl: 'Invalid GitHub URL. Please enter a valid URL in the format: https://github.com/owner/repo',
  },
}

export default translation
