import { AccordionItem } from "@/components/shadcn-space/accordion/accordion-07";
import { BrandList } from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";
import { Testimonial } from "@/components/ui/testimonial-1";

export const navigationData: NavigationSection[] = [
  {
    titleAr: "المقدمة",
    titleEn: "Intro",
    href: "#",
    isActive: true,
  },
  {
    titleAr: "الخريطة",
    titleEn: "Roadmap",
    href: "#roadmap",
  },
  {
    titleAr: "جدول الزمني",
    titleEn: "Timetable",
    href: "#timetable",
  },
  {
    titleAr: "المشاريع",
    titleEn: "Projects",
    href: "#projects",
  },
];

export const beginnerLevels: AccordionItem[] = [
  {
    id: "level-01",
    number: "01",
    titleAr: "المستوى 01 – ما هو الويب؟",
    titleEn: "Level 01 – What's Web?",
    content: {
      ar: [
        "الإنترنت مقابل الويب، الواجهة الأمامية مقابل الخلفية",
        "العميل مقابل الخادم، دورة حياة الطلب و DNS",
        "كيف تعمل المواقع، أساسيات المتصفح",
        "رموز حالة HTTP، ما هو API",
        "خريطة الطريق للواجهة الأمامية، كيف تفكر كمطور",
      ],
      en: [
        "Internet vs The Web, Frontend vs Backend",
        "Client vs Server, DNS & Request Lifecycle",
        "How websites work, Browser basics",
        "HTTP Status Codes, What is an API",
        "Frontend Roadmap, How to think like a dev",
      ],
    },
  },
  {
    id: "level-02",
    number: "02",
    titleAr: "المستوى 02 – أساسيات HTML5",
    titleEn: "Level 02 – HTML5 Fundamentals",
    content: {
      en: [
        "Document structure, Semantic elements",
        "Text, media, links, forms & validation",
        "Accessibility basics, SEO head tags",
        "HTML best practices & common mistakes",
        "Exercise: Personal Profile / About Me page",
        "Task: Business / Service landing page",
      ],
      ar: [
        "هيكل المستند، العناصر الدلالية",
        "النصوص، الوسائط، الروابط، النماذج والتحقق من صحتها",
        "أساسيات الوصول، علامات الرأس لتحسين محركات البحث",
        "أفضل ممارسات HTML والأخطاء الشائعة",
        "تمرين: صفحة الملف الشخصي / من أنا",
        "مهمة: صفحة هبوط للأعمال / الخدمات",
      ],
    },
  },
  {
    id: "level-03",
    number: "03",
    titleAr: "المستوى 03 –  أساسيات CSS3",
    titleEn: "Level 03 –  CSS3 Fundamentals",
    content: {
      en: [
        "Selectors, Specificity, Box model",
        "Display, Positioning, z-index & stacking",
        "Flexbox (layouts & alignment)",
        "CSS Grid, Responsive design, Media queries",
        "Transitions, Transforms, Keyframes",
        "CSS variables, Pseudo-classes, Best practices",
        "Exercise: Animated Card Layout",
        "Task: Responsive website with animations",
      ],
      ar: [
        "المحددات، الأسبقية، نموذج الصندوق",
        "العرض، التمركز، z-index والتكديس",
        "Flexbox (التخطيطات والمحاذاة)",
        "CSS Grid، التصميم المتجاوب، استعلامات الوسائط",
        "الانتقالات، التحولات، الإطارات الرئيسية",
        "متغيرات CSS، الفئات الزائفة، أفضل الممارسات",
        "تمرين: تخطيط بطاقة متحركة",
        "مهمة: موقع ويب متجاوب مع الرسوم المتحركة",
      ],
    },
  },
  {
    id: "level-04",
    number: "04",
    titleAr: "المستوى 04 –  Bootstrap",
    titleEn: "Level 04 –  Bootstrap",
    content: {
      en: [
        "Grid system, Containers, Utilities",
        "Components: Navbar, Cards, Buttons, Forms",
        "Responsive helpers, Customizing Bootstrap",
        "Exercise: Responsive Company page",
        "Task: Admin Dashboard UI",
      ],
      ar: [
        "نظام الشبكة، الحاويات، الأدوات المساعدة",
        "المكونات: شريط التنقل، البطاقات، الأزرار، النماذج",
        "المساعدين المتجاوبين، تخصيص Bootstrap",
        "تمرين: صفحة شركة متجاوبة",
        "مهمة: واجهة لوحة تحكم المسؤول",
      ],
    },
  },
  {
    id: "level-05",
    number: "05",
    titleAr: "المستوى 05 –  أساسيات JavaScript",
    titleEn: "Level 05 –  JavaScript Fundamentals",
    content: {
      en: [
        "Variables, data types, operators, conditionals",
        "Functions, arrays, objects, destructuring",
        "DOM selection, manipulation, events",
        "Promises, Async/Await, Error handling",
        "Modules, LocalStorage, Debugging, Best practices",
        "Exercise: Interactive To-Do App",
        "Task: Expense Tracker / Quiz App",
      ],
      ar: [
        "المتغيرات، أنواع البيانات، العوامل، الشروط",
        "الدوال، المصفوفات، الكائنات، التفكيك",
        "اختيار DOM، التلاعب، الأحداث",
        "الوعود، Async/Await، التعامل مع الأخطاء",
        "الوحدات، LocalStorage، التصحيح، أفضل الممارسات",
        "تمرين: تطبيق To-Do تفاعلي",
        "مهمة: متتبع النفقات / تطبيق Quiz",
      ],
    },
  },
];

