import { Level, Status } from "@/validation/enroll/Enroll.schema";

export enum Sources {
  YouTube = "Instagram",
  Instagram = "Facebook",
  Facebook = "LinkedIn",
  LinkedIn = "Friend",
  Other = "Other",
}

export type coursePayload = {
  fullName: string;
  email: string;
  phone: string;
  level: Level;
  hasExperience: boolean;
  goal: string;
  source: Sources;
  notes: string;
};

export type courseStatus = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  level: Level;
  hasExperience: boolean;
  goal: string;
  source: Sources;
  notes: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
};

export type updateCourseStatusPayload = {
  id: string;
  status: Status;
};
