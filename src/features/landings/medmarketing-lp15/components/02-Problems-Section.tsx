import React from 'react';
import { AlertTriangle, Brain, Clock, TrendingDown } from 'lucide-react';

export const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Você Já Passou Por Isso?
          </h2>
        </div>

        {/* Scenario */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-red-600" />
            <p className="text-2xl font-black text-gray-900">
              Sexta-feira, 22h30
            </p>
          </div>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Você finalmente conseguiu criar aquele post sobre seu novo tratamento. <br className="hidden md:block" />
            Está pronto. Layout bonito. Texto educativo. Tudo certo.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Sua mão está sobre o botão "Publicar"...
          </p>

          <p className="text-2xl font-black text-red-600 mb-6">
            ...mas você CONGELA.
          </p>

          {/* Internal Dialogue - Fear Bubbles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 italic">
                    "Será que essa frase não está prometendo resultado?"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 italic">
                    "E se o CFM considerar isso sensacionalismo?"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 italic">
                    "Essa imagem pode ser considerada autopromoção excessiva?"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 italic">
                    "E se eu tomar um processo ético por causa disso?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl font-black text-gray-900 text-center">
            Você DELETA o post e vai dormir frustrado.
          </p>
        </div>

        {/* Story - Dr. Carlos Case */}
        <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-12 h-12 text-yellow-300" />
            <h3 className="text-2xl md:text-3xl font-black">
              História Real: Dr. Carlos
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-black">Dr. Carlos, cirurgião plástico</span>, postou um antes/depois de rinoplastia com a legenda: <span className="italic">"Resultados incríveis em apenas 1 mês!"</span>
            </p>

            <p className="text-lg leading-relaxed">
              <span className="font-black text-yellow-300">1 semana depois:</span> Notificação do CRM.
            </p>

            <p className="text-lg leading-relaxed">
              <span className="font-black text-yellow-300">2 meses depois:</span> Processo ético aberto.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-2xl font-black mb-4">O custo total:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Multa: <span className="font-black">R$ 50.000</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Advogado: <span className="font-black">R$ 15.000</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Tempo perdido: <span className="font-black">8 meses de estresse</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Reputação: <span className="font-black">manchada para sempre</span></span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-black text-yellow-300 text-center mt-6">
              Por causa de UMA FRASE.
            </p>
          </div>
        </div>

        {/* Consequence */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <TrendingDown className="w-10 h-10 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                O Resultado?
              </h3>
              <p className="text-lg text-gray-800 mb-4">
                Melhor não publicar → Presença digital zero → Agenda 40-60% vazia
              </p>
            </div>
          </div>

          {/* Cost of Inaction */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <p className="text-xl font-black text-gray-900 mb-4">
              O custo de NÃO publicar (por medo):
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">15-20 pacientes perdidos/mês:</span>
                <span className="font-black text-red-600">R$ 7.500-10.000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">1 ano sem marketing por medo:</span>
                <span className="font-black text-red-600">R$ 90.000-120.000</span>
              </div>
              <div className="border-t-2 border-red-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total perdido em 5 anos:</span>
                  <span className="text-2xl font-black text-red-600">R$ 450.000-600.000</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xl font-black text-gray-900 mt-6">
            Você está perdendo MUITO mais por medo <br className="hidden md:block" />
            do que pagaria em uma eventual multa.
          </p>
        </div>
      </div>
    </section>
  );
};
