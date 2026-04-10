"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOTPService } from "@/services/auth/verifyOTP.service";
import {
  VerifyOTPFormSchema,
  verifyOTPSchema,
} from "@/validation/auth/verifyOTP.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";

const VerifyOTP = () => {
  const { verifyCode } = useVerifyOTPService();
  const t = useTranslations("verifyOTP");

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOTPFormSchema>({
    resolver: zodResolver(verifyOTPSchema(t)),
    defaultValues: {
      resetCode: "",
    },
  });

  const onSubmit = async (data: VerifyOTPFormSchema) => {
    try {
      await verifyCode(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-ring/30 rounded-lg p-7 space-y-5 bg-card"
    >
      <Field>
        <Controller
          name="resetCode"
          control={control}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup className="mx-auto" dir="ltr">
                <InputOTPSlot index={0} className="sm:p-7 sm:text-2xl" />
                <InputOTPSlot index={1} className="sm:p-7 sm:text-2xl" />
                <InputOTPSlot index={2} className="sm:p-7 sm:text-2xl" />
                <InputOTPSlot index={3} className="sm:p-7 sm:text-2xl" />
                <InputOTPSlot index={4} className="sm:p-7 sm:text-2xl" />
                <InputOTPSlot index={5} className="sm:p-7 sm:text-2xl" />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
      </Field>

      {/* error */}
      {errors.resetCode && (
        <p className="text-red-500 text-sm">{errors.resetCode.message}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {t("sendCode")}
      </Button>
    </form>
  );
};

export default VerifyOTP;
