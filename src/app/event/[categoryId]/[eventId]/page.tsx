import { getAuthSession } from "@/lib/auth";
import { FC } from "react";
import EventDetails from "@/components/events/EventDetails";
import { SSRBaseUrl } from "@/lib/utils";
import { cookies } from "next/headers";
import axios from "axios";

interface pageProps {
  params: {
    eventId: number;
  };
}

const page: FC<pageProps> = async ({ params }: pageProps) => {
  const session = await getAuthSession();
  const { data: event } = await axios.get(
    SSRBaseUrl + `event/event/${params.eventId}`,
    {
      headers: { Cookie: cookies().toString() },
    }
  );

  function convertTo12HourFormat(time: string) {
    var timeArray = time.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = timeArray[1];
    var period = hours >= 12 ? "p.m" : "a.m";

    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0 ? 12 : hours;

    var convertedTime = hours + ":" + minutes + " " + period;

    return convertedTime;
  }

  let convTime = null;
  if (event.time_of_event) {
    convTime = convertTo12HourFormat(event.time_of_event);
  }

  return (
    <div>
      <EventDetails
        session={session}
        event={{ ...event, time_of_event: convTime }}
      />
    </div>
  );
};

export default page;
