import { z } from "zod";

export const userSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t("validation.name")),
    email: z.string().email(t("validation.email")),
    phone: z.string().optional(),
    active: z.boolean().optional(),
    role: z.string().optional(),
    position: z.string().optional(),
  });

export type UserFormSchema = z.infer<ReturnType<typeof userSchema>>;
