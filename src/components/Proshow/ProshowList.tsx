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

interface ProshowListProps {
  
}

const ProshowList: FC<ProshowListProps> = async ({}) => {
  const session = await getAuthSession();
  if(!session){
    return  <DialogBox />
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in");
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);
  const apiResponse = {
    days: [1, 2, 3]
  };

  return (
    <div>
      <h1>Show proshows list</h1>
      <div className="flex gap-4 items-center">
        {proshows.length > 0 && proshows.map((proshow) => (
          <Card className="max-w-xl " key={proshow.id}>
            <CardTitle>{proshow.name}</CardTitle>
            <CardHeader>{proshow.id}</CardHeader>
            <CardDescription>{proshow.description}</CardDescription>
            <CardDescription>Price: {proshow.amount}</CardDescription>
            <CardFooter>
              <div className="space-y-[5px]"> 

              {/* 
                ===========BUY PREMIUM BUTTON===========
                Applies for both REC and Non-REC
              */}
              {proshow.premium && !proshow.combo &&
              <BuyProShowButton
                disabled={proshow.is_registered}
                label="premium"
                proshowid={proshow.id}
              /> 
              }
              {/* 
                ===========BUY STANDARD BUTTON===========
                Applies for only Non-REC
              */}
              {!is_rec && !proshow.premium && !proshow.combo &&
                <BuyProShowButton
                  disabled={proshow.is_registered}
                  label="standard"
                  proshowid={proshow.id}
                />
              }
              {/* 
                ===========BUY STANDARD COMBO BUTTON===========
                Applies for both REC and Non-REC
              */}
              {!proshow.premium && proshow.combo &&
              <BuyProShowButton
                disabled={
                  proshow.is_registered
                }
                label="standard combo"
                proshowid={-1}
              />
              } 
      
              {/* 
                ===========BUY PREMIUM COMBO BUTTON===========
                Applies for only Non-REC
              */}
              {!is_rec && proshow.premium && proshow.combo &&
                <BuyProShowButton
                  disabled={
                      proshow.is_registered
                  }
                  label="premium combo"
                  proshowid={-1}
                />
              }
              </div>
            </CardFooter>
          </Card>
        ))}


      </div>
    </div>
  );
};

export default ProshowList;