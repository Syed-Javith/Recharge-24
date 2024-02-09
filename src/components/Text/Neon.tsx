import React, { FC } from 'react'
import NeonStyle from "./neon.module.css"
interface NeonProps{
    text : string
}
const Neon : FC<NeonProps> = ({text}) => {
  return (
    <h1 className={`${NeonStyle.neon} md:text-[3rem] text-[2.5rem]`}>
      {text}
    </h1>
  )
}

export default Neon
