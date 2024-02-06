import Link from "next/link";
import { InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";


const Footer = () => {
    return (
      <>
        <footer className="text-white p-8 container mx-auto justify-start items-center">
            
              <div className="flex md:flex-row flex-col justify-between">
                <div className="">
                  {/* <h1 className="md:text-3xl text-3xl font-bold pb-5">Recharge</h1> */}
                  <div className="flex justify-center items-center">
                    <img src="logo24.png" alt="Recharge Logo" className="h-30 w-40 items-center justify-center m-2"/>
                  </div>
                  
                  <div className="pb-5">
                    <p>Rajalakshmi Engineering College</p>
                    <p>Rajalakshmi Nagar,</p>
                    <p>Thandalam,</p>
                    <p>Chennai - 602105.</p>
                    
                  </div>                
                  <div className="pb-5">
                    <div className="p-2 inline-block">
                    <MapPinIcon className="inline-block"></MapPinIcon>
                    <Link className="pl-2" href="https://maps.app.goo.gl/cCKCRo8WBZTMfn3a9">Location</Link>
                    </div>
                  
                  {/* <span className="p-5"></span> */}
                  <div className="p-2 inline-block">
                  <InstagramIcon className="inline-block"></InstagramIcon>
                  <Link className="pl-2" href="https://www.instagram.com/recharge_fest/">Instagram</Link>
                  </div>
                  
                  </div>                  
                </div>
                <div className="flex items-center">
                  <div>
                  <div className="pb-3">
                      <h1 className="md:text-3xl text-2xl font-bold pb-3">For Sponsorship</h1>
                      <div className="pb-2 inline-block">
                      <MailIcon className="inline-block pl-0"></MailIcon>
                      <Link className="text-sm pl-2 md:text-lg" href="mailto:sponsorship.recharge@rajalakshmi.edu.in">sponsorship.recharge@rajalakshmi.edu.in</Link>
                      </div>
                      
                  </div>   
                  <span className="p-3"></span>               
                  <div className="pb-3">
                      <h1 className="md:text-3xl text-2xl font-bold pb-3">For Queries</h1>
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
