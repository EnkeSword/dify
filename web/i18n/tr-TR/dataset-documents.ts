const translation = {
  list: {
    title: 'Belgeler',
    desc: 'Bilginin tüm dosyaları burada gösterilir ve Bilginin tamamı Dify alıntılarına veya Sohbet eklentisi üzerinden dizine eklenebilir.',
    addFile: 'Dosya Ekle',
    addPages: 'Sayfa Ekle',
    addUrl: 'URL Ekle',
    table: {
      header: {
        fileName: 'DOSYA ADI',
        words: 'KELİMELER',
        hitCount: 'GERİ ALIM SAYISI',
        uploadTime: 'YÜKLEME ZAMANI',
        status: 'DURUM',
        action: 'EYLEM',
        chunkingMode: 'PARÇALAMA MODU',
      },
      rename: 'Yeniden Adlandır',
      name: 'Ad',
    },
    action: {
      uploadFile: 'Yeni dosya yükle',
      settings: 'Segment ayarları',
      addButton: 'Parça ekle',
      add: 'Bir parça ekle',
      batchAdd: 'Toplu ekle',
      archive: 'Arşivle',
      unarchive: 'Arşivden Çıkar',
      delete: 'Sil',
      enableWarning: 'Arşivlenmiş dosya etkinleştirilemez',
      sync: 'Senkronize et',
    },
    index: {
      enable: 'Etkinleştir',
      disable: 'Devre Dışı Bırak',
      all: 'Hepsi',
      enableTip: 'Dosya dizine eklenebilir',
      disableTip: 'Dosya dizine eklenemez',
    },
    status: {
      queuing: 'Kuyrukta',
      indexing: 'Dizine Ekleniyor',
      paused: 'Durduruldu',
      error: 'Hata',
      available: 'Kullanılabilir',
      enabled: 'Etkin',
      disabled: 'Devre Dışı',
      archived: 'Arşivlendi',
    },
    empty: {
      title: 'Henüz belge yok',
      upload: {
        tip: 'Dosya yükleyebilir, web sitesinden veya Notion, GitHub gibi web uygulamalarından senkronize edebilirsiniz.',
      },
      sync: {
        tip: 'Dify, Notion\'dan periyodik olarak dosyaları indirir ve işlemeyi tamamlar.',
      },
    },
    delete: {
      title: 'Silmek istediğinize emin misiniz?',
      content: 'İşlemeye daha sonra devam etmeniz gerekirse, kaldığınız yerden devam edeceksiniz',
    },
    batchModal: {
      title: 'Toplu parçalar ekle',
      csvUploadTitle: 'CSV dosyanızı buraya sürükleyip bırakın ya da ',
      browse: 'göz atın',
      tip: 'CSV dosyası şu yapıya uygun olmalıdır:',
      question: 'soru',
      answer: 'cevap',
      contentTitle: 'parça içeriği',
      content: 'içerik',
      template: 'Şablonu buradan indir',
      cancel: 'İptal',
      run: 'Toplu İşlemi Çalıştır',
      runError: 'Toplu işlem başarısız oldu',
      processing: 'Toplu işlemde',
      completed: 'İçe aktarma tamamlandı',
      error: 'İçe Aktarma Hatası',
      ok: 'Tamam',
    },
    learnMore: 'Daha fazla bilgi edinin',
  },
  metadata: {
    title: 'Meta Veri',
    desc: 'Belgeler için meta veri etiketleme, AI\'ın bunlara zamanında erişmesini sağlar ve kullanıcılar için referansların kaynağını ortaya çıkarır.',
    dateTimeFormat: 'MMMM D, YYYY ss:dd ÖÖ/ÖS',
    docTypeSelectTitle: 'Lütfen bir belge türü seçin',
    docTypeChangeTitle: 'Belge türünü değiştir',
    docTypeSelectWarning: 'Belge türü değiştirilirse, şimdi doldurulan meta veriler artık korunmayacaktır',
    firstMetaAction: 'Hadi başlayalım',
    placeholder: {
      add: 'Ekle ',
      select: 'Seç ',
    },
    source: {
      upload_file: 'Dosya Yükle',
      notion: 'Notion\'dan Senkronize Et',
      github: 'GitHub\'dan Senkronize Et',
    },
    type: {
      book: 'Kitap',
      webPage: 'Web Sayfası',
      paper: 'Makale',
      socialMediaPost: 'Sosyal Medya Paylaşımı',
      personalDocument: 'Kişisel Belge',
      businessDocument: 'İş Belgesi',
      IMChat: 'IM Sohbet',
      wikipediaEntry: 'Wikipedia Girişi',
      notion: 'Notion\'dan Senkronize Et',
      github: 'GitHub\'dan Senkronize Et',
      technicalParameters: 'Teknik Parametreler',
    },
    field: {
      processRule: {
        processDoc: 'Belgeyi İşle',
        segmentRule: 'Parça Kuralı',
        segmentLength: 'Parça Uzunluğu',
        processClean: 'Metin İşleme Temizliği',
      },
      book: {
        title: 'Başlık',
        language: 'Dil',
        author: 'Yazar',
        publisher: 'Yayıncı',
        publicationDate: 'Yayın Tarihi',
        ISBN: 'ISBN',
        category: 'Kategori',
      },
      webPage: {
        title: 'Başlık',
        url: 'URL',
        language: 'Dil',
        authorPublisher: 'Yazar/Yayıncı',
        publishDate: 'Yayın Tarihi',
        topicsKeywords: 'Konular/Anahtar Kelimeler',
        description: 'Açıklama',
      },
      paper: {
        title: 'Başlık',
        language: 'Dil',
        author: 'Yazar',
        publishDate: 'Yayın Tarihi',
        journalConferenceName: 'Dergi/Konferans Adı',
        volumeIssuePage: 'Cilt/Sayı/Sayfa',
        DOI: 'DOI',
        topicsKeywords: 'Konular/Anahtar Kelimeler',
        abstract: 'Özet',
      },
      socialMediaPost: {
        platform: 'Platform',
        authorUsername: 'Yazar/Kullanıcı adı',
        publishDate: 'Yayın Tarihi',
        postURL: 'Gönderi URL\'si',
        topicsTags: 'Konular/Etiketler',
      },
      personalDocument: {
        title: 'Başlık',
        author: 'Yazar',
        creationDate: 'Oluşturma Tarihi',
        lastModifiedDate: 'Son Değiştirme Tarihi',
        documentType: 'Belge Türü',
        tagsCategory: 'Etiketler/Kategori',
      },
      businessDocument: {
        title: 'Başlık',
        author: 'Yazar',
        creationDate: 'Oluşturma Tarihi',
        lastModifiedDate: 'Son Değiştirme Tarihi',
        documentType: 'Belge Türü',
        departmentTeam: 'Bölüm/Takım',
      },
      IMChat: {
        chatPlatform: 'Sohbet Platformu',
        chatPartiesGroupName: 'Sohbet Tarafları/Grup Adı',
        participants: 'Katılımcılar',
        startDate: 'Başlangıç Tarihi',
        endDate: 'Bitiş Tarihi',
        topicsKeywords: 'Konular/Anahtar Kelimeler',
        fileType: 'Dosya Türü',
      },
      wikipediaEntry: {
        title: 'Başlık',
        language: 'Dil',
        webpageURL: 'Web Sayfası URL\'si',
        editorContributor: 'Editör/Katılımcı',
        lastEditDate: 'Son Düzenleme Tarihi',
        summaryIntroduction: 'Özet/Giriş',
      },
      notion: {
        title: 'Başlık',
        language: 'Dil',
        author: 'Yazar',
        createdTime: 'Oluşturulma Zamanı',
        lastModifiedTime: 'Son Değiştirilme Zamanı',
        url: 'URL',
        tag: 'Etiket',
        description: 'Açıklama',
      },
      github: {
        repoName: 'Depo Adı',
        repoDesc: 'Depo Açıklaması',
        repoOwner: 'Depo Sahibi',
        fileName: 'Dosya Adı',
        filePath: 'Dosya Yolu',
        programmingLang: 'Programlama Dili',
        url: 'URL',
        license: 'Lisans',
        lastCommitTime: 'Son Commit Zamanı',
        lastCommitAuthor: 'Son Commit Yazar',
      },
      originInfo: {
        originalFilename: 'Orijinal dosya adı',
        originalFileSize: 'Orijinal dosya boyutu',
        uploadDate: 'Yükleme tarihi',
        lastUpdateDate: 'Son güncelleme tarihi',
        source: 'Kaynak',
      },
      technicalParameters: {
        segmentSpecification: 'Parçalar spesifikasyonu',
        segmentLength: 'Parçalar uzunluğu',
        avgParagraphLength: 'Ort. paragraf uzunluğu',
        paragraphs: 'Paragraflar',
        hitCount: 'Geri alım sayısı',
        embeddingTime: 'Yerleştirme zamanı',
        embeddedSpend: 'Yerleştirme harcaması',
      },
    },
    languageMap: {
      zh: 'Çince',
      en: 'İngilizce',
      es: 'İspanyolca',
      fr: 'Fransızca',
      de: 'Almanca',
      ja: 'Japonca',
      ko: 'Korece',
      ru: 'Rusça',
      ar: 'Arapça',
      pt: 'Portekizce',
      it: 'İtalyanca',
      nl: 'Flemenkçe',
      pl: 'Lehçe',
      sv: 'İsveççe',
      tr: 'Türkçe',
      he: 'İbranice',
      hi: 'Hintçe',
      da: 'Danca',
      fi: 'Fince',
      no: 'Norveççe',
      hu: 'Macarca',
      el: 'Yunanca',
      cs: 'Çekçe',
      th: 'Tayca',
      id: 'Endonezce',
    },
    categoryMap: {
      book: {
        fiction: 'Kurgu',
        biography: 'Biyografi',
        history: 'Tarih',
        science: 'Bilim',
        technology: 'Teknoloji',
        education: 'Eğitim',
        philosophy: 'Felsefe',
        religion: 'Din',
        socialSciences: 'Sosyal Bilimler',
        art: 'Sanat',
        travel: 'Gezi',
        health: 'Sağlık',
        selfHelp: 'Kişisel Gelişim',
        businessEconomics: 'İş ve Ekonomi',
        cooking: 'Yemek',
        childrenYoungAdults: 'Çocuk ve Genç Yetişkin',
        comicsGraphicNovels: 'Çizgi Roman ve Grafik Roman',
        poetry: 'Şiir',
        drama: 'Drama',
        other: 'Diğer',
      },
      personalDoc: {
        notes: 'Notlar',
        blogDraft: 'Blog Taslağı',
        diary: 'Günlük',
        researchReport: 'Araştırma Raporu',
        bookExcerpt: 'Kitap Alıntısı',
        schedule: 'Takvim',
        list: 'Liste',
        projectOverview: 'Proje Genel Bakış',
        photoCollection: 'Fotoğraf Koleksiyonu',
        creativeWriting: 'Yaratıcı Yazma',
        codeSnippet: 'Kod Parçacığı',
        designDraft: 'Tasarım Taslağı',
        personalResume: 'Kişisel Özgeçmiş',
        other: 'Diğer',
      },
      businessDoc: {
        meetingMinutes: 'Toplantı Tutanakları',
        researchReport: 'Araştırma Raporu',
        proposal: 'Teklif',
        employeeHandbook: 'Çalışan El Kitabı',
        trainingMaterials: 'Eğitim Materyalleri',
        requirementsDocument: 'Gereksinim Dokümanı',
        designDocument: 'Tasarım Dokümanı',
        productSpecification: 'Ürün Spesifikasyonu',
        financialReport: 'Mali Rapor',
        marketAnalysis: 'Pazar Analizi',
        projectPlan: 'Proje Planı',
        teamStructure: 'Takım Yapısı',
        policiesProcedures: 'Politikalar ve Prosedürler',
        contractsAgreements: 'Sözleşmeler ve Anlaşmalar',
        emailCorrespondence: 'E-posta Yazışmaları',
        other: 'Diğer',
      },
    },
  },
  embedding: {
    processing: 'Yerleştirme işlemi...',
    paused: 'Yerleştirme duraklatıldı',
    completed: 'Yerleştirme tamamlandı',
    error: 'Yerleştirme hatası',
    docName: 'Belgeler işleniyor',
    mode: 'Segmentasyon kuralı',
    segmentLength: 'Parçalar uzunluğu',
    textCleaning: 'Metin önişleme ve temizlik',
    segments: 'Paragraflar',
    highQuality: 'Yüksek kaliteli mod',
    economy: 'Ekonomik mod',
    estimate: 'Tahmini tüketim',
    stop: 'İşlemi durdur',
    resume: 'İşleme devam et',
    automatic: 'Otomatik',
    custom: 'Özel',
    previewTip: 'Paragraf önizlemesi yerleştirme tamamlandıktan sonra kullanılabilir olacak',
    childMaxTokens: 'Çocuk',
    parentMaxTokens: 'Ebeveyn',
    hierarchical: 'Ebeveyn-çocuk',
    pause: 'Duraklat',
  },
  segment: {
    paragraphs: 'Paragraflar',
    keywords: 'Anahtar Kelimeler',
    addKeyWord: 'Anahtar kelime ekle',
    keywordError: 'Anahtar kelimenin maksimum uzunluğu 20',
    characters: 'karakter',
    hitCount: 'Geri alım sayısı',
    vectorHash: 'Vektör hash: ',
    questionPlaceholder: 'soruyu buraya ekleyin',
    questionEmpty: 'Soru boş olamaz',
    answerPlaceholder: 'cevabı buraya ekleyin',
    answerEmpty: 'Cevap boş olamaz',
    contentPlaceholder: 'içeriği buraya ekleyin',
    contentEmpty: 'İçerik boş olamaz',
    newTextSegment: 'Yeni Metin Parçası',
    newQaSegment: 'Yeni Soru-Cevap Parçası',
    delete: 'Bu parçayı silmek istiyor musunuz?',
    chunks_one: 'ÖBEK',
    childChunks_one: 'ALT ÖBEK',
    searchResults_one: 'SONUÇ',
    chunk: 'Öbek',
    addChunk: 'Parça Ekle',
    regenerationSuccessMessage: 'Bu pencereyi kapatabilirsiniz.',
    characters_other: 'Karakter',
    editParentChunk: 'Üst Parçayı Düzenle',
    editChildChunk: 'Alt Parçayı Düzenle',
    edited: 'DÜZENLEN -MİŞ',
    collapseChunks: 'Parçaları daraltma',
    chunkDetail: 'Yığın Detayı',
    parentChunk: 'Ebeveyn-Yığın',
    parentChunks_one: 'ÜST ÖBEK',
    searchResults_other: 'SONUÇ -LARI',
    childChunks_other: 'ÇOCUK PARÇALARI',
    newChunk: 'Yeni Yığın',
    regenerationConfirmMessage: 'Alt öbekleri yeniden oluşturmak, düzenlenen öbekler ve yeni eklenen öbekler de dahil olmak üzere mevcut alt öbeklerin üzerine yazılır. Yenilenme geri alınamaz.',
    empty: 'Yığın bulunamadı',
    parentChunks_other: 'ÜST PARÇALAR',
    childChunk: 'Çocuk-Parça',
    expandChunks: 'Parçaları genişletme',
    childChunkAdded: '1 alt öbek eklendi',
    newChildChunk: 'Yeni Çocuk Yığını',
    editChunk: 'Yığını Düzenle',
    chunkAdded: '1 parça eklendi',
    regenerationSuccessTitle: 'Rejenerasyon tamamlandı',
    regeneratingTitle: 'Alt parçaları yeniden oluşturma',
    clearFilter: 'Filtreyi kaldır',
    regenerationConfirmTitle: 'Alt parçaları yeniden oluşturmak istiyor musunuz?',
    characters_one: 'karakter',
    addAnother: 'Bir tane daha ekle',
    regeneratingMessage: 'Bu biraz zaman alabilir, lütfen bekleyin...',
    searchResults_zero: 'SONUÇ',
    chunks_other: 'Parçalar',
    editedAt: 'Şurada düzenlendi:',
    addChildChunk: 'Alt Parça Ekle',
  },
}

export default translation
