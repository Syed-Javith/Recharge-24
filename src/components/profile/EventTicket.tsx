import { EventDetailSchema } from "@/types/models";
import { CheckCircle2, UserRound, UsersRound, XCircle } from "lucide-react";

const EventTicket = ({ eventDetail }: { eventDetail: EventDetailSchema }) => {
    return(
        <>
            <div className="profile-event-card">
            <div className="top-section">
                <div className="border"></div>
                <img src={eventDetail.image} alt=''/>
                <div className="icons">
                <div className="logo">
                    <p>{eventDetail.name_of_hosting_club}</p>
                </div>
                <div className="social-media">
                    {
                        eventDetail.team_event ? <UsersRound className="text-white"/> : <UserRound className="text-white"/>
                    }
                    {/* <p>
                        {( (eventDetail.event_registration[0].team.length === 0 ) ? 1 : eventDetail?.event_registration[0].team[0].members.length)}
                    </p>
                    {
                        ( (eventDetail != undefined  && eventDetail.event_registration && eventDetail.event_registration.length > 0 && eventDetail?.event_registration[0]?.team[0]?.members?.length == null) ? 1 : eventDetail?.event_registration[0].team[0].members.length) == eventDetail.team_max ?
                        <CheckCircle2 className="text-emerald-500"/> : <></>
                    } */}
                </div>
                </div>
            </div>
            <div className="bottom-section">
                <span className="title">{eventDetail.name}</span>
                <div className="row row1">
                <div className="item">
                    <span className="big-text">ON</span>
                    <span className="regular-text">{ "Day: " + eventDetail.day + " " + eventDetail.time_of_event }</span>
                </div>
                <div className="item">
                    <span className="big-text">AT</span>
                    <span className="regular-text">{ eventDetail.venue }</span>
                </div>
                <div className="item">
                    <span className="big-text">{ eventDetail.registration_count }</span>
                    <span className="regular-text">Slots Occupied</span>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default EventTicket;