
import { getAuthSession } from "@/lib/auth";
import { FC } from "react";
import EventDetails from "../../../../components/EventDetails";
interface pageProps {
    params: {
        eventId: string;
    };
}

const page: FC<pageProps> = async ({params}:pageProps) => {
  const session = await getAuthSession();
  return (
    <div>
        <EventDetails session={session} eventId={params.eventId}/>
    </div>
  );
};

export default page;
