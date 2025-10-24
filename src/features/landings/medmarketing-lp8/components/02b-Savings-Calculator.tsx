import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calculator, Sparkles } from 'lucide-react';

export default function SavingsCalculator() {
  const [years, setYears] = useState(5);

  const agencyCostPerMonth = 5000;
  const medMarketingCost = 997;

  const agencyTotalCost = agencyCostPerMonth * 12 * years;
  const savings = agencyTotalCost - medMarketingCost;
  const savingsPercentage = ((savings / agencyTotalCost) * 100).toFixed(1);

  const yearOptions = [
    { value: 1, label: '1 ano' },
    { value: 3, label: '3 anos' },
    { value: 5, label: '5 anos' },
    { value: 10, label: '10 anos' }
  ];

  return (
    <section className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <Calculator className="w-4 h-4" />
            Calculadora de Economia
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 px-4">
            Quanto Você Economiza{' '}
            <span className="bg-white text-green-600 px-4 py-2 rounded-xl inline-block">
              Cancelando Sua Agência?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-bold">
            Veja o impacto financeiro real de ter autonomia no seu marketing
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl mb-8">

          <div className="mb-8">
            <label className="block text-center text-lg font-bold text-gray-700 mb-4">
              Selecione o período de comparação:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {yearOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setYears(option.value)}
                  className={`p-4 rounded-xl font-black text-lg transition-all ${
                    years === option.value
                      ? 'bg-green-600 text-white scale-105 shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-500">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  Agência de Marketing
                </h3>
                <p className="text-sm text-gray-600">
                  R$ {agencyCostPerMonth.toLocaleString('pt-BR')}/mês
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Custo Total em {years} {years === 1 ? 'ano' : 'anos'}:</p>
                <p className="text-3xl md:text-4xl font-black text-red-600">
                  R$ {agencyTotalCost.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black">
                MELHOR ESCOLHA
              </div>

              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  MedMarketingAI+
                </h3>
                <p className="text-sm text-gray-600">
                  R$ 997 pagamento único
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Custo Total em {years} {years === 1 ? 'ano' : 'anos'}:</p>
                <p className="text-3xl md:text-4xl font-black text-green-600">
                  R$ {medMarketingCost.toLocaleString('pt-BR')}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  (vitalício • R$ 0/mês para sempre)
                </p>
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10 text-black" />
              <h3 className="text-2xl md:text-4xl font-black text-black">
                Você Economiza:
              </h3>
            </div>

            <p className="text-5xl md:text-7xl font-black text-black mb-4">
              R$ {savings.toLocaleString('pt-BR')}
            </p>

            <p className="text-xl md:text-2xl font-bold text-black mb-4">
              em {years} {years === 1 ? 'ano' : 'anos'} ({savingsPercentage}% de economia)
            </p>

            <div className="bg-black/10 rounded-xl p-4 inline-block">
              <p className="text-lg font-bold text-black">
                E ainda tem <span className="text-green-700">CONTROLE TOTAL</span> do seu marketing
              </p>
            </div>
          </div>

        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border-2 border-white/30">
          <p className="text-xl md:text-2xl text-white font-bold mb-4">
            💡 Essa é a diferença entre ser REFÉM e ser DONO do seu marketing
          </p>
          <p className="text-lg text-white/90">
            Enquanto você paga R$ {agencyTotalCost.toLocaleString('pt-BR')} para terceiros em {years} {years === 1 ? 'ano' : 'anos'},
            <br/>
            outros médicos investem R$ 997 uma vez e economizam R$ {savings.toLocaleString('pt-BR')}.
          </p>
        </div>

      </div>
    </section>
  );
}
