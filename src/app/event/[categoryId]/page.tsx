import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"
import './style.css'

const page = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

return (
  <div className="">
    <h1 className="text-4xl text-center mt-4 mb-8">{categoryEvents[0].category_name}</h1>
    <div className="event-cards">
        {categoryEvents[0].events.map((event) => (
        <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
           <div className="event-card">
                <div className="event-border"></div>
                <div className="event-content">
                    <img src={event.image} />
                    <h2>{event.name}</h2>
                    <p> {event.short_description?.slice(0,100)+" ...."}</p>
                    <button>KNOW MORE</button>
                </div>
            </div>
        </Link>
        ))}
    </div>
  </div>
)
}

export default page
