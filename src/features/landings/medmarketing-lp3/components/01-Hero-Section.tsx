import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { dashboardComMenu } from '@/assets/app-screenshots';
import { Shield, Zap, Users, Star, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [vagas, setVagas] = useState(84);

  // Preload critical resources
  useEffect(() => {
    const preloadComponents = [
      () => import('./02-Problems-Section'),
      () => import('./03-Solucao-Apresentacao-Produto')
    ];
    setTimeout(() => {
      preloadComponents.forEach(load => {
        load().catch(() => {});
      });
    }, 1000);
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
        top: window.innerHeight * 1.5,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    const dateString = today.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);
  }, []);

  return (
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Barra de Urgência Fixa */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-50 text-center text-sm font-bold">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>⚠️ OFERTA VITALÍCIA TERMINA {currentDate} às 23:59 | {vagas}% das vagas preenchidas</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mt-8">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={mainImages.logoMedMarketing} 
            alt="MedMarketingAI+ Logo" 
            className="mx-auto h-20 w-auto" 
            loading="eager" 
          />
        </div>
        
        {/* Badge CFM */}
        <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg animate-pulse">
          <Shield className="w-4 h-4" />
          100% Validado CFM 2.336/2023
        </div>
        
        {/* Headline Principal - OTIMIZADA */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] mb-6 px-4">
          165 Assistentes de IA Enchem{' '}
          <span className="bg-white px-3 py-1 rounded-lg inline-block">
            Sua Agenda
          </span>{' '}
          Enquanto Você Atende Pacientes
        </h1>
        
        {/* Subheadline - OTIMIZADA */}
        <p className="text-xl md:text-2xl lg:text-3xl text-black font-bold leading-relaxed mb-4 max-w-4xl mx-auto px-4">
          De agenda{' '}
          <span className="bg-red-600 text-white px-3 py-1 rounded-lg">
            40-60% vazia
          </span>{' '}
          →{' '}
          <span className="bg-green-600 text-white px-3 py-1 rounded-lg">
            90-100% lotada
          </span>{' '}
          em 60-90 dias
        </p>

        <p className="text-lg md:text-xl text-black/90 font-semibold mb-8 max-w-3xl mx-auto px-4">
          Sem cursos. Agentes de IA que fazem tudo para você.
        </p>

        {/* Trust Bar Compacto - NOVO */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm font-bold text-black">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>165 Assistentes + 12 Módulos</span>
          </div>
          <div className="hidden md:block text-black/30">•</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>IA que Recomenda os Melhores</span>
          </div>
          <div className="hidden md:block text-black/30">•</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>100% Compliance CFM</span>
          </div>
          <div className="hidden md:block text-black/30">•</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>R$ 0/mês para sempre</span>
          </div>
        </div>

        {/* Preview do Dashboard Real */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto shadow-2xl border-2 border-white/50">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold">
              <Zap className="w-4 h-4" />
              Plataforma Real em Funcionamento
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={dashboardComMenu}
              alt="Dashboard MedMarketingAI+ com 165 Assistentes IA e menu de navegação"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <p className="text-sm text-gray-700 text-center mt-3 font-semibold">
            ↑ Plataforma real: acesse 165 assistentes IA via ChatGPT + 12 módulos exclusivos no app
          </p>
        </div>

        {/* CTA Principal - OTIMIZADO */}
        <div className="mb-6">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-black text-xl md:text-2xl px-10 md:px-16 py-5 md:py-7 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 hover:shadow-3xl"
          >
            GARANTIR ACESSO VITALÍCIO
            <ArrowRight className="w-7 h-7" />
          </button>
          
          {/* Microcopy abaixo do CTA - NOVO */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-sm font-semibold text-black">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-700" />
              <span>Acesso imediato</span>
            </div>
            <span className="text-black/30">•</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-700" />
              <span>Paga 1x, usa para sempre</span>
            </div>
            <span className="text-black/30">•</span>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-700" />
              <span>Garantia 30 dias</span>
            </div>
          </div>
        </div>

        {/* Preço Destaque - MOVIDO PARA DEPOIS DO CTA */}
        <div className="bg-white/95 backdrop-blur-sm border-4 border-green-600 rounded-2xl p-6 md:p-8 mb-8 max-w-xl mx-auto shadow-2xl">
          <div className="text-green-700 text-sm font-black mb-1 uppercase tracking-wide">
            Investimento Único
          </div>
          <div className="text-gray-400 line-through text-lg mb-1">
            De R$ 1.994
          </div>
          <div className="text-green-700 font-black mb-2">
            <span className="text-5xl md:text-6xl">R$ 997</span>
            <span className="text-xl md:text-2xl ml-2 align-middle">VITALÍCIO</span>
          </div>
          <div className="text-sm text-gray-600 font-semibold">
            ou 12x R$ 83,08 sem juros
          </div>
        </div>

        {/* CTA Secundário - MELHORADO */}
        <button
          onClick={scrollToOffer}
          className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-black font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg border-2 border-black/20 hover:border-black mb-8"
        >
          Ver Como Funciona
          <ArrowRight className="w-5 h-5 rotate-90" />
        </button>

        {/* Três Benefícios Principais - SIMPLIFICADO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <div className="font-black text-gray-900 text-base mb-1">
              Zero Risco CFM
            </div>
            <div className="text-xs text-gray-600">
              Validado pela resolução 2.336/2023
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-10 h-10 text-blue-600" />
            </div>
            <div className="font-black text-gray-900 text-base mb-1">
              Zero Curva
            </div>
            <div className="text-xs text-gray-600">
              3 cliques = conteúdo pronto
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <div className="font-black text-gray-900 text-base mb-1">
              Zero Mensalidades
            </div>
            <div className="text-xs text-gray-600">
              Paga 1x, usa para sempre
            </div>
          </div>
        </div>
        
        {/* Urgência - OTIMIZADO */}
        <div className="bg-red-600 text-white rounded-xl p-5 md:p-6 max-w-lg mx-auto shadow-2xl border-2 border-red-700">
          <div className="font-black text-base md:text-lg mb-2">
            ⚠️ APENAS 50 VAGAS VITALÍCIAS
          </div>
          <div className="text-sm mb-3">
            Após isso, volta para assinatura de R$ 497/mês
          </div>
          <div className="bg-white/20 rounded-full h-3 overflow-hidden mb-2">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500" 
              style={{ width: `${vagas}%` }}
            ></div>
          </div>
          <div className="text-xs font-bold">
            {vagas}% já preenchidas • Restam apenas {100 - vagas}%
          </div>
        </div>
      </div>
    </section>
  );
};
