import { z } from "zod";

export const verifyOTPSchema = (t: (key: string) => string) =>
  z.object({
    resetCode: z.string().length(6, t("validation.otpLength")),
  });

export type VerifyOTPFormSchema = z.infer<ReturnType<typeof verifyOTPSchema>>;
