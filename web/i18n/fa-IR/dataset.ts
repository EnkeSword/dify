const translation = {
  knowledge: 'دانش',
  documentCount: ' سند',
  wordCount: ' هزار کلمه',
  appCount: ' برنامه‌های متصل',
  createDataset: 'ایجاد دانش',
  createDatasetIntro: 'داده‌های متنی خود را وارد کنید یا از طریق Webhook در زمان واقعی برای بهبود زمینه LLM بنویسید.',
  deleteDatasetConfirmTitle: 'حذف این دانش؟',
  deleteDatasetConfirmContent:
    'حذف دانش غیر قابل برگشت است. کاربران دیگر نمی‌توانند به دانش شما دسترسی پیدا کنند و تمام تنظیمات درخواست و گزارش‌ها به طور دائم حذف خواهند شد.',
  datasetUsedByApp: 'دانش توسط برخی برنامه‌ها استفاده می‌شود. برنامه‌ها دیگر نمی‌توانند از این دانش استفاده کنند و تمام تنظیمات درخواست و گزارش‌ها به طور دائم حذف خواهند شد.',
  datasetDeleted: 'دانش حذف شد',
  datasetDeleteFailed: 'حذف دانش ناموفق بود',
  didYouKnow: 'آیا می‌دانستید؟',
  intro1: 'دانش می‌تواند در برنامه Dify ',
  intro2: 'به عنوان یک زمینه',
  intro3: 'ادغام شود',
  intro4: 'یا می‌تواند ',
  intro5: 'به عنوان یک افزونه مستقل ChatGPT برای انتشار',
  intro6: 'ایجاد شود',
  unavailable: 'در دسترس نیست',
  unavailableTip: 'مدل جاسازی در دسترس نیست، نیاز است مدل جاسازی پیش‌فرض پیکربندی شود',
  datasets: 'دانش',
  datasetsApi: 'دسترسی API',
  retrieval: {
    semantic_search: {
      title: 'جستجوی برداری',
      description: 'تولید جاسازی‌های جستجو و جستجوی بخش متنی که بیشترین شباهت را به نمایش برداری آن دارد.',
    },
    full_text_search: {
      title: 'جستجوی متن کامل',
      description: 'فهرست کردن تمام اصطلاحات در سند، به کاربران اجازه می‌دهد هر اصطلاحی را جستجو کنند و بخش متنی مربوط به آن اصطلاحات را بازیابی کنند.',
    },
    hybrid_search: {
      title: 'جستجوی هیبریدی',
      description: 'جستجوی متن کامل و برداری را همزمان اجرا می‌کند، دوباره رتبه‌بندی می‌کند تا بهترین تطابق برای درخواست کاربر انتخاب شود. کاربران می‌توانند وزن‌ها را تنظیم کنند یا به یک مدل دوباره رتبه‌بندی تنظیم کنند.',
      recommend: 'توصیه',
    },
    invertedIndex: {
      title: 'فهرست معکوس',
      description: 'فهرست معکوس یک ساختار برای بازیابی کارآمد است. توسط اصطلاحات سازماندهی شده، هر اصطلاح به اسناد یا صفحات وب حاوی آن اشاره می‌کند.',
    },
    change: 'تغییر',
    changeRetrievalMethod: 'تغییر روش بازیابی',
  },
  docsFailedNotice: 'اسناد نتوانستند فهرست‌بندی شوند',
  retry: 'تلاش مجدد',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'برداری',
    full_text_search: 'متن کامل',
    hybrid_search: 'هیبریدی',
    invertedIndex: 'معکوس',
  },
  mixtureHighQualityAndEconomicTip: 'مدل دوباره رتبه‌بندی برای ترکیب پایگاه‌های دانش با کیفیت بالا و اقتصادی لازم است.',
  inconsistentEmbeddingModelTip: 'مدل دوباره رتبه‌بندی لازم است اگر مدل‌های جاسازی پایگاه‌های دانش انتخابی ناسازگار باشند.',
  retrievalSettings: 'تنظیمات بازیابی',
  rerankSettings: 'تنظیمات دوباره رتبه‌بندی',
  weightedScore: {
    title: 'امتیاز وزنی',
    description: 'با تنظیم وزن‌های اختصاص داده شده، این استراتژی دوباره رتبه‌بندی تعیین می‌کند که آیا اولویت با تطابق معنایی یا کلمات کلیدی است.',
    semanticFirst: 'اولویت معنایی',
    keywordFirst: 'اولویت کلمه کلیدی',
    customized: 'سفارشی‌سازی شده',
    semantic: 'معنایی',
    keyword: 'کلمه کلیدی',
  },
  nTo1RetrievalLegacy: 'بازیابی N-to-1 از سپتامبر به طور رسمی منسوخ خواهد شد. توصیه می‌شود از بازیابی چند مسیر جدید استفاده کنید تا نتایج بهتری بدست آورید.',
  nTo1RetrievalLegacyLink: 'بیشتر بدانید',
  nTo1RetrievalLegacyLinkText: ' بازیابی N-to-1 از سپتامبر به طور رسمی منسوخ خواهد شد.',
  defaultRetrievalTip: 'بازیابی چند مسیره به طور پیش فرض استفاده می شود. دانش از چندین پایگاه دانش بازیابی می شود و سپس دوباره رتبه بندی می شود.',
  editExternalAPIConfirmWarningContent: {
    front: 'این API دانش خارجی به',
    end: 'دانش خارجی ، و این اصلاح برای همه آنها اعمال خواهد شد. آیا مطمئن هستید که می خواهید این تغییر را ذخیره کنید؟',
  },
  editExternalAPIFormWarning: {
    front: 'این API خارجی به',
    end: 'دانش بیرونی',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'حذف',
      end: '?',
    },
    content: {
      front: 'این API دانش خارجی به',
      end: 'دانش بیرونی. حذف این API همه آنها را باطل می کند. آیا مطمئن هستید که می خواهید این API را حذف کنید؟',
    },
    noConnectionContent: 'آیا مطمئن هستید که این API را حذف خواهید کرد؟',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'یک API دانش خارجی را انتخاب کنید',
  },
  connectDatasetIntro: {
    content: {
      link: 'یادگیری نحوه ایجاد یک API خارجی',
      front: 'برای اتصال به یک پایگاه دانش خارجی، ابتدا باید یک API خارجی ایجاد کنید. لطفا با دقت بخوانید و به',
      end: '. سپس شناسه دانش مربوطه را پیدا کرده و آن را در فرم سمت چپ پر کنید. اگر تمام اطلاعات صحیح باشد، پس از کلیک بر روی دکمه اتصال، به طور خودکار به آزمون بازیابی در پایگاه دانش می رود.',
    },
    learnMore: 'بیشتر بدانید',
    title: 'چگونه به یک پایگاه دانش خارجی متصل شویم؟',
  },
  connectHelper: {
    helper5: 'قبل از استفاده از این ویژگی با دقت',
    helper3: '. اکیدا توصیه می کنیم که',
    helper2: 'فقط قابلیت بازیابی پشتیبانی می شود',
    helper4: 'مستندات راهنما را بخوانید',
    helper1: 'از طریق API و شناسه پایگاه دانش به پایگاه های دانش خارجی متصل شوید. در حال حاضر،',
  },
  externalKnowledgeForm: {
    cancel: 'لغو',
    connect: 'اتصال',
  },
  externalAPIForm: {
    encrypted: {
      front: 'توکن API شما رمزگذاری و با استفاده از',
      end: 'فناوری.',
    },
    apiKey: 'کلید API',
    edit: 'ویرایش',
    save: 'ذخیره',
    cancel: 'لغو',
    endpoint: 'نقطه پایانی API',
    name: 'نام',
  },
  editExternalAPITooltipTitle: 'دانش مرتبط',
  externalKnowledgeNamePlaceholder: 'لطفا نام پایگاه دانش را وارد کنید',
  externalAPIPanelDocumentation: 'یادگیری نحوه ایجاد یک API دانش خارجی',
  externalKnowledgeDescriptionPlaceholder: 'آنچه در این پایگاه دانش وجود دارد را توضیح دهید (اختیاری)',
  externalKnowledgeDescription: 'توضیحات دانش',
  externalTag: 'خارجی',
  externalKnowledgeIdPlaceholder: 'لطفا شناسه دانش را وارد کنید',
  noExternalKnowledge: 'هنوز هیچ API دانش خارجی وجود ندارد، برای ایجاد اینجا را کلیک کنید',
  externalAPIPanelTitle: 'API دانش خارجی',
  connectDataset: 'اتصال به یک پایگاه دانش خارجی',
  externalKnowledgeId: 'شناسه دانش خارجی',
  externalAPI: 'API خارجی',
  externalKnowledgeName: 'نام دانش خارجی',
  createExternalAPI: 'افزودن یک API دانش خارجی',
  createNewExternalAPI: 'ایجاد یک API دانش خارجی جدید',
  learnHowToWriteGoodKnowledgeDescription: 'یاد بگیرید که چگونه یک توضیحات دانش خوب بنویسید.',
  editExternalAPIFormTitle: 'ویرایش API دانش خارجی',
  externalAPIPanelDescription: 'API دانش خارجی برای اتصال به یک پایگاه دانش خارج از Dify و بازیابی دانش از آن پایگاه دانش استفاده می شود.',
  allExternalTip: 'هنگامی که فقط از دانش خارجی استفاده می کنید، کاربر می تواند انتخاب کند که آیا مدل Rerank را فعال کند یا خیر. اگر فعال نباشد، تکه های بازیابی شده بر اساس امتیازات مرتب می شوند. هنگامی که استراتژی های بازیابی پایگاه های دانش مختلف متناقض باشد، نادرست خواهد بود.',
  mixtureInternalAndExternalTip: 'مدل Rerank برای آمیختگی دانش درونی و بیرونی مورد نیاز است.',
  chunkingMode: {
    parentChild: 'پدر و مادر و فرزند',
    general: 'عمومی',
  },
  parentMode: {
    fullDoc: 'مستند کامل',
    paragraph: 'پاراگراف',
  },
  batchAction: {
    disable: 'غیر فعال کردن',
    cancel: 'لغو',
    selected: 'انتخاب',
    enable: 'فعال',
    delete: 'حذف',
    archive: 'بایگانی',
  },
  enable: 'فعال',
  documentsDisabled: '{{num}} اسناد غیرفعال - غیرفعال برای بیش از 30 روز',
  preprocessDocument: '{{عدد}} اسناد پیش پردازش',
  localDocs: 'اسناد محلی',
}

export default translation
