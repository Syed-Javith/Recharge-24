
import Landing from '../components/Home/Landing/Landing'
import AboutRecharge from "@/components/Home/About/AboutRecharge";
import AboutRec from "@/components/Home/About/AboutRec";
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
      {/* <img src="/LogoReveal2.gif" alt="" className='h-[95vh] w-[99%] object-fill' /> */}
    </div>
  );
}
