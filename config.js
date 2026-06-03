// عدل بيانات التواصل هنا فقط عند استبدال الرقم التجريبي بالرقم الحقيقي.
const officeRenovationAssets = "assets/projects/office-renovation";
const perfumeGiftsShopAssets = "assets/projects/perfume-gifts-shop";
const apartmentPaintDecorationAssets = "assets/projects/apartment-paint-decoration";
const projectPlaceholderAssets = "assets/projects";

window.EASTERN_FACADES_CONFIG = {
  phoneDisplay: "055 406 1861", // استبدلها بالرقم الظاهر للعميل.
  phoneTel: "+966554061861", // استبدلها بصيغة الاتصال الدولية مثل +9665XXXXXXXX.
  phoneCopy: "0554061861",
  whatsappNumber: "966554061861", // استبدلها برقم واتساب بدون علامة +.
  businessHours: "تحدد لاحقاً", // استبدلها بساعات العمل، مثل: السبت - الخميس، 9 صباحاً - 9 مساءً.
  whatsappMessage:
    "السلام عليكم، أرغب بالاستفسار عن خدمات الواجهات المشرقة للمقاولات والديكورات.",

  // أضف أو عدل المشاريع من هنا. ضع صور المشروع الحقيقية داخل assets/projects/office-renovation بنفس أسماء ملفات jpg.
  projects: [
    {
      id: 1,
      title: "ترميم مكتب إداري وقاعة اجتماعات",
      type: "ترميم وتجديد داخلي",
      category: "مشروع ترميم وتجديد داخلي",
      coverImage: `${officeRenovationAssets}/01-inspection.png`,
      image: `${officeRenovationAssets}/01-inspection.png`,
      fallbackImage: `${officeRenovationAssets}/01-inspection.svg`,
      detailsAvailable: true,
      description:
        "مشروع تطوير داخلي لمكتب إداري شمل إزالة التشطيبات القديمة، تنفيذ أسقف جبسية معلقة، معالجة الحوائط، وتحديث المكتب وقاعة الاجتماعات حتى مرحلة التسليم.",
      summary:
        "شمل المشروع تطوير مكتب إداري وقاعة اجتماعات من مرحلة المعاينة وإزالة التشطيبات القديمة، حتى تنفيذ الأسقف الجبسية المعلقة ومعالجة الحوائط وتجهيز المساحة للتسليم النهائي.",
      facts: [
        { label: "الموقع", value: "مكة المكرمة" },
        { label: "المساحة", value: "220 م²" },
        { label: "مدة التنفيذ", value: "18 يوم" },
      ],
      finalImages: [
        {
          label: "final image 1",
          image: `${officeRenovationAssets}/final-01.png`,
        },
        {
          label: "final image 2",
          image: `${officeRenovationAssets}/final-02.png`,
        },
        {
          label: "final image 3",
          image: `${officeRenovationAssets}/final-03.png`,
        },
      ],
      stages: [
        {
          label: "المعاينة الأولية",
          image: `${officeRenovationAssets}/01-inspection.png`,
          fallbackImage: `${officeRenovationAssets}/01-inspection.svg`,
          description:
            "تمت معاينة المكتب وقاعة الاجتماعات قبل بدء الأعمال، مع ملاحظة الحاجة إلى تحديث السقف والإضاءة ومعالجة الجدران.",
        },
        {
          label: "إزالة التشطيبات القديمة",
          image: `${officeRenovationAssets}/02-demolition.png`,
          fallbackImage: `${officeRenovationAssets}/02-demolition.svg`,
          description:
            "بدأت أعمال إزالة السقف المستعار القديم وتجهيز الموقع، مع تجميع المخلفات ورفع العناصر غير المطلوبة.",
        },
        {
          label: "أعمال المعالجة والتأسيس",
          image: `${officeRenovationAssets}/03-preparation.png`,
          fallbackImage: `${officeRenovationAssets}/03-preparation.svg`,
          description:
            "تم تجهيز الأسطح ومعالجة الحوائط، مع بدء تنظيم الأعمال التأسيسية اللازمة قبل التشطيب.",
        },
        {
          label: "تجهيز الأسقف والحوائط قبل الدهان",
          image: `${officeRenovationAssets}/04-finishing.png`,
          fallbackImage: `${officeRenovationAssets}/04-ceiling-wall-prep.svg`,
          description:
            "تم الانتهاء من تركيب الأسقف الجبسية المستعارة وتجهيز الحوائط، مع ظهور آثار المعجون استعدادًا لأعمال الدهان.",
        },
        {
          label: "مرحلة ما قبل التسليم",
          image: `${officeRenovationAssets}/05-pre-handover.png`,
          fallbackImage: `${officeRenovationAssets}/05-pre-handover.svg`,
          description:
            "وصلت الأعمال إلى المراحل الأخيرة، مع اكتمال أغلب التشطيبات وبقاء اللمسات النهائية قبل التسليم.",
        },
        {
          label: "النتيجة النهائية — قاعة الاجتماعات",
          image: `${officeRenovationAssets}/06-meeting-room-final.jpg`,
          fallbackImage: `${officeRenovationAssets}/06-meeting-room-final.svg`,
          description:
            "ظهرت قاعة الاجتماعات بشكل حديث ومنظم، مع إضاءة محسنة وسقف جبسي وتشطيب يناسب بيئة العمل.",
        },
        {
          label: "النتيجة النهائية — المكتب والاستقبال",
          image: `${officeRenovationAssets}/07-office-reception-final.jpg`,
          fallbackImage: `${officeRenovationAssets}/07-office-reception-final.svg`,
          description:
            "اكتمل المكتب ومنطقة الاستقبال بطابع عملي وأنيق يعكس بيئة إدارية مرتبة ومريحة.",
        },
      ],
    },
    {
      id: 2,
      title: "تشطيب وتجهيز محل عطور وهدايا",
      type: "تشطيب محل تجاري جديد",
      category: "مشروع تشطيب محل تجاري جديد",
      coverImage: `${perfumeGiftsShopAssets}/01-inspection.png`,
      image: `${perfumeGiftsShopAssets}/01-inspection.png`,
      detailsAvailable: true,
      useProjectStageContent: true,
      description:
        "مشروع تشطيب وتجهيز محل عطور وهدايا شمل تنفيذ الأسقف الجبسية، الإضاءة، الدهانات، الأرضيات، الكاونتر، وأرفف العرض حتى مرحلة التسليم النهائي.",
      summary:
        "شمل المشروع تشطيب وتجهيز محل عطور وهدايا من مرحلة المعاينة الأولية للمحل العظم، حتى تنفيذ الأسقف الجبسية، الإضاءة، الدهانات، الأرضيات، الكاونتر، وأرفف العرض وتجهيز المساحة للتسليم النهائي.",
      facts: [
        { label: "الموقع", value: "جدة" },
        { label: "المساحة", value: "34 م²" },
        { label: "مدة التنفيذ", value: "8 أيام" },
      ],
      finalImages: [
        {
          label: "الصورة النهائية",
          image: `${perfumeGiftsShopAssets}/05-final-result.png`,
        },
      ],
      stages: [
        {
          label: "المعاينة الأولية",
          image: `${perfumeGiftsShopAssets}/01-inspection.png`,
          description:
            "تمت معاينة المحل قبل بدء الأعمال، وكان الموقع عبارة عن مساحة تجارية جديدة عظم.",
        },
        {
          label: "أعمال التأسيس والتجهيز",
          image: `${perfumeGiftsShopAssets}/02-fitout-preparation.png`,
          description:
            "بدأت أعمال التأسيس وتجهيز تمديدات الكهرباء والإنارة، مع مراعاة مسارات التكييف.",
        },
        {
          label: "أعمال التشطيبات",
          image: `${perfumeGiftsShopAssets}/03-finishing-works.png`,
          description:
            "تم تنفيذ أعمال الأسقف الجبسية والدهانات والأرضيات وتجهيز عناصر العرض الرئيسية.",
        },
        {
          label: "مرحلة ما قبل التسليم",
          image: `${perfumeGiftsShopAssets}/04-pre-handover.png`,
          description:
            "وصل المشروع إلى مراحله الأخيرة بعد اكتمال معظم أعمال التشطيب والتجهيز.",
        },
      ],
    },
    {
      id: 3,
      title: "دهانات وديكورات شقة سكنية",
      type: "دهانات وديكورات داخلية",
      category: "مشروع دهانات وديكورات شقة سكنية",
      coverImage: `${apartmentPaintDecorationAssets}/01-inspection.png`,
      image: `${apartmentPaintDecorationAssets}/01-inspection.png`,
      detailsAvailable: true,
      useProjectStageContent: true,
      description:
        "مشروع تطوير داخلي لشقة سكنية شمل تجهيز الأسطح، تنفيذ الدهانات، تحسين ديكورات الحوائط، وتجهيز المساحة حتى مرحلة التسليم.",
      summary:
        "شمل المشروع تطوير شقة سكنية في مكة بمساحة 180 م²، من مرحلة المعاينة الأولية، مرورًا بتجهيز الأسطح وأعمال الدهانات والديكورات، حتى الوصول إلى مساحة أكثر هدوءًا وتنظيمًا وجاهزة للتسليم خلال 10 أيام.",
      facts: [
        { label: "الموقع", value: "مكة المكرمة" },
        { label: "المساحة", value: "180 م²" },
        { label: "مدة التنفيذ", value: "10 أيام" },
      ],
      finalImages: [
        {
          label: "الصورة النهائية 1",
          image: `${apartmentPaintDecorationAssets}/05-final-result-01.png`,
        },
        {
          label: "الصورة النهائية 2",
          image: `${apartmentPaintDecorationAssets}/06-final-result-02.png`,
        },
      ],
      stages: [
        {
          label: "المعاينة الأولية",
          image: `${apartmentPaintDecorationAssets}/01-inspection.png`,
          description:
            "تمت معاينة الشقة وتحديد أعمال الدهانات وديكورات الحوائط المطلوبة.",
        },
        {
          label: "التجهيز والتأسيس",
          image: `${apartmentPaintDecorationAssets}/02-preparation.png`,
          description:
            "تمت حماية الأرضيات وتجهيز الحوائط والأسطح قبل بدء التشطيب.",
        },
        {
          label: "أعمال التشطيب",
          image: `${apartmentPaintDecorationAssets}/03-finishing-works.png`,
          description:
            "تم تنفيذ الدهانات والديكورات ومعالجة التفاصيل النهائية للحوائط.",
        },
        {
          label: "مرحلة ما قبل التسليم",
          image: `${apartmentPaintDecorationAssets}/04-pre-handover.png`,
          description:
            "تمت مراجعة الأعمال وإنهاء اللمسات الأخيرة قبل التسليم.",
        },
      ],
    },
  ],
};
