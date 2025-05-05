import React from 'react';
import { Zap, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-full">
                <Zap size={24} className="text-navy-900" />
              </div>
              <h3 className="text-xl font-bold ml-2">ICM</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Imersão Construindo Milionários é o evento que está transformando o mercado digital brasileiro com estratégias comprovadas de tráfego e vendas.
            </p>
            
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'youtube', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-yellow-500 hover:text-navy-900 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span>Alphaville, São Paulo - SP</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span>icmeventopresencial@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span>(11) 97777-6093</span>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#learning-topics')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  Sobre o Evento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#speakers')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  Palestrantes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#schedule')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  Agenda Completa
                </button>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Política de Reembolso
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          
          {/* WhatsApp Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Dúvidas?</h4>
            <p className="text-gray-400 mb-4">
              Fale diretamente com nossa equipe pelo WhatsApp e tire todas as suas dúvidas sobre o evento.
            </p>
            
            <a 
              href="https://wa.me/5511977776093?text=Quero%20tirar%20duvida%20sobre%20a%20imersao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md transition-colors"
            >
              <MessageSquare size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Imersão Construindo Milionários. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;