import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';

export const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    const dateString = tomorrow.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={mainImages.logoMedMarketing}
            alt="MedMarketingAI+ — Marketing Médico Validado CFM"
            className="mx-auto w-32 h-32"
          />
        </div>

        {/* Badge */}
        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          MedMarketingAI+ | Marketing Médico Validado CFM
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
          <span className="bg-yellow-300 px-2">Encha sua agenda</span> com pacientes qualificados usando IA — <span className="bg-yellow-300 px-2">sem violar o CFM</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          <strong>165 assistentes de IA</strong> prontos para criar posts, anúncios e conteúdo médico que converte — <strong>100% em conformidade com CFM 2.336/2023</strong>
        </p>

        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1 0-2-.9-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <div className="font-semibold text-gray-800">Agenda cheia todo mês</div>
            <div className="text-sm text-gray-600">Atração automática de pacientes ideais para sua especialidade</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="font-semibold text-gray-800">Zero risco CFM</div>
            <div className="text-sm text-gray-600">Validado com a resolução 2.336/2023 e jurisprudência completa</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3L4 14h5v7l9-11h-5V3zm-2 8H7l7-9v5h4l-7 9v-5z" />
              </svg>
            </div>
            <div className="font-semibold text-gray-800">Plug & Play instantâneo</div>
            <div className="text-sm text-gray-600">Cola o link no ChatGPT e começa a criar conteúdo agora</div>
          </div>
        </div>

        {/* Preco */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="text-green-700 font-semibold mb-2 text-lg">
            De R$ 1.994 por apenas R$ 497 (acesso vitalício)
          </div>
          <div className="text-sm text-gray-600">
            Economia de R$ 1.497 • Desconto de 75%
          </div>
        </div>

        {/* Urgencia */}
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="text-red-700 font-semibold text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              Oferta termina: {currentDate} às 23:59
            </div>
            <div className="text-red-600 text-xs mt-1">
              Após esse prazo, bônus e condições podem mudar
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="text-yellow-700 font-semibold text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c-1.1 0-2-.9-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
              Lote vitalício: 84% das vagas já preenchidas
            </div>
            <div className="bg-yellow-200 rounded-full h-2 mt-2">
              <div className="bg-yellow-500 rounded-full h-2" style={{ width: '84%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
