const translation = {
  createApp: 'アプリを作成する',
  types: {
    all: '全て',
    chatbot: 'チャットボット',
    agent: 'エージェント',
    workflow: 'ワークフロー',
    completion: 'テキスト生成',
    basic: '基本的な',
    advanced: 'チャットフロー',
  },
  duplicate: '複製',
  duplicateTitle: 'アプリを複製する',
  export: 'DSL をエクスポート',
  exportFailed: 'DSL のエクスポートに失敗しました。',
  importDSL: 'DSL ファイルをインポート',
  createFromConfigFile: 'DSL ファイルから作成する',
  importFromDSL: 'DSLからインポート',
  importFromDSLFile: 'DSLファイルから',
  importFromDSLUrl: 'URLから',
  importFromDSLUrlPlaceholder: 'DSLリンクをここに貼り付けます',
  deleteAppConfirmTitle: 'このアプリを削除しますか？',
  deleteAppConfirmContent:
    'アプリを削除すると、元に戻すことはできません。ユーザーはもはやあなた様のアプリにアクセスできず、すべてのプロンプトの設定とログが永久に削除されます。',
  appDeleted: 'アプリが削除されました',
  appDeleteFailed: 'アプリの削除に失敗しました',
  join: 'コミュニティに参加する',
  communityIntro:
    'さまざまなチャンネルでチームメンバーや貢献者、開発者と議論します。',
  roadmap: 'ロードマップを見る',
  newApp: {
    // this comment is to recreate PR
    startFromBlank: '最初から作成',
    startFromTemplate: 'テンプレートから作成',
    captionAppType: 'どのタイプのアプリを作成しますか？',
    chatbotDescription: 'チャット形式のアプリケーションを構築します。このアプリは質問と回答の形式を使用し、複数のラウンドの継続的な会話を可能にします。',
    completionDescription: 'プロンプトに基づいて高品質のテキストを生成するアプリケーションを構築します。記事、要約、翻訳などを生成します。',
    completionWarning: 'この種類のアプリはもうサポートされなくなります。',
    agentDescription: 'タスクを自動的に完了するためのツールを選択できるインテリジェント エージェントを構築します',
    workflowDescription: '高度なカスタマイズが可能なワークフローに基づいて高品質のテキストを生成するアプリケーションを構築します。経験豊富なユーザー向けです。',
    workflowWarning: '現在ベータ版です',
    chatbotType: 'チャットボットのオーケストレーション方法',
    basic: '基本',
    basicTip: '初心者向け。後で「チャットフロー」に切り替えることができます',
    basicFor: '初心者向け',
    basicDescription: '基本オーケストレートは、組み込みのプロンプトを変更する機能がなく、簡単な設定を使用してチャットボット アプリをオーケストレートします。初心者向けです。',
    advanced: 'チャットフロー',
    advancedFor: '上級ユーザー向け',
    advancedDescription: 'ワークフロー オーケストレートは、ワークフロー形式でチャットボットをオーケストレートし、組み込みのプロンプトを編集する機能を含む高度なカスタマイズを提供します。経験豊富なユーザー向けです。',
    captionName: 'アプリのアイコンと名前',
    appNamePlaceholder: 'アプリに名前を付ける',
    captionDescription: '説明',
    appDescriptionPlaceholder: 'アプリの説明を入力してください',
    useTemplate: 'このテンプレートを使用する',
    previewDemo: 'デモをプレビュー',
    chatApp: 'アシスタント',
    chatAppIntro:
      'チャット形式のアプリケーションを構築したい。このアプリは質問と回答の形式を使用し、複数のラウンドの継続的な会話を可能にします。',
    agentAssistant: '新しいエージェント アシスタント',
    completeApp: 'テキスト ジェネレーター',
    completeAppIntro:
      'プロンプトに基づいて高品質のテキストを生成するアプリケーションを作成したい。記事、要約、翻訳などを生成します。',
    showTemplates: 'テンプレートから選択したい',
    hideTemplates: 'モード選択に戻る',
    Create: '作成する',
    Cancel: 'キャンセル',
    nameNotEmpty: '名前を入力してください',
    appTemplateNotSelected: 'テンプレートを選択してください',
    appTypeRequired: 'アプリの種類を選択してください',
    appCreated: 'アプリが作成されました',
    appCreateFailed: 'アプリの作成に失敗しました',
    Confirm: '確認する',
    caution: '注意',
    appCreateDSLErrorPart2: '続行しますか?',
    appCreateDSLErrorPart4: 'システムがサポートするDSLバージョン:',
    appCreateDSLErrorPart3: '現在のアプリケーションの DSL バージョン:',
    appCreateDSLErrorTitle: 'バージョンの非互換性',
    appCreateDSLWarning: '注意:DSLのバージョンの違いは、特定の機能に影響を与える可能性があります',
    appCreateDSLErrorPart1: 'DSL バージョンに大きな違いが検出されました。インポートを強制すると、アプリケーションが誤動作する可能性があります。',
    optional: '随意',
    forBeginners: '初心者向け',
    noTemplateFoundTip: '別のキーワードを使用して検索してみてください。',
    agentShortDescription: '推論と自律的なツールの使用を備えたインテリジェントエージェント',
    foundResults: '{{カウント}}業績',
    noTemplateFound: 'テンプレートが見つかりません',
    noAppsFound: 'アプリが見つかりませんでした',
    workflowShortDescription: 'シングルターンの自動化タスクのオーケストレーション',
    completionShortDescription: 'テキスト生成タスクのためのAIアシスタント',
    advancedUserDescription: 'メモリ機能を備えたマルチラウンドの複雑な対話タスクのワークフローオーケストレーション。',
    advancedShortDescription: 'メモリを使用した複雑なマルチターン対話のワークフロー',
    agentUserDescription: 'タスクの目標を達成するために反復的な推論と自律的なツールを使用できるインテリジェントエージェント。',
    foundResult: '{{カウント}}結果',
    forAdvanced: '上級ユーザー向け',
    chooseAppType: 'アプリの種類を選択',
    learnMore: '詳細情報',
    noIdeaTip: 'アイデアがありませんか?テンプレートをご覧ください',
    chatbotShortDescription: '簡単なセットアップのLLMベースのチャットボット',
    chatbotUserDescription: '簡単な設定でLLMベースのチャットボットを迅速に構築します。Chatflowは後で切り替えることができます。',
    workflowUserDescription: '自動化やバッチ処理などの単一ラウンドのタスクのためのワークフローオーケストレーション。',
    completionUserDescription: '簡単な構成でテキスト生成タスク用のAIアシスタントをすばやく構築します。',
  },
  editApp: '情報を編集する',
  editAppTitle: 'アプリ情報を編集する',
  editDone: 'アプリ情報が更新されました',
  editFailed: 'アプリ情報の更新に失敗しました',
  iconPicker: {
    ok: 'OK',
    cancel: 'キャンセル',
    emoji: '絵文字',
    image: '画像',
  },
  switch: 'ワークフロー オーケストレートに切り替える',
  switchTipStart: '新しいアプリのコピーが作成され、新しいコピーがワークフロー オーケストレートに切り替わります。新しいコピーは ',
  switchTip: '切り替えを許可しません',
  switchTipEnd: ' 基本的なオーケストレートに戻ることはできません。',
  switchLabel: '作成されるアプリのコピー',
  removeOriginal: '元のアプリを削除する',
  switchStart: '切り替えを開始する',
  openInExplore: '"探索" で開く',
  typeSelector: {
    all: 'すべてのタイプ',
    chatbot: 'チャットボット',
    agent: 'エージェント',
    workflow: 'ワークフロー',
    completion: 'テキスト生成',
    advanced: 'チャットフロー',
  },
  tracing: {
    title: 'アプリのパフォーマンスの追跡',
    description: 'サードパーティのLLMOpsサービスとトレースアプリケーションのパフォーマンス設定を行います。',
    config: '設定',
    collapse: '折りたたむ',
    expand: '展開',
    tracing: '追跡',
    disabled: '無効しました',
    disabledTip: 'まずはサービスの設定から始めましょう。',
    enabled: '有効しました',
    tracingDescription: 'LLMの呼び出し、コンテキスト、プロンプト、HTTPリクエストなど、アプリケーション実行の全ての文脈をサードパーティのトレースプラットフォームで取り込みます。',
    configProviderTitle: {
      configured: '設定しました',
      notConfigured: 'トレース機能を有効化するためには、サービスの設定が必要です。',
      moreProvider: 'その他のプロバイダー',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'LLMを利用したアプリケーションのライフサイクル全段階を支援する、オールインワンの開発者向けプラットフォームです。',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'トレース、評価、プロンプトの管理、そしてメトリクスを駆使して、LLMアプリケーションのデバッグや改善に役立てます。',
    },
    inUse: '使用中',
    configProvider: {
      title: '配置 ',
      placeholder: 'あなた様の{{key}}を入力してください',
      project: 'プロジェクト',
      publicKey: '公開キー',
      secretKey: '秘密キー',
      viewDocsLink: '{{key}}のドキュメントを見る',
      removeConfirmTitle: '{{key}}の設定を削除しますか？',
      removeConfirmContent: '現在の設定は使用中です。これを削除すると、トレース機能が無効になります。',
    },
    view: '見る',
  },
  answerIcon: {
    title: 'Webアプリアイコンを使用して🤖を置き換える',
    description: '共有アプリケーションの中で Webアプリアイコンを使用して🤖を置き換えるかどうか',
    descriptionInExplore: 'ExploreでWebアプリアイコンを使用して🤖を置き換えるかどうか',
  },
  mermaid: {
    handDrawn: '手描き',
    classic: 'クラシック',
  },
  newAppFromTemplate: {
    sidebar: {
      Agent: 'エージェント',
      Programming: 'プログラミング',
      HR: '人事',
      Writing: 'ライティング',
      Recommended: '推奨',
      Workflow: 'ワークフロー',
      Assistant: '助手',
    },
    byCategories: 'カテゴリ別',
    searchAllTemplate: 'すべてのテンプレートを検索...',
  },
}

export default translation
