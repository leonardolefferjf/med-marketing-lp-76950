import React from 'react';
import { Check, X, Shield } from 'lucide-react';

export const DifferentiatorTable = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Por Que MedMarketingAI+ é{' '}
            <span className="text-green-600">Diferente?</span>
          </h2>
          <p className="text-xl text-gray-700">
            Comparação real: ChatGPT comum, Agência ou MedMarketingAI+
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-black text-gray-900 border-2 border-gray-300">
                  Critério
                </th>
                <th className="text-center p-4 font-black text-gray-900 border-2 border-gray-300">
                  ChatGPT Comum
                </th>
                <th className="text-center p-4 font-black text-gray-900 border-2 border-gray-300">
                  Agência
                </th>
                <th className="text-center p-4 font-black text-green-600 border-2 border-green-500 bg-green-50">
                  MedMarketingAI+
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Conhece CFM 2.336/2023</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Conhecimento superficial</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Depende de você ensinar</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <p className="text-sm font-bold text-green-700 mt-1">Base completa integrada</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Valida ANTES de publicar</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Você torce e reza</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Também torce e reza</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <p className="text-sm font-bold text-green-700 mt-1">Validação automática sempre</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Base legal atualizada</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Dados até 2023</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Geralmente desatualizada</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <p className="text-sm font-bold text-green-700 mt-1">Atualização constante</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Alerta problemas específicos</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Não detecta automaticamente</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <p className="text-sm text-gray-600 mt-1">Às vezes, se perceberem</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <p className="text-sm font-bold text-green-700 mt-1">Alerta detalhado sempre</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Risco de processo CFM</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <p className="text-xl font-black text-red-600">ALTO</p>
                  <p className="text-sm text-gray-600 mt-1">Sem proteção</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <p className="text-xl font-black text-orange-600">MÉDIO</p>
                  <p className="text-sm text-gray-600 mt-1">Depende da agência</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <p className="text-xl font-black text-green-600">ZERO</p>
                  <p className="text-sm font-bold text-green-700 mt-1">0 processos até hoje</p>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-4 font-black text-gray-900 border-2 border-gray-300">Casos Reportados</td>
                <td className="p-4 text-center border-2 border-gray-300">
                  <p className="text-2xl font-black text-red-600">Vários</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-300">
                  <p className="text-2xl font-black text-orange-600">Alguns</p>
                </td>
                <td className="p-4 text-center border-2 border-green-500 bg-green-100">
                  <p className="text-2xl font-black text-green-600">ZERO</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Highlight */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-center shadow-xl">
          <Shield className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            ZERO Processos Desde 2024
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Nenhum médico usando MedMarketingAI+ recebeu processo ético do CFM até hoje.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-lg text-white">
              <span className="font-black">Base de dados:</span> Resolução CFM 2.336/2023 completa + 50+ especialidades médicas + jurisprudência de casos reais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
