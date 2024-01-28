import React from 'react'
import Image from "next/image";

function AboutRecharge() {
  return (
    <div
    id="about-recharge"
    className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8   stretch-to-screen text-white p-10 lg:gap-x-20 bg-slate-950"
  >
    <div
      id="left"
      className="basis-1/2 order-last lg:order-first flex flex-col gap-y-5"
    >
      <div className="main text-5xl">
        <span className="socod text-left">About RECHARGE</span>
      </div>

      <p className=" text-lg  shadow-inner leading-loose">
        Rajalakshmi Institutions is proud to present its most prominent and
        signature Cultural fest - RECHARGE `&apos` 23, which promotes liberty, energy,
        and enthusiasm among both participants and spectators while also
        providing students an opportunity to explore and rediscover
        themselves.
      </p>
<a href="/" className="m-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">SHOW MORE</span>
</a>
    </div>

    <div id="right" className="basis-1/2 flex justify-center items-center video-border max-h-fit max-w-fit my-8">
   
    <Image
            src="/logo1.webp"
            className="shadow-2xl rounded-xl z-10 neon-border "
            alt=""
            width={3000}
            height={1000}
          />
    </div>
  </div>
  )
}

export default AboutRecharge