// Everything a new client changes lives in CLINIC. Swap it to make a mockup.
// The page title, description and share tags are generated from this file too.
//
// MOCKUP FOR A REAL CLINIC: set mode to 'mockup', then use only facts the clinic
// has published (name, address, hours, services, its real Google rating).
// Leave stats, chips and reviews as empty arrays [] unless they are real:
// each of those sections hides itself when its list is empty.

export const CLINIC = {
  // 'demo'   = fictional clinic, footer says so.
  // 'mockup' = prepared for a real clinic, footer says it is not their official site.
  mode: 'demo',

  defaultLang: 'en', // 'en' or 'ar'. Visitors can switch; ?lang=ar opens Arabic directly.

  // Live address, no trailing slash, e.g. 'https://demo.example.com'.
  // Leave empty until the site is deployed: share tags that need it are skipped.
  siteUrl: '',

  phone: '+20 100 000 0000',
  whatsapp: '201000000000', // digits only, country code first
  mapQuery: 'North 90th Street, Fifth Settlement, New Cairo',

  // Optional hero photo. Put the file in /public and write its path, e.g. '/clinic.jpg'.
  // Empty = the illustrated tooth.
  photo: '/clinic.jpg',

  credit: { name: 'Mostafa Habib', url: 'https://mostafahabib.space/' },

  en: {
    name: 'Lamsa Dental Studio',
    area: 'New Cairo',
    metaTitle: 'Lamsa Dental Studio | Dentist in New Cairo, Fifth Settlement',
    metaDescription:
      'Gentle, modern dentistry in New Cairo. Cleaning, whitening, implants, braces and same-day emergency care. Book on WhatsApp in under a minute.',
    address: 'Building 14, North 90th Street, Fifth Settlement, New Cairo',
    hours: [
      ['Saturday to Thursday', '10:00 am to 10:00 pm'],
      ['Friday', '2:00 pm to 10:00 pm'],
      ['Emergencies', 'Same day, call first'],
    ],
    hero: {
      eyebrow: 'Dentist in New Cairo · Fifth Settlement',
      title: 'Dentistry that feels calm, clear and on time.',
      lead: 'Modern care for the whole family, ten minutes from anywhere in New Cairo. See the plan and the price before we start.',
      hint: 'Open until 10 pm · Replies on WhatsApp within minutes',
    },
    chips: [
      ['4.9 ★', 'from 600+ reviews'],
      ['Today', 'emergency slots open'],
    ],
    stats: [
      ['12+', 'years in practice'],
      ['8,000+', 'patients treated'],
      ['4.9', 'average patient rating'],
      ['Same day', 'emergency visits'],
    ],
    servicesTitle: 'Everything your smile needs, in one clinic.',
    services: [
      ['Check-up and cleaning', 'A full exam, scaling and polish. You leave knowing exactly what your teeth need and what they do not.'],
      ['Teeth whitening', 'In-clinic whitening in about an hour, with a take-home kit to keep the shade.'],
      ['Dental implants', 'Fixed, natural-looking replacements for missing teeth, planned with 3D imaging.'],
      ['Braces and clear aligners', 'Straighter teeth for teens and adults, with a clear timeline before you start.'],
      ['Veneers and smile design', 'See a preview of your new smile before any work begins.'],
      ['Kids dentistry', 'Slow, patient first visits that help children feel safe in the chair.'],
    ],
    whyTitle: 'Care you understand, from a team that listens.',
    whyLead: 'Led by Dr. Laila Mansour, BDS, MSc in restorative dentistry, with a team of five specialists under one roof.',
    reasons: [
      ['Clear prices before treatment', 'You get a written plan and cost first. No surprises at the desk.'],
      ['Gentle by default', 'Numbing gel, slow injections and breaks whenever you raise a hand.'],
      ['Strict sterilisation', 'Every instrument is sealed and opened in front of you.'],
      ['On time', 'Appointments start when we say they do. Evening slots every day.'],
    ],
    reviewsTitle: 'What patients say after their visit.',
    reviews: [
      ['I avoided dentists for years. Here they explained every step and I felt nothing during the filling.', 'Mariam H.', 'Root canal'],
      ['Booked on WhatsApp at night, got a slot the next morning. The clinic is spotless and they ran on time.', 'Omar S.', 'Cleaning and whitening'],
      ['My daughter asked when she can go back. That says everything.', 'Dina A.', 'Kids check-up'],
    ],
    visitTitle: 'Easy to reach, easy to park.',
  },

  ar: {
    name: 'لمسة لطب الأسنان',
    area: 'القاهرة الجديدة',
    metaTitle: 'لمسة لطب الأسنان | عيادة أسنان في التجمع الخامس، القاهرة الجديدة',
    metaDescription:
      'طب أسنان حديث ولطيف في القاهرة الجديدة. تنظيف وتبييض وزراعة وتقويم وحالات طوارئ في نفس اليوم. احجز على واتساب في أقل من دقيقة.',
    address: 'مبنى 14، شارع التسعين الشمالي، التجمع الخامس، القاهرة الجديدة',
    hours: [
      ['من السبت إلى الخميس', '10:00 ص إلى 10:00 م'],
      ['الجمعة', '2:00 م إلى 10:00 م'],
      ['الطوارئ', 'في نفس اليوم، اتصل أولًا'],
    ],
    hero: {
      eyebrow: 'عيادة أسنان في القاهرة الجديدة · التجمع الخامس',
      title: 'علاج أسنان هادئ وواضح وفي موعده.',
      lead: 'رعاية حديثة لكل أفراد الأسرة، على بُعد عشر دقائق من أي مكان في القاهرة الجديدة. تعرف الخطة والسعر قبل أن نبدأ.',
      hint: 'مفتوح حتى 10 مساءً · نرد على واتساب خلال دقائق',
    },
    chips: [
      ['4.9 ★', 'من أكثر من 600 تقييم'],
      ['اليوم', 'مواعيد طوارئ متاحة'],
    ],
    stats: [
      ['+12', 'سنة خبرة'],
      ['+8,000', 'مريض تم علاجهم'],
      ['4.9', 'متوسط تقييم المرضى'],
      ['نفس اليوم', 'لحالات الطوارئ'],
    ],
    servicesTitle: 'كل ما تحتاجه ابتسامتك في عيادة واحدة.',
    services: [
      ['الكشف والتنظيف', 'فحص شامل وإزالة الجير وتلميع. تخرج وأنت تعرف بالضبط ما تحتاجه أسنانك وما لا تحتاجه.'],
      ['تبييض الأسنان', 'تبييض داخل العيادة في نحو ساعة، مع أدوات منزلية للحفاظ على الدرجة.'],
      ['زراعة الأسنان', 'بدائل ثابتة بمظهر طبيعي للأسنان المفقودة، بتخطيط ثلاثي الأبعاد.'],
      ['التقويم والتقويم الشفاف', 'أسنان أكثر استقامة للمراهقين والبالغين، بجدول زمني واضح قبل البدء.'],
      ['الفينير وتصميم الابتسامة', 'شاهد شكل ابتسامتك الجديدة قبل بدء أي إجراء.'],
      ['أسنان الأطفال', 'زيارات أولى هادئة وصبورة تساعد الطفل على الشعور بالأمان على الكرسي.'],
    ],
    whyTitle: 'علاج تفهمه، من فريق يستمع إليك.',
    whyLead: 'بقيادة د. ليلى منصور، بكالوريوس طب الأسنان وماجستير في العلاج التحفظي، مع فريق من خمسة أخصائيين في مكان واحد.',
    reasons: [
      ['أسعار واضحة قبل العلاج', 'تحصل أولًا على خطة مكتوبة وتكلفة محددة. لا مفاجآت عند الدفع.'],
      ['اللطف هو الأساس', 'جل مخدّر وحقن بطيء، ونتوقف في أي لحظة ترفع فيها يدك.'],
      ['تعقيم صارم', 'كل أداة مغلّفة وتُفتح أمامك.'],
      ['في الموعد', 'الجلسات تبدأ في وقتها. مواعيد مسائية كل يوم.'],
    ],
    reviewsTitle: 'ماذا يقول المرضى بعد زيارتهم.',
    reviews: [
      ['تجنبت أطباء الأسنان لسنوات. هنا شرحوا لي كل خطوة ولم أشعر بشيء أثناء الحشو.', 'مريم ح.', 'علاج عصب'],
      ['حجزت على واتساب ليلًا وحصلت على موعد في الصباح التالي. العيادة نظيفة جدًا والتزموا بالوقت.', 'عمر س.', 'تنظيف وتبييض'],
      ['ابنتي سألتني متى سنعود مرة أخرى. هذا يكفي.', 'دينا ع.', 'كشف أطفال'],
    ],
    visitTitle: 'سهل الوصول وسهل الركن.',
  },
}

