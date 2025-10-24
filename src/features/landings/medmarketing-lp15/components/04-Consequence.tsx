import React from 'react';
import { Lock, TrendingUp, Calculator, AlertCircle } from 'lucide-react';

export const ConsequenceSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            O Resultado?{' '}
            <span className="text-red-600">Paralisia Total</span>
          </h2>
        </div>

        {/* The Reality */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <Lock className="w-10 h-10 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Enquanto Você Tem Medo...
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Médicos "corajosos" (que não sabem o risco ou não se importam) dominam o digital:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <p className="font-black text-red-900 mb-2">Eles postam:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 3-5x por semana</li>
                <li>• Sem medo, sem filtro</li>
                <li>• Conteúdo agressivo</li>
                <li>• Muitas vezes IRREGULAR</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <p className="font-black text-green-900 mb-2">Resultado deles:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Agenda lotada</li>
                <li>• Autoridade digital</li>
                <li>• Pacientes todo dia</li>
                <li>• (Até levarem processo)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
            <p className="font-black text-gray-900 mb-2">Você (com medo):</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Não posta nada ou posta pouco</li>
              <li>• Perde oportunidades todo dia</li>
              <li>• Agenda 40-60% vazia</li>
              <li>• Vê concorrentes crescerem</li>
            </ul>
          </div>
        </div>

        {/* Opportunity Cost Calculator */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-10 h-10 text-green-400" />
            <h3 className="text-2xl md:text-3xl font-black">
              Calculadora do Custo da Paralisia
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-lg mb-4">
                Médico com presença digital forte vs médico invisível:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Diferença de pacientes/mês:</span>
                  <span className="font-black text-green-400">+15-20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ticket médio consulta:</span>
                  <span className="font-black text-green-400">R$ 500</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/30 pt-3">
                  <span className="text-xl font-bold">Perda mensal:</span>
                  <span className="text-2xl font-black text-red-400">R$ 7.500-10.000</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/30 pt-3">
                  <span className="text-xl font-bold">Perda anual:</span>
                  <span className="text-3xl font-black text-red-400">R$ 90.000-120.000</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-black text-yellow-300">
                Você está pagando MUITO MAIS por ter medo <br className="hidden md:block" />
                do que pagaria em uma eventual multa.
              </p>
            </div>
          </div>
        </div>

        {/* Price Comparison */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-10 h-10 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Compare os Custos
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <p className="text-xl font-black text-red-900 mb-4">Custo de NÃO postar (medo)</p>
              <p className="text-4xl font-black text-red-600 mb-2">R$ 90-120k</p>
              <p className="text-sm text-gray-700">por ano em pacientes perdidos</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-xl font-black text-orange-900 mb-4">Custo de 1 erro grave</p>
              <p className="text-4xl font-black text-orange-600 mb-2">R$ 20-70k</p>
              <p className="text-sm text-gray-700">uma vez (se acontecer)</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
            <p className="text-xl font-black text-gray-900 mb-4 text-center">
              Solução: Postar COM VALIDAÇÃO AUTOMÁTICA
            </p>
            <p className="text-5xl font-black text-green-600 text-center mb-2">R$ 997</p>
            <p className="text-center text-gray-700">
              único • proteção vitalícia • zero risco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
