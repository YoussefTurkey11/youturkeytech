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
    titleEn: "Blog App.",
    titleAr: "موقع مقالات",
    color:
      "border-t-teal-400 sm:border-t-background sm:hover:border-t-teal-400",
    contentEn:
      "A Full-Stack Blog built using a Headless CMS (Strapi) that enables dynamic content creation and management, including rich media (images, videos, code snippets). It features a powerful admin dashboard and a modern frontend for efficient content delivery and high performance.",
    contentAr:
      "مشروع مدونة Full-Stack باستخدام Headless CMS (Strapi)، يتيح إنشاء وإدارة المقالات بشكل ديناميكي مع دعم الوسائط (صور، فيديو، أكواد)، ولوحة تحكم متكاملة لإدارة المحتوى، بالإضافة إلى واجهة مستخدم حديثة لعرض المقالات بكفاءة وأداء عالي.",
  },
  {
    icon: CheckCircle,
    titleEn: "E-Commerce.",
    titleAr: "متجر إلكتروني",
    color:
      "border-t-violet-400 sm:border-t-background sm:hover:border-t-violet-400",
    contentEn:
      "A Full-Stack E-commerce application built using a Headless CMS (Strapi) that enables dynamic management of products, orders, and customers. It includes a powerful admin dashboard and a modern frontend optimized for performance and smooth user experience.",
    contentAr:
      "مشروع متجر إلكتروني Full-Stack باستخدام Headless CMS (Strapi)، يتيح إدارة المنتجات، الطلبات، والعملاء بشكل ديناميكي، مع لوحة تحكم متكاملة، ونظام عرض حديث يدعم الأداء العالي وتجربة مستخدم سلسة.",
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
