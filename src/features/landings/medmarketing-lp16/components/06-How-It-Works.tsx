import React from 'react';
import { Play, Settings, Zap, CheckCircle2, Clock, Coffee, Sunrise } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Automação Total em 3 Passos
          </h2>
          <p className="text-xl text-gray-300">
            Configura 1x, funciona para sempre
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-white rounded-2xl p-6 text-center flex-shrink-0">
                <p className="text-6xl font-black text-blue-600">1</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-8 h-8 text-white" />
                  <h3 className="text-3xl font-black text-white">Configure Uma Vez</h3>
                </div>
                <p className="text-xl text-white mb-4">
                  Responda 5 perguntas sobre sua especialidade e estilo de atendimento.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5" />
                    <span className="font-black">Tempo: 10 minutos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-white rounded-2xl p-6 text-center flex-shrink-0">
                <p className="text-6xl font-black text-purple-600">2</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Play className="w-8 h-8 text-white" />
                  <h3 className="text-3xl font-black text-white">Ative a Automação</h3>
                </div>
                <p className="text-xl text-white mb-4">
                  164 assistentes de IA começam a trabalhar 24/7 criando seu marketing.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                  <div className="flex items-center gap-2 text-white">
                    <Zap className="w-5 h-5" />
                    <span className="font-black">Instantâneo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-white rounded-2xl p-6 text-center flex-shrink-0">
                <p className="text-6xl font-black text-pink-600">3</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-8 h-8 text-white" />
                  <h3 className="text-3xl font-black text-white">Viva Sua Vida</h3>
                </div>
                <p className="text-xl text-white mb-4">
                  Revise 10-20 min/semana se quiser. O resto é automático.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                  <div className="flex items-center gap-2 text-white">
                    <Sunrise className="w-5 h-5" />
                    <span className="font-black">Para sempre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison: While You vs Your AI */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
            Enquanto Você... Sua IA Está...
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* You column */}
            <div className="space-y-4">
              <h4 className="text-xl font-black text-blue-600 text-center mb-4">VOCÊ</h4>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-900 font-bold">Jantando com a família</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-900 font-bold">Dormindo tranquilo</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-900 font-bold">No parque com os filhos</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-900 font-bold">Atendendo pacientes</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-gray-900 font-bold">De férias na praia</p>
              </div>
            </div>

            {/* AI column */}
            <div className="space-y-4">
              <h4 className="text-xl font-black text-green-600 text-center mb-4">SUA IA</h4>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Criando 3 posts educativos
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Gerando legendas otimizadas
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Planejando conteúdo da semana
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Validando ética CFM
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-900 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Trabalhando 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-center">
            <p className="text-2xl font-black text-white">
              Sistema roda sozinho. Para sempre. 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
