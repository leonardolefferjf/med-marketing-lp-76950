import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function GarantiaSection() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-emerald-600 py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">

          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Garantia Incondicional de 30 Dias
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-6">
            Risco Zero Para Você
          </p>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              Teste o MedMarketingAI+ por 30 dias completos.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              Se você não estiver 100% satisfeito,<br/>
              <strong className="text-green-600">devolvemos TODO seu dinheiro.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <p className="font-bold text-gray-900">Sem perguntas</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <p className="font-bold text-gray-900">Sem burocracia</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <p className="font-bold text-gray-900">Sem letras miúdas</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-black text-black">
              Por quê fazemos isso?
            </p>
            <p className="text-base md:text-lg font-bold text-black mt-3">
              Porque SABEMOS que você vai preferir ter controle total<br/>
              do seu marketing por R$ 997 único<br/><br/>
              Do que continuar dependendo de agências de R$ 5k/mês.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
