import React from 'react'
import localFont from "next/font/local";
import AboutStyle from "../about-recharge/aboutrec.module.css"

const SketchFont = localFont({ src: '../../../public/fonts/Jura.ttf' })
const paraFont = localFont({ src: "../../../public/fonts/chakra.ttf" })
const page = () => {
    return (
        <div id='about-recharge' className={`h-screen-full ${AboutStyle.aboutpic}`}>
            <div className='text-center container md:w-[80vw] w-auto pt-20'>
                <div className={AboutStyle.glass}>
                    <h1 className={`md:text-[3.5rem] text-[1.5rem] font-bold mb-4 ${SketchFont.className} ${AboutStyle.neon}`}>

                        About REC

                    </h1>
                    <div className={`md:text-[1.25rem] flex flex-col gap-4 md:px-12 p-4 text-justify ${paraFont.className}`}>
                        <p>Rajalakshmi Engineering College, an autonomous institution affiliated with Anna University, Chennai, was established in 1997 and has been producing out high-quality professionals ever since. REC has aided thousands of students in landing their dream careers and becoming professionals in their fields.
                            REC has a student-centric approach, offering various student-run societies and clubs that organize hackathons, symposiums, seminars, workshops and provide a diverse range of programs to its 8000+ students. REC's students are true champions, earning accolades in a myriad of fields. Our intra-collegiate events offer students a break from engineering, creating unforgettable experiences. Mark your calendars for Recharge &apos;23, our electrifying national cultural fest. It showcases the incredible talents of students from all over the country, with jaw-dropping performances and show-stopping appearances that will leave you wanting more! These events not only provide students with a refreshing break from their academic routines, but also offer them an opportunity to interact with professionals from various fields, inspiring and motivating them to pursue their passions.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
