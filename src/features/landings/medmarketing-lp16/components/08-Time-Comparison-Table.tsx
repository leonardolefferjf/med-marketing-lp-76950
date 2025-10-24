import React from 'react';
import { X, AlertTriangle, CheckCircle2, Clock, Calendar, Zap, Heart, DollarSign } from 'lucide-react';

export const TimeComparisonTable = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Compare: Tempo é Vida
          </h2>
          <p className="text-xl text-gray-700">
            Quanto da sua vida você está disposto a sacrificar?
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-6 text-left text-white font-black text-lg border-r-2 border-gray-700">
                  Critério
                </th>
                <th className="p-6 text-center bg-red-900 border-r-2 border-gray-700">
                  <div className="flex flex-col items-center gap-2">
                    <X className="w-8 h-8 text-red-300" />
                    <span className="text-white font-black text-lg">Manual</span>
                    <span className="text-red-300 text-sm">Você faz tudo</span>
                  </div>
                </th>
                <th className="p-6 text-center bg-orange-900 border-r-2 border-gray-700">
                  <div className="flex flex-col items-center gap-2">
                    <AlertTriangle className="w-8 h-8 text-orange-300" />
                    <span className="text-white font-black text-lg">Agência</span>
                    <span className="text-orange-300 text-sm">Dependência cara</span>
                  </div>
                </th>
                <th className="p-6 text-center bg-green-900">
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-green-300" />
                    <span className="text-white font-black text-lg">MedMarketingAI+</span>
                    <span className="text-green-300 text-sm">Automação total</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Weekly Time */}
              <tr className="border-b-2 border-gray-200">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    Tempo Semanal
                  </div>
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <p className="text-3xl font-black text-red-600 mb-1">9h</p>
                  <p className="text-sm text-gray-700">Mais de 1 dia inteiro</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <p className="text-3xl font-black text-orange-600 mb-1">2-3h</p>
                  <p className="text-sm text-gray-700">Reuniões + aprovações</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <p className="text-3xl font-black text-green-600 mb-1">20 min</p>
                  <p className="text-sm text-gray-700">Revisar se quiser</p>
                </td>
              </tr>

              {/* When Work */}
              <tr className="border-b-2 border-gray-200">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    Quando Trabalha
                  </div>
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <p className="font-black text-red-900">Noites + Fins de semana</p>
                  <p className="text-sm text-gray-700 mt-1">Quando deveria descansar</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <p className="font-black text-orange-900">Horário comercial</p>
                  <p className="text-sm text-gray-700 mt-1">Reuniões eternas</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <p className="font-black text-green-900">24/7 automático</p>
                  <p className="text-sm text-gray-700 mt-1">Nunca para</p>
                </td>
              </tr>

              {/* Personal Time Sacrifice */}
              <tr className="border-b-2 border-gray-200">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-gray-600" />
                    Sacrifica Tempo Pessoal
                  </div>
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="font-black text-red-900">Sempre</p>
                  <p className="text-sm text-gray-700">Família paga o preço</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-black text-orange-900">Frequentemente</p>
                  <p className="text-sm text-gray-700">Reuniões roubam tempo</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-black text-green-900">Nunca</p>
                  <p className="text-sm text-gray-700">100% automatizado</p>
                </td>
              </tr>

              {/* Mental Energy */}
              <tr className="border-b-2 border-gray-200">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gray-600" />
                    Energia Mental
                  </div>
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <p className="font-black text-red-900">Exaustão total</p>
                  <p className="text-sm text-gray-700 mt-1">Decisões o tempo todo</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <p className="font-black text-orange-900">Desgaste alto</p>
                  <p className="text-sm text-gray-700 mt-1">Explicações infinitas</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <p className="font-black text-green-900">Zero gasto</p>
                  <p className="text-sm text-gray-700 mt-1">IA decide tudo</p>
                </td>
              </tr>

              {/* Quality of Life */}
              <tr className="border-b-2 border-gray-200">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  Qualidade de Vida
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <p className="text-4xl mb-2">😫</p>
                  <p className="font-black text-red-900">Péssima</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <p className="text-4xl mb-2">😐</p>
                  <p className="font-black text-orange-900">Razoável</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <p className="text-4xl mb-2">😊</p>
                  <p className="font-black text-green-900">Excelente</p>
                </td>
              </tr>

              {/* Hours Per Year */}
              <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Horas Gastas/Ano
                  </div>
                </td>
                <td className="p-6 text-center bg-red-100 border-r-2 border-gray-200">
                  <p className="text-4xl font-black text-red-600 mb-2">468h</p>
                  <p className="text-2xl font-black text-red-900 mb-1">19 DIAS</p>
                  <p className="text-sm text-gray-700">Quase 3 semanas perdidas</p>
                </td>
                <td className="p-6 text-center bg-orange-100 border-r-2 border-gray-200">
                  <p className="text-4xl font-black text-orange-600 mb-2">120h</p>
                  <p className="text-2xl font-black text-orange-900 mb-1">5 DIAS</p>
                  <p className="text-sm text-gray-700">+ R$ 138k/ano</p>
                </td>
                <td className="p-6 text-center bg-green-100">
                  <p className="text-4xl font-black text-green-600 mb-2">17h</p>
                  <p className="text-2xl font-black text-green-900 mb-1">0.7 DIAS</p>
                  <p className="text-sm text-gray-700">Praticamente zero</p>
                </td>
              </tr>

              {/* Cost */}
              <tr>
                <td className="p-6 font-black text-gray-900 border-r-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    Investimento
                  </div>
                </td>
                <td className="p-6 text-center bg-red-50 border-r-2 border-gray-200">
                  <p className="font-black text-red-900">Sua vida</p>
                  <p className="text-sm text-gray-700 mt-1">Não tem preço</p>
                </td>
                <td className="p-6 text-center bg-orange-50 border-r-2 border-gray-200">
                  <p className="text-2xl font-black text-orange-600 mb-1">R$ 138k/ano</p>
                  <p className="text-sm text-gray-700">R$ 5-15k/mês eternamente</p>
                </td>
                <td className="p-6 text-center bg-green-50">
                  <p className="text-2xl font-black text-green-600 mb-1">R$ 997 único</p>
                  <p className="text-sm text-gray-700">Acesso vitalício</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Emphasis */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Você Recupera 451 Horas Por Ano
          </p>
          <p className="text-xl text-white mb-2">
            468h (manual) - 17h (MedMarketingAI+) = 451h de vida recuperadas
          </p>
          <p className="text-2xl font-black text-yellow-300">
            = 18.7 DIAS COMPLETOS TODO ANO
          </p>
        </div>
      </div>
    </section>
  );
};
