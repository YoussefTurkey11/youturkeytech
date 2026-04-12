import Cookies from "js-cookie";

export const setAccessToken = (token: string) => {
  Cookies.set("access_token", token, {
    expires: 7,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
};

export const setRefreshToken = (token: string) => {
  Cookies.set("refresh_token", token, {
    expires: 7,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
};

export const removeAuthCookie = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};

export const getAccessToken = () => {
  return Cookies.get("access_token");
};

export const getRefreshToken = () => {
  return Cookies.get("refresh_token");
};
