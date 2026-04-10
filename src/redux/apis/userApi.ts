import { ApiResponse } from "@/types/authType";
import { api } from "../baseApi";
import {
  createUserPayload,
  UpdateMyPasswordPayload,
  UpdateUserPayload,
  updateUserRolePayload,
  User,
} from "@/types/userType";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Users
    getAllUsers: builder.query<User[], void>({
      query: () => `/api/v1/adminDashboard`,
      providesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Get Specific User
    getSpecificUser: builder.query<User, string>({
      query: (id) => `/api/v1/adminDashboard/${id}`,
      providesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Get My Data
    getMyData: builder.query<User, void>({
      query: () => `/api/v1/userDashboard/getMyData`,
      providesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Update My Data
    updateMyData: builder.mutation<User, UpdateUserPayload>({
      query: (body) => ({
        url: `/api/v1/userDashboard/updateMyData`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Change My Password
    changeMyPassword: builder.mutation<ApiResponse, UpdateMyPasswordPayload>({
      query: (body) => ({
        url: `/api/v1/updatePassword/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Create User
    createUser: builder.mutation<User, createUserPayload>({
      query: (body) => ({
        url: `/api/v1/adminDashboard`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Update User Role
    updateUserRole: builder.mutation<User, updateUserRolePayload>({
      query: ({ id, role }) => ({
        url: `/api/v1/adminDashboard/${id}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Deactivate User
    deactivateUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/api/v1/adminDashboard/deactivate/${id}`,
        method: "PATCH",
        body: { active: false },
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    // Activate User
    activateUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/api/v1/adminDashboard/activate/${id}`,
        method: "PATCH",
        body: { active: true },
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSpecificUserQuery,
  useGetMyDataQuery,
  useLazyGetMyDataQuery,
  useUpdateMyDataMutation,
  useChangeMyPasswordMutation,
  useCreateUserMutation,
  useUpdateUserRoleMutation,
  useDeactivateUserMutation,
  useActivateUserMutation,
} = userApi;
