import React, { useEffect, useState } from 'react';
import { Gift, Award } from 'lucide-react';
import { bonusImages } from '@/assets/index';

const BonusSection = () => {
  const [currentDate, setCurrentDate] = useState('');
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
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const dateString = tomorrow.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);
  }, []);
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-amber-100 text-gray-800 px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            BÔNUS EXCLUSIVO INCLUÍDO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Bônus <span className="text-amber-400">Exclusivos</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Além do acesso vitalício ao <strong className="text-white">ArtigoAI+</strong>, você também recebe estes bônus
          </p>
        </div>

        {/* Urgência Melhorada */}
        <div className="bg-red-950 border border-red-800 rounded-lg p-6 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-900 opacity-10 animate-pulse"></div>
          <div className="relative z-10">
            <div className="text-red-300 font-bold text-xl mb-2 uppercase flex items-center justify-center gap-2">
              ⏰ OFERTA EXPIRA HOJE
            </div>
            <p className="text-gray-300 text-lg">
              Este bônus é <strong className="text-white">EXCLUSIVO</strong> para quem adquire até {currentDate}
            </p>
            <div className="bg-red-800 text-red-100 inline-block px-4 py-1 rounded text-sm font-bold mt-3">
              Após esta data vendidos separadamente
            </div>
          </div>
        </div>

        {/* Dois Bônus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bônus 1 - MagicMed */}
          <div className="bg-gray-800 border border-amber-600 rounded-lg p-6 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-amber-400 font-bold text-sm uppercase">BÔNUS EXCLUSIVO 1</div>
              <div className="text-amber-400 font-bold text-xl mb-2">Valor: R$ 497</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusArtigoAI3} 
                alt="MagicMed Prompts Preview" 
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              MagicMed Prompts
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              O Gerador de Prompts Médicos Mais Avançado do Brasil
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm"><strong className="text-white">Gere comandos otimizados</strong> para IA médica em segundos</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Funciona com <strong className="text-white">qualquer IA</strong> (ChatGPT, Claude, Gemini)</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Interface médica intuitiva - <strong className="text-white">zero curva de aprendizado</strong></span>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 mt-6">
              
              <div className="bg-white rounded p-3 space-y-2">
                <div className="bg-emerald-50 border-l-2 border-emerald-500 p-2 text-xs text-gray-800">
                  <strong>🩺 Prompt Médico:</strong> "Gere um protocolo de diagnóstico para..."
                </div>
                <div className="bg-blue-50 border-l-2 border-blue-500 p-2 text-xs text-gray-800">
                  <strong>📋 Template Pronto:</strong> "Análise de exames laboratoriais..."
                </div>
                <div className="bg-slate-50 border-l-2 border-slate-500 p-2 text-xs text-gray-800">
                  <strong>⚡ Resultado IA:</strong> "Baseado nos dados apresentados..."
                </div>
              </div>
            </div>
          </div>

          {/* Bônus 2 - Hotmart Tutor */}
          <div className="bg-gray-800 border border-amber-600 rounded-lg p-6 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-amber-400 font-bold text-sm uppercase">BÔNUS EXCLUSIVO 2</div>
              <div className="text-amber-400 font-bold text-xl mb-2">Valor: R$ 397</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusHotmartTutor3} 
                alt="Hotmart Tutor Preview" 
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              Hotmart Tutor
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Agente Inteligente Integrado à sua Área de Membros
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Respostas automáticas 24h para suas principais dúvidas sobre <strong className="text-white">produção de artigos científicos</strong></span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Treinado com todo o conteúdo do <strong className="text-white">ArtigoAI+</strong> e dos tutoriais da plataforma</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Acesso direto dentro da área de membros: pergunte sobre <strong className="text-white">estruturas, normas, metodologias</strong> e receba orientação imediata</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Foco total em produtividade: enquanto você escreve, o Tutor ajuda a <strong className="text-white">destravar travas técnicas</strong> em segundos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total dos Bônus */}
        <div className="bg-emerald-900 border border-emerald-700 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Total em Bônus: R$ 894 - Tudo GRÁTIS para Você!
            </h3>
            <p className="text-emerald-200 text-lg">
              Dois assistentes poderosos que potencializam ainda mais sua produção científica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
