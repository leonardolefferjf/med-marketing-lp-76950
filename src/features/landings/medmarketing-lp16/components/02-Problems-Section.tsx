import React from 'react';
import { Clock, Frown, AlertCircle, Calendar } from 'lucide-react';

export const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sua Rotina Está Te Matando Por Dentro
          </h2>
          <p className="text-2xl text-gray-300 font-bold">
            (E Sua Agenda Ainda Está Vazia)
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="space-y-8">
          {/* Friday Night */}
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-900/30 rounded-full p-3">
                <Clock className="w-8 h-8 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">
                  Sexta-feira, 20h45
                </h3>
                <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Você acaba de chegar em casa depois de 12 horas de atendimento.
                  </p>
                  <p>
                    Toma um banho rápido. Senta no sofá exausto.
                  </p>
                  <p className="font-bold text-white">
                    Aí você lembra: <span className="text-red-400">"Não postei nada essa semana..."</span>
                  </p>
                  <p>
                    Você sabe que deveria criar conteúdo. Mas está MORTO de cansaço.
                  </p>
                  <p className="italic text-gray-400">
                    "Deixa pro fim de semana..." (você pensa)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday Morning */}
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-900/30 rounded-full p-3">
                <Frown className="w-8 h-8 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">
                  Sábado de manhã, 9h
                </h3>
                <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Sua filha te chama: "Pai, vamos no parque?"
                  </p>
                  <p>
                    Você olha pro computador. Depois pra ela.
                  </p>
                  <p className="font-bold text-white">
                    A escolha dolorosa: <span className="text-orange-400">Família ou marketing?</span>
                  </p>
                  <p>
                    Se você for pro parque, mais uma semana sem conteúdo.
                  </p>
                  <p>
                    Se você ficar criando posts, mais uma manhã de sábado que ela vai lembrar que você não estava lá.
                  </p>
                  <p className="italic text-red-400 font-bold">
                    Você não deveria ter que escolher entre seu trabalho crescer e estar presente na vida dos seus filhos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday Night */}
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-900/30 rounded-full p-3">
                <AlertCircle className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">
                  Domingo à noite
                </h3>
                <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Aquela angústia já conhecida no peito.
                  </p>
                  <p className="font-bold text-white">
                    Mais uma semana <span className="text-purple-400">ZERO posts.</span>
                  </p>
                  <p>
                    Sua concorrência não parou. Ela postou 12 vezes.
                  </p>
                  <p>
                    Enquanto você escolhia entre viver ou trabalhar, ela estava enchendo a agenda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Monday Reality */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 border-2 border-red-700 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-950 rounded-full p-3">
                <Calendar className="w-8 h-8 text-red-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">
                  Segunda-feira
                </h3>
                <div className="space-y-3 text-white text-lg leading-relaxed">
                  <p>
                    Você abre a agenda da semana.
                  </p>
                  <p className="text-3xl font-black text-yellow-300">
                    Apenas 4 consultas agendadas.
                  </p>
                  <p>
                    Enquanto sua concorrência, que posta todo santo dia, tem agenda cheia pra 3 semanas.
                  </p>
                  <p className="font-black text-2xl">
                    O ciclo se repete. Toda semana. Todo mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Emphasis */}
        <div className="mt-12 text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8">
          <p className="text-2xl md:text-3xl font-black text-white mb-4">
            Você está preso numa armadilha impossível:
          </p>
          <p className="text-xl text-white">
            Precisa de marketing para encher a agenda.<br />
            Mas fazer marketing rouba o tempo da sua vida pessoal.<br />
            Então você não faz. E a agenda continua vazia.
          </p>
        </div>
      </div>
    </section>
  );
};
