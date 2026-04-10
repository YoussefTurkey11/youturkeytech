"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import {
  setToken,
  setUser,
  clearAuth,
  setAuthInitialized,
} from "@/redux/slices/authSlice";
import { usePathname } from "next/navigation";
import { getAccessToken } from "@/utils/cookies";
import { useLazyGetMyDataQuery } from "@/redux/apis/userApi";

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const [getMe] = useLazyGetMyDataQuery();

  useEffect(() => {
    const initAuth = async () => {
      try {
        // 1️⃣ read token from cookie
        const token = getAccessToken();

        if (!token) {
          dispatch(setAuthInitialized(true));
          return;
        }

        // 2️⃣ save token in redux
        dispatch(setToken(token));

        // 3️⃣ get current user
        const user = await getMe().unwrap();

        // 4️⃣ save user
        dispatch(setUser(user));
      } catch (error) {
        dispatch(clearAuth());
      } finally {
        // 5️⃣ auth ready
        dispatch(setAuthInitialized(true));
      }
    };

    initAuth();
  }, [dispatch, getMe, pathname]);

  return <>{children}</>;
};

export default AuthInitializer;
