"use client"
import GalleryCard from "./GalleryCard";

interface GallerySliderProps {
    data: any;
}

const GallerySlider = ({ data }: GallerySliderProps) => {
  return (
    <div 
      className='slides overflow-scroll smooth-scroll w-full whitespace-nowrap touch-pan-x before:shrink-0 after:shrink-0 before:w-[36vw] after:w-[36vw] flex'
      onScroll={(element: any) => {
        element.target.scrollLeft > 63 ? document.querySelector(".description")?.classList.add('hidden') : document.querySelector(".description")?.classList.remove('hidden')
      }}
    >
        {
          data?.map((image: any, index: number) => {
            return(
              <GalleryCard key={index} imgURL={image.url}/>
            );
          })
        }
    </div> 
  );
};

export default GallerySlider;
