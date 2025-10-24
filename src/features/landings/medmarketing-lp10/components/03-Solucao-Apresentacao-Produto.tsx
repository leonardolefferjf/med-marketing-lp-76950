import React from 'react';
import { Sparkles, Clock, Zap, CheckCircle2, Users, Bot, Calendar, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function SolucaoApresentacaoProduto() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">

        {/* Headline Principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-5 h-5" />
            A SOLUÇÃO QUE RECUPERA SUA VIDA
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            MedMarketingAI+{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Seu Time de Marketing Trabalhando 24/7
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            <strong>165 assistentes especializados + 12 módulos automáticos</strong> trabalhando enquanto você vive sua vida
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg font-bold text-gray-800">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-600" />
              <span>10 minutos de setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-green-600" />
              <span>30 segundos por post</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-600" />
              <span>20 min/semana total</span>
            </div>
          </div>
        </div>

        {/* Conceito Visual do Sistema */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="text-center mb-10">
            <Bot className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Como Funciona o Sistema Automático
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Você configura UMA VEZ e o sistema trabalha sozinho para sempre
            </p>
          </div>

          {/* Timeline de Automação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Etapa 1: Setup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-green-500">
              <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              <h4 className="text-xl font-black text-white text-center mb-3">
                Setup Inicial
              </h4>
              <p className="text-gray-300 text-center mb-4">
                10 minutos configurando sua especialidade, tom de voz e preferências
              </p>
              <div className="bg-green-500/20 rounded-lg p-3 text-center">
                <p className="text-green-300 font-bold text-sm">
                  ⏱️ Faz UMA VEZ e nunca mais
                </p>
              </div>
            </div>

            {/* Etapa 2: Geração Automática */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-500">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              <h4 className="text-xl font-black text-white text-center mb-3">
                AI Gera Tudo 24/7
              </h4>
              <p className="text-gray-300 text-center mb-4">
                Sistema cria posts, imagens, legendas, hashtags automaticamente enquanto você dorme
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                <p className="text-blue-300 font-bold text-sm">
                  🤖 Trabalha sozinho, sem você
                </p>
              </div>
            </div>

            {/* Etapa 3: Você Só Aprova */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-500">
              <div className="bg-yellow-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <h4 className="text-xl font-black text-white text-center mb-3">
                Você Só Revisa
              </h4>
              <p className="text-gray-300 text-center mb-4">
                20 minutos por semana revisando e agendando. Sistema fez 99% do trabalho.
              </p>
              <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                <p className="text-yellow-300 font-bold text-sm">
                  ✓ 20 min/semana. Só isso.
                </p>
              </div>
            </div>
          </div>

          {/* Comparação de Tempo */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left flex-1">
                <p className="text-green-100 text-sm font-bold mb-1">ANTES (Manual)</p>
                <p className="text-4xl font-black">9 horas/semana</p>
                <p className="text-green-100 text-sm mt-1">Você fazendo TUDO</p>
              </div>

              <div className="flex-shrink-0">
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
              </div>

              <div className="text-center md:text-right flex-1">
                <p className="text-green-100 text-sm font-bold mb-1">DEPOIS (AI)</p>
                <p className="text-4xl font-black">20 minutos/semana</p>
                <p className="text-green-100 text-sm mt-1">Sistema faz tudo, você só aprova</p>
              </div>
            </div>

            <div className="mt-4 bg-white/20 rounded-lg p-4 text-center">
              <p className="text-xl font-black">
                Economia: 8h40min por semana = 420 horas por ano = 17 DIAS DE VIDA
              </p>
            </div>
          </div>
        </div>

        {/* O Que Está Incluso */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              O Que Você Recebe No Sistema
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Um time completo de marketing médico trabalhando 24/7 por você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 165 Assistentes */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    165 Assistentes Especializados
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Cada um treinado para uma tarefa específica: posts educativos, casos de sucesso,
                    engajamento, stories, reels, carrosséis...
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-bold text-blue-900">
                      💡 São como 165 funcionários especializados que nunca tiram férias, nunca pedem aumento,
                      e trabalham 24/7 sem reclamar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 12 Módulos */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    12 Módulos de Automação
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Geração de conteúdo, banco de imagens médicas, agendador inteligente,
                    análise de performance, sugestões de melhoria...
                  </p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-bold text-green-900">
                      ⚙️ Cada módulo trabalha em segundo plano enquanto você atende pacientes,
                      descansa ou passa tempo com família.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geração em 30 segundos */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-purple-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    Geração em 30 Segundos
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Escolhe o tipo de post que quer → clica em "Gerar" → 30 segundos depois
                    tem post completo com texto, imagem e hashtags
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm font-bold text-purple-900">
                      ⚡ O que levaria 3 horas manualmente, a AI faz em meio minuto.
                      E com qualidade profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validação CFM */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-yellow-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-100 rounded-lg p-3 flex-shrink-0">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    Validação CFM Automática
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Todo conteúdo gerado já passa por 3 camadas de validação contra resolução CFM 2.336/2023.
                    Você só publica o que está 100% seguro.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <p className="text-sm font-bold text-yellow-900">
                      🛡️ Zero risco de processo CFM. Zero preocupação jurídica.
                      Sistema protege você automaticamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios Transformadores */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-10">
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              O Que Isso Significa Na Prática
            </h3>
            <p className="text-xl text-green-100">
              Como sua vida muda quando você para de fazer marketing manual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefício 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">Fins de Semana São Seus de Novo</h4>
                  <p className="text-green-100">
                    Sábado e domingo sem pensar em marketing. Presença 100% com família.
                    Zero culpa, zero trabalho pendente.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">Marketing Continua Mesmo de Férias</h4>
                  <p className="text-green-100">
                    Sistema trabalha 24/7 sozinho. Você pode viajar 2 semanas que conteúdo
                    continua sendo postado automaticamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">Segunda-feira Leve e Rápida</h4>
                  <p className="text-green-100">
                    20 minutos de manhã revisando posts que AI já criou. Aprova, agenda e pronto.
                    Semana inteira resolvida.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">Energia e Saúde Mental de Volta</h4>
                  <p className="text-green-100">
                    Sem exaustão de criar conteúdo manualmente. Sem culpa de não estar presente.
                    Você volta a ter vida pessoal.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">Consultório Continua Crescendo</h4>
                  <p className="text-green-100">
                    Conteúdo profissional sendo postado toda semana = você continua atraindo
                    pacientes mesmo trabalhando 20 min/semana.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefício 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-2">420 Horas/Ano Recuperadas</h4>
                  <p className="text-green-100">
                    17 dias completos de vida que você ganha de volta. Use para o que realmente importa:
                    família, saúde, hobbies, descanso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/20 rounded-xl p-6 text-center">
            <p className="text-2xl md:text-3xl font-black mb-2">
              Seu Marketing Trabalhando 24/7. Você Vivendo Sua Vida.
            </p>
            <p className="text-green-100 text-lg">
              É assim que deveria ser desde o começo. Agora finalmente é possível.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
