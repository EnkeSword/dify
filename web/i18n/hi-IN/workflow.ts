const translation = {
  common: {
    undo: 'पूर्ववत करें',
    redo: 'फिर से करें',
    editing: 'संपादन',
    autoSaved: 'स्वतः सहेजा गया',
    unpublished: 'अप्रकाशित',
    published: 'प्रकाशित',
    publish: 'प्रकाशित करें',
    update: 'अपडेट करें',
    run: 'चलाएं',
    running: 'चल रहा है',
    inRunMode: 'रन मोड में',
    inPreview: 'पूर्वावलोकन में',
    inPreviewMode: 'पूर्वावलोकन मोड में',
    preview: 'पूर्वावलोकन',
    viewRunHistory: 'रन इतिहास देखें',
    runHistory: 'रन इतिहास',
    goBackToEdit: 'संपादक पर वापस जाएं',
    conversationLog: 'वार्तालाप लॉग',
    features: 'विशेषताएं',
    debugAndPreview: 'पूर्वावलोकन',
    restart: 'पुनः आरंभ करें',
    currentDraft: 'वर्तमान ड्राफ्ट',
    currentDraftUnpublished: 'वर्तमान ड्राफ्ट अप्रकाशित',
    latestPublished: 'नवीनतम प्रकाशित',
    publishedAt: 'प्रकाशित',
    restore: 'पुनर्स्थापित करें',
    runApp: 'ऐप चलाएं',
    batchRunApp: 'बैच ऐप चलाएं',
    accessAPIReference: 'एपीआई संदर्भ तक पहुंचें',
    embedIntoSite: 'साइट में एम्बेड करें',
    addTitle: 'शीर्षक जोड़ें...',
    addDescription: 'विवरण जोड़ें...',
    noVar: 'कोई वेरिएबल नहीं',
    searchVar: 'वेरिएबल खोजें',
    variableNamePlaceholder: 'वेरिएबल नाम',
    setVarValuePlaceholder: 'वेरिएबल सेट करें',
    needConnectTip: 'यह चरण किसी से जुड़ा नहीं है',
    maxTreeDepth: 'प्रति शाखा अधिकतम {{depth}} नोड्स की सीमा',
    needEndNode: 'अंत ब्लॉक जोड़ा जाना चाहिए',
    needAnswerNode: 'उत्तर ब्लॉक जोड़ा जाना चाहिए',
    workflowProcess: 'कार्यप्रवाह प्रक्रिया',
    notRunning: 'अभी तक नहीं चल रहा',
    previewPlaceholder:
      'चैटबॉट का डीबग शुरू करने के लिए नीचे दिए गए बॉक्स में सामग्री दर्ज करें',
    effectVarConfirm: {
      title: 'वेरिएबल हटाएं',
      content:
        'वेरिएबल अन्य नोड्स में उपयोग किया जाता है। क्या आप अभी भी इसे हटाना चाहते हैं?',
    },
    insertVarTip: 'जल्दी से डालने के लिए \'/\' कुंजी दबाएं',
    processData: 'डेटा प्रोसेस करें',
    input: 'इनपुट',
    output: 'आउटपुट',
    jinjaEditorPlaceholder: 'वेरिएबल डालने के लिए \'/\' या \'{\' टाइप करें',
    viewOnly: 'केवल देखें',
    showRunHistory: 'रन इतिहास दिखाएं',
    enableJinja: 'Jinja टेम्पलेट समर्थन सक्षम करें',
    learnMore: 'अधिक जानें',
    copy: 'कॉपी करें',
    duplicate: 'डुप्लिकेट करें',
    addBlock: 'ब्लॉक जोड़ें',
    pasteHere: 'यहां पेस्ट करें',
    pointerMode: 'पॉइंटर मोड',
    handMode: 'हैंड मोड',
    model: 'मॉडल',
    workflowAsTool: 'टूल के रूप में कार्यप्रवाह',
    configureRequired: 'कॉन्फ़िगरेशन आवश्यक',
    configure: 'कॉन्फ़िगर करें',
    manageInTools: 'टूल्स में प्रबंधित करें',
    workflowAsToolTip:
      'कार्यप्रवाह अपडेट के बाद टूल पुनः कॉन्फ़िगरेशन आवश्यक है।',
    viewDetailInTracingPanel: 'विवरण देखें',
    syncingData: 'डेटा सिंक हो रहा है, बस कुछ सेकंड।',
    overwriteAndImport: 'अधिलेखित और आयात',
    importSuccess: 'सफलता आयात करें',
    chooseDSL: 'डीएसएल (वाईएमएल) फ़ाइल चुनें',
    importDSL: 'DSL आयात करें',
    backupCurrentDraft: 'बैकअप वर्तमान ड्राफ्ट',
    importFailure: 'आयात विफलता',
    importDSLTip: 'वर्तमान ड्राफ्ट ओवरराइट हो जाएगा। आयात करने से पहले वर्कफ़्लो को बैकअप के रूप में निर्यात करें.',
    parallelTip: {
      click: {
        title: 'क्लिक करना',
        desc: 'जोड़ने के लिए',
      },
      drag: {
        title: 'खींचना',
        desc: 'कनेक्ट करने के लिए',
      },
      limit: 'समांतरता {{num}} शाखाओं तक सीमित है।',
      depthLimit: '{{num}} परतों की समानांतर नेस्टिंग परत सीमा',
    },
    disconnect: 'अलग करना',
    parallelRun: 'समानांतर रन',
    jumpToNode: 'इस नोड पर जाएं',
    addParallelNode: 'समानांतर नोड जोड़ें',
    parallel: 'समानांतर',
    branch: 'शाखा',
    featuresDocLink: 'और जानो',
    featuresDescription: 'वेब ऐप उपयोगकर्ता अनुभव को बेहतर बनाएं',
    fileUploadTip: 'छवि अपलोड सुविधाओं को फ़ाइल अपलोड में अपग्रेड किया गया है।',
    ImageUploadLegacyTip: 'अब आप प्रारंभ प्रपत्र में फ़ाइल प्रकार चर बना सकते हैं। हम अब भविष्य में छवि अपलोड सुविधा का समर्थन नहीं करेंगे।',
    importWarning: 'सावधानी',
    importWarningDetails: 'डीएसएल संस्करण अंतर कुछ सुविधाओं को प्रभावित कर सकता है',
    openInExplore: 'एक्सप्लोर में खोलें',
    onFailure: 'असफलता पर',
    addFailureBranch: 'असफल शाखा जोड़ें',
    noHistory: 'कोई इतिहास नहीं',
    loadMore: 'अधिक वर्कफ़्लोज़ लोड करें',
  },
  env: {
    envPanelTitle: 'पर्यावरण चर',
    envDescription: 'पर्यावरण चर का उपयोग निजी जानकारी और क्रेडेंशियल्स को संग्रहित करने के लिए किया जा सकता है। वे केवल पढ़ने योग्य हैं और निर्यात के दौरान DSL फ़ाइल से अलग किए जा सकते हैं।',
    envPanelButton: 'चर जोड़ें',
    modal: {
      title: 'पर्यावरण चर जोड़ें',
      editTitle: 'पर्यावरण चर संपादित करें',
      type: 'प्रकार',
      name: 'नाम',
      namePlaceholder: 'पर्यावरण नाम',
      value: 'मान',
      valuePlaceholder: 'पर्यावरण मान',
      secretTip: 'संवेदनशील जानकारी या डेटा को परिभाषित करने के लिए उपयोग किया जाता है, DSL सेटिंग्स लीक रोकथाम के लिए कॉन्फ़िगर की गई हैं।',
    },
    export: {
      title: 'गुप्त पर्यावरण चर निर्यात करें?',
      checkbox: 'गुप्त मान निर्यात करें',
      ignore: 'DSL निर्यात करें',
      export: 'गुप्त मानों के साथ DSL निर्यात करें',
    },
  },
  chatVariable: {
    panelTitle: 'वार्तालाप चर',
    panelDescription: 'वार्तालाप चर का उपयोग इंटरैक्टिव जानकारी संग्रहित करने के लिए किया जाता है जिसे LLM को याद रखने की आवश्यकता होती है, जिसमें वार्तालाप इतिहास, अपलोड की गई फाइलें, उपयोगकर्ता प्राथमिकताएं शामिल हैं। वे पठनीय और लेखनीय हैं।',
    docLink: 'अधिक जानने के लिए हमारे दस्तावेज़ देखें।',
    button: 'चर जोड़ें',
    modal: {
      title: 'वार्तालाप चर जोड़ें',
      editTitle: 'वार्तालाप चर संपादित करें',
      name: 'नाम',
      namePlaceholder: 'चर का नाम',
      type: 'प्रकार',
      value: 'डिफ़ॉल्ट मान',
      valuePlaceholder: 'डिफ़ॉल्ट मान, सेट न करने के लिए खाली छोड़ दें',
      description: 'विवरण',
      descriptionPlaceholder: 'चर का वर्णन करें',
      editInJSON: 'JSON में संपादित करें',
      oneByOne: 'एक-एक करके जोड़ें',
      editInForm: 'फॉर्म में संपादित करें',
      arrayValue: 'मान',
      addArrayValue: 'मान जोड़ें',
      objectKey: 'कुंजी',
      objectType: 'प्रकार',
      objectValue: 'डिफ़ॉल्ट मान',
    },
    storedContent: 'संग्रहीत सामग्री',
    updatedAt: 'अपडेट किया गया ',
  },
  changeHistory: {
    title: 'परिवर्तन इतिहास',
    placeholder: 'आपने अभी तक कुछ भी नहीं बदला है',
    clearHistory: 'इतिहास साफ़ करें',
    hint: 'संकेत',
    hintText: 'आपके संपादन क्रियाओं को परिवर्तन इतिहास में ट्रैक किया जाता है, जो इस सत्र के दौरान आपके डिवाइस पर संग्रहीत होता है। जब आप संपादक छोड़ेंगे तो यह इतिहास साफ़ हो जाएगा।',
    stepBackward_one: '{{count}} कदम पीछे',
    stepBackward_other: '{{count}} कदम पीछे',
    stepForward_one: '{{count}} कदम आगे',
    stepForward_other: '{{count}} कदम आगे',
    sessionStart: 'सत्र प्रारंभ',
    currentState: 'वर्तमान स्थिति',
    nodeTitleChange: 'ब्लॉक शीर्षक बदला गया',
    nodeDescriptionChange: 'ब्लॉक विवरण बदला गया',
    nodeDragStop: 'ब्लॉक स्थानांतरित किया गया',
    nodeChange: 'ब्लॉक बदला गया',
    nodeConnect: 'ब्लॉक कनेक्ट किया गया',
    nodePaste: 'ब्लॉक पेस्ट किया गया',
    nodeDelete: 'ब्लॉक हटाया गया',
    nodeAdd: 'ब्लॉक जोड़ा गया',
    nodeResize: 'ब्लॉक का आकार बदला गया',
    noteAdd: 'नोट जोड़ा गया',
    noteChange: 'नोट बदला गया',
    noteDelete: 'नोट हटाया गया',
    edgeDelete: 'ब्लॉक डिस्कनेक्ट किया गया',
  },
  errorMsg: {
    fieldRequired: '{{field}} आवश्यक है',
    authRequired: 'प्राधिकरण आवश्यक है',
    invalidJson: '{{field}} अमान्य JSON है',
    fields: {
      variable: 'वेरिएबल नाम',
      variableValue: 'वेरिएबल मान',
      code: 'कोड',
      model: 'मॉडल',
      rerankModel: 'पुनः रैंक मॉडल',
      visionVariable: 'दृष्टि चर',
    },
    invalidVariable: 'अमान्य वेरिएबल',
    rerankModelRequired: 'Rerank मॉडल चालू करने से पहले, कृपया पुष्टि करें कि मॉडल को सेटिंग्स में सफलतापूर्वक कॉन्फ़िगर किया गया है।',
  },
  singleRun: {
    testRun: 'परीक्षण रन',
    startRun: 'रन शुरू करें',
    running: 'चल रहा है',
    testRunIteration: 'परीक्षण रन पुनरावृत्ति',
    back: 'वापस',
    iteration: 'पुनरावृत्ति',
  },
  tabs: {
    'searchBlock': 'ब्लॉक खोजें',
    'blocks': 'ब्लॉक्स',
    'tools': 'टूल्स',
    'allTool': 'सभी',
    'builtInTool': 'अंतर्निहित',
    'customTool': 'कस्टम',
    'workflowTool': 'कार्यप्रवाह',
    'question-understand': 'प्रश्न समझ',
    'logic': 'तर्क',
    'transform': 'परिवर्तन',
    'utilities': 'उपयोगिताएं',
    'noResult': 'कोई मिलान नहीं मिला',
    'searchTool': 'खोज उपकरण',
  },
  blocks: {
    'start': 'प्रारंभ',
    'end': 'समाप्त',
    'answer': 'उत्तर',
    'llm': 'एलएलएम',
    'knowledge-retrieval': 'ज्ञान पुनर्प्राप्ति',
    'question-classifier': 'प्रश्न वर्गीकरण',
    'if-else': 'यदि/अन्यथा',
    'code': 'कोड',
    'template-transform': 'टेम्पलेट',
    'http-request': 'एचटीटीपी अनुरोध',
    'variable-assigner': 'वेरिएबल एग्रीगेटर',
    'variable-aggregator': 'वेरिएबल एग्रीगेटर',
    'assigner': 'चर असाइनर',
    'iteration-start': 'पुनरावृत्ति प्रारंभ',
    'iteration': 'पुनरावृत्ति',
    'parameter-extractor': 'पैरामीटर निष्कर्षक',
    'list-operator': 'सूची ऑपरेटर',
    'document-extractor': 'डॉक्टर एक्सट्रैक्टर',
  },
  blocksAbout: {
    'start': 'वर्कफ़्लो लॉन्च करने के लिए प्रारंभिक पैरामीटर को परिभाषित करें',
    'end': 'वर्कफ़्लो का अंत और परिणाम प्रकार परिभाषित करें',
    'answer': 'चैट संवाद के उत्तर सामग्री को परिभाषित करें',
    'llm': 'प्रश्नों के उत्तर देने या प्राकृतिक भाषा को संसाधित करने के लिए बड़े भाषा मॉडल को आमंत्रित करना',
    'knowledge-retrieval':
      'उपयोगकर्ता प्रश्नों से संबंधित पाठ सामग्री को ज्ञान से पूछने की अनुमति देता है',
    'question-classifier':
      'उपयोगकर्ता प्रश्नों की वर्गीकरण शर्तों को परिभाषित करें, LLM वर्गीकरण विवरण के आधार पर संवाद कैसे आगे बढ़ता है, इसे परिभाषित कर सकता है',
    'if-else':
      'if/else शर्तों के आधार पर वर्कफ़्लो को दो शाखाओं में विभाजित करने की अनुमति देता है',
    'code': 'कस्टम लॉजिक को लागू करने के लिए एक टुकड़ा Python या NodeJS कोड निष्पादित करें',
    'template-transform':
      'Jinja टेम्पलेट सिंटैक्स का उपयोग करके डेटा को स्ट्रिंग में परिवर्तित करें',
    'http-request': 'HTTP प्रोटोकॉल पर सर्वर अनुरोधों को भेजने की अनुमति दें',
    'variable-assigner':
      'डाउनस्ट्रीम नोड्स की एकीकृत कॉन्फ़िगरेशन के लिए बहु-शाखा चर को एकल चर में संकलित करें।',
    'assigner': 'चर असाइनमेंट नोड का उपयोग लिखने योग्य चर (जैसे वार्तालाप चर) को मान असाइन करने के लिए किया जाता है।',
    'variable-aggregator':
      'डाउनस्ट्रीम नोड्स की एकीकृत कॉन्फ़िगरेशन के लिए बहु-शाखा चर को एकल चर में संकलित करें।',
    'iteration':
      'एक सूची वस्तु पर तब तक कई कदम करें जब तक सभी परिणाम आउटपुट न हो जाएं।',
    'parameter-extractor':
      'टूल आमंत्रणों या HTTP अनुरोधों के लिए प्राकृतिक भाषा से संरचित पैरामीटर निकालने के लिए LLM का उपयोग करें।',
    'document-extractor': 'अपलोड किए गए दस्तावेज़ों को पाठ सामग्री में पार्स करने के लिए उपयोग किया जाता है जो एलएलएम द्वारा आसानी से समझा जा सकता है।',
    'list-operator': 'सरणी सामग्री फ़िल्टर या सॉर्ट करने के लिए उपयोग किया जाता है.',
  },
  operator: {
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    zoomTo50: '50% पर ज़ूम करें',
    zoomTo100: '100% पर ज़ूम करें',
    zoomToFit: 'फिट करने के लिए ज़ूम करें',
  },
  panel: {
    userInputField: 'उपयोगकर्ता इनपुट फ़ील्ड',
    changeBlock: 'ब्लॉक बदलें',
    helpLink: 'सहायता लिंक',
    about: 'के बारे में',
    createdBy: 'द्वारा बनाया गया ',
    nextStep: 'अगला कदम',
    addNextStep: 'इस वर्कफ़्लो में अगला ब्लॉक जोड़ें',
    selectNextStep: 'अगला ब्लॉक चुनें',
    runThisStep: 'इस कदम को चलाएं',
    checklist: 'चेकलिस्ट',
    checklistTip:
      'प्रकाशित करने से पहले सुनिश्चित करें कि सभी समस्याएं हल हो गई हैं',
    checklistResolved: 'सभी समस्याएं हल हो गई हैं',
    organizeBlocks: 'ब्लॉक्स को व्यवस्थित करें',
    change: 'बदलें',
    optional: '(वैकल्पिक)',
  },
  nodes: {
    common: {
      outputVars: 'आउटपुट वेरिएबल्स',
      insertVarTip: 'वेरिएबल डालें',
      memory: {
        memory: 'मेमोरी',
        memoryTip: 'चैट मेमोरी सेटिंग्स',
        windowSize: 'विंडो साइज',
        conversationRoleName: 'वार्तालाप भूमिका का नाम',
        user: 'यूजर प्रीफिक्स',
        assistant: 'असिस्टेंट प्रीफिक्स',
      },
      memories: {
        title: 'मेमोरीज',
        tip: 'चैट मेमोरी',
        builtIn: 'निर्मित',
      },
      errorHandle: {
        none: {
          title: 'कोई नहीं',
          desc: 'यदि कोई अपवाद होता है और हैंडल नहीं किया जाता है, तो नोड चलना बंद कर देगा',
        },
        defaultValue: {
          title: 'डिफ़ॉल्ट मान',
          tip: 'त्रुटि पर, मूल्य से नीचे लौटाएगा।',
          output: 'आउटपुट डिफ़ॉल्ट मान',
          inLog: 'नोड अपवाद, डिफ़ॉल्ट मानों के अनुसार आउटपुटिंग।',
          desc: 'जब कोई त्रुटि होती है, तो एक स्थिर आउटपुट सामग्री निर्दिष्ट करें।',
        },
        failBranch: {
          title: 'असफल शाखा',
          customize: 'असफल शाखा तर्क को अनुकूलित करने के लिए कैनवास पर जाएं।',
          inLog: 'नोड अपवाद, स्वचालित रूप से विफल शाखा निष्पादित करेगा। नोड आउटपुट एक त्रुटि प्रकार और त्रुटि संदेश लौटाएगा और उन्हें डाउनस्ट्रीम में पास करेगा।',
          desc: 'जब कोई त्रुटि होती है, तो यह अपवाद शाखा निष्पादित करेगा',
          customizeTip: 'जब विफल शाखा सक्रिय होती है, तो नोड्स द्वारा फेंके गए अपवाद प्रक्रिया को समाप्त नहीं करेंगे। इसके बजाय, यह स्वचालित रूप से पूर्वनिर्धारित विफल शाखा को निष्पादित करेगा, जिससे आप लचीले ढंग से त्रुटि संदेश, रिपोर्ट, सुधार या कार्रवाई छोड़ सकते हैं।',
        },
        partialSucceeded: {
          tip: 'प्रक्रिया में {{num}} नोड्स असामान्य रूप से चल रहे हैं, कृपया लॉग की जांच करने के लिए ट्रेसिंग पर जाएं।',
        },
        title: 'त्रुटि हैंडलिंग',
        tip: 'अपवाद हैंडलिंग रणनीति, ट्रिगर जब एक नोड एक अपवाद का सामना करता है।',
      },
      retry: {
        times: 'गुणा',
        ms: 'सुश्री',
        retryInterval: 'अंतराल का पुनः प्रयास करें',
        retrying: 'पुनर्प्रयास।।।',
        retryFailed: 'पुनः प्रयास विफल रहा',
        retryFailedTimes: '{{times}} पुनः प्रयास विफल रहे',
        retryTimes: 'विफलता पर {{times}} बार पुनः प्रयास करें',
        retries: '{{num}} पुनर्प्रयास',
        maxRetries: 'अधिकतम पुनः प्रयास करता है',
        retrySuccessful: 'पुनः प्रयास सफल',
        retry: 'पुनर्प्रयास',
        retryOnFailure: 'विफलता पर पुनः प्रयास करें',
      },
    },
    start: {
      required: 'आवश्यक',
      inputField: 'इनपुट फील्ड',
      builtInVar: 'निर्मित वेरिएबल्स',
      outputVars: {
        query: 'यूजर इनपुट',
        memories: {
          des: 'वार्तालाप इतिहास',
          type: 'संदेश प्रकार',
          content: 'संदेश सामग्री',
        },
        files: 'फ़ाइल सूची',
      },
      noVarTip: 'वर्कफ्लो में उपयोग के लिए इनपुट्स सेट करें',
    },
    end: {
      outputs: 'आउटपुट्स',
      output: {
        type: 'आउटपुट प्रकार',
        variable: 'आउटपुट वेरिएबल',
      },
      type: {
        'none': 'कोई नहीं',
        'plain-text': 'सादा पाठ',
        'structured': 'संरचित',
      },
    },
    answer: {
      answer: 'उत्तर',
      outputVars: 'आउटपुट वेरिएबल्स',
    },
    llm: {
      model: 'मॉडल',
      variables: 'वेरिएबल्स',
      context: 'संदर्भ',
      contextTooltip: 'संदर्भ के रूप में ज्ञान आयात कर सकते हैं',
      notSetContextInPromptTip:
        'संदर्भ सुविधा को सक्षम करने के लिए, कृपया प्रॉम्प्ट में संदर्भ वेरिएबल भरें।',
      prompt: 'प्रॉम्प्ट',
      roleDescription: {
        system: 'वार्तालाप के लिए उच्च स्तरीय निर्देश दें',
        user: 'मॉडल को निर्देश, प्रश्न या कोई भी पाठ-आधारित इनपुट प्रदान करें',
        assistant: 'यूजर संदेशों के आधार पर मॉडल की प्रतिक्रियाएं',
      },
      addMessage: 'संदेश जोड़ें',
      vision: 'दृष्टि',
      files: 'फाइलें',
      resolution: {
        name: 'रेजोल्यूशन',
        high: 'उच्च',
        low: 'निम्न',
      },
      outputVars: {
        output: 'सामग्री उत्पन्न करें',
        usage: 'मॉडल उपयोग जानकारी',
      },
      singleRun: {
        variable: 'वेरिएबल',
      },
      sysQueryInUser: 'उपयोगकर्ता संदेश में sys.query आवश्यक है',
    },
    knowledgeRetrieval: {
      queryVariable: 'प्रश्न वेरिएबल',
      knowledge: 'ज्ञान',
      outputVars: {
        output: 'प्राप्त विभाजित डेटा',
        content: 'विभाजित सामग्री',
        title: 'विभाजित शीर्षक',
        icon: 'विभाजित आइकन',
        url: 'विभाजित URL',
        metadata: 'अन्य मेटाडेटा',
      },
    },
    http: {
      inputVars: 'इनपुट वेरिएबल्स',
      api: 'API',
      apiPlaceholder: 'URL दर्ज करें, वेरिएबल डालने के लिए ‘/’ टाइप करें',
      notStartWithHttp: 'API को http:// या https:// से शुरू होना चाहिए',
      key: 'कुंजी',
      value: 'मान',
      bulkEdit: 'थोक संपादन',
      keyValueEdit: 'कुंजी-मान संपादन',
      headers: 'हेडर्स',
      params: 'पैरामीटर्स',
      body: 'बॉडी',
      outputVars: {
        body: 'प्रतिक्रिया सामग्री',
        statusCode: 'प्रतिक्रिया स्थिति कोड',
        headers: 'प्रतिक्रिया हेडर सूची JSON',
        files: 'फ़ाइल सूची',
      },
      authorization: {
        'authorization': 'अधिकृति',
        'authorizationType': 'अधिकृति प्रकार',
        'no-auth': 'कोई नहीं',
        'api-key': 'API-की',
        'auth-type': 'अधिकृति प्रकार',
        'basic': 'बेसिक',
        'bearer': 'बियरर',
        'custom': 'कस्टम',
        'api-key-title': 'API की',
        'header': 'हेडर',
      },
      insertVarPlaceholder: 'वेरिएबल डालने के लिए \'/\' टाइप करें',
      timeout: {
        title: 'टाइमआउट',
        connectLabel: 'कनेक्शन टाइमआउट',
        connectPlaceholder: 'कनेक्शन टाइमआउट सेकंड में दर्ज करें',
        readLabel: 'रीड टाइमआउट',
        readPlaceholder: 'रीड टाइमआउट सेकंड में दर्ज करें',
        writeLabel: 'राइट टाइमआउट',
        writePlaceholder: 'राइट टाइमआउट सेकंड में दर्ज करें',
      },
      type: 'प्रकार',
      binaryFileVariable: 'बाइनरी फ़ाइल चर',
      extractListPlaceholder: 'सूची आइटम इंडेक्स दर्ज करें, \'/\' इन्सर्ट वेरिएबल टाइप करें',
      curl: {
        placeholder: 'यहां cURL स्ट्रिंग पेस्ट करें',
        title: 'cURL से आयात करें',
      },
    },
    code: {
      inputVars: 'इनपुट वेरिएबल्स',
      outputVars: 'आउटपुट वेरिएबल्स',
      advancedDependencies: 'उन्नत निर्भरताएँ',
      advancedDependenciesTip:
        'कुछ प्रीलोडेड निर्भरताएँ जोड़ें जिनका उपयोग करने में अधिक समय लगता है या जो डिफ़ॉल्ट निर्मित में नहीं हैं',
      searchDependencies: 'निर्भरताएँ खोजें',
    },
    templateTransform: {
      inputVars: 'इनपुट वेरिएबल्स',
      code: 'कोड',
      codeSupportTip: 'केवल Jinja2 का समर्थन करता है',
      outputVars: {
        output: 'रूपांतरित सामग्री',
      },
    },
    ifElse: {
      if: 'यदि',
      else: 'अन्य',
      elseDescription:
        'इस तर्क को परिभाषित करने के लिए प्रयोग किया जाता है जो यदि शर्त पूरी नहीं होती है तो निष्पादित किया जाना चाहिए।',
      and: 'और',
      or: 'या',
      operator: 'ऑपरेटर',
      notSetVariable: 'कृपया पहले वेरिएबल सेट करें',
      comparisonOperator: {
        'contains': 'शामिल है',
        'not contains': 'शामिल नहीं है',
        'start with': 'से शुरू होता है',
        'end with': 'पर समाप्त होता है',
        'is': 'है',
        'is not': 'नहीं है',
        'empty': 'खाली है',
        'not empty': 'खाली नहीं है',
        'null': 'शून्य है',
        'not null': 'शून्य नहीं है',
        'regex match': 'रेगेक्स मैच',
        'in': 'में',
        'all of': 'के सभी',
        'not exists': 'मौजूद नहीं है',
        'exists': 'मौजूद है',
        'not in': 'नहीं है',
      },
      enterValue: 'मान दर्ज करें',
      addCondition: 'शर्त जोड़ें',
      conditionNotSetup: 'शर्त सेटअप नहीं है',
      selectVariable: 'चर का चयन करें...',
      optionName: {
        url: 'यूआरएल',
        video: 'वीडियो',
        doc: 'डॉक्टर',
        localUpload: 'स्थानीय अपलोड',
        image: 'छवि',
        audio: 'ऑडियो',
      },
      select: 'चुनना',
      addSubVariable: 'उप चर',
    },
    variableAssigner: {
      title: 'वेरिएबल्स असाइन करें',
      outputType: 'आउटपुट प्रकार',
      varNotSet: 'वेरिएबल सेट नहीं है',
      noVarTip: 'असाइन किए जाने वाले वेरिएबल्स जोड़ें',
      type: {
        string: 'स्ट्रिंग',
        number: 'नंबर',
        object: 'ऑब्जेक्ट',
        array: 'ऐरे',
      },
      aggregationGroup: 'एग्रीगेशन ग्रुप',
      aggregationGroupTip:
        'इस सुविधा को सक्षम करने से वेरिएबल एग्रीगेटर को मल्टीपल सेट्स ऑफ वेरिएबल्स को एग्रीगेट करने की अनुमति मिलती है।',
      addGroup: 'ग्रुप जोड़ें',
      outputVars: {
        varDescribe: '{{groupName}} आउटपुट',
      },
      setAssignVariable: 'असाइन वेरिएबल सेट करें',
    },
    assigner: {
      'assignedVariable': 'असाइन किया गया चर',
      'writeMode': 'लिखने का मोड',
      'writeModeTip': 'जब असाइन किया गया चर एक सरणी होता है, तो जोड़ने का मोड अंत में जोड़ता है।',
      'over-write': 'ओवरराइट करें',
      'append': 'जोड़ें',
      'plus': 'जमा',
      'clear': 'साफ़ करें',
      'setVariable': 'चर सेट करें',
      'variable': 'चर',
      'operations': {
        'clear': 'स्पष्ट',
        '/=': '/=',
        '*=': '*=',
        'over-write': 'अधिलेखित',
        'title': 'परिचालन',
        '+=': '+=',
        'overwrite': 'अधिलेखित',
        'set': 'अस्त हो',
        'extend': 'पसार',
        '-=': '-=',
        'append': 'संलग्न',
      },
      'setParameter': 'पैरामीटर सेट करें...',
      'noVarTip': 'चर जोड़ने के लिए "+" बटन पर क्लिक करें',
      'variables': 'चर',
      'selectAssignedVariable': 'असाइन किए गए चर का चयन करें...',
      'varNotSet': 'चर सेट नहीं',
      'assignedVarsDescription': 'असाइन किए गए चर लिखने योग्य चर होने चाहिए, जैसे वार्तालाप चर।',
      'noAssignedVars': 'कोई उपलब्ध असाइन किए गए चर नहीं',
    },
    tool: {
      toAuthorize: 'अधिकृत करने के लिए',
      inputVars: 'इनपुट वेरिएबल्स',
      outputVars: {
        text: 'उपकरण द्वारा उत्पन्न सामग्री',
        files: {
          title: 'उपकरण द्वारा उत्पन्न फाइलें',
          type: 'समर्थन प्रकार। अब केवल इमेज का समर्थन करता है',
          transfer_method: 'ट्रांसफर मेथड। मान रिमोट_यूआरएल या लोकल_फाइल है',
          url: 'इमेज यूआरएल',
          upload_file_id: 'अपलोड फ़ाइल आईडी',
        },
        json: 'उपकरण द्वारा उत्पन्न JSON',
      },
    },
    questionClassifiers: {
      model: 'मॉडल',
      inputVars: 'इनपुट वेरिएबल्स',
      outputVars: {
        className: 'क्लास नाम',
      },
      class: 'क्लास',
      classNamePlaceholder: 'अपना क्लास नाम लिखें',
      advancedSetting: 'उन्नत सेटिंग',
      topicName: 'विषय नाम',
      topicPlaceholder: 'अपना विषय नाम लिखें',
      addClass: 'क्लास जोड़ें',
      instruction: 'निर्देश',
      instructionTip:
        'प्रश्न वर्गीकरणकर्ता को प्रश्नों को वर्गीकृत करने के तरीके को समझने में मदद करने के लिए अतिरिक्त निर्देश दें।',
      instructionPlaceholder: 'अपना निर्देश लिखें',
    },
    parameterExtractor: {
      inputVar: 'इनपुट वेरिएबल',
      extractParameters: 'पैरामीटर्स निकालें',
      importFromTool: 'उपकरणों से आयात करें',
      addExtractParameter: 'एक्सट्रेक्ट पैरामीटर जोड़ें',
      addExtractParameterContent: {
        name: 'नाम',
        namePlaceholder: 'एक्सट्रेक्ट पैरामीटर नाम',
        type: 'प्रकार',
        typePlaceholder: 'एक्सट्रेक्ट पैरामीटर प्रकार',
        description: 'विवरण',
        descriptionPlaceholder: 'एक्सट्रेक्ट पैरामीटर विवरण',
        required: 'आवश्यक',
        requiredContent:
          'आवश्यक केवल मॉडल अनुमान के लिए एक संदर्भ के रूप में उपयोग किया जाता है, और पैरामीटर आउटपुट के अनिवार्य मान्यता के लिए नहीं।',
      },
      extractParametersNotSet: 'एक्सट्रेक्ट पैरामीटर्स सेटअप नहीं किए गए हैं',
      instruction: 'निर्देश',
      instructionTip:
        'पैरामीटर निकालने वाले को समझने में मदद करने के लिए अतिरिक्त निर्देश दें कि कैसे पैरामीटर्स निकालें।',
      advancedSetting: 'उन्नत सेटिंग',
      reasoningMode: 'रीज़निंग मोड',
      reasoningModeTip:
        'फ़ंक्शन कॉलिंग या प्रॉम्प्ट्स के लिए निर्देशों का जवाब देने की मॉडल की क्षमता के आधार पर उपयुक्त रीज़निंग मोड चुन सकते हैं।',
      isSuccess: 'सफलता है। सफलता पर मान 1 है, असफलता पर मान 0 है।',
      errorReason: 'त्रुटि का कारण',
    },
    iteration: {
      deleteTitle: 'इटरेशन नोड हटाएं?',
      deleteDesc: 'इटरेशन नोड हटाने से सभी चाइल्ड नोड्स हट जाएंगे',
      input: 'इनपुट',
      output: 'आउटपुट वेरिएबल्स',
      iteration_one: '{{count}} इटरेशन',
      iteration_other: '{{count}} इटरेशन्स',
      currentIteration: 'वर्तमान इटरेशन',
      ErrorMethod: {
        operationTerminated: 'समाप्त',
        continueOnError: 'जारी रखें-पर-त्रुटि',
        removeAbnormalOutput: 'निकालें-असामान्य-आउटपुट',
      },
      comma: ',',
      error_other: '{{गिनती}} त्रुटियों',
      error_one: '{{गिनती}} चूक',
      parallelMode: 'समानांतर मोड',
      parallelModeUpper: 'समानांतर मोड',
      errorResponseMethod: 'त्रुटि प्रतिक्रिया विधि',
      MaxParallelismTitle: 'अधिकतम समांतरता',
      parallelModeEnableTitle: 'समानांतर मोड सक्षम किया गया',
      parallelModeEnableDesc: 'समानांतर मोड में, पुनरावृत्तियों के भीतर कार्य समानांतर निष्पादन का समर्थन करते हैं। आप इसे दाईं ओर गुण पैनल में कॉन्फ़िगर कर सकते हैं।',
      parallelPanelDesc: 'समानांतर मोड में, पुनरावृत्ति में कार्य समानांतर निष्पादन का समर्थन करते हैं।',
      MaxParallelismDesc: 'अधिकतम समांतरता का उपयोग एकल पुनरावृत्ति में एक साथ निष्पादित कार्यों की संख्या को नियंत्रित करने के लिए किया जाता है।',
      answerNodeWarningDesc: 'समानांतर मोड चेतावनी: उत्तर नोड्स, वार्तालाप चर असाइनमेंट, और पुनरावृत्तियों के भीतर लगातार पढ़ने/लिखने की कार्रवाई अपवाद पैदा कर सकती है।',
    },
    note: {
      addNote: 'नोट जोड़ें',
      editor: {
        placeholder: 'अपना नोट लिखें...',
        small: 'छोटा',
        medium: 'मध्यम',
        large: 'बड़ा',
        bold: 'बोल्ड',
        italic: 'इटैलिक',
        strikethrough: 'स्ट्राइकथ्रू',
        link: 'लिंक',
        openLink: 'खोलें',
        unlink: 'लिंक हटाएं',
        enterUrl: 'URL दर्ज करें...',
        invalidUrl: 'अवैध URL',
        bulletList: 'बुलेट लिस्ट',
        showAuthor: 'लेखक दिखाएं',
      },
    },
    docExtractor: {
      outputVars: {
        text: 'निकाला गया पाठ',
      },
      learnMore: 'और जानो',
      supportFileTypes: 'समर्थन फ़ाइल प्रकार: {{प्रकार}}।',
      inputVar: 'इनपुट वेरिएबल',
    },
    listFilter: {
      outputVars: {
        result: 'परिणाम फ़िल्टर करें',
        last_record: 'पिछला रिकॉर्ड',
        first_record: 'पहला रिकॉर्ड',
      },
      limit: 'शीर्ष N',
      asc: 'एएससी',
      filterConditionKey: 'फ़िल्टर स्थिति कुंजी',
      filterConditionComparisonValue: 'फ़िल्टर स्थिति मान',
      filterCondition: 'फ़िल्टर की स्थिति',
      orderBy: 'द्वारा आदेश दें',
      desc: 'विवरण',
      filterConditionComparisonOperator: 'फ़िल्टर शर्त तुलन ऑपरेटर',
      selectVariableKeyPlaceholder: 'उप चर कुंजी का चयन करें',
      inputVar: 'इनपुट वेरिएबल',
      extractsCondition: 'N आइटम निकालें',
    },
  },
  tracing: {
    stopBy: '{{user}} द्वारा रोका गया',
  },
  variableReference: {
    conversationVars: 'बातचीत चर',
    noAvailableVars: 'कोई उपलब्ध चर नहीं',
    assignedVarsDescription: 'असाइन किए गए चर लिखने योग्य चर होने चाहिए, जैसे',
    noVarsForOperation: 'चयनित कार्रवाई के साथ असाइनमेंट के लिए कोई चर उपलब्ध नहीं हैं.',
    noAssignedVars: 'कोई उपलब्ध असाइन किए गए चर नहीं',
  },
}

export default translation
