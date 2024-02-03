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

  const proshows: ProShow[] = [
    {
      id: 3,
      name: "Proshow - 1",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 1,
      amount: 450,
      discount_amount: 200,
      combo: false,
      premium: false,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 15,
      name: "Standard Combo",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 4,
      amount: 750,
      discount_amount: 9,
      combo: true,
      premium: false,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 14,
      name: "Premium Combo",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 4,
      amount: 3600,
      discount_amount: 9,
      combo: true,
      premium: true,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 13,
      name: "Premium Day3",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 3,
      amount: 1200,
      discount_amount: 9,
      combo: false,
      premium: true,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 12,
      name: "Premium Day2",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 2,
      amount: 1200,
      discount_amount: 9,
      combo: false,
      premium: true,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 11,
      name: "Premium Day 1",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 1,
      amount: 1200,
      discount_amount: 10,
      combo: false,
      premium: true,
      is_registered: true,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 1,
      name: "Proshow - 3",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 3,
      amount: 450,
      discount_amount: 200,
      combo: false,
      premium: false,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
    {
      id: 5,
      name: "Proshow - 2",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.",
      day: 2,
      amount: 450,
      discount_amount: 7,
      combo: false,
      premium: false,
      is_registered: false,
      title: 3,
      readOnly: true,
      maxLength: 4,
      minLength: 1,
    },
  ];

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
