import { z } from "zod";

export const registerSchema = (t: (key: string) => string) =>
  z
    .object({
      name: z.string().min(1, t("validation.nameRequired")),
      email: z.string().email(t("validation.emailInvalid")),
      phone: z
        .string()
        .min(10, t("validation.phoneInvalid"))
        .max(15, t("validation.phoneInvalid")),
      password: z
        .string()
        .min(6, t("validation.passwordInvalid"))
        .max(30, t("validation.passwordInvalid")),
      passwordConfirmation: z
        .string()
        .min(6, t("validation.passwordInvalid"))
        .max(30, t("validation.passwordInvalid")),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: t("validation.passwordConfirmationInvalid"),
      path: ["passwordConfirmation"],
    });

export type RegisterFormSchema = z.infer<ReturnType<typeof registerSchema>>;
