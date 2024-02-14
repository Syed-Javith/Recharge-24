import GallerySlider from "./GallerySlider";
import "./gallery.css";

const ImageData = [
  {
    name: "No Name",
    url: "jonita.jpeg"
  },
  {
    name: "No Name",
    url: "gvm.webp"
  },
  {
    name: "No Name",
    url: "masala_cafe_2.jpg"
  },
  {
    name: "No Name",
    url: "raina.webp"
  },
  {
    name: "No Name",
    url: "sunburn.jpeg"
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
    url: "rugged.webp"
  },
  // {
  //   name: "No Name",
  //   url: "https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp"
  // },
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
