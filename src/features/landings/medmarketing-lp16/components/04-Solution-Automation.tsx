import React from 'react';
import { Zap, CheckCircle2, X, Calendar, Coffee, Heart } from 'lucide-react';

export const SolutionAutomation = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border-2 border-white/30">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span className="text-white font-black">A SOLUÇÃO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            IA Trabalha 24/7 • Você Recupera Sua Vida
          </h2>
          <p className="text-2xl text-white/90">
            Pare de escolher. Tenha os dois: Agenda cheia + Vida pessoal
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* BEFORE */}
          <div className="bg-gray-900 rounded-2xl p-8 border-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 rounded-full p-3">
                <X className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">ANTES</h3>
            </div>

            <div className="space-y-4">
              {/* Friday */}
              <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-sm font-bold text-gray-400 mb-1">SEXTA 20h</p>
                <p className="text-white font-bold">Exausto depois de 12h trabalhando</p>
                <p className="text-gray-400 text-sm mt-1">Lembra que não postou nada</p>
              </div>

              {/* Saturday */}
              <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-sm font-bold text-gray-400 mb-1">SÁBADO 9h</p>
                <p className="text-white font-bold">Escolhe: Família OU marketing</p>
                <p className="text-gray-400 text-sm mt-1">3-4h criando conteúdo no computador</p>
              </div>

              {/* Sunday */}
              <div className="bg-gray-800 rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-sm font-bold text-gray-400 mb-1">DOMINGO</p>
                <p className="text-white font-bold">Culpa por não estar presente</p>
                <p className="text-gray-400 text-sm mt-1">Ou culpa por não ter feito marketing</p>
              </div>

              {/* Result */}
              <div className="bg-red-900 rounded-xl p-4 mt-6">
                <p className="text-red-200 font-black text-center text-lg">
                  9h/semana roubadas + Vida sacrificada
                </p>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="bg-white rounded-2xl p-8 border-4 border-green-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 rounded-full p-3">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">DEPOIS</h3>
            </div>

            <div className="space-y-4">
              {/* Friday */}
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-sm font-bold text-blue-600 mb-1">SEXTA 20h</p>
                <p className="text-gray-900 font-bold">Jantando com a família</p>
                <p className="text-gray-600 text-sm mt-1">IA já postou 3x essa semana</p>
              </div>

              {/* Saturday */}
              <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-sm font-bold text-green-600 mb-1">SÁBADO 9h</p>
                <p className="text-gray-900 font-bold">Parque com os filhos</p>
                <p className="text-gray-600 text-sm mt-1">IA trabalha em background</p>
              </div>

              {/* Sunday */}
              <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-sm font-bold text-purple-600 mb-1">DOMINGO</p>
                <p className="text-gray-900 font-bold">Descansando de verdade</p>
                <p className="text-gray-600 text-sm mt-1">Marketing rodando 100% automatizado</p>
              </div>

              {/* Result */}
              <div className="bg-green-600 rounded-xl p-4 mt-6">
                <p className="text-white font-black text-center text-lg">
                  7 posts automáticos + Vida recuperada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-black text-gray-900 mb-1">20 min</p>
              <p className="text-gray-600">Por semana</p>
            </div>
            <div>
              <Coffee className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-3xl font-black text-gray-900 mb-1">24/7</p>
              <p className="text-gray-600">IA trabalhando</p>
            </div>
            <div>
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <p className="text-3xl font-black text-gray-900 mb-1">100%</p>
              <p className="text-gray-600">Presente na vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
