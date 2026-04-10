"use client";

import FieldInputForm from "@/components/share/FieldInputForm";
import { Button } from "@/components/ui/button";
import { useResetPasswordService } from "@/services/auth/resetPassword.service";
import {
  ResetPasswordFormSchema,
  resetPasswordSchema,
} from "@/validation/auth/resetPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPasswordForm = () => {
  const { resetPassword } = useResetPasswordService();
  const router = useRouter();
  const t = useTranslations("resetPassword");
  const locale = useLocale();

  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");

  if (!emailFromUrl) {
    return (
      <div className="text-center text-red-600 p-8">
        <h2 className="text-2xl font-bold mb-4">{t("missingEmail")}</h2>
        <Button onClick={() => router.push(`/${locale}/forgotPassword`)}>
          {t("requestAgain")}
        </Button>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordSchema(t)),
    defaultValues: {
      email: emailFromUrl,
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormSchema) => {
    try {
      await resetPassword(data);
      router.push(`/${locale}/login`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-ring/30 rounded-lg p-7 space-y-5 bg-card"
    >
      <Alert className="max-w-md bg-background">
        <CheckCircle2Icon />
        <AlertTitle className="flex">{t("emailVerified")}</AlertTitle>
        <AlertDescription className="flex">{emailFromUrl}</AlertDescription>
      </Alert>

      <FieldInputForm
        label={t("form.newPassword")}
        id="newPassword"
        type="password"
        placeholder={t("form.newPasswordPlaceholder")}
        register={register}
        errors={errors}
      />

      <FieldInputForm
        label={t("form.confirmNewPassword")}
        id="confirmNewPassword"
        type="password"
        placeholder={t("form.confirmNewPasswordPlaceholder")}
        register={register}
        errors={errors}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {t("submit")}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
