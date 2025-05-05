import React from 'react';
import { eventData } from '../constants/content';

const HostHighlight: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-800 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-yellow-500/20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-8 border-yellow-500/10"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-yellow-500/30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Host image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-yellow-500 absolute -top-4 -left-4 w-full h-full rounded-xl transform -rotate-3"></div>
            <div className="relative bg-navy-800 p-4 rounded-xl">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/HLJqxN25/Design-sem-nome.png"
                  alt={eventData.hostName}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg";
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Host information */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seu anfitrião:<br />
              <span className="text-yellow-500">{eventData.hostName}</span>
            </h2>
            
            <div className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "{eventData.hostHighlight}"
            </div>
            
            <ul className="space-y-4">
              {[
                "Especialista em Tráfego Pago e Escala de Negócios Digitais",
                "Mentor de +50 mil empreendedores digitais",
                "Consultor e Estrategista digital",
                "CEO da mentoria Arkad Select"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-yellow-500 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostHighlight;