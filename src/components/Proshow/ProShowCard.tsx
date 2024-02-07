"use client";
import { ProShow } from "@/types/models";
import BuyProShowButton from "./BuyProShowButton";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/Card";
import { FC, useState } from "react";
import "./style.css";
interface ProshowcardProps {
  proshow: ProShow;
  is_rec: boolean;
  isDayPremium: boolean;
  isPremiumCombo: boolean;
  isStandardCombo: boolean;
  datePremium: number[]
}

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
    <div className="h-200 w-72 p-3"
    >
      <Card className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="group relative cursor-pointer items-center  justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-200 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=""
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            <img src="/rmbg.png" alt="" className= {((proshow.premium && proshow.combo) || (proshow.premium))? "top-[-22px] left-[-110px] absolute rotate-[-45deg] z-10" : "hidden" }/>
          <div className="absolute inset-0 flex md:translate-y-[75%] translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 pt-3 ">
            <CardTitle className="font-dmserif relative bottom-0 left-0 mb-2 ml-2 title">
              <span className={((proshow.premium && proshow.combo) || (proshow.premium))? "fast-flicker uppercase text-md mb-2 text-bold" : "fast-flicker uppercase text-md mb-2 " }>{proshow.name}</span>
              <h4 className="date mt-3" >23 MARCH</h4>
            </CardTitle>

            <CardDescription className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {proshow.description?.slice(0, 120)}{" "}
            </CardDescription>
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent text-lg bg-clip-text">Unlock Proshow for just Rs.{proshow.amount}</span>

            <div className="rounded-full  px-3.5 py-2 font-com text-sm capitalize text-white ">




              <CardFooter>
                {/* 
      ===========BUY PREMIUM BUTTON===========
      Applies for both REC and Non-REC
    */}
                {proshow.premium && !proshow.combo && (

                  <BuyProShowButton
                    disabled={proshow.is_registered || isPremiumCombo}
                    label="premium"
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
                    label="standard"
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
                    label="standard combo"
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
                    label="premium combo"
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