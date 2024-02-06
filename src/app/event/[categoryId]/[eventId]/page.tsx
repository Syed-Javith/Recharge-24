import { getAuthSession } from "@/lib/auth";
import { FC } from "react";
import EventDetails from "@/components/events/EventDetails";
import { SSRBaseUrl } from "@/lib/utils";
import { cookies } from "next/headers";
import axios from "axios";
import ParticleBackground from "@/components/Particles/ParticleBackGround";

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
  console.log(event);
  
  return (
    <div>
      <EventDetails session={session} event={event} />
      {/* <ParticleBackground /> */}
    </div>
  );
};

export default page;
