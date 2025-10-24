import React from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Garantia Incondicional de{' '}
            <span className="text-green-600">30 Dias</span>
          </h2>
          <p className="text-2xl font-bold text-gray-700">
            Risco Zero • 100% do Seu Dinheiro de Volta
          </p>
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border-2 border-green-300 shadow-xl mb-8">
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              Use o MedMarketingAI+ por <span className="font-black text-green-600">30 dias completos</span>.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              Se você não estiver 100% satisfeito, por qualquer motivo, nós devolvemos{' '}
              <span className="font-black text-green-600">TODO o seu investimento</span>.
            </p>
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 inline-block">
              <p className="text-2xl font-black text-gray-900 mb-2">
                Sem perguntas. Sem burocracia.
              </p>
              <p className="text-lg text-gray-700">
                Basta enviar um e-mail e você recebe 100% de volta.
              </p>
            </div>
          </div>

          {/* Why We Offer This */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <p className="text-lg font-black text-gray-900 mb-4">
              Por que oferecemos essa garantia?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Porque <span className="font-bold">SABEMOS</span> que depois de usar o MedMarketingAI+, você vai preferir ter:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <span className="font-bold">Controle total</span> por R$ 997 único
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Do que <span className="font-bold">dependência eterna</span> de R$ 5k/mês
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-2xl font-black text-white mb-6">
            Você decide em 30 dias:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-lg font-black text-white mb-2">Opção 1</p>
              <p className="text-3xl font-black text-green-400 mb-2">Controle Total</p>
              <p className="text-white/90">R$ 997 único • Marketing independente para sempre</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <p className="text-lg font-black text-white mb-2">Opção 2</p>
              <p className="text-3xl font-black text-red-400 mb-2">Dependência</p>
              <p className="text-white/90">R$ 5.000/mês eternamente • Sem controle</p>
            </div>
          </div>
          <p className="text-xl text-white/90 mt-6">
            O risco é <span className="font-black text-green-400">100% nosso</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
