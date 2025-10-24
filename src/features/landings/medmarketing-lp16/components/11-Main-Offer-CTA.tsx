import React, { useEffect, useState } from 'react';
import { Clock, CheckCircle2, ArrowRight, Shield, Zap, Lock, DollarSign, Calendar } from 'lucide-react';

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

  return (
    <section id="oferta-section" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Timer */}
        <div className={`${isUrgent ? 'bg-red-600 animate-pulse' : 'bg-black/40'} backdrop-blur-sm rounded-2xl p-6 mb-12 text-center border-4 border-white/30`}>
          <div className="flex items-center justify-center gap-4 mb-3">
            <Clock className={`w-8 h-8 text-yellow-300 ${isUrgent ? 'animate-bounce' : ''}`} />
            <p className="text-2xl md:text-3xl font-black text-white">
              OFERTA VITALÍCIA TERMINA EM:
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-white rounded-xl px-6 py-4">
              <p className="text-5xl font-black text-gray-900">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-xs font-bold text-gray-600">HORAS</p>
            </div>
            <span className="text-4xl font-black text-white">:</span>
            <div className="bg-white rounded-xl px-6 py-4">
              <p className="text-5xl font-black text-gray-900">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-xs font-bold text-gray-600">MIN</p>
            </div>
            <span className="text-4xl font-black text-white">:</span>
            <div className="bg-white rounded-xl px-6 py-4">
              <p className="text-5xl font-black text-gray-900">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-xs font-bold text-gray-600">SEG</p>
            </div>
          </div>
        </div>

        {/* Time Value Comparison */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
            Quanto Vale Seu Tempo?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <Calendar className="w-12 h-12 text-red-600 mb-3" />
              <p className="text-xl font-black text-gray-900 mb-2">Marketing Manual</p>
              <p className="text-4xl font-black text-red-600 mb-2">468h/ano</p>
              <p className="text-gray-700 mb-4">Se você cobra R$ 125/consulta (30 min):</p>
              <p className="text-3xl font-black text-red-600">R$ 58.500/ano</p>
              <p className="text-sm text-gray-600">Valor do tempo perdido</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <Zap className="w-12 h-12 text-green-600 mb-3" />
              <p className="text-xl font-black text-gray-900 mb-2">MedMarketingAI+</p>
              <p className="text-4xl font-black text-green-600 mb-2">17h/ano</p>
              <p className="text-gray-700 mb-4">Investe 1x e recupera:</p>
              <p className="text-3xl font-black text-green-600">451 horas</p>
              <p className="text-sm text-gray-600">= 18.7 dias de vida por ano</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
            <p className="text-2xl font-black text-white">
              Você Recupera R$ 56.375 em Tempo TODO ANO
            </p>
          </div>
        </div>

        {/* Main Offer Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-400">
          {/* Headline */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-full mb-4">
              <Lock className="w-5 h-5 text-gray-900" />
              <span className="font-black text-gray-900">ACESSO VITALÍCIO</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Recupere Sua Vida Hoje
            </h3>
            <p className="text-xl text-gray-700">
              Pagamento único. Zero mensalidades. Acesso para sempre.
            </p>
          </div>

          {/* Value Stack */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border-2 border-gray-200">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">164 Assistentes IA (24/7)</span>
                <span className="font-black text-gray-900">R$ 12.997</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">Plataforma Completa</span>
                <span className="font-black text-gray-900">R$ 4.997</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">Validação CFM Automática</span>
                <span className="font-black text-gray-900">R$ 2.997</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">Módulos de Treinamento</span>
                <span className="font-black text-gray-900">R$ 1.997</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">Comunidade Exclusiva</span>
                <span className="font-black text-gray-900">R$ 997</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700 font-bold">Bônus (3 itens)</span>
                <span className="font-black text-gray-900">R$ 991</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-xl font-black text-gray-900">VALOR TOTAL:</span>
                <span className="text-3xl font-black text-gray-900 line-through">R$ 24.976</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">De R$ 24.976 por apenas:</p>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-4 shadow-xl">
              <p className="text-white text-2xl font-bold mb-2">12x de</p>
              <p className="text-white text-6xl md:text-7xl font-black mb-2">R$ 83,08</p>
              <p className="text-green-200 text-xl">ou R$ 997 à vista</p>
            </div>
            <p className="text-gray-600">
              <DollarSign className="w-5 h-5 inline text-green-600" />
              Menos de R$ 3/dia para recuperar sua vida
            </p>
          </div>

          {/* Giant CTA */}
          <a
            href="#checkout"
            className="block w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black text-2xl md:text-3xl px-12 py-8 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-6 text-center border-4 border-orange-300"
          >
            <span className="flex items-center justify-center gap-3">
              → QUERO RECUPERAR MINHA VIDA ←
            </span>
          </a>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3 border border-green-200">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-bold text-green-900">Garantia 30 dias</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3 border border-blue-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-bold text-blue-900">Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 rounded-lg p-3 border border-purple-200">
              <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-sm font-bold text-purple-900">Acesso imediato</span>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-gray-600">
            Compra 100% segura • Dados criptografados • Garantia incondicional
          </p>
        </div>

        {/* Bottom urgency */}
        <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30">
          <p className="text-xl font-black text-white">
            Cada dia que passa = Mais 1.3 horas desperdiçadas com marketing manual
          </p>
        </div>
      </div>
    </section>
  );
};
