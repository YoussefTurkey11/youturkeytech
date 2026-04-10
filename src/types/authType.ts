import { User } from "./userType";

export type ApiResponse = {
  message: string;
  data: User;
  accessToken?: string;
  refreshToken?: string;
  status?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  position?: string;
  jobId?: number;
};

export type LogoutStatus = {
  message: string;
};

export type refreshAccessTokenStatus = {
  accessToken: string;
};

export type refreshAccessTokenPayload = {
  refreshToken: string;
};

export type verifyResetCodeStatus = {
  message: string;
};

export type verifyResetCodePayload = {
  resetCode: string;
};

export type resendVerifyCodeStatus = {
  message: string;
};

export type resendVerifyCodePayload = {
  email: string;
};

export type sendResetCodeStatus = {
  message: string;
};

export type sendResetCodePayload = {
  email: string;
};

export type ResetPasswordStatus = {
  message: string;
  accessToken?: string;
  refreshToken?: string;
};

export type resetPasswordPayload = {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
};
