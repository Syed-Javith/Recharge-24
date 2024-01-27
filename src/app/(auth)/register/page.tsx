import RegisterForm from "@/components/forms/RegisterForm";
import { getAuthSession } from "@/lib/auth";
import { FC } from "react";
interface pageProps {}
const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="flex justify-center">
      <div className="max-w-[550px] my-4">
        <RegisterForm/>
      </div>
      </div>
  );
};

export default page;
