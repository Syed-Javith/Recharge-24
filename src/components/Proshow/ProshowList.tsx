import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import { getAuthSession } from "@/lib/auth";
import DialogBox from "../DialogBox";
import ProShowGroup from "./ProShowGroup";
import {shows} from "./proshowdata"
import ProShowGroup2 from "./ProshowGroup2";

interface ProshowListProps { }

const ProshowList: FC<ProshowListProps> = async ({ }) => {
  const session = await getAuthSession();
  if (!session) {
    return <DialogBox />;
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in") || false;
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  // const proshows: ProShow[] = await res.json();
  // console.log(proshows);
  return (
    <div>
      <h1 className="text-4xl  mt-10 mb-10 font-bold text-white text-center">Proshows list</h1>
      <div className=" flex flex-wrap items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" > </div>
        <ProShowGroup2 proshows={shows} is_rec={is_rec} />
      </div>
    </div>

  );
};

export default ProshowList;
