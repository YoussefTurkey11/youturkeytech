import { z } from "zod";

export const infoStepSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
});

export type InfoStepData = z.infer<typeof infoStepSchema>;
