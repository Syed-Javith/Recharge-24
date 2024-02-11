import Link from "next/link";
import { InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";
import localFont from "next/font/local";

const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const subtitleFont = localFont({ src: '../../../public/fonts/chakra.ttf' })

const Footer = () => {
    return (
      <>
        <footer className="text-white min-w-full md:px-28 pb- container mx-0  bg-slate-900 rounded-t-lg justify-start items-center">
        <div className="flex lg:flex-row flex-col justify-between items-start ls:items:center lg:items-start py-5">
                
                  <div className="md:p-5 items-center md:items-start">
                    <img src="/R24.png" alt="Recharge Logo" className="h-44 w-50 items-center justify-center m-2 bg-[#0f172a]"/>
                  </div>
                  
                  <div className={`${subtitleFont.className} md:p-5 lg:justify-start`}>
                      <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>Happening at</h1>
                        <p className={`${subtitleFont.className}`}>Rajalakshmi Engineering College,</p>
                        <p className={`${subtitleFont.className}`}>Rajalakshmi Nagar,</p>
                        <p className={`${subtitleFont.className}`}>Thandalam,</p>
                        <p className={`${subtitleFont.className}`}>Chennai - 602105.</p>

                        <div className="flex-col justify-center my-auto pb-5 items-center">
                      
                      {/* <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>Visit Us</h1> */}
                        <div className="pr-2 pt-2 inline-block">
                        {/* <MapPinIcon className="inline-block"></MapPinIcon> */}
                        <img src="/gmap.png" alt="" className="h-5 w-5 inline-block"/>
                        <Link className={`${subtitleFont.className} pl-2`} href="https://maps.app.goo.gl/cCKCRo8WBZTMfn3a9">Location</Link>
                        </div>
              
                        
                        </div>
                  </div>               

                

                

                    <div className="md:p-5 items-center lg:justify-start">
                      <div>
                                    <div className="pb-3 items-center">
                                    <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>For Sponsorship</h1>
                                    <div className="pb-2 inline-flex items-center">
                                    {/* <MailIcon className="inline-block pl-0"></MailIcon> */}
                                    <img src="/mail.png" alt="" className="h-5 w-5 inline-block opacity-75"/>
                                    <Link className={`${subtitleFont.className} text-sm pl-2 md:text-lg`} href="mailto:sponsorship.recharge@rajalakshmi.edu.in">sponsorship.recharge@rajalakshmi.edu.in</Link>
                                    </div>
                                    </div>  

                                    {/* <span className="p-1"></span>      */}

                                    <div className="">
                                    <h1 className={` ${titleFont.className} text-2xl font-semibold pb-2 text-gray-400`}>For Queries</h1>
                                    <div className="pb-2 inline-flex items-center">
                                    {/* <MailIcon className="inline-block pl-0"></MailIcon> */}
                                    <img src="/mail.png" alt="" className="h-5 w-5 inline-block opacity-75"/>
                                    <Link className={`${subtitleFont.className} text-sm pl-2 md:text-lg`} href="mailto:support.recharge@rajalakshmi.edu.in">support.recharge@rajalakshmi.edu.in</Link>
                                    </div>
                                    <div className="pr-2 ">
                                    {/* <InstagramIcon className="inline-block"></InstagramIcon> */}
                                    <img src="/insta.png" alt="" className="h-5 w-5 inline-block"/>
                                    <Link className={`${subtitleFont.className} pl-2`} href="https://www.instagram.com/recharge_fest/">Instagram</Link>
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
