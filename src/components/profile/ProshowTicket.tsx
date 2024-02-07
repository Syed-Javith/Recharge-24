interface ProshowTicketProps {
    imgURL: string;
    day: 1 | 2 | 3 | 4;
    show_name: string;
    guest_name: string;
    time: string;
}

const ProshowTicket = ({imgURL, day, show_name, guest_name, time}: ProshowTicketProps) => {
    const Day = (day == 1) ? "SATURDAY" : (day == 2) ? "SUNDAY" : "MONDAY";
    const Date = "MARCH "  + ((day == 1) ? "23" : (day == 2) ? "24" : "25");

    return(
        <div className="ticket">
            <div className="left">
                <div className="image-content">
                    <img className="image" src={/*imgURL*/ "https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg"} alt='proshow image'/>
                    <p className="admit-one">
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                    </p>
                    <div className="ticket-number">
                        <p style={{ zIndex: 1 }}>
                             { "#2003022" + day }
                        </p>
                    </div>
                </div>
                <div className="ticket-info">
                    <p className="date">
                        <span>{Day}</span>
                        <span>2024</span>
                        <span className="june-29">{Date}</span>
                    </p>
                    <div className="show-name">
                        <h1>{show_name}</h1>
                        <h2>{guest_name}</h2>
                    </div>
                    <div className="time">
                        <p>{"EXCITEMENT @ " + time}</p>
                        {/* <p>DOORS <span>@</span> 7:00 PM</p> */}
                    </div>
                    <p className="location"><span>Open Gorund, R</span>
                        <span className="separator"><i className="far fa-smile"></i></span><span>ajalakshmi Engineering College</span>
                    </p>
                </div>
            </div>
            {/* <div className="right">
                <p className="admit-one">
                    <span>ADMIT ONE</span>
                    <span>ADMIT ONE</span>
                    <span>ADMIT ONE</span>
                </p>
                <div className="right-info-container">
                    <div className="show-name">
                        <h1>SOUR Prom</h1>
                    </div>
                    <div className="time">
                        <p>8:00 PM <span>TO</span> 11:00 PM</p>
                        <p>DOORS <span>@</span> 7:00 PM</p>
                    </div>
                    <div className="barcode">
                        <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
                    </div>
                    <p className="ticket-number">
                        #20030220
                    </p>
                </div>
            </div> */}
        </div>
    );
}

export default ProshowTicket;