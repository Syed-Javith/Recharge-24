import React from 'react'
import "./about.css"

const AboutRec = () => {
  return (
    <div
      id="about-rec"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 bg-slate-950"
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
      >

        <img
          className="shadow-2xl  rounded-xl  z-10 neon-border cut"
          id="about-img"
          src="/banner.jpg"
          alt=""
          width={3000}
          height={1000}
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className="socod text-left">About REC</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          producing out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </p>
        <button className='bg-gradient-to-r from-[#ff0055] to-[#ffdd1f] w-[40%] p-4 m-auto rounded-md'>
          SHOW MORE
        </button>
      </div>
    </div>
  )
}

export default AboutRec