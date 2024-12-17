const translation = {
  title: 'ツール',
  createCustomTool: 'カスタムツールを作成する',
  customToolTip: 'Difyカスタムツールの詳細',
  type: {
    all: 'すべて',
    builtIn: '組み込み',
    custom: 'カスタム',
    workflow: 'ワークフロー',
  },
  contribute: {
    line1: '私は',
    line2: 'Difyへのツールの貢献に興味があります。',
    viewGuide: 'ガイドを見る',
  },
  author: '著者',
  auth: {
    unauthorized: '認証する',
    authorized: '認証済み',
    setup: '使用するための認証を設定する',
    setupModalTitle: '認証の設定',
    setupModalTitleDescription: '資格情報を構成した後、ワークスペース内のすべてのメンバーがアプリケーションのオーケストレーション時にこのツールを使用できます。',
  },
  includeToolNum: '{{num}}個のツールが含まれています',
  addTool: 'ツールを追加する',
  addToolModal: {
    type: 'タイプ',
    category: 'カテゴリー',
    add: '追加',
    added: '追加済',
    manageInTools: 'ツールリストに移動して管理する',
    emptyTitle: '利用可能なワークフローツールはありません',
    emptyTip: '追加するには、「ワークフロー -> ツールとして公開 」に移動する',
  },
  createTool: {
    title: 'カスタムツールを作成する',
    editAction: '設定',
    editTitle: 'カスタムツールを編集する',
    name: '名前',
    toolNamePlaceHolder: 'ツール名を入力してください',
    nameForToolCall: 'ツールコールの名前',
    nameForToolCallPlaceHolder: '機械認識に使用される名前, 例えば、getCurrentWeather、list_pets',
    nameForToolCallTip: '数字、文字、アンダースコアのみがサポートされます。',
    description: 'ツールの説明',
    descriptionPlaceholder: 'ツールの使い方の簡単な説明。例えば、特定の場所の温度を知るためなど。',
    schema: 'スキーマ',
    schemaPlaceHolder: 'ここにOpenAPIスキーマを入力してください',
    viewSchemaSpec: 'OpenAPI-Swagger仕様を表示する',
    importFromUrl: 'URLからインポートする',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '有効なURLを入力してください',
    examples: '例',
    exampleOptions: {
      json: '天気(JSON)',
      yaml: 'ペットストア(YAML)',
      blankTemplate: '空白テンプレート',
    },
    availableTools: {
      title: '利用可能なツール',
      name: '名前',
      description: '説明',
      method: 'メソッド',
      path: 'パス',
      action: 'アクション',
      test: 'テスト',
    },
    authMethod: {
      title: '認証方法',
      type: '認証タイプ',
      keyTooltip: 'HTTPヘッダーキー。アイデアがない場合は "Authorization" として残しておいてもかまいません。またはカスタム値に設定できます。',
      types: {
        none: 'なし',
        api_key: 'APIキー',
        apiKeyPlaceholder: 'APIキーのHTTPヘッダー名',
        apiValuePlaceholder: 'APIキーを入力してください',
      },
      key: 'キー',
      value: '値',
    },
    authHeaderPrefix: {
      title: '認証タイプ',
      types: {
        basic: 'ベーシック',
        bearer: 'ベアラー',
        custom: 'カスタム',
      },
    },
    privacyPolicy: 'プライバシーポリシー',
    privacyPolicyPlaceholder: 'プライバシーポリシーを入力してください',
    toolInput: {
      title: 'ツール入力',
      name: '名前',
      required: '必須',
      method: 'メソッド',
      methodSetting: '設定',
      methodSettingTip: 'ユーザーがツール設定を入力する',
      methodParameter: 'LLM入力',
      methodParameterTip: 'LLM は推論中に入力されます',
      label: 'ラベル',
      labelPlaceholder: 'ラベルを選択します(オプション)',
      description: '説明',
      descriptionPlaceholder: 'パラメータの意味の説明',
    },
    customDisclaimer: 'カスタム免責事項',
    customDisclaimerPlaceholder: 'カスタム免責事項を入力してください',
    confirmTitle: '保存しますか？',
    confirmTip: '新しバージョン保存すると、このツールを使用されているアプリは影響を受けます',
    deleteToolConfirmTitle: 'このツールを削除しますか？',
    deleteToolConfirmContent: 'ツールの削除は取り消しできません。ユーザーはもうあなた様のツールにアクセスできません。',
  },
  test: {
    title: 'テスト',
    parametersValue: 'パラメーター＆値',
    parameters: 'パラメーター',
    value: '値',
    testResult: 'テスト結果',
    testResultPlaceholder: 'ここにテスト結果が表示されます',
  },
  thought: {
    using: '使用中',
    used: '使用済み',
    requestTitle: 'リクエスト先',
    responseTitle: 'レスポンス先',
  },
  setBuiltInTools: {
    info: '情報',
    setting: '設定',
    toolDescription: 'ツールの説明',
    parameters: 'パラメーター',
    string: '文字列',
    number: '数',
    required: '必須',
    infoAndSetting: '情報と設定',
  },
  noCustomTool: {
    title: 'カスタムツールがありません！',
    content: 'AIアプリを構築するためのカスタムツールをここで追加および管理します。',
    createTool: 'ツールを作成する',
  },
  noSearchRes: {
    title: '申し訳ありません、結果がありません！',
    content: '検索に一致するツールが見つかりませんでした。',
    reset: '検索をリセット',
  },
  builtInPromptTitle: 'プロンプト',
  toolRemoved: 'ツールが削除されました',
  notAuthorized: 'ツールが認可されていません',
  howToGet: '取得方法',
  openInStudio: 'スタジオで開く',
  toolNameUsageTip: 'ツール呼び出し名、エージェントの推論とプロンプトの単語に使用されます',
}

export default translation
