"use client";
import { ProShow } from "@/types/models";
import BuyProShowButton from "./BuyProShowButton";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/Card";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface ProshowcardProps {
  proshow: ProShow;
  is_rec: boolean;
  stdDenied: boolean;
  setStdDenied: Dispatch<SetStateAction<boolean>>;
  stdDeniedDate: number,
  setStdDeniedDate: Dispatch<SetStateAction<number>>,
}

const ProShowCard: FC<ProshowcardProps> = ({
  proshow,
  is_rec,
  stdDenied,
  setStdDenied,
  stdDeniedDate,
  setStdDeniedDate,
}) => {
  const [isButton, setIsButton] = useState<string>("visible");
  if (proshow.premium && proshow.is_registered) { setStdDenied(true); setStdDeniedDate(proshow.day); };
  const [isBuyDisable , setIsBuyDisable] = useState<boolean>((proshow.day === stdDeniedDate) && stdDenied)
  console.log("show");
  console.log((proshow.day === stdDeniedDate));
  console.log(stdDenied);
  // setIsBuyDisable((proshow.day === stdDeniedDate) && stdDenied)
  console.log(isBuyDisable);
  console.log((proshow.day === stdDeniedDate) && stdDenied);
  console.log(!((proshow.day === stdDeniedDate) && stdDenied));
  
  console.log("end");

  useEffect(()=>{
  if (proshow.premium && proshow.is_registered) { setStdDenied(true); setStdDeniedDate(proshow.day); };
    setIsBuyDisable((proshow.day === stdDeniedDate) && stdDenied)
    console.log("here " + isBuyDisable);
    
  },[])

  
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
            <CardTitle className="font-dmserif relative bottom-0 left-0 mb-2 ml-2 text-3xl text-white-600 line-clamp-3">
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
                    disabled={proshow.is_registered || (stdDenied && (stdDeniedDate == proshow.day))}
                    label="premium"
                    proshowid={proshow.id}
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
                        !proshow.combo) ||
                      (stdDenied && (stdDeniedDate == proshow.day))
                    }
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
                        proshow.combo) ||
                      stdDenied 
                    }
                    label="standard combo"
                    proshowid={-1}
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
                    proshowid={-1}
                  />
                )}
              </CardFooter>
            </div>
            <CardDescription className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {proshow.description?.slice(0, 120)}{" "}
            </CardDescription>

            <div className="rounded-full  px-3.5 py-2 font-com text-sm capitalize text-white ">
              price: {proshow.amount}
              <CardFooter className="mt-2">
                {/* 
      ===========BUY PREMIUM BUTTON===========
      Applies for both REC and Non-REC
    */}
                {proshow.premium && !proshow.combo && (
                  <BuyProShowButton
                    disabled={proshow.is_registered}
                    label="premium"
                    proshowid={proshow.id}
                  />
                )}
                {/* 
      ===========BUY STANDARD BUTTON===========
      Applies for only Non-REC
    */}
                {!is_rec && !proshow.premium && !proshow.combo && (
                  <BuyProShowButton
                    disabled={
                      proshow.is_registered &&
                      !proshow.premium &&
                      !proshow.combo
                    }
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
                      proshow.is_registered && !proshow.premium && proshow.combo
                    }
                    label="standard combo"
                    proshowid={-1}
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
                    proshowid={-1}
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