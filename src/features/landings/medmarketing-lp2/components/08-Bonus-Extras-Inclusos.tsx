import React, { useEffect, useState } from 'react';
import { Gift, Award, Clock, Check, Users } from 'lucide-react';
import { bonusImages } from '@/assets/index';

export default function BonusSection() {
  const [currentDate, setCurrentDate] = useState('');

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
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <Gift className="w-5 h-5" />
            BÔNUS EXCLUSIVOS INCLUÍDOS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            3 Bônus <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg inline-block">Exclusivos</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Além do acesso vitalício ao <strong className="text-yellow-400">MedMarketingAI+</strong>, você também recebe estes bônus
          </p>
        </div>

        {/* Urgência */}
        <div className="bg-red-600 border-4 border-red-800 rounded-2xl p-6 mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-red-700 opacity-20 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 text-white font-black text-xl md:text-2xl mb-2 uppercase">
              <Clock className="w-6 h-6" />
              OFERTA EXPIRA HOJE
            </div>
            <p className="text-white text-base md:text-lg mb-3">
              Estes bônus são <strong>EXCLUSIVOS</strong> para quem adquire até {currentDate}
            </p>
            <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full text-sm font-bold">
              Após esta data vendidos separadamente
            </div>
          </div>
        </div>

        {/* Três Bônus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          
          {/* Bônus 1 - MagicMed */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS 1</div>
              <div className="text-yellow-400 font-black text-2xl mb-2">Valor: R$ 497</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusArtigoAI3} 
                alt="MagicMed Prompts Preview" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              MagicMed Prompts
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Gerador de Prompts para Marketing Médico
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Comandos otimizados</strong> para IA médica em segundos
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Funciona com <strong className="text-white">qualquer IA</strong> (ChatGPT, Claude, Gemini)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Interface intuitiva - <strong className="text-white">zero curva</strong>
                </span>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4 mt-6">
              <div className="bg-gray-950 rounded-lg p-3 space-y-2 shadow-inner">
                <div className="bg-green-900/30 border-l-4 border-green-500 p-3 text-xs text-gray-300">
                  <strong>🩺 Exemplo:</strong> "Post Instagram sobre hipertensão..."
                </div>
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-3 text-xs text-gray-300">
                  <strong>📋 Template:</strong> "Sequência de stories..."
                </div>
                <div className="bg-purple-900/30 border-l-4 border-purple-500 p-3 text-xs text-gray-300">
                  <strong>⚡ Resultado:</strong> "Post validado CFM..."
                </div>
              </div>
            </div>
          </div>

          {/* Bônus 2 - Hotmart Tutor */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS 2</div>
              <div className="text-yellow-400 font-black text-2xl mb-2">Valor: R$ 397</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusHotmartTutor3} 
                alt="Hotmart Tutor Preview" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              Hotmart Tutor IA
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Agente Inteligente 24/7 na Área de Membros
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Respostas automáticas 24h</strong> sobre marketing médico
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Treinado com <strong className="text-white">todo conteúdo</strong> do MedMarketingAI+
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Pergunte sobre <strong className="text-white">posts, campanhas, CFM</strong> - orientação imediata
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Destrava <strong className="text-white">dúvidas técnicas</strong> em segundos
                </span>
              </div>
            </div>
          </div>

          {/* Bônus 3 - Comunidade */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-yellow-400 font-bold text-sm uppercase">BÔNUS 3</div>
              <div className="text-yellow-400 font-black text-2xl mb-2">Valor: R$ 997</div>
            </div>
            
            <div className="mb-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-30" />
              </div>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 text-center">
              Comunidade Médica Vitalícia
            </h3>
            <p className="text-gray-300 mb-6 text-center font-semibold">
              Grupo Exclusivo de Médicos Empreendedores
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Network exclusivo</strong> com médicos de +50 especialidades
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Compartilhe <strong className="text-white">estratégias, cases</strong> e resultados reais
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  <strong className="text-white">Suporte mútuo</strong> de médicos para médicos
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Lives exclusivas, <strong className="text-white">atualizações CFM</strong> e novos assistentes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Total dos Bônus */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 border-4 border-green-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Total em Bônus: R$ 1.891
            </h3>
            <div className="text-3xl md:text-5xl font-black mb-4">
              Tudo GRÁTIS para Você!
            </div>
            <p className="text-lg md:text-xl text-green-100">
              Três recursos poderosos que potencializam ainda mais seu marketing médico
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
