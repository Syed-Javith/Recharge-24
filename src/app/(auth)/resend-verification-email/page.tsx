import ResendVerificationForm from "@/components/forms/ResendVerificationwordForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[550px] my-4">
        <ResendVerificationForm />
      </div>
    </div>
  );
};

export default page;
