
import Landing from '../components/Home/Landing'
import AboutRecharge from "@/components/Home/AboutRecharge";
import AboutRec from "@/components/Home/AboutRec";
import GallerySection from '@/components/gallery/Gallery';
import FAQ from '@/components/Home/Faq';
import Footer from '@/components/Home/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden recharge bg-[#020617]">
      <Landing/>
      <AboutRecharge/>
      <AboutRec/>
      <GallerySection/>
      <FAQ/>
      <Footer/>
      {/* <div className="h-[200px] w-[100%] bg-white"></div> */}
    </div>
  );
}
