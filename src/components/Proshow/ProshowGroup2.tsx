import { ProShow } from "@/types/models"
import ProShowCard from "./ProShowCard"
import { FC, useState } from "react"
import ProShowCard2 from "./ProShowCard2"

interface ProshowGroupProps {
    proshows: ProShow[],
    is_rec: boolean
}

const ProShowGroup2: FC<ProshowGroupProps> = ({ proshows, is_rec }) => {

    return (
        proshows?.length > 0 ?
            proshows.map((proshow) => {
                
                <ProShowCard2
                    key={proshow.id}
                    proshow={proshow}
                    is_rec={is_rec}
                    stdDenied={stdDenied}
                    setStdDenied={setStdDenied}
                    stdDeniedDate={stdDeniedDate}
                    setStdDeniedDate={setStdDeniedDate}
                />
            }) :
            <></>
    )
}

export default ProShowGroup2