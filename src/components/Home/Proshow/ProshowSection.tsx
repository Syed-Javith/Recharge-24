"use client"
import { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import ProshowStyle from "./spotlight.module.css"
import localFont from "next/font/local";

interface ProshowSectionProps { }
const SketchFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })


const ProshowSection: FC<ProshowSectionProps> = ({ }) => {

  return (
    <>
      <div className="min-h-screen mt-16">
        <div className={SketchFont.className}>
          <div className={ProshowStyle.pro}><b>P<span>RO</span>SH<span>O</span>W</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={ProshowStyle.sectionfluidmain}>
              <div className={ProshowStyle.sectionrow}>
                <SpotlightCard num={1} celeb="Revealing soon" image="/revealed.png" />
                <SpotlightCard num={2} celeb="Revealing soon" image="/revealed.png"/>
                <SpotlightCard num={3} celeb="Revealing soon" image="/revealed.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen mt-16">
        <div className={SketchFont.className}>
          <div className={ProshowStyle.pro}><b>S<span>PO</span>TL<span>IG</span>HT</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={ProshowStyle.sectionfluidmain}>
              <div className={ProshowStyle.sectionrow}>
                <SpotlightCard num={1} celeb="Revealing soon"  image="/revealed.png"/>
                <SpotlightCard num={2} celeb="Revealing soon" image="/revealed.png"/>
                <SpotlightCard num={3} celeb="Revealing soon" image="/revealed.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProshowSection;