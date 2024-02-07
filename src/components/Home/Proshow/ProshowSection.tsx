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
      <div className="min-h-screen">
        <div className={SketchFont.className}>
          <div className={ProshowStyle.pro}><b>P<span>RO</span>SH<span>O</span>W</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={ProshowStyle.sectionfluidmain}>
              <div className={ProshowStyle.sectionrow}>
                <SpotlightCard num={1} celeb="Anirudh" image="https://preview.redd.it/how-was-anirudhs-concert-v0-5mjzqhxjkbv91.jpg?auto=webp&s=9b0561a4c1d3efd1d8b4372435d15a6bb971b52c" />
                <SpotlightCard num={2} celeb="Anirudh" image="https://www.gethucinema.com/wp-content/uploads/2018/06/Anirudh-Ravichander-live-in-paris-hd-latest.jpg"/>
                <SpotlightCard num={3} celeb="AR Rahman" image="https://www.pinkvilla.com/stories/entertainment/what-happened-at-the-ar-rahman-concert-1242594/assets/4.jpeg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className={SketchFont.className}>
          <div className={ProshowStyle.pro}><b>S<span>PO</span>TL<span>IG</span>HT</b></div>
        </div>
        <div className="flex flex-start flex-wrap space-x-4 space-y-4 items-center justify-center">
          <div className="flex gap-4">
            <div className={ProshowStyle.sectionfluidmain}>
              <div className={ProshowStyle.sectionrow}>
                <SpotlightCard num={1} celeb="AR Rahman"  image="https://www.pinkvilla.com/stories/entertainment/what-happened-at-the-ar-rahman-concert-1242594/assets/4.jpeg"/>
                <SpotlightCard num={2} celeb="Anirudh" image="https://www.gethucinema.com/wp-content/uploads/2018/06/Anirudh-Ravichander-music-show-live-in-paris.jpg"/>
                <SpotlightCard num={3} celeb="Anirudh" image="https://i.pinimg.com/originals/f6/14/fd/f614fdfedd621f892ff17be9c340c197.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProshowSection;