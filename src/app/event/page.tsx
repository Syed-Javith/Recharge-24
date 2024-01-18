import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/Card";
import { SSRBaseUrl } from "@/lib/utils";
import { EventSchema } from "@/types/models";

const page = async ({}) => {
  const res = await fetch(SSRBaseUrl + "event/events/");
  const events: EventSchema[] = await res.json();
  return (
    <div>
      <h1>Events</h1>
      <div>
        {events.map((event) => (
          <Card className="max-w-xl" key={event.name}>
            <CardTitle>{event.name}</CardTitle>
            <CardContent>{event.short_description}</CardContent>
            <CardDescription>{event.description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
