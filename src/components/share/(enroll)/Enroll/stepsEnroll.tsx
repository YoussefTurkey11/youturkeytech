import { UseFormReturn } from "react-hook-form";
import InfoStep from "./steps/InfoStep";
import LevelStep from "./steps/levelStep";
import { EnrollFormData } from "@/validation/enroll/Enroll.schema";
import GoalStep from "./steps/goalStep";
import DetailStep from "./steps/detailStep";

type StepType = {
  labelAr: string;
  labelEn: string;
  content: (form: UseFormReturn<EnrollFormData>) => React.ReactNode;
  fields: (keyof EnrollFormData)[];
};

export const stepsEnroll: StepType[] = [
  {
    labelAr: "المعلومات",
    labelEn: "Info",
    content: (form) => <InfoStep form={form} />,
    fields: ["fullName", "email", "phone"],
  },
  {
    labelAr: "المستوى",
    labelEn: "Level",
    content: (form) => <LevelStep form={form} />,
    fields: ["level"],
  },
  {
    labelAr: "الأهداف",
    labelEn: "Goals",
    content: (form) => <GoalStep form={form} />,
    fields: ["hasExperience", "goal"],
  },
  {
    labelAr: "التفاصيل",
    labelEn: "Details",
    content: (form) => <DetailStep form={form} />,
    fields: ["source"],
  },
];
