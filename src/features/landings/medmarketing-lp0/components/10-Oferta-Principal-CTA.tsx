import React, { useEffect, useState } from 'react';
import { 
  Sparkles, Shield, Clock, Check, CreditCard, 
  Lock, TrendingUp, Award 
} from 'lucide-react';

export default function OfferSection() {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Data de expiração
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 59);
    
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    const dateString = tomorrow.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);

    // Countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = tomorrow.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCheckout = () => {
    window.open('https://pay.hotmart.com/S100265658M?checkoutMode=10&off=h5dfkyd7&offDiscount=DESCONTO', '_blank');
  };

  return (
    <section 
      id="oferta-section" 
      className="oferta-section bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg animate-pulse">
            <Sparkles className="w-5 h-5" />
            OFERTA ESPECIAL LIMITADA
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Garanta Seu Acesso{' '}
            <span className="bg-white px-3 py-1 rounded-lg inline-block">Vitalício</span>{' '}
            Agora
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-3xl mx-auto font-bold">
            165 Assistentes de IA + Bônus Exclusivos
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-8 mb-12 shadow-2xl">
          <div className="text-center mb-6">
            <Clock className="w-12 h-12 text-red-400 mx-auto mb-3" />
            <h3 className="text-xl md:text-2xl font-black mb-2">
              Oferta Expira em:
            </h3>
            <p className="text-gray-400 text-sm">
              {currentDate} às 23:59
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Horas</div>
            </div>
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Minutos</div>
            </div>
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Segundos</div>
            </div>
          </div>
        </div>

        {/* Oferta Principal */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-green-600 mb-8">
          
          {/* Preço Antigo Riscado */}
          <div className="text-center mb-8">
            <div className="text-gray-500 text-xl md:text-2xl line-through mb-2">
              De R$ 1.994
            </div>
            <div className="text-red-600 font-black text-lg md:text-xl mb-4">
              75% OFF - Apenas Hoje
            </div>
          </div>

          {/* Preço Atual */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 mb-8 text-center">
            <div className="text-lg md:text-xl font-bold mb-2">
              Por apenas
            </div>
            <div className="text-6xl md:text-8xl font-black mb-4">
              R$ 497
            </div>
            <div className="text-xl md:text-2xl font-bold mb-4">
              ou 12x de R$ 49,32
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold text-sm md:text-base">
              <Award className="w-5 h-5" />
              ACESSO VITALÍCIO • Pague 1x, use para sempre
            </div>
          </div>

          {/* Economia */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8 text-center">
            <div className="text-yellow-700 font-black text-2xl md:text-3xl mb-2">
              Você Economiza R$ 1.497
            </div>
            <p className="text-gray-700 font-semibold">
              E nunca mais paga nada • Zero mensalidades
            </p>
          </div>

          {/* O Que Está Incluso */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-6">
              O Que Você Recebe Hoje:
            </h3>
            
            <div className="space-y-3">
              {[
                '165 Assistentes de IA Especializados (R$ 1.994)',
                'Dashboard Organizador Completo (R$ 497)',
                'Validação CFM Automática (R$ 697)',
                'Suporte Vitalício (R$ 997)',
                'Atualizações Gratuitas (R$ 497)',
                'Bônus MagicMed Prompts (R$ 497)',
                'Bônus Hotmart Tutor (R$ 397)'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-6 text-center mt-6">
              <div className="text-lg font-bold mb-2">Valor Total do Pacote:</div>
              <div className="text-4xl md:text-5xl font-black mb-2">R$ 5.576</div>
              <div className="text-xl font-bold">Seu preço hoje: R$ 497</div>
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl md:text-3xl py-6 md:py-8 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all mb-6"
          >
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-8 h-8" />
              GARANTIR MINHA VAGA AGORA
            </div>
          </button>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-semibold">100% Validado CFM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Pagamento Seguro</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Se por qualquer motivo você não estiver satisfeito, devolvemos{' '}
              <strong className="text-gray-900">100% do seu dinheiro</strong> em até 30 dias. Sem perguntas, sem burocracia.
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm mt-4">
              Risco ZERO para você
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
