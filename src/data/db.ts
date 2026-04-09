import { AccordionItem } from "@/components/shadcn-space/accordion/accordion-07";
import { BrandList } from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";

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
    title: "Level 01 – What's Web?",
    content: [
      "Internet vs The Web, Frontend vs Backend",
      "Client vs Server, DNS & Request Lifecycle",
      "How websites work, Browser basics",
      "HTTP Status Codes, What is an API",
      "Frontend Roadmap, How to think like a dev",
    ],
  },
  {
    id: "level-02",
    number: "02",
    title: "Level 02 – HTML5 Fundamentals",
    content: [
      "Document structure, Semantic elements",
      "Text, media, links, forms & validation",
      "Accessibility basics, SEO head tags",
      "HTML best practices & common mistakes",
      "Exercise: Personal Profile / About Me page",
      "Task: Business / Service landing page",
    ],
  },
  {
    id: "level-03",
    number: "03",
    title: "Level 03 –  CSS3 Fundamentals",
    content: [
      "Selectors, Specificity, Box model",
      "Display, Positioning, z-index & stacking",
      "Flexbox (layouts & alignment)",
      "CSS Grid, Responsive design, Media queries",
      "Transitions, Transforms, Keyframes",
      "CSS variables, Pseudo-classes, Best practices",
      "Exercise: Animated Card Layout",
      "Task: Responsive website with animations",
    ],
  },
  {
    id: "level-04",
    number: "04",
    title: "Level 04 –  Bootstrap",
    content: [
      "Grid system, Containers, Utilities",
      "Components: Navbar, Cards, Buttons, Forms",
      "Responsive helpers, Customizing Bootstrap",
      "Exercise: Responsive Company page",
      "Task: Admin Dashboard UI",
    ],
  },
  {
    id: "level-05",
    number: "05",
    title: "Level 05 –  JavaScript Fundamentals",
    content: [
      "Variables, data types, operators, conditionals",
      "Functions, arrays, objects, destructuring",
      "DOM selection, manipulation, events",
      "Promises, Async/Await, Error handling",
      "Modules, LocalStorage, Debugging, Best practices",
      "Exercise: Interactive To-Do App",
      "Task: Expense Tracker / Quiz App",
    ],
  },
];

export const intermediateLevels: AccordionItem[] = [
  {
    id: "level-06",
    number: "06",
    title: "Level 06 – Git & GitHub",
    content: [
      "Version control, init / add / commit",
      "Branches, merging, merge conflicts",
      "Remote repos, pull requests, fork & clone",
      "Rebase vs merge, GitHub Pages, best practices",
    ],
  },
  {
    id: "level-07",
    number: "07",
    title: "Level 07 – Tailwind CSS",
    content: [
      "Utility-first concept, installation & config",
      "Spacing, sizing, typography, layout utilities",
      "Responsive prefixes, dark mode, hover states",
      "Exercise: Responsive Landing Page",
      "Task: Portfolio redesign with Tailwind",
    ],
  },
  {
    id: "level-08",
    number: "08",
    title: "Level 08 – API Integration",
    content: [
      "REST APIs, HTTP methods, fetch() basics",
      "Reading docs, query params, CORS handling",
      "Loading states, pagination, search with debounce",
      "Exercise: GitHub Profile Finder",
      "Task: Weather Dashboard / News App",
    ],
  },
  {
    id: "level-09",
    number: "09",
    title: "Level 09 – React with Vite",
    content: [
      "JSX, components, props, useState",
      "useEffect, lists, conditional rendering, events",
      "Controlled forms, custom hooks, React Router",
      "Performance, patterns, DevTools, API calls",
      "Exercise: Multi-page app with router",
      "Task: Movie Search / Product Listing app",
    ],
  },
  {
    id: "level-10",
    number: "10",
    title: "Level 10 – Context API",
    content: [
      "Prop drilling, createContext, useContext",
      "Provider pattern, useReducer, Auth & Theme context",
      "Cart context, when NOT to use Context, pitfalls",
      "Exercise: Multi-context Shopping App",
      "Task: E-commerce with Cart & Auth context",
    ],
  },
];

export const advancedLevels: AccordionItem[] = [
  {
    id: "level-11",
    number: "11",
    title: "Level 11 – TypeScript",
    content: [
      "Basic types, unions, intersections, optionals",
      "Interfaces vs types, type aliases, narrowing",
      "Typing functions, props, state, generics, enums",
      "Exercise: Typed Todo App (React + TS)",
      "Task: Typed Expense Tracker / Dashboard",
    ],
  },
  {
    id: "level-12",
    number: "12",
    title: "Level 12 – Redux Toolkit & RTK Query",
    content: [
      "Why Redux, global vs server state, Context comparison",
      "RTK setup, slices, async actions",
      "RTK Query, caching, errors, DevTools, pitfalls",
      "Exercise: Counter App with Redux Toolkit",
      "Task: Shopping Cart / Cart Management App",
    ],
  },
  {
    id: "level-13",
    number: "13",
    title: "Level 13 – Next.js",
    content: [
      "App Router, routing, layouts, server vs client",
      "SSR vs CSR, static vs dynamic, ISR, caching",
      "API handling, image optimization, middleware, auth flow",
      "Exercise: Multi-page Blog with static pages",
      "Task: Dynamic Blog / E-commerce with SSR & API",
    ],
  },
  {
    id: "level-14",
    number: "14",
    title: "Level 14 – Deployment & Testing",
    content: [
      "Build process, env variables, prod vs dev",
      "Vercel deployment, domain basics, common issues",
      "ESLint, Prettier, Jest, React Testing Library, CI/CD",
    ],
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
