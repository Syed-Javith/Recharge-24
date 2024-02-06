import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import "./spotlight.css"

interface ProshowSectionProps { }

const ProshowSection: FC<ProshowSectionProps> = async ({ }) => {
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);

  return (

    <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
      <div className="flex gap-4 overflow-y-scroll">
        <div className="section-fluid-main">
          <div className="section-row">
           <SpotlightCard />
           <SpotlightCard />
            <SpotlightCard />
            <SpotlightCard />
            <SpotlightCard />
            <SpotlightCard />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProshowSection;