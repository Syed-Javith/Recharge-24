import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { getAccessJwtSecretKey } from "./utils";
import { cookies } from "next/headers";

interface UserJwtPayload extends JWTPayload {
  iat: number;
  exp: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const getAuthSession = async () => {
  try {
    const cookie = cookies().get("token");
    if (cookie) {
      const session_data = await verifyAuth(cookie?.value);
      if (session_data) {
        // console.log(session_data);
        return session_data;
      }
      return "";
    }
    return "";
  } catch (err) {
    console.log(err);
    return "";
  }
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
