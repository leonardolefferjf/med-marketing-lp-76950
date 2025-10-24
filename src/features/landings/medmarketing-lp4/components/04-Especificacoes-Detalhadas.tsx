import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, Video, TrendingUp, Search, Shield, 
  ChevronDown, ChevronUp, Sparkles, Check, Zap,
  Clock, Award, ArrowRight, Star
} from 'lucide-react';

export default function SpecificationsSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>('accordion');
  const [timesSaved, setTimesSaved] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Contador de tempo economizado
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let start = 0;
          const end = 162;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setTimesSaved(end);
              clearInterval(timer);
            } else {
              setTimesSaved(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const categories = [
    {
      icon: FileText,
      color: 'blue',
      title: 'Criação de Conteúdo',
      count: 78,
      description: 'Posts, Stories, Reels e Copy persuasivo',
      badge: 'Mais Usado',
      realExample: 'Dr. Carlos gera 20 posts/mês em 2h (antes levava 15h)',
      subcategories: [
        {
          name: 'Posts e Carrosséis',
          count: 28,
          items: [
            'Criador de Posts Educativos',
            'Gerador de Carrosséis Virais',
            'Posts de Engajamento e Pesquisas',
            'Posts de Autoridade Médica',
            'Posts Científicos Simplificados',
            'Posts de Dicas Rápidas',
            'Posts de Mitos e Verdades',
            'Posts de Casos Clínicos (anonimizados)',
            'Posts de Prevenção e Saúde',
            'Posts de Perguntas e Respostas',
            '+ 18 assistentes por especialidade'
          ]
        },
        {
          name: 'Stories Estratégicos',
          count: 19,
          items: [
            'Sequências de Stories Educativos',
            'Stories de Bastidores do Consultório',
            'Stories de Dúvidas Frequentes',
            'Stories com Enquetes e Interação',
            'Stories de "Um Dia Comigo"',
            'Stories de Agradecimento',
            'Stories de Dicas Rápidas (15s)',
            'Stories de Urgência',
            '+ 11 assistentes especializados'
          ]
        },
        {
          name: 'Reels e Vídeos Curtos',
          count: 24,
          items: [
            'Roteirista de Reels Educativos',
            'Roteirista de Reels Virais (Trends)',
            'Roteirista "Antes de ir ao médico"',
            'Roteirista "Você sabia?"',
            'Roteirista de Reels Comparativos',
            'Hook Creator (Ganchos irresistíveis)',
            'Script de Vídeo Longo (YouTube)',
            '+ 17 assistentes de vídeo'
          ]
        },
        {
          name: 'Legendas e Copywriting',
          count: 7,
          items: [
            'Copywriter de Legendas Persuasivas',
            'Gerador de CTAs Médicos',
            'Criador de Bio Instagram/LinkedIn',
            'Otimizador de Headlines',
            'Escritor de Descrições de Serviços',
            'Copy para Página de Agendamento',
            'Copy para WhatsApp Business'
          ]
        }
      ]
    },
    {
      icon: TrendingUp,
      color: 'green',
      title: 'Marketing e Campanhas',
      count: 31,
      description: 'Meta Ads, Email e WhatsApp automatizados',
      badge: 'Alta Conversão',
      realExample: 'Dra. Ana aumentou agendamentos em 300% com campanhas geradas',
      subcategories: [
        {
          name: 'Meta Ads e Tráfego Pago',
          count: 14,
          items: [
            'Criador de Anúncios Facebook/Instagram',
            'Otimizador de Copy para Conversão',
            'Gerador de Públicos-Alvo',
            'Criador de Campanhas Completas',
            'Anúncios para Captura de Leads',
            'Anúncios para Agendamento Direto',
            'Anúncios de Retargeting',
            'Anúncios de Autoridade',
            '+ 6 assistentes específicos'
          ]
        },
        {
          name: 'Email Marketing',
          count: 9,
          items: [
            'Sequência de Boas-Vindas',
            'Email de Engajamento',
            'Email Educativo (Newsletter)',
            'Email de Reativação de Pacientes',
            'Email de Lembrete de Consulta',
            'Email de Pós-Consulta',
            '+ 3 assistentes de email'
          ]
        },
        {
          name: 'WhatsApp e Mensagens',
          count: 8,
          items: [
            'Mensagens de Primeira Consulta',
            'Mensagens de Follow-up',
            'Mensagens de Agendamento',
            'Mensagens de Confirmação',
            'Respostas Automáticas FAQ',
            '+ 3 assistentes WhatsApp'
          ]
        }
      ]
    },
    {
      icon: Sparkles,
      color: 'purple',
      title: 'Estratégia e Planejamento',
      count: 24,
      description: 'Calendário editorial e funil de conversão',
      badge: 'Essencial',
      realExample: 'Dr. Pedro planeja 30 dias de conteúdo em 20 minutos',
      subcategories: [
        {
          name: 'Planejamento Estratégico',
          count: 24,
          items: [
            'Estrategista de Conteúdo Mensal',
            'Criador de Calendário Editorial',
            'Planejador de Campanhas Sazonais',
            'Analista de Concorrência Local',
            'Otimizador de Funil de Conversão',
            'Consultor de Posicionamento',
            'Planejador de Lançamentos',
            '+ 17 assistentes estratégicos'
          ]
        }
      ]
    },
    {
      icon: Search,
      color: 'orange',
      title: 'SEO e Otimização',
      count: 15,
      description: 'Google, Hashtags e Performance',
      badge: 'Crescimento',
      realExample: 'Dra. Maria triplicou alcance orgânico em 60 dias',
      subcategories: [
        {
          name: 'Otimização Digital',
          count: 15,
          items: [
            'Otimizador de SEO para Google',
            'Gerador de Hashtags Inteligentes',
            'Otimizador de Perfil Instagram',
            'Otimizador de Perfil LinkedIn',
            'Criador de Artigos para Blog',
            'Otimizador de Títulos (CTR)',
            'Analisador de Performance de Posts',
            '+ 8 assistentes SEO'
          ]
        }
      ]
    },
    {
      icon: Shield,
      color: 'red',
      title: 'Compliance e Ética CFM',
      count: 14,
      description: 'Validação 100% CFM 2.336/2023',
      badge: 'Proteção',
      realExample: 'Zero processos éticos em 1.247 médicos usando',
      subcategories: [
        {
          name: 'Validação Ética',
          count: 14,
          items: [
            'Consultor CFM 2.336/2023',
            'Validador de Conteúdo Ético',
            'Revisor de Promessas e Claims',
            'Analisador de Risco de Denúncia',
            'Consultor de Publicidade Médica',
            'Verificador de Antes/Depois',
            'Orientador de Divulgação de Preços',
            '+ 7 assistentes compliance'
          ]
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'bg-blue-100',
        border: 'border-blue-500',
        text: 'text-blue-600',
        icon: 'text-blue-600',
        badge: 'bg-blue-500',
        badgeLight: 'bg-blue-100 text-blue-700'
      },
      green: {
        bg: 'bg-green-100',
        border: 'border-green-500',
        text: 'text-green-600',
        icon: 'text-green-600',
        badge: 'bg-green-500',
        badgeLight: 'bg-green-100 text-green-700'
      },
      purple: {
        bg: 'bg-purple-100',
        border: 'border-purple-500',
        text: 'text-purple-600',
        icon: 'text-purple-600',
        badge: 'bg-purple-500',
        badgeLight: 'bg-purple-100 text-purple-700'
      },
      orange: {
        bg: 'bg-orange-100',
        border: 'border-orange-500',
        text: 'text-orange-600',
        icon: 'text-orange-600',
        badge: 'bg-orange-500',
        badgeLight: 'bg-orange-100 text-orange-700'
      },
      red: {
        bg: 'bg-red-100',
        border: 'border-red-500',
        text: 'text-red-600',
        icon: 'text-red-600',
        badge: 'bg-red-500',
        badgeLight: 'bg-red-100 text-red-700'
      }
    };
    return colors[color];
  };

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
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Especificações Detalhadas
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            O Que Você Recebe no{' '}
            <span className="bg-white px-3 py-2 rounded-lg inline-block">
              MedMarketingAI+
            </span>
          </h2>

          {/* Contador animado - NOVO */}
          <div ref={counterRef} className="mb-6">
            <div className="text-6xl md:text-8xl font-black text-black mb-2">
              {timesSaved}
            </div>
            <p className="text-xl md:text-2xl text-gray-900 font-bold mb-2">
              Assistentes Especializados + Bônus Exclusivos
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Cada assistente foi treinado para <strong>uma tarefa específica</strong> do marketing médico, 
            validado pelo CFM e pronto para usar
          </p>
        </div>

        {/* Economia de Tempo Visual - NOVO */}
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              💡 Quanto Tempo Você Economiza?
            </h3>
            <p className="text-gray-700 text-base md:text-lg">
              Compare o tempo necessário para criar conteúdo manualmente vs com os 165 assistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sem MedMarketingAI+ */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-red-600" />
                <div>
                  <div className="text-sm text-red-700 font-bold">SEM MedMarketingAI+</div>
                  <div className="text-2xl font-black text-red-600">15-20h/mês</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Criar posts: 8-10h</div>
                <div>• Stories diários: 4-5h</div>
                <div>• Roteiros reels: 3-4h</div>
                <div>• Planejamento: 2-3h</div>
              </div>
            </div>

            {/* Com MedMarketingAI+ */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-sm text-green-700 font-bold">COM MedMarketingAI+</div>
                  <div className="text-2xl font-black text-green-600">2-3h/mês</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Criar posts: 30min</div>
                <div>• Stories diários: 20min</div>
                <div>• Roteiros reels: 30min</div>
                <div>• Planejamento: 20min</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-100 rounded-xl p-4 text-center border-2 border-yellow-500">
            <div className="text-lg md:text-xl font-black text-gray-900">
              VOCÊ ECONOMIZA: <span className="text-green-600">12-17 horas/mês</span>
            </div>
            <div className="text-sm text-gray-700 mt-1">
              = 144-204 horas/ano de volta para sua vida
            </div>
          </div>
        </div>

        {/* Resumo Visual - Cards Totais - OTIMIZADO */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const colors = getColorClasses(cat.color);
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center cursor-pointer"
                onClick={() => toggleCategory(idx)}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-5 h-5 md:w-7 md:h-7 ${colors.icon}`} />
                </div>
                <div className={`text-2xl md:text-3xl font-black ${colors.text} mb-1`}>
                  {cat.count}
                </div>
                <div className="text-xs text-gray-600 font-semibold leading-tight">
                  {cat.title}
                </div>
                {cat.badge && (
                  <div className={`mt-2 ${colors.badgeLight} px-2 py-1 rounded-full text-xs font-bold`}>
                    {cat.badge}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Categorias Expansíveis - Accordion - OTIMIZADO */}
        <div className="space-y-4">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            const isExpanded = expandedCategory === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
              >
                {/* Header da Categoria - Clicável - OTIMIZADO */}
                <button
                  onClick={() => toggleCategory(idx)}
                  className="w-full p-5 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start md:items-center gap-3 md:gap-6 flex-1">
                    <div className={`w-14 h-14 md:w-20 md:h-20 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 md:w-10 md:h-10 ${colors.icon}`} />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                        <h3 className="text-lg md:text-2xl font-black text-gray-900">
                          {category.title}
                        </h3>
                        <span className={`${colors.badge} text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold`}>
                          {category.count}
                        </span>
                        {category.badge && (
                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {category.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base text-gray-600 mb-2">
                        {category.description}
                      </p>
                      {/* Exemplo real - NOVO */}
                      <p className="text-xs md:text-sm text-gray-500 italic">
                        📊 {category.realExample}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 ml-3 md:ml-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 ${colors.bg} rounded-full flex items-center justify-center`}>
                      {isExpanded ? (
                        <ChevronUp className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                      )}
                    </div>
                  </div>
                </button>

                {/* Conteúdo Expansível - OTIMIZADO */}
                {isExpanded && (
                  <div className="px-5 md:px-8 pb-8 pt-4 bg-gray-50 border-t-2 border-gray-200">
                    <div className="space-y-6">
                      {category.subcategories.map((sub, subIdx) => (
                        <div key={subIdx} className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-2 border-gray-100 hover:border-gray-300 transition-all">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                            <h4 className="text-base md:text-lg font-bold text-gray-900">
                              {sub.name}
                            </h4>
                            <span className={`${colors.bg} ${colors.text} px-3 py-1.5 rounded-full text-xs md:text-sm font-bold w-fit`}>
                              {sub.count} assistentes
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sub.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                                <Check className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                                <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Final - OTIMIZADO */}
        <div className="mt-12 md:mt-16">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                165 Assistentes Trabalhando Para Você
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-2">
                Cada um especializado, validado pelo CFM e pronto para encher sua agenda
              </p>
              <p className="text-sm text-gray-600">
                + 3 Bônus Exclusivos (valor R$ 1.891) • Acesso Vitalício • Zero Mensalidades
              </p>
            </div>
            
            {/* Stats visuais - NOVO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-5 text-center border-2 border-green-200">
                <div className="text-3xl font-black text-green-600 mb-1">12-17h</div>
                <div className="text-xs text-gray-600">economizadas/mês</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 text-center border-2 border-blue-200">
                <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                <div className="text-xs text-gray-600">validado CFM</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 text-center border-2 border-purple-200">
                <div className="text-3xl font-black text-purple-600 mb-1">R$ 997</div>
                <div className="text-xs text-gray-600">pagamento único</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={scrollToOffer}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4"
              >
                GARANTIR ACESSO VITALÍCIO
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">100% Validado CFM</span>
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold">3 Cliques Para Usar</span>
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">Acesso Vitalício</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
