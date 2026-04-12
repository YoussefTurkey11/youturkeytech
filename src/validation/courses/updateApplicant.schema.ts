import { z } from "zod";
import { Status } from "@/validation/enroll/Enroll.schema";

export const applicantSchema = z.object({
  status: z.nativeEnum(Status),
});

export type ApplicantFormSchema = z.infer<typeof applicantSchema>;
