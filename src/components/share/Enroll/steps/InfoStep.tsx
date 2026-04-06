"use client";

import InputField from "../InputField";
import { UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/Enroll.schema";

const InfoStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Let's get started
        </h2>
        <p className="text-muted-foreground mt-1">
          Fill in your basic info to reserve your spot.
        </p>
      </div>

      <InputField<EnrollFormData>
        id="fullName"
        label="Full Name"
        isRequired
        register={register}
        errors={errors}
      />
      <InputField<EnrollFormData>
        id="email"
        label="Email Address"
        isRequired
        register={register}
        errors={errors}
      />
      <InputField<EnrollFormData>
        id="phone"
        label="Phone Number"
        isRequired
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default InfoStep;
