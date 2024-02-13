'use client'
import localFont from 'next/font/local';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface FaqSectionProps {
  question: string ;
  answer: string;
}

const titleFont = localFont({ src: '../../../../public/fonts/Jura.ttf' })
const subtitleFont = localFont({ src: '../../../../public/fonts/chakra.ttf' })

const FaqSection: React.FC<FaqSectionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border border-zinc-500 rounded-md overflow-hidden">
      <div className="bg-black-200 p-4 flex justify-between items-center cursor-pointer max-[500px]:p-2" onClick={toggleAnswer}>
        <p className={` ${titleFont.className} text-lg `}>{question}</p>
        <div className={` transition-transform transform ${isOpen ? 'rotate-360' : 'rotate-0'} duration-300`}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className={`${titleFont.className} bg-gray-900 p-4`}>{answer}</div>
      </div>
    </div>
  );
};

export default FaqSection;
