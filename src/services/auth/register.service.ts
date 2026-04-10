"use client";
import { useRegisterMutation } from "@/redux/apis/authApi";
import { setUser } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { setAccessToken, setRefreshToken } from "@/utils/cookies";
import { RegisterFormSchema } from "@/validation/auth/register.schema";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useRegisterService = () => {
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const t = useTranslations("Register");
  const router = useRouter();
  const locale = useLocale();

  const registerUser = async (data: RegisterFormSchema) => {
    try {
      const res = await register({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      }).unwrap();

      setAccessToken(res.accessToken as string);
      setRefreshToken(res.refreshToken as string);
      dispatch(setUser(res.data));
      toast.success(t("validation.success"));
      router.push(`/${locale}/login`);
      return res;
    } catch (error: any) {
      toast.error(
        error?.data?.error?.message ?? t("validation.registerFailed"),
      );
      throw error;
    }
  };

  return {
    registerUser,
  };
};
