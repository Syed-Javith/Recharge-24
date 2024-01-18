import ProshowList from "@/components/ProshowList";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <ProshowList />
    </div>
  );
};

export default page;
