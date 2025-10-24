import React from 'react';
import { Sparkles, Shield, Zap, CheckCircle2, TrendingUp, Crown } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg">
            <Crown className="w-4 h-4" />
            A Solução Para Sua Independência
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Seja Sua Própria{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              "Agência"
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Sem Precisar Virar Especialista em Marketing
          </p>
        </div>

        {/* Produto */}
        <div className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 text-white rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              MedMarketingAI+
            </h3>
            <p className="text-2xl md:text-3xl font-bold mb-6">
              165 Assistentes de IA Especializados em Medicina Brasileira
            </p>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed">
                Não é ChatGPT genérico.<br/>
                Não é agência cara.<br/><br/>
                É uma <strong>EQUIPE COMPLETA de marketing médico</strong><br/>
                trabalhando 24/7 só para você.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-500 transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">
              1. Especialização Médica REAL
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Treinado com +50 especialidades médicas brasileiras.
              Não é IA genérica que você precisa ensinar.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200 hover:border-green-500 transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">
              2. Validação CFM Automática
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Todo conteúdo passa por checagem ética antes de você publicar.
              Zero risco de penalidades.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-200 hover:border-yellow-500 transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">
              3. Velocidade Profissional
            </h4>
            <p className="text-gray-700 leading-relaxed">
              30 segundos = conteúdo pronto.
              Vs 3-5 dias de agência.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 hover:border-purple-500 transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">
              4. Controle TOTAL
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Você decide TUDO, na hora que quiser.
              Sem depender de reuniões ou aprovações.
            </p>
          </div>

        </div>

        {/* CTA Bottom */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <p className="text-2xl md:text-3xl font-black">
              Resultado Final:
            </p>
          </div>
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
            Você tem o <span className="text-green-400">controle de uma agência completa</span><br/>
            por <span className="text-yellow-400">menos que 1 mês</span> do custo dela.
          </p>
        </div>

      </div>
    </section>
  );
}
