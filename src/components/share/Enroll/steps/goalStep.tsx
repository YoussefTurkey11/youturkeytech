"use client";
import { Controller, UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/Enroll.schema";
import { RadioGroup } from "@/components/ui/radio-group";
import { Briefcase, Check, Globe, Monitor, X, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "next-intl";

const GoalStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const { control } = form;
  const t = useTranslations("FormEnroll");
  const locale = useLocale();

  const hasExpOptions = [
    {
      value: true,
      titleEn: "Yes",
      titleAr: "نعم",
      icon: Check,
      color: "text-gray-500",
    },
    {
      value: false,
      titleEn: "No",
      titleAr: "لا",
      icon: X,
      color: "text-gray-500",
    },
  ];

  const goalOptions = [
    {
      value: "job",
      titleEn: "Get a job",
      titleAr: "الحصول على وظيفة",
      icon: Briefcase,
      color: "text-gray-500",
    },
    {
      value: "freelancing",
      titleEn: "Freelancing",
      titleAr: "العمل الحر",
      icon: Globe,
      color: "text-gray-500",
    },
    {
      value: "skills",
      titleEn: "Improve skills",
      titleAr: "تحسين المهارات",
      icon: Zap,
      color: "text-gray-500",
    },
    {
      value: "projects",
      titleEn: "Build Projects",
      titleAr: "بناء مشاريع",
      icon: Monitor,
      color: "text-gray-500",
    },
  ];

  return (
    <div className="space-y-7 mt-5">
      <section>
        <Label className="text-md sm:text-lg font-semibold mb-5">
          {t("goalStep.hasExperience")}
        </Label>
        <Controller
          control={control}
          name="hasExperience"
          render={({ field }) => (
            <RadioGroup
              value={String(field.value)}
              onValueChange={(val) => field.onChange(val === "true")}
              className="flex items-center gap-5"
            >
              {hasExpOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = field.value === option.value;

                return (
                  <Card
                    key={locale === "en" ? option.titleEn : option.titleAr}
                    className={cn(
                      "cursor-pointer transition-all duration-200 border rounded-full p-3",
                      isSelected && "border-primary bg-primary/5",
                    )}
                    onClick={() => field.onChange(option.value)}
                  >
                    <CardContent className="flex gap-4 items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${option.color}`} />
                        <h3 className="font-semibold text-md">
                          {locale === "en" ? option.titleEn : option.titleAr}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </RadioGroup>
          )}
        />
      </section>

      <section>
        <Label className="text-md sm:text-lg font-semibold mb-5">
          {t("goalStep.goal")}
        </Label>
        <Controller
          control={control}
          name="goal"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {goalOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = field.value === option.value;

                return (
                  <Card
                    key={option.value}
                    className={cn(
                      "cursor-pointer transition-all duration-200 border rounded-full p-3",
                      isSelected && "border-primary bg-primary/5",
                    )}
                    onClick={() => field.onChange(option.value)}
                  >
                    <CardContent className="flex gap-4 items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Icon className={`w-5 h-5 ${option.color}`} />
                        <h3 className="font-semibold text-md">
                          {locale === "en" ? option.titleEn : option.titleAr}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </RadioGroup>
          )}
        />
      </section>
    </div>
  );
};

export default GoalStep;
