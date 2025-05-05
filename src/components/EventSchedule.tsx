import React from 'react';
import SectionTitle from './SectionTitle';
import { Clock } from 'lucide-react';

const EventSchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Programação do Evento" 
          subtitle="Dois dias intensivos de conteúdo prático e transformador"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-navy-50 rounded-xl overflow-hidden shadow-lg border border-navy-100">
            <div className="bg-navy-900 text-white p-6">
              <h3 className="text-xl font-bold mb-2">Dia 1</h3>
              <p className="text-yellow-500 font-semibold">Fundamentos, Estratégias e Criação de Oferta</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { time: "09:30 - 10:00", activity: "Abertura e alinhamento da imersão" },
                  { time: "10:00 - 11:30", activity: "Criação de produtos e ofertas Low Ticket", speaker: "Léo Castro" },
                  { time: "11:30 - 13:00", activity: "Inteligência Artificial aplicada ao Digital", speaker: "Hayllon Prata" },
                  { time: "13:00 - 14:30", activity: "Almoço" },
                  { time: "14:30 - 16:00", activity: "Copywriting e estrutura de persuasão", speaker: "Caíque Rarile" },
                  { time: "16:00 - 17:30", activity: "Branding e posicionamento", speaker: "Faustino Pires" }
                ].map((session, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Clock size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{session.time}</div>
                      <div className="text-gray-700">{session.activity}</div>
                      {session.speaker && (
                        <div className="text-sm text-navy-600 mt-1">com {session.speaker}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-navy-50 rounded-xl overflow-hidden shadow-lg border border-navy-100">
            <div className="bg-navy-900 text-white p-6">
              <h3 className="text-xl font-bold mb-2">Dia 2</h3>
              <p className="text-yellow-500 font-semibold">Venda, Tráfego e Escala com Especialistas</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { time: "09:30 - 11:00", activity: "Venda no 1 a 1 via WhatsApp", speaker: "Morgana Kaiser" },
                  { time: "11:00 - 12:30", activity: "Venda orgânica com conteúdo", speaker: "Rafa Brito" },
                  { time: "12:30 - 14:00", activity: "Almoço" },
                  { time: "14:00 - 15:30", activity: "Como construir páginas de alta converção", speaker: "Marcos Design" },
                  { time: "15:30 - 16:30", activity: "Tráfego pago e escala", speaker: "Léo Castro" },
                  { time: "16:30 - 17:00", activity: "Hot Seat com especialistas" },
                  { time: "17:00 - 17:30", activity: "Encerramento e próximos passos" }
                ].map((session, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Clock size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{session.time}</div>
                      <div className="text-gray-700">{session.activity}</div>
                      {session.speaker && (
                        <div className="text-sm text-navy-600 mt-1">com {session.speaker}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;