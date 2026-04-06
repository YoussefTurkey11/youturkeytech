import { z } from "zod";

export enum Level {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export const levelStepSchema = z.object({
  level: z.nativeEnum(Level),
});

export type LevelStepData = z.infer<typeof levelStepSchema>;
