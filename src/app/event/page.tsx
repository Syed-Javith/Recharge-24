import { EventSchema } from "@/types/models";
import axios from "axios";

const page = async ({}) => {
  // const res = await axios.get("https://api.rechargefest.in/event/events/");
  const res = await axios.get("http://127.0.0.1:8000/event/events/");
  const events: EventSchema[] = res.data;
  console.log(events);
  return (
    <div>
      <h1>Show events list</h1>
      <div>
        {events.map((event) => (
          <p>{event.name}</p>
        ))}
      </div>
    </div>
  );
};

export default page;