// Fixed interface wording. This stays the same from clinic to clinic.
export const UI = {
  en: {
    dir: 'ltr',
    switchTo: 'ar',
    switchLabel: 'العربية',
    nav: ['Services', 'Why us', 'Reviews', 'Visit'],
    navLabel: 'Main',
    bookCta: 'Book a visit',
    call: 'Call',
    statsLabel: 'Clinic in numbers',
    servicesEyebrow: 'Services',
    whyEyebrow: 'Why patients stay',
    reviewsEyebrow: 'Reviews',
    starsLabel: '5 out of 5 stars',
    bookEyebrow: 'Book a visit',
    bookTitle: 'Pick a day. We confirm on WhatsApp.',
    bookLead: 'Fill in the form and it opens a ready-to-send WhatsApp message. No account, no waiting on hold.',
    bookDirect: 'Or just message us directly →',
    fName: 'Full name',
    fPhone: 'Phone number',
    fPhoneHint: '8 to 16 digits',
    fService: 'Service',
    fChoose: 'Choose a service',
    fEmergency: 'Emergency or pain',
    fUnsure: 'Not sure yet',
    fDate: 'Preferred date',
    fNote: 'Anything we should know?',
    optional: '(optional)',
    send: 'Send on WhatsApp',
    visitEyebrow: 'Visit us',
    mapTitle: (name) => `Map showing ${name}`,
    fab: 'WhatsApp us',
    msgHello: (name) => `Hello ${name}, I would like to book an appointment.`,
    msgName: 'Name',
    msgPhone: 'Phone',
    msgService: 'Service',
    msgDate: 'Preferred date',
    msgNote: 'Note',
    demoNote: 'Demo site. Clinic, team and reviews are fictional.',
    mockupNote: (name) => `Design mockup for ${name}. Not the clinic's official website.`,
    creditDemo: 'Demo website by',
    creditMockup: 'Prepared by',
    creditTag: 'secure, fast websites for small businesses',
  },
  ar: {
    dir: 'rtl',
    switchTo: 'en',
    switchLabel: 'English',
    nav: ['الخدمات', 'لماذا نحن', 'آراء المرضى', 'زورونا'],
    navLabel: 'القائمة الرئيسية',
    bookCta: 'احجز زيارة',
    call: 'اتصل',
    statsLabel: 'العيادة في أرقام',
    servicesEyebrow: 'الخدمات',
    whyEyebrow: 'لماذا يعود مرضانا',
    reviewsEyebrow: 'آراء المرضى',
    starsLabel: '5 من 5 نجوم',
    bookEyebrow: 'احجز زيارة',
    bookTitle: 'اختر اليوم، ونؤكد لك على واتساب.',
    bookLead: 'املأ النموذج وسيفتح رسالة واتساب جاهزة للإرسال. بدون حساب وبدون انتظار على الهاتف.',
    bookDirect: 'أو راسلنا مباشرة ←',
    fName: 'الاسم بالكامل',
    fPhone: 'رقم الهاتف',
    fPhoneHint: 'من 8 إلى 16 رقمًا',
    fService: 'الخدمة',
    fChoose: 'اختر الخدمة',
    fEmergency: 'طوارئ أو ألم',
    fUnsure: 'لست متأكدًا بعد',
    fDate: 'التاريخ المفضل',
    fNote: 'هل هناك شيء يجب أن نعرفه؟',
    optional: '(اختياري)',
    send: 'أرسل على واتساب',
    visitEyebrow: 'زورونا',
    mapTitle: (name) => `خريطة توضح موقع ${name}`,
    fab: 'راسلنا واتساب',
    msgHello: (name) => `مرحبًا ${name}، أود حجز موعد.`,
    msgName: 'الاسم',
    msgPhone: 'الهاتف',
    msgService: 'الخدمة',
    msgDate: 'التاريخ المفضل',
    msgNote: 'ملاحظة',
    demoNote: 'موقع تجريبي. العيادة والفريق والآراء غير حقيقية.',
    mockupNote: (name) => `تصميم مبدئي لـ ${name}. ليس الموقع الرسمي للعيادة.`,
    creditDemo: 'موقع تجريبي من تصميم',
    creditMockup: 'إعداد',
    creditTag: 'مواقع آمنة وسريعة للشركات الصغيرة',
  },
}
