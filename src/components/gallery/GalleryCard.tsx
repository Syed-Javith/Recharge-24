const GalleryCard = ({imgURL, key}: {imgURL: string, key: number}) => {
    return(
        <>
        <div className='slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-5'>
          <img src={"/gallery/"+imgURL} alt={"image " + key} className='block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]' />
        </div>
        </>
    );
}

export default GalleryCard;