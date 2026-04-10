import { z } from "zod";

export const loginSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email(t("validation.emailInvalid")),
    password: z
      .string()
      .min(6, t("validation.passwordInvalid"))
      .max(30, t("validation.passwordInvalid")),
  });

export type LoginFormSchema = z.infer<ReturnType<typeof loginSchema>>;
