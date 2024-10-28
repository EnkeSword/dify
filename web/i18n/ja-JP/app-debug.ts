const translation = {
  pageTitle: {
    line1: 'プロンプト',
    line2: 'エンジニアリング',
  },
  orchestrate: 'オーケストレーション',
  promptMode: {
    simple: 'エキスパートモードに切り替えて、PROMPT全体を編集します',
    advanced: 'エキスパートモード',
    switchBack: '基本モードに戻る',
    advancedWarning: {
      title: 'エキスパートモードに切り替えました。PROMPTを変更すると、基本モードに戻ることはできません。',
      description: 'エキスパートモードでは、PROMPT全体を編集できます。',
      learnMore: '詳細を見る',
      ok: 'OK',
    },
    operation: {
      addMessage: 'メッセージを追加',
    },
    contextMissing: 'コンテキストコンポーネントが見つかりません。プロンプトの効果が十分でない場合があります。',
  },
  operation: {
    applyConfig: '公開',
    resetConfig: 'リセット',
    debugConfig: 'デバッグ',
    addFeature: '機能を追加',
    automatic: '自動',
    stopResponding: '応答を停止',
    agree: 'いいね',
    disagree: 'いいえ',
    cancelAgree: 'いいねをキャンセル',
    cancelDisagree: 'いいえをキャンセル',
    userAction: 'ユーザー',
  },
  notSetAPIKey: {
    title: 'LLMプロバイダーキーが設定されていません',
    trailFinished: 'トライアル終了',
    description: 'LLMプロバイダーキーが設定されていません。デバッグする前に設定する必要があります。',
    settingBtn: '設定に移動',
  },
  trailUseGPT4Info: {
    title: '現在、gpt-4はサポートされていません',
    description: 'gpt-4を使用するには、APIキーを設定してください。',
  },
  feature: {
    groupChat: {
      title: 'チャットの強化',
      description: 'アプリの事前会話設定を追加すると、ユーザーエクスペリエンスが向上します。',
    },
    groupExperience: {
      title: 'エクスペリエンスの強化',
    },
    conversationOpener: {
      title: '会話の開始',
      description: 'チャットアプリでは、AIがユーザーに最初にアクティブに話しかける最初の文は、通常、歓迎メッセージとして使用されます。',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'フォローアップ',
      description: '次の質問の提案を設定すると、ユーザーにより良いチャットが提供されます。',
      resDes: 'ユーザーの次の質問に関する3つの提案。',
      tryToAsk: '質問してみてください',
    },
    moreLikeThis: {
      title: 'これに似たもの',
      description: '一度に複数のテキストを生成し、編集して生成を続ける',
      generateNumTip: '生成回数',
      tip: 'この機能を使用すると、追加のトークンオーバーヘッドが発生します',
    },
    speechToText: {
      title: '音声からテキストへ',
      description: '有効にすると、音声入力を使用できます。',
      resDes: '音声入力が有効になっています',
    },
    textToSpeech: {
      title: 'テキストから音声へ',
      description: '有効にすると、テキストを音声に変換できます。',
      resDes: 'テキストからオーディオへの変換が有効になっています',
    },
    citation: {
      title: '引用と帰属',
      description: '有効にすると、生成されたコンテンツのソースドキュメントと帰属セクションが表示されます。',
      resDes: '引用と帰属が有効になっています',
    },
    annotation: {
      title: '注釈返信',
      description: '類似のユーザー質問との優先一致のためにキャッシュに高品質の応答を手動で追加できます。',
      resDes: '注釈応答が有効になっています',
      scoreThreshold: {
        title: 'スコア閾値',
        description: '注釈返信の類似性閾値を設定するために使用されます。',
        easyMatch: '簡単なマッチ',
        accurateMatch: '正確なマッチ',
      },
      matchVariable: {
        title: 'マッチ変数',
        choosePlaceholder: 'マッチ変数を選択',
      },
      cacheManagement: '注釈',
      cached: '注釈付き',
      remove: '削除',
      removeConfirm: 'この注釈を削除しますか？',
      add: '注釈を追加',
      edit: '注釈を編集',
    },
    dataSet: {
      title: 'コンテキスト',
      noData: 'コンテキストとして知識をインポートできます',
      words: '単語',
      textBlocks: 'テキストブロック',
      selectTitle: '参照する知識を選択',
      selected: '選択された知識',
      noDataSet: '知識が見つかりません',
      toCreate: '作成に進む',
      notSupportSelectMulti: '現在、複数の知識の選択はサポートされていません',
      queryVariable: {
        title: 'クエリ変数',
        tip: 'この変数はコンテキストの取得のためのクエリ入力として使用され、この変数の入力に関連するコンテキスト情報を取得します。',
        choosePlaceholder: 'クエリ変数を選択',
        noVar: '変数なし',
        noVarTip: '変数セクションの下に変数を作成してください',
        unableToQueryDataSet: '知識をクエリできません',
        unableToQueryDataSetTip: '知識のクエリに失敗しました。正常にクエリできなかった場合は、コンテキストセクションでコンテキストクエリ変数を選択してください。',
        ok: 'OK',
        contextVarNotEmpty: 'コンテキストクエリ変数は空にできません',
        deleteContextVarTitle: '変数 "{{varName}}" を削除しますか？',
        deleteContextVarTip: 'この変数はコンテキストクエリ変数として設定されており、削除すると知識の正常な使用に影響します。削除する場合は、コンテキストセクションで再選択してください。',
      },
    },
    tools: {
      title: 'ツール',
      tips: 'ツールは、ユーザー入力または変数をリクエストパラメーターとして使用して外部データをコンテキストとしてクエリするための標準的なAPI呼び出し方法を提供します。',
      toolsInUse: '{{count}} 個のツールが使用中',
      modal: {
        title: 'ツール',
        toolType: {
          title: 'ツールタイプ',
          placeholder: 'ツールタイプを選択してください',
        },
        name: {
          title: '名前',
          placeholder: '名前を入力してください',
        },
        variableName: {
          title: '変数名',
          placeholder: '変数名を入力してください',
        },
      },
    },
    conversationHistory: {
      title: '会話履歴',
      description: '会話の役割に接頭辞名を設定します',
      tip: '会話履歴は有効になっていません。上記のプロンプトに <histories> を追加してください。',
      learnMore: '詳細',
      editModal: {
        title: '会話役割名の編集',
        userPrefix: 'ユーザー接頭辞',
        assistantPrefix: 'アシスタント接頭辞',
      },
    },
    toolbox: {
      title: 'ツールボックス',
    },
    moderation: {
      title: 'コンテンツのモデレーション',
      description: 'モデレーションAPIを使用するか、機密語リストを維持することで、モデルの出力を安全にします。',
      allEnabled: '入力/出力コンテンツが有効になっています',
      inputEnabled: '入力コンテンツが有効になっています',
      outputEnabled: '出力コンテンツが有効になっています',
      modal: {
        title: 'コンテンツのモデレーション設定',
        provider: {
          title: 'プロバイダ',
          openai: 'OpenAIモデレーション',
          openaiTip: {
            prefix: 'OpenAIモデレーションには、',
            suffix: 'にOpenAI APIキーが設定されている必要があります。',
          },
          keywords: 'キーワード',
        },
        keywords: {
          tip: '1行ごとに1つ、行区切りで入力してください。1行あたり最大100文字。',
          placeholder: '1行ごとに、行区切りで入力してください',
          line: '行',
        },
        content: {
          input: '入力コンテンツをモデレート',
          output: '出力コンテンツをモデレート',
          preset: 'プリセット返信',
          placeholder: 'ここにプリセット返信の内容を入力',
          condition: '少なくとも1つの入力および出力コンテンツをモデレートする',
          fromApi: 'プリセット返信はAPIによって返されます',
          errorMessage: 'プリセット返信は空にできません',
          supportMarkdown: 'Markdownがサポートされています',
        },
        openaiNotConfig: {
          before: 'OpenAIモデレーションには、',
          after: 'にOpenAI APIキーが設定されている必要があります。',
        },
      },
    },
  },
  codegen: {
    title: 'コードジェネレーター',
    description: 'コードジェネレーターは、設定されたモデルを使用して指示に基づいて高品質なコードを生成します。明確で詳細な指示を提供してください。',
    instruction: '指示',
    instructionPlaceholder: '生成したいコードの詳細な説明を入力してください。',
    generate: '生成',
    generatedCodeTitle: '生成されたコード',
    loading: 'コードを生成中...',
    apply: '適用',
    applyChanges: '変更を適用',
    resTitle: '生成されたコード',
    overwriteConfirmTitle: '既存のコードを上書きしますか？',
    overwriteConfirmMessage: 'この操作は既存のコードを上書きします。続行しますか？',
  },
  generate: {
    title: 'プロンプト生成器',
    description: 'プロンプト生成器は、設定済みのモデルを使って、高品質で構造的に優れたプロンプトを作成するための最適化を行います。具体的で詳細な指示をお書きください。',
    tryIt: '試してみる',
    instruction: '指示',
    instructionPlaceHolder: '具体的で明確な指示を入力してください。',
    generate: '生成',
    resTitle: '生成されたプロンプト',
    noDataLine1: '左側に使用例を記入してください,',
    noDataLine2: 'オーケストレーションのプレビューがこちらに表示されます。',
    apply: '適用',
    loading: 'アプリケーションを処理中です',
    overwriteTitle: '既存の設定を上書きしますか？',
    overwriteMessage: 'このプロンプトを適用すると、既存の設定が上書きされます。',
    template: {
      pythonDebugger: {
        name: 'Python デバッガー',
        instruction: '指示に従ってコードを生成し、デバッグを行うボット',
      },
      translation: {
        name: '翻訳',
        instruction: '複数言語に対応した翻訳機能',
      },
      professionalAnalyst: {
        name: '専門アナリスト',
        instruction: '長文のレポートから洞察を引き出し、リスクを特定し、重要情報をまとめる',
      },
      excelFormulaExpert: {
        name: 'エクセル式エキスパート',
        instruction: 'ユーザーの指示に基づき、エクセル式の理解、使用、作成をサポートするチャットボット',
      },
      travelPlanning: {
        name: '旅行計画',
        instruction: 'ユーザーが簡単に旅行計画を立てられるように設計されたツール',
      },
      SQLSorcerer: {
        name: 'SQLソーサラー',
        instruction: '日常言語をSQLクエリに変換する',
      },
      GitGud: {
        name: 'Git gud',
        instruction: 'ユーザーが記述したバージョン管理アクションに対応するGitコマンドを生成する',
      },
      meetingTakeaways: {
        name: '会議の要点',
        instruction: '議題、重要点、行動項目を含む要約を作成する',
      },
      writingsPolisher: {
        name: 'ライティングポリッシャー',
        instruction: '文章を改善するための高度な編集技法を用いる',
      },
    },
  },
  resetConfig: {
    title: 'リセットを確認しますか？',
    message: '変更が破棄され、最後に公開された構成が復元されます。',
  },
  errorMessage: {
    nameOfKeyRequired: 'キーの名前: {{key}} が必要です',
    valueOfVarRequired: '{{key}} の値は空にできません',
    queryRequired: 'リクエストテキストが必要です。',
    waitForResponse: '前のメッセージへの応答が完了するまでお待ちください。',
    waitForBatchResponse: 'バッチタスクへの応答が完了するまでお待ちください。',
    notSelectModel: 'モデルを選択してください',
    waitForImgUpload: '画像のアップロードが完了するまでお待ちください',
  },
  chatSubTitle: '手順',
  completionSubTitle: '接頭辞プロンプト',
  promptTip: 'プロンプトは、AIの応答を指示と制約で誘導します。 {{input}} のような変数を挿入します。このプロンプトはユーザーには表示されません。',
  formattingChangedTitle: '書式が変更されました',
  formattingChangedText: '書式を変更すると、デバッグ領域がリセットされます。よろしいですか？',
  variableTitle: '変数',
  variableTip: 'ユーザーはフォームに変数を入力し、プロンプト内の変数を自動的に置換します。',
  notSetVar: '変数を使用すると、ユーザーはフォームに入力する際にプロンプトの単語や開始の言葉を導入できます。プロンプトの単語に "{{input}}" を入力してみてください。',
  autoAddVar: 'プリプロンプトで参照されている未定義の変数があります。ユーザー入力フォームに追加しますか？',
  variableTable: {
    key: '変数キー',
    name: 'ユーザー入力フィールド名',
    optional: 'オプション',
    type: '入力タイプ',
    action: 'アクション',
    typeString: '文字列',
    typeSelect: '選択',
  },
  varKeyError: {
    canNoBeEmpty: '{{key}} は必須です',
    tooLong: '{{key}} が長すぎます。30文字を超えることはできません',
    notValid: '{{key}} が無効です。文字、数字、アンダースコアのみを含めることができます',
    notStartWithNumber: '{{key}} は数字で始めることはできません',
    keyAlreadyExists: '{{key}} はすでに存在します',
  },
  otherError: {
    promptNoBeEmpty: 'プロンプトを空にすることはできません',
    historyNoBeEmpty: 'プロンプトには会話履歴を設定する必要があります',
    queryNoBeEmpty: 'プロンプトにクエリを設定する必要があります',
  },
  variableConfig: {
    'addModalTitle': '入力フィールドを追加',
    'editModalTitle': '入力フィールドを編集',
    'description': '{{varName}} の変数設定',
    'fieldType': 'フィールドタイプ',
    'string': '短文',
    'text-input': '短文',
    'paragraph': '段落',
    'select': '選択',
    'number': '数値',
    'notSet': '設定されていません。プレフィックスのプロンプトで {{input}} を入力してみてください。',
    'stringTitle': 'フォームテキストボックスオプション',
    'maxLength': '最大長',
    'options': 'オプション',
    'addOption': 'オプションを追加',
    'apiBasedVar': 'APIベースの変数',
    'varName': '変数名',
    'labelName': 'ラベル名',
    'inputPlaceholder': '入力してください',
    'content': 'コンテンツ',
    'required': '必須',
    'errorMsg': {
      varNameRequired: '変数名は必須です',
      labelNameRequired: 'ラベル名は必須です',
      varNameCanBeRepeat: '変数名は繰り返すことができません',
      atLeastOneOption: '少なくとも1つのオプションが必要です',
      optionRepeat: '繰り返しオプションがあります',
    },
  },
  vision: {
    name: 'ビジョン',
    description: 'ビジョンを有効にすると、モデルが画像を受け取り、それに関する質問に答えることができます。',
    settings: '設定',
    visionSettings: {
      title: 'ビジョン設定',
      resolution: '解像度',
      resolutionTooltip: `低解像度では、モデルに低解像度の 512 x 512 バージョンの画像を受け取らせ、画像を 65 トークンの予算で表現します。これにより、API がより迅速な応答を返し、高い詳細が必要なユースケースでは入力トークンを消費します。
      \n
      高解像度では、まずモデルに低解像度の画像を見せ、その後、入力画像サイズに基づいて 512px の正方形の詳細なクロップを作成します。詳細なクロップごとに 129 トークンの予算を使用します。`,
      high: '高',
      low: '低',
      uploadMethod: 'アップロード方法',
      both: '両方',
      localUpload: 'ローカルアップロード',
      url: 'URL',
      uploadLimit: 'アップロード制限',
    },
  },
  voice: {
    name: '音声',
    defaultDisplay: 'デフォルトの音声',
    description: 'テキスト読み上げの音声設定',
    settings: '設定',
    voiceSettings: {
      title: '音声設定',
      language: '言語',
      resolutionTooltip: 'テキスト読み上げの音声言語をサポートします。',
      voice: '音声',
      autoPlay: '自動再生',
      autoPlayEnabled: '開ける',
      autoPlayDisabled: '關閉',
    },
  },
  openingStatement: {
    title: '会話開始',
    add: '追加',
    writeOpener: 'オープナーを書く',
    placeholder: 'ここにオープナーメッセージを書いてください。変数を使用できます。{{variable}} を入力してみてください。',
    openingQuestion: '開始質問',
    noDataPlaceHolder:
      'ユーザーとの会話を開始すると、会話アプリケーションで彼らとのより密接な関係を築くのに役立ちます。',
    varTip: '変数を使用できます。{{variable}} を入力してみてください',
    tooShort: '会話の開始には少なくとも 20 単語の初期プロンプトが必要です。',
    notIncludeKey: '初期プロンプトに変数 {{key}} が含まれていません。初期プロンプトに追加してください。',
  },
  modelConfig: {
    model: 'モデル',
    setTone: '応答のトーンを設定する',
    title: 'モデルとパラメータ',
    modeType: {
      chat: 'チャット',
      completion: '完成',
    },
  },
  inputs: {
    title: 'デバッグとプレビュー',
    noPrompt: 'プレプロンプト入力にいくつかのプロンプトを記入してみてください',
    userInputField: 'ユーザー入力フィールド',
    noVar: '変数の値を入力してください。新しいセッションが開始されるたびにプロンプトの単語が自動的に置換されます。',
    chatVarTip:
      '変数の値を入力してください。新しいセッションが開始されるたびにプロンプトの単語が自動的に置換されます。',
    completionVarTip:
      '変数の値を入力してください。質問が送信されるたびにプロンプトの単語が自動的に置換されます。',
    previewTitle: 'プロンプトのプレビュー',
    queryTitle: 'クエリ内容',
    queryPlaceholder: 'リクエストテキストを入力してください。',
    run: '実行',
  },
  result: '出力テキスト',
  datasetConfig: {
    settingTitle: 'リトリーバル設定',
    knowledgeTip: 'ナレッジを追加するには「+」ボタンをクリックしてください',
    retrieveOneWay: {
      title: 'N-to-1 リトリーバル',
      description: 'ユーザーの意図とナレッジの説明に基づいて、エージェントが自律的に最適なナレッジを選択します。個々の、限られたナレッジを持つアプリケーションに最適です。',
    },
    retrieveMultiWay: {
      title: 'マルチパスリトリーバル',
      description: 'ユーザーの意図に基づいて、すべてのナレッジをクエリし、複数のソースから関連するテキストを取得し、再順位付け後、ユーザークエリに最適な結果を選択します。再順位付けモデル API の構成が必要です。',
    },
    rerankModelRequired: '再順位付けモデルが必要です',
    params: 'パラメータ',
    top_k: 'トップK',
    top_kTip: 'ユーザーの質問に最も類似したチャンクをフィルタリングするために使用されます。システムは、選択したモデルの max_tokens に応じて、動的に Top K の値を調整します。',
    score_threshold: 'スコア閾値',
    score_thresholdTip: 'チャンクフィルタリングの類似性閾値を設定するために使用されます。',
    retrieveChangeTip: 'インデックスモードとリトリーバルモードを変更すると、このナレッジに関連付けられたアプリケーションに影響を与える可能性があります。',
  },
  debugAsSingleModel: '単一モデルでデバッグ',
  debugAsMultipleModel: '複数モデルでデバッグ',
  duplicateModel: '複製',
  publishAs: 'として公開',
  assistantType: {
    name: 'アシスタントタイプ',
    chatAssistant: {
      name: '基本アシスタント',
      description: '大規模な言語モデルを使用してチャットベースのアシスタントを構築します',
    },
    agentAssistant: {
      name: 'エージェントアシスタント',
      description: 'タスクを自律的に完了するためのツールを選択できるインテリジェントエージェントを構築します',
    },
  },
  agent: {
    agentMode: 'エージェントモード',
    agentModeDes: 'エージェントの推論モードの種類を設定します',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: '関数呼び出し',
    },
    setting: {
      name: 'エージェント設定',
      description: 'エージェントアシスタント設定では、エージェントモードやビルトインプロンプトなどの高度な機能を設定できます。エージェントタイプのみ利用可能です。',
      maximumIterations: {
        name: '最大反復回数',
        description: 'エージェントアシスタントが実行できる反復回数を制限します',
      },
    },
    buildInPrompt: 'ビルトインプロンプト',
    firstPrompt: '最初のプロンプト',
    nextIteration: '次の反復',
    promptPlaceholder: 'ここにプロンプトを入力してください',
    tools: {
      name: 'ツール',
      description: 'ツールを使用すると、インターネットの検索や科学的計算など、LLMの機能を拡張できます',
      enabled: '有効',
    },
  },
}

export default translation
