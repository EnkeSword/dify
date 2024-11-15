const translation = {
  api: {
    success: 'Uspeh',
    actionSuccess: 'Dejanje je uspelo',
    saved: 'Shranjeno',
    create: 'Ustvarjeno',
    remove: 'Odstranjeno',
  },
  operation: {
    create: 'Ustvari',
    confirm: 'Potrdi',
    cancel: 'Prekliči',
    clear: 'Počisti',
    save: 'Shrani',
    saveAndEnable: 'Shrani in omogoči',
    edit: 'Uredi',
    add: 'Dodaj',
    added: 'Dodano',
    refresh: 'Osveži',
    reset: 'Ponastavi',
    search: 'Išči',
    change: 'Spremeni',
    remove: 'Odstrani',
    send: 'Pošlji',
    copy: 'Kopiraj',
    lineBreak: 'Prelom vrstice',
    sure: 'Prepričan sem',
    download: 'Prenesi',
    delete: 'Izbriši',
    settings: 'Nastavitve',
    setup: 'Nastavitev',
    getForFree: 'Dobite brezplačno',
    reload: 'Ponovno naloži',
    ok: 'V redu',
    log: 'Dnevnik',
    learnMore: 'Izvedi več',
    params: 'Parametri',
    duplicate: 'Podvoji',
    rename: 'Preimenuj',
    audioSourceUnavailable: 'Zvočni vir ni na voljo',
  },
  errorMsg: {
    fieldRequired: '{{field}} je obvezno',
    urlError: 'url mora začeti z http:// ali https://',
  },
  placeholder: {
    input: 'Vnesite prosim',
    select: 'Izberite prosim',
  },
  voice: {
    language: {
      zhHans: 'Kitajščina (poenostavljena)',
      zhHant: 'Kitajščina (tradicionalna)',
      enUS: 'Angleščina',
      deDE: 'Nemščina',
      frFR: 'Francoščina',
      esES: 'Španščina',
      itIT: 'Italijanščina',
      thTH: 'Tajščina',
      idID: 'Indonezijščina',
      jaJP: 'Japonščina',
      koKR: 'Korejščina',
      ptBR: 'Portugalščina',
      ruRU: 'Ruščina',
      ukUA: 'Ukrajinščina',
      viVN: 'Vietnamščina',
      plPL: 'Poljščina',
      roRO: 'Romunščina',
      hiIN: 'Hindujščina',
      trTR: 'Turščina',
      faIR: 'Farsi',
    },
  },
  unit: {
    char: 'znaki',
  },
  actionMsg: {
    noModification: 'Trenutno ni sprememb.',
    modifiedSuccessfully: 'Spremenjeno uspešno',
    modifiedUnsuccessfully: 'Spremenjeno neuspešno',
    copySuccessfully: 'Kopirano uspešno',
    paySucceeded: 'Plačilo je uspelo',
    payCancelled: 'Plačilo preklicano',
    generatedSuccessfully: 'Generirano uspešno',
    generatedUnsuccessfully: 'Generirano neuspešno',
  },
  model: {
    params: {
      temperature: 'Temperatura',
      temperatureTip:
        'Nadzoruje naključnost: Znižanje temperature vodi do manj naključnih zaključkov. Ko se temperatura približa ničli, bo model postal determinističen in ponavljajoč.',
      top_p: 'Top P',
      top_pTip:
        'Nadzoruje raznolikost preko vzorčenja jedra: 0.5 pomeni, da je upoštevanih polovica vseh možnosti glede na njihovo verjetnost.',
      presence_penalty: 'Kaznovanje za prisotnost',
      presence_penaltyTip:
        'Kako močno kaznovati nove besede, glede na to, ali so se že pojavile v besedilu.\nPovečuje verjetnost, da bo model obravnaval nove teme.',
      frequency_penalty: 'Kaznovanje za frekvenco',
      frequency_penaltyTip:
        'Kako močno kaznovati nove besede glede na njihovo že obstoječo frekvenco v besedilu.\nZmanjšuje verjetnost, da bo model ponavljal iste vrstice.',
      max_tokens: 'Največje število žetonov',
      max_tokensTip:
        'Uporabljeno za omejitev največje dolžine odgovora, v žetonih.\nVečje vrednosti lahko omejijo prostor za besede, zgodovino pogovorov in znanje. \nPriporočljivo je nastaviti pod dve tretjini.\ngpt-4-1106-preview, gpt-4-vision-preview maksimalno število žetonov (vnos 128k, izhod 4k)',
      maxTokenSettingTip: 'Vaša nastavitev za največje število žetonov je visoka, kar lahko omeji prostor za pozive, poizvedbe in podatke. Razmislite o nastavitvi pod 2/3.',
      setToCurrentModelMaxTokenTip: 'Največje število žetonov je posodobljeno na 80 % največjega števila žetonov trenutnega modela {{maxToken}}.',
      stop_sequences: 'Zaporedja ustavljanja',
      stop_sequencesTip: 'Do štiri zaporedja, kjer bo API prenehal generirati nadaljnje žetone. Vrnjen tekst ne bo vseboval zaporedja ustavitve.',
      stop_sequencesPlaceholder: 'Vnesite zaporedje in pritisnite Tab',
    },
    tone: {
      Creative: 'Kreativno',
      Balanced: 'Uravnoteženo',
      Precise: 'Natančno',
      Custom: 'Po meri',
    },
    addMoreModel: 'Pojdite v nastavitve, da dodate več modelov',
  },
  menus: {
    status: 'beta',
    explore: 'Raziskuj',
    apps: 'Studio',
    plugins: 'Vtičniki',
    pluginsTips: 'Integrirajte vtičnike tretjih oseb ali ustvarite vtičnike, združljive s ChatGPT.',
    datasets: 'Znanje',
    datasetsTips: 'KMALU: Uvozite svoje besedilne podatke ali pišite podatke v realnem času preko spletnih kljuk za izboljšanje konteksta LLM.',
    newApp: 'Nova aplikacija',
    newDataset: 'Ustvari znanje',
    tools: 'Orodja',
  },
  userProfile: {
    settings: 'Nastavitve',
    emailSupport: 'Podpora po e-pošti',
    workspace: 'Delovni prostor',
    createWorkspace: 'Ustvari delovni prostor',
    helpCenter: 'Pomoč',
    communityFeedback: 'Povratne informacije',
    roadmap: 'Načrt razvoja',
    community: 'Skupnost',
    about: 'O nas',
    logout: 'Odjava',
  },
  settings: {
    accountGroup: 'SPLOŠNO',
    workplaceGroup: 'DELOVNI PROSTOR',
    account: 'Moj račun',
    members: 'Člani',
    billing: 'Zaračunavanje',
    integrations: 'Integracije',
    language: 'Jezik',
    provider: 'Ponudnik modelov',
    dataSource: 'Vir podatkov',
    plugin: 'Vtičniki',
    apiBasedExtension: 'Razširitev API-ja',
  },
  account: {
    account: 'Račun',
    myAccount: 'Moj račun',
    studio: 'Dify Studio',
    avatar: 'Avatar',
    name: 'Ime',
    email: 'E-pošta',
    password: 'Geslo',
    passwordTip: 'Lahko nastavite stalno geslo, če ne želite uporabljati začasnih prijavnih kod',
    setPassword: 'Nastavi geslo',
    resetPassword: 'Ponastavi geslo',
    currentPassword: 'Trenutno geslo',
    newPassword: 'Novo geslo',
    confirmPassword: 'Potrdi geslo',
    notEqual: 'Gesli se ne ujemata.',
    langGeniusAccount: 'Dify račun',
    langGeniusAccountTip: 'Vaš Dify račun in povezani uporabniški podatki.',
    editName: 'Uredi ime',
    showAppLength: 'Prikaz {{length}} aplikacij',
    delete: 'Izbriši račun',
    deleteTip: 'Brisanje vašega računa bo trajno izbrisalo vse vaše podatke in jih ne bo mogoče obnoviti.',
    deleteConfirmTip: 'Za potrditev pošljite naslednje s svojega registriranega e-poštnega naslova na ',
  },
  members: {
    team: 'Ekipa',
    invite: 'Dodaj',
    name: 'IME',
    lastActive: 'NAZADNJE AKTIVEN',
    role: 'VLOGE',
    pending: 'V teku...',
    owner: 'Lastnik',
    admin: 'Administrator',
    adminTip: 'Lahko ustvarja aplikacije in upravlja nastavitve ekipe',
    normal: 'Običajni uporabnik',
    normalTip: 'Lahko uporablja samo aplikacije, ne more ustvarjati aplikacij',
    builder: 'Graditelj',
    builderTip: 'Lahko ustvarja in ureja lastne aplikacije',
    editor: 'Urednik',
    editorTip: 'Lahko ustvarja in ureja aplikacije',
    datasetOperator: 'Skrbnik znanja',
    datasetOperatorTip: 'Lahko upravlja samo bazo znanja',
    inviteTeamMember: 'Dodaj člana ekipe',
    inviteTeamMemberTip: 'Do vaših podatkov bo lahko dostopal takoj po prijavi.',
    email: 'E-pošta',
    emailInvalid: 'Neveljaven format e-pošte',
    emailPlaceholder: 'Vnesite e-poštne naslove',
    sendInvite: 'Pošlji povabilo',
    invitedAsRole: 'Povabljen kot uporabnik {{role}}',
    invitationSent: 'Povabilo poslano',
    invitationSentTip: 'Povabilo poslano, in po prijavi v Dify bodo imeli dostop do vaših podatkov ekipe.',
    invitationLink: 'Povezava za povabilo',
    failedInvitationEmails: 'Spodnji uporabniki niso bili uspešno povabljeni',
    ok: 'V redu',
    removeFromTeam: 'Odstrani iz ekipe',
    removeFromTeamTip: 'Odstranjen bo dostop do ekipe',
    setAdmin: 'Nastavi za administratorja',
    setMember: 'Nastavi za običajnega člana',
    setBuilder: 'Nastavi za graditelja',
    setEditor: 'Nastavi za urednika',
    disInvite: 'Prekliči povabilo',
    deleteMember: 'Izbriši člana',
    you: '(Vi)',
  },
  integrations: {
    connected: 'Povezano',
    google: 'Google',
    googleAccount: 'Prijavite se z Google računom',
    github: 'GitHub',
    githubAccount: 'Prijavite se z GitHub računom',
    connect: 'Poveži',
  },
  language: {
    displayLanguage: 'Jezik prikaza',
    timezone: 'Časovni pas',
  },
  provider: {
    apiKey: 'API ključ',
    enterYourKey: 'Vnesite svoj API ključ tukaj',
    invalidKey: 'Neveljaven OpenAI API ključ',
    validatedError: 'Preverjanje ni uspelo: ',
    validating: 'Preverjam ključ...',
    saveFailed: 'Shranjevanje API ključa ni uspelo',
    apiKeyExceedBill: 'Ta API ključ nima več na voljo kvote, preberite',
    addKey: 'Dodaj ključ',
    comingSoon: 'Kmalu',
    editKey: 'Uredi',
    invalidApiKey: 'Neveljaven API ključ',
    azure: {
      apiBase: 'API Osnova',
      apiBasePlaceholder: 'URL API osnove vašega Azure OpenAI končnega mesta.',
      apiKey: 'API ključ',
      apiKeyPlaceholder: 'Vnesite svoj API ključ tukaj',
      helpTip: 'Spoznajte Azure OpenAI storitev',
    },
    openaiHosted: {
      openaiHosted: 'Gostovani OpenAI',
      onTrial: 'NA PREIZKUSU',
      exhausted: 'KVOTA PORABLJENA',
      desc: 'Gostitvena storitev OpenAI, ki jo ponuja Dify, vam omogoča uporabo modelov, kot je GPT-3.5. Preden porabite kvoto za preizkus, morate nastaviti druge ponudnike modelov.',
      callTimes: 'Časi klicev',
      usedUp: 'Kvota za preizkus porabljena. Dodajte svojega ponudnika modelov.',
      useYourModel: 'Trenutno uporabljate svojega ponudnika modelov.',
      close: 'Zapri',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'NA PREIZKUSU',
      exhausted: 'KVOTA PORABLJENA',
      desc: 'Zmogljiv model, ki se odlično obnese pri različnih nalogah, od sofisticiranega dialoga in ustvarjanja kreativnih vsebin do podrobnih navodil.',
      callTimes: 'Časi klicev',
      usedUp: 'Kvota za preizkus porabljena. Dodajte svojega ponudnika modelov.',
      useYourModel: 'Trenutno uporabljate svojega ponudnika modelov.',
      close: 'Zapri',
    },
    anthropic: {
      using: 'Zmožnost vdelave uporablja',
      enableTip: 'Za omogočitev modela Anthropic morate najprej povezati OpenAI ali Azure OpenAI storitev.',
      notEnabled: 'Ni omogočeno',
      keyFrom: 'Pridobite svoj API ključ pri Anthropic',
    },
    encrypted: {
      front: 'Vaš API ključ bo šifriran in shranjen z uporabo',
      back: ' tehnologije.',
    },
  },
  modelProvider: {
    notConfigured: 'Sistemski model še ni popolnoma konfiguriran, nekatere funkcije morda ne bodo na voljo.',
    systemModelSettings: 'Nastavitve sistemskega modela',
    systemModelSettingsLink: 'Zakaj je potrebno nastaviti sistemski model?',
    selectModel: 'Izberite svoj model',
    setupModelFirst: 'Najprej nastavite svoj model',
    systemReasoningModel: {
      key: 'Sistemski model za sklepanja',
      tip: 'Nastavite privzeti model za sklepanja, ki se bo uporabljal za ustvarjanje aplikacij, kot tudi funkcije, kot so generiranje imen dialogov in predlaganje naslednjih vprašanj.',
    },
    embeddingModel: {
      key: 'Model za vdelavo',
      tip: 'Nastavite privzeti model za obdelavo vdelave dokumentov znanja, tako pri iskanju kot pri uvozu znanja se uporablja ta model za vektorizacijo. Preklop bo povzročil neusklajenost vektorske dimenzije med uvoženim znanjem in vprašanjem, kar bo povzročilo neuspešno iskanje. Da bi se izognili neuspehu pri iskanju, ne preklapljajte tega modela brez potrebe.',
      required: 'Model za vdelavo je obvezen',
    },
    speechToTextModel: {
      key: 'Model za pretvorbo govora v besedilo',
      tip: 'Nastavite privzeti model za vnos govora v besedilo v pogovoru.',
    },
    ttsModel: {
      key: 'Model za pretvorbo besedila v govor',
      tip: 'Nastavite privzeti model za pretvorbo besedila v govor v pogovoru.',
    },
    rerankModel: {
      key: 'Model za prerazvrstitev',
      tip: 'Model za prerazvrstitev bo prerazporedil seznam kandidatskih dokumentov na podlagi semantične ujemanja z uporabniško poizvedbo, s čimer se izboljšajo rezultati semantičnega razvrščanja.',
    },
    apiKey: 'API-KEY',
    quota: 'Kvote',
    searchModel: 'Model iskanja',
    noModelFound: 'Za {{model}} ni najden noben model',
    models: 'Modeli',
    showMoreModelProvider: 'Prikaži več ponudnikov modelov',
    selector: {
      tip: 'Ta model je bil odstranjen. Prosimo, dodajte model ali izberite drugega.',
      emptyTip: 'Ni razpoložljivih modelov',
      emptySetting: 'Prosimo, pojdite v nastavitve za konfiguracijo',
      rerankTip: 'Prosimo, nastavite model za prerazvrstitev',
    },
    card: {
      quota: 'KVOTE',
      onTrial: 'Na preizkusu',
      paid: 'Plačano',
      quotaExhausted: 'Kvote porabljene',
      callTimes: 'Časi klicev',
      tokens: 'Žetoni',
      buyQuota: 'Kupi kvoto',
      priorityUse: 'Prednostna uporaba',
      removeKey: 'Odstrani API ključ',
      tip: 'Prednostno se bo uporabila plačana kvota. Kvota za preizkus se bo uporabila, ko bo plačana kvota porabljena.',
    },
    item: {
      deleteDesc: '{{modelName}} se uporablja kot sistemski model za sklepanja. Nekatere funkcije ne bodo na voljo po odstranitvi. Prosimo, potrdite.',
      freeQuota: 'BREZPLAČNA KVOTA',
    },
    addApiKey: 'Dodaj svoj API ključ',
    invalidApiKey: 'Neveljaven API ključ',
    encrypted: {
      front: 'Vaš API ključ bo šifriran in shranjen z uporabo',
      back: ' tehnologije.',
    },
    freeQuota: {
      howToEarn: 'Kako zaslužiti',
    },
    addMoreModelProvider: 'DODAJ VEČ PONUDNIKOV MODELOV',
    addModel: 'Dodaj model',
    modelsNum: '{{num}} modelov',
    showModels: 'Prikaži modele',
    showModelsNum: 'Prikaži {{num}} modelov',
    collapse: 'Strni',
    config: 'Konfiguracija',
    modelAndParameters: 'Model in parametri',
    model: 'Model',
    featureSupported: '{{feature}} podprto',
    callTimes: 'Število klicev',
    credits: 'Sporočilni krediti',
    buyQuota: 'Kupi kvoto',
    getFreeTokens: 'Pridobi brezplačne žetone',
    priorityUsing: 'Prednostna uporaba',
    deprecated: 'Zastarelo',
    confirmDelete: 'Potrdite izbris?',
    quotaTip: 'Preostali razpoložljivi brezplačni žetoni',
    loadPresets: 'Naloži prednastavitve',
    parameters: 'PARAMETRI',
    loadBalancing: 'Uravnoteženje obremenitev',
    loadBalancingDescription: 'Zmanjšajte pritisk s pomočjo več sklopov poverilnic.',
    loadBalancingHeadline: 'Uravnoteženje obremenitev',
    configLoadBalancing: 'Konfiguracija uravnoteženja obremenitev',
    modelHasBeenDeprecated: 'Ta model je zastarel',
    providerManaged: 'Upravljano s strani ponudnika',
    providerManagedDescription: 'Uporabite enoten sklop poverilnic, ki jih zagotovi ponudnik modela.',
    defaultConfig: 'Privzeta konfiguracija',
    apiKeyStatusNormal: 'Stanje API ključa je normalno',
    apiKeyRateLimit: 'Omejitev hitrosti je dosežena, na voljo po {{seconds}} sekundah',
    addConfig: 'Dodaj konfiguracijo',
    editConfig: 'Uredi konfiguracijo',
    loadBalancingLeastKeyWarning: 'Za omogočanje uravnoteženja obremenitev morata biti omogočena vsaj 2 ključa.',
    loadBalancingInfo: 'Privzeto uravnoteženje obremenitev uporablja strategijo Round-robin. Če se sproži omejitev hitrosti, se uporabi 1-minutno obdobje ohlajanja.',
    upgradeForLoadBalancing: 'Nadgradite svoj načrt, da omogočite uravnoteženje obremenitev.',
    dataSource: {
      add: 'Dodaj vir podatkov',
      connect: 'Poveži',
      configure: 'Konfiguriraj',
      notion: {
        title: 'Notion',
        description: 'Uporaba Notiona kot vira podatkov za Znanost.',
        connectedWorkspace: 'Povezano delovno okolje',
        addWorkspace: 'Dodaj delovno okolje',
        connected: 'Povezan',
        disconnected: 'Prekinjen',
        changeAuthorizedPages: 'Spremeni pooblaščene strani',
        pagesAuthorized: 'Pooblaščene strani',
        sync: 'Sinhroniziraj',
        remove: 'Odstrani',
        selector: {
          pageSelected: 'Izbrane strani',
          searchPages: 'Iskanje strani...',
          noSearchResult: 'Ni rezultatov iskanja',
          addPages: 'Dodaj strani',
          preview: 'PREDOGLED',
        },
      },
      website: {
        title: 'Spletna stran',
        description: 'Uvoz vsebine s spletnih strani z uporabo spletnega pajka.',
        with: 'S',
        configuredCrawlers: 'Konfigurirani pajki',
        active: 'Aktiven',
        inactive: 'Neaktiven',
      },
    },
    plugin: {
      serpapi: {
        apiKey: 'API ključ',
        apiKeyPlaceholder: 'Vnesite svoj API ključ',
        keyFrom: 'Pridobite svoj SerpAPI ključ na strani računa SerpAPI',
      },
    },
    apiBasedExtension: {
      title: 'Razširitve API omogočajo centralizirano upravljanje API, kar poenostavi konfiguracijo za enostavno uporabo v aplikacijah Dify.',
      link: 'Naučite se, kako razviti svojo API razširitev.',
      linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
      add: 'Dodaj API razširitev',
      selector: {
        title: 'API razširitev',
        placeholder: 'Prosimo, izberite API razširitev',
        manage: 'Upravljaj API razširitev',
      },
      modal: {
        title: 'Dodaj API razširitev',
        editTitle: 'Uredi API razširitev',
        name: {
          title: 'Ime',
          placeholder: 'Vnesite ime',
        },
        apiEndpoint: {
          title: 'API konec',
          placeholder: 'Vnesite API konec',
        },
        apiKey: {
          title: 'API ključ',
          placeholder: 'Vnesite API ključ',
          lengthError: 'Dolžina API ključa ne sme biti manjša od 5 znakov',
        },
      },
      type: 'Tip',
    },
    about: {
      changeLog: 'Dnevnik sprememb',
      updateNow: 'Posodobi zdaj',
      nowAvailable: 'Dify {{version}} je zdaj na voljo.',
      latestAvailable: 'Dify {{version}} je najnovejša različica na voljo.',
    },
    appMenus: {
      overview: 'Nadzor',
      promptEng: 'Orkestriraj',
      apiAccess: 'Dostop API',
      logAndAnn: 'Dnevniki in objave',
      logs: 'Dnevniki',
    },
    environment: {
      testing: 'TESTIRANJE',
      development: 'RAZVOJ',
    },
    appModes: {
      completionApp: 'Generator besedila',
      chatApp: 'Klepetalna aplikacija',
    },
    datasetMenus: {
      documents: 'Dokumenti',
      hitTesting: 'Preizkušanje pridobivanja',
      settings: 'Nastavitve',
      emptyTip: 'Znanost še ni povezana, pojdite v aplikacijo ali vtičnik, da dokončate povezavo.',
      viewDoc: 'Ogled dokumentacije',
      relatedApp: 'povezane aplikacije',
    },
    voiceInput: {
      speaking: 'Govorite zdaj...',
      converting: 'Pretvarjanje v besedilo...',
      notAllow: 'mikrofon ni pooblaščen',
    },
    modelName: {
      'gpt-3.5-turbo': 'GPT-3.5-Turbo',
      'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
      'gpt-4': 'GPT-4',
      'gpt-4-32k': 'GPT-4-32K',
      'text-davinci-003': 'Text-Davinci-003',
      'text-embedding-ada-002': 'Text-Embedding-Ada-002',
      'whisper-1': 'Whisper-1',
      'claude-instant-1': 'Claude-Instant',
      'claude-2': 'Claude-2',
    },
    chat: {
      renameConversation: 'Preimenuj pogovor',
      conversationName: 'Ime pogovora',
      conversationNamePlaceholder: 'Vnesite ime pogovora',
      conversationNameCanNotEmpty: 'Ime pogovora je obvezno',
      citation: {
        title: 'CITATI',
        linkToDataset: 'Povezava do znanja',
        characters: 'Znakov:',
        hitCount: 'Število zadetkov:',
        vectorHash: 'Vektorski hash:',
        hitScore: 'Ocena zadetka:',
      },
    },
    promptEditor: {
      placeholder: 'Tukaj napišite svoje pozivno besedilo, vnesite \'{\' za vstavljanje spremenljivke, vnesite \'/\' za vstavljanje vsebinskega bloka poziva',
      context: {
        item: {
          title: 'Kontekst',
          desc: 'Vstavi predlogo konteksta',
        },
        modal: {
          title: '{{num}} Znanost v kontekstu',
          add: 'Dodaj kontekst ',
          footer: 'Kontekste lahko upravljate v spodnjem razdelku Kontekst.',
        },
      },
      history: {
        item: {
          title: 'Zgodovina pogovora',
          desc: 'Vstavi predlogo zgodovinskega sporočila',
        },
        modal: {
          title: 'PRIMER',
          user: 'Pozdravljeni',
          assistant: 'Pozdravljeni! Kako vam lahko pomagam danes?',
          edit: 'Uredi imena vlog pogovora',
        },
      },
      variable: {
        item: {
          title: 'Spremenljivke in zunanji orodja',
          desc: 'Vstavi spremenljivke in zunanja orodja',
        },
        outputToolDisabledItem: {
          title: 'Spremenljivke',
          desc: 'Vstavi spremenljivke',
        },
        modal: {
          add: 'Nova spremenljivka',
          addTool: 'Novo orodje',
        },
      },
      query: {
        item: {
          title: 'Poizvedba',
          desc: 'Vstavi predlogo uporabniške poizvedbe',
        },
      },
      existed: 'Že obstaja v pozivu',
    },
    imageUploader: {
      uploadFromComputer: 'Naloži iz računalnika',
      uploadFromComputerReadError: 'Branje slike ni uspelo, poskusite znova.',
      uploadFromComputerUploadError: 'Nalaganje slike ni uspelo, poskusite znova.',
      uploadFromComputerLimit: 'Nalaganje slik ne sme presegati {{size}} MB',
      pasteImageLink: 'Prilepi povezavo do slike',
      pasteImageLinkInputPlaceholder: 'Tukaj prilepite povezavo do slike',
      pasteImageLinkInvalid: 'Neveljavna povezava slike',
      imageUpload: 'Nalaganje slike',
    },
    tag: {
      placeholder: 'Vse oznake',
      addNew: 'Dodaj novo oznako',
      noTag: 'Ni oznak',
      noTagYet: 'Še ni oznak',
      addTag: 'Dodaj oznake',
      editTag: 'Uredi oznake',
      manageTags: 'Upravljaj oznake',
      selectorPlaceholder: 'Vnesite za iskanje ali ustvarjanje',
      create: 'Ustvari',
      delete: 'Izbriši oznako',
      deleteTip: 'Oznaka se uporablja, jo želite izbrisati?',
      created: 'Oznaka uspešno ustvarjena',
      failed: 'Ustvarjanje oznake ni uspelo',
    },
  },
}
export default translation
