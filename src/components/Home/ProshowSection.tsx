import { SSRBaseUrl } from "@/lib/utils";
import { ProShow } from "@/types/models";
import { cookies } from "next/headers";
import { FC } from "react";
import { 
  Card,
  CardContent,
  CardTitle,
  CardFooter

    } from "../ui/Card";


interface ProshowSectionProps {}

const ProshowSection: FC<ProshowSectionProps> = async ({}) => {
  const res = await fetch(SSRBaseUrl + "proshow/proshows/", {
    headers: { Cookie: cookies().toString() },
  });

  const proshows: ProShow[] = await res.json();
  console.log(proshows);

  return (
   
    <div className="flex flex-start flex-wrap space-x-4 space-y-4 inline-block ml-8">
  {proshows.map((proshow, index) => (
    <div key={proshow.id} className="flex gap-4">
      <div className="card relative w-80 h-80 p-2 border border-white rounded-lg transform scale-98 transition-transform transition-z-index cursor-pointer group hover:translate-y-[-0.5rem] z-[3]">
        <div className="content relative h-full w-full p-4 bg-gray-800 rounded-lg overflow-hidden">
          <img className="w-full h-60 object-cover object-center mb-4" src={proshow.image} alt="Image" />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-3xl whitespace-nowrap font-semibold opacity-90 uppercase tracking-wider text-white">Hover me!</h2>
          </div>
        </div>
        <div className="border absolute inset-0 border border-white rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity duration-500">
          <div className="absolute w-full h-full top-0 left-0 z-[-1] rounded-full filter blur-[8rem] bg-conic-gradient animate-spin-shadow animation-duration-3s animation-timing-linear animation-iteration-count-infinite"></div>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default ProshowSection;