import React from 'react';
import { Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const TimeRecoveryGuarantee = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-600">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-xl">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="font-black text-gray-900">GARANTIA TRIPLA</span>
          </div>
        </div>

        {/* Main Guarantee */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <Clock className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Garantia de Recuperação de Tempo
            </h2>
            <p className="text-2xl text-gray-700">
              Ou seu dinheiro 100% de volta
            </p>
          </div>

          {/* Main Promise */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-4 border-green-300 mb-8">
            <p className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-4">
              Se em 30 dias você NÃO recuperar pelo menos 8 horas por semana...
            </p>
            <p className="text-3xl md:text-4xl font-black text-green-600 text-center">
              Devolvemos 100% do seu dinheiro
            </p>
          </div>

          {/* Guarantee Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Sem perguntas</p>
                <p className="text-gray-700">
                  Se você sentir que não recuperou tempo suficiente, basta pedir o reembolso. Sem questionamentos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Sem burocracia</p>
                <p className="text-gray-700">
                  Um email é suficiente. Processamos em até 48h úteis. Simples assim.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">30 dias completos</p>
                <p className="text-gray-700">
                  Você tem um mês inteiro para usar tudo, testar tudo, e decidir se vale a pena.
                </p>
              </div>
            </div>
          </div>

          {/* Why we do this */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
              Por Que Oferecemos Essa Garantia?
            </h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              Porque sabemos que funciona. Mais de 1.200 médicos já recuperaram suas vidas.
              A taxa de reembolso é menor que 2%.
            </p>
            <p className="text-xl font-bold text-center text-gray-900">
              Quando você testa, você fica. É simples assim.
            </p>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-6xl mb-3">🤔</p>
              <p className="font-black text-gray-900 text-xl mb-2">VOCÊ HESITA</p>
              <p className="text-gray-700">
                Mais 1 mês perdido com marketing manual. Mais 36 horas gastas. Mais finais de semana sacrificados.
              </p>
            </div>

            <div className="text-center">
              <p className="text-6xl mb-3">😊</p>
              <p className="font-black text-gray-900 text-xl mb-2">VOCÊ TESTA</p>
              <p className="text-gray-700">
                30 dias para recuperar 35+ horas. Se não funcionar, você tem seu dinheiro de volta. Risco zero.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#oferta-section"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-600 font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 border-4 border-green-300"
          >
            COMEÇAR AGORA SEM RISCO
            <ArrowRight className="w-7 h-7" />
          </a>
          <p className="mt-4 text-white text-sm">
            O risco é todo nosso. O ganho de tempo é todo seu.
          </p>
        </div>
      </div>
    </section>
  );
};
