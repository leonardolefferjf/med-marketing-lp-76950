import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Pause, RotateCcw, Sparkles, Check, Zap } from 'lucide-react';
import {
  dashboardComMenu,
  templatesPosts,
  bibliotecaHashtags,
  geradorBioInstagram,
  chatbotConformidadeCfm,
  calendarioConteudo
} from '@/assets/app-screenshots';

interface DemoStep {
  id: number;
  title: string;
  description: string;
  image: string;
  highlightText: string;
  action: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: 'Passo 1: Acesse o Dashboard',
      description: 'Faça login na plataforma e visualize todos os 165 assistentes organizados por categoria. O sistema de IA já recomenda os melhores para sua especialidade.',
      image: dashboardComMenu,
      highlightText: '165 Assistentes + IA de Recomendação',
      action: 'Navegar pelo menu de assistentes',
      icon: Sparkles,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Passo 2: Explore Templates Prontos',
      description: 'Escolha entre +50 templates profissionais 100% validados pelo CFM. Cada template é otimizado para engajamento e conversão de pacientes.',
      image: templatesPosts,
      highlightText: '+50 Templates Profissionais',
      action: 'Selecionar template de interesse',
      icon: Zap,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Passo 3: Gere Bio Profissional',
      description: 'Crie biografias persuasivas para Instagram em 3 estilos diferentes. Preview em tempo real e ajustes automáticos conforme sua especialidade.',
      image: geradorBioInstagram,
      highlightText: '3 Estilos + Preview Real-Time',
      action: 'Gerar bio do Instagram',
      icon: Sparkles,
      color: 'pink'
    },
    {
      id: 4,
      title: 'Passo 4: Use Hashtags Validadas',
      description: '+200 hashtags organizadas e validadas. Sistema inteligente alerta sobre hashtags proibidas pelo CFM antes de publicar.',
      image: bibliotecaHashtags,
      highlightText: '+200 Hashtags + Alertas CFM',
      action: 'Copiar hashtags relevantes',
      icon: Check,
      color: 'green'
    },
    {
      id: 5,
      title: 'Passo 5: Validação CFM Automática',
      description: 'Chatbot IA verifica automaticamente se seu conteúdo está 100% conforme a Resolução CFM 2.336/2023. Zero risco de penalidades.',
      image: chatbotConformidadeCfm,
      highlightText: 'Verificação Automática IA',
      action: 'Validar conformidade do conteúdo',
      icon: Check,
      color: 'green'
    },
    {
      id: 6,
      title: 'Passo 6: Planeje com Calendário',
      description: '+150 datas comemorativas de saúde organizadas. Nunca mais fique sem ideia de conteúdo relevante para sua audiência.',
      image: calendarioConteudo,
      highlightText: '+150 Datas Estratégicas',
      action: 'Agendar posts do mês',
      icon: Zap,
      color: 'teal'
    }
  ];

  const totalSteps = demoSteps.length;

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextStep();
            return 0;
          }
          return prev + 1;
        });
      }, 50); // 5 seconds total (100 increments * 50ms)
    } else {
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(0);
    } else {
      setCurrentStep(0);
      setProgress(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress(0);
    }
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restart = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500', badge: 'bg-blue-500' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500', badge: 'bg-purple-500' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-500', badge: 'bg-pink-500' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-500', badge: 'bg-green-500' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-500', badge: 'bg-teal-500' }
    };
    return colors[color] || colors.blue;
  };

  const currentStepData = demoSteps[currentStep];
  const colorClasses = getColorClasses(currentStepData.color);
  const Icon = currentStepData.icon;

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg">
            <Play className="w-4 h-4" />
            Demo Interativo
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 px-4">
            Veja a Plataforma{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              em Ação
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Tour interativo de 6 passos mostrando como transformar seu marketing médico em minutos
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Progress Indicators */}
          <div className="bg-gray-100 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-all shadow-lg hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={restart}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-full transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <span className="text-sm font-bold text-gray-700">
                  {currentStep + 1} de {totalSteps}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStep}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2"
                >
                  Próximo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Step Dots */}
            <div className="flex items-center gap-2">
              {demoSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className="flex-1 h-2 rounded-full overflow-hidden bg-gray-300 relative"
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      index === currentStep
                        ? getColorClasses(step.color).badge
                        : index < currentStep
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                    style={{
                      width: index === currentStep ? `${progress}%` : index < currentStep ? '100%' : '0%'
                    }}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className={`${colorClasses.bg} border-t-4 ${colorClasses.border} p-6 md:p-8`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* Left: Info */}
              <div className="order-2 lg:order-1">
                <div className={`inline-flex items-center gap-2 ${colorClasses.badge} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                  <Icon className="w-4 h-4" />
                  {currentStepData.highlightText}
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                  {currentStepData.title}
                </h3>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  {currentStepData.description}
                </p>

                <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 ${colorClasses.badge} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">
                        Ação do Usuário:
                      </div>
                      <div className="font-bold text-gray-900">
                        {currentStepData.action}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center gap-2 mt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed font-bold flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Anterior
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right: Screenshot */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-white rounded-xl p-3 shadow-2xl border-4 border-white">
                    <img
                      src={currentStepData.image}
                      alt={currentStepData.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Step Badge */}
                  <div className="absolute -top-4 -right-4 bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-xl border-4 border-white">
                    {currentStep + 1}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl text-white font-bold mb-3">
              🚀 Tudo isso em <span className="text-yellow-400">10 minutos de configuração</span>
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Plataforma completa • 165 assistentes IA • 12 módulos profissionais • Acesso vitalício por R$ 997
            </p>
          </div>

        </div>

        {/* Features Grid Below Demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-green-500">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-black text-lg text-gray-900 mb-2">
              100% Real
            </h4>
            <p className="text-sm text-gray-600">
              Screenshots reais da plataforma em funcionamento
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-yellow-500">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-black text-lg text-gray-900 mb-2">
              Fácil de Usar
            </h4>
            <p className="text-sm text-gray-600">
              Interface intuitiva, sem curva de aprendizado
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-blue-500">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-black text-lg text-gray-900 mb-2">
              Tecnologia IA
            </h4>
            <p className="text-sm text-gray-600">
              165 assistentes especializados + recomendação inteligente
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
