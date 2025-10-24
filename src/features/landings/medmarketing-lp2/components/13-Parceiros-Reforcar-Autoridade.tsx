import React from 'react';
import { Award } from 'lucide-react';
import { partnerImages } from '@/assets/index';

export default function PartnersSection() {
  const partners = [
    {
      name: 'OpenAI',
      logo: partnerImages.openai,
      description: 'Tecnologia GPT-4'
    },
    {
      name: 'PubMed',
      logo: partnerImages.pubmed,
      description: 'Base Científica'
    },
    {
      name: 'NVIDIA',
      logo: partnerImages.nvidia,
      description: 'AI Computing'
    },
    {
      name: 'Microsoft',
      logo: partnerImages.microsoft,
      description: 'Azure AI'
    }
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Opcional - Minimalista */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            POWERED BY
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            Tecnologias de ponta utilizadas no MedMarketingAI+
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-all group"
            >
              <img
                src={partner.logo} 
                alt={`${partner.name} - ${partner.description}`}
                className="max-w-[120px] md:max-w-[140px] max-h-[50px] w-auto h-auto object-contain filter brightness-0 invert transition-all"
                loading="lazy"
              />
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
                {partner.description}
              </span>
            </div>
          ))}
        </div>

        {/* Nota de Rodapé */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            Integrações oficiais e certificadas para garantir máxima performance
          </p>
        </div>

      </div>
    </section>
  );
}
