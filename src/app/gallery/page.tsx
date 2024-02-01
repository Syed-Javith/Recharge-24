import { register } from "swiper/element/bundle";
import "./gallery.css";
import Script from "next/script";


register();

const page = async ({ }) => {

  return (
    <>
    <div className="description">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
        <div className="logo">Red Sea</div>
        <p>
            Red Sea is a direct translation of the Greek Erythra Thalassa (Ερυθρὰ Θάλασσα). The sea itself was once referred
            to as the Erythraean Sea by Europeans. As well as Mare Rubrum in Latin (alternatively Sinus Arabicus, literally
            "Arabian Gulf"), the Romans called it Pontus Herculis (Sea of Hercules).
        </p>
    </div>
    
    <div className="swiper slider slider_main">
        <div className="swiper-wrapper slider__wrapper">
            <div className="swiper-slide slider__item">
                <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: 'url(https://dmitry-rogg.vn.ua/animate-slider/images/1.jpg);'}}></div>
            </div>
            
        </div>
    </div>
    
    
    <div className="swiper slider slider_bg">
        <div className="swiper-wrapper slider__wrapper">
    
            <div className="swiper-slide slider__item">
                <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: 'url(https://dmitry-rogg.vn.ua/animate-slider/images/1.jpg);'}}></div>
            </div>
            
            
    
        </div>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"/>
    <Script>
    </Script>
    </>
  );
};

export default page;
