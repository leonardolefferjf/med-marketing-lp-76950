import React from 'react';
import { Clock, DollarSign, AlertTriangle, TrendingDown, XCircle } from 'lucide-react';

export default function ProblemsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase">
            <AlertTriangle className="w-5 h-5" />
            O PROBLEMA (se você é médico, vai se identificar)
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Por Que Sua Agenda Está{' '}
            <span className="text-red-500">40-60% Vazia</span>{' '}
            Enquanto Outros Médicos Lotam Suas Consultas?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A verdade dolorosa: enquanto você se preocupa com esses{' '}
            <strong className="text-yellow-400">3 problemas</strong>, seus concorrentes automatizam e ganham os pacientes que deveriam ser seus.
          </p>
        </div>

        {/* Problema 1 - Falta de Tempo */}
        <div className="bg-gray-800 border-2 border-red-500 rounded-2xl p-8 mb-6 hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <XCircle className="w-4 h-4" />
                DOR 1: FALTA DE TEMPO
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-3">
                15-20 Horas Por Mês Criando Conteúdo Manualmente
              </h3>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Você acorda cedo para atender. Faz plantões. Estuda para se manter atualizado. Cuida da família. 
            <strong className="text-white"> Quando sobra tempo para criar posts, stories, reels, campanhas e estratégias de marketing?</strong>
          </p>

          <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-4">
            <p className="text-sm md:text-base text-gray-200">
              <strong className="text-red-400">No final do mês:</strong> Seu Instagram continua parado com 3-4 posts genéricos. 
              Seu alcance é zero. Sua agenda segue vazia.
            </p>
          </div>

          <div className="bg-black rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start gap-2">
              <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400">Consequência:</strong>{' '}
                <span className="text-white">Seus concorrentes com marketing ativo ganham os pacientes que deveriam marcar consulta com VOCÊ.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problema 2 - Custos Absurdos */}
        <div className="bg-gray-800 border-2 border-red-500 rounded-2xl p-8 mb-6 hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <XCircle className="w-4 h-4" />
                DOR 2: CUSTOS ABSURDOS
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-3">
                R$ 10.000-20.000/mês Para Ter Marketing Profissional
              </h3>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Você sabe que precisa investir em marketing. Mas a realidade é brutal:
          </p>

          <div className="space-y-3 mb-4">
            {[
              { item: 'Agência de marketing', valor: 'R$ 3.000 a R$ 15.000/mês' },
              { item: 'Social media dedicado', valor: 'R$ 2.500/mês' },
              { item: 'Designer freelancer', valor: 'R$ 1.500/mês' },
              { item: 'Tráfego pago (Meta Ads)', valor: 'R$ 5.000+/mês' },
              { item: 'Copywriter médico', valor: 'R$ 800/texto' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                <span className="text-gray-300">• {item.item}:</span>
                <span className="text-red-400 font-bold">{item.valor}</span>
              </div>
            ))}
          </div>

          <div className="bg-red-900 border-2 border-red-500 rounded-lg p-4 mb-4">
            <div className="text-2xl md:text-3xl font-black text-white mb-2">
              TOTAL: R$ 12.800 a R$ 24.800 por mês!
            </div>
            <p className="text-sm text-gray-200">
              Para quem está começando ou tem consultório pequeno/médio, é <strong className="text-red-400">financeiramente inviável</strong>.
            </p>
          </div>

          <div className="bg-black rounded-lg p-4 border-l-4 border-red-500">
            <div className="flex items-start gap-2">
              <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400">Resultado:</strong>{' '}
                <span className="text-white">Você continua sem marketing profissional, perdendo pacientes todos os dias.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problema 3 - Medo do CFM */}
        <div className="bg-gray-800 border-2 border-red-500 rounded-2xl p-8 mb-8 hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <XCircle className="w-4 h-4" />
                DOR 3: MEDO DO CFM
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-red-400 mb-3">
                Uma Palavra Errada = Processo Ético + Multa de R$ 50.000
              </h3>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            O CFM é rigoroso. A resolução <strong className="text-yellow-400">2.336/2023</strong> proíbe:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              'Promessas de resultado',
              'Sensacionalismo',
              'Antes e depois (algumas especialidades)',
              'Divulgação de preços (alguns casos)',
              'Autopromoção excessiva'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-red-900/30 rounded-lg p-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-4 mb-4">
            <p className="text-sm md:text-base text-gray-200">
              <strong className="text-yellow-400">O problema:</strong> Como garantir que cada post, legenda, story e campanha 
              esteja <strong>100% dentro das normas éticas</strong>?
            </p>
          </div>

          <div className="bg-black rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-white">
              Uma denúncia no CRM pode custar sua <strong className="text-red-400">reputação, dinheiro e anos de estresse</strong>.
              Você tem medo de postar porque não sabe se está infringindo alguma regra.
            </p>
          </div>
        </div>

        {/* Resultado Final - Box Destacado */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 border-4 border-red-500 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingDown className="w-12 h-12 text-red-300" />
            <h3 className="text-2xl md:text-4xl font-black text-white">
              RESULTADO FINAL
            </h3>
          </div>

          <div className="text-xl md:text-3xl font-bold text-red-200 mb-6 leading-tight">
            Perfil morto • Alcance zero • Agenda vazia • Pacientes indo para concorrentes
          </div>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto">
            Enquanto você trabalha dobrado para pagar as contas, outros médicos com{' '}
            <strong className="text-yellow-400">marketing automatizado e ético</strong> enchem suas agendas 
            com pacientes qualificados vindos do digital.
          </p>

          <div className="bg-yellow-400 text-black rounded-xl p-6 inline-block">
            <p className="text-lg md:text-xl font-black">
              A pergunta é: Até quando você vai aceitar essa situação?
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
