import React, { useEffect, useState } from 'react';
import { Gift, Award, FileText } from 'lucide-react';
import { bonusImages } from '@/assets/index';

const BonusSection = () => {
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
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-amber-100 text-gray-800 px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            BÔNUS EXCLUSIVOS HOJE
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Além dos <span className="text-amber-400">165 assistentes</span> você recebe
          </h2>
        </div>

        {/* Urgência */}
        <div className="bg-red-950 border border-red-800 rounded-lg p-6 mb-12">
          <div className="text-red-300 font-bold text-xl mb-2 uppercase">
            ⏰ OFERTA EXPIRA HOJE
          </div>
          <p className="text-gray-300 text-lg">
            Estes bônus são <strong className="text-white">EXCLUSIVOS</strong> para quem adquire até {currentDate}
          </p>
        </div>

        {/* Três Bônus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Bônus 1 */}
          <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-amber-400 font-bold text-sm uppercase">BÔNUS 1</div>
              <div className="text-amber-400 font-bold text-xl mb-2">Valor: R$ 497</div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              MagicMed Prompts
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Gerador de prompts médicos avançados. Cria prompts customizados para qualquer situação. Otimiza resultados dos assistentes. Acesso vitalício.
            </p>
          </div>

          {/* Bônus 2 */}
          <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-amber-400 font-bold text-sm uppercase">BÔNUS 2</div>
              <div className="text-amber-400 font-bold text-xl mb-2">Valor: R$ 397</div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Hotmart Tutor IA
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Agente inteligente integrado à área de membros. Tira dúvidas 24/7 sobre os assistentes. Tutoriais personalizados. Suporte instantâneo.
            </p>
          </div>

          {/* Bônus 3 */}
          <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-amber-400 font-bold text-sm uppercase">BÔNUS 3</div>
              <div className="text-amber-400 font-bold text-xl mb-2">Valor: R$ 297</div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              50 Templates Canva Médicos
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Posts prontos para Instagram/Facebook. Editáveis no Canva. Design profissional validado CFM. Atualizações mensais.
            </p>
          </div>
        </div>

        {/* Total dos Bônus */}
        <div className="bg-emerald-900 border border-emerald-700 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              VALOR TOTAL DOS BÔNUS: R$ 1.191
            </h3>
            <p className="text-lg text-emerald-200 mb-2">
              SEU INVESTIMENTO HOJE: R$ 497
            </p>
            <p className="text-xl font-bold text-white">
              VOCÊ ECONOMIZA: R$ 2.688 (produto + bônus)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
