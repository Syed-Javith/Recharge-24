import { getAuthSession } from "@/lib/auth";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { SSRBaseUrl } from "@/lib/utils";
import axios from "axios";
import DialogBox from "@/components/DialogBox";
import ProshowList from "@/components/Proshow/ProshowList";

const page = async ({}) => {
  const session = await getAuthSession();
  if (!session) {
    return <DialogBox />;
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in") || false;
  const { data: shows } = await axios.get(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  let proshows: ProShow[] = shows
  proshows = [...shows,...shows,...shows,...shows]

  let isDayPremium = false;
  let isPremiumCombo = false;
  let isStandardCombo = false;
  let datePremium: number[] = [0, 0, 0];

  proshows.forEach((proshow) => {
    if (proshow.is_registered) {
      if (proshow.combo) {
        if (proshow.premium) {
          isPremiumCombo = true;
        } else {
          isStandardCombo = true;
        }
      } else {
        if (proshow.premium) {
          isDayPremium = true;
          datePremium[proshow.day - 1] = 1;
        }
      }
    }
  });

  return (
    <ProshowList
      is_rec={is_rec}
      proshows={proshows}
      isDayPremium={isDayPremium}
      isPremiumCombo={isPremiumCombo}
      isStandardCombo={isStandardCombo}
      datePremium={datePremium}
    />
  );
};

export default page;
