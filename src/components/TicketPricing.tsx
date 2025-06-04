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
                  ESGOTADO
                </div>
              )}
              
              {/* Ticket header */}
              <div className={`py-8 px-6 ${
                ticket.type === "Ingresso Diamond" 
                  ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white'
                  : ticket.recommended 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-gray-100'
