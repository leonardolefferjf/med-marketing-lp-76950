import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingDown, TrendingUp, Clock, DollarSign, FileText, 
  BarChart3, Activity, Users, Shield, AlertTriangle, Check,
  Sparkles, ArrowRight, Star, Play, Calendar, X
} from 'lucide-react';

export default function BeforeAfterSection() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animação dos números
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animar cada valor
          avgResults.forEach((result, idx) => {
            let start = 0;
            const targetValue = parseInt(result.value.replace(/\D/g, '')) || 250;
            const duration = 2000;
            const increment = targetValue / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= targetValue) {
                setAnimatedValues(prev => ({ ...prev, [idx]: targetValue }));
                clearInterval(timer);
              } else {
                setAnimatedValues(prev => ({ ...prev, [idx]: Math.floor(start) }));
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const comparisons = [
    {
      aspect: 'Tempo em marketing',
      icon: Clock,
      without: '15-20h/mês',
      with: '2-3h/mês',
      improvement: '85% menos tempo'
    },
    {
      aspect: 'Custo mensal',
      icon: DollarSign,
      without: 'R$ 3.000-15.000',
      with: 'R$ 0 (pago 1x)',
      improvement: 'R$ 36-180k/ano economizados'
    },
    {
      aspect: 'Posts/mês',
      icon: FileText,
      without: '3-4 (inconsistente)',
      with: '20-30 (profissionais)',
      improvement: '7x mais conteúdo'
    },
    {
      aspect: 'Alcance médio',
      icon: BarChart3,
      without: '200-500 contas',
      with: '2.000-5.000 contas',
      improvement: '10x mais alcance'
    },
    {
      aspect: 'Engajamento',
      icon: Activity,
      without: '2-3%',
      with: '8-12%',
      improvement: '4x mais engajamento'
    },
    {
      aspect: 'Consultas do digital',
      icon: Users,
      without: '1-2/mês',
      with: '10-20/mês',
      improvement: '10x mais consultas'
    },
    {
      aspect: 'Compliance CFM',
      icon: Shield,
      without: 'Risco constante',
      with: '100% validado',
      withIcon: Check,
      improvement: 'Zero processos'
    },
    {
      aspect: 'Estresse',
      icon: AlertTriangle,
      without: 'Alto (medo de errar)',
      with: 'Zero (IA valida tudo)',
      improvement: 'Paz de espírito total'
    }
  ];

  const cases = [
    {
      name: 'Dra. Ana Paula',
      specialty: 'Dermatologista, SP',
      period: '90 dias',
      avatar: '👩‍⚕️',
      rating: 5,
      before: [
        'Agenda 55% vazia',
        'Gastava R$ 5.000/mês com freelancer',
        '1-2 posts/semana (genéricos)',
        '3 consultas/mês do Instagram',
        'Medo de postar antes/depois (CFM)'
      ],
      after: [
        'Agenda 95% lotada',
        'Economizou R$ 13.500 em 3 meses',
        '4-5 posts/semana (profissionais)',
        '18 consultas/mês do Instagram',
        'Posts 100% compliance (validados por IA)'
      ],
      quote: '"Em 3 meses, minha receita aumentou R$ 27.000 só com pacientes que me acharam no Instagram. O investimento se pagou em 5 dias. Agora preciso contratar outro dermatologista para ajudar!"',
      highlight: '+R$ 27.000',
      highlightLabel: 'em 90 dias',
      roi: '27x ROI'
    },
    {
      name: 'Dr. Ricardo',
      specialty: 'Ortopedista, RJ',
      period: '60 dias',
      avatar: '👨‍⚕️',
      rating: 5,
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
      quote: '"Nunca imaginei que IA poderia gerar conteúdo TÃO específico para ortopedia. Os posts parecem que eu mesmo escrevi. Meus pacientes comentam que me seguem porque aprendem muito."',
      highlight: '15-30k',
      highlightLabel: 'views em reels',
      roi: '21x ROI'
    },
    {
      name: 'Dra. Juliana',
      specialty: 'Ginecologista, MG',
      period: '120 dias',
      avatar: '👩‍⚕️',
      rating: 5,
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
      quote: '"Como mãe e médica, meu tempo é o bem mais precioso. MedMarketingAI+ me devolveu 15 horas/mês que agora uso com meus filhos. E minha agenda nunca esteve tão cheia!"',
      highlight: '+522%',
      highlightLabel: 'crescimento',
      roi: '18x ROI'
    }
  ];

  const avgResults = [
    {
      icon: Users,
      value: '+250%',
      label: 'Crescimento de seguidores',
      color: 'blue'
    },
    {
      icon: BarChart3,
      value: '+400%',
      label: 'Alcance orgânico',
      color: 'green'
    },
    {
      icon: Activity,
      value: '+300%',
      label: 'Engajamento',
      color: 'purple'
    },
    {
      icon: Users,
      value: '5-10x',
      label: 'Consultas do digital',
      color: 'yellow'
    },
    {
      icon: Clock,
      value: '15-18h',
      label: 'Economizadas/mês',
      color: 'orange'
    },
    {
      icon: DollarSign,
      value: 'R$ 3-15k',
      label: 'Economizados/mês',
      color: 'red'
    }
  ];

  const scrollToOffer = () => {
    const offerSection = document.querySelector(
      '#oferta-section, .oferta-section, #oferta, .oferta'
    );
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <TrendingUp className="w-4 h-4" />
            Antes e Depois - Transformação Real
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 px-4">
            O Que Muda na Sua Prática Médica{' '}
            <span className="text-yellow-400">Com MedMarketingAI+</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transformação real de médicos que automatizaram seu marketing com IA
          </p>
        </div>

        {/* Timeline Visual da Transformação - NOVO */}
        <div className="bg-gradient-to-r from-red-900/20 via-gray-800/50 to-green-900/20 rounded-2xl p-6 md:p-10 mb-12 border border-gray-700">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            Sua Jornada de Transformação
          </h3>
          
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Dia 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-900 relative z-10">
                  <span className="text-2xl font-black">1</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-sm mb-2">DIA 1</div>
                  <div className="text-xs text-gray-300">
                    Configura plataforma em 10 minutos e gera primeiro post
                  </div>
                </div>
              </div>

              {/* Semana 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-900 relative z-10">
                  <Calendar className="w-7 h-7" />
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-sm mb-2">SEMANA 1</div>
                  <div className="text-xs text-gray-300">
                    20-30 posts criados. Primeiros comentários e DMs chegando
                  </div>
                </div>
              </div>

              {/* Mês 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-900 relative z-10">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-sm mb-2">MÊS 1</div>
                  <div className="text-xs text-gray-300">
                    Alcance cresce 200%. Primeiras consultas do Instagram
                  </div>
                </div>
              </div>

              {/* Mês 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-900 relative z-10">
                  <Check className="w-7 h-7" />
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-sm mb-2">MÊS 3</div>
                  <div className="text-xs text-gray-300">
                    Agenda 90% lotada. ROI de 15-27x. Marketing no piloto automático
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela Comparativa Visual - OTIMIZADO */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            Comparação Lado a Lado
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {comparisons.map((item, idx) => {
              const Icon = item.icon;
              const WithIcon = item.withIcon || Check;
              
              return (
                <div 
                  key={idx} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 md:p-6 hover:bg-gray-800 transition-all border border-gray-700 hover:border-gray-600"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold text-white">
                        {item.aspect}
                      </h4>
                      <p className="text-xs text-green-400 font-semibold">
                        {item.improvement}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* SEM */}
                    <div className="bg-red-900/20 border-2 border-red-500/30 rounded-lg p-4 hover:border-red-500/50 transition-all">
                      <div className="text-xs text-red-400 font-bold mb-2 flex items-center gap-1">
                        <X className="w-4 h-4" />
                        SEM MedMarketingAI+
                      </div>
                      <div className="text-base text-gray-300">{item.without}</div>
                    </div>
                    
                    {/* COM */}
                    <div className="bg-green-900/20 border-2 border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all">
                      <div className="text-xs text-green-400 font-bold mb-2 flex items-center gap-1">
                        <WithIcon className="w-4 h-4" />
                        COM MedMarketingAI+
                      </div>
                      <div className="text-base font-bold text-green-400">{item.with}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Casos Reais - OTIMIZADO */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            Histórias Reais de Transformação
          </h3>

          {/* Selector de casos */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cases.map((caseItem, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  selectedCase === idx
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{caseItem.avatar}</div>
                <div className="text-xs">{caseItem.name.split(' ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Caso selecionado */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-10 border-2 border-yellow-500">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              {/* Avatar e info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="text-6xl mb-3">{cases[selectedCase].avatar}</div>
                <div className="font-black text-xl text-white mb-1">
                  {cases[selectedCase].name}
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {cases[selectedCase].specialty}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  {[...Array(cases[selectedCase].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  {cases[selectedCase].period}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-green-400 mb-1">
                    {cases[selectedCase].highlight}
                  </div>
                  <div className="text-sm text-gray-300">
                    {cases[selectedCase].highlightLabel}
                  </div>
                </div>
                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-blue-400 mb-1">
                    {cases[selectedCase].roi}
                  </div>
                  <div className="text-sm text-gray-300">
                    Retorno sobre investimento
                  </div>
                </div>
              </div>
            </div>

            {/* Antes/Depois */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Antes */}
              <div className="bg-red-900/20 rounded-xl p-6 border-2 border-red-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                  <h4 className="text-lg font-black text-red-400">ANTES</h4>
                </div>
                <div className="space-y-3">
                  {cases[selectedCase].before.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Depois */}
              <div className="bg-green-900/20 rounded-xl p-6 border-2 border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-black text-green-400">DEPOIS</h4>
                </div>
                <div className="space-y-3">
                  {cases[selectedCase].after.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Depoimento */}
            <div className="bg-gray-900/50 rounded-xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base md:text-lg text-gray-200 italic leading-relaxed mb-3">
                    {cases[selectedCase].quote}
                  </p>
                  <p className="text-sm text-gray-400 font-semibold">
                    — {cases[selectedCase].name}, {cases[selectedCase].specialty}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Placeholder - NOVO */}
            <div className="mt-6 bg-black rounded-xl aspect-video flex items-center justify-center border-2 border-gray-700">
              <div className="text-center">
                <Play className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">
                  Vídeo depoimento completo em breve
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resultado Médio dos Usuários - OTIMIZADO */}
        <div ref={sectionRef} className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-2xl p-6 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-black text-center mb-4">
            Resultado Médio dos Usuários
          </h3>
          <p className="text-center text-lg mb-8">
            Transformação em 60-90 dias
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {avgResults.map((result, idx) => {
              const Icon = result.icon;
              const animatedValue = animatedValues[idx] || 0;
              
              return (
                <div key={idx} className="bg-white rounded-xl p-5 md:p-6 text-center shadow-xl hover:scale-105 transition-transform">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-yellow-600" />
                  <div className="text-2xl md:text-4xl font-black text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-700 font-semibold">
                    {result.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-black/10 rounded-xl p-6 text-center">
            <p className="text-base md:text-lg font-bold">
              📊 Dados baseados em <span className="text-2xl">1.247</span> médicos usando MedMarketingAI+
            </p>
            <p className="text-sm mt-2 opacity-80">
              Resultados podem variar de acordo com especialidade e frequência de uso
            </p>
          </div>
        </div>

        {/* CTA Emocional - NOVO */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border-2 border-yellow-500">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
              Pronto Para Sua Transformação?
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Em 90 dias você pode estar comemorando resultados como esses médicos. 
              Ou pode continuar com agenda vazia gastando tempo que não tem.
            </p>
            
            <button
              onClick={scrollToOffer}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-sm text-gray-400 mt-4">
              Acesso vitalício • R$ 997 único • Garantia 30 dias
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}