import React from 'react';
import { Clock, Heart, TrendingUp, AlertTriangle, CheckCircle2, Users, HeartCrack, Sparkles, ArrowRight } from 'lucide-react';

export default function ManualVsAIComparison() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-5 h-5" />
            COMPARAÇÃO REAL: MANUAL VS AI
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            A Diferença Não É Só Tempo.{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              É Qualidade de Vida.
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja lado a lado como cada processo impacta seu tempo, família, saúde mental e resultados
          </p>
        </div>

        {/* Comparação Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* COLUNA ESQUERDA: MANUAL (Vermelho) */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-2xl border-2 border-red-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-black mb-4">
                MARKETING MANUAL
              </div>
              <p className="text-red-800 font-bold">Como você provavelmente faz hoje</p>
            </div>

            {/* Processo Manual */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-black text-red-900 mb-4">📋 O PROCESSO</h4>

              {/* Etapa 1: Pesquisa */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">1. Pesquisa de Conteúdo</h5>
                  <span className="text-red-700 font-black text-lg flex-shrink-0">2h</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Buscar ideias em blogs, Instagram, artigos</li>
                  <li>• Ver o que concorrentes estão postando</li>
                  <li>• Decidir quais temas abordar esta semana</li>
                  <li>• Procurar referências científicas</li>
                </ul>
              </div>

              {/* Etapa 2: Escrita */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">2. Escrita dos Posts</h5>
                  <span className="text-red-700 font-black text-lg flex-shrink-0">3h</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Escrever 5-7 posts do zero</li>
                  <li>• Reescrever várias vezes até ficar bom</li>
                  <li>• Dúvida constante: "será que está bom?"</li>
                  <li>• Medo de violar regras do CFM</li>
                </ul>
              </div>

              {/* Etapa 3: Design */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">3. Design de Imagens</h5>
                  <span className="text-red-700 font-black text-lg flex-shrink-0">2h</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Abrir Canva ou contratar designer</li>
                  <li>• Criar layouts para cada post</li>
                  <li>• Escolher cores, fontes, imagens</li>
                  <li>• Fazer várias versões até aprovar</li>
                </ul>
              </div>

              {/* Etapa 4: Agendamento */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">4. Agendamento</h5>
                  <span className="text-red-700 font-black text-lg flex-shrink-0">1h</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Logar em Instagram, Facebook, LinkedIn</li>
                  <li>• Agendar um por um manualmente</li>
                  <li>• Definir horários, hashtags</li>
                  <li>• Conferir se agendou certo</li>
                </ul>
              </div>

              {/* Etapa 5: Ajustes */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">5. Ajustes e Revisões</h5>
                  <span className="text-red-700 font-black text-lg flex-shrink-0">1h</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Perceber erro depois de agendar</li>
                  <li>• Voltar e corrigir</li>
                  <li>• Pedir opinião de alguém</li>
                  <li>• Mudar tudo de novo</li>
                </ul>
              </div>
            </div>

            {/* Total Manual */}
            <div className="bg-red-700 rounded-xl p-6 text-white mb-6">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-bold mb-1">TEMPO TOTAL SEMANAL</p>
                <p className="text-5xl font-black mb-2">9 horas</p>
                <p className="text-red-200 text-sm">Todo fim de semana consumido</p>
              </div>
            </div>

            {/* Impacto Emocional */}
            <div className="space-y-3">
              <h4 className="text-xl font-black text-red-900 mb-4">💔 IMPACTO NA SUA VIDA</h4>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <HeartCrack className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Família Sacrificada</p>
                    <p className="text-sm text-gray-700">
                      Sábado e domingo trabalhando enquanto família fica sem você. Eventos perdidos. Culpa constante.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Exaustão Crônica</p>
                    <p className="text-sm text-gray-700">
                      Você não descansa. Segunda-feira chega e você já está esgotado. Sua energia acaba.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Tempo Perdido Para Sempre</p>
                    <p className="text-sm text-gray-700">
                      420 horas por ano = 17 dias que você NUNCA vai recuperar. Anos de vida desperdiçados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Momentos Perdidos</p>
                    <p className="text-sm text-gray-700">
                      Recitais, aniversários, conversas. Seus filhos crescem e você não está presente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: AI AUTOMATIZADO (Verde) */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-2xl border-2 border-green-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-black mb-4">
                MEDMARKETINGAI+
              </div>
              <p className="text-green-800 font-bold">Como será com automação AI</p>
            </div>

            {/* Processo AI */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-black text-green-900 mb-4">⚡ O PROCESSO</h4>

              {/* Etapa 1: Escolher assistente */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">1. Escolher Tipo de Post</h5>
                  <span className="text-green-700 font-black text-lg flex-shrink-0">1min</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Clica em "Post Educativo" ou "Caso de Sucesso"</li>
                  <li>• Escolhe entre 165 assistentes especializados</li>
                  <li>• Sistema já sabe sua especialidade e tom</li>
                  <li>• <strong>Você literalmente só clica. Só isso.</strong></li>
                </ul>
              </div>

              {/* Etapa 2: AI Gera */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">2. AI Gera Tudo</h5>
                  <span className="text-green-700 font-black text-lg flex-shrink-0">30seg</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Texto completo já escrito profissionalmente</li>
                  <li>• Imagem já criada no seu estilo</li>
                  <li>• Hashtags já sugeridas</li>
                  <li>• <strong>CFM já validado automaticamente</strong></li>
                </ul>
              </div>

              {/* Etapa 3: Revisar */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">3. Revisar (Opcional)</h5>
                  <span className="text-green-700 font-black text-lg flex-shrink-0">15min</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lê o post pronto (já está perfeito)</li>
                  <li>• Se quiser, muda uma frase ou outra</li>
                  <li>• Ou simplesmente aprova como está</li>
                  <li>• <strong>99% do trabalho já foi feito</strong></li>
                </ul>
              </div>

              {/* Etapa 4: Agendar */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">4. Agendar Semana</h5>
                  <span className="text-green-700 font-black text-lg flex-shrink-0">3min</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Clica em "Agendar Semana Toda"</li>
                  <li>• Sistema distribui posts automaticamente</li>
                  <li>• Horários otimizados por IA</li>
                  <li>• <strong>Um clique. Pronto.</strong></li>
                </ul>
              </div>

              {/* Etapa 5: Sistema trabalha sozinho */}
              <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h5 className="font-black text-gray-900">5. Sistema Trabalha 24/7</h5>
                  <span className="text-green-700 font-black text-lg flex-shrink-0">0min</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Posts publicados automaticamente</li>
                  <li>• Você não precisa fazer NADA</li>
                  <li>• Sistema continua sozinho enquanto você vive</li>
                  <li>• <strong>Fim de semana 100% livre</strong></li>
                </ul>
              </div>
            </div>

            {/* Total AI */}
            <div className="bg-green-700 rounded-xl p-6 text-white mb-6">
              <div className="text-center">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-bold mb-1">TEMPO TOTAL SEMANAL</p>
                <p className="text-5xl font-black mb-2">20 min</p>
                <p className="text-green-200 text-sm">Uma segunda-feira de manhã. Só isso.</p>
              </div>
            </div>

            {/* Impacto Positivo */}
            <div className="space-y-3">
              <h4 className="text-xl font-black text-green-900 mb-4">💚 IMPACTO NA SUA VIDA</h4>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Família Recuperada</p>
                    <p className="text-sm text-gray-700">
                      Fins de semana livres. Você está PRESENTE em recitais, jantares, conversas. Zero culpa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Energia de Volta</p>
                    <p className="text-sm text-gray-700">
                      Você descansa de verdade. Segunda-feira chega e você está revigorado, motivado, vivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">17 Dias de Vida Recuperados</p>
                    <p className="text-sm text-gray-700">
                      420 horas por ano que voltam para você. Viagens, hobbies, descanso, VIVER.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Presente em Cada Momento</p>
                    <p className="text-sm text-gray-700">
                      Seus filhos crescem COM você presente. Você cria memórias. Família sente a diferença.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Economia Visual */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-10 text-white shadow-2xl mb-12">
          <div className="text-center mb-8">
            <ArrowRight className="w-12 h-12 mx-auto mb-4 transform rotate-90 md:rotate-0" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              A Transformação Matemática
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Por Semana */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-yellow-100 font-bold mb-2">ECONOMIA POR SEMANA</p>
              <p className="text-5xl font-black mb-2">8h 40min</p>
              <p className="text-yellow-100 text-sm">Mais de um dia de trabalho</p>
            </div>

            {/* Por Mês */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-yellow-100 font-bold mb-2">ECONOMIA POR MÊS</p>
              <p className="text-5xl font-black mb-2">35 horas</p>
              <p className="text-yellow-100 text-sm">Quase 1 semana completa</p>
            </div>

            {/* Por Ano */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-yellow-100 font-bold mb-2">ECONOMIA POR ANO</p>
              <p className="text-5xl font-black mb-2">420h</p>
              <p className="text-yellow-100 text-sm">17 dias (24h) de vida</p>
            </div>
          </div>

          <div className="mt-8 bg-white/20 rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-2xl font-black mb-2">
              Em 10 anos: 170 DIAS recuperados
            </p>
            <p className="text-yellow-100 text-lg">
              Quase 6 meses da sua vida que você ganha de volta. Use para o que realmente importa.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              A Escolha É Sua
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuar sacrificando fins de semana e família por marketing manual?
              Ou recuperar 17 dias de vida por ano?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Opção A */}
            <div className="bg-red-900/30 rounded-xl p-6 border-2 border-red-500 text-center">
              <p className="text-red-400 font-bold mb-3">OPÇÃO A</p>
              <p className="text-xl font-black mb-2">Continuar Manual</p>
              <p className="text-gray-300 text-sm mb-4">9h/semana, fins de semana perdidos, culpa, exaustão</p>
              <div className="bg-red-700 rounded-lg py-3 px-4">
                <p className="font-black">420 horas/ano PERDIDAS</p>
              </div>
            </div>

            {/* Opção B */}
            <div className="bg-green-900/30 rounded-xl p-6 border-2 border-green-500 text-center">
              <p className="text-green-400 font-bold mb-3">OPÇÃO B</p>
              <p className="text-xl font-black mb-2">AI Automatizado</p>
              <p className="text-gray-300 text-sm mb-4">20min/semana, fins de semana livres, presença, paz</p>
              <div className="bg-green-600 rounded-lg py-3 px-4">
                <p className="font-black">420 horas/ano RECUPERADAS</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-black text-yellow-400">
              Mesma qualidade. Melhores resultados. 99% menos trabalho.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
