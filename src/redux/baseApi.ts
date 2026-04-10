import {
  getAccessToken,
  getRefreshToken,
  removeAuthCookie,
  setAccessToken,
} from "@/utils/cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: apiURL,
  prepareHeaders: (headers) => {
    const token = getAccessToken();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// 🔥 ReAuth logic
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  // ❗ If token expired
  if (result?.error?.status === 401) {
    console.log("Access token expired... trying refresh");

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      removeAuthCookie();
      return result;
    }

    // 🔁 Request new access token
    const refreshResult = await baseQuery(
      {
        url: "/api/v1/auth/refresh",
        method: "POST",
        body: { refreshToken },
      },
      api,
      extraOptions,
    );

    if (refreshResult?.data) {
      const newAccessToken = (refreshResult.data as any).accessToken;

      // ✅ Store the new token
      setAccessToken(newAccessToken);

      // 🔁 Retry the original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // ❌ refresh failed → logout
      removeAuthCookie();
    }
  }

  return result;
};

// ✅ api
export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Auth", "Users", "Courses"],
  refetchOnFocus: false,
  refetchOnReconnect: false,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
