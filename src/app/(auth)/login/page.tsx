import LoginForm from "@/components/forms/LoginForm";
import { FC } from "react";
interface pageProps { }

const page: FC<pageProps> = async ({ }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
