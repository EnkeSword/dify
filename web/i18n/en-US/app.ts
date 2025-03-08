const translation = {
  createApp: 'CREATE APP',
  types: {
    all: 'All',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Completion',
    advanced: 'Chatflow',
    basic: 'Basic',
  },
  duplicate: 'Duplicate',
  mermaid: {
    handDrawn: 'Hand Drawn',
    classic: 'Classic',
  },
  duplicateTitle: 'Duplicate App',
  export: 'Export DSL',
  exportFailed: 'Export DSL failed.',
  importDSL: 'Import DSL file',
  createFromConfigFile: 'Create from DSL file',
  importFromDSL: 'Import from DSL',
  importFromDSLFile: 'From DSL file',
  importFromDSLUrl: 'From URL',
  importFromDSLUrlPlaceholder: 'Paste DSL link here',
  deleteAppConfirmTitle: 'Delete this app?',
  deleteAppConfirmContent:
    'Deleting the app is irreversible. Users will no longer be able to access your app, and all prompt configurations and logs will be permanently deleted.',
  appDeleted: 'App deleted',
  appDeleteFailed: 'Failed to delete app',
  join: 'Join the community',
  communityIntro:
    'Discuss with team members, contributors and developers on different channels.',
  roadmap: 'See our roadmap',
  newApp: {
    learnMore: 'Learn more',
    startFromBlank: 'Create from Blank',
    startFromTemplate: 'Create from Template',
    foundResult: '{{count}} Result',
    foundResults: '{{count}} Results',
    noAppsFound: 'No apps found',
    noTemplateFound: 'No templates found',
    noTemplateFoundTip: 'Try searching using different keywords.',
    chatbotShortDescription: 'LLM-based chatbot with simple setup',
    chatbotUserDescription: 'Quickly build an LLM-based chatbot with simple configuration. You can switch to Chatflow later.',
    completionShortDescription: 'AI assistant for text generation tasks',
    completionUserDescription: 'Quickly build an AI assistant for text generation tasks with simple configuration.',
    agentShortDescription: 'Intelligent agent with reasoning and autonomous tool use',
    agentUserDescription: 'An intelligent agent capable of iterative reasoning and autonomous tool use to achieve task goals.',
    workflowShortDescription: 'Orchestration for single-turn automation tasks',
    workflowUserDescription: 'Workflow orchestration for single-round tasks like automation and batch processing.',
    workflowWarning: 'Currently in beta',
    advancedShortDescription: 'Workflow for complex multi-turn dialogues with memory',
    advancedUserDescription: 'Workflow orchestration for multi-round complex dialogue tasks with memory capabilities.',
    chooseAppType: 'Choose App Type',
    forBeginners: 'FOR BEGINNERS',
    forAdvanced: 'FOR ADVANCED USERS',
    noIdeaTip: 'No ideas? Check out our templates',
    captionName: 'App Name & Icon',
    appNamePlaceholder: 'Give your app a name',
    captionDescription: 'Description',
    optional: 'Optional',
    appDescriptionPlaceholder: 'Enter the description of the app',
    useTemplate: 'Use this template',
    previewDemo: 'Preview demo',
    chatApp: 'Assistant',
    chatAppIntro:
      'I want to build a chat-based application. This app uses a question-and-answer format, allowing for multiple rounds of continuous conversation.',
    agentAssistant: 'New Agent Assistant',
    completeApp: 'Text Generator',
    completeAppIntro:
      'I want to create an application that generates high-quality text based on prompts, such as generating articles, summaries, translations, and more.',
    showTemplates: 'I want to choose from a template',
    hideTemplates: 'Go back to mode selection',
    Create: 'Create',
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    nameNotEmpty: 'Name cannot be empty',
    appTemplateNotSelected: 'Please select a template',
    appTypeRequired: 'Please select an app type',
    appCreated: 'App created',
    caution: 'Caution',
    appCreateDSLWarning: 'Caution: DSL version difference may affect certain features',
    appCreateDSLErrorTitle: 'Version Incompatibility',
    appCreateDSLErrorPart1: 'A significant difference in DSL versions has been detected. Forcing the import may cause the application to malfunction.',
    appCreateDSLErrorPart2: 'Do you want to continue?',
    appCreateDSLErrorPart3: 'Current application DSL version: ',
    appCreateDSLErrorPart4: 'System-supported DSL version: ',
    appCreateFailed: 'Failed to create app',
  },
  newAppFromTemplate: {
    byCategories: 'BY CATEGORIES',
    searchAllTemplate: 'Search all templates...',
    sidebar: {
      Recommended: 'Recommended',
      Agent: 'Agent',
      Assistant: 'Assistant',
      HR: 'HR',
      Workflow: 'Workflow',
      Writing: 'Writing',
      Programming: 'Programming',
    },
  },
  editApp: 'Edit Info',
  editAppTitle: 'Edit App Info',
  editDone: 'App info updated',
  editFailed: 'Failed to update app info',
  iconPicker: {
    ok: 'OK',
    cancel: 'Cancel',
    emoji: 'Emoji',
    image: 'Image',
  },
  answerIcon: {
    title: 'Use WebApp icon to replace 🤖',
    description: 'Whether to use the WebApp icon to replace 🤖 in the shared application',
    descriptionInExplore: 'Whether to use the WebApp icon to replace 🤖 in Explore',
  },
  switch: 'Switch to Workflow Orchestrate',
  switchTipStart: 'A new app copy will be created for you, and the new copy will switch to Workflow Orchestrate. The new copy will ',
  switchTip: 'not allow',
  switchTipEnd: ' switching back to Basic Orchestrate.',
  switchLabel: 'The app copy to be created',
  removeOriginal: 'Delete the original app',
  switchStart: 'Start switch',
  openInExplore: 'Open in Explore',
  typeSelector: {
    all: 'All Types ',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Completion',
    advanced: 'Chatflow',
  },
  tracing: {
    title: 'Tracing app performance',
    description: 'Configuring a Third-Party LLMOps provider and tracing app performance.',
    config: 'Config',
    view: 'View',
    collapse: 'Collapse',
    expand: 'Expand',
    tracing: 'Tracing',
    disabled: 'Disabled',
    disabledTip: 'Please config provider first',
    enabled: 'In Service',
    tracingDescription: 'Capture the full context of app execution, including LLM calls, context, prompts, HTTP requests, and more, to a third-party tracing platform.',
    configProviderTitle: {
      configured: 'Configured',
      notConfigured: 'Config provider to enable tracing',
      moreProvider: 'More Provider',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'An all-in-one developer platform for every step of the LLM-powered application lifecycle.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Open-source LLM observability, evaluation, prompt management and metrics to debug and improve your LLM application.',
    },
    opik: {
      title: 'Opik',
      description: 'Opik is an open-source platform for evaluating, testing, and monitoring LLM applications.',
    },
    inUse: 'In use',
    configProvider: {
      title: 'Config ',
      placeholder: 'Enter your {{key}}',
      project: 'Project',
      publicKey: 'Public Key',
      secretKey: 'Secret Key',
      viewDocsLink: 'View {{key}} docs',
      removeConfirmTitle: 'Remove {{key}} configuration?',
      removeConfirmContent: 'The current configuration is in use, removing it will turn off the Tracing feature.',
    },
  },
  appSelector: {
    label: 'APP',
    placeholder: 'Select an app...',
    params: 'APP PARAMETERS',
    noParams: 'No parameters needed',
  },
  showMyCreatedAppsOnly: 'Created by me',
}

export default translation
