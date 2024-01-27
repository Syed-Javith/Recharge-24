// "use client"
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import { SSRBaseUrl } from "@/lib/utils";
import { CategoryEvents } from "@/types/models";
import Link from "next/link";

const page = async ({ params }: { params: { categoryId: number } }) => {
const res = await fetch(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await res.json();

return (
  <div className="flex flex-col justify-center">
  <div>
      {categoryEvents[0].events.map((event) => (
      <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
      <Card className="max-w-xl" key={event.id}>
          <CardHeader><img src={event.image} alt="" /></CardHeader>
          <CardTitle>{event.name}</CardTitle>
          <CardContent>
            <img src={event.image} alt={event.name} />
          </CardContent>
      </Card>
      </Link>
      ))}
  </div>
  </div>
);
};

export default page;
