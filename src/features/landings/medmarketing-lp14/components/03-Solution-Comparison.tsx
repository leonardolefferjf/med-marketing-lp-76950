import React from 'react';
import { Check, X, Zap, TrendingUp } from 'lucide-react';

export const SolutionComparison = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            A Solução:{' '}
            <span className="text-green-600">Seja Sua Própria "Agência"</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comparação real entre pagar agência, usar ChatGPT comum, ou ter o MedMarketingAI+
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
                  Agência
                </th>
                <th className="text-center p-4 font-black text-gray-900 border-2 border-gray-300">
                  ChatGPT Comum
                </th>
                <th className="text-center p-4 font-black text-green-600 border-2 border-green-500 bg-green-50">
                  MedMarketingAI+
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Custo Mensal</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <p className="text-red-600 font-black text-xl">R$ 5.000-15.000</p>
                  <p className="text-sm text-gray-600">para sempre</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <p className="text-orange-600 font-black text-xl">R$ 97</p>
                  <p className="text-sm text-gray-600">mas genérico</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <p className="text-green-600 font-black text-xl">R$ 0/mês</p>
                  <p className="text-sm text-green-700">único R$ 997</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Velocidade</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">3-5 dias por post</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <Check className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Rápido mas genérico</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Zap className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-bold text-green-700">30 segundos</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Especialização Médica</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Você precisa ensinar</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Genérico e superficial</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-bold text-green-700">165 assistentes especializados</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Compliance CFM 2.336/2023</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Você torce e reza</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Não valida nada</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-bold text-green-700">Validação automática</p>
                </td>
              </tr>

              <tr>
                <td className="p-4 font-bold text-gray-900 border-2 border-gray-200">Controle Total</td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <X className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Depende deles</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-200">
                  <Check className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <p className="text-sm text-gray-700">Mas trabalhoso</p>
                </td>
                <td className="p-4 text-center border-2 border-green-300 bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-bold text-green-700">100% seu, 100% fácil</p>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-4 font-black text-gray-900 border-2 border-gray-300">Custo 10 Anos</td>
                <td className="p-4 text-center border-2 border-gray-300">
                  <p className="text-2xl font-black text-red-600">R$ 600.000</p>
                </td>
                <td className="p-4 text-center border-2 border-gray-300">
                  <p className="text-2xl font-black text-orange-600">R$ 11.640</p>
                </td>
                <td className="p-4 text-center border-2 border-green-500 bg-green-100">
                  <p className="text-2xl font-black text-green-600">R$ 997</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Savings Visual */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-center shadow-xl">
          <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Economize R$ 1.379.003 em 10 Anos
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Agência de R$ 11.500/mês por 10 anos = R$ 1.380.000
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-2xl md:text-3xl font-black text-white">
              MedMarketingAI+ = R$ 997 único
            </p>
            <p className="text-lg text-white mt-2">
              Você economiza <span className="font-black text-yellow-300">R$ 1.379.003</span>
            </p>
          </div>
          <p className="text-xl text-white font-bold mt-6">
            E ainda tem controle TOTAL do seu marketing. Para sempre.
          </p>
        </div>
      </div>
    </section>
  );
};
