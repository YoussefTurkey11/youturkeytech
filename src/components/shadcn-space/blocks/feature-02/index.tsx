"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import { CheckCircle, CirclePlay, ScreenShare } from "lucide-react";

const featureData = [
  {
    icon: ScreenShare,
    titleEn: "Personal Portfolio Website.",
    titleAr: "موقع الملف الشخصي",
    color:
      "border-t-blue-500 sm:border-t-background sm:hover:border-t-blue-500",
    contentEn:
      "A fully responsive multi-section portfolio showcasing your skills, projects, and a working contact form. Your very first deployable product.",
    contentAr:
      "موقع ويب متجاوب يعرض مهاراتك ومشاريعك ونموذج اتصال يعمل. أول منتج قابل للنشر.",
  },
  {
    icon: CirclePlay,
    titleEn: "Movies Discovery App.",
    titleAr: "تطبيق اكتشاف الأفلام",
    color:
      "border-t-teal-400 sm:border-t-background sm:hover:border-t-teal-400",
    contentEn:
      "Live search, genre filters, a favorites list powered by Context API — all wired to a real public API and deployed to Vercel.",
    contentAr:
      "بحث مباشر, مرشحات الأنواع, قائمة المفضلة مدعومة بـ Context API — كلها متصلة بـ API علني حقيقي ومُنشرة على Vercel.",
  },
  {
    icon: CheckCircle,
    titleEn: "Production Next.js App.",
    titleAr: "تطبيق Next.js",
    color:
      "border-t-violet-400 sm:border-t-background sm:hover:border-t-violet-400",
    contentEn:
      "A job board or blog platform — TypeScript throughout, Redux for state, SSR rendering, full test coverage, and CI/CD on Vercel.",
    contentAr:
      "لوحة وظائف أو منصة مدونة — TypeScript طوال الطريق, Redux للحالة, عرض SSR, تغطية اختبار كاملة, و CI/CD على Vercel.",
  },
];

const Projects = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Projects;
