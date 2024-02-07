import { UsersRound } from "lucide-react";

const EventTicket = ({ eventDetail }: { eventDetail: any }) => {
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg> */}
                <UsersRound className="text-white"/>
                    <p>
                        {eventDetail.event_registration.length}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="svg">
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
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