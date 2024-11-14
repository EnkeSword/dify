const translation = {
  createApp: '创建应用',
  types: {
    all: '全部',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文本生成',
  },
  duplicate: '复制',
  duplicateTitle: '复制应用',
  export: '导出 DSL',
  exportFailed: '导出 DSL 失败',
  importDSL: '导入 DSL 文件',
  createFromConfigFile: '通过 DSL 文件创建',
  importFromDSL: '导入 DSL',
  importFromDSLFile: '文件',
  importFromDSLUrl: 'URL',
  importFromDSLUrlPlaceholder: '输入 DSL 文件的 URL',
  deleteAppConfirmTitle: '确认删除应用?',
  deleteAppConfirmContent:
    '删除应用将无法撤销。用户将不能访问你的应用，所有 Prompt 编排配置和日志均将一并被删除。',
  appDeleted: '应用已删除',
  appDeleteFailed: '应用删除失败',
  join: '参与社区',
  communityIntro: '与团队成员、贡献者和开发者在不同频道中交流',
  roadmap: '产品路线图',
  newApp: {
    startFromBlank: '创建空白应用',
    startFromTemplate: '从应用模版创建',
    captionAppType: '想要哪种应用类型？',
    chatbotDescription: '使用大型语言模型构建基于聊天的助手',
    completionDescription: '构建一个根据提示生成高质量文本的应用程序，例如生成文章、摘要、翻译等。',
    completionWarning: '该类型不久后将不再支持创建',
    agentDescription: '构建一个智能Agent，可以自主选择工具来完成任务',
    workflowDescription: '以工作流的形式编排生成型应用，提供更多的自定义能力。 它适合有经验的用户。',
    workflowWarning: '正在进行 Beta 测试',
    chatbotType: '聊天助手编排方法',
    basic: '基础编排',
    basicTip: '新手适用，可以切换成工作流编排',
    basicFor: '新手适用',
    basicDescription: '基本编排允许使用简单的设置编排聊天机器人应用程序，而无需修改内置提示。 它适合初学者。',
    advanced: '工作流编排',
    advancedFor: '进阶用户适用',
    advancedDescription: '工作流编排以工作流的形式编排聊天机器人，提供高度的自定义，包括编辑内置提示的能力。 它适合有经验的用户。',
    captionName: '图标 & 名称',
    appNamePlaceholder: '给你的应用起个名字',
    captionDescription: '描述',
    appDescriptionPlaceholder: '输入应用的描述',
    useTemplate: '使用该模板',
    previewDemo: '预览 Demo',
    chatApp: '助手',
    chatAppIntro:
      '我要构建一个聊天场景的应用。该应用采用一问一答模式与用户持续对话。',
    agentAssistant: '新的智能助手',
    completeApp: '文本生成应用',
    completeAppIntro:
      '我要构建一个根据提示生成高质量文本的应用，例如生成文章、摘要、翻译等',
    showTemplates: '我想从范例模板中选择',
    hideTemplates: '返回应用类型选择',
    Create: '创建',
    Cancel: '取消',
    nameNotEmpty: '名称不能为空',
    appTemplateNotSelected: '请选择应用模版',
    appTypeRequired: '请选择应用类型',
    appCreated: '应用已创建',
    appCreateFailed: '应用创建失败',
  },
  editApp: '编辑信息',
  editAppTitle: '编辑应用信息',
  editDone: '应用信息已更新',
  editFailed: '更新应用信息失败',
  iconPicker: {
    ok: '确认',
    cancel: '取消',
    emoji: '表情符号',
    image: '图片',
  },
  answerIcon: {
    title: '使用 WebApp 图标替换 🤖',
    description: '是否使用 WebApp 图标替换分享的应用界面中的 🤖',
    descriptionInExplore: '是否使用 WebApp 图标替换 Explore 界面中的 🤖',
  },
  switch: '迁移为工作流编排',
  switchTipStart: '将为您创建一个使用工作流编排的新应用。新应用将',
  switchTip: '不能够',
  switchTipEnd: '迁移回基础编排',
  switchLabel: '新应用创建为',
  removeOriginal: '删除原应用',
  switchStart: '开始迁移',
  typeSelector: {
    all: '所有类型',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文本生成',
  },
  tracing: {
    title: '追踪应用性能',
    description: '配置第三方 LLMOps 提供商并跟踪应用程序性能。',
    config: '配置',
    view: '查看',
    collapse: '折叠',
    expand: '展开',
    tracing: '追踪',
    disabled: '已禁用',
    disabledTip: '请先配置提供商',
    enabled: '已启用',
    tracingDescription: '捕获应用程序执行的完整上下文，包括 LLM 调用、上下文、提示、HTTP 请求等，发送到第三方跟踪平台。',
    configProviderTitle: {
      configured: '已配置',
      notConfigured: '配置提供商以启用追踪',
      moreProvider: '更多提供商',
    },
    langsmith: {
      title: 'LangSmith',
      description: '一个全方位的开发者平台，适用于 LLM 驱动应用程序生命周期的每个步骤。',
    },
    langfuse: {
      title: 'Langfuse',
      description: '跟踪、评估、提示管理和指标，以调试和改进您的 LLM 应用程序。',
    },
    inUse: '使用中',
    configProvider: {
      title: '配置 ',
      placeholder: '输入你的{{key}}',
      project: '项目',
      publicKey: '公钥',
      secretKey: '密钥',
      viewDocsLink: '查看 {{key}} 的文档',
      removeConfirmTitle: '删除 {{key}} 配置?',
      removeConfirmContent: '当前配置正在使用中，删除它将关闭追踪功能。',
    },
  },
  appSelector: {
    label: '应用',
    placeholder: '选择一个应用',
    params: '应用参数',
  },
}

export default translation
