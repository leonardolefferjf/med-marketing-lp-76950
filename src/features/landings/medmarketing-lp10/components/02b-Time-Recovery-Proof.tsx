import React from 'react';
import { Clock, Calendar, Plane, Heart, Coffee, Sun, TrendingUp, ArrowRight } from 'lucide-react';

export default function TimeRecoveryProof() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Clock className="w-5 h-5" />
            PROVA MATEMÁTICA DE ECONOMIA DE TEMPO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Recupere 420 Horas Por Ano.{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              São 17 Dias de Vida.
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Não é exagero. É matemática simples. Veja a conta:
          </p>
        </div>

        {/* Cálculo Principal */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 shadow-2xl border-2 border-green-500">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              O Cálculo Que Muda Sua Vida
            </h3>
            <p className="text-lg text-gray-600">
              Compare: Marketing Manual vs AI Automatizado
            </p>
          </div>

          {/* Comparação Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* ANTES: Marketing Manual */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-300">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                  ANTES
                </div>
                <h4 className="text-2xl font-black text-red-900">Marketing Manual</h4>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Pesquisa de conteúdo</p>
                  <p className="text-2xl font-black text-red-700">2h</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Escrita de posts</p>
                  <p className="text-2xl font-black text-red-700">3h</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Design/imagens</p>
                  <p className="text-2xl font-black text-red-700">2h</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Agendamento</p>
                  <p className="text-2xl font-black text-red-700">1h</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Ajustes/revisões</p>
                  <p className="text-2xl font-black text-red-700">1h</p>
                </div>
              </div>

              <div className="bg-red-700 rounded-xl p-5 text-white">
                <p className="text-sm font-bold mb-1">TOTAL POR SEMANA</p>
                <p className="text-4xl font-black">9 horas</p>
                <p className="text-xs mt-2 text-red-200">Todo sábado e domingo consumidos</p>
              </div>
            </div>

            {/* DEPOIS: AI Automatizado */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-500">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                  DEPOIS
                </div>
                <h4 className="text-2xl font-black text-green-900">MedMarketingAI+</h4>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Setup inicial (uma vez)</p>
                  <p className="text-2xl font-black text-green-700">10 min</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Revisar posts AI (segunda)</p>
                  <p className="text-2xl font-black text-green-700">5 min</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Ajustes/personalizações</p>
                  <p className="text-2xl font-black text-green-700">10 min</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Agendar semana toda</p>
                  <p className="text-2xl font-black text-green-700">5 min</p>
                </div>
                <div className="bg-white rounded-lg p-4 opacity-30">
                  <p className="text-sm text-gray-600 mb-1">-</p>
                  <p className="text-2xl font-black text-gray-400">-</p>
                </div>
              </div>

              <div className="bg-green-700 rounded-xl p-5 text-white">
                <p className="text-sm font-bold mb-1">TOTAL POR SEMANA</p>
                <p className="text-4xl font-black">20 minutos</p>
                <p className="text-xs mt-2 text-green-200">Uma segunda-feira de manhã. Só isso.</p>
              </div>
            </div>
          </div>

          {/* Economia Calculada */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-400">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-700" />
              <h4 className="text-2xl font-black text-yellow-900">Economia de Tempo</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-2">Por Semana</p>
                <p className="text-3xl font-black text-yellow-700">8h 40min</p>
                <p className="text-xs text-gray-500 mt-1">9h - 20min = 8h40min</p>
              </div>

              <div className="bg-white rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-2">Por Mês (4 semanas)</p>
                <p className="text-3xl font-black text-yellow-700">35 horas</p>
                <p className="text-xs text-gray-500 mt-1">Quase 1 semana de trabalho</p>
              </div>

              <div className="bg-white rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-2">Por Ano (52 semanas)</p>
                <p className="text-3xl font-black text-yellow-700">420 horas</p>
                <p className="text-xs text-gray-500 mt-1">= 17 dias completos (24h)</p>
              </div>
            </div>

            <div className="mt-4 bg-yellow-600 rounded-lg p-4 text-white text-center">
              <p className="font-black text-lg">
                Você ganha de volta mais de 2 SEMANAS DA SUA VIDA por ano!
              </p>
            </div>
          </div>
        </div>

        {/* O Que Fazer com 17 Dias */}
        <div className="mb-12">
          <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
            O Que Você Pode Fazer Com{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              17 Dias de Vida Recuperados?
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Férias */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-blue-200 hover:border-blue-500 transition-colors">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Férias de Verdade
              </h4>
              <p className="text-gray-700 text-center">
                2 semanas de viagem com a família. Sem pensar em trabalho. Sem culpa. Só presença.
              </p>
            </div>

            {/* Família */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-pink-200 hover:border-pink-500 transition-colors">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Presença com Família
              </h4>
              <p className="text-gray-700 text-center">
                408 momentos de 1 hora com filhos, cônjuge, pais. Recitais, jantares, conversas.
              </p>
            </div>

            {/* Hobbies */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-purple-200 hover:border-purple-500 transition-colors">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Coffee className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Hobbies Esquecidos
              </h4>
              <p className="text-gray-700 text-center">
                Academia, leitura, música, esportes. Tudo que você deixou de lado "por falta de tempo".
              </p>
            </div>

            {/* Descanso */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-orange-200 hover:border-orange-500 transition-colors">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Descanso Real
              </h4>
              <p className="text-gray-700 text-center">
                17 dias de sono, relaxamento, não fazer NADA. Sua saúde mental agradece.
              </p>
            </div>

            {/* Fins de Semana */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-green-200 hover:border-green-500 transition-colors">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Fins de Semana Livres
              </h4>
              <p className="text-gray-700 text-center">
                Sábado e domingo sem pensar em marketing. Seu fim de semana volta a ser SEU.
              </p>
            </div>

            {/* Qualidade de Vida */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-teal-200 hover:border-teal-500 transition-colors">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-black text-gray-900 text-center mb-3">
                Saúde Mental
              </h4>
              <p className="text-gray-700 text-center">
                Menos exaustão, menos culpa, menos estresse. Você volta a se sentir presente e vivo.
              </p>
            </div>
          </div>
        </div>

        {/* Comparação Dramática */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <ArrowRight className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-black mb-4">
              Você Escolhe Seu Futuro
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opção A: Continuar como está */}
            <div className="bg-red-900/30 rounded-xl p-6 border-2 border-red-600">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  OPÇÃO A
                </div>
                <h4 className="text-xl font-black mt-3">Continuar Como Está</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>9 horas toda semana fazendo marketing manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Fins de semana consumidos, sem família</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Culpa constante, exaustão crônica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>Em 10 anos: 170 dias perdidos = quase 6 meses da sua vida</span>
                </li>
              </ul>
            </div>

            {/* Opção B: AI Automatizado */}
            <div className="bg-green-900/30 rounded-xl p-6 border-2 border-green-500">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  OPÇÃO B
                </div>
                <h4 className="text-xl font-black mt-3">MedMarketingAI+</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>20 minutos por semana, segundas de manhã</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Fins de semana livres, 100% família</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Zero culpa, energia recuperada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Em 10 anos: 170 dias recuperados = tempo com quem você ama</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-500 rounded-xl p-6 text-gray-900 text-center">
            <p className="text-2xl font-black">
              A diferença? 420 horas por ano da sua vida. Você escolhe como usar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
