import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAccessJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length === 0) {
    throw new Error("The environment variable JWT_SECRET is not set.");
  }
  return secret;
};

let inDevEnvironment = false;
let CSRBaseUrl = "https://api.rechargefest.in/";
let SSRBaseUrl = "https://api.rechargefest.in/";

if (process && process.env.NODE_ENV === "development") {
  inDevEnvironment = true;
  CSRBaseUrl = "http://localhost:8000/";
  SSRBaseUrl = "http://127.0.0.1:8000/";
}

export { inDevEnvironment, CSRBaseUrl, SSRBaseUrl };
