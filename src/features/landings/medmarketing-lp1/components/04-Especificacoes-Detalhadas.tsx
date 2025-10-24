import React from 'react';

export const EspecificacoesDetalhadas = () => {
  const categories = [
    {
      title: "ANÚNCIOS E ADS",
      count: "35 assistentes",
      description: "Meta Ads médicos, Google Ads local, Copy que converte"
    },
    {
      title: "SOCIAL MEDIA",
      count: "42 assistentes",
      description: "Posts Instagram/Facebook, Stories que vendem, Reels virais"
    },
    {
      title: "ESTRATÉGIA E CONVERSÃO",
      count: "28 assistentes",
      description: "Persona ideal, Proposta única, Jornada do paciente"
    },
    {
      title: "EMAIL MARKETING",
      count: "18 assistentes",
      description: "Sequências de boas-vindas, Reativação, Newsletters"
    },
    {
      title: "VÍDEO E YOUTUBE",
      count: "15 assistentes",
      description: "Roteiros, Thumbnails, Títulos que clicam"
    },
    {
      title: "COPY E TEXTOS",
      count: "24 assistentes",
      description: "Landing pages, VSL, Cartas de vendas"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            165 ASSISTENTES QUE FAZEM O TRABALHO PESADO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Cada GPT já vem configurado — <span className="text-yellow-400">basta colar o link e começar</span>
          </h2>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <div className="text-blue-400 font-semibold text-lg">{category.count}</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="text-center bg-blue-600 rounded-lg p-8">
          <div className="text-4xl md:text-6xl font-black text-white mb-4">
            TOTAL: 165 assistentes
          </div>
          <div className="text-2xl text-blue-100">
            Prontos para usar AGORA
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecificacoesDetalhadas;
