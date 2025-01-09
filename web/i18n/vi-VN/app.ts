const translation = {
  createApp: 'TẠO ỨNG DỤNG',
  types: {
    all: 'Tất cả',
    chatbot: 'Chatbot',
    agent: 'Tác nhân',
    workflow: 'Quy trình',
    completion: 'Hoàn thành',
    advanced: 'Dòng trò chuyện',
    basic: 'Cơ bản',
  },
  duplicate: 'Sao chép',
  duplicateTitle: 'Sao chép ứng dụng',
  export: 'Xuất DSL',
  exportFailed: 'Xuất DSL thất bại.',
  importDSL: 'Nhập tệp DSL',
  createFromConfigFile: 'Tạo từ tệp DSL',
  deleteAppConfirmTitle: 'Xóa ứng dụng này?',
  deleteAppConfirmContent:
    'Việc xóa ứng dụng là không thể hoàn tác. Người dùng sẽ không thể truy cập vào ứng dụng của bạn nữa và tất cả cấu hình cũng như nhật ký nhắc sẽ bị xóa vĩnh viễn.',
  appDeleted: 'Ứng dụng đã bị xóa',
  appDeleteFailed: 'Không thể xóa ứng dụng',
  join: 'Tham gia cộng đồng',
  communityIntro:
    'Thảo luận với các thành viên nhóm, người đóng góp và nhà phát triển trên các kênh khác nhau.',
  roadmap: 'Xem lộ trình của chúng tôi',
  newApp: {
    startFromBlank: 'Tạo mới',
    startFromTemplate: 'Tạo từ mẫu',
    captionAppType: 'Bạn muốn tạo loại ứng dụng nào?',
    chatbotDescription: 'Xây dựng một ứng dụng trò chuyện. Ứng dụng này sử dụng định dạng hỏi đáp, cho phép nhiều vòng trò chuyện liên tục.',
    completionDescription: 'Xây dựng một ứng dụng tạo văn bản chất lượng cao dựa trên gợi ý, như tạo bài viết, tóm tắt, dịch thuật và nhiều hơn nữa.',
    completionWarning: 'Loại ứng dụng này sẽ không được hỗ trợ trong tương lai.',
    agentDescription: 'Xây dựng một tác nhân thông minh có thể tự động chọn công cụ để hoàn thành các nhiệm vụ',
    workflowDescription: 'Xây dựng một ứng dụng tạo văn bản chất lượng cao dựa trên quy trình làm việc với mức độ tùy chỉnh cao. Phù hợp cho người dùng có kinh nghiệm.',
    workflowWarning: 'Hiện đang trong phiên bản beta',
    chatbotType: 'Phương pháp quản lý Chatbot',
    basic: 'Cơ bản',
    basicTip: 'Dành cho người mới bắt đầu, có thể chuyển sang Chatflow sau này',
    basicFor: 'DÀNH CHO NGƯỜI MỚI BẮT ĐẦU',
    basicDescription: 'Quản lý cơ bản cho phép quản lý ứng dụng Chatbot bằng cách sử dụng các cài đặt đơn giản, không cần sửa đổi các lời nhắc tích hợp sẵn. Phù hợp cho người mới bắt đầu.',
    advanced: 'Chatflow',
    advancedFor: 'Dành cho người dùng có kinh nghiệm',
    advancedDescription: 'Quản lý Chatbot dưới dạng các quy trình làm việc, cung cấp mức độ tùy chỉnh cao, bao gồm khả năng chỉnh sửa các lời nhắc tích hợp sẵn. Phù hợp cho người dùng có kinh nghiệm.',
    captionName: 'Biểu tượng và tên ứng dụng',
    appNamePlaceholder: 'Đặt tên cho ứng dụng của bạn',
    captionDescription: 'Mô tả',
    appDescriptionPlaceholder: 'Nhập mô tả của ứng dụng',
    useTemplate: 'Sử dụng mẫu này',
    previewDemo: 'Xem trước demo',
    chatApp: 'Trợ lý',
    chatAppIntro:
      'Tôi muốn xây dựng một ứng dụng trò chuyện. Ứng dụng này sử dụng định dạng hỏi đáp, cho phép nhiều vòng trò chuyện liên tục.',
    agentAssistant: 'Trợ lý tác nhân mới',
    completeApp: 'Máy tạo văn bản',
    completeAppIntro:
      'Tôi muốn tạo một ứng dụng tạo văn bản chất lượng cao dựa trên gợi ý, như tạo bài viết, tóm tắt, dịch thuật và nhiều hơn nữa.',
    showTemplates: 'Tôi muốn chọn từ mẫu',
    hideTemplates: 'Quay lại chế độ lựa chọn',
    Create: 'Tạo',
    Cancel: 'Hủy',
    nameNotEmpty: 'Tên không được để trống',
    appTemplateNotSelected: 'Vui lòng chọn một mẫu',
    appTypeRequired: 'Vui lòng chọn loại ứng dụng',
    appCreated: 'Ứng dụng đã được tạo',
    appCreateFailed: 'Không thể tạo ứng dụng',
    Confirm: 'Xác nhận',
    caution: 'Thận trọng',
    appCreateDSLErrorPart1: 'Một sự khác biệt đáng kể trong các phiên bản DSL đã được phát hiện. Buộc nhập có thể khiến ứng dụng bị trục trặc.',
    appCreateDSLErrorPart2: 'Bạn có muốn tiếp tục không?',
    appCreateDSLErrorTitle: 'Phiên bản không tương thích',
    appCreateDSLErrorPart3: 'Phiên bản DSL ứng dụng hiện tại:',
    appCreateDSLWarning: 'Phạt cảnh cáo: Sự khác biệt về phiên bản DSL có thể ảnh hưởng đến một số tính năng nhất định',
    appCreateDSLErrorPart4: 'Phiên bản DSL được hệ thống hỗ trợ:',
    forBeginners: 'DÀNH CHO NGƯỜI MỚI BẮT ĐẦU',
    chooseAppType: 'Chọn loại ứng dụng',
    chatbotShortDescription: 'Chatbot dựa trên LLM với thiết lập đơn giản',
    noTemplateFoundTip: 'Hãy thử tìm kiếm bằng các từ khóa khác nhau.',
    workflowShortDescription: 'Điều phối cho các tác vụ tự động hóa một lượt',
    optional: 'Tùy chọn',
    advancedShortDescription: 'Quy trình làm việc cho các cuộc đối thoại nhiều lượt phức tạp với bộ nhớ',
    workflowUserDescription: 'Điều phối quy trình làm việc cho các tác vụ một vòng như tự động hóa và xử lý hàng loạt.',
    foundResults: '{{đếm}} Kết quả',
    chatbotUserDescription: 'Nhanh chóng xây dựng chatbot dựa trên LLM với cấu hình đơn giản. Bạn có thể chuyển sang Chatflow sau.',
    agentUserDescription: 'Một tác nhân thông minh có khả năng suy luận lặp đi lặp lại và sử dụng công cụ tự động để đạt được mục tiêu nhiệm vụ.',
    noIdeaTip: 'Không có ý tưởng? Kiểm tra các mẫu của chúng tôi',
    advancedUserDescription: 'Điều phối quy trình làm việc cho các tác vụ đối thoại phức tạp nhiều vòng với khả năng bộ nhớ.',
    forAdvanced: 'DÀNH CHO NGƯỜI DÙNG NÂNG CAO',
    foundResult: '{{đếm}} Kết quả',
    agentShortDescription: 'Tác nhân thông minh với lý luận và sử dụng công cụ tự động',
    noTemplateFound: 'Không tìm thấy mẫu',
    noAppsFound: 'Không tìm thấy ứng dụng nào',
    learnMore: 'Tìm hiểu thêm',
    completionShortDescription: 'Trợ lý AI cho các tác vụ tạo văn bản',
    completionUserDescription: 'Nhanh chóng xây dựng trợ lý AI cho các tác vụ tạo văn bản với cấu hình đơn giản.',
  },
  editApp: 'Chỉnh sửa thông tin',
  editAppTitle: 'Chỉnh sửa thông tin ứng dụng',
  editDone: 'Thông tin ứng dụng đã được cập nhật',
  editFailed: 'Không thể cập nhật thông tin ứng dụng',
  iconPicker: {
    ok: 'Đồng ý',
    cancel: 'Hủy',
    emoji: 'Biểu tượng cảm xúc',
    image: 'Hình ảnh',
  },
  switch: 'Chuyển sang quản lý quy trình',
  switchTipStart: 'Một bản sao ứng dụng mới sẽ được tạo và chuyển sang quản lý quy trình. Bản sao mới sẽ ',
  switchTip: 'không thể',
  switchTipEnd: ' chuyển lại quản lý cơ bản.',
  switchLabel: 'Bản sao ứng dụng sẽ được tạo',
  removeOriginal: 'Xóa ứng dụng gốc',
  switchStart: 'Bắt đầu chuyển',
  typeSelector: {
    all: 'Tất cả loại',
    chatbot: 'Chatbot',
    agent: 'Tác nhân',
    workflow: 'Quy trình',
    completion: 'Hoàn thành',
    advanced: 'Dòng trò chuyện',
  },
  tracing: {
    title: 'Theo dõi hiệu suất ứng dụng',
    description: 'Cấu hình nhà cung cấp LLMOps bên thứ ba và theo dõi hiệu suất ứng dụng.',
    config: 'Cấu hình',
    collapse: 'Thu gọn',
    expand: 'Mở rộng',
    tracing: 'Theo dõi',
    disabled: 'Đã tắt',
    disabledTip: 'Vui lòng cấu hình nhà cung cấp trước',
    enabled: 'Đang hoạt động',
    tracingDescription: 'Ghi lại toàn bộ ngữ cảnh thực thi ứng dụng, bao gồm các cuộc gọi LLM, ngữ cảnh, lời nhắc, yêu cầu HTTP và nhiều hơn nữa, đến một nền tảng theo dõi của bên thứ ba.',
    configProviderTitle: {
      configured: 'Đã cấu hình',
      notConfigured: 'Cấu hình nhà cung cấp để bật theo dõi',
      moreProvider: 'Thêm nhà cung cấp',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'Nền tảng phát triển tất cả trong một cho mọi bước của vòng đời ứng dụng được hỗ trợ bởi LLM.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Theo dõi, đánh giá, quản lý lời nhắc và số liệu để gỡ lỗi và cải thiện ứng dụng LLM của bạn.',
    },
    inUse: 'Đang sử dụng',
    configProvider: {
      title: 'Cấu hình ',
      placeholder: 'Nhập {{key}} của bạn',
      project: 'Dự án',
      publicKey: 'Khóa công khai',
      secretKey: 'Khóa bí mật',
      viewDocsLink: 'Xem tài liệu {{key}}',
      removeConfirmTitle: 'Xóa cấu hình {{key}}?',
      removeConfirmContent: 'Cấu hình hiện tại đang được sử dụng, việc xóa nó sẽ tắt tính năng Theo dõi.',
    },
    view: 'Cảnh',
  },
  answerIcon: {
    description: 'Có nên sử dụng biểu tượng WebApp để thay thế 🤖 trong ứng dụng được chia sẻ hay không',
    descriptionInExplore: 'Có nên sử dụng biểu tượng WebApp để thay thế 🤖 trong Khám phá hay không',
    title: 'Sử dụng biểu tượng WebApp để thay thế 🤖',
  },
  importFromDSLFile: 'Từ tệp DSL',
  importFromDSL: 'Nhập từ DSL',
  importFromDSLUrlPlaceholder: 'Dán liên kết DSL vào đây',
  importFromDSLUrl: 'Từ URL',
  mermaid: {
    handDrawn: 'Vẽ tay',
    classic: 'Cổ điển',
  },
  openInExplore: 'Mở trong Khám phá',
  newAppFromTemplate: {
    sidebar: {
      Recommended: 'Khuyến cáo',
      Assistant: 'Phó',
      Writing: 'Văn',
      Workflow: 'Quy trình làm việc',
      Agent: 'Người đại lý',
      Programming: 'Chương trình',
      HR: 'HR',
    },
    searchAllTemplate: 'Tìm kiếm tất cả các mẫu...',
    byCategories: 'THEO DANH MỤC',
  },
  showMyCreatedAppsOnly: 'Chỉ hiển thị ứng dụng do tôi tạo',
}

export default translation
