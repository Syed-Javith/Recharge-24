import Link from 'next/link';
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
} from "./ui/Card";
import { 
  Alert,
  AlertDescription,
  AlertTitle 
} from "@/components/ui/alert"

import BuyProShowButton from "./BuyProShowButton";

import { getAuthSession } from "@/lib/auth";

interface ProshowListProps {
  
}

const ProshowList: FC<ProshowListProps> = async ({}) => {
  const session = await getAuthSession();
  
  if(!session){
    return(
    <Alert>
    <div className="h-4 w-4" />
    <AlertTitle>You have not logged in!! Please login to continue..</AlertTitle>
    <AlertDescription>
    You can <Link href='/login' className="text-blue-500">login here</Link>.
    </AlertDescription>
  </Alert>
    )
  }
  if(session){
  const is_rec = session?.id.includes("rajalakshmi.edu.in");
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  // console.log(proshows);
  const apiResponse = {
    days: [1, 2, 3]
  };

  return (
    <div>
      <h1>Show proshows list</h1>
      <div>
        {proshows.map((proshow) => (
          <Card className="max-w-xl" key={proshow.id}>
            <CardTitle>{proshow.name}</CardTitle>
            <CardHeader>{proshow.id}</CardHeader>
            <CardDescription>{proshow.description}</CardDescription>
            <CardDescription>Price: {proshow.amount}</CardDescription>
            <CardFooter>
              <div className="space-y-[5px]"> 
              <BuyProShowButton
                disabled={proshow.premium && proshow.is_registered}
                label="premium"
                proshowid={proshow.id}
              /> 
              {!is_rec &&
                <BuyProShowButton
                  disabled={proshow.is_registered}
                  label="standard"
                  proshowid={proshow.id}
                />
              }
              </div>
            </CardFooter>
          </Card>
        ))}
        <BuyProShowButton
          disabled={proshows[0].is_registered && proshows[0].combo && !proshows[0].premium}
          label="standard combo"
          proshowid={-1}
        />
        {!is_rec &&
          <BuyProShowButton
            disabled={proshows[0].is_registered && proshows[0].combo && proshows[0].premium}
            label="premium combo"
            proshowid={-1}
          />
        }
      </div>
    </div>
  );
};
}


export default ProshowList;