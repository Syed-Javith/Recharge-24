import { JWTPayload, jwtVerify } from "jose";
import { getAccessJwtSecretKey } from "./utils";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export interface UserJwtPayload extends JWTPayload {
  iat: number;
  exp: number;
  first_name: string;
  last_name: string;
  id: string;
}

export const getCookie = () => {
  const cookie = cookies().get("token");
  return cookie;
};

export const getAuthSessionHelper = async (cookie?: RequestCookie) => {
  try {
    if (cookie) {
      const session_data = await verifyAuth(cookie?.value);
      if (session_data) {
        // console.log(session_data);
        return session_data;
      }
      return null;
    }
    return null;
  } catch (err) {
    // console.log(err);
    return null;
  }
};

export const getAuthSession = () => {
  return getAuthSessionHelper(getCookie());
};

export const getParsedCookies = () => {
  return cookies().toString();
};

export const verifyAuth = async (token: string) => {
  try {
    const result = await jwtVerify(
      token,
      new TextEncoder().encode(getAccessJwtSecretKey())
    );
    return result.payload as UserJwtPayload;
  } catch (err) {
    throw err;
  }
};
