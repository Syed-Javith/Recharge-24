import React from 'react'
import localFont from "next/font/local";
import AboutStyle from "./aboutrec.module.css"

const SketchFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const paraFont = localFont({ src : "../../../public/fonts/chakra.ttf"})
const page = () => {
    return (
        <div id='about-recharge' className={`h-screen-full py-4 ${AboutStyle.aboutpic}`}>
        <div  className={`text-center container md:w-[80vw] w-auto m-auto pt-20 overflow-x-hidden`}>
            <div className={AboutStyle.glass}>
            <h1 className={`md:text-[3.5rem] text-[1.5rem] font-bold mb-4 ${SketchFont.className} ${AboutStyle.neon}`}>
                 
                 ABOUT RECHARGE
            
                </h1>
            <div className={`md:text-[1.25rem] flex flex-col gap-4 text-justify md:px-12 p-4  ${paraFont.className}`}>
                <p>Rajalakshmi Institutions is proud to present its most prominent and signature Cultural fest - RECHARGE&apos;24, which promotes liberty, energy, and enthusiasm among both participants and spectators while also providing students an opportunity to explore and rediscover themselves.</p>

                <p>Recharge is Rajalakshmi Engineering College&apos;s inter-collegiate annual cultural fest. The previous editions of Recharge and other cultural fests at REC featured celebrities from showbiz like Karthi Sivakumar, Santhosh Narayanan, Andrea Jeremiah, and DJ Gowtham. REC has also had the privilege of hosting eminent sports personalities like Kris Srikkanth, T. Natarajan, and Dwayne Bravo at our sport-driven events.</p>

                <p>With over 75+ events ranging from music and dance to sports and other exciting ones, Recharge &apos;24 provides students from across the country a platform to express themselves and showcase their talents. The pro-shows of Recharge &apos;24 will feature an exciting lineup that includes performances from music superstars and international DJs, as well as appearances from sports legends.</p>

                <p>So, what are you waiting for? Buy your passes now! Come feel reignited, rejuvenated, and revivified at Recharge &apos;24. We&apos;ll see you there!</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default page
