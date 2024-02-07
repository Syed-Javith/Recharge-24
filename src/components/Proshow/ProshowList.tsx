"use client";
import { ProShow } from "@/types/models";
import ProShowCard from "./ProShowCard";
import "./style.css";
import localFont from 'next/font/local'


const SketchFont = localFont({ src: '../../../public/fonts/Mexcellent.ttf' })

interface ProshowListProps {
  is_rec: boolean;
  proshows: ProShow[];
  isDayPremium: boolean;
  isPremiumCombo: boolean;
  isStandardCombo: boolean;
  datePremium: number[];
}

const ProshowList = async ({
  is_rec,
  proshows,
  isDayPremium,
  isPremiumCombo,
  isStandardCombo,
  datePremium,
}: ProshowListProps) => {
  return (
    <div className="min-h-screen min-w-screen brick">
      <div style={{
        paddingTop: "10vh"
      }}>
        <div >
          <div className={SketchFont.className}>
            <h1 className="text-6xl  mt-10 mb-10 text-white text-center fast-flicker" >
              Proshows
            </h1>
          </div>

          <div className=" flex flex-wrap items-center justify-center md:max-w-[80vw] max-w-[100vw] m-auto">
            {proshows?.length > 0 &&
              proshows.map((proshow) => {
                return (
                  !is_rec ?
                    <ProShowCard
                      key={proshow.id}
                      proshow={proshow}
                      is_rec={is_rec}
                      isDayPremium={isDayPremium}
                      isPremiumCombo={isPremiumCombo}
                      isStandardCombo={isStandardCombo}
                      datePremium={datePremium}
                    /> : ((!proshow.premium && !proshow.combo) || (proshow.premium && proshow.combo)) ? <></> : <ProShowCard
                      key={proshow.id}
                      proshow={proshow}
                      is_rec={is_rec}
                      isDayPremium={isDayPremium}
                      isPremiumCombo={isPremiumCombo}
                      isStandardCombo={isStandardCombo}
                      datePremium={datePremium}
                    />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProshowList;
