export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  role: "admin" | "employee";
  position: string;
  jobId: number;
  hireDate: string;
};

export type UpdateUserPayload = {
  name: string;
  email: string;
  phone: string;
  password?: string;
  passwordConfirmation?: string;
  position?: string;
  jobId: number;
};

export type UpdateMyPasswordPayload = {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export type createUserPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  position?: string;
  jobId: number;
};

export type updateUserRolePayload = {
  id: string;
  role: "admin" | "employee";
};
