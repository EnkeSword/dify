const translation = {
  common: {
    undo: 'Rückgängig',
    redo: 'Wiederholen',
    editing: 'Bearbeitung',
    autoSaved: 'Automatisch gespeichert',
    unpublished: 'Unveröffentlicht',
    published: 'Veröffentlicht',
    publish: 'Veröffentlichen',
    update: 'Aktualisieren',
    run: 'Ausführen',
    running: 'Wird ausgeführt',
    inRunMode: 'Im Ausführungsmodus',
    inPreview: 'In der Vorschau',
    inPreviewMode: 'Im Vorschaumodus',
    preview: 'Vorschau',
    viewRunHistory: 'Ausführungsverlauf anzeigen',
    runHistory: 'Ausführungsverlauf',
    goBackToEdit: 'Zurück zum Editor',
    conversationLog: 'Konversationsprotokoll',
    features: 'Funktionen',
    debugAndPreview: 'Vorschau',
    restart: 'Neustarten',
    currentDraft: 'Aktueller Entwurf',
    currentDraftUnpublished: 'Aktueller Entwurf unveröffentlicht',
    latestPublished: 'Zuletzt veröffentlicht',
    publishedAt: 'Veröffentlicht am',
    restore: 'Wiederherstellen',
    runApp: 'App ausführen',
    batchRunApp: 'App im Batch-Modus ausführen',
    accessAPIReference: 'API-Referenz aufrufen',
    embedIntoSite: 'In die Webseite einbetten',
    addTitle: 'Titel hinzufügen...',
    addDescription: 'Beschreibung hinzufügen...',
    noVar: 'Keine Variable',
    searchVar: 'Variable suchen',
    variableNamePlaceholder: 'Variablenname',
    setVarValuePlaceholder: 'Variable setzen',
    needConnectTip: 'Dieser Schritt ist mit nichts verbunden',
    maxTreeDepth: 'Maximales Limit von {{depth}} Knoten pro Ast',
    needEndNode: 'Der Endblock muss hinzugefügt werden',
    needAnswerNode: 'Der Antwortblock muss hinzugefügt werden',
    workflowProcess: 'Arbeitsablauf',
    notRunning: 'Noch nicht ausgeführt',
    previewPlaceholder: 'Geben Sie den Inhalt in das Feld unten ein, um das Debuggen des Chatbots zu starten',
    effectVarConfirm: {
      title: 'Variable entfernen',
      content: 'Die Variable wird in anderen Knoten verwendet. Möchten Sie sie trotzdem entfernen?',
    },
    insertVarTip: 'Drücken Sie die Taste \'/\' zum schnellen Einfügen',
    processData: 'Daten verarbeiten',
    input: 'Eingabe',
    output: 'Ausgabe',
    jinjaEditorPlaceholder: 'Tippen Sie \'/\' oder \'{\' um eine Variable einzufügen',
    viewOnly: 'Nur anzeigen',
    showRunHistory: 'Ausführungsverlauf anzeigen',
    enableJinja: 'Jinja-Vorlagenunterstützung aktivieren',
    learnMore: 'Mehr erfahren',
    copy: 'Kopieren',
    duplicate: 'Duplizieren',
    addBlock: 'Block hinzufügen',
    pasteHere: 'Hier einfügen',
    pointerMode: 'Zeigermodus',
    handMode: 'Handmodus',
    model: 'Modell',
    workflowAsTool: 'Workflow als Tool',
    configureRequired: 'Konfiguration erforderlich',
    configure: 'Konfigurieren',
    manageInTools: 'In den Tools verwalten',
    workflowAsToolTip: 'Nach dem Workflow-Update ist eine Neukonfiguration des Tools erforderlich.',
    viewDetailInTracingPanel: 'Details anzeigen',
    importDSL: 'DSL importieren',
    importFailure: 'Fehler beim Import',
    syncingData: 'Synchronisieren von Daten, nur wenige Sekunden.',
    chooseDSL: 'Wählen Sie eine DSL(yml)-Datei',
    importSuccess: 'Erfolg beim Import',
    importDSLTip: 'Der aktuelle Entwurf wird überschrieben. Exportieren Sie den Workflow vor dem Import als Backup.',
    overwriteAndImport: 'Überschreiben und Importieren',
    backupCurrentDraft: 'Aktuellen Entwurf sichern',
    parallelTip: {
      click: {
        title: 'Klicken',
        desc: 'hinzuzufügen',
      },
      drag: {
        title: 'Ziehen',
        desc: 'um eine Verbindung herzustellen',
      },
      limit: 'Die Parallelität ist auf {{num}} Zweige beschränkt.',
      depthLimit: 'Begrenzung der parallelen Verschachtelungsschicht von {{num}} Schichten',
    },
    parallelRun: 'Paralleler Lauf',
    disconnect: 'Trennen',
    jumpToNode: 'Zu diesem Knoten springen',
    addParallelNode: 'Parallelen Knoten hinzufügen',
    parallel: 'PARALLEL',
    branch: 'ZWEIG',
    featuresDocLink: 'Weitere Informationen',
    ImageUploadLegacyTip: 'Sie können jetzt Dateitypvariablen im Startformular erstellen. Wir werden die Funktion zum Hochladen von Bildern in Zukunft nicht mehr unterstützen.',
    fileUploadTip: 'Die Funktionen zum Hochladen von Bildern wurden auf das Hochladen von Dateien aktualisiert.',
    featuresDescription: 'Verbessern Sie die Benutzererfahrung von Web-Apps',
  },
  env: {
    envPanelTitle: 'Umgebungsvariablen',
    envDescription: 'Umgebungsvariablen können zur Speicherung privater Informationen und Anmeldedaten verwendet werden. Sie sind schreibgeschützt und können beim Export vom DSL-File getrennt werden.',
    envPanelButton: 'Variable hinzufügen',
    modal: {
      title: 'Umgebungsvariable hinzufügen',
      editTitle: 'Umgebungsvariable bearbeiten',
      type: 'Typ',
      name: 'Name',
      namePlaceholder: 'Umgebungsname',
      value: 'Wert',
      valuePlaceholder: 'Umgebungswert',
      secretTip: 'Wird verwendet, um sensible Informationen oder Daten zu definieren, wobei DSL-Einstellungen zur Verhinderung von Lecks konfiguriert sind.',
    },
    export: {
      title: 'Geheime Umgebungsvariablen exportieren?',
      checkbox: 'Geheime Werte exportieren',
      ignore: 'DSL exportieren',
      export: 'DSL mit geheimen Werten exportieren',
    },
  },
  chatVariable: {
    panelTitle: 'Gesprächsvariablen',
    panelDescription: 'Gesprächsvariablen werden verwendet, um interaktive Informationen zu speichern, die das LLM benötigt, einschließlich Gesprächsverlauf, hochgeladene Dateien und Benutzereinstellungen. Sie sind les- und schreibbar.',
    docLink: 'Besuchen Sie unsere Dokumentation für weitere Informationen.',
    button: 'Variable hinzufügen',
    modal: {
      title: 'Gesprächsvariable hinzufügen',
      editTitle: 'Gesprächsvariable bearbeiten',
      name: 'Name',
      namePlaceholder: 'Variablenname',
      type: 'Typ',
      value: 'Standardwert',
      valuePlaceholder: 'Standardwert, leer lassen für keine Festlegung',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Beschreiben Sie die Variable',
      editInJSON: 'In JSON bearbeiten',
      oneByOne: 'Einzeln hinzufügen',
      editInForm: 'Im Formular bearbeiten',
      arrayValue: 'Wert',
      addArrayValue: 'Wert hinzufügen',
      objectKey: 'Schlüssel',
      objectType: 'Typ',
      objectValue: 'Standardwert',
    },
    storedContent: 'Gespeicherter Inhalt',
    updatedAt: 'Aktualisiert am ',
  },
  changeHistory: {
    title: 'Änderungsverlauf',
    placeholder: 'Du hast noch nichts geändert',
    clearHistory: 'Änderungsverlauf löschen',
    hint: 'Hinweis',
    hintText: 'Änderungen werden im Änderungsverlauf aufgezeichnet, der für die Dauer dieser Sitzung auf Ihrem Gerät gespeichert wird. Dieser Verlauf wird gelöscht, wenn Sie den Editor verlassen.',
    stepBackward_one: '{{count}} Schritt zurück',
    stepBackward_other: '{{count}} Schritte zurück',
    stepForward_one: '{{count}} Schritt vorwärts',
    stepForward_other: '{{count}} Schritte vorwärts',
    sessionStart: 'Sitzungsstart',
    currentState: 'Aktueller Zustand',
    nodeTitleChange: 'Blocktitel geändert',
    nodeDescriptionChange: 'Blockbeschreibung geändert',
    nodeDragStop: 'Block verschoben',
    nodeChange: 'Block geändert',
    nodeConnect: 'Block verbunden',
    nodePaste: 'Block eingefügt',
    nodeDelete: 'Block gelöscht',
    nodeAdd: 'Block hinzugefügt',
    nodeResize: 'Blockgröße geändert',
    noteAdd: 'Notiz hinzugefügt',
    noteChange: 'Notiz geändert',
    noteDelete: 'Notiz gelöscht',
    edgeDelete: 'Block getrennt',
  },
  errorMsg: {
    fieldRequired: '{{field}} ist erforderlich',
    authRequired: 'Autorisierung ist erforderlich',
    invalidJson: '{{field}} ist ein ungültiges JSON',
    fields: {
      variable: 'Variablenname',
      variableValue: 'Variablenwert',
      code: 'Code',
      model: 'Modell',
      rerankModel: 'Neusortierungsmodell',
      visionVariable: 'Vision variabel',
    },
    invalidVariable: 'Ungültige Variable',
    rerankModelRequired: 'Bevor Sie das Rerank-Modell aktivieren, bestätigen Sie bitte, dass das Modell in den Einstellungen erfolgreich konfiguriert wurde.',
  },
  singleRun: {
    testRun: 'Testlauf ',
    startRun: 'Lauf starten',
    running: 'Wird ausgeführt',
    testRunIteration: 'Testlaufiteration',
    back: 'Zurück',
    iteration: 'Iteration',
  },
  tabs: {
    'searchBlock': 'Block suchen',
    'blocks': 'Blöcke',
    'tools': 'Werkzeuge',
    'allTool': 'Alle',
    'builtInTool': 'Eingebaut',
    'customTool': 'Benutzerdefiniert',
    'workflowTool': 'Arbeitsablauf',
    'question-understand': 'Fragen verstehen',
    'logic': 'Logik',
    'transform': 'Transformieren',
    'utilities': 'Dienstprogramme',
    'noResult': 'Kein Ergebnis gefunden',
    'searchTool': 'Suchwerkzeug',
  },
  blocks: {
    'start': 'Start',
    'end': 'Ende',
    'answer': 'Antwort',
    'llm': 'LLM',
    'knowledge-retrieval': 'Wissensabruf',
    'question-classifier': 'Fragenklassifizierer',
    'if-else': 'WENN/SONST',
    'code': 'Code',
    'template-transform': 'Vorlage',
    'http-request': 'HTTP-Anfrage',
    'variable-assigner': 'Variablen-Zuweiser',
    'variable-aggregator': 'Variablen-Aggregator',
    'assigner': 'Variablenzuweiser',
    'iteration-start': 'Iterationsstart',
    'iteration': 'Iteration',
    'parameter-extractor': 'Parameter-Extraktor',
    'list-operator': 'List-Operator',
    'document-extractor': 'Doc Extraktor',
  },
  blocksAbout: {
    'start': 'Definieren Sie die Anfangsparameter zum Starten eines Workflows',
    'end': 'Definieren Sie das Ende und den Ergebnistyp eines Workflows',
    'answer': 'Definieren Sie den Antwortinhalt einer Chat-Konversation',
    'llm': 'Große Sprachmodelle aufrufen, um Fragen zu beantworten oder natürliche Sprache zu verarbeiten',
    'knowledge-retrieval': 'Ermöglicht das Abfragen von Textinhalten, die sich auf Benutzerfragen aus der Wissensdatenbank beziehen',
    'question-classifier': 'Definieren Sie die Klassifizierungsbedingungen von Benutzerfragen, LLM kann basierend auf der Klassifikationsbeschreibung festlegen, wie die Konversation fortschreitet',
    'if-else': 'Ermöglicht das Aufteilen des Workflows in zwei Zweige basierend auf if/else-Bedingungen',
    'code': 'Ein Stück Python- oder NodeJS-Code ausführen, um benutzerdefinierte Logik zu implementieren',
    'template-transform': 'Daten in Zeichenfolgen mit Jinja-Vorlagensyntax umwandeln',
    'http-request': 'Ermöglichen, dass Serveranforderungen über das HTTP-Protokoll gesendet werden',
    'variable-assigner': 'Variablen aus mehreren Zweigen in eine einzige Variable zusammenführen, um eine einheitliche Konfiguration der nachgelagerten Knoten zu ermöglichen.',
    'assigner': 'Der Variablenzuweisungsknoten wird verwendet, um beschreibbaren Variablen (wie Gesprächsvariablen) Werte zuzuweisen.',
    'variable-aggregator': 'Variablen aus mehreren Zweigen in eine einzige Variable zusammenführen, um eine einheitliche Konfiguration der nachgelagerten Knoten zu ermöglichen.',
    'iteration': 'Mehrere Schritte an einem Listenobjekt ausführen, bis alle Ergebnisse ausgegeben wurden.',
    'parameter-extractor': 'Verwenden Sie LLM, um strukturierte Parameter aus natürlicher Sprache für Werkzeugaufrufe oder HTTP-Anfragen zu extrahieren.',
    'list-operator': 'Wird verwendet, um Array-Inhalte zu filtern oder zu sortieren.',
    'document-extractor': 'Wird verwendet, um hochgeladene Dokumente in Textinhalte zu analysieren, die für LLM leicht verständlich sind.',
  },
  operator: {
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    zoomTo50: 'Auf 50% vergrößern',
    zoomTo100: 'Auf 100% vergrößern',
    zoomToFit: 'An Bildschirm anpassen',
  },
  panel: {
    userInputField: 'Benutzereingabefeld',
    changeBlock: 'Block ändern',
    helpLink: 'Hilfelink',
    about: 'Über',
    createdBy: 'Erstellt von ',
    nextStep: 'Nächster Schritt',
    addNextStep: 'Fügen Sie den nächsten Block in diesem Workflow hinzu',
    selectNextStep: 'Nächsten Block auswählen',
    runThisStep: 'Diesen Schritt ausführen',
    checklist: 'Checkliste',
    checklistTip: 'Stellen Sie sicher, dass alle Probleme vor der Veröffentlichung gelöst sind',
    checklistResolved: 'Alle Probleme wurden gelöst',
    organizeBlocks: 'Blöcke organisieren',
    change: 'Ändern',
    optional: '(optional)',
  },
  nodes: {
    common: {
      outputVars: 'Ausgabevariablen',
      insertVarTip: 'Variable einfügen',
      memory: {
        memory: 'Speicher',
        memoryTip: 'Einstellungen des Chat-Speichers',
        windowSize: 'Fenstergröße',
        conversationRoleName: 'Rollenname in der Konversation',
        user: 'Benutzer-Präfix',
        assistant: 'Assistenten-Präfix',
      },
      memories: {
        title: 'Erinnerungen',
        tip: 'Chat-Speicher',
        builtIn: 'Eingebaut',
      },
    },
    start: {
      required: 'erforderlich',
      inputField: 'Eingabefeld',
      builtInVar: 'Eingebaute Variablen',
      outputVars: {
        query: 'Benutzereingabe',
        memories: {
          des: 'Konversationsverlauf',
          type: 'Nachrichtentyp',
          content: 'Nachrichteninhalt',
        },
        files: 'Dateiliste',
      },
      noVarTip: 'Legen Sie Eingaben fest, die im Workflow verwendet werden können',
    },
    end: {
      outputs: 'Ausgaben',
      output: {
        type: 'Ausgabetyp',
        variable: 'Ausgabevariable',
      },
      type: {
        'none': 'Keine',
        'plain-text': 'Klartext',
        'structured': 'Strukturiert',
      },
    },
    answer: {
      answer: 'Antwort',
      outputVars: 'Ausgabevariablen',
    },
    llm: {
      model: 'Modell',
      variables: 'Variablen',
      context: 'Kontext',
      contextTooltip: 'Sie können Wissen als Kontext importieren',
      notSetContextInPromptTip: 'Um die Kontextfunktion zu aktivieren, füllen Sie die Kontextvariable im PROMPT aus.',
      prompt: 'Prompt',
      roleDescription: {
        system: 'Geben Sie hochrangige Anweisungen für die Konversation',
        user: 'Geben Sie dem Modell Anweisungen, Abfragen oder beliebigen texteingabebasierten Input',
        assistant: 'Die Antworten des Modells basierend auf den Benutzernachrichten',
      },
      addMessage: 'Nachricht hinzufügen',
      vision: 'Vision',
      files: 'Dateien',
      resolution: {
        name: 'Auflösung',
        high: 'Hoch',
        low: 'Niedrig',
      },
      outputVars: {
        output: 'Generierter Inhalt',
        usage: 'Nutzungsinformationen des Modells',
      },
      singleRun: {
        variable: 'Variable',
      },
      sysQueryInUser: 'sys.query in Benutzernachricht erforderlich',
    },
    knowledgeRetrieval: {
      queryVariable: 'Abfragevariable',
      knowledge: 'Wissen',
      outputVars: {
        output: 'Abgerufene segmentierte Daten',
        content: 'Segmentierter Inhalt',
        title: 'Segmentierter Titel',
        icon: 'Segmentiertes Symbol',
        url: 'Segmentierte URL',
        metadata: 'Weitere Metadaten',
      },
    },
    http: {
      inputVars: 'Eingabevariablen',
      api: 'API',
      apiPlaceholder: 'Geben Sie die URL ein, tippen Sie ‘/’, um Variable einzufügen',
      notStartWithHttp: 'API sollte mit http:// oder https:// beginnen',
      key: 'Schlüssel',
      value: 'Wert',
      bulkEdit: 'Massenerfassung',
      keyValueEdit: 'Schlüssel-Wert-Erfassung',
      headers: 'Header',
      params: 'Parameter',
      body: 'Body',
      outputVars: {
        body: 'Antwortinhalt',
        statusCode: 'Antwortstatuscode',
        headers: 'Antwort-Header-Liste im JSON-Format',
        files: 'Dateiliste',
      },
      authorization: {
        'authorization': 'Autorisierung',
        'authorizationType': 'Autorisierungstyp',
        'no-auth': 'Keine',
        'api-key': 'API-Schlüssel',
        'auth-type': 'Autorisierungstyp',
        'basic': 'Basis',
        'bearer': 'Bearer',
        'custom': 'Benutzerdefiniert',
        'api-key-title': 'API-Schlüssel',
        'header': 'Header',
      },
      insertVarPlaceholder: 'tippen Sie ‘/’, um Variable einzufügen',
      timeout: {
        title: 'Zeitüberschreitung',
        connectLabel: 'Verbindungs-Zeitüberschreitung',
        connectPlaceholder: 'Geben Sie die Verbindungs-Zeitüberschreitung in Sekunden ein',
        readLabel: 'Lese-Zeitüberschreitung',
        readPlaceholder: 'Geben Sie die Lese-Zeitüberschreitung in Sekunden ein',
        writeLabel: 'Schreib-Zeitüberschreitung',
        writePlaceholder: 'Geben Sie die Schreib-Zeitüberschreitung in Sekunden ein',
      },
      type: 'Art',
      binaryFileVariable: 'Variable der Binärdatei',
    },
    code: {
      inputVars: 'Eingabevariablen',
      outputVars: 'Ausgabevariablen',
      advancedDependencies: 'Erweiterte Abhängigkeiten',
      advancedDependenciesTip: 'Fügen Sie hier einige vorinstallierte Abhängigkeiten hinzu, die mehr Zeit in Anspruch nehmen oder nicht standardmäßig eingebaut sind',
      searchDependencies: 'Abhängigkeiten suchen',
    },
    templateTransform: {
      inputVars: 'Eingabevariablen',
      code: 'Code',
      codeSupportTip: 'Unterstützt nur Jinja2',
      outputVars: {
        output: 'Transformierter Inhalt',
      },
    },
    ifElse: {
      if: 'Wenn',
      else: 'Sonst',
      elseDescription: 'Wird verwendet, um die Logik zu definieren, die ausgeführt werden soll, wenn die if-Bedingung nicht erfüllt ist.',
      and: 'und',
      or: 'oder',
      operator: 'Operator',
      notSetVariable: 'Bitte setzen Sie zuerst die Variable',
      comparisonOperator: {
        'contains': 'enthält',
        'not contains': 'enthält nicht',
        'start with': 'beginnt mit',
        'end with': 'endet mit',
        'is': 'ist',
        'is not': 'ist nicht',
        'empty': 'ist leer',
        'not empty': 'ist nicht leer',
        'null': 'ist null',
        'not null': 'ist nicht null',
        'regex match': 'Regex-Übereinstimmung',
        'not exists': 'existiert nicht',
        'in': 'in',
        'all of': 'alle',
        'exists': 'existiert',
        'not in': 'nicht in',
      },
      enterValue: 'Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      conditionNotSetup: 'Bedingung NICHT eingerichtet',
      selectVariable: 'Variable auswählen...',
      optionName: {
        video: 'Video',
        url: 'URL (Englisch)',
        image: 'Bild',
        localUpload: 'Lokaler Upload',
        audio: 'Audio',
        doc: 'Doktor',
      },
      select: 'Auswählen',
      addSubVariable: 'Untervariable',
    },
    variableAssigner: {
      title: 'Variablen zuweisen',
      outputType: 'Ausgabetyp',
      varNotSet: 'Variable nicht gesetzt',
      noVarTip: 'Fügen Sie die zuzuweisenden Variablen hinzu',
      type: {
        string: 'String',
        number: 'Nummer',
        object: 'Objekt',
        array: 'Array',
      },
      aggregationGroup: 'Aggregationsgruppe',
      aggregationGroupTip: 'Durch Aktivieren dieser Funktion kann der Variablen-Aggregator mehrere Variablensätze aggregieren.',
      addGroup: 'Gruppe hinzufügen',
      outputVars: {
        varDescribe: 'Ausgabe {{groupName}}',
      },
      setAssignVariable: 'Zuweisungsvariable festlegen',
    },
    assigner: {
      'assignedVariable': 'Zugewiesene Variable',
      'writeMode': 'Schreibmodus',
      'writeModeTip': 'Wenn die ZUGEWIESENE VARIABLE ein Array ist, fügt der Anhängemodus am Ende hinzu.',
      'over-write': 'Überschreiben',
      'append': 'Anhängen',
      'plus': 'Plus',
      'clear': 'Löschen',
      'setVariable': 'Variable setzen',
      'variable': 'Variable',
    },
    tool: {
      toAuthorize: 'Autorisieren',
      inputVars: 'Eingabevariablen',
      outputVars: {
        text: 'durch das Tool generierter Inhalt',
        files: {
          title: 'durch das Tool generierte Dateien',
          type: 'Unterstützungstyp. Derzeit nur Bild unterstützt',
          transfer_method: 'Übertragungsmethode. Der Wert ist remote_url oder local_file',
          url: 'Bild-URL',
          upload_file_id: 'Hochgeladene Datei-ID',
        },
        json: 'von einem Tool generiertes JSON',
      },
    },
    questionClassifiers: {
      model: 'Modell',
      inputVars: 'Eingabevariablen',
      outputVars: {
        className: 'Klassennamen',
      },
      class: 'Klasse',
      classNamePlaceholder: 'Geben Sie Ihren Klassennamen ein',
      advancedSetting: 'Erweiterte Einstellung',
      topicName: 'Themenname',
      topicPlaceholder: 'Geben Sie Ihren Themennamen ein',
      addClass: 'Klasse hinzufügen',
      instruction: 'Anweisung',
      instructionTip: 'Geben Sie zusätzliche Anweisungen ein, um dem Fragenklassifizierer zu helfen, besser zu verstehen, wie Fragen kategorisiert werden sollen.',
      instructionPlaceholder: 'Geben Sie Ihre Anweisung ein',
    },
    parameterExtractor: {
      inputVar: 'Eingabevariable',
      extractParameters: 'Parameter extrahieren',
      importFromTool: 'Aus Tools importieren',
      addExtractParameter: 'Extraktionsparameter hinzufügen',
      addExtractParameterContent: {
        name: 'Name',
        namePlaceholder: 'Name des Extraktionsparameters',
        type: 'Typ',
        typePlaceholder: 'Typ des Extraktionsparameters',
        description: 'Beschreibung',
        descriptionPlaceholder: 'Beschreibung des Extraktionsparameters',
        required: 'Erforderlich',
        requiredContent: 'Erforderlich wird nur als Referenz für die Modellschlussfolgerung verwendet und nicht für die zwingende Validierung der Parameter-Ausgabe.',
      },
      extractParametersNotSet: 'Extraktionsparameter nicht eingerichtet',
      instruction: 'Anweisung',
      instructionTip: 'Geben Sie zusätzliche Anweisungen ein, um dem Parameter-Extraktor zu helfen, zu verstehen, wie Parameter extrahiert werden.',
      advancedSetting: 'Erweiterte Einstellung',
      reasoningMode: 'Schlussfolgerungsmodus',
      reasoningModeTip: 'Sie können den entsprechenden Schlussfolgerungsmodus basierend auf der Fähigkeit des Modells wählen, auf Anweisungen zur Funktionsaufruf- oder Eingabeaufforderungen zu reagieren.',
      isSuccess: 'Ist Erfolg. Bei Erfolg beträgt der Wert 1, bei Misserfolg beträgt der Wert 0.',
      errorReason: 'Fehlergrund',
    },
    iteration: {
      deleteTitle: 'Iterationsknoten löschen?',
      deleteDesc: 'Das Löschen des Iterationsknotens löscht alle untergeordneten Knoten',
      input: 'Eingabe',
      output: 'Ausgabevariablen',
      iteration_one: '{{count}} Iteration',
      iteration_other: '{{count}} Iterationen',
      currentIteration: 'Aktuelle Iteration',
      ErrorMethod: {
        operationTerminated: 'beendet',
        removeAbnormalOutput: 'remove-abnormale_ausgabe',
        continueOnError: 'Fehler "Fortfahren bei"',
      },
      MaxParallelismTitle: 'Maximale Parallelität',
      parallelMode: 'Paralleler Modus',
      errorResponseMethod: 'Methode der Fehlerantwort',
      error_one: '{{Anzahl}} Fehler',
      error_other: '{{Anzahl}} Irrtümer',
      MaxParallelismDesc: 'Die maximale Parallelität wird verwendet, um die Anzahl der Aufgaben zu steuern, die gleichzeitig in einer einzigen Iteration ausgeführt werden.',
      parallelPanelDesc: 'Im parallelen Modus unterstützen Aufgaben in der Iteration die parallele Ausführung.',
      parallelModeEnableDesc: 'Im parallelen Modus unterstützen Aufgaben innerhalb von Iterationen die parallele Ausführung. Sie können dies im Eigenschaftenbereich auf der rechten Seite konfigurieren.',
      answerNodeWarningDesc: 'Warnung im parallelen Modus: Antwortknoten, Zuweisungen von Konversationsvariablen und persistente Lese-/Schreibvorgänge innerhalb von Iterationen können Ausnahmen verursachen.',
      parallelModeEnableTitle: 'Paralleler Modus aktiviert',
      parallelModeUpper: 'PARALLELER MODUS',
      comma: ',',
    },
    note: {
      editor: {
        strikethrough: 'Durchgestrichen',
        large: 'Groß',
        bulletList: 'Aufzählung',
        italic: 'Kursiv',
        small: 'Klein',
        bold: 'Kühn',
        placeholder: 'Schreiben Sie Ihre Notiz...',
        openLink: 'Offen',
        showAuthor: 'Autor anzeigen',
        medium: 'Mittel',
        unlink: 'Trennen',
        link: 'Verbinden',
        enterUrl: 'URL eingeben...',
        invalidUrl: 'Ungültige URL',
      },
      addNote: 'Notiz hinzufügen',
    },
    docExtractor: {
      outputVars: {
        text: 'Extrahierter Text',
      },
      supportFileTypes: 'Unterstützte Dateitypen: {{types}}.',
      inputVar: 'Eingabevariable',
      learnMore: 'Weitere Informationen',
    },
    listFilter: {
      outputVars: {
        first_record: 'Erste Aufnahme',
        result: 'Ergebnis filtern',
        last_record: 'Letzter Datensatz',
      },
      asc: 'ASC',
      limit: 'Top N',
      desc: 'DESC',
      orderBy: 'Sortieren nach',
      inputVar: 'Eingabevariable',
      filterConditionComparisonOperator: 'Operator für den Bedingungsvergleich filtern',
      filterConditionComparisonValue: 'Wert der Filterbedingung',
      filterConditionKey: 'Bedingungsschlüssel filtern',
      filterCondition: 'Filter-Bedingung',
      selectVariableKeyPlaceholder: 'Untervariablenschlüssel auswählen',
    },
  },
  tracing: {
    stopBy: 'Gestoppt von {{user}}',
  },
}

export default translation
