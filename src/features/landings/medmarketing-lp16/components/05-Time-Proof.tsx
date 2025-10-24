import React from 'react';
import { Clock, TrendingUp, Sparkles, ArrowRight, Calendar, Plane, Mountain, Heart } from 'lucide-react';

export const TimeProof = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Quanto Tempo Você REALMENTE Gasta?
          </h2>
          <p className="text-xl text-gray-700">
            A matemática que vai mudar sua perspectiva sobre automação
          </p>
        </div>

        {/* Time Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* MedMarketingAI+ */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-10 h-10" />
              <h3 className="text-3xl font-black">MedMarketingAI+</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                <p className="text-sm font-bold mb-1 text-green-200">CONFIGURAÇÃO INICIAL</p>
                <p className="text-2xl font-black">10 minutos</p>
                <p className="text-sm text-green-100">Uma vez só, para sempre</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
                <p className="text-sm font-bold mb-1 text-green-200">MANUTENÇÃO SEMANAL</p>
                <p className="text-2xl font-black">10-20 minutos</p>
                <p className="text-sm text-green-100">Revisar e ajustar se quiser</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-4xl md:text-5xl font-black text-green-600 mb-2">
                20 min/semana
              </p>
              <p className="text-gray-700 font-bold">Tempo total investido</p>
            </div>
          </div>

          {/* Manual */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-10 h-10" />
              <h3 className="text-3xl font-black">Marketing Manual</h3>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border-2 border-white/30">
                <p className="font-bold">Planejamento de conteúdo: <span className="float-right">2h</span></p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border-2 border-white/30">
                <p className="font-bold">Criação de posts (7x): <span className="float-right">3h</span></p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border-2 border-white/30">
                <p className="font-bold">Legendas e hashtags: <span className="float-right">1h30</span></p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border-2 border-white/30">
                <p className="font-bold">Design e imagens: <span className="float-right">1h30</span></p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border-2 border-white/30">
                <p className="font-bold">Agendamento e publicação: <span className="float-right">1h</span></p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-4xl md:text-5xl font-black text-red-600 mb-2">
                9h/semana
              </p>
              <p className="text-gray-700 font-bold">Tempo roubado da sua vida</p>
            </div>
          </div>
        </div>

        {/* BIG SAVINGS VISUAL */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <TrendingUp className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
              VOCÊ ECONOMIZA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 text-center">
              <p className="text-yellow-300 font-black text-sm mb-2">POR SEMANA</p>
              <p className="text-5xl md:text-6xl font-black text-white mb-2">8h40min</p>
              <p className="text-white/80">Mais de 1 dia de trabalho</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 text-center">
              <p className="text-yellow-300 font-black text-sm mb-2">POR MÊS</p>
              <p className="text-5xl md:text-6xl font-black text-white mb-2">35h</p>
              <p className="text-white/80">Quase 1 semana inteira</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 text-center">
              <p className="text-yellow-300 font-black text-sm mb-2">POR ANO</p>
              <p className="text-5xl md:text-6xl font-black text-white mb-2">420h</p>
              <p className="text-white/80">Mais de meio mês!</p>
            </div>
          </div>

          <div className="bg-yellow-400 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
            <Calendar className="w-20 h-20 text-gray-900 mx-auto mb-4" />
            <p className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
              17 DIAS
            </p>
            <p className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              DE VIDA COMPLETOS
            </p>
            <p className="text-xl text-gray-800">
              Que você recupera TODO ANO
            </p>
          </div>
        </div>

        {/* What to do with time */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8">
            O Que Você Faria Com 17 Dias Extras Por Ano?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <Plane className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Viagens em família</p>
                <p className="text-gray-700">2-3 viagens completas que vocês nunca tiveram tempo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Momentos com os filhos</p>
                <p className="text-gray-700">Estar presente nos momentos que você nunca vai recuperar</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <Mountain className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Hobbies esquecidos</p>
                <p className="text-gray-700">Aquele esporte, instrumento ou hobby que você abandonou</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
              <Sparkles className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-gray-900 text-lg mb-1">Simplesmente descansar</p>
                <p className="text-gray-700">Dormir direito. Acordar sem alarme. Viver sem exaustão.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            17 dias por ano. Todo ano. Pelo resto da sua carreira.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Quanto vale isso pra você?
          </p>
        </div>
      </div>
    </section>
  );
};
