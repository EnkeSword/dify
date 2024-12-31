const translation = {
  knowledge: 'Wiedza',
  documentCount: ' documentos',
  wordCount: ' k palavras',
  appCount: ' aplicativos vinculados',
  createDataset: 'Criar Conhecimento',
  createDatasetIntro: 'Importe seus próprios dados de texto ou escreva dados em tempo real via Webhook para aprimoramento de contexto LLM.',
  deleteDatasetConfirmTitle: 'Excluir este Conhecimento?',
  deleteDatasetConfirmContent:
    'A exclusão do Conhecimento é irreversível. Os usuários não poderão mais acessar seu Conhecimento e todas as configurações e registros de prompt serão excluídos permanentemente.',
  datasetUsedByApp: 'O conhecimento está sendo usado por alguns aplicativos. Os aplicativos não poderão mais usar esse Conhecimento, e todas as configurações de prompt e logs serão excluídos permanentemente.',
  datasetDeleted: 'Conhecimento excluído',
  datasetDeleteFailed: 'Falha ao excluir o Conhecimento',
  didYouKnow: 'Você sabia?',
  intro1: 'O Conhecimento pode ser integrado ao aplicativo Dify ',
  intro2: 'como um contexto',
  intro3: ',',
  intro4: 'ou pode ser criado',
  intro5: ' como um plug-in de índice ChatGPT independente para publicação',
  unavailable: 'Indisponível',
  unavailableTip: 'O modelo de incorporação não está disponível, o modelo de incorporação padrão precisa ser configurado',
  datasets: 'CONHECIMENTO',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: 'Pesquisa Vetorial',
      description: 'Gere incorporações de consulta e pesquise o trecho de texto mais semelhante à sua representação vetorial.',
    },
    full_text_search: {
      title: 'Pesquisa de Texto Completo',
      description: 'Indexe todos os termos no documento, permitindo que os usuários pesquisem qualquer termo e recuperem trechos de texto relevantes contendo esses termos.',
    },
    hybrid_search: {
      title: 'Pesquisa Híbrida',
      description: 'Execute pesquisas de texto completo e pesquisas vetoriais simultaneamente, reclassifique para selecionar a melhor correspondência para a consulta do usuário. A configuração da API do modelo de reclassificação é necessária.',
      recommend: 'Recomendar',
    },
    invertedIndex: {
      title: 'Índice Invertido',
      description: 'O Índice Invertido é uma estrutura usada para recuperação eficiente. Organizado por termos, cada termo aponta para documentos ou páginas da web que o contêm.',
    },
    change: 'Alterar',
    changeRetrievalMethod: 'Alterar método de recuperação',
  },
  docsFailedNotice: 'documentos falharam ao serem indexados',
  retry: 'Tentar novamente',
  indexingTechnique: {
    high_quality: 'AQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VETOR',
    full_text_search: 'TEXTO COMPLETO',
    hybrid_search: 'HÍBRIDO',
    invertedIndex: 'INVERTIDO',
  },
  mixtureHighQualityAndEconomicTip: 'O modelo de reclassificação é necessário para a mistura de bases de conhecimento de alta qualidade e econômicas.',
  inconsistentEmbeddingModelTip: 'O modelo de reclassificação é necessário se os modelos de incorporação das bases de conhecimento selecionadas forem inconsistentes.',
  retrievalSettings: 'Configurações de Recuperação',
  rerankSettings: 'Configurações de Reclassificação',
  weightedScore: {
    title: 'Pontuação Ponderada',
    description: 'Ao ajustar os pesos atribuídos, esta estratégia de reclassificação determina se deve priorizar a correspondência semântica ou por palavras-chave.',
    semanticFirst: 'Semântica primeiro',
    keywordFirst: 'Palavra-chave primeiro',
    customized: 'Personalizado',
    semantic: 'Semântico',
    keyword: 'Palavra-chave',
  },
  nTo1RetrievalLegacy: 'A recuperação N-para-1 será oficialmente descontinuada a partir de setembro. Recomenda-se usar a recuperação de múltiplos caminhos mais recente para obter melhores resultados.',
  nTo1RetrievalLegacyLink: 'Saiba mais',
  nTo1RetrievalLegacyLinkText: 'A recuperação N-para-1 será oficialmente descontinuada em setembro.',
  intro6: 'como um plug-in de índice ChatGPT autônomo para publicar',
  defaultRetrievalTip: 'A recuperação de vários caminhos é usada por padrão. O conhecimento é recuperado de várias bases de dados de conhecimento e, em seguida, reclassificado.',
  editExternalAPIConfirmWarningContent: {
    front: 'Esta API de conhecimento externo está vinculada a',
    end: 'conhecimento externo, e essa modificação será aplicada a todos eles. Tem certeza de que deseja salvar essa alteração?',
  },
  editExternalAPIFormWarning: {
    end: 'Conhecimento externo',
    front: 'Esta API externa está vinculada a',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Excluir',
      end: '?',
    },
    content: {
      end: 'conhecimento externo. A exclusão dessa API invalidará todos eles. Tem certeza de que deseja excluir esta API?',
      front: 'Esta API de conhecimento externo está vinculada a',
    },
    noConnectionContent: 'Tem certeza de que deseja excluir essa API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Escolher uma API de conhecimento externa',
  },
  connectDatasetIntro: {
    content: {
      front: 'Para se conectar a uma base de dados de conhecimento externa, você precisa primeiro criar uma API externa. Por favor, leia com atenção e consulte',
      link: 'Saiba como criar uma API externa',
      end: '. Em seguida, encontre o ID de conhecimento correspondente e preencha-o no formulário à esquerda. Se todas as informações estiverem corretas, ele pulará automaticamente para o teste de recuperação na base de conhecimento depois de clicar no botão conectar.',
    },
    learnMore: 'Saiba Mais',
    title: 'Como se conectar a uma base de conhecimento externa',
  },
  connectHelper: {
    helper3: '. Recomendamos fortemente que você',
    helper5: 'cuidadosamente antes de usar esse recurso.',
    helper2: 'apenas a funcionalidade de recuperação é suportada',
    helper4: 'Leia a documentação de ajuda',
    helper1: 'Conecte-se a bases de conhecimento externas por meio da API e do ID da base de conhecimento. Atualmente,',
  },
  externalKnowledgeForm: {
    cancel: 'Cancelar',
    connect: 'Ligar',
  },
  externalAPIForm: {
    encrypted: {
      front: 'Seu token de API será criptografado e armazenado usando',
      end: 'Tecnologia.',
    },
    name: 'Nome',
    apiKey: 'Chave de API',
    cancel: 'Cancelar',
    save: 'Salvar',
    edit: 'Editar',
    endpoint: 'API Endpoint',
  },
  externalAPI: 'API externa',
  editExternalAPITooltipTitle: 'CONHECIMENTO VINCULADO',
  noExternalKnowledge: 'Ainda não existe uma API de conhecimento externo, clique aqui para criar',
  externalAPIPanelDescription: 'A API de conhecimento externo é usada para se conectar a uma base de conhecimento fora do Dify e recuperar o conhecimento dessa base de conhecimento.',
  externalKnowledgeIdPlaceholder: 'Insira o ID de conhecimento',
  externalKnowledgeDescriptionPlaceholder: 'Descreva o que há nesta Base de Dados de Conhecimento (opcional)',
  connectDataset: 'Conectar-se a uma base de conhecimento externa',
  createNewExternalAPI: 'Criar uma nova API de conhecimento externo',
  allExternalTip: 'Ao usar apenas conhecimento externo, o usuário pode escolher se deseja habilitar o modelo de reclassificação. Se não estiver ativado, os blocos recuperados serão classificados com base nas pontuações. Quando as estratégias de recuperação de diferentes bases de conhecimento são inconsistentes, elas serão imprecisas.',
  externalTag: 'Externo',
  externalKnowledgeName: 'Nome do Conhecimento Externo',
  externalKnowledgeId: 'ID de conhecimento externo',
  externalAPIPanelTitle: 'API de conhecimento externo',
  externalKnowledgeNamePlaceholder: 'Insira o nome da base de conhecimento',
  createExternalAPI: 'Adicionar uma API de conhecimento externo',
  editExternalAPIFormTitle: 'Editar a API de conhecimento externo',
  mixtureInternalAndExternalTip: 'O modelo de Reclassificação é necessário para a mistura de conhecimento interno e externo.',
  learnHowToWriteGoodKnowledgeDescription: 'Aprenda a escrever uma boa descrição de conhecimento',
  externalAPIPanelDocumentation: 'Saiba como criar uma API de conhecimento externo',
  externalKnowledgeDescription: 'Descrição do Conhecimento',
  chunkingMode: {
    parentChild: 'Pai-filho',
    general: 'Geral',
  },
  parentMode: {
    fullDoc: 'Documento completo',
    paragraph: 'Parágrafo',
  },
  batchAction: {
    selected: 'Selecionado',
    delete: 'Excluir',
    enable: 'Habilitar',
    archive: 'Arquivo',
    disable: 'Desabilitar',
    cancel: 'Cancelar',
  },
  documentsDisabled: '{{num}} documentos desativados - inativos por mais de 30 dias',
  enable: 'Habilitar',
  preprocessDocument: '{{num}} Documentos de pré-processamento',
  localDocs: 'Documentos locais',
}

export default translation
