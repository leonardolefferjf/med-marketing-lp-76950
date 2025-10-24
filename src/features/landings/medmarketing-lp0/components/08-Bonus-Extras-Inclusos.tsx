import React, { useEffect, useState } from 'react';
import { Gift, Award, Clock, Check } from 'lucide-react';
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
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <Gift className="w-5 h-5" />
            BÔNUS EXCLUSIVO INCLUÍDO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Bônus <span className="bg-white px-3 py-1 rounded-lg inline-block">Exclusivos</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-3xl mx-auto">
            Além do acesso vitalício ao <strong className="text-black">MedMarketingAI+</strong>, você também recebe estes bônus
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
              Este bônus é <strong>EXCLUSIVO</strong> para quem adquire até {currentDate}
            </p>
            <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full text-sm font-bold">
              Após esta data vendidos separadamente
            </div>
          </div>
        </div>

        {/* Dois Bônus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10">
          
          {/* Bônus 1 - MagicMed */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-yellow-600 font-bold text-sm uppercase">BÔNUS EXCLUSIVO 1</div>
              <div className="text-yellow-600 font-black text-2xl mb-2">Valor: R$ 497</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusArtigoAI3} 
                alt="MagicMed Prompts Preview" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
              MagicMed Prompts
            </h3>
            <p className="text-gray-700 mb-6 text-center font-semibold">
              O Gerador de Prompts para Marketing Médico Mais Avançado do Brasil
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  <strong className="text-gray-900">Gere comandos otimizados</strong> para IA médica em segundos
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Funciona com <strong className="text-gray-900">qualquer IA</strong> (ChatGPT, Claude, Gemini)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Interface médica intuitiva - <strong className="text-gray-900">zero curva de aprendizado</strong>
                </span>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-4 mt-6">
              <div className="bg-white rounded-lg p-3 space-y-2 shadow-inner">
                <div className="bg-green-50 border-l-4 border-green-500 p-3 text-xs text-gray-800">
                  <strong>🩺 Prompt Médico:</strong> "Crie post Instagram sobre hipertensão para cardiologista..."
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-xs text-gray-800">
                  <strong>📋 Template Pronto:</strong> "Gere sequência de stories educativos..."
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-3 text-xs text-gray-800">
                  <strong>⚡ Resultado IA:</strong> "Post profissional validado CFM..."
                </div>
              </div>
            </div>
          </div>

          {/* Bônus 2 - Hotmart Tutor */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-yellow-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-yellow-600 font-bold text-sm uppercase">BÔNUS EXCLUSIVO 2</div>
              <div className="text-yellow-600 font-black text-2xl mb-2">Valor: R$ 397</div>
            </div>
            
            <div className="mb-6">
              <img 
                src={bonusImages.bonusHotmartTutor3} 
                alt="Hotmart Tutor Preview" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
              Hotmart Tutor
            </h3>
            <p className="text-gray-700 mb-6 text-center font-semibold">
              Agente Inteligente Integrado à sua Área de Membros
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Respostas automáticas 24h para suas principais dúvidas sobre <strong className="text-gray-900">marketing médico</strong>
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Treinado com todo o conteúdo do <strong className="text-gray-900">MedMarketingAI+</strong> e dos tutoriais da plataforma
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Acesso direto dentro da área de membros: pergunte sobre <strong className="text-gray-900">posts, campanhas, CFM</strong> e receba orientação imediata
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  Foco total em produtividade: enquanto você cria conteúdo, o Tutor ajuda a <strong className="text-gray-900">destravar dúvidas técnicas</strong> em segundos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Total dos Bônus */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 border-4 border-green-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-4xl font-black mb-4">
              Total em Bônus: R$ 894
            </h3>
            <div className="text-3xl md:text-5xl font-black mb-4">
              Tudo GRÁTIS para Você!
            </div>
            <p className="text-lg md:text-xl text-green-100">
              Dois assistentes poderosos que potencializam ainda mais seu marketing médico
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
