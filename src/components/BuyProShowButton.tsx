"use client";
import { FC } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";

interface BuyProShowButtonProps {
  proshowid: number;
  disabled: boolean;
}

const BuyProShowButton: FC<BuyProShowButtonProps> = ({
  proshowid,
  disabled,
}) => {
  const router = useRouter();
  const { mutate: buyProshow, isPending } = useMutation({
    mutationFn: async ({ proshowid }: { proshowid: number }) => {
      if (proshowid) {
        const payload: { proshow_id: number } = { proshow_id: proshowid };
        console.log(payload);
        const { data } = await axios.post(
          "http://localhost:8000/proshow/proshow-register/",
          payload,
          {
            withCredentials: true,
          }
        );
        return data;
      }
    },

    onError: (err) => {
      console.log(err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          toast(`${err.response.data.detail}`);
        } else {
          toast(`Some error occured`, {
            description: `${err.message}`,
          });
        }
      } else {
        toast(`Some other error occurred`, {
          description: `Please try again later`,
        });
      }
    },

    onSuccess: (data) => {
      const { payment_link } = data;
      console.log(payment_link);

      toast(`Please complete your Proshow purchase`, {
        action: {
          label: "Pay now",
          onClick() {
            window.location.href = payment_link;
          },
        },
        duration: 100 * 1000,
      });
      router.refresh();
    },
  });

  return (
    <Button
      onClick={() => buyProshow({ proshowid })}
      disabled={isPending || disabled}
    >
      {disabled ? "Already bought this ProShow" : "Buy ProShow" }
      {isPending && <Loader2 className="animate-spin" />}
    </Button>
  );
};

export default BuyProShowButton;
