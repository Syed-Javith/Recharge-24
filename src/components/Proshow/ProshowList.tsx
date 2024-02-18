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
      <div className= {`${titleFont.className}  max-w-[1300px] m-auto p-5 md:10`}>
        <h2  className={` ${titleFont.className} ${styles.fastFlicker} flex justify-center items-center mt-6 text-2xl`}>INSTRUCTIONS</h2>
        <ol className= "md:ml-20 md:w-[70vw] w-[90vw] ml-auto mt-4">
        <li className="pl-4 sm:pl-0 mb-2 ">1.Participants of Recharge 2024 must carry their institution’s ID along with any of their government issued ID cards on the days of the fest (Aadhaar Card / PAN Card / Driving License, etc.)</li>
        <li className="pl-4 sm:pl-0 mb-2">2.Participants are required to have their registration QR codes with them at all times.</li>
        <li className="pl-4 sm:pl-0 mb-2">3.Participants must wear their wristband at all times during the day and can only take it off after the conclusion of the proshow events.</li>
        <li className="pl-4 sm:pl-0 mb-2">4.Participants are prohibited from bringing alcohol, cigarettes and other narcotic substances to the fest. If found, the person will be evicted from the fest immediately and their passes will be canceled.</li>
        <li className="pl-4 sm:pl-0 mb-2">5.The Management is not responsible for any loss of personal belongings of the participants.</li>
        <li className="pl-4 sm:pl-0 mb-2">6.Participants will be denied entry if they do not report to the registration desks before the gate entry deadline.</li>
        </ol>
        <h2  className={` ${titleFont.className} ${styles.fastFlicker} flex justify-center items-center mt-6 text-2xl pl-4`}>NOTE: Proshow tickets are non-transferable and non-refundable.</h2>
      </div>
    </div>
  );
};

export default ProshowList;
