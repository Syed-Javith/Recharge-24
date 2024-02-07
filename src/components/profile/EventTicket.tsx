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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="svg">
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                    <p>
                        4
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