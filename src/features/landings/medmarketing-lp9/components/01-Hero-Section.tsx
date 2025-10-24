import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Shield, CheckCircle2, ArrowRight, ShieldCheck, AlertTriangle, Lock } from 'lucide-react';

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
    <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Barra de Segurança CFM */}
      <div className="fixed top-0 left-0 right-0 bg-green-800 text-white py-3 px-4 z-50 text-center text-sm md:text-base font-bold shadow-2xl">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <ShieldCheck className="w-5 h-5 text-green-300 animate-pulse" />
          <span className="text-green-200">🛡️ VALIDAÇÃO CFM AUTOMÁTICA EM CADA POST</span>
          <span className="hidden md:inline">•</span>
          <span className="text-xs md:text-sm">100% Compliance CFM 2.336/2023</span>
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

        {/* Badge de Segurança */}
        <div className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full text-sm font-black mb-8 shadow-2xl border-2 border-green-300">
          <Shield className="w-5 h-5" />
          POSTE SEM MEDO DE MULTA
        </div>

        {/* Pre-headline - Problema do Medo */}
        <p className="text-xl md:text-2xl text-white font-bold mb-4 px-4">
          Você Tem Medo de Postar Porque Não Sabe Se Está <br className="hidden md:block" />
          Violando a Resolução CFM 2.336/2023?
        </p>

        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 px-4 drop-shadow-lg">
          Marketing Médico Com{' '}
          <span className="bg-white text-green-600 px-4 py-2 rounded-xl inline-block">
            Validação CFM Automática
          </span>{' '}
          em Cada Post
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-white font-bold mb-8 px-4">
          Zero Risco de Processo. Zero Risco de Multa de R$ 50 mil.
        </p>

        {/* Benefícios de Segurança */}
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
              100% compliance com CFM 2.336/2023
            </p>
          </div>
        </div>

        {/* Preview do Dashboard */}
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
            ↑ Sistema de validação CFM integrado: 165 assistentes IA via ChatGPT + compliance automático
          </p>
        </div>

        {/* CTA Principal */}
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

        {/* Trust Bar de Segurança */}
        <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-green-600" />
            <p className="text-2xl md:text-3xl font-black text-gray-900">
              Garantia Dupla de Segurança
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <p className="font-black text-green-900 mb-1">✅ Zero Processos</p>
              <p className="text-sm text-green-800">Nenhum usuário sofreu processo do CFM</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <p className="font-black text-green-900 mb-1">💰 Cobertura até R$ 50k</p>
              <p className="text-sm text-green-800">Se houver multa, nós pagamos por você</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
