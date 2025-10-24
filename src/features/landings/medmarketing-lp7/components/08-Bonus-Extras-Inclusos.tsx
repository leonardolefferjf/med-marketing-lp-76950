import React, { useEffect, useState } from 'react';
import { 
  Gift, Award, Clock, Check, Users, ArrowRight, 
  Sparkles, Shield, TrendingUp, Zap, AlertCircle,
  DollarSign, X
} from 'lucide-react';
import { bonusImages } from '@/assets/index';

export default function BonusSection() {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer real até 23:59 de hoje
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    const dateString = tomorrow.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.querySelector(
      '#oferta-section, .oferta-section, #oferta, .oferta'
    );
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg animate-pulse">
            <Gift className="w-4 h-4" />
            Bônus Exclusivos • Só Hoje
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 px-4">
            3 Bônus{' '}
            <span className="bg-yellow-400 text-black px-3 py-2 rounded-lg inline-block">
              Exclusivos
            </span>{' '}
            (R$ 1.891)
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Além dos 165 assistentes de IA, você recebe estes 3 bônus{' '}
            <strong className="text-yellow-400">GRÁTIS hoje</strong>
          </p>
        </div>

        {/* Urgência com Countdown REAL - OTIMIZADO */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 border-4 border-red-800 rounded-2xl p-6 md:p-8 mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-red-700 opacity-20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="flex items-center gap-2 text-white font-black text-xl md:text-3xl mb-4 uppercase">
                <AlertCircle className="w-7 h-7 animate-bounce" />
                OFERTA EXPIRA HOJE ÀS 23:59
              </div>
              
              {/* Countdown Timer Real */}
              <div className="flex gap-3 md:gap-4 mb-4">
                <div className="bg-white text-red-600 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                  <div className="text-3xl md:text-5xl font-black">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm font-bold">HORAS</div>
                </div>
                <div className="bg-white text-red-600 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                  <div className="text-3xl md:text-5xl font-black">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm font-bold">MIN</div>
                </div>
                <div className="bg-white text-red-600 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px]">
                  <div className="text-3xl md:text-5xl font-black">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm font-bold">SEG</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/50 rounded-xl p-4 border-2 border-red-400">
              <p className="text-white text-base md:text-lg text-center mb-2">
                Após {currentDate}, estes bônus serão vendidos separadamente por{' '}
                <strong className="text-yellow-400">R$ 1.891</strong>
              </p>
              <p className="text-red-200 text-sm text-center">
                ⚠️ Esta é sua única chance de conseguir TUDO por R$ 997 único
              </p>
            </div>
          </div>
        </div>

        {/* Antes/Depois de ter os bônus - NOVO */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 mb-12 border-2 border-gray-700">
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            O Que Você Perde Se Não Pegar os Bônus Hoje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sem Bônus */}
            <div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-6 h-6 text-red-500" />
                <h4 className="text-lg font-black text-red-400">SEM OS BÔNUS</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>• Fica travado se tiver dúvidas (sem assistente 24/7)</div>
                <div>• Perde tempo criando prompts do zero</div>
                <div>• Não tem networking com outros médicos</div>
                <div>• Demora mais para dominar a ferramenta</div>
                <div className="pt-3 border-t border-red-500/30">
                  <strong className="text-red-400">Perde: R$ 1.891 em bônus</strong>
                </div>
              </div>
            </div>

            {/* Com Bônus */}
            <div className="bg-green-900/20 border-2 border-green-500/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-6 h-6 text-green-500" />
                <h4 className="text-lg font-black text-green-400">COM OS BÔNUS</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-300">
                <div>✓ Assistente IA responde qualquer dúvida em segundos</div>
                <div>✓ Prompts prontos para usar em qualquer IA</div>
                <div>✓ Networking com médicos de todo Brasil</div>
                <div>✓ Domina tudo 3x mais rápido</div>
                <div className="pt-3 border-t border-green-500/30">
                  <strong className="text-green-400">Ganho: R$ 1.891 GRÁTIS hoje</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Três Bônus Grid - OTIMIZADO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          
          {/* Bônus 1 - MagicMed - OTIMIZADO */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500 hover:scale-105 transition-transform relative">
            {/* Badge Exclusivo */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-lg animate-pulse">
              EXCLUSIVO HOJE
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS #1</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">R$ 497</span>
                <span className="text-green-400 font-black text-2xl">GRÁTIS</span>
              </div>
            </div>
            
            <div className="mb-6 relative group">
              <img 
                src={bonusImages.bonusArtigoAI3} 
                alt="MagicMed Prompts Preview" 
                className="w-full rounded-xl shadow-lg transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              MagicMed Prompts
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Gerador de Prompts para Marketing Médico
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Comandos otimizados</strong> para IA médica em segundos
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Funciona com <strong className="text-white">qualquer IA</strong> (ChatGPT, Claude, Gemini)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Interface intuitiva - <strong className="text-white">zero curva</strong>
                </span>
              </div>
            </div>
            
            {/* Preview de uso - NOVO */}
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-2 font-bold">💡 EXEMPLO DE USO:</div>
              <div className="bg-gray-950 rounded-lg p-3 space-y-2 shadow-inner">
                <div className="bg-green-900/30 border-l-4 border-green-500 p-3 text-xs text-gray-300">
                  <strong>Você:</strong> "Post sobre hipertensão"
                </div>
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-3 text-xs text-gray-300">
                  <strong>MagicMed:</strong> Gera prompt completo validado CFM
                </div>
              </div>
            </div>
          </div>

          {/* Bônus 2 - Hotmart Tutor - OTIMIZADO */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500 hover:scale-105 transition-transform relative">
            {/* Badge Exclusivo */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-lg animate-pulse">
              EXCLUSIVO HOJE
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS #2</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">R$ 397</span>
                <span className="text-green-400 font-black text-2xl">GRÁTIS</span>
              </div>
            </div>
            
            <div className="mb-6 relative group">
              <img 
                src={bonusImages.bonusHotmartTutor3} 
                alt="Hotmart Tutor Preview" 
                className="w-full rounded-xl shadow-lg transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              Hotmart Tutor IA
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Agente Inteligente 24/7 na Área de Membros
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Respostas automáticas 24h</strong> sobre marketing médico
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Treinado com <strong className="text-white">todo conteúdo</strong> do MedMarketingAI+
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Pergunte sobre <strong className="text-white">posts, campanhas, CFM</strong>
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Destrava <strong className="text-white">dúvidas</strong> em segundos
                </span>
              </div>
            </div>

            {/* Benefício destacado - NOVO */}
            <div className="bg-blue-900/30 rounded-xl p-4 border-2 border-blue-500">
              <div className="text-center">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-blue-200 font-bold">
                  Nunca mais fique travado esperando suporte
                </div>
              </div>
            </div>
          </div>

          {/* Bônus 3 - Comunidade - OTIMIZADO */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500 hover:scale-105 transition-transform relative">
            {/* Badge Exclusivo */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-lg animate-pulse">
              EXCLUSIVO HOJE
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS #3</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">R$ 997</span>
                <span className="text-green-400 font-black text-2xl">GRÁTIS</span>
              </div>
            </div>
            
            <div className="mb-6 relative group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <Users className="w-24 h-24 text-white opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="text-white font-black text-2xl">Médicos</div>
                  <div className="text-white/80 text-sm">de Todo Brasil</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              Comunidade Médica Vitalícia
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Grupo Exclusivo de Médicos Empreendedores
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Network exclusivo</strong> com médicos de +50 especialidades
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Compartilhe <strong className="text-white">estratégias e cases</strong> reais de sucesso
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Suporte mútuo</strong> de médicos para médicos
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Atualizações de <strong className="text-white">novos assistentes e recursos</strong>
                </span>
              </div>
            </div>

            {/* Benefício destacado - NOVO */}
            <div className="bg-purple-900/30 rounded-xl p-4 border-2 border-purple-500">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-purple-200 font-bold">
                  Aprenda com quem já está tendo resultados
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stack de Valor Visual - NOVO */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-10 mb-10 border-2 border-gray-700">
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            Quanto Vale Tudo Isso?
          </h3>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
              <span className="text-gray-300">MedMarketingAI+ (165 Assistentes)</span>
              <span className="text-white font-bold">R$ 1.994</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
              <span className="text-gray-300">MagicMed Prompts</span>
              <span className="text-yellow-400 font-bold">+ R$ 497</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
              <span className="text-gray-300">Hotmart Tutor IA</span>
              <span className="text-yellow-400 font-bold">+ R$ 397</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
              <span className="text-gray-300">Comunidade Vitalícia</span>
              <span className="text-yellow-400 font-bold">+ R$ 997</span>
            </div>
            
            <div className="border-t-4 border-yellow-500 pt-4">
              <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6">
                <span className="text-black font-black text-xl">VALOR TOTAL:</span>
                <span className="text-black font-black text-3xl">R$ 3.885</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <div className="text-gray-400 text-lg line-through mb-2">De R$ 3.885</div>
              <div className="text-white text-2xl md:text-4xl font-black mb-2">
                Por apenas R$ 997
              </div>
              <div className="text-green-400 text-xl font-bold">
                ECONOMIA DE R$ 2.888 (74% OFF)
              </div>
            </div>
          </div>
        </div>

        {/* Total dos Bônus - OTIMIZADO */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 border-4 border-green-800 rounded-2xl p-6 md:p-10 shadow-2xl mb-10">
          <div className="text-center text-white">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Total em Bônus: R$ 1.891
            </h3>
            <div className="text-3xl md:text-5xl font-black mb-4">
              Tudo GRÁTIS para Você Hoje!
            </div>
            <p className="text-lg md:text-xl text-green-100 mb-6">
              Três recursos poderosos que potencializam ainda mais seu marketing médico
            </p>
            
            {/* Trust elements */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% Seguro</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Acesso Imediato</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Oferta Expira Hoje</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final Urgente - NOVO */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-10 text-center shadow-2xl border-4 border-red-800">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
            ⚠️ Não Perca R$ 1.891 em Bônus
          </h3>
          <p className="text-lg md:text-xl text-red-100 mb-6">
            Depois de hoje, estes bônus não estarão mais disponíveis gratuitamente.
            Garanta agora enquanto ainda dá tempo.
          </p>
          
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-red-700 font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4"
          >
            GARANTIR BÔNUS AGORA
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-sm text-red-200">
            ⏰ Restam apenas{' '}
            <strong className="text-white text-lg">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </strong>{' '}
            para garantir
          </p>
        </div>

      </div>
    </section>
  );
}
