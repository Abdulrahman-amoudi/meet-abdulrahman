/* The words and colours of the book, in English and Arabic. Art for each page: /book/art/<id>.webp */
export const UI = {
    brand: { en: 'Abdulrahman', ar: 'عبد الرحمن' },
    name: { en: 'Abdulrahman Amoudi', ar: 'عبد الرحمن العمودي' },
    coverLines: { en: ['Meet', 'Abdulrahman.'], ar: ['تعرّف على', 'عبد الرحمن.'] },
    coverSub: { en: 'Developer · Video editor · Founder of Wajha', ar: 'مطوّر · محرّر فيديو · مؤسس واجهة' },
    'cover.sub': { en: 'Web, AI and video, from Amman', ar: 'مواقع وذكاء اصطناعي وفيديو، من عمّان' },
    open: { en: 'Open the book', ar: 'افتح الكتاب' },
    loading: { en: 'Preparing the book…', ar: 'جارٍ تجهيز الكتاب…' },
    hint: { en: 'Drag a page, use the arrow keys, or click either side.', ar: 'اسحب الصفحة، أو استخدم مفاتيح الأسهم، أو انقر على أحد الجانبين.' },
    'foot.by': { en: 'Meet Abdulrahman, a book by Abdulrahman Amoudi', ar: 'تعرّف على عبد الرحمن، كتاب من عبد الرحمن العمودي' },
    'foot.where': { en: 'Amman, Jordan', ar: 'عمّان، الأردن' },
    prev: { en: 'Previous page', ar: 'الصفحة السابقة' },
    next: { en: 'Next page', ar: 'الصفحة التالية' },
    page: { en: 'Page', ar: 'صفحة' },
    docTitle: { en: 'Meet Abdulrahman: websites, AI and video from Amman', ar: 'تعرّف على عبد الرحمن: مواقع وذكاء اصطناعي وفيديو من عمّان' },
};

export const PAGES = [
        {
            id: '01-hello', bg: '#e7b587', ink: '#2a1d14', side: 'right', focus: '25% 50%',
            title: { en: 'I’m Abdulrahman.', ar: 'أنا عبد الرحمن.' },
            body: { en: 'An IT student and developer based in Amman. I build websites, AI tools and video content, and founded Wajha to deliver them to local businesses.', ar: 'طالب تكنولوجيا معلومات ومطوّر مقيم في عمّان. أبني المواقع وأدوات الذكاء الاصطناعي ومحتوى الفيديو، وأسّست واجهة لتقديمها للشركات والمتاجر المحلية.' },
        },
        {
            id: '02-video', bg: '#18153b', ink: '#f4efe4', side: 'right', focus: '20% 50%',
            title: { en: 'Video editing', ar: 'المونتاج' },
            body: { en: 'Where my work began in 2022. More than 75 videos since, covering cinematic edits, social reels, colour grading and motion.', ar: 'بدأت رحلتي المهنية من هنا عام ٢٠٢٢. أكثر من ٧٥ فيديو منذ ذلك الحين، بين المونتاج السينمائي والريلز وتصحيح الألوان والحركة.' },
        },
        {
            id: '03-ai', bg: '#70bba8', ink: '#10302a', side: 'left', focus: '75% 50%',
            title: { en: 'Practical AI.', ar: 'ذكاء اصطناعي عملي.' },
            body: { en: 'AI agents integrated into everyday workflows, self-linking knowledge bases, and quizzes generated from your own documents.', ar: 'وكلاء ذكاء اصطناعي مدمجون في سير العمل اليومي، وقواعد معرفة تترابط تلقائياً، واختبارات تُنشأ من مستنداتك.' },
        },
        {
            id: '04-networks', bg: '#606aa6', ink: '#f7f5fc', side: 'right', focus: '20% 50%',
            title: { en: 'Networks', ar: 'الشبكات' },
            body: { en: 'I design and configure network topologies, from routing and switching to addressing, and validate them in Cisco Packet Tracer.', ar: 'أصمّم البنى الشبكية وأهيّئها، من التوجيه والتبديل إلى العنونة، وأختبرها باستخدام Cisco Packet Tracer.' },
        },
        {
            id: '05-web', bg: '#d36c42', ink: '#2a130a', side: 'right', focus: '22% 50%',
            title: { en: 'Websites & systems', ar: 'المواقع والأنظمة' },
            body: { en: 'Through Wajha, I build bilingual websites and management systems for businesses in Amman, covering online ordering, memberships and bookings.', ar: 'من خلال واجهة، أطوّر مواقع وأنظمة إدارة ثنائية اللغة للشركات في عمّان، تشمل الطلبات الإلكترونية والاشتراكات والحجوزات.' },
            links: [{ en: 'Visit Wajha', ar: 'زيارة واجهة', href: 'https://wajha-chi.vercel.app', tone: 'terracotta', icon: 'web' }],
        },
        {
            id: '06-motion', bg: '#e1a547', ink: '#2a1d0c', side: 'left', focus: '78% 50%',
            title: { en: 'Motion design.', ar: 'الموشن جرافيك.' },
            body: { en: 'Short animated reels, scripted, animated and sound-designed in-house, including a pixel-art campaign for Vibe Todos and a loyalty reel for Dumbbell Gym.', ar: 'ريلز متحركة قصيرة، من كتابة النص إلى التحريك وتصميم الصوت، منها حملة بأسلوب البكسل لـ Vibe Todos وريل ولاء لصالح Dumbbell Gym.' },
            links: [{ en: 'Watch the reels', ar: 'مشاهدة الأعمال', href: 'https://www.instagram.com/wajiha.jo/', tone: 'teal', icon: 'reel' }],
        },
        {
            id: '07-work', bg: '#8bb29f', ink: '#132a20', side: 'right', focus: '22% 50%',
            title: { en: 'Selected work.', ar: 'أعمال مختارة.' },
            body: { en: 'A study app in daily use, Wajha’s website and CRM, an online ordering site for a café, a membership system for a gym, and a pixel-art new-tab extension for Chrome.', ar: 'تطبيق دراسي قيد الاستخدام اليومي، وموقع واجهة ونظام إدارة العملاء، وموقع طلبات إلكترونية لمقهى، ونظام اشتراكات لصالة رياضية، وإضافة صفحة جديدة لمتصفح Chrome بأسلوب البكسل.' },
            links: [{ en: 'Visit Wajha', ar: 'زيارة واجهة', href: 'https://wajha-chi.vercel.app', tone: 'terracotta', icon: 'web' }, { en: 'Vibe Todos', ar: 'Vibe Todos', href: 'https://to-do-virid-beta.vercel.app', tone: 'sage' }],
        },
        {
            id: '08-hello-again', bg: '#f3ddbe', ink: '#2b1d12', side: 'left', focus: '78% 50%',
            title: { en: 'Let’s work together.', ar: 'لنعمل معاً.' },
            body: { en: 'Whether it’s a website, a business system, a video or a network, I’d be glad to hear about your project.', ar: 'سواء كان موقعاً إلكترونياً أو نظاماً لعملك أو فيديو أو شبكة، يسعدني الاستماع إلى تفاصيل مشروعك.' },
            links: [{ en: 'Contact on WhatsApp', ar: 'تواصل عبر واتساب', href: 'https://wa.me/962781912998', tone: 'forest', icon: 'chat' }, { en: 'Instagram', ar: 'إنستغرام', href: 'https://www.instagram.com/abdalrahman__amoudi/', tone: 'sage' }],
        },
    ];
