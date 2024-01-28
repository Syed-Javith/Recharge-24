import React from 'react'
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <div className='bg-slate-950	h-screen w-screen'>

<div className="flex flex-col items-center gap-y-8 px-[0.5rem] text-center">
          <Image
            src="/logo1.webp"
            className="h-40 lg:scale-125 md:h-64 w-auto"
            alt=""
            width={3000}
            height={1000}
          />
          <h2 className="font-semibold  text-2xl capitalize">
            Recharge Your Spirit and Reignite Your Passion!
          </h2>
          <h2 className="font-semibold text-2xl capitalize">23 | 24 | 25 March</h2>
          <div className="flex flex-col justify-center items-center">
<a href="/" className=" m-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">EXPLORE EVENTS</span>
</a>
           
<a href="/" className="m-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">BUY TICKETS</span>
</a>
          </div>

        </div>

    </div>
  )
}

export default Landing