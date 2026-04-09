"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

type PricingPlan = {
  plan_bg_color: string;
  plan_nameAr: string;
  plan_nameEn: string;
  plan_descpAr: string;
  plan_descpEn: string;
  plan_feature: string[];
};

const pricingData: PricingPlan[] = [
  {
    plan_bg_color: "bg-blue-500/10",
    plan_nameAr: "المستوى المبتدئ",
    plan_nameEn: "Beginner level",
    plan_descpAr:
      "بناء أساسياتك من الصفر — فهم الويب، هيكلة الصفحات، وتزيينها بجمال، وإضافة التفاعل.",
    plan_descpEn:
      "Build your foundation from scratch — understand the web, structure pages, style them beautifully, and add interactivity.",
    plan_feature: ["HTML5", "CSS3", "Bootstrap", "JavaScript & ES6+"],
  },
  {
    plan_bg_color: "bg-teal-400/20",
    plan_nameAr: "المستوى المتوسط",
    plan_nameEn: "Intermediate level",
    plan_descpAr:
      "ترقية إلى أساليب العمل الحديثة — هندسة قائمة على المكونات, واجهات برمجية حية, تصميم احترافي مع Tailwind, وإدارة الحالة.",
    plan_descpEn:
      "Upgrade to modern workflows — component-based architecture, live APIs, professional design with Tailwind, and state management.",
    plan_feature: ["Git & GitHub", "Tailwind CSS", "React.js", "Context API"],
  },
  {
    plan_bg_color: "bg-violet-400/20",
    plan_nameAr: "المستوى المتقدم",
    plan_nameEn: "Advanced level",
    plan_descpAr:
      "فكّر وابني كمحترف — TypeScript, Redux, Next.js, خطوط إنتاج, اختبار, وبنية معمارية من المستوى الأول.",
    plan_descpEn:
      "Think and build like a professional — TypeScript, Redux, Next.js, deployment pipelines, testing, and production-grade architecture.",
    plan_feature: ["TypeScript", "Redux", "Next.js", "Testing & Deployment"],
  },
];

const Pricing = () => {
  const locale = useLocale();

  return (
    <section className="bg-background py-10 xl:py-0 scroll-mt-10" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            {/* Badge */}
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7 capitalize"
            >
              {locale === "en" ? "Roadmap" : "الخريطة"}
            </Badge>
            {/* Heading */}
            <div className="w-full sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-bold capitalize">
                {locale === "en"
                  ? "Three levels. One complete journey."
                  : "ثلاث مستويات. رحلة كاملة."}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal mt-4">
                {locale === "en"
                  ? "Each level builds on the last — by the end you won't just know frontend, you'll think and work like a professional engineer."
                  : "كل مستوى يبني على السابق - في النهاية لن تعرف فقط الواجهة الأمامية، بل ستفكر وتعمل كمحترف."}
              </p>
            </div>
          </div>
          {/* Pricing Plans */}
          <div className="flex flex-col xl:flex-row items-center justify-center flex-wrap gap-6 w-full">
            {pricingData?.map((items: PricingPlan, index: number) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="w-full xl:w-fit"
              >
                <Card
                  className={cn(
                    items.plan_bg_color,
                    "p-8 sm:p-10 rounded-2xl ring-0 w-full xl:w-fit",
                  )}
                  key={index}
                >
                  <CardContent className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start self-stretch px-0 h-full lg:h-50 w-full">
                    <div className="flex flex-col items-start justify-between self-stretch gap-6">
                      <div className="flex flex-col gap-3">
                        <Badge className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7">
                          {locale === "en"
                            ? items.plan_nameEn
                            : items.plan_nameAr}
                        </Badge>
                        <p className="text-sm font-normal text-muted-foreground w-full sm:max-w-56">
                          {locale === "en"
                            ? items.plan_descpEn
                            : items.plan_descpAr}
                        </p>
                      </div>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block"
                    />
                    <Separator
                      orientation="horizontal"
                      className="sm:hidden block"
                    />
                    <div className="flex flex-col items-start gap-3 grow">
                      <p className="text-card-foreground text-base sm:text-xl font-normal sm:font-medium">
                        {locale === "en"
                          ? "What you'll learn"
                          : "ما الذي ستتعلمه"}
                      </p>
                      <ul className="flex flex-col items-start self-stretch gap-3">
                        {items.plan_feature?.map(
                          (feature: string, index: number) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-3 text-card-foreground text-base font-normal tracking-normal"
                              >
                                <Check size={16} aria-hidden="true" />
                                {feature}
                              </li>
                            );
                          },
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
