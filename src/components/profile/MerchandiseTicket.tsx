import { EventDetailSchema } from "@/types/models";
import Style from "./profile.module.css";

const EventTicket = ({ merchandiseDetail }: { merchandiseDetail: EventDetailSchema }) => {
    return(
        <div className={`${Style.nft}`}>
            <div className={`${Style.main}`}>
            <img className={`${Style.tokenImage}`} src={merchandiseDetail.image} alt="NFT" />
            <h2>{merchandiseDetail.name}</h2>
            <p className={`${Style.description}`}>{merchandiseDetail.description}</p>
            <div className={`${Style.tokenInfo}`}>
                <div className={`${Style.price}`}>
                <ins>₹</ins>
                <p>{merchandiseDetail.pay} /-</p>
                </div>
                <div className={`${Style.duration}`}>
                <p>Size : {merchandiseDetail.short_description}</p>
                </div>
            </div>
            
            </div>
        </div>
        
    );
}

export default EventTicket;