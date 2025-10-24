import React from 'react';
import { Gift, Sparkles, GraduationCap, Users } from 'lucide-react';

export const BonusSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-black mb-4">
            <Gift className="w-5 h-5" />
            BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Bônus Exclusivos da Oferta Vitalícia
          </h2>
          <p className="text-2xl font-black text-green-600">
            +R$ 1.891 de Valor • 100% Grátis
          </p>
        </div>

        {/* Bonuses */}
        <div className="space-y-6 mb-12">
          {/* Bonus 1 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 flex-shrink-0">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                    Bônus #1: MagicMed Prompts
                  </h3>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-black">
                    Valor: R$ 497
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-3">
                  Biblioteca com 200+ prompts secretos para criar qualquer tipo de conteúdo médico em segundos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Posts que educam e convertem
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Stories que engajam
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Reels virais para médicos
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    E-mails que agendam consultas
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-4 flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                    Bônus #2: Tutor IA 24/7
                  </h3>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-black">
                    Valor: R$ 397
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-3">
                  Assistente IA exclusivo que responde TODAS suas dúvidas sobre marketing médico, a qualquer hora.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Dúvidas sobre compliance CFM
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Como criar estratégias específicas
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Análise de concorrentes
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Otimização de perfil e conteúdo
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 flex-shrink-0">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                    Bônus #3: Comunidade Vitalícia
                  </h3>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-black">
                    Valor: R$ 997
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-3">
                  Acesso vitalício à comunidade exclusiva de médicos que dominam seu próprio marketing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Networking com médicos de sucesso
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Troca de experiências e estratégias
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Conteúdos e atualizações exclusivas
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-black">✓</span>
                    Suporte da equipe e da comunidade
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-xl text-white/90 mb-2">Valor Total dos Bônus</p>
          <p className="text-5xl md:text-6xl font-black text-white mb-4">
            R$ 1.891
          </p>
          <p className="text-2xl font-black text-yellow-300">
            100% GRÁTIS na Oferta Vitalícia
          </p>
        </div>
      </div>
    </section>
  );
};
