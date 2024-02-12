import React, { FC } from 'react'
import AboutStyle from "./about.module.css"
import localFont from 'next/font/local'
import Link from 'next/link'
import Neon from '@/components/Text/Neon'

const SketchFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })

interface AboutProps {
    image? : string ,
    video? : string ,
    content : string,
    title : string,
    isReverse : boolean
}
const About : FC<AboutProps> = ({ image , video , content , title , isReverse}) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 bg-[#030711] ${isReverse && "lg:flex-row-reverse"}`}
      >
        <div
          id="left"
          className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
        >

          { 
          image && 
          <img
            className={`shadow-2xl  rounded-xl  z-10 neon-border ${AboutStyle.cut}`}
            id="about-img"
            src={image}
            width={3000}
            height={1000}
          />
           }
          {
            video 
            &&
            <video muted className={`shadow-2xl  rounded-xl  z-10 neon-border ${AboutStyle.cut}`} loop autoPlay src={video} typeof='video/mp4'></video>
          }
        </div>

        <div id="right" className="basis-1/2 flex flex-col gap-y-5">
          <div className="main text-5xl">
            <Neon text={title} />
          </div>

          <p className=" text-lg  shadow-inner leading-loose">
          {content}
          </p>

          <Link href={title=="ABOUT REC" ? "/about-rec" : "/about-recharge"}>
            <p className={AboutStyle.pulsate}>SHOW MORE</p>
          </Link>
        </div>
      </div>
      <div className={AboutStyle.divider}>
        {title!=="ABOUT REC" && <div className={AboutStyle.third}></div>}
        <div className={AboutStyle.first}></div>
        {title=="ABOUT REC" && <div className={AboutStyle.second}></div>}
      </div>
      </>
  )
}

export default About