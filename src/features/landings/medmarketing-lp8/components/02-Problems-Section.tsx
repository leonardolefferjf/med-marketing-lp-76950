import React from 'react';
import { AlertTriangle, Clock, DollarSign, Frown, TrendingDown, Users, X, Ban } from 'lucide-react';

export default function ProblemsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <AlertTriangle className="w-4 h-4" />
            A Verdade Que Ninguém Te Conta
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Você Está Cansado de Ser{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Refém de Terceiros?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-bold mb-8">
            Você é MÉDICO. Estudou 10+ anos. Salvou centenas de vidas.
            <br/>
            Mas quando precisa de marketing...
          </p>
        </div>

        {/* Grid de Problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Problema 1: Custo Absurdo */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-red-200 hover:border-red-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Depende de Agências que Cobram R$ 5.000/mês
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  R$ 60.000 por ano para criar posts que você poderia fazer melhor
                  se tivesse as ferramentas certas.
                </p>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-sm text-red-800 font-bold">
                    💸 Em 5 anos você gasta R$ 300.000 sem ter controle real do seu marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problema 2: Tempo Perdido */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-orange-200 hover:border-orange-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Espera 3-5 Dias por UM Post Simples
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tempo que a agência leva para criar algo que deveria ser rápido.
                  Enquanto isso, oportunidades passam.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-sm text-orange-800 font-bold">
                    ⏰ Perda de timing: campanha de outubro pronta em novembro
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problema 3: Explicar o Básico */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-purple-200 hover:border-purple-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Frown className="w-7 h-7 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Precisa Explicar o BÁSICO da Sua Especialidade
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gastar horas ensinando conceitos médicos para redatores que não
                  entendem nada de medicina.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-sm text-purple-800 font-bold">
                    🤦 "Não, hipertensão NÃO é a mesma coisa que pressão alta emocional..."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problema 4: Conteúdo Genérico */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-yellow-200 hover:border-yellow-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Recebe Conteúdo Genérico e Raso
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Posts que qualquer médico poderia usar. Zero personalização.
                  Zero profundidade técnica.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="text-sm text-yellow-800 font-bold">
                    😒 O mesmo post genérico que seu concorrente postou semana passada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problema 5: Sem Controle */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-red-200 hover:border-red-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Ban className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Não Tem Controle Sobre NADA
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Quer mudar algo? Precisa agendar reunião, enviar briefing,
                  esperar aprovação... Seu marketing refém de terceiros.
                </p>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-sm text-red-800 font-bold">
                    🔒 Depende do "bom humor" da agência para qualquer ajuste
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problema 6: Competição Desleal */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 hover:border-gray-500 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-7 h-7 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  Colegas MENOS Qualificados Enchem Consultórios
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enquanto você depende de agências lentas, médicos com menos experiência
                  dominam o marketing digital e roubam seus pacientes.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-sm text-gray-800 font-bold">
                    😤 "Estudei 15 anos, mas aquele médico recém-formado tem agenda cheia..."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Consequência Final - Impacto Emocional */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10" />
            <h3 className="text-2xl md:text-4xl font-black text-center">
              O Resultado?
            </h3>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
              Você vira REFÉM do marketing de terceiros enquanto:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Paga R$ 138k/ano sem controle real do conteúdo
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Depende do "bom humor" da agência para ajustes
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Compete com médicos que DOMINAM o próprio marketing
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-bold flex items-start gap-2">
                  <X className="w-5 h-5 flex-shrink-0 mt-1" />
                  Perde autoridade digital por conteúdo genérico
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-white/30 pt-6">
            <p className="text-xl md:text-2xl font-black text-center text-yellow-300">
              Você merece ser visto como a AUTORIDADE que realmente é.
              <br/>
              Não como "mais um médico no Instagram".
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
