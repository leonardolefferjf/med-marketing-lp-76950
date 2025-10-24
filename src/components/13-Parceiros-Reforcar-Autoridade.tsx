import React from 'react';
import { partnerImages } from '@/assets/index';


const PartnersSection = () => {
  const partners = [
    {
      name: 'OpenAI',
      logo: partnerImages.openai,
    },
    {
      name: 'PubMed', 
      logo: partnerImages.pubmed,
    },
    {
      name: 'Microsoft',
      logo: partnerImages.microsoft,
    },
    {
      name: 'NVIDIA',
      logo: partnerImages.nvidia,
    }
  ];

  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Partners Grid */}
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <img
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-[100px] max-h-[40px] w-auto h-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;