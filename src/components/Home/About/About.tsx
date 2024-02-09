import React, { FC } from 'react'
import AboutStyle from "./about.module.css"
import localFont from 'next/font/local'
import Link from 'next/link'

const SketchFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })

interface AboutProps {
    image : string ,
    content : string,
    title : string,
    isReverse : boolean
}
const About : FC<AboutProps> = ({ image , content , title , isReverse}) => {
  return (
    <div
      className={`flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 bg-[#030711] ${isReverse && "lg:flex-row-reverse"}`}
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
      >

        <img
          className={`shadow-2xl  rounded-xl  z-10 neon-border ${AboutStyle.cut}`}
          id="about-img"
          src={image}
          alt=""
          width={3000}
          height={1000}
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className={`socod text-left ${SketchFont.className} ${AboutStyle.neon}`}>{title}</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
         {content}
        </p>

        <Link href={title=="ABOUT REC" ? "/about-rec" : "/about-recharge"}>
          <p className={AboutStyle.pulsate}>SHOW MORE</p>
        </Link>
      </div>
    </div>
  )
}

export default About