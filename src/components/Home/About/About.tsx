import React, { FC } from 'react'
import "./about.css"

interface AboutProps {
    image : string ,
    content : string,
    title : string,
    isReverse : boolean
}
const About : FC<AboutProps> = ({ image , content , title , isReverse}) => {
  return (
    <div
      className={`flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 bg-slate-950 ${isReverse && "lg:flex-row-reverse"}`}
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
      >

        <img
          className="shadow-2xl  rounded-xl  z-10 neon-border cut"
          id="about-img"
          src={image}
          alt=""
          width={3000}
          height={1000}
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className="socod text-left">{title}</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
         {content}
        </p>
        <button className='bg-gradient-to-r from-[#ff0055] to-[#ffdd1f] w-[40%] p-4 m-auto rounded-md'>
          SHOW MORE
        </button>
      </div>
    </div>
  )
}

export default About