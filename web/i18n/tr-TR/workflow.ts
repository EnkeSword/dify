const translation = {
  common: {
    undo: 'Geri Al',
    redo: 'Yinele',
    editing: 'Düzenleme',
    autoSaved: 'Otomatik Kaydedildi',
    unpublished: 'Yayınlanmamış',
    published: 'Yayınlandı',
    publish: 'Yayınla',
    update: 'Güncelle',
    run: 'Çalıştır',
    running: 'Çalışıyor',
    inRunMode: 'Çalıştırma Modunda',
    inPreview: 'Ön İzlemede',
    inPreviewMode: 'Önizleme Modunda',
    preview: 'Önizleme',
    viewRunHistory: 'Çalıştırma geçmişini görüntüle',
    runHistory: 'Çalıştırma Geçmişi',
    goBackToEdit: 'Editöre geri dön',
    conversationLog: 'Konuşma Günlüğü',
    features: 'Özellikler',
    debugAndPreview: 'Önizleme',
    restart: 'Yeniden Başlat',
    currentDraft: 'Geçerli Taslak',
    currentDraftUnpublished: 'Mevcut Taslak Yayınlanmamış',
    latestPublished: 'Son Yayınlanan',
    publishedAt: 'Yayınlandı',
    restore: 'Geri Yükle',
    runApp: 'Uygulamayı Çalıştır',
    batchRunApp: 'Toplu Uygulama Çalıştır',
    accessAPIReference: 'API Referansına Eriş',
    embedIntoSite: 'Siteye Göm',
    addTitle: 'Başlık ekle...',
    addDescription: 'Açıklama ekle...',
    noVar: 'Değişken yok',
    searchVar: 'Değişkeni ara',
    variableNamePlaceholder: 'Değişken adı',
    setVarValuePlaceholder: 'Değişkeni ayarla',
    needConnectTip: 'Bu adım hiçbir şeye bağlı değil',
    maxTreeDepth: 'Her dal için maksimum {{depth}} düğüm limiti',
    needEndNode: 'Son blok eklenmelidir',
    needAnswerNode: 'Yanıt bloğu eklenmelidir',
    workflowProcess: 'Workflow Süreci',
    notRunning: 'Henüz çalıştırılmadı',
    previewPlaceholder: 'Sohbet Robotunu hata ayıklamak için aşağıdaki kutuya içerik girin',
    effectVarConfirm: {
      title: 'Değişkeni Kaldır',
      content: 'Değişken diğer düğümlerde kullanılıyor. Yine de kaldırmak istiyor musunuz?',
    },
    insertVarTip: 'Hızlı eklemek için \'/\' tuşuna basın',
    processData: 'Veriyi İşle',
    input: 'Girdi',
    output: 'Çıktı',
    jinjaEditorPlaceholder: 'Değişken eklemek için \'/\' veya \'{\' yazın',
    viewOnly: 'Sadece Görüntüleme',
    showRunHistory: 'Çalıştırma Geçmişini Göster',
    enableJinja: 'Jinja şablon desteğini etkinleştir',
    learnMore: 'Daha Fazla Bilgi',
    copy: 'Kopyala',
    duplicate: 'Çoğalt',
    addBlock: 'Blok Ekle',
    pasteHere: 'Buraya Yapıştır',
    pointerMode: 'İşaretçi Modu',
    handMode: 'El Modu',
    model: 'Model',
    workflowAsTool: 'Araç Olarak Workflow',
    configureRequired: 'Yapılandırma Gerekli',
    configure: 'Yapılandır',
    manageInTools: 'Araçlarda Yönet',
    workflowAsToolTip: 'Workflow güncellemesinden sonra araç yeniden yapılandırması gereklidir.',
    viewDetailInTracingPanel: 'Ayrıntıları görüntüle',
    syncingData: 'Veriler senkronize ediliyor, birkaç saniye bekleyin.',
    importDSL: 'DSL İçe Aktar',
    importDSLTip: 'Geçerli taslak üzerine yazılacak. İçe aktarmadan önce workflow yedekleyin.',
    backupCurrentDraft: 'Geçerli Taslağı Yedekleyin',
    chooseDSL: 'DSL(yml) dosyasını seçin',
    overwriteAndImport: 'Üzerine Yaz ve İçe Aktar',
    importFailure: 'İçe Aktarma Başarısız',
    importSuccess: 'İçe Aktarma Başarılı',
    parallelTip: {
      click: {
        desc: 'Eklemek için',
        title: 'Tık',
      },
      drag: {
        title: 'Sürükleme',
        desc: 'Bağlanmak için',
      },
      depthLimit: '{{num}} katmanlarının paralel iç içe geçme katmanı sınırı',
      limit: 'Paralellik {{num}} dallarıyla sınırlıdır.',
    },
    jumpToNode: 'Bu düğüme atla',
    addParallelNode: 'Paralel Düğüm Ekle',
    disconnect: 'Ayırmak',
    parallelRun: 'Paralel Koşu',
    parallel: 'PARALEL',
    branch: 'DAL',
    featuresDocLink: 'Daha fazla bilgi edinin',
    fileUploadTip: 'Resim yükleme özellikleri, dosya yüklemeye yükseltildi.',
    ImageUploadLegacyTip: 'Artık başlangıç formunda dosya türü değişkenleri oluşturabilirsiniz. Gelecekte resim yükleme özelliğini artık desteklemeyeceğiz.',
    featuresDescription: 'Web uygulaması kullanıcı deneyimini geliştirin',
    importWarningDetails: 'DSL sürüm farkı bazı özellikleri etkileyebilir',
    importWarning: 'Dikkat',
    openInExplore: 'Keşfet\'te Aç',
    onFailure: 'Başarısızlık Üzerine',
    addFailureBranch: 'Başarısız dal ekle',
  },
  env: {
    envPanelTitle: 'Çevre Değişkenleri',
    envDescription: 'Çevre değişkenleri özel bilgileri ve kimlik bilgilerini saklamak için kullanılabilir. Yalnızca okunabilirler ve dışa aktarım sırasında DSL dosyasından ayrılabilirler.',
    envPanelButton: 'Değişken Ekle',
    modal: {
      title: 'Çevre Değişkeni Ekle',
      editTitle: 'Çevre Değişkenini Düzenle',
      type: 'Tür',
      name: 'Ad',
      namePlaceholder: 'env adı',
      value: 'Değer',
      valuePlaceholder: 'env değeri',
      secretTip: 'Hassas bilgileri veya verileri tanımlamak için kullanılır, bilgi sızıntısını önlemek için DSL ayarları yapılandırılmıştır.',
    },
    export: {
      title: 'Gizli çevre değişkenleri dışa aktarılsın mı?',
      checkbox: 'Gizli değerleri dışa aktar',
      ignore: 'DSL\'yi dışa aktar',
      export: 'Gizli değerlerle DSL\'yi dışa aktar',
    },
  },
  chatVariable: {
    panelTitle: 'Konuşma Değişkenleri',
    panelDescription: 'Konuşma Değişkenleri, LLM\'nin hatırlaması gereken interaktif bilgileri (konuşma geçmişi, yüklenen dosyalar, kullanıcı tercihleri dahil) depolamak için kullanılır. Bunlar okunabilir ve yazılabilirdir.',
    docLink: 'Daha fazla bilgi için belgelerimizi ziyaret edin.',
    button: 'Değişken Ekle',
    modal: {
      title: 'Konuşma Değişkeni Ekle',
      editTitle: 'Konuşma Değişkenini Düzenle',
      name: 'İsim',
      namePlaceholder: 'Değişken adı',
      type: 'Tür',
      value: 'Varsayılan Değer',
      valuePlaceholder: 'Varsayılan değer, ayarlanmaması için boş bırakın',
      description: 'Açıklama',
      descriptionPlaceholder: 'Değişkeni açıklayın',
      editInJSON: 'JSON olarak düzenle',
      oneByOne: 'Teker teker ekle',
      editInForm: 'Formda düzenle',
      arrayValue: 'Değer',
      addArrayValue: 'Değer Ekle',
      objectKey: 'Anahtar',
      objectType: 'Tür',
      objectValue: 'Varsayılan Değer',
    },
    storedContent: 'Depolanan içerik',
    updatedAt: 'Güncellenme zamanı: ',
  },
  changeHistory: {
    title: 'Değişiklik Geçmişi',
    placeholder: 'Henüz hiçbir şey değiştirmediniz',
    clearHistory: 'Geçmişi Temizle',
    hint: 'İpucu',
    hintText: 'Düzenleme işlemleriniz, bu oturum süresince cihazınızda saklanan bir değişiklik geçmişinde izlenir. Bu tarihçesi düzenleyiciden çıktığınızda temizlenir.',
    stepBackward_one: '{{count}} adım geri',
    stepBackward_other: '{{count}} adım geri',
    stepForward_one: '{{count}} adım ileri',
    stepForward_other: '{{count}} adım ileri',
    sessionStart: 'Oturum Başladı',
    currentState: 'Geçerli Durum',
    nodeTitleChange: 'Blok başlığı değiştirildi',
    nodeDescriptionChange: 'Blok açıklaması değiştirildi',
    nodeDragStop: 'Blok taşındı',
    nodeChange: 'Blok değiştirildi',
    nodeConnect: 'Blok bağlandı',
    nodePaste: 'Blok yapıştırıldı',
    nodeDelete: 'Blok silindi',
    nodeAdd: 'Blok eklendi',
    nodeResize: 'Blok yeniden boyutlandırıldı',
    noteAdd: 'Not eklendi',
    noteChange: 'Not değiştirildi',
    noteDelete: 'Not silindi',
    edgeDelete: 'Blok bağlantısı kesildi',
  },
  errorMsg: {
    fieldRequired: '{{field}} gereklidir',
    authRequired: 'Yetkilendirme gereklidir',
    invalidJson: '{{field}} geçersiz JSON',
    fields: {
      variable: 'Değişken Adı',
      variableValue: 'Değişken Değeri',
      code: 'Kod',
      model: 'Model',
      rerankModel: 'Yeniden Sıralama Modeli',
      visionVariable: 'Vizyon Değişkeni',
    },
    invalidVariable: 'Geçersiz değişken',
    rerankModelRequired: 'Yeniden Sıralama Modelini açmadan önce, lütfen ayarlarda modelin başarıyla yapılandırıldığını onaylayın.',
  },
  singleRun: {
    testRun: 'Test Çalıştırma',
    startRun: 'Çalıştırmayı Başlat',
    running: 'Çalışıyor',
    testRunIteration: 'Test Çalıştırma Yineleme',
    back: 'Geri',
    iteration: 'Yineleme',
  },
  tabs: {
    'searchBlock': 'Blok ara',
    'blocks': 'Bloklar',
    'tools': 'Araçlar',
    'allTool': 'Hepsi',
    'builtInTool': 'Yerleşik',
    'customTool': 'Özel',
    'workflowTool': 'Workflow',
    'question-understand': 'Soruyu Anlama',
    'logic': 'Mantık',
    'transform': 'Dönüştür',
    'utilities': 'Yardımcı Araçlar',
    'noResult': 'Eşleşen bulunamadı',
    'searchTool': 'Arama aracı',
  },
  blocks: {
    'start': 'Başlat',
    'end': 'Son',
    'answer': 'Yanıt',
    'llm': 'LLM',
    'knowledge-retrieval': 'Bilgi Geri Alımı',
    'question-classifier': 'Soru Sınıflandırıcı',
    'if-else': 'IF/ELSE',
    'code': 'Kod',
    'template-transform': 'Şablon',
    'http-request': 'HTTP İsteği',
    'variable-assigner': 'Değişken Ata',
    'variable-aggregator': 'Değişken Toplayıcı',
    'assigner': 'Değişken Atayıcı',
    'iteration-start': 'Yineleme Başlat',
    'iteration': 'Yineleme',
    'parameter-extractor': 'Parametre Çıkarıcı',
    'list-operator': 'Liste İşleci',
    'document-extractor': 'Doküman Çıkarıcı',
  },
  blocksAbout: {
    'start': 'Bir iş akışını başlatmak için başlangıç parametrelerini tanımlayın',
    'end': 'Bir iş akışının sonunu ve sonuç türünü tanımlayın',
    'answer': 'Bir sohbet konuşmasının yanıt içeriğini tanımlayın',
    'llm': 'Büyük dil modellerini soruları yanıtlamak veya doğal dili işlemek için çağırın',
    'knowledge-retrieval': 'Kullanıcı sorularıyla ilgili metin içeriğini Bilgi\'den sorgulamanıza olanak tanır',
    'question-classifier': 'Kullanıcı sorularının sınıflandırma koşullarını tanımlayın, LLM sınıflandırma açıklamasına dayalı olarak konuşmanın nasıl ilerleyeceğini tanımlayabilir',
    'if-else': 'İş akışını if/else koşullarına göre iki dala ayırmanızı sağlar',
    'code': 'Özel mantığı uygulamak için bir Python veya NodeJS kod parçası yürütün',
    'template-transform': 'Jinja şablon sözdizimini kullanarak verileri stringe dönüştürün',
    'http-request': 'HTTP protokolü üzerinden sunucu isteklerinin gönderilmesine izin verin',
    'variable-assigner': 'Çoklu dal değişkenlerini tek bir değişkende toplayın ve sonraki düğümler için birleşik bir yapılandırma sağlayın.',
    'assigner': 'Değişken atama düğümü, yazılabilir değişkenlere (konuşma değişkenleri gibi) değer atamak için kullanılır.',
    'variable-aggregator': 'Çoklu dal değişkenlerini tek bir değişkende toplayın ve sonraki düğümler için birleşik bir yapılandırma sağlayın.',
    'iteration': 'Bir liste nesnesinde birden fazla adım gerçekleştirir ve tüm sonuçlar çıkana kadar devam eder.',
    'parameter-extractor': 'Aracı çağırmak veya HTTP istekleri için doğal dilden yapılandırılmış parametreler çıkarmak için LLM kullanın.',
    'document-extractor': 'Yüklenen belgeleri LLM tarafından kolayca anlaşılabilen metin içeriğine ayrıştırmak için kullanılır.',
    'list-operator': 'Dizi içeriğini filtrelemek veya sıralamak için kullanılır.',
  },
  operator: {
    zoomIn: 'Yakınlaştır',
    zoomOut: 'Uzaklaştır',
    zoomTo50: '%50 Yakınlaştır',
    zoomTo100: '%100 Yakınlaştır',
    zoomToFit: 'Sığdıracak Şekilde Yakınlaştır',
  },
  panel: {
    userInputField: 'Kullanıcı Giriş Alanı',
    changeBlock: 'Blok Değiştir',
    helpLink: 'Yardım Linki',
    about: 'Hakkında',
    createdBy: 'Oluşturan: ',
    nextStep: 'Sonraki Adım',
    addNextStep: 'Bu iş akışında sonraki bloğu ekleyin',
    selectNextStep: 'Sonraki Bloğu Seç',
    runThisStep: 'Bu adımı çalıştır',
    checklist: 'Kontrol Listesi',
    checklistTip: 'Yayınlamadan önce tüm sorunların çözüldüğünden emin olun',
    checklistResolved: 'Tüm sorunlar çözüldü',
    organizeBlocks: 'Blokları Düzenle',
    change: 'Değiştir',
    optional: '(isteğe bağlı)',
  },
  nodes: {
    common: {
      outputVars: 'Çıktı Değişkenleri',
      insertVarTip: 'Değişken Ekle',
      memory: {
        memory: 'Bellek',
        memoryTip: 'Sohbet belleği ayarları',
        windowSize: 'Pencere Boyutu',
        conversationRoleName: 'Konuşma Rol Adı',
        user: 'Kullanıcı ön eki',
        assistant: 'Asistan ön eki',
      },
      memories: {
        title: 'Bellekler',
        tip: 'Sohbet belleği',
        builtIn: 'Yerleşik',
      },
      errorHandle: {
        none: {
          title: 'Hiç kimse',
          desc: 'Bir özel durum oluşursa ve işlenmezse düğüm çalışmayı durdurur',
        },
        defaultValue: {
          title: 'Varsayılan Değer',
          desc: 'Bir hata oluştuğunda, statik bir çıkış içeriği belirtin.',
          tip: 'Hata durumunda, değerin altına dönecektir.',
          inLog: 'Düğüm istisnası, varsayılan değerlere göre çıktı.',
          output: 'Çıktı Varsayılan Değeri',
        },
        failBranch: {
          title: 'Başarısız Dal',
          desc: 'Bir hata oluştuğunda, özel durum dalını yürütür',
          customize: 'Başarısız dal mantığını özelleştirmek için tuvale gidin.',
          inLog: 'Düğüm özel durumu, başarısız dalı otomatik olarak yürütür. Düğüm çıkışı bir hata türü ve hata mesajı döndürür ve bunları aşağı akışa iletir.',
          customizeTip: 'Başarısız dal etkinleştirildiğinde, düğümler tarafından oluşturulan özel durumlar işlemi sonlandırmaz. Bunun yerine, önceden tanımlanmış hata dalını otomatik olarak yürüterek hata mesajları, raporlar, düzeltmeler veya atlama eylemleri sağlamanıza olanak tanır.',
        },
        partialSucceeded: {
          tip: 'İşlemde anormal şekilde çalışan {{num}} düğümleri var, lütfen günlükleri kontrol etmek için izlemeye gidin.',
        },
        title: 'Hata İşleme',
        tip: 'Bir düğüm bir özel durumla karşılaştığında tetiklenen özel durum işleme stratejisi.',
      },
    },
    start: {
      required: 'gerekli',
      inputField: 'Giriş Alanı',
      builtInVar: 'Yerleşik Değişkenler',
      outputVars: {
        query: 'Kullanıcı girişi',
        memories: {
          des: 'Konuşma geçmişi',
          type: 'mesaj türü',
          content: 'mesaj içeriği',
        },
        files: 'Dosya listesi',
      },
      noVarTip: 'İş Akışında kullanılabilecek girişleri ayarlayın',
    },
    end: {
      outputs: 'Çıktılar',
      output: {
        type: 'çıktı türü',
        variable: 'çıktı değişkeni',
      },
      type: {
        'none': 'Yok',
        'plain-text': 'Düz Metin',
        'structured': 'Yapılandırılmış',
      },
    },
    answer: {
      answer: 'Yanıt',
      outputVars: 'Çıktı Değişkenleri',
    },
    llm: {
      model: 'model',
      variables: 'değişkenler',
      context: 'bağlam',
      contextTooltip: 'Bağlam olarak Bilgi ekleyebilirsiniz',
      notSetContextInPromptTip: 'Bağlam özelliğini etkinleştirmek için lütfen PROMPT içinde bağlam değişkenini doldurun.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Konuşma için üst düzey talimatlar verin',
        user: 'Modele talimatlar, sorgular veya herhangi bir metin tabanlı giriş sağlayın',
        assistant: 'Modelin kullanıcı mesajlarına göre verdiği yanıtlar',
      },
      addMessage: 'Mesaj Ekle',
      vision: 'görsel',
      files: 'Dosyalar',
      resolution: {
        name: 'Çözünürlük',
        high: 'Yüksek',
        low: 'Düşük',
      },
      outputVars: {
        output: 'İçerik Üret',
        usage: 'Model Kullanım Bilgileri',
      },
      singleRun: {
        variable: 'Değişken',
      },
      sysQueryInUser: 'sys.query kullanıcı mesajında gereklidir',
    },
    knowledgeRetrieval: {
      queryVariable: 'Sorgu Değişkeni',
      knowledge: 'Bilgi',
      outputVars: {
        output: 'Geri alınmış parça verisi',
        content: 'Parça içeriği',
        title: 'Parça başlığı',
        icon: 'Parça simgesi',
        url: 'Parça URL\'si',
        metadata: 'Diğer meta veriler',
      },
    },
    http: {
      inputVars: 'Giriş Değişkenleri',
      api: 'API',
      apiPlaceholder: 'URL girin, değişken eklemek için ‘/’ tuşuna basın',
      notStartWithHttp: 'API http:// veya https:// ile başlamalıdır',
      key: 'Anahtar',
      value: 'Değer',
      bulkEdit: 'Toplu Düzenleme',
      keyValueEdit: 'Anahtar-Değer Düzenleme',
      headers: 'Başlıklar',
      params: 'Parametreler',
      body: 'Gövde',
      outputVars: {
        body: 'Yanıt İçeriği',
        statusCode: 'Yanıt Durum Kodu',
        headers: 'Yanıt Başlık Listesi JSON',
        files: 'Dosya Listesi',
      },
      authorization: {
        'authorization': 'Yetkilendirme',
        'authorizationType': 'Yetkilendirme Türü',
        'no-auth': 'Yok',
        'api-key': 'API Anahtarı',
        'authType': 'Yetki Türü',
        'basic': 'Temel',
        'bearer': 'Bearer',
        'custom': 'Özel',
        'api-key-title': 'API Anahtarı',
        'header': 'Başlık',
        'auth-type': 'Kimlik Doğrulama Türü',
      },
      insertVarPlaceholder: 'değişkeni eklemek için \'/\' yazın',
      timeout: {
        title: 'Zaman Aşımı',
        connectLabel: 'Bağlantı Zaman Aşımı',
        connectPlaceholder: 'Bağlantı zaman aşımını saniye cinsinden girin',
        readLabel: 'Okuma Zaman Aşımı',
        readPlaceholder: 'Okuma zaman aşımını saniye cinsinden girin',
        writeLabel: 'Yazma Zaman Aşımı',
        writePlaceholder: 'Yazma zaman aşımını saniye cinsinden girin',
      },
      type: 'Tür',
      binaryFileVariable: 'İkili Dosya Değişkeni',
      extractListPlaceholder: 'Liste öğesi dizinini girin, \'/\' yazın değişken ekle',
      curl: {
        placeholder: 'cURL dizesini buraya yapıştırın',
        title: 'cURL\'den içe aktar',
      },
    },
    code: {
      inputVars: 'Giriş Değişkenleri',
      outputVars: 'Çıktı Değişkenleri',
      advancedDependencies: 'Gelişmiş Bağımlılıklar',
      advancedDependenciesTip: 'Burada daha uzun sürede tüketilen veya varsayılan olarak yerleşik olmayan bazı ön yüklenmiş bağımlılıkları ekleyin',
      searchDependencies: 'Bağımlılıkları Ara',
    },
    templateTransform: {
      inputVars: 'Giriş Değişkenleri',
      code: 'Kod',
      codeSupportTip: 'Sadece Jinja2 destekler',
      outputVars: {
        output: 'Dönüştürülmüş içerik',
      },
    },
    ifElse: {
      if: 'Eğer',
      else: 'Değilse',
      elseDescription: 'Eğer koşulu karşılanmadığında hangi mantığın çalıştırılması gerektiğini tanımlamak için kullanılır.',
      and: 've',
      or: 'veya',
      operator: 'Operatör',
      notSetVariable: 'Lütfen önce değişken ayarlayın',
      comparisonOperator: {
        'contains': 'içerir',
        'not contains': 'içermez',
        'start with': 'ile başlar',
        'end with': 'ile biter',
        'is': 'eşittir',
        'is not': 'eşit değildir',
        'empty': 'boş',
        'not empty': 'boş değil',
        'null': 'null',
        'not null': 'null değil',
        'regex match': 'normal ifade maçı',
        'in': 'içinde',
        'not exists': 'mevcut değil',
        'all of': 'Tümü',
        'not in': 'İçinde değil',
        'exists': 'Var',
      },
      enterValue: 'Değer girin',
      addCondition: 'Koşul Ekle',
      conditionNotSetup: 'Koşul AYARLANMADI',
      selectVariable: 'Değişken seçin...',
      optionName: {
        localUpload: 'Yerel Yükleme',
        video: 'Video',
        audio: 'Ses',
        url: 'URL',
        image: 'Resim',
        doc: 'Doktor',
      },
      addSubVariable: 'Alt Değişken',
      select: 'Seçmek',
    },
    variableAssigner: {
      title: 'Değişken ata',
      outputType: 'Çıktı Türü',
      varNotSet: 'Değişken ayarlanmadı',
      noVarTip: 'Atanacak değişkenleri ekleyin',
      type: {
        string: 'Metin',
        number: 'Sayı',
        object: 'Nesne',
        array: 'Dizi',
      },
      aggregationGroup: 'Toplama Grubu',
      aggregationGroupTip: 'Bu özelliği etkinleştirmek, değişken toplayıcının birden fazla değişken setini toplamasına olanak tanır.',
      addGroup: 'Grup Ekle',
      outputVars: {
        varDescribe: '{{groupName}} çıktısı',
      },
      setAssignVariable: 'Atama değişkenini ayarla',
    },
    assigner: {
      'assignedVariable': 'Atanan Değişken',
      'writeMode': 'Yazma Modu',
      'writeModeTip': 'ATANAN DEĞİŞKEN bir dizi olduğunda, ekleme modu sona ekler.',
      'over-write': 'Üzerine Yaz',
      'append': 'Ekle',
      'plus': 'Artı',
      'clear': 'Temizle',
      'setVariable': 'Değişken Ayarla',
      'variable': 'Değişken',
      'operations': {
        'extend': 'Uzatmak',
        'overwrite': 'Üzerine',
        'over-write': 'Üzerine',
        'title': 'İşlem',
        '+=': '+=',
        'clear': 'Berrak',
        'append': 'Ekleme',
        '/=': '/=',
        '-=': '-=',
        '*=': '*=',
        'set': 'Ayarlamak',
      },
      'variables': 'Değişken',
      'selectAssignedVariable': 'Atanan değişkeni seçin...',
      'setParameter': 'Parametreyi ayarla...',
      'varNotSet': 'Değişken NOT Set',
      'assignedVarsDescription': 'Atanan değişkenler, konuşma değişkenleri gibi yazılabilir değişkenler olmalıdır.',
      'noVarTip': 'Değişken eklemek için "+" düğmesini tıklayın',
      'noAssignedVars': 'Kullanılabilir atanmış değişken yok',
    },
    tool: {
      toAuthorize: 'Yetkilendirmek için',
      inputVars: 'Giriş Değişkenleri',
      outputVars: {
        text: 'araç tarafından oluşturulan içerik',
        files: {
          title: 'araç tarafından oluşturulan dosyalar',
          type: 'Desteklenen tür. Şu anda sadece resim destekleniyor',
          transfer_method: 'Transfer yöntemi. Değer remote_url veya local_file olabilir',
          url: 'Resim URL\'si',
          upload_file_id: 'Yüklenen dosya kimliği',
        },
        json: 'araç tarafından oluşturulan json',
      },
    },
    questionClassifiers: {
      model: 'model',
      inputVars: 'Giriş Değişkenleri',
      outputVars: {
        className: 'Sınıf Adı',
      },
      class: 'Sınıf',
      classNamePlaceholder: 'Sınıf adınızı yazın',
      advancedSetting: 'Gelişmiş Ayarlar',
      topicName: 'Konu Adı',
      topicPlaceholder: 'Konu adınızı yazın',
      addClass: 'Sınıf Ekle',
      instruction: 'Talimat',
      instructionTip: 'Soru sınıflandırıcının soruları nasıl kategorize edeceğini daha iyi anlamasına yardımcı olmak için ek talimatlar girin.',
      instructionPlaceholder: 'Talimatınızı yazın',
    },
    parameterExtractor: {
      inputVar: 'Giriş Değişkeni',
      extractParameters: 'Parametreleri Çıkar',
      importFromTool: 'Araçlardan içe aktar',
      addExtractParameter: 'Çıkarma Parametresi Ekle',
      addExtractParameterContent: {
        name: 'Ad',
        namePlaceholder: 'Çıkarma Parametresi Adı',
        type: 'Tür',
        typePlaceholder: 'Çıkarma Parametresi Türü',
        description: 'Açıklama',
        descriptionPlaceholder: 'Çıkarma Parametresi Açıklaması',
        required: 'Gerekli',
        requiredContent: 'Gerekli sadece model çıkarımı için referans olarak kullanılır ve parametre çıktısının zorunlu doğrulaması için kullanılmaz.',
      },
      extractParametersNotSet: 'Çıkarma Parametreleri ayarlanmadı',
      instruction: 'Talimat',
      instructionTip: 'Parametre çıkarıcının parametreleri nasıl çıkaracağını anlamasına yardımcı olmak için ek talimatlar girin.',
      advancedSetting: 'Gelişmiş Ayarlar',
      reasoningMode: 'Akıl Yürütme Modu',
      reasoningModeTip: 'Modelin fonksiyon çağırma veya istemler için talimatlara yanıt verme yeteneğine bağlı olarak uygun akıl yürütme modunu seçebilirsiniz.',
      isSuccess: 'Başarılı mı. Başarılı olduğunda değer 1, başarısız olduğunda değer 0\'dır.',
      errorReason: 'Hata Nedeni',
    },
    iteration: {
      deleteTitle: 'Yineleme Düğümünü Sil?',
      deleteDesc: 'Yineleme düğümünü silmek tüm alt düğümleri silecektir',
      input: 'Giriş',
      output: 'Çıkış Değişkenleri',
      iteration_one: '{{count}} Yineleme',
      iteration_other: '{{count}} Yineleme',
      currentIteration: 'Mevcut Yineleme',
      ErrorMethod: {
        operationTerminated: 'Sonlandırıldı',
        continueOnError: 'Hata Üzerine Devam Et',
        removeAbnormalOutput: 'anormal çıktıyı kaldır',
      },
      parallelModeUpper: 'PARALEL MOD',
      parallelMode: 'Paralel Mod',
      MaxParallelismTitle: 'Maksimum paralellik',
      error_one: '{{sayı}} Hata',
      errorResponseMethod: 'Hata yanıtı yöntemi',
      comma: ',',
      parallelModeEnableTitle: 'Paralel Mod Etkin',
      error_other: '{{sayı}} Hata',
      parallelPanelDesc: 'Paralel modda, yinelemedeki görevler paralel yürütmeyi destekler.',
      answerNodeWarningDesc: 'Paralel mod uyarısı: Yinelemeler içindeki yanıt düğümleri, konuşma değişkeni atamaları ve kalıcı okuma/yazma işlemleri özel durumlara neden olabilir.',
      parallelModeEnableDesc: 'Paralel modda, yinelemeler içindeki görevler paralel yürütmeyi destekler. Bunu sağdaki özellikler panelinde yapılandırabilirsiniz.',
      MaxParallelismDesc: 'Maksimum paralellik, tek bir yinelemede aynı anda yürütülen görevlerin sayısını kontrol etmek için kullanılır.',
    },
    note: {
      addNote: 'Not Ekle',
      editor: {
        placeholder: 'Notunuzu yazın...',
        small: 'Küçük',
        medium: 'Orta',
        large: 'Büyük',
        bold: 'Kalın',
        italic: 'İtalik',
        strikethrough: 'Üstü Çizili',
        link: 'Bağlantı',
        openLink: 'Aç',
        unlink: 'Bağlantıyı Kaldır',
        enterUrl: 'URL girin...',
        invalidUrl: 'Geçersiz URL',
        bulletList: 'Madde İşaretli Liste',
        showAuthor: 'Yazarı Göster',
      },
    },
    docExtractor: {
      outputVars: {
        text: 'Ayıklanan metin',
      },
      learnMore: 'Daha fazla bilgi edinin',
      inputVar: 'Giriş Değişkeni',
      supportFileTypes: 'Destek dosya türleri: {{types}}.',
    },
    listFilter: {
      outputVars: {
        result: 'Filtre sonucu',
        first_record: 'İlk kayıt',
        last_record: 'Son kayıt',
      },
      filterConditionComparisonOperator: 'Filtre Koşulu Karşılaştırma İşleci',
      filterCondition: 'Filtre Koşulu',
      limit: 'İlk N',
      asc: 'ASC',
      inputVar: 'Giriş Değişkeni',
      filterConditionKey: 'Filtre Koşulu Anahtarı',
      orderBy: 'Sıralama ölçütü',
      filterConditionComparisonValue: 'Filtre Koşulu değeri',
      selectVariableKeyPlaceholder: 'Alt değişken anahtarını seçin',
      desc: 'DESC',
      extractsCondition: 'N öğesini ayıklayın',
    },
  },
  tracing: {
    stopBy: '{{user}} tarafından durduruldu',
  },
  variableReference: {
    assignedVarsDescription: 'Atanan değişkenler, örneğin yazılabilir değişkenler olmalıdır',
    noAvailableVars: 'Kullanılabilir değişken yok',
    conversationVars: 'Konuşma değişkenleri',
    noVarsForOperation: 'Seçilen işlemle atanabilecek değişken yok.',
    noAssignedVars: 'Kullanılabilir atanmış değişken yok',
  },
}

export default translation
