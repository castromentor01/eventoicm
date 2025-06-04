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
              <p className="text-yellow-500 font-semibold">Fundamentos e Estratégias Avançadas</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { time: "09:30 - 10:00", activity: "Credenciamento" },
                  { time: "10:00 - 11:00", activity: "Mentalidade e Desenvolvimento pessoal", speaker: "Deivid Tomaz" },
                  { time: "11:00 - 12:00", activity: "Inteligência Artificial aplicada ao Digital", speaker: "Hayllon Prata" },
                  { time: "12:00 - 13:00", activity: "Copywriting e estrutura de persuasão", speaker: "Caíque Rarile" },
                  { time: "13:00 - 15:00", activity: "Almoço" },
                  { time: "15:00 - 16:00", activity: "Branding e posicionamento", speaker: "Faustino Pires" },
                  { time: "16:00 - 16:30", activity: "Coffee Break" },
                  { time: "16:30 - 17:30", activity: "O futuro do Tráfego Pago", speaker: "Léo Castro" },
                  { time: "17:30 - 18:00", activity: "Networking", speaker: "Todos os mentores" }
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
              <p className="text-yellow-500 font-semibold">Vendas e Estratégias de Crescimento</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { time: "09:30 - 10:00", activity: "Recepção" },
                  { time: "10:00 - 11:30", activity: "Destravando o próximo nível", speaker: "Léo Castro e Deivid Tomaz" },
                  { time: "11:30 - 13:00", activity: "Venda no X1 com excelência", speaker: "Morgana Kayser" },
                  { time: "13:00 - 15:00", activity: "Almoço" },
                  { time: "15:00 - 16:00", activity: "Construindo páginas de alta conversão", speaker: "Marcos Design" },
                  { time: "16:00 - 16:30", activity: "Coffee Break Premium" },
                  { time: "16:30 - 17:30", activity: "Hot Seats com especialistas", speaker: "Convidados" },
                  { time: "17:30 - 18:00", activity: "Venda de forma Orgânica", speaker: "Rafa Brito" }
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