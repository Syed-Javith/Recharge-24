import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"
import localFont from 'next/font/local'
import './style.css'

const AirFillFont = localFont({ src: '../../../../public/fonts/air-fill.ttf' })

const AirOutline = localFont({ src: '../../../../public/fonts/air-outline.ttf' })

const page = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

const dateFormatter = (dateStr: string | undefined) : string => {
  if(dateStr==undefined) return '-'
  let parts = dateStr.split("-"); 
  let rearrangedDateString = parts[2] + "-" + parts[1] + "-" + parts[0];
  return rearrangedDateString
}

return (
  <div className="">
    <h1 className={`text-center event-type-heading ${AirFillFont.className}`}>{categoryEvents[0].category_name}</h1>
    <div className="event-cards mb-12 mt-8">
        {categoryEvents[0].events.map((event) => (
        <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
           <div className="event-card">
                <div className="event-border"></div>
                <div className="event-content">
                    <img src={event.image} />
                    <h2>{event.name}</h2>
                    <h4><span>Day: </span> <p>{event.day}</p></h4>
                    <h4><span>Type: </span><p>{event.team_event==true ? "Team Event" : "Solo Event"} </p></h4>
                    <h4><span>Registration End Date: </span> <p>{dateFormatter(event.registration_end_date)} </p></h4>
                    <h4><span>Amount: </span><p>{'₹ ' + event.pay}</p></h4>
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
