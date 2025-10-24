import React from 'react';

export const ComoFuncionaPassoAPasso = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const processSteps = [
    {
      number: 1,
      title: "Acesse a plataforma",
      description: "Acesse a plataforma pelo computador ou celular o GPT"
    },
    {
      number: 2, 
      title: "Escolha o assistente",
      description: "Escolha o assistente ideal para sua tarefa atual e sincronize a sua conta"
    },
    {
      number: 3,
      title: "Forneça as informações",
      description: "Forneça suas informações ou textos"
    },
    {
      number: 4,
      title: "Receba o resultado", 
      description: "Receba o resultado estruturado e pronto para usar"
    },
    {
      number: 5,
      title: "Finalize seu trabalho",
      description: "Ajuste conforme necessário e finalize seu trabalho"
    }
  ];

  const mainFeatures = [
    {
      number: "1",
      title: "Analisador de Artigos",
      input: "Link ou PDF",
      output: "Resumo crítico com checklist de evidência",
      benefit: "✓ Entenda relevância em menos de 15 min"
    },
    {
      number: "2",
      title: "Gerador de Artigos Científicos",
      input: "Objetivo + dados",
      output: "Estrutura científica completa (IMRaD)",
      benefit: "✓ Publique com mais aceitação"
    },
    {
      number: "3",
      title: "Revisor Científico",
      input: "Texto bruto",
      output: "Versão revisada conforme normas científicas",
      benefit: "✓ Elimine erros e melhore aprovação"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            COMO FUNCIONA NA PRÁTICA
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Veja como é <span className="text-green-600">simples</span> usar os assistentes
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Em apenas <strong>5 passos</strong> você transforma sua produção científica
          </p>
        </div>

        {/* Processo Passo a Passo */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Processo passo a passo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <h4 className="font-bold text-black mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exemplos Práticos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Exemplos práticos dos principais assistentes:
          </h3>
          
          <div className="text-left max-w-4xl mx-auto space-y-6">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">{feature.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-2">
                    <div className="bg-blue-100 p-3 rounded">
                      <div className="font-semibold text-blue-700">VOCÊ ENVIA:</div>
                      <div className="text-gray-700">{feature.input}</div>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <div className="font-semibold text-green-700">ELE DEVOLVE:</div>
                      <div className="text-gray-700">{feature.output}</div>
                    </div>
                  </div>
                  <p className="text-green-600 font-semibold">{feature.benefit}</p>
                </div>
              </div>
            ))}
            
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">+12</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Mais 12 Assistentes Especializados</h3>
                <p className="text-gray-700 mb-2">Formatador de Referências, Tradutor Científico, Extrator de Dados, Verificador de Plágio, e muito mais...</p>
                <p className="text-purple-600 font-semibold">✓ Cada GPT já vem configurado; basta colar o link dentro do ChatGPT e começar</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <button 
            onClick={scrollToOffer}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-colors shadow-lg mb-4"
          >
            QUERO COMEÇAR A USAR AGORA MESMO
          </button>
          <p className="text-gray-600 text-sm">
            Continue lendo para ver os depoimentos de quem já usa
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaPassoAPasso;