import React from 'react';
import { User, Building2, Globe, Award } from 'lucide-react';
import { mainImages } from '@/assets/index';

export default function AuthoritySection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <User className="w-5 h-5" />
            CONHEÇA O CRIADOR
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            <span className="text-blue-600">Leonardo Leffer</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Pioneiro da <strong className="text-gray-900">IA médica no Brasil</strong>, responsável por transformar o marketing de{' '}
            <strong className="text-gray-900">milhares de médicos</strong>
          </p>
        </div>

        {/* Leonardo Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Foto do Leonardo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 overflow-hidden rounded-2xl shadow-2xl border-4 border-blue-500">
              <img
                src={mainImages.leonardoPremioHotmart}
                alt="Leonardo Leffer - Prêmio Hotmart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Sobre Leonardo */}
          <div className="space-y-6 lg:pl-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  Sobre Leonardo Leffer
                </h3>
              </div>
              
              <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
                <p>
                  Leonardo Leffer é fundador e CEO da <strong className="text-gray-900">Leffer Saúde Tech</strong>, 
                  reconhecido como pioneiro na integração da Inteligência Artificial aplicada à medicina. 
                  Sua trajetória une expertise tecnológica e profundo conhecimento do setor da saúde, 
                  com a missão de tornar a inovação prática, acessível e ética para médicos.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold">
                    Suas soluções de IA já impactaram{' '}
                    <span className="text-blue-600 font-black">milhares de profissionais</span> em mais de{' '}
                    <span className="text-blue-600 font-black">60 países</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200">
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-3xl font-black text-gray-900">60+</div>
                <div className="text-sm text-gray-600">Países alcançados</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-green-200">
                <User className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-3xl font-black text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Médicos atendidos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sobre a LefferTech */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-10 h-10 text-white" />
            <h3 className="text-2xl md:text-3xl font-black text-white text-center">
              Sobre a LefferTech
            </h3>
          </div>
          
          <p className="text-white leading-relaxed text-center max-w-5xl mx-auto text-base md:text-lg mb-6">
            A <strong>Leffer Saúde Tech (LefferTech)</strong> é uma healthtech brasileira que nasceu para empoderar 
            o médico moderno e redefinir a prática clínica na era da{' '}
            <strong className="text-yellow-300">Medicina 4.0</strong>. 
          </p>
          
          <p className="text-blue-100 leading-relaxed text-center max-w-5xl mx-auto text-base md:text-lg">
            A empresa oferece um ecossistema de ferramentas de Inteligência Artificial que otimiza tempo, 
            amplia autoridade digital e fortalece a relação médico-paciente de maneira{' '}
            <strong className="text-white">ética e segura</strong>.
          </p>

          {/* Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-yellow-300 mb-1">Medicina 4.0</div>
              <div className="text-sm text-blue-100">Tecnologia de ponta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-yellow-300 mb-1">100% CFM</div>
              <div className="text-sm text-blue-100">Compliance garantido</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-yellow-300 mb-1">Suporte BR</div>
              <div className="text-sm text-blue-100">Atendimento nacional</div>
            </div>
          </div>
        </div>

        {/* Nota Rodapé */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-900">MedMarketingAI+</strong> é desenvolvido pela LefferTech, 
            com anos de experiência em IA aplicada à saúde e compromisso com a ética médica.
          </p>
        </div>

      </div>
    </section>
  );
}
