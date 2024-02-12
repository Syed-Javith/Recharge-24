import React from 'react'
import About from './About'

const AboutSection = () => {
  return (
    <div className='my-12 py-4'>
      <About isReverse={false} title='ABOUT REC' content='Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          producing out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.' image='/banner.jpg'/>
      <About isReverse={true} title='ABOUT RECHARGE' content={"Recharge is Rajalakshmi Engineering College's signature, annual, intercollegiate cultural fest. The previous installments of Recharge and the other fests held at REC were massive successes and featured celebrity guests across various fields of the entertainment industry. Showcasing music giants like Jonita Gandhi, Santhosh, Narayanan, Andrea Jeremiah, DJ Gowtham and bands like Masala Coffee, REC went a step farther and also brought in eminent sportspersons like Kris Srikkanth, T. Natarajan, Dwayne Bravo and Suresh Raina. Showbiz personalities like Gautham Vasudev Menon and Karthi Sivakumar also stole the limelight.".slice(0,300)} image='https://alphatest-recharge23.netlify.app/static/media/dj.5155e6fa9d36cf2dcd12.webp' />
    </div>
  )
}

export default AboutSection
