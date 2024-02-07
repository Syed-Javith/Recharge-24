"use client"
import { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import "./spotlight.css"
import localFont from "next/font/local";

interface ProshowSectionProps { }
const SketchFont = localFont({ src: '../../../../public/fonts/Mexcellent.ttf' })


const ProshowSection: FC<ProshowSectionProps> = ({ }) => {

  return (

    <div className="min-h-screen">
      <div className={SketchFont.className}>
        <div className="pro"><b>P<span>RO</span>SH<span>O</span>W</b></div>
      </div>
      <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
        <div className="flex gap-4 overflow-y-scroll">
          <div className="section-fluid-main">
            <div className="section-row">
              <SpotlightCard />
              <SpotlightCard />
              <SpotlightCard />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProshowSection;