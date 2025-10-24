import React from 'react';
import { Shield, CheckCircle, Award } from 'lucide-react';

export const DoubleGuarantee = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Garantia{' '}
            <span className="text-green-600">Dupla de Proteção</span>
          </h2>
          <p className="text-2xl font-bold text-gray-700">
            Assumimos TODO o risco por você
          </p>
        </div>

        {/* Guarantees */}
        <div className="space-y-6 mb-12">
          {/* Guarantee #1 - Process Coverage */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border-2 border-green-300 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-600 rounded-xl p-3 flex-shrink-0">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-black mb-3">
                  GARANTIA #1
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Cobertura de Processo CFM
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-green-200 mb-4">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Se você receber processo ético do CFM por conteúdo gerado pelo MedMarketingAI+{' '}
                <span className="font-black">(seguindo as recomendações do sistema)</span>, nós:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    <span className="font-black">Devolvemos 100%</span> do seu investimento
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    <span className="font-black">Pagamos sua multa</span> até R$ 50.000
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-600 rounded-xl p-4 text-center">
              <p className="text-xl font-black text-white">
                Risco ZERO para você. Assumimos toda responsabilidade.
              </p>
            </div>
          </div>

          {/* Guarantee #2 - Satisfaction */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border-2 border-blue-300 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-xl p-3 flex-shrink-0">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-black mb-3">
                  GARANTIA #2
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Satisfação Incondicional de 30 Dias
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 mb-4">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Use o MedMarketingAI+ por 30 dias completos. Se você não se sentir{' '}
                <span className="font-black">100% SEGURO</span> para publicar:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    Envie um e-mail e receba <span className="font-black">100% do seu dinheiro de volta</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">
                    <span className="font-black">Sem perguntas.</span> Sem burocracia.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 text-center">
              <p className="text-xl font-black text-white">
                Se não eliminar seu medo, não pague.
              </p>
            </div>
          </div>
        </div>

        {/* Why We Offer This */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-center">
            Por Que Oferecemos Essa Garantia Dupla?
          </h3>

          <div className="space-y-4 mb-6">
            <p className="text-lg leading-relaxed">
              Porque em <span className="font-black text-green-400">+1.247 médicos</span> usando o MedMarketingAI+ desde 2024:
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <div className="text-center">
                <p className="text-6xl font-black text-green-400 mb-2">ZERO</p>
                <p className="text-xl font-bold">Processos CFM recebidos</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-center">
              Nossa validação funciona. <br className="hidden md:block" />
              O risco é <span className="font-black text-yellow-300">100% nosso</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 text-center">
              <p className="text-lg font-bold mb-2">Você sem MedMarketingAI+</p>
              <p className="text-3xl font-black text-red-400 mb-2">R$ 65k</p>
              <p className="text-sm">Se levar 1 processo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 text-center">
              <p className="text-lg font-bold mb-2">Você com MedMarketingAI+</p>
              <p className="text-3xl font-black text-green-400 mb-2">R$ 997</p>
              <p className="text-sm">Proteção vitalícia + Garantia dupla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
