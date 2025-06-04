import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { tickets } from '../constants/content';
import { Check } from 'lucide-react';

const TicketPricing: React.FC = () => {
  return (
    <section id="tickets" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Escolha Seu Ingresso" 
          subtitle="Invista em você e no futuro do seu negócio. Vagas limitadas!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center max-w-6xl mx-auto">
          {tickets.map((ticket) => (
            <div 
              key={ticket.id}
              className={`
                w-full rounded-xl overflow-hidden border transition-transform duration-300 hover:scale-105
                ${ticket.recommended 
                  ? 'border-yellow-500 shadow-2xl shadow-yellow-500/10 relative z-10 transform lg:-translate-y-4' 
                  : ticket.type === "Ingresso Diamond"
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/10 relative z-10 transform lg:-translate-y-4'
                  : 'border-gray-200 shadow-xl'
                }
              `}
            >
              {/* Recommended badge */}
              {ticket.recommended && (
                <div className="bg-yellow-500 text-navy-900 py-2 text-center font-bold">
                  MAIS COMPRADO
                </div>
              )}
              
              {/* Diamond badge */}
              {ticket.type === "Ingresso Diamond" && (
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white py-2 text-center font-bold">
                  APENAS 10 VAGAS
                </div>
              )}
              
              {/* Ticket header */}
              <div className={`py-8 px-6 ${
                ticket.type === "Ingresso Diamond" 
                  ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white'
                  : ticket.recommended 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-gray-100'
              }`}>
                <h3 className={`text-2xl font-bold mb-2 ${
                  ticket.type === "Ingresso Diamond"
                    ? 'text-purple-300'
                    : ticket.recommended 
                      ? 'text-yellow-500' 
                      : 'text-navy-900'
                }`}>
                  {ticket.type}
                </h3>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold">{ticket.price}</span>
                  <span className={
                    ticket.type === "Ingresso Diamond" || ticket.recommended 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  }>/ pessoa</span>
                </div>
              </div>
              
              {/* Features list */}
              <div className={`p-8 ${
                ticket.type === "Ingresso Diamond" 
                  ? 'bg-purple-50' 
                  : ticket.recommended 
                    ? 'bg-navy-50' 
                    : 'bg-white'
              }`}>
                <ul className="space-y-4 mb-8">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`rounded-full p-1 mr-3 mt-0.5 ${
                        ticket.type === "Ingresso Diamond"
                          ? 'bg-purple-500/10 text-purple-600'
                          : 'bg-green-500/10 text-green-600'
                      }`}>
                        <Check size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={ticket.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    primary 
                    large 
                    className={`w-full ${
                      ticket.type === "Ingresso Diamond"
                        ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white'
                        : ticket.type === "Ingresso Essencial"
                        ? 'bg-navy-600 hover:bg-navy-700 text-white'
                        : ''
                    }`}
                  >
                    {ticket.ctaText}
                  </Button>
                </a>
                
                {/* Payment methods note */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  Pagamento em até 12x no cartão
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Limited spots notification */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-12 max-w-2xl mx-auto text-center">
          <p className="text-navy-900 font-medium">
            Apenas <span className="font-bold">22 vagas</span> restantes para esta edição.
            Os ingressos geralmente esgotam com <span className="font-bold">2 semanas</span> de antecedência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TicketPricing;