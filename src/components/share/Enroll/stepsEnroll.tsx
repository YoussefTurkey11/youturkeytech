import { UseFormReturn } from "react-hook-form";
import InfoStep from "./steps/InfoStep";
import LevelStep from "./steps/levelStep";
import { EnrollFormData } from "@/validation/Enroll.schema";
import GoalStep from "./steps/goalStep";
import DetailStep from "./steps/detailStep";

type StepType = {
  label: string;
  content: (form: UseFormReturn<EnrollFormData>) => React.ReactNode;
  fields: (keyof EnrollFormData)[];
};

export const stepsEnroll: StepType[] = [
  {
    label: "Info",
    content: (form) => <InfoStep form={form} />,
    fields: ["fullName", "email", "phone"],
  },
  {
    label: "Level",
    content: (form) => <LevelStep form={form} />,
    fields: ["level"],
  },
  {
    label: "Goals",
    content: (form) => <GoalStep form={form} />,
    fields: ["hasExperience", "goal"],
  },
  {
    label: "Details",
    content: (form) => <DetailStep form={form} />,
    fields: ["heardFrom"],
  },
];
