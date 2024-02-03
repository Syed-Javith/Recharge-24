const Card = ({imgURL}: {imgURL: string}) => {
    return(
        <div className="swiper-slide slider__item">
            <div className="slider__img" data-swiper-parallax="20%" style={{backgroundImage: 'url(' + imgURL + ');'}}></div>
        </div>
    );
}

export default Card;