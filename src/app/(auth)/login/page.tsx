"use client";
import LoginForm from "@/components/LoginForm";
import { FC } from "react";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
