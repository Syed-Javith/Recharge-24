"use client"
import { ProShow } from "@/types/models"
import ProShowCard from "./ProShowCard"
import { FC, useState } from "react"

interface ProshowGroupProps {
  proshows: ProShow[],
  is_rec: boolean
 }

const ProShowGroup : FC<ProshowGroupProps> = ({ proshows, is_rec }) => {
  const [stdDenied, setStdDenied] = useState<boolean>(false)
  const [stdDeniedDate, setStdDeniedDate] = useState<number>(-1)

  return (
    proshows?.length > 0 ?
      proshows.map((proshow) => (
        <ProShowCard
        key={proshow.id} 
        proshow={proshow} 
        is_rec={is_rec} 
        stdDenied={stdDenied} 
        setStdDenied={setStdDenied} 
        stdDeniedDate={stdDeniedDate} 
        setStdDeniedDate={setStdDeniedDate} 
        />
      )) :
      <></>
  )
}

export default ProShowGroup