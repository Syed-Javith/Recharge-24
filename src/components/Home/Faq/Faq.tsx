import localFont from 'next/font/local';
import FaqSection from './FaqSection';
import FaqStyle from './Faq.module.css'

const titleFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })

const FAQ = () => {
  return (
    <div className="container mx-auto md:px-35 md:py-20">
      <h1 className={` ${titleFont.className} ${FaqStyle.faqTitle} text-3xl font-bold mb-6 uppercase`}>Frequently Asked Questions</h1>
      <FaqSection
        question="Can transportation be availed on all three days of Recharge'24?"
        answer={(
        <span>
          Yes, absolutely! Buses will ply from all main routes to and from the college after the proshows. If you want to know bus route details and get other transport-related information, please visit rectransport.com 
          </span>)}
        />
      {/* <FaqSection
        question="Merch"
        answer="Merch"
      /> */}
      <FaqSection
        question="How do I sign up for events? "
        answer={(
          <span>
            All our events are listed on our website. To register, head to {" "}
            <a href="https://test.rechargefest.in/event" className='underline text-blue-500'>https://test.rechargefest.in/event</a>{" "}
            and register for your event of choice. Please note that we will not entertain on-spot registrations.
          </span>
        )}
      />
      <FaqSection
        question="Is it possible for me to participate in the events alone and not attend the proshows?"
        answer={(
          <span>
            Oh yes! Recharge proshows are open to all! Keep an eye on our instagram handle @recharge_fest where we will update you 
          </span>
        )}
      />
      <FaqSection
        question="I am an alumni of REC/RSA, how can I purchase Recharge Proshow passes?"
        answer={(<span>REC and RSA alumni can get their proshow passes from the head office at Kilpauk.</span>)}
      />
      <FaqSection
        question="Can individuals who are not currently enrolled in college or school, and who are not alumni of REC or RSA, still attend the Recharge proshows?"
        answer={(<span>Oh yes! Recharge proshows are open to all! Keep an eye on our instagram handle <a href='https://www.instagram.com/recharge_fest/'>@recharge_fest</a> where we will update you
        </span>)}
      />
      <FaqSection
        question="I do not wish to participate in events and I do not want to attend the proshows? Will I be allowed to enter the college premises?"
        answer={(<span>No. You must either be an event participant or must have purchased proshow tickets to enter the campus.</span>)}
      />
      <FaqSection
        question="Can I re-enter the campus after leaving on the same day?"
        answer={(<span>No. Once you leave college premises, you will not be allowed to re-enter on the same day.</span>)}
      />
      <FaqSection
      question="Will I be given a new wristband if I damage mine before the proshow for the day gets over? "
      answer={(<span>No, you will not be given a new wristband even if you damage yours. Our wristbands are of high-quality and it is advised that you wear yours without damaging it in any way.</span>)}
    />
    <FaqSection
        question="I am a school student. Can I participate in the events?"
        answer={(<span>School students can only attend the proshows. They cannot register nor participate in events.</span>)}
      />
      
    </div>
  );
};

export default FAQ;