
import Landing from '../components/Home/Landing'
import AboutRecharge from "@/components/Home/AboutRecharge";
import AboutRec from "@/components/Home/AboutRec";
import GallerySection from '@/components/gallery/Gallery';

// const BIRDS =  require("vanta/src/vanta.birds");

export default function Home() {
  return (
    <div className="overflow-x-hidden recharge bg-[#020617]">
      <Landing/>
      <AboutRecharge/>
      <AboutRec/>
      <GallerySection/>
      {/* <BirdBg/> */}
      {/* <div className="h-[200px] w-[100%] bg-white"></div> */}
    </div>
  );
}
