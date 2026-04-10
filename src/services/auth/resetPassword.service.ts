"use client";

import { useResetPasswordMutation } from "@/redux/apis/authApi";
import { ResetPasswordFormSchema } from "@/validation/auth/resetPassword.schema";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { setAccessToken, setRefreshToken } from "@/utils/cookies";

export const useResetPasswordService = () => {
  const [reset] = useResetPasswordMutation();
  const t = useTranslations("resetPassword");

  const resetPassword = async (data: ResetPasswordFormSchema) => {
    try {
      const res = await reset({
        email: data.email,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword,
      }).unwrap();

      if (res?.accessToken) {
        setAccessToken(res.accessToken);
      }

      if (res?.refreshToken) {
        setRefreshToken(res.refreshToken);
      }

      toast.success(t("success"));
      return res;
    } catch (error: any) {
      toast.error(error?.data?.message || t("error"));
      throw error;
    }
  };

  return {
    resetPassword,
  };
};
