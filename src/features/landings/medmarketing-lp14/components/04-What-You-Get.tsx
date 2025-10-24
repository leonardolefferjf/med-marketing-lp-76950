import React from 'react';
import { Bot, Shield, FileText, Hash, Calendar, User, Type, CheckCircle, Sparkles, Folder, UserCircle, Zap } from 'lucide-react';

export const WhatYouGet = () => {
  const features = [
    { icon: Bot, title: '165 Assistentes de IA', description: 'Especializados em +50 especialidades médicas' },
    { icon: Shield, title: 'Validador CFM Automático', description: 'Compliance 100% com resolução 2.336/2023' },
    { icon: FileText, title: '50+ Templates Prontos', description: 'Posts, stories, reels, carroseis educativos' },
    { icon: Hash, title: '200+ Hashtags Médicas', description: 'Otimizadas por especialidade e região' },
    { icon: Calendar, title: 'Calendário de Conteúdo', description: 'Planeje meses de marketing em minutos' },
    { icon: User, title: 'Gerador de Bio', description: 'Perfis otimizados para conversão' },
    { icon: Type, title: 'Formatador de Texto', description: 'Estilos profissionais com um clique' },
    { icon: CheckCircle, title: 'Hub de Compliance CFM', description: 'Base completa de regras éticas' },
    { icon: Sparkles, title: '50+ Prompts Otimizados', description: 'Comandos testados e aprovados' },
    { icon: Folder, title: '40+ Ferramentas IA', description: 'Diretório completo para médicos' },
    { icon: UserCircle, title: 'Perfil Personalizado', description: 'Sistema se adapta à sua especialidade' },
    { icon: Zap, title: 'Atualizações Vitalícias', description: 'Novos recursos sem custo adicional' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Plataforma Completa de{' '}
            <span className="text-red-600">Marketing Médico</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Tudo que uma agência cobra R$ 5-15k/mês, você tem por R$ 997 único
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Tudo Isso Por R$ 997 Único
          </p>
          <p className="text-xl text-white/90 mb-4">
            Enquanto agências cobram R$ 5.000-15.000 TODO MÊS
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-2xl font-black text-white">
              Você paga UMA VEZ e usa PARA SEMPRE
            </p>
            <p className="text-lg text-white/90 mt-2">
              Sem mensalidades. Sem surpresas. Sem dependência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
