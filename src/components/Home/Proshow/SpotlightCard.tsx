import React from 'react'
import Style from "./spotlight.module.css"
const SpotlightCard = ({ num , celeb } : { num : number , celeb : string}) => {

  const top = "-400px";
 
  return ( 
    <>
      <div className={Style.sectioncol}>
        <div className={Style.section}>
          <div className={Style.sectionin}>
            <img style={{minHeight : "450px"}} src="https://alphatest-recharge23.netlify.app/static/media/andrea1.f4f70c5e592dfb57baca.webp" alt="" className='object-cover'/>
          </div>
        </div>
      </div>
      <div className={`${Style.hovertext} ${ num === 1 && Style.t1 } ${num === 2 && Style.t2} ${num===3 && Style.t3}`}>
        <h2 >{celeb}</h2>
      </div>
    </>
  )
}

export default SpotlightCard
