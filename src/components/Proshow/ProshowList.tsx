import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import BuyProShowButton from "./BuyProShowButton";
import { getAuthSession } from "@/lib/auth";
import DialogBox from "../DialogBox";
import { Button } from "../ui/Button";


interface ProshowListProps {}

const ProshowList: FC<ProshowListProps> = async ({}) => {
  const session = await getAuthSession();
  if (!session) {
    return <DialogBox />;
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in");
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);
  const apiResponse = {
    days: [1, 2, 3],
  };

  return (
    <div className="md:max-w-[1300px] sm:max-w-[90%] m-auto p-4">
      <h1 className="text-4xl text-center mt-4 mb-8">Proshows</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {proshows.length > 0 &&
          proshows.map((proshow) => (
            <div className="rounded-md border-2 shadow-white h-full" key={proshow.id}>
              <img
                className="w-full rounded-t-md object-cover min-h-[240px] max-h-[240px]"
                src={proshow.image}
                height={100}
                width={100}
                alt="Event Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{proshow.name}</div>
                <div className="flex my-4">
                  <div className="space-y-[5px]">
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
                    {!is_rec && !proshow.premium && !proshow.combo &&(
                      <BuyProShowButton
                        disabled={proshow.is_registered}
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
                        disabled={proshow.is_registered}
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
                        proshowid={proshow.id}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProshowList;
