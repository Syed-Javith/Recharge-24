"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from './Landing.module.css'


const Landing = () => {
    useEffect(() => {
        function rotateRectangles() {
            const rectangle: NodeList = document.querySelectorAll('.'+styles.fin);
            rectangle.forEach(function (rect: Node) {
                if (rect instanceof HTMLElement) {
                    const myElement: HTMLElement = rect;
                    myElement.style.transform = 'rotate(0deg)';
                }
            });
        }

        function hoverRotate() {
            const rotateButton = document.getElementsByClassName(styles.front_btn);
            const leftElements = document.querySelectorAll('.'+styles.fin_l);
            const rightElements = document.querySelectorAll('.'+styles.fin_r);
            rotateButton[0]?.addEventListener('mouseenter', function () {
                leftElements.forEach(function (element) {
                    element.classList.add(styles.rotate_l);
                });
                rightElements.forEach(function (element) {
                    element.classList.add(styles.rotate_r);
                });
            });

            rotateButton[0]?.addEventListener('mouseleave', function () {
                leftElements.forEach(function (element) {
                    element.classList.remove(styles.rotate_l);
                });
                rightElements.forEach(function (element) {
                    element.classList.remove(styles.rotate_r);
                });
            });
        }
        rotateRectangles();
        hoverRotate()
    })
    return (
        <main className={styles.landing_main}>
            <div className={styles.content}>
                <img src="/Landing/logo1.png" alt="Recharge Logo" className={styles.landing_logo} />
                <img src="/Landing/eye.png" alt="Eye" className={styles.eye} />
                <div className={styles.fin_row_1}>
                    <img src="/Landing/fin1.png" className={`${styles.fin} ${styles.fin_1} ${styles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${styles.fin} ${styles.fin_1} ${styles.fin_r}`} />
                </div>
                <div className={styles.fin_row_2}>
                    <img src="/Landing/fin1.png" className={`${styles.fin} ${styles.fin_2} ${styles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${styles.fin} ${styles.fin_2} ${styles.fin_r}`} />
                </div>
                <div className={styles.fin_row_3}>
                    <img src="/Landing/fin1.png" className={`${styles.fin} ${styles.fin_3} ${styles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${styles.fin} ${styles.fin_3} ${styles.fin_r}`} />
                </div>
                <div className={styles.fin_row_4}>
                    <img src="/Landing/fin1.png" className={`${styles.fin} ${styles.fin_4} ${styles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${styles.fin} ${styles.fin_4} ${styles.fin_r}`} />
                    <h2 className={styles.caption}>Recharge Your Spirit And Reignite Your Passion!</h2>
                    <h2 className={styles.date}>30 | 40 | 41 April</h2>
                </div>
                <div className={styles.fin_row_5}>
                    <img src="/Landing/fin1.png" className={`${styles.fin} ${styles.fin_5} ${styles.fin_l}`} />
                    <img src="/Landing/fin2.png" className={`${styles.fin} ${styles.fin_5} ${styles.fin_r}`} />

                    <button className={`${styles.btn} ${styles.front_btn}`}>
                        <Link href={'/proshow'}>BUY PROSHOW TICKETS</Link>
                    </button>
                    <button className={`${styles.btn} ${styles.bg_btn}`}>BUY PROSHOW TICKETS</button>

                    <h3 className={styles.landing_h3}>
                        <Link href='/event'>
                            Explore All Events {'>'}
                        </Link>
                    </h3>

                </div>
            </div>
            <img src="/Landing/light.png" alt="light" className={`${styles.light} ${styles.light_1}`} />
            <img src="/Landing/light.png" alt="light" className={`${styles.light} ${styles.light_2}`} />
        </main>
    )
}

export default Landing