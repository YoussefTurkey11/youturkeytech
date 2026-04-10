import { z } from "zod";

export const resetPasswordSchema = (t: (key: string) => string) =>
  z
    .object({
      email: z.string().email(t("validation.emailInvalid")),
      newPassword: z.string().min(6, t("validation.passwordInvalid")),
      confirmNewPassword: z.string().min(6, t("validation.confirmNewPassword")),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: t("validation.passwordConfirmationInvalid"),
      path: ["confirmNewPassword"],
    });

export type ResetPasswordFormSchema = z.infer<
  ReturnType<typeof resetPasswordSchema>
>;
