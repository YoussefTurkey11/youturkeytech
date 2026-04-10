"use client";
import FieldInputForm from "@/components/share/FieldInputForm";
import { Button } from "@/components/ui/button";
import { useLoginService } from "@/services/auth/login.service";
import { LoginFormSchema, loginSchema } from "@/validation/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { loginUser } = useLoginService();
  const router = useRouter();
  const t = useTranslations("Login");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema(t)),
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      await loginUser(data);
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
        label={t("form.email")}
        id="email"
        type="email"
        placeholder={t("form.emailPlaceholder")}
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

      <Button type="submit" className={"w-full"} disabled={isSubmitting}>
        {t("title")}
      </Button>
    </form>
  );
};

export default LoginForm;
