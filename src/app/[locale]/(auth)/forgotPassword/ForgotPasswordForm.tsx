"use client";
import FieldInputForm from "@/components/share/FieldInputForm";
import { Button } from "@/components/ui/button";
import { useForgotPasswordService } from "@/services/auth/forgotPassword.service";
import {
  ForgotPasswordFormSchema,
  forgotPasswordSchema,
} from "@/validation/auth/forgotPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const { emailUser } = useForgotPasswordService();
  const t = useTranslations("forgotPassword");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema(t)),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ForgotPasswordFormSchema) => {
    try {
      await emailUser(data);
      return toast.success(t("validation.emailSent"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-ring/30 rounded-lg p-7 space-y-5 bg-card"
    >
      <FieldInputForm
        label={t("form.email")}
        id="email"
        type="email"
        placeholder={t("form.emailPlaceholder")}
        register={register}
        errors={errors}
      />

      <Button type="submit" className={"w-full"} disabled={isSubmitting}>
        {t("sendCode")}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
