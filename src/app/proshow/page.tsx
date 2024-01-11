import BuyProShowButton from "@/components/BuyProShowButton";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";

const page = async ({}) => {
  try {
    const res = await fetch("https://api.rechargefest.in/proshow/proshows/", {
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
                <BuyProShowButton proshowid={proshow.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching proshows:", error);
  }
};

export default page;
