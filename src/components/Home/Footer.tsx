import Link from "next/link";
import { InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";


const Footer = () => {
    return (
      <>
        <footer className="text-white p-8 container mx-auto justify-start items-center">
            
              <div className="flex md:flex-row flex-col justify-between">
                <div className="">
                  <h1 className="md:text-3xl text-3xl font-bold pb-5">Recharge</h1>
                  <div className="pb-5">
                    <p>Rajalakshmi Engineering College</p>
                    <p>Rajalakshmi Nagar,</p>
                    <p>Thandalam,</p>
                    <p>Chennai - 602105.</p>
                    
                  </div>                
                  <div className="pb-5">
                  <MapPinIcon className="inline-block"></MapPinIcon>
                  <Link className="p-2" href="https://maps.app.goo.gl/cCKCRo8WBZTMfn3a9">Location</Link>
                  <span className="p-5"></span>
                  <InstagramIcon className="inline-block"></InstagramIcon>
                  <Link className="p-2" href="https://www.instagram.com/recharge_fest/">Instagram</Link>
                  </div>                  
                </div>
                <div className="">
                  <div className="md:p-5 p-0 mb-2">
                      <h1 className="md:text-3xl text-2xl font-bold pb-5">For Sponsorship</h1>
                      <MailIcon className="inline-block"></MailIcon>
                      <Link className="p-3" href="mailto:sponsorship.recharge@rajalakshmi.edu.in">sponsorship.recharge@rajalakshmi.edu.in</Link>
                  </div>                  
                  <div className="md:p-5 p-0">
                      <h1 className="md:text-3xl text-2xl font-bold pb-5">For Queries</h1>
                      <MailIcon className="inline-block"></MailIcon>
                      <Link className="p-3" href="mailto:support.recharge@rajalakshmi.edu.in">support.recharge@rajalakshmi.edu.in</Link>
                  </div>
                </div>
              </div>
        </footer>
      </>
        

      
    );
  };
  
  export default Footer;
  