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
                <p>Boasting over 100+ events, ranging from music and dance to sports and various other exciting genres, Recharge&apos;24 is set to provide students from across the nation a platform to showcase their talents and express themselves. Recharge&apos;24 will feature an exciting lineup of celebrities, covering electrifying music performances from musical guests and  DJs, as well as iconic personalities with a sports background. </p>

                <p>Boasting over 100+ events, ranging from music and dance to sports and various other exciting genres, Recharge&apos;24 is set to provide students from across the nation a platform to showcase their talents and express themselves. </p>

                <p>Recharge&apos;24 will feature an exciting lineup of celebrities, covering electrifying music performances from musical guests and DJs, as well as iconic personalities with a sports background. </p>

                <p>What are you waiting for? Get set to recharge and revitalize! Get your passes today and dive into the electric atmosphere that Recharge&apos;24 promises to offer!</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default page
