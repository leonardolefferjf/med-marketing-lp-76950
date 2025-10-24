import React from 'react';
import { 
  X, Check, TrendingDown, TrendingUp, Clock, DollarSign, 
  BarChart3, Users, Target, Shield, AlertTriangle, Zap 
} from 'lucide-react';

export default function BeforeAfterSection() {
  const comparison = [
    {
      aspect: 'Tempo em marketing',
      before: '15-20h/mês',
      after: '2-3h/mês',
      icon: Clock
    },
    {
      aspect: 'Custo mensal',
      before: 'R$ 3.000-15.000',
      after: 'R$ 0 (pago 1x)',
      icon: DollarSign
    },
    {
      aspect: 'Posts/mês',
      before: '3-4 (inconsistente)',
      after: '20-30 (profissionais)',
      icon: BarChart3
    },
    {
      aspect: 'Alcance médio',
      before: '200-500 contas',
      after: '2.000-5.000 contas',
      icon: Users
    },
    {
      aspect: 'Engajamento',
      before: '2-3%',
      after: '8-12%',
      icon: TrendingUp
    },
    {
      aspect: 'Consultas do digital',
      before: '1-2/mês',
      after: '10-20/mês',
      icon: Target
    },
    {
      aspect: 'Compliance CFM',
      before: 'Risco constante',
      after: '100% validado',
      icon: Shield,
      beforeIcon: AlertTriangle
    },
    {
      aspect: 'Estresse',
      before: 'Alto (medo de errar)',
      after: 'Zero (IA valida tudo)',
      icon: Zap
    }
  ];

  const cases = [
    {
      name: 'Dra. Ana Paula',
      specialty: 'Dermatologista, SP',
      period: '90 dias',
      before: [
        'Agenda 55% vazia',
        'Gastava R$ 5.000/mês com social media freelancer',
        '1-2 posts/semana (genéricos)',
        '3 consultas/mês vindas do Instagram',
        'Medo de postar antes/depois (CFM)'
      ],
      after: [
        'Agenda 95% lotada',
        'Economizou R$ 13.500 em 3 meses',
        '4-5 posts/semana (profissionais)',
        '18 consultas/mês vindas do Instagram',
        'Posts 100% compliance (validados por IA)'
      ],
      testimonial: '"Em 3 meses, minha receita aumentou R$ 27.000 só com pacientes que me acharam no Instagram. O investimento se pagou em 5 dias. Agora preciso contratar outro dermatologista para ajudar!"',
      highlight: 'R$ 27.000'
    },
    {
      name: 'Dr. Ricardo',
      specialty: 'Ortopedista, RJ',
      period: '60 dias',
      before: [
        'Perfil parado há 6 meses',
        'Tentou usar ChatGPT mas não sabia criar prompts',
        'Alcance: 150 contas/post',
        'Concorrentes crescendo mais rápido'
      ],
      after: [
        '25 posts + 40 stories publicados',
        'Reels batendo 15.000-30.000 visualizações',
        'Alcance: 3.200 contas/post',
        '12 novas consultas/mês do Instagram'
      ],
      testimonial: '"Nunca imaginei que IA poderia gerar conteúdo TÃO específico para ortopedia. Os posts parecem que eu mesmo escrevi. Meus pacientes comentam que me seguem porque aprendem muito."',
      highlight: '15-30k views'
    },
    {
      name: 'Dra. Juliana',
      specialty: 'Ginecologista, MG',
      period: '120 dias',
      before: [
        'Sem tempo para marketing (mãe de 2 filhos)',
        'Consultório novo (8 meses aberto)',
        'Agenda 40% preenchida',
        'Dependia 100% de indicações'
      ],
      after: [
        'Gera 1 mês de conteúdo em 2 horas',
        'Perfil cresceu de 450 para 2.800 seguidores',
        'Agenda 90% lotada',
        '40% dos pacientes vêm do digital'
      ],
      testimonial: '"Como mãe e médica, meu tempo é o bem mais precioso. MedMarketingAI+ me devolveu 15 horas/mês que agora uso com meus filhos. E minha agenda nunca esteve tão cheia!"',
      highlight: '450 → 2.800'
    }
  ];

  const results = [
    { icon: TrendingUp, label: 'Crescimento de seguidores', value: '+250%' },
    { icon: BarChart3, label: 'Alcance orgânico', value: '+400%' },
    { icon: Users, label: 'Engajamento', value: '+300%' },
    { icon: Target, label: 'Consultas do digital', value: '5-10x' },
    { icon: Clock, label: 'Horas economizadas/mês', value: '15-18h' },
    { icon: DollarSign, label: 'Economia em marketing/mês', value: 'R$ 3-15k' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase">
            <TrendingUp className="w-5 h-5" />
            ANTES E DEPOIS - TRANSFORMAÇÃO
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Antes e Depois: O Que Muda na Prática Médica{' '}
            <span className="text-yellow-400">Com MedMarketingAI+</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Veja a transformação real de médicos que automatizaram seu marketing com IA
          </p>
        </div>

        {/* Tabela Comparativa */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 mb-16 shadow-2xl border-2 border-gray-700">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            <span className="text-red-400">SEM</span> vs{' '}
            <span className="text-green-400">COM</span> MedMarketingAI+
          </h3>

          <div className="space-y-4">
            {comparison.map((item, idx) => {
              const Icon = item.icon;
              const BeforeIcon = item.beforeIcon || X;
              
              return (
                <div key={idx} className="bg-gray-900 rounded-xl p-4 md:p-6 hover:bg-gray-850 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <h4 className="font-bold text-lg text-white">{item.aspect}</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SEM */}
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {item.beforeIcon ? (
                          <BeforeIcon className="w-5 h-5 text-red-400" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                        <span className="text-xs font-bold text-red-400 uppercase">Sem</span>
                      </div>
                      <div className="text-gray-300 font-semibold">{item.before}</div>
                    </div>

                    {/* COM */}
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-xs font-bold text-green-400 uppercase">Com</span>
                      </div>
                      <div className="text-white font-semibold">{item.after}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Casos Reais */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-12 text-yellow-400">
            Casos Reais de Transformação
          </h3>

          <div className="space-y-8">
            {cases.map((caseStudy, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-gray-700">
                {/* Header do Caso */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-white mb-1">
                      {caseStudy.name}
                    </h4>
                    <p className="text-gray-400">{caseStudy.specialty}</p>
                  </div>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                    {caseStudy.period} de uso
                  </div>
                </div>

                {/* Antes vs Depois */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* ANTES */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingDown className="w-6 h-6 text-red-400" />
                      <h5 className="font-bold text-lg text-red-400 uppercase">Antes</h5>
                    </div>
                    <div className="space-y-2">
                      {caseStudy.before.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DEPOIS */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                      <h5 className="font-bold text-lg text-green-400 uppercase">Depois</h5>
                    </div>
                    <div className="space-y-2">
                      {caseStudy.after.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Depoimento */}
                <div className="bg-yellow-400 text-black rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl leading-none">"</div>
                    <p className="text-sm md:text-base font-medium leading-relaxed pt-2">
                      {caseStudy.testimonial}
                    </p>
                  </div>
                </div>

                {/* Destaque */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold">
                    <TrendingUp className="w-5 h-5" />
                    Destaque: {caseStudy.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resultado Médio */}
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Resultado Médio dos Usuários
            </h3>
            <p className="text-lg font-bold">(em 60-90 dias de uso)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {results.map((result, idx) => {
              const Icon = result.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-yellow-600 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-700 font-semibold">
                    {result.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
