import FaqSection from './FaqSection';

const FAQ = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <FaqSection
        question="How do I create a new account?"
        answer="You can create a new account by clicking the button below. Once you have created an account, you will be able to log in to your account using your email and password."
      />
      <FaqSection
        question="How do I create a new account?"
        answer="You can create a new account by clicking the button below. Once you have created an account, you will be able to log in to your account using your email and password."
      />
      <FaqSection
        question="How do I create a new account?"
        answer="You can create a new account by clicking the button below. Once you have created an account, you will be able to log in to your account using your email and password."
      />
      <FaqSection
        question="How do I create a new account?"
        answer="You can create a new account by clicking the button below. Once you have created an account, you will be able to log in to your account using your email and password."
      />
      <FaqSection
        question="What is Lorem Ipsum?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FaqSection
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
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
