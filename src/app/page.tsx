import Image from "next/image";
import Landing from '../components/Home/Landing'
import AboutRecharge from "@/components/Home/AboutRecharge";
import AboutRec from "@/components/Home/AboutRec";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Landing/>
      <AboutRecharge/>
      <AboutRec/>
    </div>
  );
}
