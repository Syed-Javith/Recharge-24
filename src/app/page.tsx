import Image from "next/image";
import Landing from '../components/Landing'
import AboutRecharge from "@/components/AboutRecharge";
import AboutRec from "@/components/AboutRec";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Landing/>
      <AboutRecharge/>
      <AboutRec/>
    </div>
    // <main className="text-6xl flex min-h-screen flex-col items-center justify-between p-24">
    //   Recharge 2024 Home page
    // </main>
  );
}
