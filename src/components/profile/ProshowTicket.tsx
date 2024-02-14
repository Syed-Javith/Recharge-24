import Style from "./profile.module.css"
import localFont from 'next/font/local'

const SketchFont = localFont({ src: '../../../public/fonts/chakra.ttf' });
const TitleFont = localFont({ src: '../../../public/fonts/Jura.ttf' });

interface ProshowTicketProps {
    imgURL: string;
    day: 1 | 2 | 3 | 4;
    show_name: string;
    guest_name: string;
    premium: boolean;
}

const ProshowTicket = ({imgURL, day, show_name, guest_name, premium}: ProshowTicketProps) => {
    const Day = (day == 1) ? "SATURDAY" : (day == 2) ? "SUNDAY" : "MONDAY";
    const Date = (day == 1) ? "23" : (day == 2) ? "24" : "25";

    return(
        <div className={`${Style.proshowTicket}`}>
            <div className={`${Style.glass}`}></div>
            <div className={`${Style.celebrityImage}`}>
                <img src="https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg" alt="image"/>
            </div>
            <div className={`${Style.proshowDetails}`}>
                <div className={`${Style.proshowName}`}>
                    <span>{show_name}</span>
                </div>
                <div className={`${Style.date}`}>
                    {Date} <span className={`${Style.dateSpace}`}></span> MARCH <span className={`${Style.dateSpace}`}></span> <span className={`${Style.year}`}>2024</span>
                </div>
            </div>
            <div className={`${Style.celebrityName}`}>
                <span className={`${Style.celebrityNameShadow}`}>{guest_name}</span>
                <span>{guest_name}</span>
            </div>
            { (premium) ? 
                <div className={`${Style.premium}`}>
                    <span>PREMIUM</span>
                </div> :
                <div className={`${Style.standard}`}>
                    <span>STANDARD</span>
                </div>
            }
            
        </div>
    );
}

export default ProshowTicket;