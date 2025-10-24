import React from 'react';
import { XCircle, AlertTriangle, DollarSign } from 'lucide-react';

export const CFMProhibitions = () => {
  const prohibitions = [
    {
      title: "Promessa de Resultado",
      example: "❌ 'Cure 100% da acne em 30 dias'",
      risk: "Multa R$ 10-50k + Processo"
    },
    {
      title: "Sensacionalismo",
      example: "❌ 'Tratamento revolucionário nunca visto'",
      risk: "Multa R$ 10-50k + Reputação"
    },
    {
      title: "Antes/Depois Sem Autorização",
      example: "❌ Fotos sem consentimento formal",
      risk: "Multa R$ 20-50k + Processo LGPD"
    },
    {
      title: "Preços Sem Contexto",
      example: "❌ 'Consulta R$ 200 IMPERDÍVEL!'",
      risk: "Multa R$ 10-30k + Advertência"
    },
    {
      title: "Autopromoção Excessiva",
      example: "❌ 'Melhor médico do Brasil'",
      risk: "Multa R$ 10-40k + Censura"
    },
    {
      title: "Garantias Impossíveis",
      example: "❌ '100% de sucesso garantido'",
      risk: "Multa R$ 20-50k + Suspensão"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-black mb-4">
            <AlertTriangle className="w-5 h-5" />
            RESOLUÇÃO CFM 2.336/2023
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            O Que Pode{' '}
            <span className="text-red-600">Destruir Sua Carreira</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            6 tipos de conteúdo proibidos que podem custar R$ 50k + processo ético
          </p>
        </div>

        {/* Prohibitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prohibitions.map((prohibition, index) => (
            <div
              key={index}
              className="bg-red-50 rounded-xl p-6 border-2 border-red-200 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-xl font-black text-red-900">
                  {prohibition.title}
                </h3>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-red-300">
                <p className="text-sm text-gray-800 italic">
                  {prohibition.example}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-red-700">
                  {prohibition.risk}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center mb-8">
            <DollarSign className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              O Custo Real de UM Erro
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-lg font-bold mb-2">Custos Diretos</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Multa CFM:</span>
                  <span className="font-black">R$ 10-50k</span>
                </li>
                <li className="flex justify-between">
                  <span>Advogado:</span>
                  <span className="font-black">R$ 10-20k</span>
                </li>
                <li className="flex justify-between border-t border-white/30 pt-2">
                  <span className="font-bold">Subtotal:</span>
                  <span className="font-black text-yellow-300">R$ 20-70k</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-lg font-bold mb-2">Custos Indiretos</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Estresse/tempo:</span>
                  <span className="font-black">6-12 meses</span>
                </li>
                <li className="flex justify-between">
                  <span>Reputação:</span>
                  <span className="font-black">Incalculável</span>
                </li>
                <li className="flex justify-between border-t border-white/30 pt-2">
                  <span className="font-bold">Total:</span>
                  <span className="font-black text-yellow-300">R$ 65k+</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-2xl font-black text-center mt-8">
            E você convive com esse medo TODO DIA.
          </p>
        </div>
      </div>
    </section>
  );
};
