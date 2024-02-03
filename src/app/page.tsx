
import Landing from '../components/Home/Landing'
import AboutRecharge from "@/components/Home/AboutRecharge";
import AboutRec from "@/components/Home/AboutRec";
// import Gallery from '@/components/gallery/GallerySlider';
import GallerySection from '@/components/gallery/Gallery';
export default function Home() {
  return (
    <div className="overflow-x-hidden recharge " style={{backgroundColor: "#020617"}}>
      <Landing/>
      <AboutRecharge/>
      <AboutRec/>
      <GallerySection/>
      {/* <div className="h-[200px] w-[100%] bg-white"></div> */}
    </div>
  );
}
