import React from 'react';
import { AlertTriangle, Clock, DollarSign, XCircle, TrendingDown } from 'lucide-react';

const ProblemsSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header com destaque */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 uppercase shadow-lg">
            <AlertTriangle className="w-5 h-5" />
            O PROBLEMA (você vai se identificar)
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Por que sua agenda está <span className="text-red-400">40-60% vazia</span> enquanto outros médicos lotam consultórios?
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Não é falta de pacientes. É que <strong className="text-yellow-400">eles estão indo para médicos com marketing ativo</strong>
          </p>
        </div>

        {/* Lista de Problemas */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mb-12">
          {/* DOR 1: Falta de Tempo */}
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-xl p-6 hover:border-red-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-xl p-3 flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1 rounded-full text-xs font-bold text-red-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  DOR 1: FALTA DE TEMPO
                </div>
                <h3 className="text-2xl font-black text-white mb-3">15-20 horas/mês desperdiçadas</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Você trabalha 50-60h/semana. Quando chega em casa, quer estar com sua família, não criar posts para Instagram. Mas sem marketing ativo, sua agenda fica vazia.
                </p>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
                  <div className="text-red-400 font-bold text-sm">RESULTADO DEVASTADOR:</div>
                  <div className="text-gray-300 text-sm mt-1">Marketing inconsistente = 3-4 posts genéricos/mês que ninguém vê</div>
                </div>
              </div>
            </div>
          </div>

          {/* DOR 2: Custos Absurdos */}
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-xl p-6 hover:border-red-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-xl p-3 flex-shrink-0">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1 rounded-full text-xs font-bold text-red-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  DOR 2: CUSTOS ABSURDOS
                </div>
                <h3 className="text-2xl font-black text-white mb-3">R$ 3.000-15.000/mês em agências</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Tentou contratar agência de marketing? R$ 3-8k/mês + designer R$ 1,5k + tráfego pago R$ 5k+. Total: <strong className="text-yellow-400">R$ 12-24k/mês</strong>. Custo alto, retorno baixo, e sem garantia de compliance CFM.
                </p>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
                  <div className="text-red-400 font-bold text-sm">RESULTADO DEVASTADOR:</div>
                  <div className="text-gray-300 text-sm mt-1">Em 1 ano: R$ 144-288k gastos sem garantia de resultado</div>
                </div>
              </div>
            </div>
          </div>

          {/* DOR 3: Medo do CFM */}
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-xl p-6 hover:border-red-500 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-xl p-3 flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1 rounded-full text-xs font-bold text-red-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  DOR 3: MEDO DO CFM
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Paralisia por medo de processo ético</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Você viu colegas levarem processo ético. Uma palavra errada, uma promessa indevida, um antes/depois não permitido... e pronto: <strong className="text-yellow-400">multa de até R$ 50.000</strong> + reputação destruída.
                </p>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded mb-4">
                  <div className="text-red-400 font-bold text-sm mb-2">O QUE O CFM 2.336/2023 PROÍBE:</div>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-3 h-3 text-red-500" />
                      Promessas de resultado ("100% de cura")
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-3 h-3 text-red-500" />
                      Sensacionalismo ("Revolucionário!", "Milagroso!")
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-3 h-3 text-red-500" />
                      Antes/Depois sem autorização expressa
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-3 h-3 text-red-500" />
                      Divulgação de preços sem contexto
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded">
                  <div className="text-red-400 font-bold text-sm">RESULTADO DEVASTADOR:</div>
                  <div className="text-gray-300 text-sm mt-1">Você prefere não postar nada do que arriscar um processo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto Final */}
        <div className="bg-red-900 border-4 border-red-500 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingDown className="w-10 h-10 text-red-400" />
            <h3 className="text-3xl font-black text-white">
              O RESULTADO? Carreira Médica Estagnada
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white mb-1">Agenda 40-60% vazia</div>
                  <div className="text-sm text-gray-300">Enquanto concorrentes menos qualificados lotam consultórios</div>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white mb-1">Dependência de convênios</div>
                  <div className="text-sm text-gray-300">R$ 80-150/consulta ao invés de R$ 400-600 particular</div>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white mb-1">Trabalhar 12h/dia</div>
                  <div className="text-sm text-gray-300">Para ganhar o que deveria ganhar em 6h</div>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white mb-1">Estresse e frustração</div>
                  <div className="text-sm text-gray-300">Ver colegas prosperarem enquanto você estagna</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-black mb-4">
            🚨 Mas Tem Uma Solução...
          </h3>
          <p className="text-xl font-bold mb-2">
            E se existissem 165 assistentes de IA trabalhando 24/7 para você?
          </p>
          <p className="text-lg mb-4">
            Gerando posts, stories, reels, campanhas... tudo validado pelo CFM 2.336/2023, enquanto você atende pacientes.
          </p>
          <div className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-full text-sm font-bold">
            De 40-60% vazia → 90-100% lotada em 60-90 dias ⬇️
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
