import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"
import localFont from 'next/font/local'
import EventStyle from './Event.module.css'

const JuraFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })

const EventList = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

const dateFormatter = (dateStr: string | undefined) : string => {
  if(dateStr==undefined) return '-'
  let parts = dateStr.split("-"); 
  let rearrangedDateString = parts[2] + "-" + parts[1] + "-" + parts[0];
  return rearrangedDateString
}

return (
  <div >
    <h1 className={`text-center ${EventStyle.event_type_heading} ${JuraFont.className}`}>{categoryEvents[0].category_name}</h1>
    <div className={`${EventStyle.event_cards} mb-12 mt-8`}>
        {categoryEvents[0].events.map((event) => (
        <Link href={"/event/" + params.categoryId + "/" + event.id} key={event.id}>
           <div className={EventStyle.event_card}>
                <div className={EventStyle.event_border}></div>
                <div className={EventStyle.event_content}>
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

export default EventList
