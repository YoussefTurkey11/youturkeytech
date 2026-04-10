import { z } from "zod";

export const forgotPasswordSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email(t("validation.emailInvalid")),
  });

export type ForgotPasswordFormSchema = z.infer<
  ReturnType<typeof forgotPasswordSchema>
>;
