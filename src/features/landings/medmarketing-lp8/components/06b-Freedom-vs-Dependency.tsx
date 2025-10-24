import React from 'react';
import { Lock, Unlock, TrendingDown, TrendingUp, Frown, Smile } from 'lucide-react';

export default function FreedomVsDependency() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Dois Caminhos.{' '}
            <span className="text-yellow-400">Você Escolhe.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Caminho 1: Dependência */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 border-4 border-red-600">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">
                Caminho da Dependência
              </h3>
              <p className="text-red-200 font-bold">
                Continue como está
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Pague R$ 138.000/ano</p>
                    <p className="text-red-200 text-sm">Em 10 anos: R$ 1.380.000</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <Frown className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Zero Controle</p>
                    <p className="text-red-200 text-sm">Refém do "bom humor" da agência</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Dependência Total</p>
                    <p className="text-red-200 text-sm">Não pode trocar sem perder tudo</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Concorrência Ganha</p>
                    <p className="text-red-200 text-sm">Enquanto você espera, eles agem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-red-950 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-red-300">
                Resultado: Frustração + Prejuízo
              </p>
            </div>
          </div>

          {/* Caminho 2: Liberdade */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 border-4 border-green-400">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Unlock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">
                Caminho da Liberdade
              </h3>
              <p className="text-green-200 font-bold">
                Tome o controle agora
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Invista R$ 997 uma vez</p>
                    <p className="text-green-200 text-sm">Economize R$ 1.379.003 em 10 anos</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-start gap-3">
                  <Smile className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Controle Total 24/7</p>
                    <p className="text-green-200 text-sm">Você decide tudo, quando quiser</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-start gap-3">
                  <Unlock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Autonomia Completa</p>
                    <p className="text-green-200 text-sm">Seu marketing, suas regras</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Vire Autoridade</p>
                    <p className="text-green-200 text-sm">Conteúdo rápido = mais pacientes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-950 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-green-300">
                Resultado: Autonomia + Economia
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 bg-yellow-400 rounded-2xl p-8 text-center">
          <p className="text-3xl md:text-4xl font-black text-black mb-4">
            A Escolha É Óbvia
          </p>
          <p className="text-xl md:text-2xl font-bold text-black">
            Médicos inteligentes escolhem autonomia.
          </p>
        </div>

      </div>
    </section>
  );
}
