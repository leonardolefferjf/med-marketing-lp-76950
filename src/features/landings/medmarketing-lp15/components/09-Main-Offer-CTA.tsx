import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Clock, Lock, Zap, AlertTriangle } from 'lucide-react';

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
        <div className={`${isUrgent ? 'bg-green-700 animate-pulse' : 'bg-green-800'} rounded-2xl p-6 text-center mb-8 shadow-2xl`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className={`w-8 h-8 text-green-300 ${isUrgent ? 'animate-bounce' : ''}`} />
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

        {/* Comparison Box - BRUTAL */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
            Compare e Decida:
          </h3>

          <div className="space-y-6 mb-8">
            {/* CFM Process Cost */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xl font-black text-red-900 mb-2">
                    1 Processo CFM
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Multa:</span>
                      <span className="font-black text-red-600">R$ 10-50k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Advogado:</span>
                      <span className="font-black text-red-600">R$ 10-20k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Estresse:</span>
                      <span className="font-black text-red-600">6-12 meses</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Reputação:</span>
                      <span className="font-black text-red-600">Manchada</span>
                    </div>
                    <div className="border-t-2 border-red-300 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">CUSTO TOTAL:</span>
                        <span className="text-3xl font-black text-red-600">R$ 65.000+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MedMarketingAI+ */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xl font-black text-green-900 mb-2">
                    MedMarketingAI+
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Validação automática:</span>
                      <span className="font-black text-green-600">Vitalício</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Proteção CFM:</span>
                      <span className="font-black text-green-600">24/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Risco de processo:</span>
                      <span className="font-black text-green-600">ZERO</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Paz de espírito:</span>
                      <span className="font-black text-green-600">Para sempre</span>
                    </div>
                    <div className="border-t-2 border-green-300 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">INVESTIMENTO:</span>
                        <span className="text-3xl font-black text-green-600">R$ 997</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300 mb-8">
            <p className="text-2xl font-black text-gray-900 mb-2">
              Diferença: <span className="text-green-600">R$ 64.003 economizados</span>
            </p>
            <p className="text-lg text-gray-700">
              + Sua paz de espírito + Sua reputação protegida
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300">
            <p className="text-xl text-gray-700 mb-2">Proteção vitalícia por apenas:</p>
            <p className="text-6xl md:text-7xl font-black text-green-600 mb-4">
              R$ 997
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
              O que você ganha AGORA:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Validador CFM Automático</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sistema de Alertas em Tempo Real</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">165 Assistentes IA Especializados</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Base Legal CFM 2.336/2023</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sugestões Éticas Automáticas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Atualizações Vitalícias</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Comunidade Exclusiva</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Garantia Dupla de Proteção</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToTop}
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black text-2xl md:text-3xl px-8 py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-6"
          >
            <Zap className="w-8 h-8" />
            GARANTIR PROTEÇÃO VITALÍCIA
            <ArrowRight className="w-8 h-8" />
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Pagamento Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Acesso Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Garantia Dupla</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span className="text-gray-600 font-bold">Zero Processos</span>
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
