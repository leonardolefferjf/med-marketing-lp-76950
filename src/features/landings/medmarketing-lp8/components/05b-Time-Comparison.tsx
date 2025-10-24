import React from 'react';
import { Clock, Zap, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function TimeComparison() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <Clock className="w-4 h-4" />
            Comparativo de Tempo Real
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Agência vs{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              MedMarketingAI+
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-bold">
            Do briefing ao post publicado
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Agência - Caminho Lento */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                COM AGÊNCIA
              </h3>
              <p className="text-red-600 font-bold mt-2">
                Processo Lento e Frustrante
              </p>
            </div>

            <div className="space-y-4">
              {/* Passo 1 */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Reunião de Briefing</p>
                    <p className="text-sm text-gray-600">⏱️ 1-2 horas do seu tempo</p>
                  </div>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Espera da Agência</p>
                    <p className="text-sm text-gray-600">⏱️ 3-5 dias úteis</p>
                  </div>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Revisões e Ajustes</p>
                    <p className="text-sm text-gray-600">⏱️ +2 horas + mais dias</p>
                  </div>
                </div>
              </div>

              {/* Passo 4 */}
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Aprovação Final</p>
                    <p className="text-sm text-gray-600">⏱️ Mais espera...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Time */}
            <div className="mt-6 bg-red-600 text-white rounded-xl p-4 text-center">
              <p className="text-sm font-bold mb-1">TEMPO TOTAL:</p>
              <p className="text-3xl font-black">1 SEMANA</p>
              <p className="text-sm mt-2">+ Frustração + Dependência</p>
            </div>
          </div>

          {/* MedMarketingAI+ - Caminho Rápido */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500 relative">
            <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black">
              RÁPIDO
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                COM MEDMARKETINGAI+
              </h3>
              <p className="text-green-600 font-bold mt-2">
                Processo Instantâneo
              </p>
            </div>

            <div className="space-y-4">
              {/* Passo 1 */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Escolha o Assistente</p>
                    <p className="text-sm text-gray-600">⚡ 5 segundos</p>
                  </div>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Digite 1 Frase</p>
                    <p className="text-sm text-gray-600">⚡ 10 segundos</p>
                  </div>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">Conteúdo Gerado</p>
                    <p className="text-sm text-gray-600">⚡ 15 segundos</p>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="h-20"></div>
            </div>

            {/* Total Time */}
            <div className="mt-6 bg-green-600 text-white rounded-xl p-4 text-center">
              <p className="text-sm font-bold mb-1">TEMPO TOTAL:</p>
              <p className="text-3xl font-black">30 SEGUNDOS</p>
              <p className="text-sm mt-2">+ Autonomia + Controle Total</p>
            </div>
          </div>

        </div>

        {/* Bottom Impact */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center">
          <p className="text-2xl md:text-4xl font-black text-black mb-4">
            🚀 1 Semana vs 30 Segundos
          </p>
          <p className="text-xl md:text-2xl font-bold text-black">
            Você decide: continuar esperando ou ter controle imediato?
          </p>
        </div>

      </div>
    </section>
  );
}
