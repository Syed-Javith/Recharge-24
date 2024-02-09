"use client";
import { ProShow } from "@/types/models";
import ProShowCard from "./ProShowCard";
import styles from './proshow.module.css';
import localFont from 'next/font/local'
import Neon from "../Text/Neon";


const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })


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
    <div className="min-h-screen min-w-screen brick mb-12">
      <div style={{
        paddingTop: "10vh"
      }}>
        <div >
          <div className="text-center mb-6">
            <Neon text="PROSHOWS" />
          </div>
          <div className=" flex flex-wrap items-center justify-center max-w-[95vw] m-auto">
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
