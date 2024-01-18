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
import BuyProShowButton from "./BuyProShowButton";

interface ProshowListProps {}

const ProshowList: FC<ProshowListProps> = async ({}) => {
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);

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
              <BuyProShowButton
                disabled={proshow.is_registered}
                proshowid={proshow.id}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProshowList;
