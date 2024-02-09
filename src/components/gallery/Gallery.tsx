import GallerySlider from "./GallerySlider";
import "./gallery.css";

const ImageData = [
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/dj.5155e6fa9d36cf2dcd12.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/bravo.be25486838c2169477f2.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/jagan.945d81b21bc37aa17b62.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/karthi.2507a9fb30a53b355de8.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/santhosh.b7d8090a1ef18af18e0e.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/dj.5155e6fa9d36cf2dcd12.webp"
  },
  {
    name: "No Name",
    url: "https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp"
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
