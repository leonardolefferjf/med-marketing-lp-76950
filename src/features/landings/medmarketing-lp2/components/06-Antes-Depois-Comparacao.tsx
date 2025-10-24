import React from 'react';
import { TrendingDown, TrendingUp, Clock, DollarSign, FileText, BarChart3, Activity, Users, Shield, AlertTriangle, Check } from 'lucide-react';
export default function BeforeAfterSection() {
  const comparisons = [{
    aspect: 'Tempo em marketing',
    icon: Clock,
    without: '15-20h/mês',
    with: '2-3h/mês'
  }, {
    aspect: 'Custo mensal',
    icon: DollarSign,
    without: 'R$ 3.000-15.000',
    with: 'R$ 0 (pago 1x)'
  }, {
    aspect: 'Posts/mês',
    icon: FileText,
    without: '3-4 (inconsistente)',
    with: '20-30 (profissionais)'
  }, {
    aspect: 'Alcance médio',
    icon: BarChart3,
    without: '200-500 contas',
    with: '2.000-5.000 contas'
  }, {
    aspect: 'Engajamento',
    icon: Activity,
    without: '2-3%',
    with: '8-12%'
  }, {
    aspect: 'Consultas do digital',
    icon: Users,
    without: '1-2/mês',
    with: '10-20/mês'
  }, {
    aspect: 'Compliance CFM',
    icon: Shield,
    without: 'Risco constante',
    with: '100% validado',
    withIcon: Check
  }, {
    aspect: 'Estresse',
    icon: AlertTriangle,
    without: 'Alto (medo de errar)',
    with: 'Zero (IA valida tudo)'
  }];
  const cases = [{
    name: 'Dra. Ana Paula',
    specialty: 'Dermatologista, SP',
    period: '90 dias',
    before: ['Agenda 55% vazia', 'Gastava R$ 5.000/mês com freelancer', '1-2 posts/semana (genéricos)', '3 consultas/mês do Instagram', 'Medo de postar antes/depois (CFM)'],
    after: ['Agenda 95% lotada', 'Economizou R$ 13.500 em 3 meses', '4-5 posts/semana (profissionais)', '18 consultas/mês do Instagram', 'Posts 100% compliance (validados por IA)'],
    quote: '"Em 3 meses, minha receita aumentou R$ 27.000 só com pacientes que me acharam no Instagram. O investimento se pagou em 5 dias. Agora preciso contratar outro dermatologista para ajudar!"',
    highlight: '+R$ 27.000 em 90 dias'
  }, {
    name: 'Dr. Ricardo',
    specialty: 'Ortopedista, RJ',
    period: '60 dias',
    before: ['Perfil parado há 6 meses', 'Tentou usar ChatGPT mas não sabia criar prompts', 'Alcance: 150 contas/post', 'Concorrentes crescendo mais rápido'],
    after: ['25 posts + 40 stories publicados', 'Reels batendo 15.000-30.000 visualizações', 'Alcance: 3.200 contas/post', '12 novas consultas/mês do Instagram'],
    quote: '"Nunca imaginei que IA poderia gerar conteúdo TÃO específico para ortopedia. Os posts parecem que eu mesmo escrevi. Meus pacientes comentam que me seguem porque aprendo muito."',
    highlight: '15-30k views em reels'
  }, {
    name: 'Dra. Juliana',
    specialty: 'Ginecologista, MG',
    period: '120 dias',
    before: ['Sem tempo para marketing (mãe de 2 filhos)', 'Consultório novo (8 meses aberto)', 'Agenda 40% preenchida', 'Dependia 100% de indicações'],
    after: ['Gera 1 mês de conteúdo em 2 horas', 'Perfil cresceu de 450 para 2.800 seguidores', 'Agenda 90% lotada', '40% dos pacientes vêm do digital'],
    quote: '"Como mãe e médica, meu tempo é o bem mais precioso. MedMarketingAI+ me devolveu 15 horas/mês que agora uso com meus filhos. E minha agenda nunca esteve tão cheia!"',
    highlight: '450 → 2.800 seguidores'
  }];
  const avgResults = [{
    icon: Users,
    value: '+250%',
    label: 'Crescimento de seguidores'
  }, {
    icon: BarChart3,
    value: '+400%',
    label: 'Alcance orgânico'
  }, {
    icon: Activity,
    value: '+300%',
    label: 'Engajamento'
  }, {
    icon: Users,
    value: '5-10x',
    label: 'Consultas do digital'
  }, {
    icon: Clock,
    value: '15-18h',
    label: 'Economizadas/mês'
  }, {
    icon: DollarSign,
    value: 'R$ 3-15k',
    label: 'Economizados/mês'
  }];
  return <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6">
            <TrendingUp className="w-5 h-5" />
            ANTES E DEPOIS - TRANSFORMAÇÃO
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Antes e Depois: O Que Muda na Prática Médica Com{' '}
            <span className="text-yellow-400">MedMarketingAI+</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja a transformação real de médicos que automatizaram seu marketing com IA
          </p>
        </div>

        {/* Tabela Comparativa Visual */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            Comparação: <span className="text-red-400">SEM</span> vs <span className="text-green-400">COM</span> MedMarketingAI+
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {comparisons.map((item, idx) => {
            const Icon = item.icon;
            const WithIcon = item.withIcon || Check;
            return <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-850 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.aspect}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SEM */}
                    <div className="bg-red-900/20 border-2 border-red-500/30 rounded-lg p-4">
                      <div className="text-xs text-red-400 font-bold mb-2">❌ SEM MedMarketingAI+</div>
                      <div className="text-base text-gray-300">{item.without}</div>
                    </div>
                    
                    {/* COM */}
                    <div className="bg-green-900/20 border-2 border-green-500/30 rounded-lg p-4">
                      <div className="text-xs text-green-400 font-bold mb-2 flex items-center gap-1">
                        <WithIcon className="w-4 h-4" />
                        COM MedMarketingAI+
                      </div>
                      <div className="text-base font-bold text-green-400">{item.with}</div>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Casos Reais */}
        

        {/* Resultado Médio dos Usuários */}
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-4xl font-black text-center mb-8">
            Resultado Médio dos Usuários (60-90 dias)
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {avgResults.map((result, idx) => {
            const Icon = result.icon;
            return <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-xl">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-yellow-600" />
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">
                    {result.label}
                  </div>
                </div>;
          })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl font-bold">
              Dados baseados em 42+ médicos usando MedMarketingAI+ nos últimos 6 meses
            </p>
          </div>
        </div>

      </div>
    </section>;
}