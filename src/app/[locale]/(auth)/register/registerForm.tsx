"use client";
import FieldInputForm from "@/components/share/FieldInputForm";
import { Button } from "@/components/ui/button";
import { useRegisterService } from "@/services/auth/register.service";
import {
  RegisterFormSchema,
  registerSchema,
} from "@/validation/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { registerUser } = useRegisterService();
  const router = useRouter();
  const t = useTranslations("Register");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema(t)),
    mode: "onSubmit",
  });

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await registerUser(data);
      return router.push("/admin");
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
        label={t("form.name")}
        id="name"
        type="text"
        placeholder={t("form.namePlaceholder")}
        register={register}
        errors={errors}
      />

      <FieldInputForm
        label={t("form.email")}
        id="email"
        type="email"
        placeholder={t("form.emailPlaceholder")}
        register={register}
        errors={errors}
      />

      <FieldInputForm
        label={t("form.phone")}
        id="phone"
        type="phone"
        placeholder={t("form.phonePlaceholder")}
        register={register}
        errors={errors}
      />

      <FieldInputForm
        label={t("form.password")}
        id="password"
        type="password"
        placeholder="*******"
        register={register}
        errors={errors}
      />

      <FieldInputForm
        label={t("form.passwordConfirmation")}
        id="passwordConfirmation"
        type="password"
        placeholder="*******"
        register={register}
        errors={errors}
      />

      <Button type="submit" className={"w-full"} disabled={isSubmitting}>
        {t("title")}
      </Button>
    </form>
  );
};

export default RegisterForm;
