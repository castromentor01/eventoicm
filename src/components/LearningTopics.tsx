import React from 'react';
import { 
  Target, Sprout, ScrollText, MessageSquare, 
  Brain, TicketPercent, Banknote 
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { learningTopics } from '../constants/content';

const iconComponents = {
  Target,
  Sprout,
  ScrollText,
  MessageSquare,
  Brain,
  TicketPercent,
  Banknote
};

const LearningTopics: React.FC = () => {
  return (
    <section id="learning-topics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="O Que Você Vai Aprender" 
          subtitle="Domine as estratégias que estão gerando milhões para empreendedores digitais"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((topic) => {
            const IconComponent = iconComponents[topic.icon as keyof typeof iconComponents];
            
            return (
              <div 
                key={topic.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="bg-navy-900 text-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-navy-900 transition-colors duration-300">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningTopics;