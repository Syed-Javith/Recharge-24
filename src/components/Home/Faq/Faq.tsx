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
        answer="Yes, absolutely! Buses will ply from all main routes to and from the college after the proshows. If you want to know bus route details and get other transport-related information, please visit rectransport.com"
      />
      <FaqSection
        question="Merch"
        answer="Merch"
      />
      <FaqSection
        question="How do I sign up for events? "
        answer= "All our events are listed on our website. To register, head to https://test.rechargefest.in/event and register for your event of choice. Please note that we will not entertain on-spot registrations."
      />
      <FaqSection
        question="Is it possible for me to participate in the events alone and not attend the proshows?"
        answer="Although we'd love for you to attend the proshows, it is not mandatory for you to purchase proshow passes to participate in our events. Please remember that you will have to leave the college premises before the proshows begin and you will have to arrange for transport on your own. "
      />
      <FaqSection
        question="I am an alumni of REC/RSA, how can I purchase Recharge Proshow passes?"
        answer="REC and RSA alumni can get their proshow passes from the head office at Kilpauk."
      />
      <FaqSection
        question="Can individuals who are not currently enrolled in college or school, and who are not alumni of REC or RSA, still attend the Recharge proshows?"
        answer="Oh yes! Recharge proshows are open to all! To purchase your tickets, please head to (BookMyShow Link)"
      />
      <FaqSection
        question="I do not wish to participate in events and I do not want to attend the proshows? Will I be allowed to enter the college premises?"
        answer="No. You must either be an event participant or must have purchased proshow tickets to enter the campus."
      />
      <FaqSection
        question="Can I re-enter the campus after leaving on the same day?"
        answer="No. Once you leave college premises, you will not be allowed to re-enter on the same day."
      />
      <FaqSection
      question="Will I be given a new wristband if I damage mine before the proshow for the day gets over? "
      answer="No, you will not be given a new wristband even if you damage yours. Our wristbands are of high-quality and it is advised that you wear yours without damaging it in any way."
    />
    <FaqSection
        question="I am a school student. Can I participate in the events?"
        answer="School students can only attend the proshows. They cannot register nor participate in events."
      />
      
    </div>
  );
};

export default FAQ;