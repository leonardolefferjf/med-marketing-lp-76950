import React from 'react';
import { 
  LogIn, Settings, Sparkles, Clock, Check, 
  ArrowRight, TrendingUp, Users, Calendar 
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: LogIn,
      color: 'blue',
      time: '2 minutos',
      title: 'Acesso Imediato',
      description: 'Após confirmação do pagamento na Hotmart, você recebe por email:',
      items: [
        'Link de acesso à plataforma',
        'Login e senha temporária',
        'Guia de primeiros passos (PDF)'
      ],
      result: 'Você já está dentro da plataforma MedMarketingAI+'
    },
    {
      number: 2,
      icon: Settings,
      color: 'purple',
      time: '3 minutos',
      title: 'Configuração do Perfil',
      description: 'Preenche um formulário rápido com:',
      items: [
        'Sua especialidade médica',
        'Tom de voz preferido (formal, descontraído, técnico)',
        'Objetivos principais (autoridade, agenda lotada, educar)'
      ],
      result: 'Os 165 assistentes calibrados para sua especialidade e estilo'
    },
    {
      number: 3,
      icon: Sparkles,
      color: 'green',
      time: '5 minutos',
      title: 'Primeiro Conteúdo Gerado',
      description: 'Processo simples em 4 etapas:',
      items: [
        'Escolhe o assistente (ex: "Criador de Posts Carrossel")',
        'Escreve uma frase (ex: "Post sobre diabetes tipo 2")',
        'Clica em "Gerar"',
        'Recebe post completo: título, texto, imagens, hashtags, horário'
      ],
      result: 'Primeiro post profissional, ético e pronto para publicar!'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'bg-blue-100',
        border: 'border-blue-500',
        text: 'text-blue-600',
        badge: 'bg-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      purple: {
        bg: 'bg-purple-100',
        border: 'border-purple-500',
        text: 'text-purple-600',
        badge: 'bg-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      },
      green: {
        bg: 'bg-green-100',
        border: 'border-green-500',
        text: 'text-green-600',
        badge: 'bg-green-500',
        gradient: 'from-green-500 to-green-600'
      }
    };
    return colors[color];
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Clock className="w-5 h-5" />
            COMO FUNCIONA - PASSO A PASSO
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Da Configuração aos Primeiros Posts em{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              10 Minutos
            </span>
            <br />
            <span className="text-2xl md:text-3xl">(Literalmente)</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Veja como é absurdamente simples começar a gerar conteúdo profissional hoje mesmo
          </p>
        </div>

        {/* Timeline dos 3 Passos */}
        <div className="relative">
          {/* Linha de conexão vertical (mobile) / horizontal (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200" 
               style={{ width: 'calc(100% - 200px)', left: '100px' }}>
          </div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const colors = getColorClasses(step.color);
              
              return (
                <div key={idx} className="relative">
                  {/* Card do Passo */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-200">
                    
                    {/* Número e Ícone */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white font-black text-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Tempo */}
                    <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      <Clock className="w-4 h-4" />
                      {step.time}
                    </div>

                    {/* Título */}
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Lista de Itens */}
                    <div className="space-y-2 mb-6">
                      {step.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Resultado */}
                    <div className={`${colors.bg} rounded-xl p-4 border-l-4 ${colors.border}`}>
                      <div className={`text-xs ${colors.text} font-bold mb-1`}>RESULTADO:</div>
                      <div className="text-sm text-gray-800 font-semibold">{step.result}</div>
                    </div>

                  </div>

                  {/* Seta de conexão (apenas desktop, entre cards) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center absolute top-24 -right-4 z-10">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Resultado Final - Box Destaque */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
              <Check className="w-5 h-5" />
              RESULTADO FINAL
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-6">
              Em 10 minutos você:
            </h3>
          </div>

          {/* 3 Conquistas Imediatas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Check className="w-8 h-8 text-green-600 mb-3" />
              <div className="font-bold text-gray-900 mb-1">Configurou a plataforma</div>
              <div className="text-sm text-gray-600">Tudo pronto para usar</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Check className="w-8 h-8 text-green-600 mb-3" />
              <div className="font-bold text-gray-900 mb-1">Personalizou sua especialidade</div>
              <div className="text-sm text-gray-600">165 assistentes calibrados</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Check className="w-8 h-8 text-green-600 mb-3" />
              <div className="font-bold text-gray-900 mb-1">Gerou primeiro conteúdo</div>
              <div className="text-sm text-gray-600">Post profissional publicado</div>
            </div>
          </div>

          {/* Resultados nas Próximas Semanas */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-6 text-center">
              Nas próximas semanas:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">20-30 posts/mês em 2-3 horas</div>
                  <div className="text-sm text-gray-600">vs 15-20h manualmente</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Alcance aumenta 200-400%</div>
                  <div className="text-sm text-gray-600">Mais pessoas vendo seu conteúdo</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Consultas crescem 5-10x</div>
                  <div className="text-sm text-gray-600">Pacientes vindos do Instagram/Facebook</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Agenda lotada</div>
                  <div className="text-sm text-gray-600">Com pacientes qualificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Tudo isso em <strong className="text-yellow-600">10 minutos</strong> de configuração inicial
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Simples como WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Validado CFM</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Suporte vitalício</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
