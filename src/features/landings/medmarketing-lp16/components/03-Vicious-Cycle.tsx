import React from 'react';
import { RefreshCw, TrendingDown, Clock, AlertTriangle } from 'lucide-react';

export const ViciousCycle = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            O Ciclo Vicioso Que Está Acabando Com Você
          </h2>
          <p className="text-xl text-gray-700">
            E não existe saída... até agora
          </p>
        </div>

        {/* Cycle Visualization */}
        <div className="relative max-w-3xl mx-auto mb-16">
          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-red-600 rounded-full p-6 shadow-2xl animate-spin-slow">
              <RefreshCw className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Cycle Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-black text-red-600">1</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">
                Agenda Vazia
              </h3>
              <p className="text-gray-700">
                50% dos horários disponíveis. Você precisa urgentemente de marketing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-black text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">
                Marketing Rouba Tempo
              </h3>
              <p className="text-gray-700">
                Criar posts, legendas, planejamento = 9 horas por semana. Tempo que você não tem.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-black text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">
                Escolha Impossível
              </h3>
              <p className="text-gray-700">
                Família ou trabalho? Descanso ou marketing? Você escolhe viver.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-black text-red-600">4</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">
                Não Faz Marketing
              </h3>
              <p className="text-gray-700">
                Mais uma semana sem posts. Concorrência avança. Volta pro passo 1.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Impact */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-black text-white text-center mb-8">
            O Resultado Devastador:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30">
              <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
              <p className="text-4xl font-black text-white mb-2">60h/semana</p>
              <p className="text-white">Trabalhando</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30">
              <TrendingDown className="w-12 h-12 text-red-300 mx-auto mb-3" />
              <p className="text-4xl font-black text-white mb-2">Ganhando</p>
              <p className="text-white">Como 30h/semana</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30">
              <AlertTriangle className="w-12 h-12 text-orange-300 mx-auto mb-3" />
              <p className="text-4xl font-black text-white mb-2">Zero</p>
              <p className="text-white">Energia pra família</p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Você Virou REFÉM da Própria Profissão
          </p>
          <p className="text-xl text-gray-300">
            Trabalha mais. Ganha menos. E não vive.
          </p>
        </div>
      </div>
    </section>
  );
};
