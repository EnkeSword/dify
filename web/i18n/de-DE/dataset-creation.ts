const translation = {
  steps: {
    header: {
      creation: 'Wissen erstellen',
      update: 'Daten hinzufügen',
    },
    one: 'Datenquelle wählen',
    two: 'Textvorverarbeitung und Bereinigung',
    three: 'Ausführen und beenden',
  },
  error: {
    unavailable: 'Dieses Wissen ist nicht verfügbar',
  },
  stepOne: {
    filePreview: 'Dateivorschau',
    pagePreview: 'Seitenvorschau',
    dataSourceType: {
      file: 'Import aus Textdatei',
      notion: 'Synchronisation aus Notion',
      web: 'Synchronisation von Webseite',
    },
    uploader: {
      title: 'Textdatei hochladen',
      button: 'Datei hierher ziehen oder',
      browse: 'Durchsuchen',
      tip: 'Unterstützt {{supportTypes}}. Maximal {{size}}MB pro Datei.',
      validation: {
        typeError: 'Dateityp nicht unterstützt',
        size: 'Datei zu groß. Maximum ist {{size}}MB',
        count: 'Mehrere Dateien nicht unterstützt',
        filesNumber: 'Sie haben das Limit für die Stapelverarbeitung von {{filesNumber}} erreicht.',
      },
      cancel: 'Abbrechen',
      change: 'Ändern',
      failed: 'Hochladen fehlgeschlagen',
    },
    notionSyncTitle: 'Notion ist nicht verbunden',
    notionSyncTip: 'Um mit Notion zu synchronisieren, muss zuerst eine Verbindung zu Notion hergestellt werden.',
    connect: 'Verbinden gehen',
    button: 'weiter',
    emptyDatasetCreation: 'Ich möchte ein leeres Wissen erstellen',
    modal: {
      title: 'Ein leeres Wissen erstellen',
      tip: 'Ein leeres Wissen enthält keine Dokumente, und Sie können jederzeit Dokumente hochladen.',
      input: 'Wissensname',
      placeholder: 'Bitte eingeben',
      nameNotEmpty: 'Name darf nicht leer sein',
      nameLengthInvalid: 'Name muss zwischen 1 bis 40 Zeichen lang sein',
      cancelButton: 'Abbrechen',
      confirmButton: 'Erstellen',
      failed: 'Erstellung fehlgeschlagen',
    },
    website: {
      preview: 'Vorschau',
      totalPageScraped: 'Gesamtzahl der gescrapten Seiten:',
      fireCrawlNotConfigured: 'Firecrawl ist nicht konfiguriert',
      options: 'Optionen',
      excludePaths: 'Pfade ausschließen',
      limit: 'Grenze',
      exceptionErrorTitle: 'Beim Ausführen des Firecrawl-Auftrags ist eine Ausnahme aufgetreten:',
      selectAll: 'Alles auswählen',
      includeOnlyPaths: 'Nur Pfade einschließen',
      run: 'Laufen',
      firecrawlDoc: 'Firecrawl-Dokumente',
      configure: 'Konfigurieren',
      fireCrawlNotConfiguredDescription: 'Konfigurieren Sie Firecrawl mit dem API-Schlüssel, um es zu verwenden.',
      maxDepth: 'Maximale Tiefe',
      unknownError: 'Unbekannter Fehler',
      resetAll: 'Alles zurücksetzen',
      extractOnlyMainContent: 'Extrahieren Sie nur den Hauptinhalt (keine Kopf-, Navigations- und Fußzeilen usw.)',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      firecrawlTitle: 'Extrahieren von Webinhalten mit 🔥Firecrawl',
      maxDepthTooltip: 'Maximale Tiefe für das Crawlen relativ zur eingegebenen URL. Tiefe 0 kratzt nur die Seite der eingegebenen URL, Tiefe 1 kratzt die URL und alles nach der eingegebenen URL + ein / und so weiter.',
      crawlSubPage: 'Unterseiten crawlen',
      scrapTimeInfo: 'Insgesamt {{{total}} Seiten innerhalb von {{time}}s gescrapt',
    },
  },
  stepTwo: {
    segmentation: 'Chunk-Einstellungen',
    auto: 'Automatisch',
    autoDescription: 'Stellt Chunk- und Vorverarbeitungsregeln automatisch ein. Unbekannten Benutzern wird dies empfohlen.',
    custom: 'Benutzerdefiniert',
    customDescription: 'Chunk-Regeln, Chunk-Länge und Vorverarbeitungsregeln usw. anpassen.',
    separator: 'Segmentidentifikator',
    separatorPlaceholder: 'Zum Beispiel Neuer Absatz (\\\\n) oder spezieller Separator (wie "***")',
    maxLength: 'Maximale Chunk-Länge',
    overlap: 'Chunk-Überlappung',
    overlapTip: 'Die Einstellung der Chunk-Überlappung kann die semantische Relevanz zwischen ihnen aufrechterhalten und so die Abrufeffekt verbessern. Es wird empfohlen, 10%-25% der maximalen Chunk-Größe einzustellen.',
    overlapCheck: 'Chunk-Überlappung sollte nicht größer als maximale Chunk-Länge sein',
    rules: 'Textvorverarbeitungsregeln',
    removeExtraSpaces: 'Mehrfache Leerzeichen, Zeilenumbrüche und Tabulatoren ersetzen',
    removeUrlEmails: 'Alle URLs und E-Mail-Adressen löschen',
    removeStopwords: 'Stopwörter wie "ein", "eine", "der" entfernen',
    preview: 'Bestätigen & Vorschau',
    reset: 'Zurücksetzen',
    indexMode: 'Indexmodus',
    qualified: 'Hohe Qualität',
    recommend: 'Empfehlen',
    qualifiedTip: 'Ruft standardmäßige Systemeinbettungsschnittstelle für die Verarbeitung auf, um höhere Genauigkeit bei Benutzerabfragen zu bieten.',
    warning: 'Bitte zuerst den API-Schlüssel des Modellanbieters einrichten.',
    click: 'Zu den Einstellungen gehen',
    economical: 'Ökonomisch',
    economicalTip: 'Verwendet Offline-Vektor-Engines, Schlagwortindizes usw., um die Genauigkeit ohne Tokenverbrauch zu reduzieren',
    QATitle: 'Segmentierung im Frage-und-Antwort-Format',
    QATip: 'Diese Option zu aktivieren, wird mehr Tokens verbrauchen',
    QALanguage: 'Segmentierung verwenden',
    estimateCost: 'Schätzung',
    estimateSegment: 'Geschätzte Chunks',
    segmentCount: 'Chunks',
    calculating: 'Berechnung...',
    fileSource: 'Dokumente vorverarbeiten',
    notionSource: 'Seiten vorverarbeiten',
    other: 'und weitere ',
    fileUnit: ' Dateien',
    notionUnit: ' Seiten',
    previousStep: 'Vorheriger Schritt',
    nextStep: 'Speichern & Verarbeiten',
    save: 'Speichern & Verarbeiten',
    cancel: 'Abbrechen',
    sideTipTitle: 'Warum segmentieren und vorverarbeiten?',
    sideTipP1: 'Bei der Verarbeitung von Textdaten sind Segmentierung und Bereinigung zwei wichtige Vorverarbeitungsschritte.',
    sideTipP2: 'Segmentierung teilt langen Text in Absätze, damit Modelle ihn besser verstehen können. Dies verbessert die Qualität und Relevanz der Modellergebnisse.',
    sideTipP3: 'Bereinigung entfernt unnötige Zeichen und Formate, macht das Wissen sauberer und leichter zu parsen.',
    sideTipP4: 'Richtige Segmentierung und Bereinigung verbessern die Modellleistung und liefern genauere und wertvollere Ergebnisse.',
    previewTitle: 'Vorschau',
    previewTitleButton: 'Vorschau',
    previewButton: 'Umschalten zum Frage-und-Antwort-Format',
    previewSwitchTipStart: 'Die aktuelle Chunk-Vorschau ist im Textformat, ein Wechsel zur Vorschau im Frage-und-Antwort-Format wird',
    previewSwitchTipEnd: ' zusätzliche Tokens verbrauchen',
    characters: 'Zeichen',
    indexSettingTip: 'Um die Indexmethode zu ändern, bitte gehen Sie zu den ',
    retrievalSettingTip: 'Um die Indexmethode zu ändern, bitte gehen Sie zu den ',
    datasetSettingLink: 'Wissenseinstellungen.',
    websiteSource: 'Preprocess-Website',
    webpageUnit: 'Seiten',
    separatorTip: 'Ein Trennzeichen ist das Zeichen, das zum Trennen von Text verwendet wird. \\n\\n und \\n sind häufig verwendete Trennzeichen zum Trennen von Absätzen und Zeilen. In Kombination mit Kommas (\\n\\n,\\n) werden Absätze nach Zeilen segmentiert, wenn die maximale Blocklänge überschritten wird. Sie können auch spezielle, von Ihnen selbst definierte Trennzeichen verwenden (z. B. ***).',
  },
  stepThree: {
    creationTitle: '🎉 Wissen erstellt',
    creationContent: 'Wir haben das Wissen automatisch benannt, Sie können es jederzeit ändern',
    label: 'Wissensname',
    additionTitle: '🎉 Dokument hochgeladen',
    additionP1: 'Das Dokument wurde zum Wissen hinzugefügt',
    additionP2: ', Sie können es in der Dokumentenliste des Wissens finden.',
    stop: 'Verarbeitung stoppen',
    resume: 'Verarbeitung fortsetzen',
    navTo: 'Zum Dokument gehen',
    sideTipTitle: 'Was kommt als Nächstes',
    sideTipContent: 'Nachdem das Dokument indiziert wurde, kann das Wissen in die Anwendung als Kontext integriert werden, Sie finden die Kontexteinstellung auf der Seite zur Eingabeaufforderungen-Orchestrierung. Sie können es auch als unabhängiges ChatGPT-Indexierungsplugin zur Veröffentlichung erstellen.',
    modelTitle: 'Sind Sie sicher, dass Sie die Einbettung stoppen möchten?',
    modelContent: 'Wenn Sie die Verarbeitung später fortsetzen möchten, werden Sie dort weitermachen, wo Sie aufgehört haben.',
    modelButtonConfirm: 'Bestätigen',
    modelButtonCancel: 'Abbrechen',
  },
  firecrawl: {
    apiKeyPlaceholder: 'API-Schlüssel von firecrawl.dev',
    configFirecrawl: 'Konfigurieren von 🔥Firecrawl',
    getApiKeyLinkText: 'Holen Sie sich Ihren API-Schlüssel von firecrawl.dev',
  },
}

export default translation
