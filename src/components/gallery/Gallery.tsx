import "./gallery.css";
import Script from "next/script";
import Gallery from "@/components/gallery/GallerySlider";


const GallerySection = async ({ }) => {
  return (
    <>
    <span className="gallery">
    <div className="description">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
        <div className="logo">Gallery</div>
    </div>
    <Gallery type="main"/>
    <Gallery type="bg"/>
    
    <Script src="/gallery.js"/>
    </span>
    </>
  );
};

export default GallerySection;
