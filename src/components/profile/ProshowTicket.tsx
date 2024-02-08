import Style from "./profile.module.css"
import localFont from 'next/font/local'

const SketchFont = localFont({ src: '../../../public/fonts/chakra.ttf' });
const TitleFont = localFont({ src: '../../../public/fonts/Jura.ttf' });

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
        <div className={`${Style.ticket}`}>
            <div className={`${Style.left}`}>
                <div className={`${Style.imageContent}`}>
                    <img className={`${Style.image}`} src={/*imgURL*/ "https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg"} alt='proshow image'/>
                    <p className={`${Style.admitOne}`}>
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                    </p>
                    <div className={`${Style.ticketNumber}`}>
                        <p style={{ zIndex: 1 }}>
                             { "#2003022" + day }
                        </p>
                    </div>
                </div>
                <div className={`${Style.ticketInfo}`}>
                    <p className={`${Style.date}`}>
                        <span>{Day}</span>
                        <span>2024</span>
                        <span className={`${Style.march}`}>{Date}</span>
                    </p>
                    <div className={`${Style.showName}`}>
                        <h1 className={`${TitleFont.className}`}>{show_name}</h1>
                        <h2 className="text-2xl subpixel-antialiased mt-1 font-medium">{/* */"Jonia Gandhi"}</h2>
                    </div>
                    <div className={`${Style.time} ${SketchFont.className}`}>
                        <p className="text-2xl">{"EXCITEMENT @ " + time}</p>
                    </div>
                    <p className={`${Style.location}`}>
                        <span>Open Gorund, Rajalakshmi Engineering College</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProshowTicket;