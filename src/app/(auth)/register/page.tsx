import RegisterForm from "@/components/RegisterForm";
import { getAuthSession } from "@/lib/auth";
import { FC } from "react";
interface pageProps {}
const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();
  return (
    <div className="flex justify-center">
      <div className="max-w-[400px]">
<RegisterForm/>
      </div>
      </div>
  );
};

export default page;
