import React from 'react';
import { Zap } from 'lucide-react';
import Button from './Button';
import { eventData } from '../constants/content';

const Hero: React.FC = () => {
  const scrollToTickets = () => {
    const ticketsSection = document.querySelector('#tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen relative flex items-center bg-gradient-radial from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo placeholder */}
          <div className="mb-8 flex items-center justify-center">
            <div className="bg-white p-3 rounded-full">
              <Zap size={42} className="text-navy-900" />
            </div>
            <h1 className="text-2xl font-bold text-white ml-3">{eventData.title}</h1>
          </div>
          
          {/* Headline & Subheadline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            {eventData.headline}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            {eventData.subheadline}
          </p>
          
          {/* Event date and location */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10 text-gray-300 font-semibold">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              <span>{eventData.eventDate}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              <span>{eventData.eventLocation}</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button primary large onClick={scrollToTickets}>
            {eventData.ctaButton}
          </Button>
          
          {/* Social proof indicator */}
          <div className="mt-12 bg-navy-800/60 py-3 px-6 rounded-full backdrop-blur-sm">
            <p className="text-gray-300 flex items-center">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span>VAGAS LIMITADAS A 100 PESSOAS</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)', 
      }}></div>
    </section>
  );
};

export default Hero;
