"use client";
import { FC } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { CSRBaseUrl } from "@/lib/utils";
import ProShowStyle from "./proshow.module.css"
import localFont from "next/font/local";
interface BuyProShowButtonProps {
  proshowid: number;
  label: "Standard" | "Premium" | "Standard combo" | "Premium combo";
  disabled: boolean;
  is_registered: boolean;
}

const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const subtitleFont = localFont({ src: '../../../public/fonts/chakra.ttf' })

const BuyProShowButton: FC<BuyProShowButtonProps> = ({
  proshowid,
  disabled,
  label,
  is_registered
}) => {
  const router = useRouter();
  const { mutate: buyProshow, isPending } = useMutation({
    mutationFn: async ({ proshowid }: { proshowid: number }) => {
      if (proshowid) {
        const payload: { proshow_id: number } = { proshow_id: proshowid };
        console.log(payload);
        const { data } = await axios.post(
          CSRBaseUrl + "proshow/proshow-register/",
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
      router.push(payment_link)
      router.refresh();
    },
  });

  return (
    <Button
    
    className={label === "Premium" || label === "Premium combo" ? `${ProShowStyle.goldenBtn} ${subtitleFont.className}` : `${ProShowStyle.silverBtn} ${subtitleFont.className}`}
    
      onClick={() => buyProshow({ proshowid })}
      disabled={isPending || disabled}
    >
      {(disabled ? is_registered ? "Already Bought " : "Can't Buy " : "Buy ") + label} {isPending && <Loader2 className="animate-spin" />}
    </Button>
  );
};

export default BuyProShowButton;
