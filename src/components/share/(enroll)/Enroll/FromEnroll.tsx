"use client";
import { useState } from "react";
import { Button } from "../../../ui/button";
import AnimatedStepper from "../../../ui/smoothui/animated-stepper";
import { stepsEnroll } from "./stepsEnroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnrollFormData,
  enrollSchema,
  Level,
  Status,
} from "@/validation/enroll/Enroll.schema";
import SuccessScreen from "./steps/SuccessScreen";
import { useLocale } from "next-intl";
import { useCreateCourseApplicationMutation } from "@/redux/apis/courseApi";
import { Sources } from "@/types/courseType";
import { toast } from "sonner";

const FormEnroll = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const locale = useLocale() as "en" | "ar";

  const [createCourseApplication, { isLoading }] =
    useCreateCourseApplicationMutation();

  const form = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      level: Level.Beginner,
      hasExperience: false,
      goal: "",
      notes: "",
      source: "",
      status: Status.Pending,
      couponCode: "",
      createdAt: new Date(),
    },
  });

  const transformToApiPayload = (data: EnrollFormData) => {
    let source: Sources;
    switch (data.source) {
      case "Instagram":
        source = Sources.Instagram;
        break;
      case "Facebook":
        source = Sources.Facebook;
        break;
      case "Linkedin":
        source = Sources.LinkedIn;
        break;
      case "Youtube":
        source = Sources.YouTube;
        break;
      default:
        source = Sources.Other;
    }

    let level: Level;
    switch (data.level.toLowerCase()) {
      case "beginner":
        level = Level.Beginner;
        break;
      case "intermediate":
        level = Level.Intermediate;
        break;
      case "advanced":
        level = Level.Advanced;
        break;
      default:
        level = Level.Beginner;
    }

    return {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      level: level,
      hasExperience: data.hasExperience,
      goal: data.goal || "",
      source: source,
      notes: data.notes || "",
    };
  };

  const onSubmit = async (data: EnrollFormData) => {
    try {
      const payload = transformToApiPayload(data);
      await createCourseApplication(payload).unwrap();
      toast.success(
        locale === "en"
          ? "Application submitted successfully!"
          : "تم إرسال الطلب بنجاح!",
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error(error as string);
    }
  };

  const handleNext = async () => {
    if (currentStep === stepsEnroll.length - 1) {
      await form.handleSubmit(onSubmit)();
      return;
    }

    const currentStepConfig = stepsEnroll[currentStep];
    if (currentStepConfig.fields?.length) {
      const isValid = await form.trigger(currentStepConfig.fields, {
        shouldFocus: true,
      });
      if (!isValid) return;
    }
    setCurrentStep((s) => Math.min(stepsEnroll.length - 1, s + 1));
  };

  if (isSubmitted) {
    return <SuccessScreen />;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-5">
      <AnimatedStepper
        allowClickNavigation={!isLoading}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        steps={stepsEnroll.map((step) => ({
          ...step,
          label: locale === "ar" ? step.labelAr : step.labelEn,
          content:
            typeof step.content === "function"
              ? step.content(form)
              : step.content,
        }))}
      />

      <div className="flex justify-between pt-4">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          variant="outline"
          className="rounded-full"
        >
          {locale === "en" ? "Previous" : "السابق"}
        </Button>
        <Button onClick={handleNext} className="rounded-full">
          {currentStep === stepsEnroll.length - 1
            ? locale === "en"
              ? "Complete"
              : "اكتمال"
            : locale === "en"
              ? "Continue"
              : "متابعة"}
        </Button>
      </div>
    </div>
  );
};

export default FormEnroll;
