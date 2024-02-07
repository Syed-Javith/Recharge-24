"use client"
import { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import Style from "./spotlight.module.css"
import localFont from "next/font/local";

interface ProshowSectionProps { }
const SketchFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })


const ProshowSection: FC<ProshowSectionProps> = ({ }) => {

  return (
    <>
      <div className="min-h-screen">
        <div className={SketchFont.className}>
          <div className={Style.pro}><b>P<span>RO</span>SH<span>O</span>W</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={Style.sectionfluidmain}>
              <div className={Style.sectionrow}>
                <SpotlightCard num={1} celeb="Andrea" />
                <SpotlightCard num={2} celeb="Andrea" />
                <SpotlightCard num={3} celeb="Andrea" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className={SketchFont.className}>
          <div className={Style.pro}><b>S<span>PO</span>TL<span>IG</span>HT</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={Style.sectionfluidmain}>
              <div className={Style.sectionrow}>
                <SpotlightCard num={1} celeb="Andrea" />
                <SpotlightCard num={2} celeb="Andrea" />
                <SpotlightCard num={3} celeb="Andrea" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProshowSection;