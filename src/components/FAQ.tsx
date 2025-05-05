import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { faqItems } from '../constants/content';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Perguntas Frequentes" 
          subtitle="Tire suas dúvidas sobre a Imersão Construindo Milionários"
        />
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className={`mb-4 border rounded-lg overflow-hidden ${
                openItem === item.id 
                  ? 'border-yellow-500 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-lg font-semibold text-navy-900">{item.question}</h3>
                {openItem === item.id ? (
                  <ChevronUp className="text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItem === item.id && (
                <div className="p-6 pt-0 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;