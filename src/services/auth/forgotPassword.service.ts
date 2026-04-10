"use client";
import { useRouter } from "@/i18n/navigation";
import { useSendResetCodeMutation } from "@/redux/apis/authApi";
import { ForgotPasswordFormSchema } from "@/validation/auth/forgotPassword.schema";
import { toast } from "sonner";

export const useForgotPasswordService = () => {
  const [email] = useSendResetCodeMutation();
  const router = useRouter();

  const emailUser = async (data: ForgotPasswordFormSchema) => {
    try {
      const res = await email({
        email: data.email,
      }).unwrap();

      toast.success(`t("validation.emailSent")`);
      router.push(`/verifyOTP?email=${encodeURIComponent(data.email)}`);
      return res;
    } catch (error: any) {
      toast.error(error?.data?.error?.message ?? `t("validation.emailFailed")`);
      throw error;
    }
  };

  return {
    emailUser,
  };
};
