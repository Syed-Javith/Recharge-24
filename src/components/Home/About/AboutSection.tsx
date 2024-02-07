import React from 'react'
import About from './About'

const AboutSection = () => {
  return (
    <div className='my-12 py-4'>
      <About isReverse={false} title='About REC' content='Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          producing out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.' image='/banner.jpg'/>
      <About isReverse={true} title='About Recharge' content='Rajalakshmi Institutions is proud to present its most prominent and
        signature Cultural fest - RECHARGE `&apos` 23, which promotes liberty, energy,
        and enthusiasm among both participants and spectators while also
        providing students an opportunity to explore and rediscover
        themselves.' image='https://alphatest-recharge23.netlify.app/static/media/dj.5155e6fa9d36cf2dcd12.webp' />
    </div>
  )
}

export default AboutSection
