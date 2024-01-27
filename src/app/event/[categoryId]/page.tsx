import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/Card";
import { CategoryEvents } from "@/types/models";
import Link from "next/link";
// import { useRouter } from 'next/router'

const page = async ({ params }: { params: { categoryId: string } }) => {
const res = await fetch("http://127.0.0.1:8000/event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await res.json();

return (
  <div>
  <h1>Events</h1>
  <div>
      {categoryEvents[0].events.map((event) => (
      <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
      <Card className="max-w-xl" key={event.id}>
          <CardHeader><img src={event.image} alt="" /></CardHeader>
          <CardTitle>{event.name}</CardTitle>
      </Card>
      </Link>
      ))}
  </div>
  </div>
);
};

export default page;
