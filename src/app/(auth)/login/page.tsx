import LoginForm from "@/components/forms/LoginForm";
import { FC } from "react";
interface pageProps { }

const page: FC<pageProps> = async ({ }) => {
  return (
      <LoginForm />
  );
};

export default page;
