"use client";
import { Controller, UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/Enroll.schema";
import { RadioGroup } from "@/components/ui/radio-group";
import { Briefcase, Check, Globe, Monitor, X, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const GoalStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const { control } = form;

  const hasExpOptions = [
    {
      value: true,
      title: "Yes",
      icon: Check,
      color: "text-gray-500",
    },
    {
      value: false,
      title: "No",
      icon: X,
      color: "text-gray-500",
    },
  ];

  const goalOptions = [
    {
      value: "job",
      title: "Get a job",
      icon: Briefcase,
      color: "text-gray-500",
    },
    {
      value: "freelancing",
      title: "Freelancing",
      icon: Globe,
      color: "text-gray-500",
    },
    {
      value: "skills",
      title: "Improve skills",
      icon: Zap,
      color: "text-gray-500",
    },
    {
      value: "projects",
      title: "Build Projects",
      icon: Monitor,
      color: "text-gray-500",
    },
  ];

  return (
    <div className="space-y-7 mt-5">
      <section>
        <Label className="text-md sm:text-lg font-semibold mb-5">
          Do you have programming experience?
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
                    key={option.title}
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
                          {option.title}
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
          What is your main goal?
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
                          {option.title}
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
