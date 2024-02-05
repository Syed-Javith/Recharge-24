import GallerySlider from "./GallerySlider";
import "./gallery.css";

const ImageData = [
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/1.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/2.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/3.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/4.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/5.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/6.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/7.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/8.jpg"
  },
  {
    name: "No Name",
    url: "https://dmitry-rogg.vn.ua/animate-slider/images/9.jpg"
  },
]

const GallerySection = ({ }) => {
  return (
    <div className="gallery touch-auto">
    <div className="description bottom-1 pb-11">
      <h1 className="logo">
        GALLERY. . .
      </h1>
    </div>
      <GallerySlider data={ImageData}/>
    </div>
  );
};

export default GallerySection;
