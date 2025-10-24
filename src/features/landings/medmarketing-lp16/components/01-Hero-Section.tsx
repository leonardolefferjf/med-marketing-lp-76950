import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Clock, Heart, Sunrise, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

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
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 min-h-screen flex items-center px-4 py-20 relative">
      {/* Timer Bar - Fixed at Top */}
      <div className={`fixed top-0 left-0 right-0 ${isUrgent ? 'bg-blue-900 animate-pulse' : 'bg-blue-800'} text-white py-3 px-4 z-50 text-center text-sm md:text-base font-bold shadow-2xl`}>
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <Clock className={`w-5 h-5 text-blue-300 ${isUrgent ? 'animate-bounce' : ''}`} />
          <span className="text-blue-200">OFERTA VITALÍCIA TERMINA EM:</span>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-lg">
            <span className="text-2xl font-black">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">Automatize Seu Marketing • Recupere Sua Vida</span>
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
        <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-black mb-8 shadow-2xl border-2 border-blue-300">
          <Heart className="w-5 h-5" />
          RECUPERE SUA VIDA
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 px-4 drop-shadow-lg">
          Pare de Trocar Sua Vida Pessoal Por Uma Agenda{' '}
          <span className="bg-white text-red-600 px-4 py-2 rounded-xl inline-block">
            50% Vazia
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-white font-bold mb-8 px-4">
          164 Assistentes de IA Lotam Seu Consultório Enquanto Você Janta Com Sua Família
        </p>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Sem trabalhar até às 22h criando posts
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Sem sacrificar finais de semana
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Sem culpa por não estar com a família
            </p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto shadow-2xl">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold">
              <Zap className="w-4 h-4" />
              Automação Total 24/7 • 10 Minutos/Semana
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={dashboardComMenu}
              alt="Dashboard MedMarketingAI+ - Trabalhe menos, viva mais"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-sm text-gray-700 text-center mt-3 font-semibold">
            ↑ Sistema completo: IA trabalha 24/7 enquanto você vive sua vida
          </p>
        </div>

        {/* CTA Principal */}
        <div className="mb-8">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4 border-4 border-green-400"
          >
            QUERO RECUPERAR MINHA VIDA
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Automação 24/7
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              20 min/semana
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              Garantia 30 dias
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-red-600" />
                <p className="font-black text-red-900">Marketing Manual</p>
              </div>
              <p className="text-2xl font-black text-red-600 mb-1">9h/semana</p>
              <p className="text-sm text-red-700">Sacrifício total</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sunrise className="w-6 h-6 text-blue-600" />
                <p className="font-black text-blue-900">MedMarketingAI+</p>
              </div>
              <p className="text-2xl font-black text-blue-600 mb-1">20 min/semana</p>
              <p className="text-sm text-blue-700">Liberdade total</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
