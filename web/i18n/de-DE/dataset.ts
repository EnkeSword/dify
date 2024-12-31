const translation = {
  knowledge: 'Wissen',
  documentCount: ' Dokumente',
  wordCount: ' k Wörter',
  appCount: ' verknüpfte Apps',
  createDataset: 'Wissen erstellen',
  createDatasetIntro: 'Importiere deine eigenen Textdaten oder schreibe Daten in Echtzeit über Webhook für die LLM-Kontextverbesserung.',
  deleteDatasetConfirmTitle: 'Dieses Wissen löschen?',
  deleteDatasetConfirmContent:
    'Das Löschen des Wissens ist unwiderruflich. Benutzer werden nicht mehr auf Ihr Wissen zugreifen können und alle Eingabeaufforderungen, Konfigurationen und Protokolle werden dauerhaft gelöscht.',
  datasetUsedByApp: 'Das Wissen wird von einigen Apps verwendet. Apps werden dieses Wissen nicht mehr nutzen können, und alle Prompt-Konfigurationen und Protokolle werden dauerhaft gelöscht.',
  datasetDeleted: 'Wissen gelöscht',
  datasetDeleteFailed: 'Löschen des Wissens fehlgeschlagen',
  didYouKnow: 'Wusstest du schon?',
  intro1: 'Das Wissen kann in die Dify-Anwendung ',
  intro2: 'als Kontext',
  intro3: ',',
  intro4: 'oder es ',
  intro5: 'kann erstellt werden',
  intro6: ' als ein eigenständiges ChatGPT-Index-Plugin zum Veröffentlichen',
  unavailable: 'Nicht verfügbar',
  unavailableTip: 'Einbettungsmodell ist nicht verfügbar, das Standard-Einbettungsmodell muss konfiguriert werden',
  datasets: 'WISSEN',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: 'Vektorsuche',
      description: 'Erzeuge Abfrage-Einbettungen und suche nach dem Textstück, das seiner Vektorrepräsentation am ähnlichsten ist.',
    },
    full_text_search: {
      title: 'Volltextsuche',
      description: 'Indiziere alle Begriffe im Dokument, sodass Benutzer jeden Begriff suchen und den relevanten Textabschnitt finden können, der diese Begriffe enthält.',
    },
    hybrid_search: {
      title: 'Hybridsuche',
      description: 'Führe Volltextsuche und Vektorsuchen gleichzeitig aus, ordne neu, um die beste Übereinstimmung für die Abfrage des Benutzers auszuwählen. Konfiguration des Rerank-Modell-APIs ist notwendig.',
      recommend: 'Empfehlen',
    },
    invertedIndex: {
      title: 'Invertierter Index',
      description: 'Ein invertierter Index ist eine Struktur, die für effiziente Abfragen verwendet wird. Organisiert nach Begriffen, zeigt jeder Begriff auf Dokumente oder Webseiten, die ihn enthalten.',
    },
    change: 'Ändern',
    changeRetrievalMethod: 'Abfragemethode ändern',
  },
  docsFailedNotice: 'Dokumente konnten nicht indiziert werden',
  retry: 'Wiederholen',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VEKTOR',
    full_text_search: 'VOLLTEXT',
    hybrid_search: 'HYBRID',
    invertedIndex: 'INVERTIERT',
  },
  mixtureHighQualityAndEconomicTip: 'Für die Mischung von hochwertigen und wirtschaftlichen Wissensbasen ist das Rerank-Modell erforderlich.',
  inconsistentEmbeddingModelTip: 'Das Rerank-Modell ist erforderlich, wenn die Embedding-Modelle der ausgewählten Wissensbasen inkonsistent sind.',
  retrievalSettings: 'Abrufeinstellungen',
  rerankSettings: 'Rerank-Einstellungen',
  weightedScore: {
    title: 'Gewichtete Bewertung',
    description: 'Durch Anpassung der zugewiesenen Gewichte bestimmt diese Rerank-Strategie, ob semantische oder Schlüsselwort-Übereinstimmung priorisiert werden soll.',
    semanticFirst: 'Semantik zuerst',
    keywordFirst: 'Schlüsselwort zuerst',
    customized: 'Angepasst',
    semantic: 'Semantisch',
    keyword: 'Schlüsselwort',
  },
  nTo1RetrievalLegacy: 'N-zu-1-Abruf wird ab September offiziell eingestellt. Es wird empfohlen, den neuesten Multi-Pfad-Abruf zu verwenden, um bessere Ergebnisse zu erzielen.',
  nTo1RetrievalLegacyLink: 'Mehr erfahren',
  nTo1RetrievalLegacyLinkText: 'N-zu-1-Abruf wird im September offiziell eingestellt.',
  defaultRetrievalTip: 'Standardmäßig wird der Multi-Path-Abruf verwendet. Das Wissen wird aus mehreren Wissensdatenbanken abgerufen und dann neu eingestuft.',
  editExternalAPIConfirmWarningContent: {
    end: 'externes Wissen, und diese Modifikation wird auf alle angewendet. Sind Sie sicher, dass Sie diese Änderung speichern möchten?',
    front: 'Diese External Knowledge API ist verknüpft mit',
  },
  editExternalAPIFormWarning: {
    front: 'Diese externe API ist verknüpft mit',
    end: 'externes Wissen',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Löschen',
      end: '?',
    },
    content: {
      front: 'Diese External Knowledge API ist verknüpft mit',
      end: 'externes Wissen. Wenn Sie diese API löschen, werden alle ungültig. Sind Sie sicher, dass Sie diese API löschen möchten?',
    },
    noConnectionContent: 'Sind Sie sicher, dass Sie diese API löschen möchten?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Auswählen einer externen Wissens-API',
  },
  connectDatasetIntro: {
    content: {
      front: 'Um eine Verbindung zu einer externen Wissensdatenbank herzustellen, müssen Sie zuerst eine externe API erstellen. Bitte lesen Sie diese sorgfältig durch und beziehen Sie sich auf',
      link: 'Erfahren Sie, wie Sie eine externe API erstellen',
      end: '. Suchen Sie dann die entsprechende Wissens-ID und füllen Sie diese in das Formular links aus. Wenn alle Informationen korrekt sind, wird nach dem Klicken auf die Schaltfläche "Verbinden" automatisch zum Abruftest in der Wissensdatenbank gesprungen.',
    },
    learnMore: 'Weitere Informationen',
    title: 'So stellen Sie eine Verbindung zu einer externen Wissensdatenbank her',
  },
  connectHelper: {
    helper3: '. Wir empfehlen Ihnen dringend,',
    helper2: 'Es wird nur die Retrieval-Funktionalität unterstützt',
    helper5: 'bevor Sie diese Funktion verwenden.',
    helper4: 'Lesen Sie die Hilfedokumentation',
    helper1: 'Verbinden Sie sich mit externen Wissensdatenbanken über API und Wissensdatenbank-ID.',
  },
  externalKnowledgeForm: {
    connect: 'Verbinden',
    cancel: 'Abbrechen',
  },
  externalAPIForm: {
    encrypted: {
      front: 'Ihr API-Token wird verschlüsselt und gespeichert mit',
      end: 'Technologie.',
    },
    save: 'Retten',
    cancel: 'Abbrechen',
    endpoint: 'API-Endpunkt',
    name: 'Name',
    edit: 'Redigieren',
    apiKey: 'API-Schlüssel',
  },
  externalTag: 'Äußerlich',
  createExternalAPI: 'Hinzufügen einer externen Knowledge-API',
  externalAPIPanelDescription: 'Die API für externes Wissen wird verwendet, um eine Verbindung zu einer Wissensdatenbank außerhalb von Dify herzustellen und Wissen aus dieser Wissensdatenbank abzurufen.',
  createNewExternalAPI: 'Erstellen einer neuen API für externes Wissen',
  externalKnowledgeDescriptionPlaceholder: 'Beschreiben Sie, was in dieser Wissensdatenbank enthalten ist (optional)',
  externalAPIPanelDocumentation: 'Erfahren Sie, wie Sie eine API für externes Wissen erstellen',
  externalAPIPanelTitle: 'API für externes Wissen',
  learnHowToWriteGoodKnowledgeDescription: 'Erfahren Sie, wie Sie eine gute Wissensbeschreibung schreiben',
  editExternalAPITooltipTitle: 'VERKNÜPFTES WISSEN',
  externalKnowledgeIdPlaceholder: 'Bitte geben Sie die Knowledge ID ein',
  connectDataset: 'Herstellen einer Verbindung mit einer externen Wissensdatenbank',
  externalAPI: 'Externe API',
  externalKnowledgeName: 'Name des externen Wissens',
  allExternalTip: 'Wenn nur externes Wissen verwendet wird, kann der Benutzer auswählen, ob das Rerank-Modell aktiviert werden soll. Wenn diese Option nicht aktiviert ist, werden die abgerufenen Blöcke basierend auf den Punktzahlen sortiert. Wenn die Abrufstrategien verschiedener Wissensdatenbanken inkonsistent sind, ist dies ungenau.',
  externalKnowledgeDescription: 'Wissen Beschreibung',
  noExternalKnowledge: 'Es gibt noch keine External Knowledge API, klicken Sie hier, um zu erstellen',
  externalKnowledgeNamePlaceholder: 'Bitte geben Sie den Namen der Wissensdatenbank ein.',
  mixtureInternalAndExternalTip: 'Das Rerank-Modell ist für die Mischung von internem und externem Wissen erforderlich.',
  externalKnowledgeId: 'ID für externes Wissen',
  editExternalAPIFormTitle: 'Bearbeiten der API für externes Wissen',
  chunkingMode: {
    parentChild: 'Eltern-Kind',
    general: 'Allgemein',
  },
  parentMode: {
    paragraph: 'Absatz',
    fullDoc: 'Vollständiges Dokument',
  },
  batchAction: {
    selected: 'Ausgewählt',
    cancel: 'Abbrechen',
    archive: 'Archiv',
    disable: 'Abschalten',
    delete: 'Löschen',
    enable: 'Ermöglichen',
  },
  enable: 'Ermöglichen',
  localDocs: 'Lokale Dokumente',
  preprocessDocument: '{{num}} Vorverarbeiten von Dokumenten',
  documentsDisabled: '{{num}} Dokumente deaktiviert - seit über 30 Tagen inaktiv',
}

export default translation
