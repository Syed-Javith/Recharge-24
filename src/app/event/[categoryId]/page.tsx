import { Button } from "@/components/ui/Button"
import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"

const page = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

return (
  <div className="md:max-w-[1300px] sm:max-w-[90%] m-auto p-4">
    <h1 className="text-4xl text-center mt-4 mb-8">{categoryEvents[0].category_name}</h1>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {categoryEvents[0].events.map((event) => (
        <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
          <div className="rounded-md border-2 shadow-white h-full">
            <img className="w-full rounded-t-md object-cover min-h-[240px] max-h-[240px]" src={event.image} alt="Event Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.name}</div>
              <p className="font-thin text-base text-justify leading-6">
                {event.short_description?.slice(0,270)+" ...."}
              </p>
              <Button variant="outline" className="mt-4 w-full p-4 border-2 border-white text-md bg-black text-white">Know More</Button>
            </div>
          </div>
        </Link>
        ))}
    </div>
  </div>
)
}

export default page
