"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import AnimatedStepper from "../../ui/smoothui/animated-stepper";
import { stepsEnroll } from "./stepsEnroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnrollFormData,
  enrollSchema,
  Level,
  Status,
} from "@/validation/Enroll.schema";
import SuccessScreen from "./steps/SuccessScreen";

const FormEnroll = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      heardFrom: "",
      status: Status.Pending,
      couponCode: "",
      createdAt: new Date(),
    },
  });

  const onSubmit = async (data: EnrollFormData) => {
    try {
      console.log("Submitting enrollment data:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
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
    return <SuccessScreen formData={form.getValues()} />;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-5">
      <AnimatedStepper
        allowClickNavigation
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        steps={stepsEnroll.map((step) => ({
          ...step,
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
          Previous
        </Button>
        <Button onClick={handleNext} className="rounded-full">
          {currentStep === stepsEnroll.length - 1 ? "Complete" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default FormEnroll;
