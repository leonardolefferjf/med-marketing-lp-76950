import React from 'react';
import { Clock, CheckCircle2, Calendar, Zap, Coffee, Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

export default function AutomationDemo() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <PlayCircle className="w-5 h-5" />
            DEMONSTRAÇÃO DO SISTEMA AUTOMATIZADO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Como Funciona{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Na Prática
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja exatamente como você vai trabalhar <strong>20 minutos por semana</strong> e ter
            marketing profissional rodando 24/7
          </p>
        </div>

        {/* Setup Inicial: 10 minutos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              SETUP INICIAL (FAZ UMA VEZ)
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              10 Minutos para Configurar o Sistema
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Você faz isso APENAS UMA VEZ e nunca mais precisa mexer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Passo 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-black text-green-700">1</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 text-center mb-3">
                Sua Especialidade
              </h4>
              <p className="text-sm text-gray-700 text-center mb-3">
                Informa qual sua área (Pediatria, Ortopedia, Dermatologia...)
              </p>
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <p className="text-xs font-bold text-green-800">⏱️ 2 minutos</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-black text-green-700">2</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 text-center mb-3">
                Tom de Voz
              </h4>
              <p className="text-sm text-gray-700 text-center mb-3">
                Escolhe se prefere tom formal, informal, educativo, acolhedor...
              </p>
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <p className="text-xs font-bold text-green-800">⏱️ 2 minutos</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-black text-green-700">3</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 text-center mb-3">
                Temas Preferidos
              </h4>
              <p className="text-sm text-gray-700 text-center mb-3">
                Marca quais assuntos quer abordar (prevenção, tratamentos, mitos...)
              </p>
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <p className="text-xs font-bold text-green-800">⏱️ 3 minutos</p>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-black text-green-700">4</span>
              </div>
              <h4 className="text-lg font-black text-gray-900 text-center mb-3">
                Frequência
              </h4>
              <p className="text-sm text-gray-700 text-center mb-3">
                Define quantos posts quer por semana (3x, 5x, 7x...)
              </p>
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <p className="text-xs font-bold text-green-800">⏱️ 3 minutos</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white text-center shadow-xl">
            <p className="text-2xl font-black mb-2">
              <Clock className="w-6 h-6 inline mr-2" />
              Total: 10 minutos
            </p>
            <p className="text-green-100">
              Depois disso, o sistema trabalha sozinho. Você nunca mais precisa configurar nada.
            </p>
          </div>
        </div>

        {/* Rotina Semanal: 20 minutos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ROTINA SEMANAL (TODA SEGUNDA-FEIRA)
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              20 Minutos Por Semana. É Só Isso.
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Sistema já fez 99% do trabalho. Você só revisa e aprova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Etapa 1: Revisar */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Revisar Posts Prontos
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Sistema já gerou 5-7 posts completos durante o fim de semana enquanto você descansava.
                Você abre e revisa.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Textos já escritos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Imagens já criadas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Hashtags já sugeridas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>CFM já validado</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-blue-900">⏱️ 5 minutos</p>
              </div>
            </div>

            {/* Etapa 2: Ajustar */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
              <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Personalizar (Opcional)
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Se quiser mudar alguma frase, trocar imagem ou adicionar toque pessoal, faz em segundos.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Editar texto (se quiser)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Trocar imagem (se quiser)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Adicionar emoji (se quiser)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Ou aprovar como está ✓</span>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-purple-900">⏱️ 10 minutos</p>
              </div>
            </div>

            {/* Etapa 3: Agendar */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="bg-yellow-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Agendar Semana Toda
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Clica em "Agendar Semana" e sistema distribui posts automaticamente nos melhores horários.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span>Segunda: 19h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span>Quarta: 12h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span>Sexta: 20h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span>E assim por diante...</span>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-yellow-900">⏱️ 5 minutos</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center shadow-xl">
            <p className="text-2xl font-black mb-2">
              <Clock className="w-6 h-6 inline mr-2" />
              Total: 20 minutos (toda segunda de manhã)
            </p>
            <p className="text-blue-100">
              Resto da semana: sistema publica automaticamente. Você nem precisa pensar nisso.
            </p>
          </div>
        </div>

        {/* Timeline Visual da Semana */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Sua Semana Com MedMarketingAI+
            </h3>
            <p className="text-lg text-gray-700">
              Veja como sua rotina muda completamente
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
            <div className="space-y-4">
              {/* Segunda-feira */}
              <div className="bg-green-600/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-sm font-bold text-green-400 mb-1">SEGUNDA-FEIRA, 9h</p>
                    <p className="text-lg font-black mb-2">20 Minutos de Marketing</p>
                    <p className="text-gray-300 text-sm">
                      Toma café, abre o sistema, revisa 5 posts que AI criou, ajusta se quiser, agenda e pronto.
                      Semana inteira resolvida.
                    </p>
                  </div>
                  <div className="bg-green-600 rounded-lg px-4 py-2 text-center flex-shrink-0">
                    <p className="text-2xl font-black">20min</p>
                    <p className="text-xs text-green-200">Total semanal</p>
                  </div>
                </div>
              </div>

              {/* Segunda-feira - Post automático */}
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-blue-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-blue-400 mb-1">SEGUNDA-FEIRA, 19h</p>
                    <p className="text-lg font-black mb-2">Sistema Publica Post #1</p>
                    <p className="text-gray-300 text-sm">
                      Você está jantando com família. Sistema publica automaticamente no horário programado.
                    </p>
                  </div>
                  <Coffee className="w-8 h-8 text-blue-400 flex-shrink-0" />
                </div>
              </div>

              {/* Quarta-feira */}
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-blue-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-blue-400 mb-1">QUARTA-FEIRA, 12h</p>
                    <p className="text-lg font-black mb-2">Sistema Publica Post #2</p>
                    <p className="text-gray-300 text-sm">
                      Você está atendendo pacientes. Sistema publica sozinho. Zero interrupção no seu dia.
                    </p>
                  </div>
                  <Zap className="w-8 h-8 text-blue-400 flex-shrink-0" />
                </div>
              </div>

              {/* Sexta-feira */}
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-blue-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-blue-400 mb-1">SEXTA-FEIRA, 20h</p>
                    <p className="text-lg font-black mb-2">Sistema Publica Post #3</p>
                    <p className="text-gray-300 text-sm">
                      Você está assistindo filme com família. Marketing continua trabalhando.
                    </p>
                  </div>
                  <Sparkles className="w-8 h-8 text-blue-400 flex-shrink-0" />
                </div>
              </div>

              {/* Fim de semana */}
              <div className="bg-yellow-600/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-yellow-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-yellow-400 mb-1">SÁBADO & DOMINGO</p>
                    <p className="text-lg font-black mb-2">Você Descansa. Sistema Trabalha.</p>
                    <p className="text-gray-300 text-sm">
                      Enquanto você está com família, viajando ou descansando, sistema está gerando
                      conteúdo para próxima semana. Você não faz NADA.
                    </p>
                  </div>
                  <Coffee className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação Visual Final */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-black text-center mb-8">
            Comparação Lado a Lado
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ANTES */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ANTES (Manual)
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Sábado inteiro pesquisando e escrevendo (4h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Domingo criando imagens e agendando (5h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Zero tempo com família</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Culpa, estresse, exaustão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>420 horas por ano perdidas</span>
                </li>
              </ul>
            </div>

            {/* DEPOIS */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  DEPOIS (AI)
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                  <span>Segunda-feira, 20 minutos revisando posts prontos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                  <span>Fim de semana 100% livre e presente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                  <span>Família, hobbies, descanso recuperados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                  <span>Paz, energia, presença</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                  <span>420 horas por ano recuperadas = 17 dias de vida</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white/20 rounded-xl p-6 text-center">
            <ArrowRight className="w-8 h-8 mx-auto mb-3" />
            <p className="text-2xl font-black">
              Mesma Qualidade de Marketing. 99% Menos Trabalho.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
