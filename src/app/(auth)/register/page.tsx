import RegisterForm from "@/components/forms/RegisterForm";
import { FC } from "react";
interface pageProps { }
const page: FC<pageProps> = async ({ }) => {
  return (
    <RegisterForm />
  );
};

export default page;
