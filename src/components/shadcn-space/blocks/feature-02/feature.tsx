"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

type Features = {
  icon: LucideIcon;
  titleEn: string;
  titleAr: string;
  color: string;
  contentEn: string;
  contentAr: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  const locale = useLocale();
  return (
    <section id="projects" className="scroll-mt-10">
      <div className="lg:py-20 sm:py-16 py-8 px-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto text-center"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                {locale === "en" ? "Projects" : "المشاريع"}
              </Badge>
              <h2 className="text-foreground text-3xl sm:text-5xl font-bold capitalize">
                {locale === "en"
                  ? "Real projects. Real portfolio. Real jobs."
                  : "مشاريع حقيقية. ملف شخصي حقيقية. وظائف حقيقية."}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal mt-4">
                {locale === "en"
                  ? "Build three real-world projects, deploy them to Vercel, and showcase them in your portfolio. No templates, no copy-pasting — just you and your code."
                  : "قم ببناء ثلاثة مشاريع حقيقية، نشرها على Vercel، وعرضها في ملفك الشخصي. لا قوالب، لا نسخ ولصق — فقط أنت وكودك."}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featureData.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card
                      className={cn(
                        "py-10 h-full border-t-4 border-t-transparent transition-all duration-300",
                        value.color,
                      )}
                    >
                      <CardContent className="px-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 mb-5">
                            <value.icon
                              className="w-8 h-8 text-primary"
                              strokeWidth={1.2}
                            />
                            <h6 className="text-xl font-semibold">
                              {locale === "en" ? value.titleEn : value.titleAr}
                            </h6>
                          </div>
                          <p className="text-base font-normal text-muted-foreground">
                            {locale === "en"
                              ? value.contentEn
                              : value.contentAr}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
