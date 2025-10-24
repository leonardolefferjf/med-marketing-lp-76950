import React, { useEffect, useState } from 'react';
import { mainImages } from '@/assets/index';
import { Shield, Zap, Users, Star, CheckCircle2, ArrowRight } from 'lucide-react';
export const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [vagas, setVagas] = useState(84);

  // Preload critical resources
  useEffect(() => {
    const preloadComponents = [() => import('./02-Problems-Section'), () => import('./03-Solucao-Apresentacao-Produto')];
    setTimeout(() => {
      preloadComponents.forEach(load => {
        load().catch(() => {});
      });
    }, 1000);
  }, []);
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
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
  return <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 min-h-screen flex items-center px-4 py-20 relative">
      {/* Barra de Urgência Fixa */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-50 text-center text-sm font-bold">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          <span>⚠️ OFERTA VITALÍCIA TERMINA {currentDate} às 23:59 | {vagas}% das vagas preenchidas</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-8">
        {/* Logo */}
        <div className="mb-8">
          <img src={mainImages.logoMedMarketing} alt="MedMarketingAI+ Logo" className="mx-auto h-24 w-auto" loading="eager" />
        </div>
        
        {/* Badge CFM */}
        <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          <Shield className="w-5 h-5" />
          100% Validado CFM 2.336/2023
        </div>
        
        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl font-black text-black leading-tight mb-6">
          <span className="bg-white px-2 py-1 rounded">Encha Sua Agenda</span> com <span className="bg-white px-2 py-1 rounded">165 Assistentes de IA</span> Trabalhando 24/7 por Você
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-black font-bold leading-relaxed mb-8 max-w-3xl mx-auto">
          De agenda <span className="bg-red-500 text-white px-2 py-1 rounded">40-60% vazia</span> para <span className="bg-green-600 text-white px-2 py-1 rounded">90-100% lotada</span> em 60-90 dias (100% compliance CFM)
        </p>
        
        {/* Principais Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:scale-105 transition-transform border-2 border-white">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="font-black text-gray-900 text-lg mb-1">Zero Risco de Violar CFM</div>
            <div className="text-sm text-gray-700">100% validado pela resolução 2.336/2023</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:scale-105 transition-transform border-2 border-white">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="font-black text-gray-900 text-lg mb-1">Zero Curva de Aprendizado</div>
            <div className="text-sm text-gray-700">3 cliques = conteúdo profissional pronto</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:scale-105 transition-transform border-2 border-white">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="font-black text-gray-900 text-lg mb-1">Zero Mensalidades</div>
            <div className="text-sm text-gray-700">Paga 1x, usa para sempre (vitalício)</div>
          </div>
        </div>
        
        {/* Prova Social */}
        
        
        {/* Preço Destaque */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-2xl">
          <div className="text-gray-700 text-sm font-semibold mb-2">INVESTIMENTO ÚNICO</div>
          <div className="text-gray-500 line-through text-xl mb-2">De R$ 1.994</div>
          <div className="text-green-700 font-black mb-3">
            <span className="text-5xl">R$ 997</span>
            <span className="text-2xl ml-2">VITALÍCIO</span>
          </div>
          <div className="text-sm text-gray-700 font-semibold mb-4">
            ou 12x R$ 99,08 sem juros
          </div>
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
            Acesso Imediato • Sem Mensalidades • Para Sempre
          </div>
        </div>
        
        {/* CTAs */}
        <div className="space-y-4 mb-8">
          <button onClick={scrollToOffer} className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-black text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105">
            GARANTIR MINHA VAGA POR R$ 997
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <button onClick={scrollToOffer} className="block w-full md:inline-block bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg border-2 border-black">
            Ver Como Funciona ⬇️
          </button>
        </div>
        
        {/* Urgência */}
        <div className="bg-red-600 text-white rounded-xl p-6 max-w-md mx-auto shadow-2xl">
          <div className="font-black text-lg mb-2">⚠️ APENAS 50 VAGAS VITALÍCIAS</div>
          <div className="text-sm mb-3">Após isso, volta para modelo de assinatura mensal</div>
          <div className="bg-white rounded-full h-3 overflow-hidden">
            <div className="bg-red-800 h-full rounded-full animate-pulse" style={{
            width: `${vagas}%`
          }}></div>
          </div>
          <div className="text-xs mt-2 font-semibold">{vagas}% das vagas já preenchidas</div>
        </div>
      </div>
    </section>;
};