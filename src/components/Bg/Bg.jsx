"use client"
import React, { useEffect , useState , useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
const BirdBg = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    Foreground content goes here
  </div>
}

export default BirdBg