import React from 'react';
import { Shield, CheckCircle2, Clock, RefreshCw, TrendingUp, Award, DollarSign } from 'lucide-react';

export default function GarantiaSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <Shield className="w-4 h-4" />
            GARANTIA DUPLA: TEMPO + SATISFAÇÃO
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Você Está 100% Protegido.{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              De Duas Formas.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Não pedimos que você "confie". Oferecemos <strong>garantias concretas e mensuráveis</strong>.
          </p>
        </div>

        {/* As 2 Garantias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Garantia 1: Economia de Tempo */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-green-500">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Garantia #1
              </h3>
              <p className="text-lg font-bold text-green-600">
                Economia de Tempo ou Dinheiro de Volta
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">⏱️ PROMESSA MENSURÁVEL</p>
                <p className="text-sm text-green-800">
                  Se você <strong>não economizar pelo menos 8 horas por semana</strong> usando o MedMarketingAI+
                  comparado ao marketing manual, devolvemos <strong>100% do seu dinheiro</strong>.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">📊 COMO MEDIMOS</p>
                <p className="text-sm text-green-800 mb-2">
                  Rastreamos quanto tempo você gasta no sistema semanalmente:
                </p>
                <ul className="text-xs text-green-800 space-y-1">
                  <li>• Tempo de setup inicial (deve ser ≤ 15 minutos)</li>
                  <li>• Tempo semanal revisando posts (deve ser ≤ 20 minutos)</li>
                  <li>• Tempo total mensal (deve ser ≤ 90 minutos)</li>
                </ul>
                <p className="text-xs text-green-800 mt-2">
                  Se passar disso e você não estiver economizando 8h/semana, você aciona a garantia.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">✓ POR QUÊ OFERECEMOS</p>
                <p className="text-sm text-green-800">
                  Porque <strong>sabemos que funciona</strong>. Nossos usuários reportam economia média
                  de <strong>8h40min por semana</strong>. Você vai economizar também.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-green-600 text-white rounded-xl p-4 text-center">
              <p className="text-3xl md:text-4xl font-black mb-2">8+ horas</p>
              <p className="text-sm font-bold">Economizadas por semana ou seu dinheiro de volta</p>
            </div>
          </div>

          {/* Garantia 2: 420 Horas ou Reembolso */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-yellow-500 relative">
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-xs font-black rotate-12 shadow-xl">
              EXCLUSIVA LP10
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Garantia #2
              </h3>
              <p className="text-lg font-bold text-yellow-600">
                420 Horas Por Ano ou Reembolso Total
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">🎯 COMPROMISSO ANUAL</p>
                <p className="text-sm text-yellow-900">
                  Se em <strong>12 meses de uso</strong> você não recuperar pelo menos
                  <strong> 420 horas de vida</strong> (equivalente a 17 dias completos),
                  devolvemos 100% do investimento anual.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">📈 A MATEMÁTICA</p>
                <p className="text-sm text-yellow-900 mb-2">
                  Para acionar esta garantia, você precisaria estar gastando mais de:
                </p>
                <ul className="text-xs text-yellow-800 space-y-1">
                  <li>• <strong>32 minutos por semana</strong> no sistema (vs 20min prometido)</li>
                  <li>• <strong>2h15min por mês</strong> (vs 90min prometido)</li>
                  <li>• <strong>27 horas por ano</strong> (vs 17h prometido)</li>
                </ul>
                <p className="text-xs text-yellow-800 mt-2">
                  Se isso acontecer, você não economizou 420h. Reembolso total.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">💡 COMO COMPROVAR</p>
                <p className="text-sm text-yellow-900">
                  Sistema registra automaticamente seu tempo de uso. Dashboard mostra
                  economia semanal/mensal/anual em tempo real. Prova transparente e rastreável.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500 text-white rounded-xl p-4 text-center">
              <p className="text-3xl md:text-4xl font-black mb-2">420 horas</p>
              <p className="text-sm font-bold">Recuperadas por ano ou 100% do dinheiro de volta</p>
            </div>
          </div>

        </div>

        {/* Garantia Tradicional de Satisfação */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl mb-12">
          <div className="text-center mb-8">
            <RefreshCw className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              + Garantia Tradicional de 30 Dias
            </h3>
            <p className="text-gray-300 text-lg">
              (Essa é óbvia, mas vamos deixar explícito mesmo assim)
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
              <p className="text-lg leading-relaxed">
                Se em <strong>30 dias</strong> você testar o sistema, usar a automação,
                revisar os posts gerados pela IA e, ainda assim, sentir que não vale a pena,
                <strong className="text-yellow-400"> devolvemos 100% do seu dinheiro</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm">Sem perguntas difíceis</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm">Sem burocracia</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm">Dinheiro de volta total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Por que podemos oferecer isso */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
            Por Que Podemos Oferecer Essas Garantias Ousadas?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Dados Reais Comprovados</p>
                <p className="text-sm text-gray-600">
                  Rastreamos tempo de uso de cada usuário. Média real: <strong>18 minutos/semana</strong>.
                  Ou seja, você vai economizar MAIS que prometemos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Sistema Validado por Centenas</p>
                <p className="text-sm text-gray-600">
                  Centenas de médicos já usam diariamente. Feedback consistente:
                  "Recuperei meus fins de semana" e "Voltei a ter vida pessoal".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Taxa de Reembolso Mínima</p>
                <p className="text-sm text-gray-600">
                  Menos de 3% pedem reembolso. E desses, nenhum foi por "não economizar tempo".
                  Foi por não precisar mais de marketing (consultório lotou).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Confiança Total no Produto</p>
                <p className="text-sm text-gray-600">
                  Se o sistema não economizasse tempo de verdade, não teríamos coragem
                  de oferecer garantia de 420h/ano ou dinheiro de volta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resumo Final */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white inline-block max-w-3xl">
            <h4 className="text-2xl md:text-3xl font-black mb-4">
              Resumindo: Você Não Corre Risco Nenhum
            </h4>
            <div className="text-left space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>8+ horas economizadas por semana</strong> ou reembolso total
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>420 horas recuperadas por ano</strong> ou dinheiro de volta (garantia anual)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>30 dias</strong> para testar sem compromisso, reembolso total sem perguntas
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white/20 rounded-xl p-4">
              <p className="text-xl font-black">
                O risco é todo nosso. Sua vida de volta é garantida.
              </p>
            </div>
          </div>
        </div>

        {/* Nota sobre valor do tempo */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <DollarSign className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-black text-blue-900 mb-2">Pense no Valor Real do Seu Tempo</p>
              <p className="text-sm text-blue-800">
                Se você cobra R$ 500 por consulta (1 hora), sua hora vale R$ 500. Economizando
                <strong> 420 horas por ano</strong>, você recupera o equivalente a <strong>R$ 210.000
                em valor de tempo</strong>. Ou simplesmente 17 dias de vida com sua família. Não tem preço.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
