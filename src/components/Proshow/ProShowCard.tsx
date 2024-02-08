"use client";
import { ProShow } from "@/types/models";
import BuyProShowButton from "./BuyProShowButton";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/Card";
import { FC, useState } from "react";
import styles from './proshow.module.css'
import localFont from "next/font/local";

interface ProshowcardProps {
  proshow: ProShow;
  is_rec: boolean;
  isDayPremium: boolean;
  isPremiumCombo: boolean;
  isStandardCombo: boolean;
  datePremium: number[]
}

const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const subtitleFont = localFont({ src: '../../../public/fonts/chakra.ttf' })

const ProShowCard: FC<ProshowcardProps> = ({
  proshow,
  is_rec,
  isDayPremium,
  isPremiumCombo,
  isStandardCombo,
  datePremium
}) => {
  // const [isButton, setIsButton] = useState<string>("visible");
  return (
    <div className="h-200 w-72 m-2 scale-85"
    >
      <Card className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="group relative cursor-pointer items-center  justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-200 w-72">
            {/* <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=""
            /> */}
            <img
            src={proshow.image}
            alt="proshow Image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            {/* <img src="/rmbg.png" alt="" className= {((proshow.premium && proshow.combo) || (proshow.premium))? "top-[-22px] left-[-110px] absolute rotate-[-45deg] z-10" : "hidden" }/> */}
          <div className="absolute inset-0 flex translate-y-[57%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 pt-3 ">
            <CardTitle className="font-dmserif relative bottom-0 left-0 mb-2 ml-2 title">
              <span className={((proshow.premium && proshow.combo) || (proshow.premium))? `${titleFont.className} ${styles.premiumTitle} uppercase text-md mb-2 text-bold` : `${titleFont.className} ${styles.standardTitle} uppercase text-md mb-2 ` }>{proshow.name}</span>
              <h4 className={((proshow.premium && proshow.combo) || (proshow.premium))? `${subtitleFont.className} ${styles.premiumTitle} text-sm mt-3 mb-3` : `${subtitleFont.className} ${styles.standardTitle} text-sm mt-3 mb-3` }> DAY <span className="pl-2">{proshow.day}</span></h4>
            </CardTitle>

            {/* text-sm mt-3 mb-3` */}
            {/* <CardDescription className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {proshow.description?.slice(0, 120)}{" "}
            </CardDescription> */}
            <span className= {`${subtitleFont.className} bg-gradient-to-r from-pink-500 to-yellow-500  text-lg bg-clip-text`}> Unlock Proshow for just Rs.{proshow.amount}</span>
            
          
            <div className="rounded-full  px-3.5 py-2 font-com text-sm capitalize text-white ">




              <CardFooter>
                {/* 
      ===========BUY PREMIUM BUTTON===========
      Applies for both REC and Non-REC
    */}
                {proshow.premium && !proshow.combo && (

                  <BuyProShowButton
                    disabled={proshow.is_registered || isPremiumCombo}
                    label="Premium"
                    proshowid={proshow.id}
                    is_registered={proshow.is_registered}
                  />
                )}
                {/* 
      ===========BUY STANDARD BUTTON===========
      Applies for only Non-REC
    */}
                {!is_rec && !proshow.premium && !proshow.combo && (
                  <BuyProShowButton
                    disabled={
                      (proshow.is_registered &&
                        !proshow.premium &&
                        !proshow.combo) || (datePremium[proshow.day - 1] == 1 || isPremiumCombo || isStandardCombo)
                    }
                    label="Standard"
                    proshowid={proshow.id}
                    is_registered={proshow.is_registered}
                  />
                )}
                {/* 
      ===========BUY STANDARD COMBO BUTTON===========
      Applies for both REC and Non-REC
    */}
                {!proshow.premium && proshow.combo && (
                  <BuyProShowButton
                    disabled={
                      (proshow.is_registered &&
                        !proshow.premium &&
                        proshow.combo) || (isPremiumCombo || isDayPremium)
                    }
                    label="Standard combo"
                    proshowid={proshow.id}
                    is_registered={proshow.is_registered}
                  />
                )}

                {/* 
      ===========BUY PREMIUM COMBO BUTTON===========
      Applies for only Non-REC
    */}
                {!is_rec && proshow.premium && proshow.combo && (
                  <BuyProShowButton
                    disabled={proshow.is_registered}
                    label="Premium combo"
                    proshowid={proshow.id}
                    is_registered={proshow.is_registered}
                  />
                )}
              </CardFooter>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProShowCard;