import React from 'react';
import { mainImages } from '@/assets/index';

const CreatorsSection = () => {

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            CONHEÇA O CRIADOR
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Desenvolvido por <span className="text-yellow-400">médicos</span> para médicos
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Dr. Leonardo Leffer - Especialista em IA aplicada à medicina
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
                  Médico, Fundador da Leffer Saúde Tech e Criador do Medicina 4.0 (+ 1.000 assistentes médicos). Mais de 5.000 médicos atendidos com soluções de IA validadas pelo CFM.
                </p>
                
                <p>
                  <strong className="text-white">Validação:</strong> Validado por comissão de ética médica, baseado em CFM 2.336/2023, revisado por advogado especialista em direito médico.
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

        {/* Info */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Tecnologia desenvolvida com expertise em IA e medicina
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
