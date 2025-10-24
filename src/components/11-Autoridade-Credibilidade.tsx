import React from 'react';
import { mainImages } from '@/assets/index';

const CreatorsSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            CONHEÇA O CRIADOR
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-yellow-400">Leonardo Leffer</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Pioneiro da IA científica no Brasil, responsável por transformar a produção acadêmica de <strong className="text-white">milhares de profissionais</strong>
          </p>
        </div>

        {/* Leonardo Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Foto do Leonardo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 overflow-hidden rounded-lg shadow-2xl">
              <img
                src={mainImages.leonardoPremioHotmart}
                alt="Leonardo Leffer com prêmio Hotmart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Sobre Leonardo */}
          <div className="space-y-6 lg:pl-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Sobre Leonardo Leffer</h3>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <p>
                  Leonardo Leffer é fundador e CEO da Leffer Saúde Tech, reconhecido como pioneiro na integração da Inteligência Artificial aplicada à medicina. Sua trajetória une expertise tecnológica e profundo conhecimento do setor da saúde, com a missão de tornar a inovação prática, acessível e ética para médicos e profissionais de saúde.
                </p>
                
                <p>
                  Suas soluções de IA já impactaram <strong className="text-white">milhares de profissionais</strong> em mais de <strong className="text-white">60 países</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sobre a LefferTech */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Sobre a LefferTech</h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-5xl mx-auto text-lg">
            A Leffer Saúde Tech (LefferTech) é uma healthtech brasileira que nasceu para empoderar o médico moderno e redefinir a prática clínica na era da <strong className="text-white">Medicina 4.0</strong>. A empresa oferece um ecossistema de ferramentas de Inteligência Artificial que otimiza tempo, amplia autoridade digital e fortalece a relação médico-paciente de maneira ética e segura.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToOffer}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-colors shadow-lg mb-4"
          >
            CONHEÇA O ARTIGOAI+
          </button>
          
          <p className="text-gray-400 text-sm">
            Tecnologia desenvolvida com expertise em IA e medicina
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
