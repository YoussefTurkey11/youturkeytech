"use client";

import InputField from "../InputField";
import { UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/Enroll.schema";
import { useTranslations } from "next-intl";

const InfoStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const t = useTranslations("FormEnroll");
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("InfoStep.title")}
        </h2>
        <p className="text-muted-foreground mt-1">
          {t("InfoStep.description")}
        </p>
      </div>

      <InputField<EnrollFormData>
        id="fullName"
        label={t("InfoStep.fullName")}
        isRequired
        register={register}
        errors={errors}
      />
      <InputField<EnrollFormData>
        id="email"
        label={t("InfoStep.email")}
        isRequired
        register={register}
        errors={errors}
      />
      <InputField<EnrollFormData>
        id="phone"
        label={t("InfoStep.phone")}
        isRequired
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default InfoStep;
