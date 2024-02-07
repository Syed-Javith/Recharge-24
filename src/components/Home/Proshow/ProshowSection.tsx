"use client"
import { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import "./spotlight.css"

interface ProshowSectionProps { }

const ProshowSection: FC<ProshowSectionProps> =  ({ }) => {
  function isInViewport(element : any) {
    const rect = element.getBoundingClientRect();
    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      console.log("hide");
      
    }
}

  return (

    <div onScroll={(e) => isInViewport(e.target)} className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
      <h1>Spotlight</h1>
      <div className="flex gap-4 overflow-y-scroll">
        <div className="section-fluid-main">
          <div className="section-row">
           <SpotlightCard />
           <SpotlightCard />
            <SpotlightCard />
            {/* <SpotlightCard />
            <SpotlightCard />
            <SpotlightCard /> */}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProshowSection;