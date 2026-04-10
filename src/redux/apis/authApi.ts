import {
  ApiResponse,
  LoginPayload,
  LogoutStatus,
  refreshAccessTokenPayload,
  refreshAccessTokenStatus,
  RegisterPayload,
  resendVerifyCodePayload,
  resendVerifyCodeStatus,
  resetPasswordPayload,
  ResetPasswordStatus,
  sendResetCodePayload,
  sendResetCodeStatus,
  verifyResetCodePayload,
  verifyResetCodeStatus,
} from "@/types/authType";
import { api } from "../baseApi";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<ApiResponse, LoginPayload>({
      query: (body) => ({
        url: `/api/v1/auth/logIn`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Register
    register: builder.mutation<ApiResponse, RegisterPayload>({
      query: (body) => ({
        url: `/api/v1/auth/signUp`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Logout
    logout: builder.mutation<LogoutStatus, void>({
      query: () => ({
        url: `/api/v1/auth/logout`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Refresh Access Token
    refreshAccessToken: builder.mutation<
      refreshAccessTokenStatus,
      refreshAccessTokenPayload
    >({
      query: (body) => ({
        url: `/api/v1/auth/refresh`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Verify Reset Code
    verifyResetCode: builder.mutation<
      verifyResetCodeStatus,
      verifyResetCodePayload
    >({
      query: (body) => ({
        url: "/api/v1/forgetPassword/verifyResetCode",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Reset Verify Code
    resendVerifyCode: builder.mutation<
      resendVerifyCodeStatus,
      resendVerifyCodePayload
    >({
      query: (body) => ({
        url: "/api/v1/forgetPassword/resendResetCode",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Send Reset Code
    sendResetCode: builder.mutation<sendResetCodeStatus, sendResetCodePayload>({
      query: (body) => ({
        url: "/api/v1/forgetPassword/sendResetCode",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),

    // Reset Password
    resetPassword: builder.mutation<ResetPasswordStatus, resetPasswordPayload>({
      query: (body) => ({
        url: "/api/v1/forgetPassword/resetPassword",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshAccessTokenMutation,
  useVerifyResetCodeMutation,
  useResendVerifyCodeMutation,
  useSendResetCodeMutation,
  useResetPasswordMutation,
} = authApi;
