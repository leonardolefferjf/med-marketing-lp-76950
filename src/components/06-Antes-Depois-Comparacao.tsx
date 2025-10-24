import React from 'react';

export const AntesDepoisComparacao = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const comparisons = [
    {
      metric: "Tempo para análise",
      antes: "3-6 meses",
      depois: "2-3 dias",
      icon: "⏰"
    },
    {
      metric: "Material de estudo",
      antes: "Pilhas de PDFs desorganizados",
      depois: "Análise automática estruturada",
      icon: "📚"
    },
    {
      metric: "Segurança metodológica",
      antes: "Insegurança e dúvidas constantes",
      depois: "Metodologia científica validada",
      icon: "🎯"
    },
    {
      metric: "Qualidade dos artigos",
      antes: "Baixa taxa de aprovação",
      depois: "Estrutura científica profissional",
      icon: "📈"
    },
    {
      metric: "Revisão e formatação",
      antes: "Horas de trabalho manual",
      depois: "Automático conforme normas",
      icon: "✏️"
    },
    {
      metric: "Produtividade",
      antes: "1-2 artigos por ano",
      depois: "1-2 artigos por mês",
      icon: "🚀"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            ⚡ ANTES VS DEPOIS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            A <span className="text-red-400">REALIDADE BRUTAL</span> vs <span className="text-green-400">SUA NOVA VIDA</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Veja a diferença entre continuar no método tradicional ou usar o <strong className="text-yellow-400">ArtigoAI+</strong>
          </p>
        </div>

        {/* Comparação Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-12">
          {/* ANTES - Lado Esquerdo */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-2">❌ ANTES (Método Tradicional)</h3>
              <p className="text-gray-400">O que você enfrenta hoje</p>
            </div>
            
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-gray-900 border border-red-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✗</span>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold text-sm uppercase mb-1">
                        {item.metric}
                      </div>
                      <div className="text-gray-300">
                        {item.antes}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEPOIS - Lado Direito */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">✅ DEPOIS (Com ArtigoAI+)</h3>
              <p className="text-gray-400">Sua nova realidade</p>
            </div>
            
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="bg-gray-900 border border-green-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-sm uppercase mb-1">
                        {item.metric}
                      </div>
                      <div className="text-gray-300">
                        {item.depois}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impacto Final */}
        <div className="bg-red-900 border-2 border-red-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            QUAL CAMINHO VOCÊ VAI ESCOLHER?
          </h3>
          <div className="text-lg text-gray-200 space-y-2">
            <p>❌ <strong>Continuar perdendo tempo</strong> com métodos tradicionais</p>
            <p>❌ <strong>Ver outros avançarem</strong> enquanto você fica para trás</p>
            <p>❌ <strong>Manter a frustração</strong> e baixa produtividade</p>
            <p className="text-green-400 text-xl font-bold mt-4">
              ✅ OU acelerar sua carreira científica HOJE mesmo?
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-400 text-black rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">
            🚨 Decisão que vai mudar sua carreira!
          </h3>
          <p className="text-lg mb-4">
            Cada dia que você adia é um dia a menos de produtividade científica acelerada.
          </p>
          <div className="text-sm font-semibold">
            Veja como o ArtigoAI+ vai transformar sua produção ⬇️
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntesDepoisComparacao;