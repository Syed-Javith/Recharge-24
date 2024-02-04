"use client";
import { ProShow } from "@/types/models";
import BuyProShowButton from "./BuyProShowButton";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/Card";
import { FC, useState } from "react";

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
  const [isButton, setIsButton] = useState<string>("visible");
  return (
    <div className="h-200 w-72 p-3" onMouseLeave={() => setIsButton("visible")} onMouseOver={() => setIsButton("hidden")}>
      <Card className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="group relative cursor-pointer items-center  justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-200 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={proshow.image}
              alt=""
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <CardTitle className="font-dmserif relative bottom-0 left-0 mb-2 ml-2 md:text-3xl text-3xl text-white-600">
              {proshow.name}{" "}
            </CardTitle>

            <div className={"sm:hidden " + isButton}>
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
                        !proshow.combo) || (datePremium[proshow.day-1]==1 || isPremiumCombo || isStandardCombo) 
                    }
                    is_registered={proshow.is_registered}
                    label="standard"
                    proshowid={proshow.id}
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
                        proshow.combo)  || (isPremiumCombo || isDayPremium)
                    }
                    is_registered={proshow.is_registered}
                    label="standard combo"
                    proshowid={proshow.id}
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
                    is_registered={proshow.is_registered}
                    proshowid={proshow.id}
                  />
                )}
              </CardFooter>
            </div>
            <CardDescription className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {proshow.description?.slice(0, 120)}{" "}
            </CardDescription>

            <div className="rounded-full  px-3.5 py-2 font-com text-sm capitalize text-white ">
              price: {proshow.amount}
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
                        !proshow.combo) || (datePremium[proshow.day-1]==1 || isPremiumCombo || isStandardCombo) 
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
                        proshow.combo)  || (isPremiumCombo || isDayPremium)
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