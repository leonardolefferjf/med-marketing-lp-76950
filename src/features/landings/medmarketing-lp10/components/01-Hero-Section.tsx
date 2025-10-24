import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Clock, Heart, Sunrise, ArrowRight, CheckCircle2, CalendarDays, Zap } from 'lucide-react';

export const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState('');

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

  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Barra de Impacto */}
      <div className="fixed top-0 left-0 right-0 bg-blue-800 text-white py-3 px-4 z-50 text-center text-sm md:text-base font-bold shadow-2xl">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <Clock className="w-5 h-5 text-blue-300 animate-pulse" />
          <span className="text-blue-200">⏰ ECONOMIZE 420 HORAS POR ANO = 17 DIAS DE VIDA RECUPERADOS</span>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">20 min/semana vs 9 horas manuais</span>
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

        {/* Badge de Tempo */}
        <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-black mb-8 shadow-2xl border-2 border-blue-300">
          <Sunrise className="w-5 h-5" />
          RECUPERE SEU TEMPO E SUA VIDA
        </div>

        {/* Pre-headline - Problema da Exaustão */}
        <p className="text-xl md:text-2xl text-white font-bold mb-4 px-4">
          Você Gasta Mais Tempo Fazendo Marketing <br className="hidden md:block" />
          Do Que Com Sua Família?
        </p>

        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 px-4 drop-shadow-lg">
          Marketing Médico em{' '}
          <span className="bg-white text-blue-600 px-4 py-2 rounded-xl inline-block">
            20 Min/Semana
          </span>{' '}
          (Não 9 Horas)
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-white font-bold mb-8 px-4">
          Economize 420 horas por ano. São 17 dias de vida que você recupera.
        </p>

        {/* Benefícios de Tempo */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-300" />
              Configure em 10 minutos (uma vez só)
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-300" />
              Gere posts em 30 segundos (não 2 horas)
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
            <p className="text-xl md:text-2xl text-white font-bold flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-300" />
              Dedique 20 min/semana (não 9 horas)
            </p>
          </div>
        </div>

        {/* Preview do Dashboard */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto shadow-2xl">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold">
              <Zap className="w-4 h-4" />
              Automação Completa • 165 Assistentes IA
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={dashboardComMenu}
              alt="Dashboard MedMarketingAI+ com automação de marketing"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-sm text-gray-700 text-center mt-3 font-semibold">
            ↑ Sistema automatizado: 165 assistentes IA via ChatGPT + 12 módulos que trabalham por você
          </p>
        </div>

        {/* CTA Principal */}
        <div className="mb-8">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4 border-4 border-blue-300"
          >
            QUERO RECUPERAR MEU TEMPO
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-blue-300" />
              Setup 10 min
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-blue-300" />
              Garantia 30 dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-blue-300" />
              Uso 20 min/semana
            </span>
          </div>
        </div>

        {/* Trust Bar de Tempo Recuperado */}
        <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CalendarDays className="w-8 h-8 text-blue-600" />
            <p className="text-2xl md:text-3xl font-black text-gray-900">
              Tempo Que Você Recupera
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <p className="font-black text-blue-900 mb-1">📅 Por Semana</p>
              <p className="text-2xl font-black text-blue-600">8h 40min</p>
              <p className="text-xs text-blue-700">(9h manual → 20min IA)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <p className="font-black text-blue-900 mb-1">📅 Por Mês</p>
              <p className="text-2xl font-black text-blue-600">35 horas</p>
              <p className="text-xs text-blue-700">(quase 1 semana)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <p className="font-black text-blue-900 mb-1">📅 Por Ano</p>
              <p className="text-2xl font-black text-blue-600">420 horas</p>
              <p className="text-xs text-blue-700">(17 dias de vida!)</p>
            </div>
          </div>
        </div>

        {/* Mensagem Emocional */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white/30">
          <Heart className="w-8 h-8 text-white mx-auto mb-3" />
          <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
            Você merece ter tempo para sua família, hobbies, descanso. <br />
            Deixe a IA cuidar do marketing enquanto você cuida da sua vida.
          </p>
        </div>

      </div>
    </section>
  );
};
