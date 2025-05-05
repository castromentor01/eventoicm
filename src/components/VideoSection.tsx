import React from 'react';
import SectionTitle from './SectionTitle';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Transforme seu Negócio Digital" 
          subtitle="Veja como a Imersão Construindo Milionários tem mudado a vida de empreendedores como você"
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Video container */}
          <div className="w-full lg:w-3/5">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://player.vimeo.com/video/1081599698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                title="Transforme seu Negócio Digital"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              ></iframe>
            </div>
          </div>
          
          {/* Results highlights */}
          <div className="w-full lg:w-2/5">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              A Imersão ICM é para você que:
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Quer começar a faturar no digital", description: "Média de 92% dos alunos começaram a ter resultados expressivos após o evento " },
                { title: "Quer escalar seus resultados", description: "Chega de patinar no mesmo resultado todos os meses, enquanto outras pessoas crescem" },
                { title: "Precisa fazer Networking", description: "A ambiência que vai ajudar você a mudar seu jogo, vai estar na imersão. Isso vale ouro." }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-bold text-xl text-navy-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;