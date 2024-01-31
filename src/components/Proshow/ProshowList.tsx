import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import { getAuthSession } from "@/lib/auth";
import DialogBox from "../DialogBox";
import ProShowCard from "./ProShowCard";

interface ProshowListProps { }

const ProshowList: FC<ProshowListProps> = async ({ }) => {
  const session = await getAuthSession();
  if (!session) {
    return <DialogBox />;
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in");
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);

  return (
    <div className="md:max-w-[1300px] sm:max-w-[90%] m-auto p-4">
      <h1 className="text-4xl text-center mt-4 mb-8">Proshows</h1>
      {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
        <div className="flex md:flex-row flex-col gap-12 items-center justify-center">
        {proshows.length > 0 &&
          proshows.map((proshow) => (
            <ProShowCard proshow={proshow} is_rec={is_rec} />
          ))}
          </div>
      </div>
    // </div>
  );
};

export default ProshowList;
