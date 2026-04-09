"use client";

import { Controller, UseFormReturn } from "react-hook-form";
import { EnrollFormData, Level } from "@/validation/Enroll.schema"; // أو من levelStep.schema
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, Code2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const levelOptions = [
  {
    value: Level.Beginner,
    titleEn: "Beginner",
    titleAr: "مبتدئ",
    descriptionEn: "Start from zero — no experience needed at all",
    descriptionAr: "ابدأ من الصفر — لا حاجة لخبرة",
    icon: Star,
    color: "text-gray-500",
  },
  {
    value: Level.Intermediate,
    titleEn: "Intermediate",
    titleAr: "متوسط",
    descriptionEn: "You know the basics and want to level up fast",
    descriptionAr: "تعرف على الأساسيات وتريد التطور بسرعة",
    icon: Code2,
    color: "text-gray-500",
  },
  {
    value: Level.Advanced,
    titleEn: "Advanced",
    titleAr: "متقدم",
    descriptionEn: "Advanced topics, TypeScript, Next.js & real-world projects",
    descriptionAr: "مواضيع متقدمة, TypeScript, Next.js & مشاريع واقعية",
    icon: Sparkles,
    color: "text-gray-500",
  },
];

const LevelStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const t = useTranslations("FormEnroll");
  const locale = useLocale();
  const { control } = form;

  return (
    <div className="space-y-6 mt-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("levelStep.title")}
        </h2>
        <p className="text-muted-foreground mt-1">
          {t("levelStep.description")}
        </p>
      </div>
      <Controller
        control={control}
        name="level"
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="grid gap-4"
          >
            {levelOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = field.value === option.value;

              return (
                <Card
                  key={option.value}
                  className={cn(
                    "cursor-pointer transition-all duration-200 border rounded-full",
                    isSelected && "border-primary bg-primary/5",
                  )}
                  onClick={() => field.onChange(option.value)}
                >
                  <CardContent className="flex gap-4 items-center justify-between">
                    <div className="flex gap-4">
                      <div className={`mt-1 ${option.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-md">
                          {locale === "en" ? option.titleEn : option.titleAr}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-1">
                          {locale === "en"
                            ? option.descriptionEn
                            : option.descriptionAr}
                        </p>
                      </div>
                    </div>

                    <RadioGroupItem value={option.value} />
                  </CardContent>
                </Card>
              );
            })}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default LevelStep;
