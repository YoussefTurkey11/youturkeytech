"use client";
import { useLoginMutation } from "@/redux/apis/authApi";
import { setUser } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { setAccessToken, setRefreshToken } from "@/utils/cookies";
import { LoginFormSchema } from "@/validation/auth/login.schema";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const useLoginService = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const t = useTranslations("Login");

  const loginUser = async (data: LoginFormSchema) => {
    try {
      const res = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      setAccessToken(res.accessToken as string);
      setRefreshToken(res.refreshToken as string);
      dispatch(setUser(res));
      toast.success(t("form.success"));
      return res;
    } catch (error: any) {
      toast.error(error?.data?.error?.message ?? t("form.loginFailed"));
      throw error;
    }
  };

  return {
    loginUser,
  };
};
