import React from 'react';
import SectionTitle from './SectionTitle';
import { speakers } from '../constants/content';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-gradient-radial from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Especialistas Confirmados" 
          subtitle="Conheça as mentes que vão transformar sua visão de negócios digitais"
          light
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="bg-navy-800 rounded-xl overflow-hidden shadow-xl group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Specialty badge */}
                <div className="absolute -top-5 right-6 bg-yellow-500 text-navy-900 py-1 px-4 rounded-full font-bold text-sm shadow-lg">
                  {speaker.specialty}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-gray-400 text-sm">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;