export const intermediateLevels: AccordionItem[] = [
  {
    id: "level-06",
    number: "06",
    titleAr: "المستوى 06 – Git & GitHub",
    titleEn: "Level 06 – Git & GitHub",
    content: {
      en: [
        "Version control, init / add / commit",
        "Branches, merging, merge conflicts",
        "Remote repos, pull requests, fork & clone",
        "Rebase vs merge, GitHub Pages, best practices",
      ],
      ar: [
        "التحكم في الإصدارات، init / add / commit",
        "الفروع، الدمج، تعارضات الدمج",
        "المستودعات البعيدة، طلبات السحب، fork & clone",
        "Rebase مقابل merge، صفحات GitHub، أفضل الممارسات",
      ],
    },
  },
  {
    id: "level-07",
    number: "07",
    titleAr: "المستوى 07 – Tailwind CSS",
    titleEn: "Level 07 – Tailwind CSS",
    content: {
      en: [
        "Utility-first concept, installation & config",
        "Spacing, sizing, typography, layout utilities",
        "Responsive prefixes, dark mode, hover states",
        "Exercise: Responsive Landing Page",
        "Task: Portfolio redesign with Tailwind",
      ],
      ar: [
        "المفهوم الأولي للوظائف، التثبيت والتكوين",
        "التباعد، الحجم، الكتابة، وظائف التخطيط",
        "البادئات المتجاوبة، الوضع الداكن، حالات التمرير",
        "تمرين: صفحة هبوط متجاوبة",
        "مهمة: إعادة تصميم الملف الشخصي مع Tailwind",
      ],
    },
  },
  {
    id: "level-08",
    number: "08",
    titleAr: "المستوى 08 – تكامل API",
    titleEn: "Level 08 – API Integration",
    content: {
      en: [
        "REST APIs, HTTP methods, fetch() basics",
        "Reading docs, query params, CORS handling",
        "Loading states, pagination, search with debounce",
        "Exercise: GitHub Profile Finder",
        "Task: Weather Dashboard / News App",
      ],
      ar: [
        "واجهات برمجة التطبيقات REST، طرق HTTP، أساسيات fetch()",
        "قراءة الوثائق، معلمات الاستعلام، التعامل مع CORS",
        "حالات التحميل، التصفح، البحث مع debounce",
        "تمرين:Finder ملف تعريف GitHub",
        "مهمة: لوحة تحكم الطقس / تطبيق الأخبار",
      ],
    },
  },
  {
    id: "level-09",
    number: "09",
    titleAr: "المستوى 09 – React with Vite",
    titleEn: "Level 09 – React with Vite",
    content: {
      en: [
        "JSX, components, props, useState",
        "useEffect, lists, conditional rendering, events",
        "Controlled forms, custom hooks, React Router",
        "Performance, patterns, DevTools, API calls",
      ],
      ar: [
        "JSX, المكونات, الخصائص, useState",
        "useEffect, القوائم, العرض الشرطي, الأحداث",
        "نماذج التحكم، الهوكيز المخصصة, React Router",
        "الأداء, الأنماط, أدوات التطوير, مكالمات API",
      ],
    },
  },
  {
    id: "level-10",
    number: "10",
    titleAr: "المستوى 10 – Context API",
    titleEn: "Level 10 – Context API",
    content: {
      en: [
        "Prop drilling, createContext, useContext",
        "Provider pattern, useReducer, Auth & Theme context",
        "Cart context, when NOT to use Context, pitfalls",
        "Exercise: Multi-context Shopping App",
        "Task: E-commerce with Cart & Auth context",
      ],
      ar: [
        "التمرير الخاص، createContext، useContext",
        "نمط المزود، useReducer، سياق المصادقة والسمة",
        "سياق العربة، متى لا تستخدم السياق، الفخاخ",
        "تمرين: تطبيق التسوق متعدد السياقات",
        "مهمة: التجارة الإلكترونية مع سياق العربة والمصادقة",
      ],
    },
  },
];

