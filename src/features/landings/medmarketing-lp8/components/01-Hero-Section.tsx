import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Shield, Zap, TrendingUp, X, CheckCircle2, ArrowRight, Clock, DollarSign } from 'lucide-react';

export const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Countdown timer to midnight
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const diff = tomorrow.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.querySelector(
      '#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]'
    );
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const dateString = today.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);
  }, []);

  const isUrgent = timeLeft.hours < 1;

  return (
    <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Barra de Urgência Fixa com Timer Real */}
      <div className={`fixed top-0 left-0 right-0 ${isUrgent ? 'bg-red-800 animate-pulse' : 'bg-red-700'} text-white py-3 px-4 z-50 text-center text-sm md:text-base font-bold shadow-2xl`}>
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <Clock className={`w-5 h-5 ${isUrgent ? 'animate-bounce' : ''}`} />
          <span className="text-yellow-300">⚠️ OFERTA VITALÍCIA ENCERRA EM:</span>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-lg">
            <span className="text-2xl font-black">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">100% Validado CFM 2.336/2023</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mt-12">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={mainImages.logoMedMarketing}
            alt="MedMarketingAI+ Logo"
            className="mx-auto h-20 w-auto drop-shadow-2xl"
            loading="eager"
          />
        </div>

        {/* Badge Impactante */}
        <div className="inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-full text-sm font-black mb-8 shadow-2xl border-2 border-yellow-400">
          <X className="w-5 h-5" />
          CANCELE SUA AGÊNCIA HOJE
        </div>

        {/* Pre-headline - Problema Claro */}
        <p className="text-xl md:text-2xl text-white font-bold mb-4 px-4">
          Pare de Depender de Agências de R$ 5.000/mês
          <br/>
          Que Não Entendem Nada de Medicina
        </p>

        {/* Headline Principal - Solução */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 px-4 drop-shadow-lg">
          165 Assistentes de IA Criam{' '}
          <span className="bg-white text-red-600 px-4 py-2 rounded-xl inline-block">
            Seu Marketing
          </span>{' '}
          Enquanto Você Atende Pacientes
        </h1>

        {/* Benefícios Principais */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <X className="w-6 h-6 text-red-300" />
              Sem pagar R$ 3-15k/mês em agência
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <X className="w-6 h-6 text-red-300" />
              Sem esperar 3-5 dias por um post simples
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <X className="w-6 h-6 text-red-300" />
              Sem explicar o básico da sua especialidade
            </p>
          </div>
        </div>

        {/* Trust Bar Compacto */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm font-bold text-white">
          <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <span>165 Assistentes + 12 Módulos</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-300" />
            <span>100% Compliance CFM</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
            <DollarSign className="w-5 h-5 text-green-300" />
            <span>R$ 997 único • R$ 0/mês</span>
          </div>
        </div>

        {/* Preview do Dashboard */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto shadow-2xl">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold">
              <Zap className="w-4 h-4" />
              Plataforma Real • Gera Conteúdo em 30 Segundos
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={dashboardComMenu}
              alt="Dashboard MedMarketingAI+ - 165 Assistentes IA independentes"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-sm text-gray-700 text-center mt-3 font-semibold">
            ↑ Plataforma real: 165 assistentes IA via ChatGPT + 12 módulos exclusivos no app
          </p>
        </div>

        {/* CTA Principal */}
        <div className="mb-8">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4 border-4 border-green-400"
          >
            CANCELE SUA AGÊNCIA AGORA
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Acesso Imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Garantia 30 dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Pagamento Seguro
            </span>
          </div>
        </div>

        {/* Economia Destacada */}
        <div className="bg-yellow-400 text-black rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <TrendingUp className="w-8 h-8" />
            <p className="text-2xl md:text-3xl font-black">
              Economize R$ 59.003 no Primeiro Ano
            </p>
          </div>
          <p className="text-lg md:text-xl font-bold">
            Agência R$ 60.000/ano → MedMarketingAI+ R$ 997 vitalício
          </p>
        </div>

      </div>
    </section>
  );
};
