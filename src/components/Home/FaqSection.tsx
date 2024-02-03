'use client'
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface FaqSectionProps {
  question: string;
  answer: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border border-zinc-500 rounded-md overflow-hidden">
      <div className="bg-black-200 p-4 flex justify-between items-center cursor-pointer" onClick={toggleAnswer}>
        <p className="text-lg font-semibold">{question}</p>
        <div className={`transition-transform transform ${isOpen ? 'rotate-360' : 'rotate-0'} duration-300`}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="bg-gray-900 p-4">{answer}</div>
      </div>
    </div>
  );
};

export default FaqSection;
