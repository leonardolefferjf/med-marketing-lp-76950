import React from 'react';
import { AlertTriangle, Clock, DollarSign, XCircle, TrendingDown, ChevronDown } from 'lucide-react';

const ProblemsSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header com destaque - OTIMIZADO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            O Problema (você vai se identificar)
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 px-4">
            Por que sua agenda está{' '}
            <span className="text-red-400 bg-red-900/30 px-2 py-1 rounded">
              40-60% vazia
            </span>{' '}
            enquanto outros médicos lotam consultórios?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Não é falta de pacientes.{' '}
            <strong className="text-yellow-400">
              Eles estão indo para médicos com marketing ativo.
            </strong>
          </p>

          {/* Estatística visual - NOVO */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-1">15-20h</div>
              <div className="text-xs text-gray-400">desperdiçadas/mês</div>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-1">R$ 12-24k</div>
              <div className="text-xs text-gray-400">gastos em agências/mês</div>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-1">R$ 50k</div>
              <div className="text-xs text-gray-400">multa por violar CFM</div>
            </div>
          </div>
        </div>

        {/* Lista de Problemas - OTIMIZADA */}
        <div className="space-y-6 mb-12">
          
          {/* DOR 1: Falta de Tempo - OTIMIZADA */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-red-500/20 rounded-2xl p-6 md:p-8 hover:border-red-500/50 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 flex-shrink-0 shadow-lg">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1.5 rounded-full text-xs font-bold text-red-300 mb-4">
                  <XCircle className="w-3 h-3" />
                  DOR #1: FALTA DE TEMPO
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  15-20 horas/mês desperdiçadas
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                  Você trabalha 50-60h/semana atendendo pacientes. Quando chega em casa às 20h, 
                  exausto, a última coisa que quer é sentar no computador para criar posts no Instagram. 
                  <strong className="text-white"> Mas sem marketing ativo, sua agenda fica vazia.</strong>
                </p>
                
                {/* Storytelling visual - NOVO */}
                <div className="bg-black/40 rounded-lg p-4 mb-4 border-l-4 border-red-500">
                  <div className="text-sm text-gray-400 italic mb-2">
                    📅 Sexta-feira, 21h30:
                  </div>
                  <div className="text-sm text-gray-300">
                    "Preciso postar no Instagram essa semana... mas estou exausto. 
                    Vou deixar pra semana que vem."
                  </div>
                  <div className="text-xs text-red-400 mt-2 font-semibold">
                    → Resultado: mais um mês sem marketing consistente
                  </div>
                </div>

                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="text-red-400 font-bold text-sm mb-1">
                    ❌ RESULTADO DEVASTADOR:
                  </div>
                  <div className="text-gray-300 text-sm">
                    Marketing inconsistente = apenas 3-4 posts genéricos/mês que ninguém vê. 
                    Seus pacientes ideais nunca descobrem que você existe.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DOR 2: Custos Absurdos - OTIMIZADA */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-red-500/20 rounded-2xl p-6 md:p-8 hover:border-red-500/50 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 flex-shrink-0 shadow-lg">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1.5 rounded-full text-xs font-bold text-red-300 mb-4">
                  <XCircle className="w-3 h-3" />
                  DOR #2: CUSTOS ABSURDOS
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  R$ 3.000-15.000/mês em agências
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                  Você até tentou contratar uma agência de marketing médico. Mas a conta não fecha:
                </p>

                {/* Breakdown de custos - NOVO */}
                <div className="bg-black/40 rounded-lg p-4 mb-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Agência de marketing:</span>
                    <span className="text-white font-bold">R$ 5.000/mês</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Designer freelancer:</span>
                    <span className="text-white font-bold">R$ 1.500/mês</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Copywriter médico:</span>
                    <span className="text-white font-bold">R$ 2.000/mês</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Tráfego pago:</span>
                    <span className="text-white font-bold">R$ 3.000/mês</span>
                  </div>
                  <div className="border-t border-red-500/30 pt-2 flex justify-between items-center">
                    <span className="text-yellow-400 font-bold">TOTAL MENSAL:</span>
                    <span className="text-yellow-400 font-black text-xl">R$ 11.500</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  <strong className="text-red-400">E o pior:</strong> sem garantia de compliance CFM. 
                  Muitas agências nem conhecem a resolução 2.336/2023.
                </p>

                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="text-red-400 font-bold text-sm mb-1">
                    ❌ RESULTADO DEVASTADOR:
                  </div>
                  <div className="text-gray-300 text-sm">
                    Em 1 ano: <strong className="text-yellow-400">R$ 138.000</strong> gastos. 
                    Sem garantia de resultado. Sem garantia de compliance. Sem agenda lotada.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DOR 3: Medo do CFM - OTIMIZADA */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-red-500/20 rounded-2xl p-6 md:p-8 hover:border-red-500/50 transition-all shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 flex-shrink-0 shadow-lg">
                <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 bg-red-900/50 px-3 py-1.5 rounded-full text-xs font-bold text-red-300 mb-4">
                  <XCircle className="w-3 h-3" />
                  DOR #3: MEDO DO CFM
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Paralisia por medo de processo ético
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                  Você viu aquele colega cardiologista levar processo ético por um post no Instagram. 
                  Uma palavra errada. Uma promessa indevida. Um antes/depois sem autorização.{' '}
                  <strong className="text-yellow-400">
                    Multa de R$ 50.000 + reputação destruída.
                  </strong>
                </p>

                {/* Storytelling do medo - NOVO */}
                <div className="bg-black/40 rounded-lg p-4 mb-4 border-l-4 border-yellow-500">
                  <div className="text-sm text-gray-400 italic mb-2">
                    💭 O que passa na sua cabeça antes de publicar:
                  </div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div>"Será que essa palavra pode ser considerada promessa de cura?"</div>
                    <div>"Esse depoimento pode gerar problema?"</div>
                    <div>"Posso falar sobre esse tratamento ou é sensacionalismo?"</div>
                  </div>
                  <div className="text-xs text-red-400 mt-3 font-semibold">
                    → Resultado: você desiste de publicar com medo de errar
                  </div>
                </div>

                <div className="bg-red-900/30 rounded-lg p-4 mb-4">
                  <div className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    O QUE O CFM 2.336/2023 PROÍBE:
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Promessas de resultado ("100% de cura", "Garantido")</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Sensacionalismo ("Revolucionário!", "Milagroso!")</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Antes/Depois sem autorização expressa por escrito</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Divulgação de preços sem contexto clínico adequado</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="text-red-400 font-bold text-sm mb-1">
                    ❌ RESULTADO DEVASTADOR:
                  </div>
                  <div className="text-gray-300 text-sm">
                    Você prefere não postar nada do que arriscar um processo. 
                    Enquanto isso, sua agenda continua vazia e médicos "corajosos" 
                    (que nem sabem do risco) dominam o digital.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto Final - OTIMIZADO */}
        <div className="bg-gradient-to-br from-red-950 to-red-900 border-4 border-red-500 rounded-2xl p-6 md:p-10 mb-10 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 md:w-12 md:h-12 text-red-400" />
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-2">
              O RESULTADO?
            </h3>
            <p className="text-xl md:text-2xl font-black text-red-400">
              Carreira Médica Estagnada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/40 rounded-xl p-5 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-black text-white text-lg mb-2">
                    Agenda 40-60% vazia
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Enquanto médicos menos qualificados que você lotam consultórios 
                    por ter marketing ativo
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-xl p-5 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-black text-white text-lg mb-2">
                    Dependência de convênios
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Recebendo R$ 80-150/consulta quando poderia cobrar R$ 400-600 
                    de pacientes particulares
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-xl p-5 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-black text-white text-lg mb-2">
                    Trabalhar 12h/dia
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Para ganhar o que deveria ganhar em 6h se tivesse agenda 
                    lotada de pacientes particulares
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 rounded-xl p-5 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-black text-white text-lg mb-2">
                    Estresse e frustração
                  </div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Vendo colegas prosperarem com marketing digital enquanto 
                    você estagna por medo ou falta de tempo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final - OTIMIZADO */}
        <div className="relative">
          {/* Seta de transição - NOVO */}
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-500 rounded-full p-3 shadow-xl animate-bounce">
              <ChevronDown className="w-8 h-8 text-black" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-black rounded-2xl p-6 md:p-10 shadow-2xl border-4 border-yellow-600">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                🚨 Mas Tem Uma Solução...
              </h3>
              <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
                E se existissem <span className="bg-black text-yellow-400 px-2 py-1 rounded">
                  165 assistentes de IA
                </span> trabalhando 24/7 para você?
              </p>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Gerando posts, stories, reels, campanhas, emails... 
                <strong> tudo validado pelo CFM 2.336/2023</strong>, 
                enquanto você atende pacientes e vive sua vida.
              </p>
              
              {/* Transformação visual - NOVO */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <div className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg">
                  40-60% vazia
                </div>
                <div className="text-3xl font-black">→</div>
                <div className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg">
                  90-100% lotada
                </div>
              </div>

              <div className="inline-block bg-black text-yellow-400 px-8 py-4 rounded-full font-black text-base md:text-lg shadow-xl">
                Em 60-90 dias • 100% CFM • Sem mensalidades
              </div>

              {/* Indicador visual pra continuar scrolling - NOVO */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="text-sm font-bold">Descubra como ⬇️</div>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
