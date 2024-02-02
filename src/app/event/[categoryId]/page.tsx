// "use client"
import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"
import './style.css'
// import { useEffect } from "react"
// import VanillaTilt from 'vanilla-tilt'

const EventList = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

// useEffect(()=>{ //@ts-ignore
//   VanillaTilt.init(document.querySelectorAll(".event-cards"), {
//       max: 15,
//       speed: 300,
//       glare:1,
//       "max-glare":.25,
//       gyroscope:false
//   })
// },[])

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

export default EventList
