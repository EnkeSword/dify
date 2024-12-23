const translation = {
  common: {
    undo: 'Отменить',
    redo: 'Повторить',
    editing: 'Редактирование',
    autoSaved: 'Автосохранено',
    unpublished: 'Не опубликовано',
    published: 'Опубликовано',
    publish: 'Опубликовать',
    update: 'Обновить',
    run: 'Запустить',
    running: 'Выполняется',
    inRunMode: 'В режиме выполнения',
    inPreview: 'В режиме предпросмотра',
    inPreviewMode: 'В режиме предпросмотра',
    preview: 'Предпросмотр',
    viewRunHistory: 'Посмотреть историю запусков',
    runHistory: 'История запусков',
    goBackToEdit: 'Вернуться к редактору',
    conversationLog: 'Журнал разговоров',
    features: 'Функции',
    debugAndPreview: 'Предпросмотр',
    restart: 'Перезапустить',
    currentDraft: 'Текущий черновик',
    currentDraftUnpublished: 'Текущий черновик не опубликован',
    latestPublished: 'Последняя опубликованная версия',
    publishedAt: 'Опубликовано',
    restore: 'Восстановить',
    runApp: 'Запустить приложение',
    batchRunApp: 'Пакетный запуск приложения',
    accessAPIReference: 'Доступ к справочнику API',
    embedIntoSite: 'Встроить на сайт',
    addTitle: 'Добавить заголовок...',
    addDescription: 'Добавить описание...',
    noVar: 'Нет переменной',
    searchVar: 'Поиск переменной',
    variableNamePlaceholder: 'Имя переменной',
    setVarValuePlaceholder: 'Установить значение переменной',
    needConnectTip: 'Этот шаг ни к чему не подключен',
    maxTreeDepth: 'Максимальный предел {{depth}} узлов на ветку',
    needEndNode: 'Необходимо добавить блок "Конец"',
    needAnswerNode: 'Необходимо добавить блок "Ответ"',
    workflowProcess: 'Процесс рабочего процесса',
    notRunning: 'Еще не запущено',
    previewPlaceholder: 'Введите текст в поле ниже, чтобы начать отладку чат-бота',
    effectVarConfirm: {
      title: 'Удалить переменную',
      content: 'Переменная используется в других узлах. Вы все еще хотите удалить ее?',
    },
    insertVarTip: 'Нажмите клавишу "/" чтобы быстро вставить',
    processData: 'Обработка данных',
    input: 'Вход',
    output: 'Выход',
    jinjaEditorPlaceholder: 'Введите "/" или "{" для вставки переменной',
    viewOnly: 'Только просмотр',
    showRunHistory: 'Показать историю запусков',
    enableJinja: 'Включить поддержку шаблонов Jinja',
    learnMore: 'Узнать больше',
    copy: 'Копировать',
    duplicate: 'Дублировать',
    addBlock: 'Добавить блок',
    pasteHere: 'Вставить сюда',
    pointerMode: 'Режим указателя',
    handMode: 'Режим руки',
    model: 'Модель',
    workflowAsTool: 'Рабочий процесс как инструмент',
    configureRequired: 'Требуется настройка',
    configure: 'Настроить',
    manageInTools: 'Управление в инструментах',
    workflowAsToolTip: 'После обновления рабочего процесса требуется перенастройка инструмента.',
    viewDetailInTracingPanel: 'Посмотреть подробности',
    syncingData: 'Синхронизация данных, всего несколько секунд.',
    importDSL: 'Импортировать DSL',
    importDSLTip: 'Текущий черновик будет перезаписан. Экспортируйте рабочий процесс в качестве резервной копии перед импортом.',
    backupCurrentDraft: 'Резервное копирование текущего черновика',
    chooseDSL: 'Выберите файл DSL(yml)',
    overwriteAndImport: 'Перезаписать и импортировать',
    importFailure: 'Ошибка импорта',
    importSuccess: 'Импорт успешно завершен',
    parallelTip: {
      click: {
        title: 'Щелчок',
        desc: 'добавить',
      },
      drag: {
        title: 'Волочить',
        desc: 'для подключения',
      },
      limit: 'Параллелизм ограничен ветвями {{num}}.',
      depthLimit: 'Ограничение на количество слоев параллельной вложенности {{num}}',
    },
    parallelRun: 'Параллельный прогон',
    disconnect: 'Разъединять',
    jumpToNode: 'Перейти к этому узлу',
    addParallelNode: 'Добавить параллельный узел',
    parallel: 'ПАРАЛЛЕЛЬНЫЙ',
    branch: 'ВЕТКА',
    featuresDocLink: 'Подробнее',
    fileUploadTip: 'Функции загрузки изображений были обновлены до загрузки файлов.',
    featuresDescription: 'Улучшение взаимодействия с пользователем веб-приложения',
    ImageUploadLegacyTip: 'Теперь вы можете создавать переменные типа файла в стартовой форме. В будущем мы больше не будем поддерживать функцию загрузки изображений.',
    importWarning: 'Осторожность',
    importWarningDetails: 'Разница в версии DSL может повлиять на некоторые функции',
    openInExplore: 'Открыть в разделе «Обзор»',
    onFailure: 'О неудаче',
    addFailureBranch: 'Добавить ветвь Fail',
  },
  env: {
    envPanelTitle: 'Переменные среды',
    envDescription: 'Переменные среды могут использоваться для хранения конфиденциальной информации и учетных данных. Они доступны только для чтения и могут быть отделены от файла DSL во время экспорта.',
    envPanelButton: 'Добавить переменную',
    modal: {
      title: 'Добавить переменную среды',
      editTitle: 'Редактировать переменную среды',
      type: 'Тип',
      name: 'Имя',
      namePlaceholder: 'Имя переменной среды',
      value: 'Значение',
      valuePlaceholder: 'Значение переменной среды',
      secretTip: 'Используется для определения конфиденциальной информации или данных, с настройками DSL, настроенными для предотвращения утечки.',
    },
    export: {
      title: 'Экспортировать секретные переменные среды?',
      checkbox: 'Экспортировать секретные значения',
      ignore: 'Экспортировать DSL',
      export: 'Экспортировать DSL с секретными значениями ',
    },
  },
  chatVariable: {
    panelTitle: 'Переменные разговора',
    panelDescription: 'Переменные разговора используются для хранения интерактивной информации, которую LLM необходимо запомнить, включая историю разговоров, загруженные файлы, пользовательские настройки. Они доступны для чтения и записи. ',
    docLink: 'Посетите нашу документацию, чтобы узнать больше.',
    button: 'Добавить переменную',
    modal: {
      title: 'Добавить переменную разговора',
      editTitle: 'Редактировать переменную разговора',
      name: 'Имя',
      namePlaceholder: 'Имя переменной',
      type: 'Тип',
      value: 'Значение по умолчанию',
      valuePlaceholder: 'Значение по умолчанию, оставьте пустым, чтобы не устанавливать',
      description: 'Описание',
      descriptionPlaceholder: 'Опишите переменную',
      editInJSON: 'Редактировать в JSON',
      oneByOne: 'Добавлять по одному',
      editInForm: 'Редактировать в форме',
      arrayValue: 'Значение',
      addArrayValue: 'Добавить значение',
      objectKey: 'Ключ',
      objectType: 'Тип',
      objectValue: 'Значение по умолчанию',
    },
    storedContent: 'Сохраненный контент',
    updatedAt: 'Обновлено в ',
  },
  changeHistory: {
    title: 'История изменений',
    placeholder: 'Вы еще ничего не изменили',
    clearHistory: 'Очистить историю',
    hint: 'Подсказка',
    hintText: 'Ваши действия по редактированию отслеживаются в истории изменений, которая хранится на вашем устройстве в течение этого сеанса. Эта история будет очищена, когда вы покинете редактор.',
    stepBackward_one: '{{count}} шаг назад',
    stepBackward_other: '{{count}} шагов назад',
    stepForward_one: '{{count}} шаг вперед',
    stepForward_other: '{{count}} шагов вперед',
    sessionStart: 'Начало сеанса',
    currentState: 'Текущее состояние',
    nodeTitleChange: 'Изменено название блока',
    nodeDescriptionChange: 'Изменено описание блока',
    nodeDragStop: 'Блок перемещен',
    nodeChange: 'Блок изменен',
    nodeConnect: 'Блок подключен',
    nodePaste: 'Блок вставлен',
    nodeDelete: 'Блок удален',
    nodeAdd: 'Блок добавлен',
    nodeResize: 'Размер блока изменен',
    noteAdd: 'Заметка добавлена',
    noteChange: 'Заметка изменена',
    noteDelete: 'Заметка удалена',
    edgeDelete: 'Блок отключен',
  },
  errorMsg: {
    fieldRequired: '{{field}} обязательно для заполнения',
    authRequired: 'Требуется авторизация',
    invalidJson: '{{field}} неверный JSON',
    fields: {
      variable: 'Имя переменной',
      variableValue: 'Значение переменной',
      code: 'Код',
      model: 'Модель',
      rerankModel: 'Модель переранжирования',
      visionVariable: 'Переменная зрения',
    },
    invalidVariable: 'Неверная переменная',
    rerankModelRequired: 'Перед включением модели повторного ранжирования убедитесь, что модель успешно настроена в настройках.',
  },
  singleRun: {
    testRun: 'Тестовый запуск ',
    startRun: 'Начать запуск',
    running: 'Выполняется',
    testRunIteration: 'Итерация тестового запуска',
    back: 'Назад',
    iteration: 'Итерация',
  },
  tabs: {
    'searchBlock': 'Поиск блока',
    'blocks': 'Блоки',
    'searchTool': 'Поиск инструмента',
    'tools': 'Инструменты',
    'allTool': 'Все',
    'builtInTool': 'Встроенные',
    'customTool': 'Пользовательские',
    'workflowTool': 'Рабочий процесс',
    'question-understand': 'Понимание вопроса',
    'logic': 'Логика',
    'transform': 'Преобразование',
    'utilities': 'Утилиты',
    'noResult': 'Ничего не найдено',
  },
  blocks: {
    'start': 'Начало',
    'end': 'Конец',
    'answer': 'Ответ',
    'llm': 'LLM',
    'knowledge-retrieval': 'Поиск знаний',
    'question-classifier': 'Классификатор вопросов',
    'if-else': 'ЕСЛИ/ИНАЧЕ',
    'code': 'Код',
    'template-transform': 'Шаблон',
    'http-request': 'HTTP-запрос',
    'variable-assigner': 'Агрегатор переменных',
    'variable-aggregator': 'Агрегатор переменных',
    'assigner': 'Назначение переменной',
    'iteration-start': 'Начало итерации',
    'iteration': 'Итерация',
    'parameter-extractor': 'Извлечение параметров',
    'document-extractor': 'Экстрактор документов',
    'list-operator': 'Оператор списка',
  },
  blocksAbout: {
    'start': 'Определите начальные параметры для запуска рабочего процесса',
    'end': 'Определите конец и тип результата рабочего процесса',
    'answer': 'Определите содержимое ответа в чате',
    'llm': 'Вызов больших языковых моделей для ответа на вопросы или обработки естественного языка',
    'knowledge-retrieval': 'Позволяет запрашивать текстовый контент, связанный с вопросами пользователей, из базы знаний',
    'question-classifier': 'Определите условия классификации вопросов пользователей, LLM может определить, как будет развиваться разговор на основе описания классификации',
    'if-else': 'Позволяет разделить рабочий процесс на две ветки на основе условий if/else',
    'code': 'Выполните фрагмент кода Python или NodeJS для реализации пользовательской логики',
    'template-transform': 'Преобразование данных в строку с использованием синтаксиса шаблонов Jinja',
    'http-request': 'Разрешить отправку запросов на сервер по протоколу HTTP',
    'variable-assigner': 'Объединение переменных из нескольких ветвей в одну переменную для унифицированной настройки подчиненных узлов.',
    'assigner': 'Узел назначения переменной используется для назначения значений записываемым переменным (например, переменным разговора).',
    'variable-aggregator': 'Объединение переменных из нескольких ветвей в одну переменную для унифицированной настройки подчиненных узлов.',
    'iteration': 'Выполнение нескольких шагов над объектом списка до тех пор, пока не будут выведены все результаты.',
    'parameter-extractor': 'Используйте LLM для извлечения структурированных параметров из естественного языка для вызова инструментов или HTTP-запросов.',
    'list-operator': 'Используется для фильтрации или сортировки содержимого массива.',
    'document-extractor': 'Используется для разбора загруженных документов в текстовый контент, который легко воспринимается LLM.',
  },
  operator: {
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    zoomTo50: 'Масштаб 50%',
    zoomTo100: 'Масштаб 100%',
    zoomToFit: 'По размеру',
  },
  panel: {
    userInputField: 'Поле ввода пользователя',
    changeBlock: 'Изменить блок',
    helpLink: 'Ссылка на справку',
    about: 'О программе',
    createdBy: 'Создано ',
    nextStep: 'Следующий шаг',
    addNextStep: 'Добавить следующий блок в этот рабочий процесс',
    selectNextStep: 'Выбрать следующий блок',
    runThisStep: 'Выполнить этот шаг',
    checklist: 'Контрольный список',
    checklistTip: 'Убедитесь, что все проблемы решены перед публикацией',
    checklistResolved: 'Все проблемы решены',
    organizeBlocks: 'Организовать блоки',
    change: 'Изменить',
    optional: '(необязательно)',
  },
  nodes: {
    common: {
      outputVars: 'Выходные переменные',
      insertVarTip: 'Вставить переменную',
      memory: {
        memory: 'Память',
        memoryTip: 'Настройки памяти чата',
        windowSize: 'Размер окна',
        conversationRoleName: 'Имя роли разговора',
        user: 'Префикс пользователя',
        assistant: 'Префикс помощника',
      },
      memories: {
        title: 'Воспоминания',
        tip: 'Память чата',
        builtIn: 'Встроенные',
      },
      errorHandle: {
        none: {
          title: 'Никакой',
          desc: 'Узел перестанет работать, если произойдет исключение и оно не будет обработано',
        },
        defaultValue: {
          title: 'Значение по умолчанию',
          desc: 'При возникновении ошибки укажите статическое выходное содержимое.',
          tip: 'При ошибке будет возвращено значение ниже.',
          inLog: 'Исключение узла, вывод в соответствии со значениями по умолчанию.',
          output: 'Выходное значение по умолчанию',
        },
        failBranch: {
          desc: 'При возникновении ошибки будет выполнена ветвь исключения',
          customize: 'Перейдите на холст, чтобы настроить логику fail branch.',
          inLog: 'Исключение узла, автоматически выполнит ветвь fail. Выходные данные узла вернут тип ошибки и сообщение об ошибке и передадут их нижестоящему потоку.',
          title: 'Неудачная ветвь',
          customizeTip: 'Когда ветвь fail активирована, исключения, созданные узлами, не завершат процесс. Вместо этого он автоматически выполнит предопределенную ветвь fail, что позволит вам гибко предоставлять сообщения об ошибках, отчеты, исправления или пропускать действия.',
        },
        partialSucceeded: {
          tip: 'В процессе есть {{num}} узлов, которые работают ненормально, пожалуйста, перейдите к трассировке, чтобы проверить логи.',
        },
        title: 'Обработка ошибок',
        tip: 'Стратегия обработки исключений, запускаемая при обнаружении исключения на узле.',
      },
      retry: {
        retry: 'Снова пробовать',
        retryOnFailure: 'Повторная попытка при неудаче',
        maxRetries: 'максимальное количество повторных попыток',
        retryInterval: 'Интервал повторных попыток',
        retryTimes: 'Повторите {{раз}} раз при неудаче',
        retrying: 'Повтор...',
        retrySuccessful: 'Повторить попытку успешно',
        retryFailed: 'Повторная попытка не удалась',
        times: 'раз',
        ms: 'госпожа',
        retryFailedTimes: 'Повторные попытки {{times}} не увенчались успехом',
        retries: '{{число}} Повторных попыток',
      },
    },
    start: {
      required: 'обязательно',
      inputField: 'Поле ввода',
      builtInVar: 'Встроенные переменные',
      outputVars: {
        query: 'Ввод пользователя',
        memories: {
          des: 'История разговоров',
          type: 'тип сообщения',
          content: 'содержимое сообщения',
        },
        files: 'Список файлов',
      },
      noVarTip: 'Установите входные данные, которые можно использовать в рабочем процессе',
    },
    end: {
      outputs: 'Выходы',
      output: {
        type: 'тип вывода',
        variable: 'выходная переменная',
      },
      type: {
        'none': 'Нет',
        'plain-text': 'Простой текст',
        'structured': 'Структурированный',
      },
    },
    answer: {
      answer: 'Ответ',
      outputVars: 'Выходные переменные',
    },
    llm: {
      model: 'модель',
      variables: 'переменные',
      context: 'контекст',
      contextTooltip: 'Вы можете импортировать знания как контекст',
      notSetContextInPromptTip: 'Чтобы включить функцию контекста, пожалуйста, заполните переменную контекста в PROMPT.',
      prompt: 'подсказка',
      roleDescription: {
        system: 'Дайте высокоуровневые инструкции для разговора',
        user: 'Предоставьте инструкции, запросы или любой текстовый ввод для модели',
        assistant: 'Ответы модели на основе сообщений пользователя',
      },
      addMessage: 'Добавить сообщение',
      vision: 'зрение',
      files: 'Файлы',
      resolution: {
        name: 'Разрешение',
        high: 'Высокое',
        low: 'Низкое',
      },
      outputVars: {
        output: 'Создать контент',
        usage: 'Информация об использовании модели',
      },
      singleRun: {
        variable: 'Переменная',
      },
      sysQueryInUser: 'sys.query в сообщении пользователя обязателен',
    },
    knowledgeRetrieval: {
      queryVariable: 'Переменная запроса',
      knowledge: 'Знания',
      outputVars: {
        output: 'Извлеченные сегментированные данные',
        content: 'Сегментированный контент',
        title: 'Сегментированный заголовок',
        icon: 'Сегментированный значок',
        url: 'Сегментированный URL',
        metadata: 'Другие метаданные',
      },
    },
    http: {
      inputVars: 'Входные переменные',
      api: 'API',
      apiPlaceholder: 'Введите URL, введите "/" для вставки переменной',
      notStartWithHttp: 'API должен начинаться с http:// или https://',
      key: 'Ключ',
      value: 'Значение',
      bulkEdit: 'Массовое редактирование',
      keyValueEdit: 'Редактирование ключа-значения',
      headers: 'Заголовки',
      params: 'Параметры',
      body: 'Тело',
      outputVars: {
        body: 'Содержимое ответа',
        statusCode: 'Код состояния ответа',
        headers: 'Список заголовков ответа JSON',
        files: 'Список файлов',
      },
      authorization: {
        'authorization': 'Авторизация',
        'authorizationType': 'Тип авторизации',
        'no-auth': 'Нет',
        'api-key': 'API-ключ',
        'auth-type': 'Тип аутентификации',
        'basic': 'Базовая',
        'bearer': 'Bearer',
        'custom': 'Пользовательская',
        'api-key-title': 'API-ключ',
        'header': 'Заголовок',
      },
      insertVarPlaceholder: 'введите "/" для вставки переменной',
      timeout: {
        title: 'Тайм-аут',
        connectLabel: 'Тайм-аут подключения',
        connectPlaceholder: 'Введите тайм-аут подключения в секундах',
        readLabel: 'Тайм-аут чтения',
        readPlaceholder: 'Введите тайм-аут чтения в секундах',
        writeLabel: 'Тайм-аут записи',
        writePlaceholder: 'Введите тайм-аут записи в секундах',
      },
      type: 'Тип',
      binaryFileVariable: 'Переменная двоичного файла',
      extractListPlaceholder: 'Введите индекс элемента списка, введите \'/\' вставьте переменную',
      curl: {
        placeholder: 'Вставьте сюда строку cURL',
        title: 'Импорт из cURL',
      },
    },
    code: {
      inputVars: 'Входные переменные',
      outputVars: 'Выходные переменные',
      advancedDependencies: 'Расширенные зависимости',
      advancedDependenciesTip: 'Добавьте сюда некоторые предварительно загруженные зависимости, которые занимают больше времени для потребления или не являются встроенными по умолчанию',
      searchDependencies: 'Поиск зависимостей',
    },
    templateTransform: {
      inputVars: 'Входные переменные',
      code: 'Код',
      codeSupportTip: 'Поддерживает только Jinja2',
      outputVars: {
        output: 'Преобразованный контент',
      },
    },
    ifElse: {
      if: 'Если',
      else: 'Иначе',
      elseDescription: 'Используется для определения логики, которая должна быть выполнена, когда условие if не выполняется.',
      and: 'и',
      or: 'или',
      operator: 'Оператор',
      notSetVariable: 'Пожалуйста, сначала установите переменную',
      comparisonOperator: {
        'contains': 'содержит',
        'not contains': 'не содержит',
        'start with': 'начинается с',
        'end with': 'заканчивается на',
        'is': 'равно',
        'is not': 'не равно',
        'empty': 'пусто',
        'not empty': 'не пусто',
        'null': 'null',
        'not null': 'не null',
        'regex match': 'Совпадение с регулярным выражением',
        'all of': 'все',
        'not in': 'не в',
        'not exists': 'не существует',
        'in': 'в',
        'exists': 'Существует',
      },
      enterValue: 'Введите значение',
      addCondition: 'Добавить условие',
      conditionNotSetup: 'Условие НЕ настроено',
      selectVariable: 'Выберите переменную...',
      optionName: {
        audio: 'Аудио',
        localUpload: 'Локальная загрузка',
        doc: 'Доктор',
        image: 'Образ',
        video: 'Видео',
        url: 'URL-адрес',
      },
      select: 'Выбирать',
      addSubVariable: 'Подпеременная',
    },
    variableAssigner: {
      title: 'Назначить переменные',
      outputType: 'Тип вывода',
      varNotSet: 'Переменная не установлена',
      noVarTip: 'Добавьте переменные, которые нужно назначить',
      type: {
        string: 'Строка',
        number: 'Число',
        object: 'Объект',
        array: 'Массив',
      },
      aggregationGroup: 'Группа агрегации',
      aggregationGroupTip: 'Включение этой функции позволяет агрегатору переменных агрегировать несколько наборов переменных.',
      addGroup: 'Добавить группу',
      outputVars: {
        varDescribe: 'Вывод {{groupName}}',
      },
      setAssignVariable: 'Установить переменную назначения',
    },
    assigner: {
      'assignedVariable': 'Назначенная переменная',
      'writeMode': 'Режим записи',
      'writeModeTip': 'Режим добавления: доступен только для переменных массива.',
      'over-write': 'Перезаписать',
      'append': 'Добавить',
      'plus': 'Плюс',
      'clear': 'Очистить',
      'setVariable': 'Установить переменную',
      'variable': 'Переменная',
      'operations': {
        '-=': '-=',
        '+=': '+=',
        'clear': 'Ясный',
        'extend': 'Вытягивать',
        'set': 'Набор',
        'overwrite': 'Перезаписать',
        '/=': '/=',
        '*=': '*=',
        'title': 'Операция',
        'over-write': 'Перезаписать',
        'append': 'Прибавлять',
      },
      'variables': 'Переменные',
      'noAssignedVars': 'Нет доступных назначенных переменных',
      'noVarTip': 'Нажмите кнопку "+", чтобы добавить переменные',
      'setParameter': 'Установите параметр...',
      'assignedVarsDescription': 'Назначаемые переменные должны быть доступными для записи, например переменными беседы.',
      'varNotSet': 'Переменная НЕ установлена',
      'selectAssignedVariable': 'Выберите назначенную переменную...',
    },
    tool: {
      toAuthorize: 'Авторизовать',
      inputVars: 'Входные переменные',
      outputVars: {
        text: 'контент, сгенерированный инструментом',
        files: {
          title: 'файлы, сгенерированные инструментом',
          type: 'Поддерживаемый тип. Сейчас поддерживаются только изображения',
          transfer_method: 'Метод передачи. Значение - remote_url или local_file',
          url: 'URL изображения',
          upload_file_id: 'Идентификатор загруженного файла',
        },
        json: 'json, сгенерированный инструментом',
      },
    },
    questionClassifiers: {
      model: 'модель',
      inputVars: 'Входные переменные',
      outputVars: {
        className: 'Имя класса',
      },
      class: 'Класс',
      classNamePlaceholder: 'Введите имя вашего класса',
      advancedSetting: 'Расширенные настройки',
      topicName: 'Название темы',
      topicPlaceholder: 'Введите название вашей темы',
      addClass: 'Добавить класс',
      instruction: 'Инструкция',
      instructionTip: 'Введите дополнительные инструкции, чтобы помочь классификатору вопросов лучше понять, как классифицировать вопросы.',
      instructionPlaceholder: 'Введите вашу инструкцию',
    },
    parameterExtractor: {
      inputVar: 'Входная переменная',
      extractParameters: 'Извлечь параметры',
      importFromTool: 'Импортировать из инструментов',
      addExtractParameter: 'Добавить параметр для извлечения',
      addExtractParameterContent: {
        name: 'Имя',
        namePlaceholder: 'Имя извлекаемого параметра',
        type: 'Тип',
        typePlaceholder: 'Тип извлекаемого параметра',
        description: 'Описание',
        descriptionPlaceholder: 'Описание извлекаемого параметра',
        required: 'Обязательный',
        requiredContent: 'Обязательный используется только в качестве ссылки для вывода модели, а не для обязательной проверки вывода параметра.',
      },
      extractParametersNotSet: 'Параметры для извлечения не настроены',
      instruction: 'Инструкция',
      instructionTip: 'Введите дополнительные инструкции, чтобы помочь извлекателю параметров понять, как извлекать параметры.',
      advancedSetting: 'Расширенные настройки',
      reasoningMode: 'Режим рассуждения',
      reasoningModeTip: 'Вы можете выбрать соответствующий режим рассуждения, основываясь на способности модели реагировать на инструкции для вызова функций или подсказки.',
      isSuccess: 'Успешно. В случае успеха значение равно 1, в случае сбоя - 0.',
      errorReason: 'Причина ошибки',
    },
    iteration: {
      deleteTitle: 'Удалить узел итерации?',
      deleteDesc: 'Удаление узла итерации приведет к удалению всех дочерних узлов',
      input: 'Вход',
      output: 'Выходные переменные',
      iteration_one: '{{count}} Итерация',
      iteration_other: '{{count}} Итераций',
      currentIteration: 'Текущая итерация',
      ErrorMethod: {
        operationTerminated: 'Прекращено',
        continueOnError: 'продолжить по ошибке',
        removeAbnormalOutput: 'удалить аномальный вывод',
      },
      comma: ',',
      error_other: '{{Количество}} Ошибки',
      errorResponseMethod: 'Метод реагирования на ошибку',
      MaxParallelismTitle: 'Максимальный параллелизм',
      parallelModeUpper: 'ПАРАЛЛЕЛЬНЫЙ РЕЖИМ',
      error_one: '{{Количество}} Ошибка',
      parallelModeEnableTitle: 'Параллельный режим включен',
      parallelMode: 'Параллельный режим',
      parallelPanelDesc: 'В параллельном режиме задачи в итерации поддерживают параллельное выполнение.',
      parallelModeEnableDesc: 'В параллельном режиме задачи в итерациях поддерживают параллельное выполнение. Вы можете настроить это на панели свойств справа.',
      MaxParallelismDesc: 'Максимальный параллелизм используется для управления количеством задач, выполняемых одновременно в одной итерации.',
      answerNodeWarningDesc: 'Предупреждение о параллельном режиме: узлы ответов, присвоение переменных диалога и постоянные операции чтения и записи в итерациях могут вызывать исключения.',
    },
    note: {
      addNote: 'Добавить заметку',
      editor: {
        placeholder: 'Напишите свою заметку...',
        small: 'Маленький',
        medium: 'Средний',
        large: 'Большой',
        bold: 'Жирный',
        italic: 'Курсив',
        strikethrough: 'Зачеркнутый',
        link: 'Ссылка',
        openLink: 'Открыть',
        unlink: 'Удалить ссылку',
        enterUrl: 'Введите URL...',
        invalidUrl: 'Неверный URL',
        bulletList: 'Маркированный список',
        showAuthor: 'Показать автора',
      },
    },
    docExtractor: {
      outputVars: {
        text: 'Извлеченный текст',
      },
      learnMore: 'Подробнее',
      inputVar: 'Входная переменная',
      supportFileTypes: 'Поддерживаемые типы файлов: {{types}}.',
    },
    listFilter: {
      outputVars: {
        last_record: 'Последняя запись',
        result: 'Фильтрация результата',
        first_record: 'Первая запись',
      },
      desc: 'DESC',
      asc: 'ASC',
      filterCondition: 'Условие фильтра',
      filterConditionComparisonOperator: 'Оператор сравнения условий фильтра',
      inputVar: 'Входная переменная',
      limit: 'Топ N',
      orderBy: 'Заказать по',
      filterConditionKey: 'Ключ условия фильтра',
      selectVariableKeyPlaceholder: 'Выбор ключа подпеременной',
      filterConditionComparisonValue: 'Значение условия фильтра',
      extractsCondition: 'Извлечение элемента N',
    },
  },
  tracing: {
    stopBy: 'Остановлено {{user}}',
  },
  variableReference: {
    assignedVarsDescription: 'Назначаемые переменные должны быть доступными для записи, такими как',
    noAssignedVars: 'Нет доступных назначенных переменных',
    noVarsForOperation: 'Переменные для присвоения выбранной операции отсутствуют.',
    conversationVars: 'Переменные беседы',
    noAvailableVars: 'Нет доступных переменных',
  },
}

export default translation
