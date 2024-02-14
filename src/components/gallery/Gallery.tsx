import GallerySlider from "./GallerySlider";
import "./gallery.css";

const ImageData = [
  {
    name: "No Name",
    // url: "jonita.jpeg"
    url: "new_jonita.webp"
  },
  {
    name: "No Name",
    url: "gvm.jpeg"
  },
  {
    name: "No Name",
    url: "masala_cafe_2.jpeg"
  },
  {
    name: "No Name",
    url: "raina.jpeg"
  },
  {
    name: "No Name",
    // url: "sunburn.jpeg"
    url: "new_sunburn.webp"
  },
  {
    name: "No Name",
    url: "masala_cafe.webp"
  },
  {
    name: "No Name",
    url: "comedy.jpeg"
  },
  {
    name: "No Name",
    // url: "rugged.webp"
    url: "andrea.webp"
  },
]

const GallerySection = ({ }) => {
  return (
    <div className="gallery touch-auto">
    <div className="description bottom-1 pb-11">
      <h1 className="logo">
        .. GALLERY ..
      </h1>
    </div>
      <GallerySlider data={ImageData}/>
    </div>
  );
};

export default GallerySection;
