"use client";
import { ProShow } from "@/types/models";
import { FC, useEffect, useState } from "react";
import ProShowCard from "./ProShowCard";

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
    <div>
      <h1 className="text-4xl  mt-10 mb-10 font-bold text-white text-center">
        Proshows list
      </h1>
      <div className=" flex flex-wrap items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {" "}
        </div>
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
  );
};

export default ProshowList;
