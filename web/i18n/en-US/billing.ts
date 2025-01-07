const translation = {
  currentPlan: 'Current Plan',
  upgradeBtn: {
    plain: 'Upgrade Plan',
    encourage: 'Upgrade Now',
    encourageShort: 'Upgrade',
  },
  viewBilling: 'Manage billing and subscriptions',
  buyPermissionDeniedTip: 'Please contact your enterprise administrator to subscribe',
  plansCommon: {
    title: 'Pricing that powers your AI journey',
    freeTrialTipPrefix: 'Sign up and get a ',
    freeTrialTip: 'free trial of 200 OpenAI calls. ',
    freeTrialTipSuffix: 'No credit card required',
    yearlyTip: 'Pay for 10 months, enjoy 1 Year!',
    mostPopular: 'Most Popular',
    cloud: 'Cloud Service',
    self: 'Self-Hosted',
    planRange: {
      monthly: 'Monthly',
      yearly: 'Yearly',
    },
    month: 'month',
    year: 'year',
    save: 'Save ',
    free: 'Free',
    annualBilling: 'Annual Billing',
    comparePlanAndFeatures: 'Compare plans & features',
    priceTip: 'per workspace/',
    currentPlan: 'Current Plan',
    contractSales: 'Contact sales',
    contractOwner: 'Contact team manager',
    startForFree: 'Start for free',
    getStarted: 'Get started',
    contactSales: 'Contact Sales',
    talkToSales: 'Talk to Sales',
    modelProviders: 'Support OpenAI/Anthropic/Llama2/Azure OpenAI/Hugging Face/Replicate',
    teamWorkspace: '{{count}} Team Workspace',
    teamMember_one: '{{count}} Team Member',
    teamMember_other: '{{count}} Team Members',
    annotationQuota: 'Annotation Quota',
    buildApps: '{{count}} Apps',
    documents: '{{count}} Knowledge Documents',
    documentsTooltip: 'Quota on the number of documents imported from the Knowledge Data Source.',
    vectorSpace: '{{size}} Knowledge Data Storage',
    vectorSpaceTooltip: 'Documents with the High Quality indexing mode will consume Knowledge Data Storage resources. When Knowledge Data Storage reaches the limit, new documents will not be uploaded.',
    documentsRequestQuota: '{{count}}/min Knowledge Request Rate limit',
    documentsRequestQuotaTooltip: 'Indicates the number of queries per minute the system can handle with knowledge base support, used to measure query capacity and performance.',
    documentProcessingPriority: 'Document Processing',
    priority: {
      'standard': 'Standard',
      'priority': 'Priority',
      'top-priority': 'Top Priority',
    },
    logsHistory: '{{days}} Log history',
    customTools: 'Custom Tools',
    unavailable: 'Unavailable',
    days: 'Days',
    unlimited: 'Unlimited',
    support: 'Support',
    supportItems: {
      communityForums: 'Community forums',
      emailSupport: 'Email support',
      priorityEmail: 'Priority email & chat support',
      logoChange: 'Logo change',
      SSOAuthentication: 'SSO authentication',
      personalizedSupport: 'Personalized support',
      dedicatedAPISupport: 'Dedicated API support',
      customIntegration: 'Custom integration and support',
      ragAPIRequest: 'RAG API Requests',
      bulkUpload: 'Bulk upload documents',
      agentMode: 'Agent Mode',
      workflow: 'Workflow',
      llmLoadingBalancing: 'LLM Load Balancing',
      llmLoadingBalancingTooltip: 'Add multiple API keys to models, effectively bypassing the API rate limits. ',
    },
    comingSoon: 'Coming soon',
    member: 'Member',
    memberAfter: 'Member',
    messageRequest: {
      title: '{{count}} Messages',
      titlePerMonth: '{{count}} Messages/month',
      tooltip: 'Message invocation quotas for various plans using OpenAl models. Messages over the limit will use your OpenAI API Key.',
    },
    annotatedResponse: {
      title: '{{count}} Annotation Quota Limits',
      tooltip: 'Manual editing and annotation of responses provides customizable high-quality question-answering abilities for apps. (Applicable only in Chat apps)',
    },
    ragAPIRequestTooltip: 'Refers to the number of API calls invoking only the knowledge base processing capabilities of Dify.',
    receiptInfo: 'Only team owner and team admin can subscribe and view billing information',
  },
  plans: {
    sandbox: {
      name: 'Sandbox',
      description: 'Free Trial of Core Capabilities',
    },
    professional: {
      name: 'Professional',
      description: 'For Independent Developers/Small Teams',
    },
    team: {
      name: 'Team',
      description: 'For Medium-sized Teams',
    },
    community: {
      name: 'Community',
      description: 'For Individual Users, Small Teams, or Non-commercial Projects',
      price: 'Free',
      btnText: 'Get Started with Community',
      includesTitle: 'Free Features:',
      features: [
        'All Core Features Released Under the Public Repository',
        'Single Workspace',
        'Complies with Dify Open Source License',
      ],
    },
    premium: {
      name: 'Premium',
      description: 'For Mid-sized Organizations and Teams',
      price: 'Scalable',
      priceTip: 'Based on Cloud Marketplace',
      btnText: 'Get Premium in',
      includesTitle: 'Everything from Community, plus:',
      comingSoon: 'Microsoft Azure & Google Cloud Support Coming Soon',
      features: [
        'Self-managed Reliability by Various Cloud Providers',
        'Single Workspace',
        'WebApp Logo & Branding Customization',
        'Priority Email & Chat Support',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      description: 'For Enterprise Require Organization-wide Security, Compliance, Scalability, Control and More Advanced Features',
      price: 'Custom',
      priceTip: 'Annual Billing Only',
      btnText: 'Contact Sales',
      includesTitle: 'Everything from Premium, plus:',
      features: [
        'Enterprise-grade Scalable Deployment Solutions',
        'Commercial License Authorization',
        'Exclusive Enterprise Features',
        'Multiple Workspaces & Enterprise Management',
        'SSO',
        'Negotiated SLAs by Dify Partners',
        'Advanced Security & Controls',
        'Updates and Maintenance by Dify Officially',
        'Professional Technical Support',
      ],
    },
  },
  vectorSpace: {
    fullTip: 'Vector Space is full.',
    fullSolution: 'Upgrade your plan to get more space.',
  },
  apps: {
    fullTipLine1: 'Upgrade your plan to',
    fullTipLine2: 'build more apps.',
  },
  annotatedResponse: {
    fullTipLine1: 'Upgrade your plan to',
    fullTipLine2: 'annotate more conversations.',
    quotaTitle: 'Annotation Reply Quota',
  },
}

export default translation
