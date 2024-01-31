import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import { getAuthSession } from "@/lib/auth";
import DialogBox from "../DialogBox";
import ProShowGroup from "./ProShowGroup";


interface ProshowListProps { }

const ProshowList: FC<ProshowListProps> = async ({ }) => {
  const session = await getAuthSession();
  if (!session) {
    return <DialogBox />;
  }
  const is_rec = session?.id.includes("rajalakshmi.edu.in") || false;
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);
  const shows :ProShow[] = [
    {
      id: 3,
      name: 'Proshow - 1',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 1,
      amount: 4000,
      discount_amount: 200,
      combo: false,
      premium: false,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 15,
      name: 'Standard Combo',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 4,
      amount: 500,
      discount_amount: 9,
      combo: true,
      premium: false,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 14,
      name: 'Premium Combo',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 1,
      amount: 500,
      discount_amount: 9,
      combo: false,
      premium: true,
      is_registered: true, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 13,
      name: 'Premium Day3',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 3,
      amount: 500,
      discount_amount: 9,
      combo: false,
      premium: true,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 12,
      name: 'Premium Day2',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 2,
      amount: 500,
      discount_amount: 9,
      combo: false,
      premium: true,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 11,
      name: 'Premium Day 1',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 1,
      amount: 4500,
      discount_amount: 10,
      combo: false,
      premium: true,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 5,
      name: 'Proshow - 2',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 2,
      amount: 200,
      discount_amount: 7,
      combo: false,
      premium: true,
      is_registered: true, title : 3, readOnly : true, maxLength : 4, minLength : 1
    },
    {
      id: 1,
      name: 'Proshow - 3',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Prepare to be enchanted as the soulful melodies of Anirudh Ravichander fill the air in an unforgettable musical journey. Renowned for his dynamic performances and chart-topping hits, Anirudh promises an electrifying concert experience that transcends boundaries. With a repertoire spanning across genres, from soulful ballads to high-energy dance tracks, Anirudh captivates audiences with his versatile musicality.',
      day: 2,
      amount: 5000,
      discount_amount: 200,
      combo: false,
      premium: false,
      is_registered: false, title : 3, readOnly : true, maxLength : 4, minLength : 1
    }
  ]
  return (
    <div>
      <h1 className="text-4xl  mt-10 mb-10 font-bold text-white text-center">Proshows list</h1>
      <div className=" flex flex-wrap items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" > </div>
        <ProShowGroup proshows={shows} is_rec={is_rec} />
      </div>
    </div>

  );
};

export default ProshowList;
