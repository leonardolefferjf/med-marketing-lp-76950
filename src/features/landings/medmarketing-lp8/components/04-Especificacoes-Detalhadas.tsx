import React, { useState, useEffect, useRef } from 'react';
import {
  FileText, Video, TrendingUp, Search, Shield,
  ChevronDown, ChevronUp, Sparkles, Check, Zap,
  Clock, Award, ArrowRight, Star, Hash, Layout,
  Instagram, Calendar, BookOpen, Wand2, Settings,
  Bot, FileCheck
} from 'lucide-react';

export default function SpecificationsSection() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
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
          const end = 164;
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

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules = [
    {
      icon: Bot,
      color: 'blue',
      title: 'Dashboard Inteligente',
      count: '165 Assistentes',
      description: 'Central com todos os assistentes IA organizados',
      badge: 'Essencial',
      features: [
        '165 Assistentes IA especializados por categoria',
        'Sistema de Recomendação IA (GPT-4o-mini)',
        'Chatbot que analisa e recomenda assistentes ideais',
        'Filtros avançados: texto, categoria, tags, nível',
        'Sistema de favoritos',
        'Estatísticas em tempo real'
      ]
    },
    {
      icon: FileText,
      color: 'green',
      title: 'Templates de Posts',
      count: '+50 Templates',
      description: 'Biblioteca de templates prontos 100% CFM',
      badge: 'Popular',
      features: [
        'Apresentação profissional',
        'Conteúdo educativo',
        'Posts de divulgação',
        'Comunicados de preços',
        'Rotina médica',
        'Stories',
        'Sistema de personalização com variáveis',
        'Copiar com um clique',
        'Contador de uso (templates mais populares)'
      ]
    },
    {
      icon: Hash,
      color: 'purple',
      title: 'Biblioteca de Hashtags',
      count: '+200 Hashtags',
      description: 'Hashtags organizadas + alertas de proibidas',
      badge: 'Compliance',
      features: [
        'Educação médica',
        'Perfil profissional',
        '+50 especialidades médicas',
        'Campanhas de conscientização',
        '⚠️ Hashtags PROIBIDAS pelo CFM',
        '⚠️ Hashtags a EVITAR',
        'Seleção múltipla',
        'Copiar selecionadas de uma vez',
        'Top 10 mais usadas'
      ]
    },
    {
      icon: Instagram,
      color: 'orange',
      title: 'Gerador de Bio Instagram',
      count: '3 Estilos',
      description: 'Bios profissionais validadas pelo CFM',
      badge: 'Pronto para usar',
      features: [
        '3 estilos: Profissional, Humanizado, Minimalista',
        'Campos personalizáveis (CRM, RQE, especialidade)',
        '+50 especialidades no dropdown',
        'Preview em tempo real',
        'Contador de caracteres (limite: 150)',
        'Exemplos de bios aprovadas',
        'Lista do que NÃO fazer',
        'Salvar dados para uso futuro'
      ]
    },
    {
      icon: FileCheck,
      color: 'red',
      title: 'Gerador de Rodapé Profissional',
      count: '5 Tipos',
      description: 'Disclaimers CFM automáticos',
      badge: 'Proteção',
      features: [
        'Rodapé completo (padrão)',
        'Com preços',
        'Para procedimentos',
        'Minimalista',
        'Com contato',
        'Disclaimers CFM adicionais automáticos',
        'Aviso de resultados individuais',
        'Salvamento automático'
      ]
    },
    {
      icon: Wand2,
      color: 'pink',
      title: 'Formatador de Texto Instagram',
      count: '10+ Recursos',
      description: 'Estilos Unicode e formatação profissional',
      badge: 'Criativo',
      features: [
        'Negrito, Itálico, Monoespaçado',
        'MAIÚSCULAS, minúsculas, Capitalizar',
        'Espaçamento duplo e invisível',
        '+20 separadores decorativos',
        '+15 símbolos úteis',
        '+10 bullets personalizados',
        'Templates médicos prontos',
        'Integração com perfil do usuário'
      ]
    },
    {
      icon: Calendar,
      color: 'teal',
      title: 'Calendário de Conteúdo Médico',
      count: '+150 Datas',
      description: 'Calendário anual de campanhas de saúde',
      badge: 'Planejamento',
      features: [
        '12 meses de campanhas organizadas',
        '+150 datas comemorativas da saúde',
        'Temas sazonais por mês',
        'Sugestões de hashtags por data',
        'Campanha principal de cada mês',
        'Cores e temas associados',
        'Navegação Anterior/Próximo',
        'Visão geral do ano'
      ]
    },
    {
      icon: Shield,
      color: 'green',
      title: 'Hub de Conformidade CFM',
      count: 'Completo',
      description: 'Central de conhecimento CFM 2.336/2023',
      badge: '100% CFM',
      features: [
        'Chatbot IA de Conformidade',
        'Responde dúvidas sobre Resolução 2.336/2023',
        'Exemplos práticos de uso',
        'Biblioteca com +30 regras organizadas',
        'Checklist de conformidade completo',
        'Casos práticos com soluções',
        'PDF da Resolução completa para download'
      ]
    },
    {
      icon: FileCheck,
      color: 'red',
      title: 'Verificador de Conformidade CFM',
      count: 'Análise IA',
      description: 'Analisa seu texto ANTES de publicar',
      badge: 'Diferencial',
      features: [
        'Análise automática de texto',
        'Sistema de pontuação (0-100)',
        'Detecção de palavras proibidas',
        'Identifica promessas de resultado',
        'Verifica identificação profissional (CRM/RQE)',
        'Detecta violações éticas',
        'Relatório detalhado com sugestões',
        'Nível de risco categorizado',
        'Referências da resolução CFM'
      ]
    },
    {
      icon: Sparkles,
      color: 'yellow',
      title: 'Biblioteca de Prompts',
      count: '+50 Prompts',
      description: 'Prompts profissionais para geração de imagens',
      badge: 'Criativo',
      features: [
        'Retratos profissionais',
        'Consultórios',
        'Lifestyle médico',
        'Procedimentos',
        'Conceitual/abstrato',
        'Preview com imagem exemplo',
        'Copiar com um clique',
        'Detalhes técnicos: estilo, iluminação, câmera'
      ]
    },
    {
      icon: Layout,
      color: 'indigo',
      title: 'Diretório de Ferramentas IA',
      count: '+40 Ferramentas',
      description: 'Catálogo completo de IAs úteis para médicos',
      badge: 'Curadoria',
      features: [
        'Criação de conteúdo',
        'Edição de imagem/vídeo',
        'Ferramentas médicas específicas',
        'Gestão e produtividade',
        'Análise de dados',
        'Descrição completa de cada ferramenta',
        'Links diretos',
        'Tipo de preço (grátis/freemium/pago)',
        'Badges "Para Médicos" e "Compliance CFM"'
      ]
    },
    {
      icon: Settings,
      color: 'gray',
      title: 'Perfil Personalizado',
      count: '15+ Campos',
      description: 'Configuração completa do seu marketing',
      badge: 'Novo',
      features: [
        'Dados profissionais completos',
        'CRM, RQE, Especialidade (+50 opções)',
        '🎯 Objetivo principal (6 opções)',
        '👥 Público-alvo (6 opções)',
        '🗣️ Tom de comunicação (5 opções)',
        '📱 Plataformas preferidas (multi-seleção)',
        '📝 Temas de interesse',
        '⭐ Diferenciais',
        '📅 Frequência de posts',
        'Informações de assinatura'
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
      },
      pink: {
        bg: 'bg-pink-100',
        border: 'border-pink-500',
        text: 'text-pink-600',
        icon: 'text-pink-600',
        badge: 'bg-pink-500',
        badgeLight: 'bg-pink-100 text-pink-700'
      },
      teal: {
        bg: 'bg-teal-100',
        border: 'border-teal-500',
        text: 'text-teal-600',
        icon: 'text-teal-600',
        badge: 'bg-teal-500',
        badgeLight: 'bg-teal-100 text-teal-700'
      },
      yellow: {
        bg: 'bg-yellow-100',
        border: 'border-yellow-500',
        text: 'text-yellow-600',
        icon: 'text-yellow-600',
        badge: 'bg-yellow-500',
        badgeLight: 'bg-yellow-100 text-yellow-700'
      },
      indigo: {
        bg: 'bg-indigo-100',
        border: 'border-indigo-500',
        text: 'text-indigo-600',
        icon: 'text-indigo-600',
        badge: 'bg-indigo-500',
        badgeLight: 'bg-indigo-100 text-indigo-700'
      },
      gray: {
        bg: 'bg-gray-100',
        border: 'border-gray-500',
        text: 'text-gray-600',
        icon: 'text-gray-600',
        badge: 'bg-gray-500',
        badgeLight: 'bg-gray-100 text-gray-700'
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
            O Que Você Recebe
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Plataforma Completa com{' '}
            <span className="bg-white px-3 py-2 rounded-lg inline-block">
              12 Módulos
            </span>
          </h2>

          {/* Contador animado - NOVO */}
          <div ref={counterRef} className="mb-6">
            <div className="text-6xl md:text-8xl font-black text-black mb-2">
              {timesSaved}
            </div>
            <p className="text-xl md:text-2xl text-gray-900 font-bold mb-2">
              Assistentes IA + 12 Módulos Profissionais
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Não é apenas assistentes IA. É uma <strong>plataforma completa</strong> com tudo que você precisa
            para automatizar seu marketing médico de A a Z
          </p>
        </div>

        {/* Resumo Visual - Cards dos 12 Módulos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center cursor-pointer"
                onClick={() => toggleModule(idx)}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                </div>
                <div className="text-xs md:text-sm text-gray-900 font-bold leading-tight mb-1">
                  {module.title}
                </div>
                <div className={`text-xs ${colors.text} font-semibold`}>
                  {module.count}
                </div>
              </div>
            );
          })}
        </div>

        {/* Módulos Expansíveis - Accordion */}
        <div className="space-y-4 mb-12">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            const isExpanded = expandedModule === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
              >
                {/* Header do Módulo - Clicável */}
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 md:p-7 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start md:items-center gap-3 md:gap-5 flex-1">
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${colors.icon}`} />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                        <h3 className="text-base md:text-xl font-black text-gray-900">
                          {module.title}
                        </h3>
                        <span className={`${colors.badge} text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold`}>
                          {module.count}
                        </span>
                        {module.badge && (
                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                            {module.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-3">
                    <div className={`w-8 h-8 md:w-10 md:h-10 ${colors.bg} rounded-full flex items-center justify-center`}>
                      {isExpanded ? (
                        <ChevronUp className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                      )}
                    </div>
                  </div>
                </button>

                {/* Conteúdo Expansível */}
                {isExpanded && (
                  <div className="px-5 md:px-7 pb-6 pt-2 bg-gray-50 border-t-2 border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {module.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2 bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors">
                          <Check className={`w-4 h-4 md:w-5 md:h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                          <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
              Tudo Isso em Uma Única Plataforma
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-2">
              165 assistentes especializados + 12 módulos profissionais + validação CFM automática
            </p>
            <p className="text-sm text-gray-600">
              Acesso Vitalício • Zero Mensalidades • Atualizações Gratuitas
            </p>
          </div>

          {/* Stats visuais */}
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
                <span className="font-semibold">12 Módulos Completos</span>
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
    </section>
  );
}
