const translation = {
  knowledge: 'Conoscenza',
  documentCount: ' documenti',
  wordCount: ' k parole',
  appCount: ' app collegate',
  createDataset: 'Crea Conoscenza',
  createDatasetIntro:
    'Importa i tuoi dati testuali o scrivi dati in tempo reale tramite Webhook per migliorare il contesto LLM.',
  deleteDatasetConfirmTitle: 'Eliminare questa Conoscenza?',
  deleteDatasetConfirmContent:
    'L\'eliminazione della Conoscenza è irreversibile. Gli utenti non potranno più accedere alla tua Conoscenza e tutte le configurazioni dei prompt e i log verranno eliminati permanentemente.',
  datasetUsedByApp:
    'La Conoscenza è utilizzata da alcune app. Le app non potranno più utilizzare questa Conoscenza e tutte le configurazioni dei prompt e i log verranno eliminati permanentemente.',
  datasetDeleted: 'Conoscenza eliminata',
  datasetDeleteFailed: 'Eliminazione della Conoscenza fallita',
  didYouKnow: 'Lo sapevi?',
  intro1: 'La Conoscenza può essere integrata nell\'applicazione Dify ',
  intro2: 'come un contesto',
  intro3: ',',
  intro4: 'oppure ',
  intro5: 'può essere creata',
  intro6: ' come un plug-in di indicizzazione ChatGPT autonomo da pubblicare',
  unavailable: 'Non disponibile',
  unavailableTip:
    'Il modello di embedding non è disponibile, è necessario configurare il modello di embedding predefinito',
  datasets: 'CONOSCENZA',
  datasetsApi: 'ACCESSO API',
  retrieval: {
    semantic_search: {
      title: 'Ricerca Vettoriale',
      description:
        'Genera embedding delle query e cerca il blocco di testo più simile alla sua rappresentazione vettoriale.',
    },
    full_text_search: {
      title: 'Ricerca Full-Text',
      description:
        'Indicizza tutti i termini nel documento, consentendo agli utenti di cercare qualsiasi termine e recuperare il blocco di testo rilevante contenente quei termini.',
    },
    hybrid_search: {
      title: 'Ricerca Ibrida',
      description:
        'Esegui contemporaneamente la ricerca full-text e la ricerca vettoriale, riordina per selezionare la migliore corrispondenza per la query dell\'utente. È necessaria la configurazione delle API del modello Rerank.',
      recommend: 'Consigliato',
    },
    invertedIndex: {
      title: 'Indice Invertito',
      description:
        'L\'Indice Invertito è una struttura utilizzata per il recupero efficiente. Organizzato per termini, ogni termine punta ai documenti o alle pagine web che lo contengono.',
    },
    change: 'Cambia',
    changeRetrievalMethod: 'Cambia metodo di recupero',
  },
  docsFailedNotice: 'documenti non riusciti a essere indicizzati',
  retry: 'Riprova',
  indexingTechnique: {
    high_quality: 'AQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VETTORE',
    full_text_search: 'TESTO COMPLETO',
    hybrid_search: 'IBRIDO',
    invertedIndex: 'INVERTITO',
  },
  mixtureHighQualityAndEconomicTip: 'Il modello di riclassificazione è necessario per la miscela di basi di conoscenza di alta qualità ed economiche.',
  inconsistentEmbeddingModelTip: 'Il modello di riclassificazione è necessario se i modelli di embedding delle basi di conoscenza selezionate sono incoerenti.',
  retrievalSettings: 'Impostazioni di recupero',
  rerankSettings: 'Impostazioni di riclassificazione',
  weightedScore: {
    title: 'Punteggio ponderato',
    description: 'Regolando i pesi assegnati, questa strategia di riclassificazione determina se dare priorità alla corrispondenza semantica o per parole chiave.',
    semanticFirst: 'Semantica prima',
    keywordFirst: 'Parola chiave prima',
    customized: 'Personalizzato',
    semantic: 'Semantico',
    keyword: 'Parola chiave',
  },
  nTo1RetrievalLegacy: 'Il recupero N-a-1 sarà ufficialmente deprecato da settembre. Si consiglia di utilizzare il più recente recupero multi-percorso per ottenere risultati migliori.',
  nTo1RetrievalLegacyLink: 'Scopri di più',
  nTo1RetrievalLegacyLinkText: 'Il recupero N-a-1 sarà ufficialmente deprecato a settembre.',
  defaultRetrievalTip: 'Per impostazione predefinita, il recupero a percorsi multipli viene utilizzato. Le informazioni vengono recuperate da più knowledge base e quindi riclassificate.',
  editExternalAPIConfirmWarningContent: {
    end: 'conoscenza esterna, e questa modifica sarà applicata a tutti loro. Sei sicuro di voler salvare questa modifica?',
    front: 'Questa API della conoscenza esterna è collegata a',
  },
  editExternalAPIFormWarning: {
    end: 'Conoscenze esterne',
    front: 'Questa API esterna è collegata a',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Cancellare',
      end: '?',
    },
    content: {
      end: 'conoscenze esterne. L\'eliminazione di questa API invaliderà tutte. Si è certi di voler eliminare questa API?',
      front: 'Questa API della conoscenza esterna è collegata a',
    },
    noConnectionContent: 'Sei sicuro di eliminare questa API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Scegliere un\'API di conoscenza esterna',
  },
  connectDatasetIntro: {
    content: {
      front: 'Per connettersi a una knowledge base esterna, è necessario prima creare un\'API esterna. Si prega di leggere attentamente e fare riferimento a',
      end: '. Quindi trova l\'ID conoscenza corrispondente e compilalo nel modulo a sinistra. Se tutte le informazioni sono corrette, passerà automaticamente al test di recupero nella knowledge base dopo aver fatto clic sul pulsante di connessione.',
      link: 'Scopri come creare un\'API esterna',
    },
    title: 'Come connettersi a una Knowledge Base esterna',
    learnMore: 'Ulteriori informazioni',
  },
  connectHelper: {
    helper2: 'È supportata solo la funzionalità di recupero',
    helper4: 'Leggi la documentazione della Guida',
    helper3: '. Ti consigliamo vivamente di',
    helper1: 'Connettiti a knowledge base esterne tramite API e ID knowledge base. Attualmente,',
    helper5: 'prima di utilizzare questa funzione.',
  },
  externalKnowledgeForm: {
    cancel: 'Annulla',
    connect: 'Connettersi',
  },
  externalAPIForm: {
    encrypted: {
      end: 'Tecnologia.',
      front: 'Il tuo token API verrà crittografato e archiviato utilizzando',
    },
    apiKey: 'Chiave API',
    name: 'Nome',
    cancel: 'Annulla',
    edit: 'Redigere',
    save: 'Salvare',
    endpoint: 'API Endpoint',
  },
  externalAPIPanelDescription: 'L\'API di conoscenza esterna viene utilizzata per connettersi a una knowledge base esterna a Dify e recuperare le informazioni da tale knowledge base.',
  createExternalAPI: 'Aggiungere un\'API di conoscenza esterna',
  learnHowToWriteGoodKnowledgeDescription: 'Impara a scrivere una buona descrizione della conoscenza',
  externalKnowledgeName: 'Nome della conoscenza esterna',
  externalAPIPanelTitle: 'API di conoscenza esterna',
  externalAPI: 'API esterna',
  createNewExternalAPI: 'Creare una nuova API della conoscenza esterna',
  editExternalAPIFormTitle: 'Modificare l\'API della conoscenza esterna',
  externalKnowledgeId: 'ID conoscenza esterna',
  externalKnowledgeIdPlaceholder: 'Inserisci l\'ID conoscenza',
  externalAPIPanelDocumentation: 'Scopri come creare un\'API della Knowledge Base esterna',
  connectDataset: 'Connettiti a una Knowledge Base esterna',
  mixtureInternalAndExternalTip: 'Il modello Rerank è necessario per la combinazione di conoscenze interne ed esterne.',
  editExternalAPITooltipTitle: 'CONOSCENZA COLLEGATA',
  externalTag: 'Esterno',
  externalKnowledgeNamePlaceholder: 'Inserisci il nome della knowledge base',
  externalKnowledgeDescription: 'Descrizione della conoscenza',
  allExternalTip: 'Quando si utilizzano solo conoscenze esterne, l\'utente può scegliere se abilitare il modello Rerank. Se non è abilitato, i blocchi recuperati verranno ordinati in base ai punteggi. Quando le strategie di recupero di diverse basi di conoscenza sono incoerenti, saranno imprecise.',
  externalKnowledgeDescriptionPlaceholder: 'Descrivi cosa c\'è in questa Knowledge Base (facoltativo)',
  noExternalKnowledge: 'Non esiste ancora un\'API di conoscenza esterna, fai clic qui per creare',
  chunkingMode: {
    general: 'Generale',
    parentChild: 'Genitore-figlio',
  },
  parentMode: {
    paragraph: 'Paragrafo',
    fullDoc: 'Full-doc',
  },
  batchAction: {
    archive: 'Archivio',
    enable: 'Abilitare',
    cancel: 'Annulla',
    selected: 'Selezionato',
    disable: 'Disabilitare',
    delete: 'Cancellare',
  },
  preprocessDocument: '{{num}} Pre-elaborazione dei documenti',
  enable: 'Abilitare',
  documentsDisabled: '{{num}} documenti disabilitati - inattivi da oltre 30 giorni',
  localDocs: 'Documenti locali',
}

export default translation
