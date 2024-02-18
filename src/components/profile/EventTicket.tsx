import { EventDetailSchema } from "@/types/models";
import { UserRound, UsersRound } from "lucide-react";
import Style from "./profile.module.css";
import "./profile.module.css";

const EventTicket = ({ eventDetail }: { eventDetail: EventDetailSchema }) => {
    function convertTo12HourFormat(time: string ) {
        var timeArray = time.split(":");
        var hours = parseInt(timeArray[0]);
        var minutes = timeArray[1];
        var period = hours >= 12 ? "p.m" : "a.m";
    
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours == 0 ? 12 : hours;
    
        var convertedTime = hours + ":" + minutes + " " + period;
    
        return convertedTime;
      }
    return(
       <>
            <div className={`${Style.profileEventCard}`}>
            <div className={`${Style.topSection}`}>
                <div className={`${Style.border}`}></div>
                <img src={eventDetail.image} alt=''/>
                <div className={`${Style.icons}`}>
                <div className={`${Style.logo}`}>
                    <p>{eventDetail.name_of_hosting_club}</p>
                </div>
                <div className={`${Style.socialMedia}`}>
                    {
                        eventDetail.team_event ? <UsersRound className="text-white"/> : <UserRound className="text-white"/>
                    }
                </div>
                </div>
            </div>
            <div className={`${Style.bottomSection}`}>
                <span className={`${Style.title}`}>{eventDetail.name}</span>
                <div className={`${Style.row} ${Style.row1}`}>
                <div className={`${Style.item}`}>
                    <span className={`${Style.bigText}`}>ON</span>
                    <span className={`${Style.regularText}`}>{ "Day: " + eventDetail.day + " " +  convertTo12HourFormat(eventDetail.time_of_event as string) }</span>
                </div>
                <div className={`${Style.item}`}>
                    <span className={`${Style.bigText}`}>AT</span>
                    <span className={`${Style.regularText}`}>{ eventDetail.venue }</span>
                </div>
                {/* <div className={`${Style.item}`}>
                    <span className={`${Style.bigText}`}>{ eventDetail.registration_count }</span>
                    <span className={`${Style.regularText}`}>Slots Occupied</span>
                </div> */}
                </div>
            </div>
            </div>
        </>
        
    );
}

export default EventTicket;