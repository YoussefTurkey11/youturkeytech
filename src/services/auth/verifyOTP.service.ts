"use client";

import { useVerifyResetCodeMutation } from "@/redux/apis/authApi";
import { VerifyOTPFormSchema } from "@/validation/auth/verifyOTP.schema";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const useVerifyOTPService = () => {
  const [verifyOTP] = useVerifyResetCodeMutation();
  const t = useTranslations("verifyOTP");
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const verifyCode = async (data: VerifyOTPFormSchema) => {
    try {
      const res = await verifyOTP({
        resetCode: data.resetCode,
      }).unwrap();

      toast.success(t("validation.verificationSuccess"));
      router.push(
        `/${locale}/resetPassword?email=${encodeURIComponent(email as string)}`,
      );
      return res;
    } catch (error: any) {
      toast.error(error?.data?.message || t("validation.verificationFailed"));
      throw error;
    }
  };

  return {
    verifyCode,
  };
};
