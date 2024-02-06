"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import './Landing.css'


const Landing = () => {
    useEffect(()=>{
        function rotateRectangles() {
            let rectangle : NodeList  = document.querySelectorAll('.fin');
            rectangle.forEach(function(rect : Node) {
                if (rect instanceof HTMLElement) {
                    const myElement: HTMLElement = rect;
                    myElement.style.transform = 'rotate(0deg)';
                }
            });
        }        
        
        function hoverRotate() {
            var rotateButton = document.getElementById('front-btn');
            var leftElements = document.querySelectorAll('.fin-l');
            var rightElements = document.querySelectorAll('.fin-r');
            rotateButton?.addEventListener('mouseenter', function() {
                leftElements.forEach(function(element) {
                    element.classList.add('rotate-l');
                });
                rightElements.forEach(function(element) {
                    element.classList.add('rotate-r');
                });
            });
            
            rotateButton?.addEventListener('mouseleave', function() {
                leftElements.forEach(function(element) {
                    element.classList.remove('rotate-l');
                });
                rightElements.forEach(function(element) {
                    element.classList.remove('rotate-r');
                });
            });
        }
        
        console.log("DOne")
        rotateRectangles();
        hoverRotate()
    })
  return (
    <main id='landing-main group'>
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
    </main>
  )
}

export default Landing