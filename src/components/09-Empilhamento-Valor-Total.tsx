import React from 'react';

export const EmpilhamentoValorTotal = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const stackItems = [
    {
      title: 'ArtigoAI+ - 15 Assistentes de IA',
      description: 'Analisador, Gerador, Revisor, Tradutor e mais 11 especialistas',
      value: 'R$ 2.997'
    },
    {
      title: 'Formatador de Referências Automático',
      description: 'Vancouver, ABNT e outros formatos científicos',
      value: 'R$ 497'
    },
    {
      title: 'Verificador de Plágio Avançado',
      description: 'Proteja sua autoria com verificação completa',
      value: 'R$ 697'
    },
    {
      title: 'Navegador de Literatura Inteligente',
      description: 'Encontre artigos relevantes automaticamente',
      value: 'R$ 497'
    },
    {
      title: 'Suporte Técnico Vitalício (BÔNUS)',
      description: 'Ajuda especializada sempre que precisar',
      value: 'R$ 1.497'
    },
    {
      title: 'Atualizações Perpétuas (BÔNUS)',
      description: 'Todas as melhorias e novos assistentes inclusos',
      value: 'R$ 1.497'
    },
    {
      title: 'Biblioteca de Templates (BÔNUS)',
      description: 'Modelos prontos para diferentes tipos de artigos',
      value: 'R$ 797'
    }
  ];

  const totalValue = stackItems.reduce((sum, item) => {
    return sum + parseInt(item.value.replace('R$ ', '').replace('.', ''));
  }, 0);

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            💰 VALOR TOTAL DO PACOTE
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Tudo que você recebe <span className="text-green-400">HOJE</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Se você fosse comprar cada ferramenta separadamente, pagaria mais de <strong className="text-red-400">R$ 8.000</strong>
          </p>
        </div>

        {/* Value Stack */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Empilhamento de valor completo:
          </h3>

          <div className="space-y-4 mb-8">
            {stackItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-700 rounded border border-gray-600 hover:border-green-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-gray-300">{item.description}</div>
                  </div>
                </div>
                <div className="text-green-400 font-bold text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-900 border-2 border-blue-500 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-bold text-white">Valor Total Individual:</div>
              <div className="text-3xl font-bold text-blue-400">R$ {totalValue.toLocaleString()}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-white">Seu Preço Hoje:</div>
              <div className="text-4xl font-bold text-red-400">R$ 297</div>
            </div>
            <div className="text-center mt-4">
              <div className="bg-green-600 text-white inline-block px-6 py-2 rounded font-bold">
                ECONOMIA DE R$ {(totalValue - 297).toLocaleString()} ({Math.round(((totalValue - 297) / totalValue) * 100)}% OFF)
              </div>
            </div>
          </div>
        </div>

        {/* Urgência */}
        <div className="bg-red-900 border-2 border-red-500 rounded-lg p-6 mb-8">
          <div className="text-red-400 font-bold text-xl mb-2 uppercase">
            ⏰ OFERTA POR TEMPO LIMITADO
          </div>
          <p className="text-red-300">
            Este preço especial é válido apenas para os primeiros 100 profissionais.<br />
            <strong>Restam apenas algumas vagas!</strong>
          </p>
        </div>

        {/* CTA */}
        <button 
          onClick={scrollToOffer}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-2xl px-12 py-6 rounded-lg transition-colors shadow-lg"
        >
          🚀 GARANTIR MINHA VAGA COM 96% DE DESCONTO
        </button>
        <p className="text-gray-400 text-sm mt-4">
          Continue para finalizar sua compra
        </p>
      </div>
    </section>
  );
};

export default EmpilhamentoValorTotal;