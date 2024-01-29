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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import BuyProShowButton from "./BuyProShowButton";

import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { Button } from "../ui/Button";

interface ProshowListProps {
  
}

const ProshowList: FC<ProshowListProps> = async ({}) => {
  const session = await getAuthSession();
  if(!session){
    return <AlertDialog open={true}>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>UnAuthorised</AlertDialogTitle>
        <AlertDialogDescription>
        You Have not logged in, Please Login and come to continue.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Link href={'/login'}>
        <Button>
        Login
        </Button>
        </Link>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
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
      <div>
        {proshows.length > 0 && proshows.map((proshow) => (
          <Card className="max-w-xl" key={proshow.id}>
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
                  (proshows[0]?.is_registered && proshows[0].combo) || 
                  (proshows.some(proshow => (proshow?.is_registered && proshow.premium)))
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
                    (proshows[0]?.is_registered && proshows[0].combo && proshows[0].premium) || 
                    (proshows.some(proshow => (proshow?.is_registered && proshow.premium)))
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