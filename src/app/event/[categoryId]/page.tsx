import { SSRBaseUrl } from "@/lib/utils"
import { CategoryEvents } from "@/types/models"
import Link from "next/link"
import axios from "axios"
import localFont from 'next/font/local'
import EventStyle from './Event.module.css'
import { Calendar, Users } from "lucide-react"

const JuraFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })

const EventList = async ({ params }: { params: { categoryId: number } }) => {
const {data} = await axios.get(SSRBaseUrl + "event/category/" + params.categoryId + "/events/");

const categoryEvents: CategoryEvents[] = await data

const dateFormatter = (dateStr: string | undefined) : string => {
  if(dateStr==undefined) return '-'
    // let parts = dateStr.split("-"); 
    // let rearrangedDateString = parts[2] + "-" + parts[1] + "-" + parts[0];
    // return rearrangedDateString
    // Create a new Date object with the specified date

  const date = new Date(dateStr);
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
  ];

  const month = monthNames[date.getMonth()]; 
  const day = date.getDate();
  return month + " " + day;
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
                    <div className={EventStyle.event_short_info}>
                      <div> {"Day " + event.day}</div>
                      <div> <Users size={12} style={{marginRight: "4px"}}/> {event.team_event==true ? "Team" : "Solo"}</div>
                      <div> {'₹ ' + event.pay}</div>
                    </div>
                    <div className={EventStyle.event_short_info}>
                      <div>  Registration End Date: {dateFormatter(event.registration_end_date)}</div>
                    </div>
                    <p>
                     {event.short_description.slice(0,80) + ((event.short_description.length>80) ? '...' : '')}
                    </p>
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
