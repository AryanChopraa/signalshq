
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-purple-600" />
          ) : (
            <Plus className="h-5 w-5 text-gray-500 group-hover:text-purple-600" />
          )}
        </span>
      </button>
      <div 
        className={`mt-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does SignalsHQ work?",
      answer: "SignalsHQ uses AI to automate data collection, analysis, and documentation for audit firms. Our platform integrates with your existing tools and provides intelligent insights to streamline your workflow and ensure compliance with industry standards."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security extremely seriously. All data is encrypted both in transit and at rest. We use enterprise-grade security protocols, regular security audits, and comply with industry regulations to ensure your sensitive client data remains protected."
    },
    {
      question: "What use cases does SignalsHQ work for?",
      answer: "SignalsHQ is designed for audit and advisory firms of all sizes. It's particularly valuable for streamlining fieldwork, managing client communications, ensuring compliance with auditing standards, and automating routine tasks to free up your team for higher-value work."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Click the 'Get Started' button to schedule a demo with our team. We'll walk you through the platform, understand your specific needs, and help you set up your account. Implementation typically takes just a few days, and our support team will be with you every step of the way."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently asked questions</h2>
            <p className="text-lg text-gray-600">
              Have questions? We've got answers. For everything else email us on <a href="mailto:contact@signalsHQ.io" className="text-purple-600 hover:underline">contact@signalsHQ.io</a>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
