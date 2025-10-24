import React, { useEffect, useState } from 'react';
import { Shield, Zap, TrendingUp, Clock, Users, Star, CheckCircle2, BarChart3 } from 'lucide-react';
import { mainImages } from '@/assets/index';

export default function HeroSection() {
  const [currentDate, setCurrentDate] = useState('');

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
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Barra de Urgência Fixa */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white py-3 px-4 z-50 text-center text-xs md:text-sm font-semibold">
        <Clock className="w-4 h-4 inline mr-2" />
        Oferta termina em {currentDate} às 23:59 • Lote vitalício 84% preenchido
      </div>

      {/* Hero Section - Amarelo Clean */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 min-h-screen flex items-center px-4 py-24 pt-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Logo */}
          <div className="mb-8 text-center">
            <img
              src={mainImages.logoMedMarketing}
              alt="MedMarketingAI+ — Marketing Médico Validado CFM"
              className="mx-auto w-32 h-32 md:w-40 md:h-40"
            />
          </div>

          {/* Badge CFM - Minimalista */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              <Shield className="w-5 h-5" />
              100% Validado CFM
            </div>
          </div>

          {/* Headline Principal - Clean */}
          <h1 className="text-center text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8 max-w-4xl mx-auto">
            <span className="bg-white px-3 py-1 rounded-lg inline-block mb-2">Encha Sua Agenda</span> com{' '}
            <span className="bg-white px-3 py-1 rounded-lg inline-block">165 Assistentes de IA</span>{' '}
            Trabalhando 24/7
          </h1>

          {/* Sub-headline - Mais Clean */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-4 font-bold">
              De agenda <span className="text-red-700">40-60% vazia</span> para{' '}
              <span className="text-green-700">lotada em 60-90 dias</span>
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Automação completa de marketing médico em 10 minutos. Enquanto você atende, 165 assistentes criam posts, stories e campanhas.
            </p>
          </div>

          {/* 3 Benefícios - Ícones Minimalistas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Shield className="w-10 h-10 text-green-600 mb-3" />
              <div className="font-bold text-gray-900 text-sm">Zero violar CFM</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Zap className="w-10 h-10 text-blue-600 mb-3" />
              <div className="font-bold text-gray-900 text-sm">Zero curva de aprendizado</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <TrendingUp className="w-10 h-10 text-purple-600 mb-3" />
              <div className="font-bold text-gray-900 text-sm">Zero mensalidades</div>
            </div>
          </div>

          {/* Prova Social - Clean com Ícones */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-black text-gray-900">42</div>
                <div className="text-xs text-gray-600">Médicos ativos</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-3xl font-black text-gray-900">4.9</div>
                <div className="text-xs text-gray-600">Avaliação média</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-black text-gray-900">+50</div>
                <div className="text-xs text-gray-600">Especialidades</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-black text-gray-900">CFM</div>
                <div className="text-xs text-gray-600">Validado 2.336/2023</div>
              </div>
            </div>
          </div>

          {/* Box de Preço */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-2xl p-6 mb-10 max-w-2xl mx-auto shadow-xl">
            <div className="text-center">
              <div className="text-green-700 font-bold text-lg md:text-xl mb-2">
                De R$ 1.994 por apenas R$ 497
              </div>
              <div className="text-2xl md:text-3xl font-black text-green-700 mb-2">
                (acesso vitalício)
              </div>
              <div className="text-sm text-gray-700">
                Economia de R$ 1.497 • Desconto de 75%
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4 max-w-md mx-auto mb-10">
            <button 
              onClick={scrollToOffer}
              className="w-full bg-black hover:bg-gray-900 text-white font-black text-lg md:text-xl py-5 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
            >
              GARANTIR MINHA VAGA AGORA
            </button>
            
            <button 
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              className="w-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 font-bold text-base py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Ver Como Funciona
            </button>
          </div>

          {/* Urgência e Escassez */}
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
              <div className="text-red-700 font-semibold text-sm flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Oferta termina: {currentDate} às 23:59
              </div>
              <div className="text-red-600 text-xs mt-1 text-center">
                Após esse prazo, bônus e condições podem mudar
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
              <div className="text-yellow-700 font-semibold text-sm flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Lote vitalício: 84% das vagas já preenchidas
              </div>
              <div className="bg-yellow-200 rounded-full h-2 mt-2">
                <div className="bg-yellow-500 rounded-full h-2" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
