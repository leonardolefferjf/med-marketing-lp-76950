import React from 'react';

export const SolucaoApresentacaoProduto = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            A SOLUÇÃO EM 3 CLIQUES
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            <span className="bg-yellow-300 px-2">Aceleração Científica</span> com <span className="text-blue-600">Inteligência Artificial</span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Com o <strong>ArtigoAI+</strong>, você ativa 15 assistentes de IA treinados com mais de <strong>10 mil trabalhos científicos da saúde</strong>, que fazem o trabalho pesado para você.
          </p>
        </div>

        {/* Por que funciona */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Por que centenas de profissionais já clicaram?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">10h+</div>
              <div className="text-gray-700 font-semibold">Ganhe por semana</div>
              <div className="text-sm text-gray-500 mt-1">com leitura e escrita acelerada</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
              <div className="text-gray-700 font-semibold">Curva de Aprendizado</div>
              <div className="text-sm text-gray-500 mt-1">use com linguagem natural, no seu ritmo</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">Vitalício</div>
              <div className="text-gray-700 font-semibold">Acesso</div>
              <div className="text-sm text-gray-500 mt-1">com atualizações gratuitas</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              Investimento de apenas <span className="text-green-600 font-bold">R$ 297</span> que transforma sua carreira científica
            </p>
          </div>
        </div>

        {/* CTA */}
        <button 
          onClick={scrollToOffer}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-colors shadow-lg"
        >
          SIM! QUERO TRANSFORMAR MINHA PRODUÇÃO CIENTÍFICA
        </button>
        <p className="text-gray-600 text-sm mt-4">
          Continue lendo para ver os 15 assistentes em detalhes
        </p>
      </div>
    </section>
  );
};

export default SolucaoApresentacaoProduto;