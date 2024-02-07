import Link from "next/link";
import { InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";


const Footer = () => {
    return (
      <>
        <footer className="text-white px-28 container mx-0  bg-slate-900 rounded-t-lg justify-start items-center">
            
              <div className="flex md:flex-row flex-col justify-between">
                <div className="">
                  <div className="flex justify-center items-center">
                    <img src="logo24.png" alt="Recharge Logo" className="h-30 w-40 items-center justify-center m-2"/>
                  </div>
                  
                  <div className="pb-5">
                    <p>Rajalakshmi Engineering College,</p>
                    <p>Rajalakshmi Nagar,</p>
                    <p>Thandalam,</p>
                    <p>Chennai - 602105.</p>
                  </div>               

                </div>

                <div className="flex-col justify-center my-auto items-center">
                  
                  <h1 className=" text-2xl font-semibold pb-2 text-gray-400">Visit Us</h1>
                    <div className="p-2">
                    <MapPinIcon className="inline-block"></MapPinIcon>
                    <Link className="pl-2" href="https://maps.app.goo.gl/cCKCRo8WBZTMfn3a9">Location</Link>
                    </div>
          
                    <div className="p-2">
                    <InstagramIcon className="inline-block"></InstagramIcon>
                    <Link className="pl-2" href="https://www.instagram.com/recharge_fest/">Instagram</Link>
                    </div>
                    </div> 

                    <div className="flex items-center">
                        <div>
                          <div className="pb-3">
                          <h1 className=" text-2xl font-semibold pb-2 text-gray-400">For Sponsorship</h1>
                          <div className="pb-2 inline-block">
                          <MailIcon className="inline-block pl-0"></MailIcon>
                          <Link className="text-sm pl-2 md:text-lg" href="mailto:sponsorship.recharge@rajalakshmi.edu.in">sponsorship.recharge@rajalakshmi.edu.in</Link>
                          </div>
                        </div>  

                      <span className="p-1"></span>     

                      <div className="">
                      <h1 className=" text-2xl font-semibold pb-2 text-gray-400">For Queries</h1>
                      <div className="pb-1 inline-block">
                      <MailIcon className="inline-block pl-0"></MailIcon>
                      <Link className="text-sm pl-2 md:text-lg" href="mailto:support.recharge@rajalakshmi.edu.in">support.recharge@rajalakshmi.edu.in</Link>
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
