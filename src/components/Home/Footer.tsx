import Link from "next/link";
import { InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";
import localFont from "next/font/local";

const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const subtitleFont = localFont({ src: '../../../public/fonts/chakra.ttf' })

const Footer = () => {
    return (
      <>
        <footer className="text-white min-w-full md:px-28 container mx-0  bg-slate-900 rounded-t-lg justify-start items-center">
            
              <div className="flex md:flex-row flex-col justify-between">
                <div className="">
                  <div className="flex justify-center items-center">
                    <img src="logo24.png" alt="Recharge Logo" className="h-30 w-40 items-center justify-center m-2"/>
                  </div>
                  
                  <div className={`${subtitleFont.className} pb-5`}>
                    <p className={`${subtitleFont.className}`}>Rajalakshmi Engineering College,</p>
                    <p className={`${subtitleFont.className}`}>Rajalakshmi Nagar,</p>
                    <p className={`${subtitleFont.className}`}>Thandalam,</p>
                    <p className={`${subtitleFont.className}`}>Chennai - 602105.</p>
                  </div>               

                </div>

                <div className="flex-col justify-center my-auto pb-5 items-center">
                  
                  <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>Visit Us</h1>
                    <div className="p-2">
                    <MapPinIcon className="inline-block"></MapPinIcon>
                    <Link className={`${subtitleFont.className} pl-2`} href="https://maps.app.goo.gl/cCKCRo8WBZTMfn3a9">Location</Link>
                    </div>
          
                    <div className="p-2">
                    <InstagramIcon className="inline-block"></InstagramIcon>
                    <Link className={`${subtitleFont.className} pl-2`} href="https://www.instagram.com/recharge_fest/">Instagram</Link>
                    </div>
                    </div> 

                    <div className="flex items-center">
                        <div>
                          <div className="pb-3">
                          <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>For Sponsorship</h1>
                          <div className="pb-2 inline-block">
                          <MailIcon className="inline-block pl-0"></MailIcon>
                          <Link className={`${subtitleFont.className} text-sm pl-2 md:text-lg`} href="mailto:sponsorship.recharge@rajalakshmi.edu.in">sponsorship.recharge@rajalakshmi.edu.in</Link>
                          </div>
                        </div>  

                      <span className="p-1"></span>     

                      <div className="">
                      <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>For Queries</h1>
                      <div className="pb-1 inline-block">
                      <MailIcon className="inline-block pl-0"></MailIcon>
                      <Link className={`${subtitleFont.className} text-sm pl-2 md:text-lg`} href="mailto:support.recharge@rajalakshmi.edu.in">support.recharge@rajalakshmi.edu.in</Link>
                      </div>
                    </div>

                
                  </div>
                </div>
              </div>
        </footer>
      </>   
    );
  };
  
  export default Footer;
