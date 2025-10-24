import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Shield, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

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

  const isUrgent = timeLeft.hours < 1;

  return (
    <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Timer Bar */}
      <div className={`fixed top-0 left-0 right-0 ${isUrgent ? 'bg-green-900 animate-pulse' : 'bg-green-800'} text-white py-3 px-4 z-50 text-center text-sm md:text-base font-bold shadow-2xl`}>
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <Clock className={`w-5 h-5 text-green-300 ${isUrgent ? 'animate-bounce' : ''}`} />
          <span className="text-green-200">OFERTA VITALÍCIA TERMINA EM:</span>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-lg">
            <span className="text-2xl font-black">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">100% Validado CFM 2.336/2023 • Zero Processos Éticos</span>
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

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full text-sm font-black mb-8 shadow-2xl border-2 border-green-300">
          <Shield className="w-5 h-5" />
          PROTEÇÃO MÁXIMA CFM
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 px-4 drop-shadow-lg">
          1 Palavra Errada ={' '}
          <span className="bg-red-600 text-white px-4 py-2 rounded-xl inline-block">
            R$ 50 Mil de Multa
          </span>{' '}
          + Reputação Destruída
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-white font-bold mb-4 px-4">
          Por Isso Você Tem Medo de Publicar
        </p>
        <p className="text-xl md:text-2xl text-white/90 mb-8 px-4">
          (E Sua Agenda Fica 50% Vazia)
        </p>

        {/* Solution Hook */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border-2 border-white/30">
          <p className="text-2xl md:text-3xl text-white font-black mb-4">
            Sistema de IA Valida TUDO Automaticamente Antes de Você Clicar em "Publicar"
          </p>
        </div>

        {/* Validation Steps */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Validação ética ANTES de publicar
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Alerta automático se detectar risco
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Sugestão ética para correção
            </p>
          </div>
        </div>

        {/* CFM Seal Visual */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto shadow-2xl">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              Validação CFM em Tempo Real • 165 Assistentes IA
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={dashboardComMenu}
              alt="Dashboard MedMarketingAI+ com validação CFM automática"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-sm text-gray-700 text-center mt-3 font-semibold">
            ↑ Sistema de validação CFM integrado: Alerta problemas antes de você publicar
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
            <ShieldCheck className="w-6 h-6 text-green-300" />
            <span className="text-xl font-black text-white">
              Zero Processos Entre 1.247 Usuários
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-600 font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4 border-4 border-green-300"
          >
            QUERO POSTAR SEM MEDO
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Validação Imediata
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Garantia 30 dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              100% Seguro CFM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
