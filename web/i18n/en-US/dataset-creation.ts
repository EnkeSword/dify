const translation = {
  steps: {
    header: {
      creation: 'Create Knowledge',
      update: 'Add data',
    },
    one: 'Choose data source',
    two: 'Text Preprocessing and Cleaning',
    three: 'Execute and finish',
  },
  error: {
    unavailable: 'This Knowledge is not available',
  },
  firecrawl: {
    configFirecrawl: 'Configure 🔥Firecrawl',
    apiKeyPlaceholder: 'API key from firecrawl.dev',
    getApiKeyLinkText: 'Get your API key from firecrawl.dev',
  },
  jinaReader: {
    configJinaReader: 'Configure Jina Reader',
    apiKeyPlaceholder: 'API key from jina.ai',
    getApiKeyLinkText: 'Get your free API key at jina.ai',
  },
  stepOne: {
    filePreview: 'File Preview',
    pagePreview: 'Page Preview',
    dataSourceType: {
      file: 'Import from file',
      notion: 'Sync from Notion',
      web: 'Sync from website',
    },
    uploader: {
      title: 'Upload file',
      button: 'Drag and drop file, or',
      browse: 'Browse',
      tip: 'Supports {{supportTypes}}. Max {{size}}MB each.',
      validation: {
        typeError: 'File type not supported',
        size: 'File too large. Maximum is {{size}}MB',
        count: 'Multiple files not supported',
        filesNumber: 'You have reached the batch upload limit of {{filesNumber}}.',
      },
      cancel: 'Cancel',
      change: 'Change',
      failed: 'Upload failed',
    },
    notionSyncTitle: 'Notion is not connected',
    notionSyncTip: 'To sync with Notion, connection to Notion must be established first.',
    connect: 'Go to connect',
    cancel: 'Cancel',
    button: 'Next',
    emptyDatasetCreation: 'I want to create an empty Knowledge',
    modal: {
      title: 'Create an empty Knowledge',
      tip: 'An empty Knowledge will contain no documents, and you can upload documents any time.',
      input: 'Knowledge name',
      placeholder: 'Please input',
      nameNotEmpty: 'Name cannot be empty',
      nameLengthInvalid: 'Name must be between 1 to 40 characters',
      cancelButton: 'Cancel',
      confirmButton: 'Create',
      failed: 'Creation failed',
    },
    website: {
      chooseProvider: 'Select a provider',
      fireCrawlNotConfigured: 'Firecrawl is not configured',
      fireCrawlNotConfiguredDescription: 'Configure Firecrawl with API key to use it.',
      jinaReaderNotConfigured: 'Jina Reader is not configured',
      jinaReaderNotConfiguredDescription: 'Set up Jina Reader by entering your free API key for access.',
      configure: 'Configure',
      run: 'Run',
      firecrawlTitle: 'Extract web content with 🔥Firecrawl',
      firecrawlDoc: 'Firecrawl docs',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      jinaReaderTitle: 'Convert the entire site to Markdown',
      jinaReaderDoc: 'Learn more about Jina Reader',
      jinaReaderDocLink: 'https://jina.ai/reader',
      useSitemap: 'Use sitemap',
      useSitemapTooltip: 'Follow the sitemap to crawl the site. If not, Jina Reader will crawl iteratively based on page relevance, yielding fewer but higher-quality pages.',
      options: 'Options',
      crawlSubPage: 'Crawl sub-pages',
      limit: 'Limit',
      maxDepth: 'Max depth',
      excludePaths: 'Exclude paths',
      includeOnlyPaths: 'Include only paths',
      extractOnlyMainContent: 'Extract only main content (no headers, navs, footers, etc.)',
      exceptionErrorTitle: 'An exception occurred while running crawling job:',
      unknownError: 'Unknown error',
      totalPageScraped: 'Total pages scraped:',
      selectAll: 'Select All',
      resetAll: 'Reset All',
      scrapTimeInfo: 'Scraped {{total}} pages in total within {{time}}s',
      preview: 'Preview',
      maxDepthTooltip: 'Maximum depth to crawl relative to the entered URL. Depth 0 just scrapes the page of the entered url, depth 1 scrapes the url and everything after enteredURL + one /, and so on.',
    },
  },
  stepTwo: {
    segmentation: 'Chunk settings',
    auto: 'Automatic',
    autoDescription: 'Automatically set chunk and preprocessing rules. Unfamiliar users are recommended to select this.',
    custom: 'Custom',
    customDescription: 'Customize chunks rules, chunks length, and preprocessing rules, etc.',
    general: 'General',
    generalTip: 'General text chunking mode, the chunks retrieved and recalled are the same.',
    parentChild: 'Parent-child',
    parentChildTip: 'When using the parent-child mode, the child-chunk is used for retrieval and the parent-chunk is used for recall as context.',
    parentChunkForContext: 'Parent-chunk for Context',
    childChunkForRetrieval: 'Child-chunk for Retrieval',
    paragraph: 'Paragraph',
    paragraphTip: 'This mode splits the text in to paragraphs based on delimiters and the maximum chunk length, using the split text as the parent chunk for retrieval.',
    fullDoc: 'Full Doc',
    fullDocTip: 'The entire document is used as the parent chunk and retrieved directly. Please note that for performance reasons, text exceeding 10000 tokens will be automatically truncated.',
    separator: 'Delimiter',
    separatorTip: 'A delimiter is the character used to separate text. \\n\\n and \\n are commonly used delimiters for separating paragraphs and lines. Combined with commas (\\n\\n,\\n), paragraphs will be segmented by lines when exceeding the maximum chunk length. You can also use special delimiters defined by yourself (e.g. ***).',
    separatorPlaceholder: '\\n\\n for separating paragraphs; \\n for separating lines',
    maxLength: 'Maximum chunk length',
    maxLengthCheck: 'Maximum chunk length should be less than {{limit}}',
    overlap: 'Chunk overlap',
    overlapTip: 'Setting the chunk overlap can maintain the semantic relevance between them, enhancing the retrieve effect. It is recommended to set 10%-25% of the maximum chunk size.',
    overlapCheck: 'chunk overlap should not bigger than maximum chunk length',
    rules: 'Text preprocessing rules',
    removeExtraSpaces: 'Replace consecutive spaces, newlines and tabs',
    removeUrlEmails: 'Delete all URLs and email addresses',
    removeStopwords: 'Remove stopwords such as "a", "an", "the"',
    preview: 'Confirm & Preview',
    previewChunk: 'Preview Chunk',
    reset: 'Reset',
    indexMode: 'Index mode',
    qualified: 'High Quality',
    recommend: 'Recommend',
    qualifiedTip: 'Call default system embedding interface for processing to provide higher accuracy when users query.',
    warning: 'Please set up the model provider API key first.',
    click: 'Go to settings',
    economical: 'Economical',
    economicalTip: 'Use offline vector engines, keyword indexes, etc. to reduce accuracy without spending tokens',
    QATitle: 'Segmenting in Question & Answer format',
    QATip: 'Enable this option will consume more tokens',
    QALanguage: 'Segment using',
    estimateCost: 'Estimation',
    estimateSegment: 'Estimated chunks',
    segmentCount: 'chunks',
    calculating: 'Calculating...',
    fileSource: 'Preprocess documents',
    notionSource: 'Preprocess pages',
    websiteSource: 'Preprocess website',
    other: 'and other ',
    fileUnit: ' files',
    notionUnit: ' pages',
    webpageUnit: ' pages',
    previousStep: 'Previous step',
    nextStep: 'Save & Process',
    save: 'Save & Process',
    cancel: 'Cancel',
    sideTipTitle: 'Why chunk and preprocess?',
    sideTipP1: 'When processing text data, chunk and cleaning are two important preprocessing steps.',
    sideTipP2: 'Segmentation splits long text into paragraphs so models can understand better. This improves the quality and relevance of model results.',
    sideTipP3: 'Cleaning removes unnecessary characters and formats, making Knowledge cleaner and easier to parse.',
    sideTipP4: 'Proper chunk and cleaning improve model performance, providing more accurate and valuable results.',
    previewTitle: 'Preview',
    previewTitleButton: 'Preview',
    previewButton: 'Switching to Q&A format',
    previewSwitchTipStart: 'The current chunk preview is in text format, switching to a question-and-answer format preview will',
    previewSwitchTipEnd: ' consume additional tokens',
    characters: 'characters',
    indexSettingTip: 'To change the index method & embedding model, please go to the ',
    retrievalSettingTip: 'To change the retrieval setting, please go to the ',
    datasetSettingLink: 'Knowledge settings.',
    previewChunkTip: 'Click the \'Preview Chunk\' button on the left to load the preview',
    previewChunkCount: '{{count}} Estimated chunks',
    switch: 'Switch',
    qaSwitchHighQualityTipTitle: 'Q&A Format Requires High-quality Indexing Method',
    qaSwitchHighQualityTipContent: 'Currently, only high-quality index method supports Q&A format chunking. Would you like to switch to high-quality mode?',
    notAvailableForParentChild: 'Not available for Parent-child Index',
    notAvailableForQA: 'Not available for Q&A Index',
  },
  stepThree: {
    creationTitle: '🎉 Knowledge created',
    creationContent: 'We automatically named the Knowledge, you can modify it at any time',
    label: 'Knowledge name',
    additionTitle: '🎉 Document uploaded',
    additionP1: 'The document has been uploaded to the Knowledge',
    additionP2: ', you can find it in the document list of the Knowledge.',
    stop: 'Stop processing',
    resume: 'Resume processing',
    navTo: 'Go to document',
    sideTipTitle: 'What\'s next',
    sideTipContent: 'After the document finishes indexing, the Knowledge can be integrated into the application as context, you can find the context setting in the prompt orchestration page. You can also create it as an independent ChatGPT indexing plugin for release.',
    modelTitle: 'Are you sure to stop embedding?',
    modelContent: 'If you need to resume processing later, you will continue from where you left off.',
    modelButtonConfirm: 'Confirm',
    modelButtonCancel: 'Cancel',
  },
}

export default translation
