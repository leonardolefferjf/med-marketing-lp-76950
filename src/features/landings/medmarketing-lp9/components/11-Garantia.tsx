import React from 'react';
import { Shield, CheckCircle2, TrendingUp, Award, RefreshCw, DollarSign, ShieldCheck, Clock } from 'lucide-react';

export default function GarantiaSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <Shield className="w-4 h-4" />
            GARANTIA DUPLA DE SEGURANÇA
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

          {/* Garantia 1: Zero Processos */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-green-500">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Garantia #1
              </h3>
              <p className="text-lg font-bold text-green-600">
                Zero Processos CFM
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">📊 HISTÓRICO COMPROVADO</p>
                <p className="text-sm text-green-800">
                  Desde 2022, <strong>nenhum usuário do MedMarketingAI+</strong> sofreu processo ético do CFM
                  por conteúdo gerado e validado pela plataforma.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">✓ POR QUÊ FUNCIONA</p>
                <p className="text-sm text-green-800">
                  Sistema de validação foi desenvolvido por médicos + advogados especializados em direito médico.
                  Cruza 3 camadas de análise contra CFM 2.336/2023.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <p className="font-black text-green-900 mb-2">🛡️ PROTEÇÃO CONTÍNUA</p>
                <p className="text-sm text-green-800">
                  Sistema atualiza automaticamente quando CFM publica novas resoluções ou pareceres técnicos.
                  Você sempre está protegido.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-green-600 text-white rounded-xl p-4 text-center">
              <p className="text-3xl md:text-4xl font-black mb-2">0</p>
              <p className="text-sm font-bold">Processos CFM desde 2022</p>
            </div>
          </div>

          {/* Garantia 2: Cobertura de Multa */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-yellow-500 relative">
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black rotate-12 shadow-xl">
              NUNCA ACIONADA
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Garantia #2
              </h3>
              <p className="text-lg font-bold text-yellow-600">
                Cobertura de Multa até R$ 50 mil
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">💰 COMO FUNCIONA</p>
                <p className="text-sm text-yellow-900">
                  Se você postar conteúdo que recebeu o selo "✓ Aprovado CFM" do sistema e,
                  ainda assim, sofrer multa do CFM, <strong>nós pagamos a multa por você até R$ 50 mil</strong>.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">📋 CONDIÇÕES SIMPLES</p>
                <p className="text-sm text-yellow-900 mb-2">Para acionar a cobertura:</p>
                <ul className="text-xs text-yellow-800 space-y-1">
                  <li>• Post deve ter recebido selo "✓ Aprovado CFM"</li>
                  <li>• Certificado digital de validação disponível</li>
                  <li>• Multa deve ser especificamente sobre o conteúdo validado</li>
                  <li>• Processo deve ter transitado em julgado</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                <p className="font-black text-yellow-900 mb-2">🎯 POR QUE OFERECEMOS ISSO</p>
                <p className="text-sm text-yellow-900">
                  Porque <strong>confiamos 100%</strong> no nosso sistema. Em 3 anos, esta garantia
                  nunca foi acionada. E não será com você também.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500 text-white rounded-xl p-4 text-center">
              <p className="text-3xl md:text-4xl font-black mb-2">R$ 50.000</p>
              <p className="text-sm font-bold">De cobertura por usuário</p>
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
                Se em <strong>30 dias</strong> você testar o sistema, usar a validação CFM,
                gerar conteúdo com os 165 assistentes e, ainda assim, sentir que não vale a pena,
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
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Sistema Testado e Comprovado</p>
                <p className="text-sm text-gray-600">
                  3 anos no mercado, centenas de médicos usando, zero processos. Os dados falam por si.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Desenvolvido por Especialistas</p>
                <p className="text-sm text-gray-600">
                  Médicos + advogados especializados em direito médico criaram o algoritmo de validação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-black text-gray-900 mb-2">Atualização Contínua</p>
                <p className="text-sm text-gray-600">
                  Sistema monitora novas resoluções do CFM e se atualiza automaticamente.
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
                  Se não funcionasse, não teríamos coragem de oferecer cobertura de R$ 50k por multa.
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
                  <strong>Zero processos CFM</strong> em 3 anos de histórico comprovado
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Se houver multa (nunca houve), <strong>pagamos até R$ 50k por você</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>30 dias</strong> para testar sem compromisso, dinheiro de volta total
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white/20 rounded-xl p-4">
              <p className="text-xl font-black">
                O risco é todo nosso. A tranquilidade é toda sua.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
