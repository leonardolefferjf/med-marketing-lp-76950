import React from 'react';

export const AntesDepoisComparacao = () => {
  const comparisons = [
    {
      metric: "Agenda",
      antes: "Agenda com 40-60% de ocupação",
      depois: "Agenda 90-100% lotada"
    },
    {
      metric: "Tempo com marketing",
      antes: "15-20h/mês tentando criar conteúdo",
      depois: "2-3h/mês criando todo conteúdo do mês"
    },
    {
      metric: "Compliance CFM",
      antes: "Medo constante de violar CFM",
      depois: "Segurança total - tudo validado CFM"
    },
    {
      metric: "Investimento",
      antes: "R$ 3-5k/mês em agência que não entrega",
      depois: "R$ 497 uma única vez (economia de R$ 36k/ano)"
    },
    {
      metric: "Fonte de pacientes",
      antes: "Pacientes vindo só por indicação",
      depois: "Pacientes vindo de Instagram, Google, email"
    },
    {
      metric: "Presença digital",
      antes: "Instagram parado ou com posts genéricos",
      depois: "Feed profissional com posts diários"
    },
    {
      metric: "Estratégia",
      antes: "Sem estratégia, fazendo no improviso",
      depois: "Sistema previsível que funciona no piloto"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            ANTES vs DEPOIS DO MedMarketingAI+
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            A transformação que médicos estão vivendo
          </h2>
        </div>

        {/* Comparação Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-12">
          {/* ANTES */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-2">❌ ANTES (Sem MedMarketingAI)</h3>
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

          {/* DEPOIS */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">✅ DEPOIS (Com MedMarketingAI)</h3>
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

        {/* Transformação */}
        <div className="bg-yellow-400 text-black rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-4">
            TRANSFORMAÇÃO: De frustrado para autoridade em 30 dias
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AntesDepoisComparacao;
