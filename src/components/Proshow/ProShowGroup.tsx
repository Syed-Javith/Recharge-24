"use client"
import { ProShow } from "@/types/models"
import ProShowCard from "./ProShowCard"
import { useState } from "react"

const ProShowGroup = ({proshows , is_rec} : {proshows : ProShow[] ,  is_rec : boolean}) =>{
 const [ stdDenied , setStdDenied ] = useState<boolean>(false)
 const [ stdDeniedDate , setStdDeniedDate ] = useState<number>(-1)

  return (
    proshows?.length > 0 ? 
    proshows.map((proshow) => (
    <ProShowCard proshow={proshow} is_rec={is_rec} stdDenied={stdDenied} setStdDenied={setStdDenied} />     
   )) :
    <></> 
  )
  }

export default ProShowGroup