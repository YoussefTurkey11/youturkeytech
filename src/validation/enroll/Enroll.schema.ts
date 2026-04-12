import { z } from "zod";

export enum Level {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export enum Status {
  Pending = "pending",
  Reviewed = "reviewed",
  Accepted = "accepted",
  Rejected = "rejected",
}

export const enrollSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone is required")
    .min(10, "Phone number must be at least 10 digits"),

  level: z.nativeEnum(Level, {
    message: "Please select your level",
  }),

  hasExperience: z.boolean(),

  goal: z.string().optional(),
  notes: z.string().optional(),

  source: z.string().min(1, "Please tell us how you heard about us"),

  status: z.nativeEnum(Status),

  couponCode: z.string().optional(),

  createdAt: z.date(),
});

export type EnrollFormData = z.infer<typeof enrollSchema>;
