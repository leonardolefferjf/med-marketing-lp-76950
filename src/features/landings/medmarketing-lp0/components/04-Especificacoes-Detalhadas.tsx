import React, { useState } from 'react';
import { 
  FileText, Video, TrendingUp, Search, Shield, 
  ChevronDown, ChevronUp, Sparkles, Check 
} from 'lucide-react';

export default function SpecificationsSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

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
        badge: 'bg-blue-500'
      },
      green: {
        bg: 'bg-green-100',
        border: 'border-green-500',
        text: 'text-green-600',
        icon: 'text-green-600',
        badge: 'bg-green-500'
      },
      purple: {
        bg: 'bg-purple-100',
        border: 'border-purple-500',
        text: 'text-purple-600',
        icon: 'text-purple-600',
        badge: 'bg-purple-500'
      },
      orange: {
        bg: 'bg-orange-100',
        border: 'border-orange-500',
        text: 'text-orange-600',
        icon: 'text-orange-600',
        badge: 'bg-orange-500'
      },
      red: {
        bg: 'bg-red-100',
        border: 'border-red-500',
        text: 'text-red-600',
        icon: 'text-red-600',
        badge: 'bg-red-500'
      }
    };
    return colors[color];
  };

  return (
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            ESPECIFICAÇÕES DETALHADAS
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            O Que Você Recebe no <br className="md:hidden" />
            <span className="bg-white px-3 py-1 rounded-lg inline-block mt-2">
              MedMarketingAI+
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-900 font-bold mb-4">
            165 Assistentes Especializados + Bônus Exclusivos
          </p>

          <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
            Cada assistente foi treinado para uma tarefa específica do marketing médico, validado pelo CFM e pronto para usar
          </p>
        </div>

        {/* Resumo Visual - Cards Totais */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const colors = getColorClasses(cat.color);
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <div className={`text-3xl font-black ${colors.text} mb-1`}>{cat.count}</div>
                <div className="text-xs text-gray-600 font-semibold">{cat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Categorias Expansíveis - Accordion */}
        <div className="space-y-4">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            const isExpanded = expandedCategory === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all"
              >
                {/* Header da Categoria - Clicável */}
                <button
                  onClick={() => toggleCategory(idx)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 ${colors.icon}`} />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900">
                          {category.title}
                        </h3>
                        <span className={`${colors.badge} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                          {category.count}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Conteúdo Expansível */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 pt-4 bg-gray-50 border-t-2 border-gray-200">
                    <div className="space-y-6">
                      {category.subcategories.map((sub, subIdx) => (
                        <div key={subIdx} className="bg-white rounded-xl p-6 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-900">{sub.name}</h4>
                            <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-bold`}>
                              {sub.count} assistentes
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sub.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-2">
                                <Check className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                                <span className="text-sm text-gray-700">{item}</span>
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

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              165 Assistentes Trabalhando Para Você
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Cada um especializado, validado pelo CFM e pronto para encher sua agenda
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold">100% Validado CFM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold">Plug & Play</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
