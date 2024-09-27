const translation = {
  knowledge: 'Knowledge',
  externalTag: 'External',
  externalAPI: 'External API',
  externalAPIPanelTitle: 'External Knowledge API',
  externalKnowledgeId: 'External Knowledge ID',
  externalKnowledgeName: 'External Knowledge Name',
  externalKnowledgeDescription: 'Knowledge Description',
  externalKnowledgeIdPlaceholder: 'Please enter the Knowledge ID',
  externalKnowledgeNamePlaceholder: 'Please enter the name of the knowledge base',
  externalKnowledgeDescriptionPlaceholder: 'Describe what\'s in this Knowledge Base (optional)',
  learnHowToWriteGoodKnowledgeDescription: 'Learn how to write a good knowledge description',
  externalAPIPanelDescription: 'The external knowledge API is used to connect to a knowledge base outside of Dify and retrieve knowledge from that knowledge base.',
  externalAPIPanelDocumentation: 'Learn how to create an External Knowledge API',
  documentCount: ' docs',
  wordCount: ' k words',
  appCount: ' linked apps',
  createDataset: 'Create Knowledge',
  noExternalKnowledge: 'There is no External Knowledge API yet, click here to create',
  createExternalAPI: 'Add an External Knowledge API',
  editExternalAPIFormTitle: 'Edit the External Knowledge API',
  editExternalAPITooltipTitle: 'LINKED KNOWLEDGE',
  editExternalAPIConfirmWarningContent: {
    front: 'This External Knowledge API is linked to',
    end: 'external knowledge, and this modification will be applied to all of them. Are you sure you want to save this change?',
  },
  editExternalAPIFormWarning: {
    front: 'This External API is linked to',
    end: 'external knowledge',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Delete',
      end: '?',
    },
    content: {
      front: 'This External Knowledge API is linked to',
      end: 'external knowledge. Deleting this API will invalidate all of them. Are you sure you want to delete this API?',
    },
    noConnectionContent: 'Are you sure to delete this API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Choose an External Knowledge API',
  },
  connectDataset: 'Connect to an External Knowledge Base',
  connectDatasetIntro: {
    title: 'How to Connect to an External Knowledge Base',
    content: {
      front: 'To connect to an external knowledge base, you need to create an external API first. Please read carefully and refer to',
      link: 'Learn how to create an external API',
      end: '. Then find the corresponding knowledge ID and fill it in the form on the left. If all the information is correct, it will automatically jump to the retrieval test in the knowledge base after clicking the connect button.',
    },
    learnMore: 'Learn More',
  },
  createDatasetIntro: 'Import your own text data or write data in real-time via Webhook for LLM context enhancement.',
  deleteDatasetConfirmTitle: 'Delete this Knowledge?',
  deleteDatasetConfirmContent:
    'Deleting the Knowledge is irreversible. Users will no longer be able to access your Knowledge, and all prompt configurations and logs will be permanently deleted.',
  datasetUsedByApp: 'The knowledge is being used by some apps. Apps will no longer be able to use this Knowledge, and all prompt configurations and logs will be permanently deleted.',
  datasetDeleted: 'Knowledge deleted',
  datasetDeleteFailed: 'Failed to delete Knowledge',
  didYouKnow: 'Did you know?',
  intro1: 'The Knowledge can be integrated into the Dify application ',
  intro2: 'as a context',
  intro3: ',',
  intro4: 'or it ',
  intro5: 'can be created',
  intro6: ' as a standalone ChatGPT index plug-in to publish',
  unavailable: 'Unavailable',
  unavailableTip: 'Embedding model is not available, the default embedding model needs to be configured',
  datasets: 'KNOWLEDGE',
  datasetsApi: 'API ACCESS',
  externalKnowledgeForm: {
    connect: 'Connect',
    cancel: 'Cancel',
  },
  externalAPIForm: {
    name: 'Name',
    endpoint: 'API Endpoint',
    apiKey: 'API Key',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    encrypted: {
      front: 'Your API Token will be encrypted and stored using',
      end: 'technology.',
    },
  },
  retrieval: {
    semantic_search: {
      title: 'Vector Search',
      description: 'Generate query embeddings and search for the text chunk most similar to its vector representation.',
    },
    full_text_search: {
      title: 'Full-Text Search',
      description: 'Index all terms in the document, allowing users to search any term and retrieve relevant text chunk containing those terms.',
    },
    hybrid_search: {
      title: 'Hybrid Search',
      description: 'Execute full-text search and vector searches simultaneously, re-rank to select the best match for the user\'s query. Users can choose to set weights or configure to a Rerank model.',
      recommend: 'Recommend',
    },
    invertedIndex: {
      title: 'Inverted Index',
      description: 'Inverted Index is a structure used for efficient retrieval. Organized by terms, each term points to documents or web pages containing it.',
    },
    change: 'Change',
    changeRetrievalMethod: 'Change retrieval method',
  },
  docsFailedNotice: 'documents failed to be indexed',
  retry: 'Retry',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VECTOR',
    full_text_search: 'FULL TEXT',
    hybrid_search: 'HYBRID',
    invertedIndex: 'INVERTED',
  },
  defaultRetrievalTip: 'Multi-path retrieval is used by default. Knowledge is retrieved from multiple knowledge bases and then re-ranked.',
  mixtureHighQualityAndEconomicTip: 'The Rerank model is required for mixture of high quality and economical knowledge bases.',
  inconsistentEmbeddingModelTip: 'The Rerank model is required if the Embedding models of the selected knowledge bases are inconsistent.',
  mixtureInternalAndExternalTip: 'The Rerank model is required for mixture of internal and  external knowledge.',
  allExternalTip: 'When using external knowledge only, the user can choose whether to enable the Rerank model. If not enabled, retrieved chunks will be sorted based on scores. When the retrieval strategies of different knowledge bases are inconsistent, it will be inaccurate.',
  retrievalSettings: 'Retrieval Setting',
  rerankSettings: 'Rerank Setting',
  weightedScore: {
    title: 'Weighted Score',
    description: 'By adjusting the weights assigned, this rerank strategy determines whether to prioritize semantic or keyword matching.',
    semanticFirst: 'Semantic first',
    keywordFirst: 'Keyword first',
    customized: 'Customized',
    semantic: 'Semantic',
    keyword: 'Keyword',
  },
  nTo1RetrievalLegacy: 'N-to-1 retrieval will be officially deprecated from September. It is recommended to use the latest Multi-path retrieval to obtain better results. ',
  nTo1RetrievalLegacyLink: 'Learn more',
  nTo1RetrievalLegacyLinkText: ' N-to-1 retrieval will be officially deprecated in September.',
}

export default translation