export const advancedLevels: AccordionItem[] = [
  {
    id: "level-11",
    number: "11",
    titleAr: "المستوى 11 – TypeScript",
    titleEn: "Level 11 – TypeScript",
    content: {
      en: [
        "Basic types, unions, intersections, optionals",
        "Interfaces vs types, type aliases, narrowing",
        "Typing functions, props, state, generics, enums",
        "Exercise: Typed Todo App (React + TS)",
        "Task: Typed Expense Tracker / Dashboard",
      ],
      ar: [
        "الأنواع الأساسية، التوحيد، التقاطع، الاختيارية",
        "الواجهات مقابل الأنواع، أسماء الأنواع، التضيق",
        "تصنيف الوظائف, الخصائص, الحالة, العمليات العامة, العدammers",
        "تمرين: تطبيق مهام مُنَسَّق (React + TS)",
        "مهمة: متابعة المصروفات المُنَسَّقة / لوحة التحكم",
      ],
    },
  },
  {
    id: "level-12",
    number: "12",
    titleAr: "المستوى 12 – Redux Toolkit & RTK Query",
    titleEn: "Level 12 – Redux Toolkit & RTK Query",
    content: {
      en: [
        "Why Redux, global vs server state, Context comparison",
        "RTK setup, slices, async actions",
        "RTK Query, caching, errors, DevTools, pitfalls",
        "Exercise: Counter App with Redux Toolkit",
        "Task: Shopping Cart / Cart Management App",
      ],
      ar: [
        "لماذا Redux، الحالة العالمية مقابل الحالة الخادم، مقارنة السياق",
        "إعداد RTK، الشرائح، الإجراءات غير المتزامنة",
        "RTK Query, التخزين المؤقت، الأخطاء، أدوات التطوير، الفخاخ",
        "تمرين: تطبيق العداد مع Redux Toolkit",
        "مهمة: عربة التسوق / تطبيق إدارة العربة",
      ],
    },
  },
  {
    id: "level-13",
    number: "13",
    titleAr: "المستوى 13 – Next.js",
    titleEn: "Level 13 – Next.js",
    content: {
      en: [
        "App Router, routing, layouts, server vs client",
        "SSR vs CSR, static vs dynamic, ISR, caching",
        "API handling, image optimization, middleware, auth flow",
        "Exercise: Multi-page Blog with static pages",
        "Task: Dynamic Blog / E-commerce with SSR & API",
      ],
      ar: [
        "موجه التطبيق، التوجيه، التخطيط، الخادم مقابل العميل",
        "SSR مقابل CSR, الثابت مقابل الديناميكي, ISR, التخزين المؤقت",
        "معالجة API، تحسين الصور، الوسيط، تدفق المصادقة",
        "تمرين: مدونة متعددة الصفحات مع صفحات ثابتة",
        "مهمة: مدونة ديناميكية / التجارة الإلكترونية مع SSR & API",
      ],
    },
  },
  {
    id: "level-14",
    number: "14",
    titleAr: "المستوى 14 – النشر والاختبار",
    titleEn: "Level 14 – Deployment & Testing",
    content: {
      en: [
        "Build process, env variables, prod vs dev",
        "Vercel deployment, domain basics, common issues",
        "ESLint, Prettier, Jest, React Testing Library, CI/CD",
      ],
      ar: [
        "عملية البناء، متغيرات البيئة، الإنتاج مقابل التطوير",
        "نشر Vercel، أساسيات النطاق، المشكلات الشائعة",
        "ESLint, Prettier, Jest, مكتبة اختبار React, CI/CD",
      ],
    },
  },
];

export const avatarList: AvatarList[] = [
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
  },
];

export const brandList: BrandList[] = [
  {
    image: "/images/eyouth.png",
    lightimg: "/images/eyouth.png",
    name: "EYouth",
  },
  {
    image: "/images/nti.png",
    lightimg: "/images/nti.png",
    name: "NTI - National Telecommunication Institute",
  },
  {
    image: "/images/graphitopia.jpg",
    lightimg: "/images/graphitopia.jpg",
    name: "Graphitopia",
  },
  {
    image: "/images/sis.jpg",
    lightimg: "/images/sis.jpg",
    name: "SIS Platform",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hanin Hegazy",
    role: "Frontend Developer",
    image: "https://notion-avatars.netlify.app/api/avatar?preset=female-3",
    review: `انا في اول يوم اخدت فيه الكورس مع حضرتك يعتبر مكنش عندي اي خلفيه عن البرمجه و من هنا بدات اطول رحله كانت على ايد حضرتك اتعلمت كتير عن البرمجه و ازاي اعمل ويبسايت و كده و بصراحه في الاول واجهت صعوبات و تحديات كبيره في البدايه 
            وبصراحه محتوى الكورس رهيب ما شاء الله و قوي جدا ويعتبر كافي لاي حد حابب يتعلم في الاول 
            وبصراحه يعني اول مشروع ويبسايت اتعمل و لحظه التطوير لحد م طلع اول تصميم بورتفوليو كانت رحله مليانه بالانجازات الحمدلله 
            غير طبعا طريقه التعامل و نظام المتابعه اللي حضرتك اتبعته معانا من اول يوم 
            يعني من الاخر كده انا اتبسطت بالتجربه و خصوصا انها فتحت عيني على سكك كتير و رحلة تعلم طويله ف بجد شكرا على كل حاجه بجد ✨.....نفع الله بك البلاد و العباد و زادك من العلم و تحصيله 🤍`,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Mohamed Amara",
    role: "Frontend Developer",
    image: "https://notion-avatars.netlify.app/api/avatar?preset=male-2",
    review:
      "حبيبي يهندسة لا والله كان كورس مفيد لحد لسا داخل المجال جديد بحيث ياخذ فكرة عن عالم ال web و بصراحة المفروض يكون الكورس أطول لاكن انا شايف انك عملت الي عليك في توصيل المعلومة في الوقت الي كان متاح وشكرا ليك",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Ali",
    role: "Frontend Developer",
    image: "https://notion-avatars.netlify.app/api/avatar?preset=male-3",
    review: `وعليكم السلام
            الكورس كان كويس اوي مثمر جدا استفدت منه كثير و من توجيهات حضرتك 
            برغم إن عدي علي الكورس فتره إلا إني بذاكر لحد دلوقتي من الحاجات اللي حضرتك كنت بتبعتها`,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Noureen",
    role: "Frontend Developer",
    image: "https://notion-avatars.netlify.app/api/avatar?preset=female-4",
    review:
      "افضل حاجه بالنسبالي أن السيشن مكنتش ممله خالص مع انها طويله و كانت تفاعليه و جزء الجيمز و المنافسه ال فيها حلوه جدا و الشرح  و التطبيقات ال كنا بنعملها حلوه جدا الفكره بس أن كله يخلص التطبيق ال عليه كامله عشان اوقات بيبقي فاضل جزء و يتنقل علي التطبيق ال بعده و شكرا جدا ل حضرتك استفدت فعلا كتير",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Hessain",
    role: "Frontend Developer",
    image: "https://notion-avatars.netlify.app/api/avatar?preset=male-5",
    review:
      "والله الكورس كان جميل ومفيد جدًا، جزء الفرونت بالذات اتعلمت فيه حاجات كتير",
    rating: 4.7,
  },
];
