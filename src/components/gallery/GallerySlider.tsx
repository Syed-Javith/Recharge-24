// import { register } from "swiper/element/bundle";
// import "./gallery.css";
import GalleryCard from "./GalleryCard";

interface GalleryProps {
    type: string;
}

// register();

const Gallery = async ({ type }: GalleryProps) => {
  return (
    <div className={"swiper slider slider_" + type} id="mainslider" style={{transform: "rotate(0deg)"}}>
      {/* <div className="swiper slider slider_bg" id="mainslider" style={{overflow:"hidden"}}> */}
        <div className="swiper-wrapper slider__wrapper">
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/1.jpg"/>
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/2.jpg"/>
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/3.jpg"/>
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/4.jpg"/>
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/2.jpg"/>
            <GalleryCard imgURL="https://dmitry-rogg.vn.ua/animate-slider/images/1.jpg"/>
            
        </div>
      {/* </div> */}
    </div> 
  );
};

export default Gallery;
