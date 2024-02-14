"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import LandingStyles from './Landing.module.css'


const Landing = () => {
    useEffect(() => {
        function rotateRectangles() {
            const rectangle: NodeList = document.querySelectorAll('.'+LandingStyles.fin);
            rectangle.forEach(function (rect: Node) {
                if (rect instanceof HTMLElement) {
                    const myElement: HTMLElement = rect;
                    myElement.style.transform = 'rotate(0deg)';
                }
            });
        }

        function hoverRotate() {
            const rotateButton = document.getElementsByClassName(LandingStyles.front_btn);
            const leftElements = document.querySelectorAll('.'+LandingStyles.fin_l);
            const rightElements = document.querySelectorAll('.'+LandingStyles.fin_r);
            rotateButton[0]?.addEventListener('mouseenter', function () {
                leftElements.forEach(function (element) {
                    element.classList.add(LandingStyles.rotate_l);
                });
                rightElements.forEach(function (element) {
                    element.classList.add(LandingStyles.rotate_r);
                });
            });

            rotateButton[0]?.addEventListener('mouseleave', function () {
                leftElements.forEach(function (element) {
                    element.classList.remove(LandingStyles.rotate_l);
                });
                rightElements.forEach(function (element) {
                    element.classList.remove(LandingStyles.rotate_r);
                });
            });
        }
        rotateRectangles();
        hoverRotate()
    })
    return (
        <main className={LandingStyles.landing_main}>
            <div className={LandingStyles.content}>
                <img src="/R24.png" alt="Recharge Logo" className={LandingStyles.landing_logo} />
                <img src="/Landing/eye.png" alt="Eye" className={LandingStyles.eye} />
                <div className={LandingStyles.fin_row_1}>
                    <img src="/Landing/fin1.png" className={`${LandingStyles.fin} ${LandingStyles.fin_1} ${LandingStyles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${LandingStyles.fin} ${LandingStyles.fin_1} ${LandingStyles.fin_r}`} />
                </div>
                <div className={LandingStyles.fin_row_2}>
                    <img src="/Landing/fin1.png" className={`${LandingStyles.fin} ${LandingStyles.fin_2} ${LandingStyles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${LandingStyles.fin} ${LandingStyles.fin_2} ${LandingStyles.fin_r}`} />
                </div>
                <div className={LandingStyles.fin_row_3}>
                    <img src="/Landing/fin1.png" className={`${LandingStyles.fin} ${LandingStyles.fin_3} ${LandingStyles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${LandingStyles.fin} ${LandingStyles.fin_3} ${LandingStyles.fin_r}`} />
                </div>
                <div className={LandingStyles.fin_row_4}>
                    <img src="/Landing/fin1.png" className={`${LandingStyles.fin} ${LandingStyles.fin_4} ${LandingStyles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${LandingStyles.fin} ${LandingStyles.fin_4} ${LandingStyles.fin_r}`} />
                    <h2 className={LandingStyles.caption}>Recharge Your Spirit And Reignite Your Passion!</h2>
                    <h2 className={LandingStyles.date}>30 | 40 | 41 April</h2>
                </div>
                <div className={LandingStyles.fin_row_5}>
                    <img src="/Landing/fin1.png" className={`${LandingStyles.fin} ${LandingStyles.fin_5} ${LandingStyles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${LandingStyles.fin} ${LandingStyles.fin_5} ${LandingStyles.fin_r}`} />

                    {/* <button className={`${LandingStyles.btn} ${LandingStyles.front_btn}`}>
                        <Link href={'/proshow'}>BUY PROSHOW TICKETS</Link>
                    </button>
                    <button className={`${LandingStyles.btn} ${LandingStyles.bg_btn}`}>BUY PROSHOW TICKETS</button> */}

                    <h3 className={LandingStyles.landing_h3}>
                        <Link href='/event'>
                            Explore All Events {'>'}
                        </Link>
                    </h3>

                </div>
            </div>
            <img src="/Landing/light.png" alt="light" className={`${LandingStyles.light} ${LandingStyles.light_1}`} />
            <img src="/Landing/light.png" alt="light" className={`${LandingStyles.light} ${LandingStyles.light_2}`} />
        </main>
    )
}

export default Landing