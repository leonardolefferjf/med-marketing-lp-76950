import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Clock, CreditCard, Lock, Zap } from 'lucide-react';

export const MainOfferCTA = () => {
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

  const isUrgent = timeLeft.hours < 1;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="oferta-section" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Timer */}
        <div className={`${isUrgent ? 'bg-red-600 animate-pulse' : 'bg-red-700'} rounded-2xl p-6 text-center mb-8 shadow-2xl`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className={`w-8 h-8 text-yellow-300 ${isUrgent ? 'animate-bounce' : ''}`} />
            <p className="text-xl md:text-2xl font-black text-white">
              OFERTA ENCERRA EM:
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-black/30 rounded-lg px-6 py-3">
              <p className="text-4xl md:text-5xl font-black text-white">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>

        {/* Price Box */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl mb-8">
          {/* Old Price */}
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">De:</p>
            <p className="text-3xl font-black text-gray-400 line-through">
              R$ 1.994 + R$ 497/mês
            </p>
          </div>

          {/* Current Price */}
          <div className="text-center mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300">
            <p className="text-xl text-gray-700 mb-2">Por apenas:</p>
            <p className="text-6xl md:text-7xl font-black text-green-600 mb-4">
              R$ 997
            </p>
            <p className="text-2xl font-black text-gray-900 mb-4">
              PAGAMENTO ÚNICO
            </p>
            <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
              <p className="text-lg text-gray-700">
                ou <span className="font-black text-gray-900">12x de R$ 83,08</span> sem juros
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <p className="text-xl font-black text-gray-900 mb-4 text-center">
              O que você recebe AGORA:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">165 Assistentes de IA Médica</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Validador CFM Automático</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">50+ Templates Profissionais</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">200+ Hashtags Otimizadas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Calendário de Conteúdo</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hub Compliance CFM</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Bônus MagicMed (R$ 497)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Tutor IA 24/7 (R$ 397)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Comunidade Vitalícia (R$ 997)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Atualizações para sempre</span>
              </div>
            </div>
          </div>

          {/* Value Stack */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Plataforma MedMarketingAI+:</span>
                <span className="font-bold text-gray-900">R$ 1.994</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bônus #1 - MagicMed Prompts:</span>
                <span className="font-bold text-gray-900">R$ 497</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bônus #2 - Tutor IA 24/7:</span>
                <span className="font-bold text-gray-900">R$ 397</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bônus #3 - Comunidade Vitalícia:</span>
                <span className="font-bold text-gray-900">R$ 997</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Valor Total:</span>
                  <span className="text-2xl font-black text-gray-900">R$ 3.885</span>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 border-2 border-green-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-900">Seu investimento HOJE:</span>
                <span className="text-3xl font-black text-green-600">R$ 997</span>
              </div>
              <p className="text-center text-lg font-bold text-green-700">
                Economia de R$ 2.888 (74% OFF)
              </p>
            </div>
          </div>

          {/* Agency Comparison Box */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 mb-8 border-2 border-red-200">
            <p className="text-lg font-black text-gray-900 mb-4 text-center">
              Compare e decida:
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <p className="font-bold text-red-600 mb-1">Agência 1 ano:</p>
                <p className="text-2xl font-black text-red-600">R$ 60.000</p>
                <p className="text-sm text-gray-600">+ Dependência total para sempre</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <p className="font-bold text-green-600 mb-1">MedMarketingAI+ vitalício:</p>
                <p className="text-2xl font-black text-green-600">R$ 997</p>
                <p className="text-sm text-gray-600">+ Controle total para sempre</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xl font-black text-gray-900">
                Diferença: <span className="text-green-600">R$ 59.003 economizados</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToTop}
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black text-2xl md:text-3xl px-8 py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-6"
          >
            <Zap className="w-8 h-8" />
            GARANTIR ACESSO VITALÍCIO
            <ArrowRight className="w-8 h-8" />
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Pagamento Seguro SSL</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Acesso Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Garantia 30 Dias</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">12x Sem Juros</span>
            </div>
          </div>
        </div>

        {/* Hotmart Badge */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">Processamento seguro via</p>
          <p className="text-2xl font-black text-white">HOTMART</p>
        </div>
      </div>
    </section>
  );
};
