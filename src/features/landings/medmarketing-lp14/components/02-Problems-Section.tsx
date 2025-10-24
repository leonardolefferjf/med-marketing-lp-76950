import React from 'react';
import { Clock, TrendingDown, MessageSquare, FileText, DollarSign, AlertCircle } from 'lucide-react';

export const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Você Está Cansado de Ser{' '}
            <span className="text-red-600">Refém de Terceiros?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Todo mês o mesmo ciclo: Pagar caro, esperar dias, explicar o óbvio, receber conteúdo genérico.
          </p>
        </div>

        {/* Emotional Story */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border-2 border-gray-200">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-black text-red-600">Segunda-feira, 9h.</span> Você paga R$ 5.000 na agência e pede um post sobre seu novo procedimento de harmonização facial.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-black text-red-600">Quarta-feira, 15h.</span> Recebe uma prévia genérica que parece ter sido copiada do concorrente. "Rejuvenesça com harmonização facial!"
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-black text-red-600">Quinta-feira, 10h.</span> Você explica (de novo) que precisa mencionar bioestimuladores, não apenas preenchimento.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-black text-red-600">Sexta-feira, 17h.</span> O post finalmente sai. Medíocre. Mas você já perdeu 1 semana de alcance e 20 potenciais pacientes.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-red-900 mb-2">
                  Pagando R$ 5.000-15.000/mês
                </h3>
                <p className="text-gray-700">
                  E mesmo assim precisa revisar tudo, explicar conceitos básicos, e torcer para não postarem algo que viola o CFM.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-red-900 mb-2">
                  Esperando 3-5 dias por um post
                </h3>
                <p className="text-gray-700">
                  Enquanto isso, seus concorrentes já postaram 10 vezes. Seu alcance cai. Suas consultas diminuem.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-red-900 mb-2">
                  Explicando o básico da especialidade
                </h3>
                <p className="text-gray-700">
                  "Não, rinoplastia não é cirurgia plástica geral." "Não, não pode prometer resultado." Por que você está ensinando marketing?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-red-900 mb-2">
                  Recebendo conteúdo genérico
                </h3>
                <p className="text-gray-700">
                  Frases prontas que qualquer médico poderia usar. Zero diferenciação. Zero autoridade. R$ 5k/mês desperdiçados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-8 text-center shadow-xl">
          <div className="mb-6">
            <AlertCircle className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              A Conta Que Não Para Nunca
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-bold mb-1">Agência básica</p>
              <p className="text-3xl font-black">R$ 5.000</p>
              <p className="text-sm">por mês • para sempre</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-bold mb-1">1 ano</p>
              <p className="text-3xl font-black">R$ 60.000</p>
              <p className="text-sm">+ dependência total</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30">
              <p className="text-sm font-bold mb-1">10 anos</p>
              <p className="text-3xl font-black text-yellow-300">R$ 600.000</p>
              <p className="text-sm">Sim, meio milhão</p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white font-bold mt-8">
            E você NUNCA é dono do processo. <br className="hidden md:block" />
            Cancelou a agência? Voltou ao zero.
          </p>
        </div>
      </div>
    </section>
  );
};
