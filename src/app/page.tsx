import Landing from '../components/Home/Landing/Landing'
import GallerySection from '@/components/gallery/Gallery';
import FAQ from '@/components/Home/Faq';
import Footer from '@/components/Home/Footer';
import AboutSection from '@/components/Home/About/AboutSection';
import ProshowSection from '@/components/Home/Proshow/ProshowSection';

export default function Home() {
  return (
    // <div className="overflow-x-hidden recharge bg-[#020617]">
    <div className="overflow-x-hidden recharge bg-[#030711]">
      <Landing/>
     <AboutSection />
      <ProshowSection />
      <GallerySection/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
