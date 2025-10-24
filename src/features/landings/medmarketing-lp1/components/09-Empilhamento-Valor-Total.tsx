import React from 'react';

const EmpilhamentoValor = () => {
  const stackItems = [
    {
      title: 'MedMarketingAI+ com 165 Assistentes IA',
      value: 'R$ 1.994'
    },
    {
      title: 'MagicMed Prompts',
      value: 'R$ 497',
      bonus: true
    },
    {
      title: 'Hotmart Tutor IA',
      value: 'R$ 397',
      bonus: true
    },
    {
      title: '50 Templates Canva',
      value: 'R$ 297',
      bonus: true
    },
    {
      title: 'Garantia 30 dias risco zero',
      value: 'R$ 0',
      included: true
    },
    {
      title: 'Atualizações vitalício',
      value: 'R$ 997/ano',
      valueLabel: 'valor'
    },
    {
      title: 'Novos assistentes grátis',
      value: 'R$ 497/ano',
      valueLabel: 'valor'
    },
    {
      title: 'Dashboard atualizado',
      value: 'R$ 297/ano',
      valueLabel: 'valor'
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            STACK DE VALOR COMPLETO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Veja <span className="text-blue-600">tudo</span> que você recebe hoje
          </h2>
        </div>

        {/* Stack Items */}
        <div className="space-y-4 mb-8">
          {stackItems.map((item, index) => (
            <div key={index} className={`flex justify-between items-center p-4 rounded-lg border-2 ${
              item.bonus ? 'bg-amber-50 border-amber-300' : 
              item.included ? 'bg-green-50 border-green-300' : 
              'bg-blue-50 border-blue-300'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold text-black">{item.title}</div>
                  {item.bonus && <div className="text-xs text-amber-600 font-semibold">BÔNUS INCLUSO</div>}
                  {item.valueLabel && <div className="text-xs text-gray-600">{item.valueLabel}</div>}
                </div>
              </div>
              <div className="font-bold text-blue-600">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Totais */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xl">
              <div>VALOR TOTAL SE COMPRASSE SEPARADO:</div>
              <div className="font-bold">R$ 4.976</div>
            </div>
            <div className="flex justify-between items-center text-xl">
              <div>VALOR NORMAL DO PRODUTO:</div>
              <div className="font-bold">R$ 1.994</div>
            </div>
            <div className="border-t border-white/30 pt-4"></div>
            <div className="flex justify-between items-center text-3xl font-black">
              <div>PREÇO HOJE (75% OFF):</div>
              <div className="text-yellow-400">R$ 497</div>
            </div>
          </div>
        </div>

        {/* Economia Total */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700 mb-4">
              ECONOMIA TOTAL: R$ 4.479
            </div>
            <div className="text-lg text-gray-700 mb-4">
              ISSO É MENOS QUE:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <div className="font-bold text-gray-800">1 mês de agência</div>
                <div className="text-gray-600">(R$ 3.000+)</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-bold text-gray-800">1 curso de marketing</div>
                <div className="text-gray-600">(R$ 997+)</div>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="font-bold text-gray-800">1 designer freelancer/mês</div>
                <div className="text-gray-600">(R$ 1.500+)</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
          <h3 className="text-3xl font-black text-black mb-2">
            E VOCÊ TEM PARA SEMPRE
          </h3>
          <p className="text-lg text-gray-700">
            Acesso vitalício • Sem mensalidades • Todas atualizações incluídas
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmpilhamentoValor;
