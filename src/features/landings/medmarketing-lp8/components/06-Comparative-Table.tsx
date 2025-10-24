import React from 'react';
import { Award, X, Check, AlertTriangle, Shield, Clock, Zap } from 'lucide-react';

export default function ComparativeTable() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl border-2 border-gray-200 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-7 h-7 text-yellow-600" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
              Por Que Médicos Estão Cancelando Agências
            </h3>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-300">Característica</th>
                  <th className="p-4 font-bold text-gray-700 border-b-2 border-gray-300 text-center">Agência<br/>Tradicional</th>
                  <th className="p-4 font-bold text-yellow-600 border-b-2 border-yellow-400 text-center bg-yellow-50">MedMarketing<br/>AI+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Custo</td>
                  <td className="p-4 text-center"><div className="text-red-600 font-bold">R$ 5-15k/mês</div></td>
                  <td className="p-4 text-center bg-yellow-50"><div className="text-xl font-black text-green-600">R$ 997 único</div></td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold text-gray-900">Velocidade</td>
                  <td className="p-4 text-center">3-5 dias</td>
                  <td className="p-4 text-center bg-green-50"><span className="text-xl font-black text-green-600">30s</span></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Controle</td>
                  <td className="p-4 text-center"><X className="w-6 h-6 text-red-500 mx-auto" /><span className="text-xs">Zero</span></td>
                  <td className="p-4 text-center bg-green-50"><Check className="w-7 h-7 text-green-600 mx-auto" /><span className="text-xs font-black">Total</span></td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-gray-100">
                  <td className="p-4 font-semibold text-gray-900">Compliance CFM</td>
                  <td className="p-4 text-center"><AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto" /><span className="text-xs">Nem sempre</span></td>
                  <td className="p-4 text-center bg-green-50"><Check className="w-7 h-7 text-green-600 mx-auto" /><span className="text-xs font-black">100%</span></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Disponibilidade</td>
                  <td className="p-4 text-center text-sm">Horário comercial</td>
                  <td className="p-4 text-center bg-green-50"><span className="text-xl font-black text-green-600">24/7</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-lg mb-4">💰 Custo</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm">Agência</span>
                  <span className="text-red-600 font-bold">R$ 5-15k/mês</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg border-2 border-green-500">
                  <span className="text-sm font-bold">MedMarketingAI+</span>
                  <span className="text-xl font-black text-green-600">R$ 997 único</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-500">
            <p className="text-lg md:text-xl font-bold text-gray-900 text-center">
              💡 Agência: R$ 138k/ano de dependência<br/>
              MedMarketingAI+: R$ 997 de autonomia vitalícia
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
