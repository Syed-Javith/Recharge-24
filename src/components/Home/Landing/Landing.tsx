// import React from 'react'

// import Link from "next/link";
// const Landing = () => {
//   return (
//     <div className='bg-[#101520]	h-screen w-screen'>

// <div className="flex flex-col items-center gap-y-8 px-[0.5rem] text-center">
//           <img
//             src="/logo1.webp"
//             className="h-40 lg:scale-125 md:h-64 w-auto"
//             alt=""
//             width={3000}
//             height={1000}
//           />
//           <h2 className="font-semibold  text-2xl capitalize">
//             Recharge Your Spirit and Reignite Your Passion!
//           </h2>
//           <h2 className="font-semibold text-2xl capitalize">23 | 24 | 25 March</h2>
//           <div className="flex flex-col justify-center items-center">
// <Link href="/event" className=" m-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
// <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
// <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
// <span className="relative text-white">EXPLORE EVENTS</span>
// </Link>
           
// <Link href="/proshow" className="m-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
// <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
// <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
// <span className="relative text-white">BUY TICKETS</span>
// </Link>
//           </div>

//         </div>

//     </div>
//   )
// }

// export default Landing

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import './Landing.css'

const Landing = () => {
  return (
    <main id='landing-main'>
        <div id="content">
            <img src="/Landing/logo1.png" alt="Recharge Logo" id="logo" />
            <img src="/Landing/eye.png" alt="Eye" id="eye" />
            <div id="fin-row-1">
                <img src="/Landing/fin1.png" className="fin fin-1 fin-l" />
                <img src="/Landing/fin2.png" className="fin fin-1 fin-r" />
            </div>
            <div id="fin-row-2">
                <img src="/Landing/fin1.png" className="fin fin-2 fin-l" />
                <img src="/Landing/fin2.png" className="fin fin-2 fin-r" />
            </div>
            <div id="fin-row-3">
                <img src="/Landing/fin1.png" className="fin fin-3 fin-l" />
                <img src="/Landing/fin2.png" className="fin fin-3 fin-r" />
            </div>
            <div id="fin-row-4">
                <img src="/Landing/fin1.png" className="fin fin-4 fin-l" />
                <img src="/Landing/fin2.png" className="fin fin-4 fin-r" />
                <h2 id="caption">Recharge Your Spirit And Reignite Your Passion!</h2>
                <h2 id="date">30 | 40 | 41 April</h2>
            </div>
            <div id="fin-row-5">
                <img src="/Landing/fin1.png" className="fin fin-5 fin-l" />
                <img src="/Landing/fin2.png" className="fin fin-5 fin-r" />
                <button className="btn" id="front-btn">BUY TICKETS</button>
                <button className="btn" id="bg-btn">BUY TICKETS</button>
                    <h3 id='landing-h3'>
                        <Link href='/event'>
                            Explore All Events 
                        </Link>
                    </h3>
            </div>
        </div>
        <img src="/Landing/light.png" alt="light" className="light" id="light-1" />
        <img src="/Landing/light.png" alt="light" className="light" id="light-2" />

        <Script src='/static/Landing.js' defer></Script>
    </main>
  )
}

export default Landing