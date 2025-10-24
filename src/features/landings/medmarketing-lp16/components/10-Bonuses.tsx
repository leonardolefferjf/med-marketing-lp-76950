import React from 'react';
import { Gift, Clock, Zap, BookOpen, CheckCircle2 } from 'lucide-react';

export const BonusSection = () => {
  const bonuses = [
    {
      icon: Clock,
      title: "BÔNUS 1: Guia de Configuração Express",
      subtitle: "Configure tudo em 10 minutos",
      value: "R$ 297",
      description: "Passo a passo visual para ativar toda automação em menos de 10 minutos. Mesmo se você nunca usou IA na vida.",
      timeValue: "Economiza 2h de tentativa e erro"
    },
    {
      icon: Zap,
      title: "BÔNUS 2: 100 Templates Prontos",
      subtitle: "Para sua especialidade",
      value: "R$ 497",
      description: "Posts, carrosséis, legendas e hashtags prontos para sua área. Só ajustar e publicar. Resultado imediato no primeiro dia.",
      timeValue: "Economiza 5h criando do zero"
    },
    {
      icon: BookOpen,
      title: "BÔNUS 3: Checklist Anti-Exaustão",
      subtitle: "Trabalhe menos, viva mais",
      value: "R$ 197",
      description: "Sistema completo para identificar onde você está perdendo tempo e recuperar 10-15h/semana da sua vida pessoal.",
      timeValue: "Recupera até 15h/semana"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <Gift className="w-6 h-6" />
            <span className="font-black text-lg">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Economize Ainda Mais Tempo
          </h2>
          <p className="text-xl text-gray-700">
            Bônus focados em recuperar sua vida mais rápido
          </p>
        </div>

        {/* Bonuses */}
        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Value */}
                  <div className="flex flex-col items-center md:items-start gap-3 flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <div className="bg-yellow-400 px-4 py-2 rounded-lg">
                      <p className="font-black text-gray-900 text-sm">VALOR: {bonus.value}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                      {bonus.title}
                    </h3>
                    <p className="text-lg font-bold text-blue-600 mb-3">
                      {bonus.subtitle}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {bonus.description}
                    </p>
                    <div className="flex items-center gap-2 bg-green-100 rounded-lg px-4 py-3 border-2 border-green-300">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-black text-green-900">{bonus.timeValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                Valor Total dos Bônus:
              </h3>
              <div className="flex items-baseline gap-3">
                <span className="text-gray-400 line-through text-3xl">R$ 991</span>
                <span className="text-5xl font-black text-green-400">GRÁTIS</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-white text-lg mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 inline mr-2" />
                Todos focados em economia de tempo
              </p>
              <p className="text-white text-lg mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 inline mr-2" />
                Acesso imediato e vitalício
              </p>
              <p className="text-white text-lg">
                <CheckCircle2 className="w-6 h-6 text-green-400 inline mr-2" />
                Economiza até 22h extras no primeiro mês
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
