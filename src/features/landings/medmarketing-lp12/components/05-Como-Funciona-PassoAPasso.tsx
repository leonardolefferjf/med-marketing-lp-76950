import React, { useState, useEffect, useRef } from 'react';
import { 
  LogIn, Settings, Sparkles, Clock, Check, 
  ArrowRight, TrendingUp, Users, Calendar,
  Play, Zap, Shield, Star, ChevronRight
} from 'lucide-react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progressTime, setProgressTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  // Animação do progress bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let time = 0;
          const totalTime = 10; // 10 minutos
          const duration = 3000; // 3 segundos de animação
          const increment = totalTime / (duration / 16);
          
          const timer = setInterval(() => {
            time += increment;
            if (time >= totalTime) {
              setProgressTime(totalTime);
              clearInterval(timer);
            } else {
              setProgressTime(time);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const steps = [
    {
      number: 1,
      icon: LogIn,
      color: 'blue',
      time: '2 minutos',
      title: 'Acesso Imediato',
      subtitle: 'Login e primeiros passos',
      description: 'Após confirmação do pagamento na Hotmart, você recebe por email:',
      items: [
        'Link de acesso à plataforma',
        'Login e senha temporária',
        'Guia de primeiros passos (PDF)',
        'Vídeo tutorial de 3 minutos'
      ],
      result: 'Você já está dentro da plataforma MedMarketingAI+',
      testimonial: {
        text: "Pensei que seria complicado, mas foi mais fácil que entrar no Instagram",
        author: "Dra. Paula",
        specialty: "Dermatologista"
      }
    },
    {
      number: 2,
      icon: Settings,
      color: 'purple',
      time: '3 minutos',
      title: 'Configuração do Perfil + IA Recomendação',
      subtitle: 'Personalização inteligente para sua especialidade',
      description: 'Preenche um formulário rápido e nossa IA recomenda os melhores assistentes:',
      items: [
        'Sua especialidade médica (+ de 50 opções)',
        'Tom de voz preferido (formal, descontraído, técnico)',
        'Objetivos principais (autoridade, agenda lotada, educar)',
        'Chatbot IA analisa e recomenda os assistentes ideais para você',
        'Sistema de recomendação inteligente (GPT-4o-mini)'
      ],
      result: 'Os 165 assistentes calibrados + recomendações personalizadas da IA',
      testimonial: {
        text: "A IA me recomendou os assistentes perfeitos para minha especialidade!",
        author: "Dr. Ricardo",
        specialty: "Cardiologista"
      }
    },
    {
      number: 3,
      icon: Sparkles,
      color: 'green',
      time: '5 minutos',
      title: 'Primeiro Conteúdo Gerado',
      subtitle: 'Do zero ao post publicado',
      description: 'Processo simples em 4 etapas:',
      items: [
        'Escolhe o assistente (ex: "Criador de Posts Carrossel")',
        'Escreve UMA frase (ex: "Post sobre diabetes tipo 2")',
        'Clica em "Gerar" e aguarda 30 segundos',
        'Recebe post completo: título, texto, hashtags, horário ideal'
      ],
      result: 'Primeiro post profissional, ético e pronto para publicar!',
      testimonial: {
        text: "Levei 30 segundos para ter um post que levaria 2 horas para fazer",
        author: "Dra. Mariana",
        specialty: "Endocrinologista"
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'bg-blue-50',
        bgDark: 'bg-blue-100',
        border: 'border-blue-500',
        text: 'text-blue-600',
        badge: 'bg-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        bgDark: 'bg-purple-100',
        border: 'border-purple-500',
        text: 'text-purple-600',
        badge: 'bg-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      },
      green: {
        bg: 'bg-green-50',
        bgDark: 'bg-green-100',
        border: 'border-green-500',
        text: 'text-green-600',
        badge: 'bg-green-500',
        gradient: 'from-green-500 to-green-600'
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg">
            <Clock className="w-4 h-4" />
            Como Funciona - Passo a Passo
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 px-4">
            Da Configuração aos Primeiros Posts em{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              10 Minutos
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-6">
            (Literalmente)
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Veja como é absurdamente simples começar a gerar conteúdo profissional hoje mesmo
          </p>

          {/* Progress Bar Animado - NOVO */}
          <div ref={progressRef} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-gray-700">Tempo total de configuração:</span>
                <span className="text-2xl font-black text-green-600">
                  {Math.round(progressTime)} min
                </span>
              </div>
              <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-100"
                  style={{ width: `${(progressTime / 10) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0 min</span>
                <span>5 min</span>
                <span>10 min ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparação Rápida - NOVO */}
        <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outras Ferramentas */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-sm text-red-700 font-bold">Outras Ferramentas</div>
                  <div className="text-2xl font-black text-red-600">2-4 horas</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Tutoriais longos e confusos</div>
                <div>• Precisa entender de prompts</div>
                <div>• Configurações complexas</div>
                <div>• Risco de violar CFM</div>
              </div>
            </div>

            {/* MedMarketingAI+ */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-green-700 font-bold">MedMarketingAI+</div>
                  <div className="text-2xl font-black text-green-600">10 minutos</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>3 passos simples e rápidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Zero conhecimento técnico</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Tudo configurado automaticamente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>100% validado CFM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline dos 3 Passos - OTIMIZADO */}
        <div className="relative mb-16">
          {/* Linha de conexão horizontal (desktop) */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-1 bg-gray-200 z-0" 
               style={{ width: 'calc(100% - 200px)', left: '100px' }}>
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transition-all duration-1000"
              style={{ width: `${isVisible ? '100%' : '0%'}` }}
            ></div>
          </div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const colors = getColorClasses(step.color);
              
              return (
                <div key={idx} className="relative">
                  {/* Card do Passo - OTIMIZADO */}
                  <div 
                    className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border-2 ${
                      activeStep === idx ? colors.border : 'border-gray-200'
                    }`}
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    
                    {/* Número e Ícone */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white font-black text-lg shadow-md">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Badge de Tempo */}
                    <div className={`inline-flex items-center gap-2 ${colors.bgDark} ${colors.text} px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      <Clock className="w-4 h-4" />
                      {step.time}
                    </div>

                    {/* Título e Subtitle */}
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {step.subtitle}
                    </p>

                    {/* Screenshot Placeholder - NOVO */}
                    <div className={`${colors.bg} rounded-xl p-4 mb-4 aspect-video flex items-center justify-center border-2 ${colors.border} border-dashed`}>
                      <div className="text-center">
                        <Play className={`w-12 h-12 ${colors.text} mx-auto mb-2`} />
                        <p className={`text-xs ${colors.text} font-bold`}>
                          Vídeo: Passo {step.number}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          (Adicionar demo aqui)
                        </p>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-sm text-gray-600 mb-3 font-semibold">
                      {step.description}
                    </p>

                    {/* Lista de Itens */}
                    <div className="space-y-2 mb-6">
                      {step.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-xs md:text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Resultado */}
                    <div className={`${colors.bg} rounded-xl p-4 border-l-4 ${colors.border} mb-4`}>
                      <div className={`text-xs ${colors.text} font-bold mb-1 flex items-center gap-1`}>
                        <Check className="w-4 h-4" />
                        RESULTADO:
                      </div>
                      <div className="text-sm text-gray-800 font-semibold">{step.result}</div>
                    </div>

                    {/* Depoimento Inline - NOVO */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs italic text-gray-700">
                          "{step.testimonial.text}"
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 font-semibold">
                        {step.testimonial.author} • {step.testimonial.specialty}
                      </p>
                    </div>

                  </div>

                  {/* Seta de conexão (apenas desktop, entre cards) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center absolute top-28 -right-3 z-20">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <ArrowRight className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Resultado Final - Box Destaque - OTIMIZADO */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-500 rounded-2xl p-6 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
              <Check className="w-5 h-5" />
              Resultado Final em 10 Minutos
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-2">
              Você Consegue em 10 Minutos:
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              Do zero absoluto ao primeiro post profissional publicado
            </p>
          </div>

          {/* 3 Conquistas Imediatas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <div className="font-bold text-gray-900 text-center mb-1">Plataforma Configurada</div>
              <div className="text-sm text-gray-600 text-center">Tudo pronto para usar</div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <div className="font-bold text-gray-900 text-center mb-1">IA Personalizada</div>
              <div className="text-sm text-gray-600 text-center">165 assistentes calibrados</div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <div className="font-bold text-gray-900 text-center mb-1">Post Publicado</div>
              <div className="text-sm text-gray-600 text-center">Conteúdo profissional pronto</div>
            </div>
          </div>

          {/* Resultados nas Próximas Semanas - OTIMIZADO */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h4 className="text-xl md:text-2xl font-black text-gray-900 text-center">
                Nas próximas semanas, você verá:
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">20-30 posts/mês em 2-3h</div>
                  <div className="text-sm text-gray-600">vs 15-20h fazendo manualmente</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Alcance cresce 200-400%</div>
                  <div className="text-sm text-gray-600">Mais pessoas vendo seu conteúdo</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Consultas sobem 5-10x</div>
                  <div className="text-sm text-gray-600">Pacientes vindos do Instagram/Facebook</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Agenda 90-100% lotada</div>
                  <div className="text-sm text-gray-600">Com pacientes qualificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Elements - NOVO */}
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-bold">
            Tudo isso em <span className="text-green-600 bg-green-100 px-3 py-1 rounded-lg">10 minutos</span> de configuração inicial
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Simples como WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-semibold">100% Validado CFM</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Suporte Vitalício</span>
            </div>
          </div>

          {/* CTA Button - NOVO */}
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105"
          >
            COMEÇAR AGORA (10 MINUTOS)
            <ChevronRight className="w-6 h-6" />
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Acesso imediato após confirmação do pagamento
          </p>
        </div>

      </div>
    </section>
  );
}