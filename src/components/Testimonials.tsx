import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { testimonials } from '../constants/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Histórias de Sucesso" 
          subtitle="Veja o que nossos alunos têm a dizer sobre a transformação em seus negócios"
        />
        
        <div className="relative max-w-5xl mx-auto">
          {/* Quote decoration */}
          <div className="absolute -top-10 -left-10 text-navy-900/5">
            <Quote size={120} />
          </div>
          
          {/* Testimonial slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-8 bg-white shadow-lg rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-navy-900 text-xl">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.business}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'bg-yellow-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;