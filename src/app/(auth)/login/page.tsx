import LoginForm from "@/components/forms/LoginForm";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { FC } from "react";
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="flex justify-center">
      <div className="max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
