import localFont from 'next/font/local';
import FaqSection from './FaqSection';
import styles from './Faq.module.css'

const titleFont = localFont({ src: '../../../public/fonts/Jura.ttf' })

const FAQ = () => {
  return (
    <div className="container mx-auto md:px-40 md:py-20">
      <h1 className={` ${titleFont.className} ${styles.faqTitle} text-3xl font-bold mb-6`}>Frequently Asked Questions</h1>
      <FaqSection
        question="How do I create a new account?"
        answer="You can create a new account by registering using the register button. Once you have created an account, you will be able to log in to your account using your email and password."
      />
      <FaqSection
        question="How do I create a new team?"
        answer="Navigate to your event of choice and click on that event. Then click on the create team button. Copy and share th team code to your team mates."
      />
      <FaqSection
        question="How do I join a new team?"
        answer="Navigate to the event of your choice and click on the event. Then click on the join team button to join a team. Enter the code given by the team leader to the join the team"
      />
      <FaqSection
        question="How do I register for Proshows?"
        answer="Navigate to the Proshows page and you can see the list of Proshows for the Recharge fest. You can see the various tickets available for booking a proshow like Premium,Standard and Combo tickets. Click on any of them to book your Proshow"
      />
      <FaqSection
        question="Are non-REC students allowed for Recharge fest?"
        answer="Yes,students from all colleges and schools are allowed to attend Recharge Fest."
      />
      <FaqSection
        question="What is the amount for Proshow registration?"
        answer="Navigate to the Proshows page to explore various tickets available for registration. Once you click on a ticket you will redirected to the payment page"
      />
      
    </div>
  );
};

export default FAQ;

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// export default function AccordionDemo() {
//   return (
//     <div className="p-10">
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's animated by default, but you can disable it if you prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//     </div>
    
//   )
// }
