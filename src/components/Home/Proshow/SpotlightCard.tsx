import React from 'react'
import "./spotlight.css"
const SpotlightCard = () => {
  return (
    // <div classNameName="wrapper">
    //   <div classNameName="image-wrapper">
    //     <img src="https://alphatest-recharge23.netlify.app/static/media/jonita.159cca1adfc280ca2e8a.webp" /></div>
    //   <div classNameName="header-wrapper">
    //     <h1>Poster Art</h1>
    //   </div>
    // </div>
    // <div classNameName="wrap-image">
    //  <img src="https://alphatest-recharge23.netlify.app/static/media/jonita.159cca1adfc280ca2e8a.webp" height={"300px"} width={"250px"}/>
    // </div>
    <>
      <div className="section-col">
        <div className="section">
          <div className="section-in">
            <img src="https://alphatest-recharge23.netlify.app/static/media/jonita.159cca1adfc280ca2e8a.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="hover-text">
        <h2>Jonita Gandhi</h2>
      </div>
    </>
  )
}

export default SpotlightCard
