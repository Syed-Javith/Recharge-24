import React from 'react'
import SpotStyle from "./spotlight.module.css"
const SpotlightCard = ({ num , celeb } : { num : number , celeb : string}) => {

  const top = "-400px";
 
  return ( 
    <>
      <div className={SpotStyle.sectioncol}>
        <div className={SpotStyle.section}>
          <div className={SpotStyle.sectionin}>
            <img style={{minHeight : "450px"}} src="https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp" alt="" className='object-cover'/>
          </div>
        </div>
      </div>
      <div className={`${SpotStyle.hovertext} ${ num === 1 && SpotStyle.t1 } ${num === 2 && SpotStyle.t2} ${num===3 && SpotStyle.t3}`}>
        <h2 >{celeb}</h2>
      </div>
    </>
  )
}

export default SpotlightCard
