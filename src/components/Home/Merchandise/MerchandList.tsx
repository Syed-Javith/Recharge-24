"use client";
import Neon from "@/components/Text/Neon";
import { Button } from "@/components/ui/Button";
import { CSRBaseUrl } from "@/lib/utils";
import { CategoryEvents, EventDetailSchema } from "@/types/models";
import axios from "axios";

interface MerchandListProps {
  merchandise: CategoryEvents[];
}

const MerchandList = ({ merchandise }: MerchandListProps) => {
  const payMerchand = (id: number) => {
    axios
      .post(
        CSRBaseUrl + "event/event-register/",
        { event_id: id },
        { withCredentials: true }
      )
      .then((res) => {
        window.location.href = res.data?.payment_link;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(merchandise[0].events);
  return (
    <div>
      <div className="text-center mt-20">
        <Neon text="Merchandise" />
      </div>
      <div className="flex m-auto gap-4 max-w-[1000px] mt-5 items-center justify-center">
        {merchandise[0].events.map((merchand: EventDetailSchema) => (
          <div
            key={merchand.id}
            className="w-[500px] p-4 border-2 border-white rounded-md"
          >
            <h2>{merchand.name.split("-")[0]}</h2>
            <img src={merchand.image} alt=""/>
            <div className="mt-2">Size: {merchand.short_description}</div>
            <div className="mt-2">Pay: ₹{merchand.pay}</div>
            <Button
              className="w-full mt-4"
              onClick={() => payMerchand(merchand.id)}
              disabled={merchand.is_registered}
            >
              {!merchand.is_registered ? "Buy Now" : "Already Bought"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchandList;
