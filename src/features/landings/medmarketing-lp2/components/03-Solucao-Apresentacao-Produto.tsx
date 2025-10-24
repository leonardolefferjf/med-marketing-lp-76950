import React from 'react';
import { Sparkles, Clock, Shield, Zap, Check, X, Award, AlertTriangle } from 'lucide-react';
export default function SolutionSection() {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta');
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <Sparkles className="w-5 h-5" />
            A SOLUÇÃO COMPLETA
          </div>

          <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Apresentamos o{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              MedMarketingAI+
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
            <strong className="text-yellow-600">165 Assistentes de IA Especializados</strong> Trabalhando 24/7 Para Encher Sua Agenda
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            A única plataforma de marketing médico com IA que resolve os 3 problemas de uma vez:{' '}
            <strong>tempo, custo e compliance CFM</strong>.
          </p>
        </div>

        {/* Promessa Clara */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-2xl p-8 md:p-12 mb-12 shadow-2xl text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            Automação completa do seu marketing médico em 10 minutos
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Da configuração até os primeiros posts publicados. Enquanto você atende pacientes,{' '}
            <strong>165 assistentes</strong> geram conteúdo ético, persuasivo e otimizado para atrair mais consultas.
          </p>
        </div>

        {/* Como Funciona - Mecanismo Único */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-xl border-2 border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-600" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
              Como Funciona (Mecanismo Único)
            </h3>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Diferente de ferramentas genéricas <span className="text-gray-400">(ChatGPT, Jasper, Copy.ai)</span>, 
            o MedMarketingAI+ foi <strong className="text-yellow-600">treinado exclusivamente para marketing médico brasileiro</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-500">
              <Shield className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Base de conhecimento</h4>
              <p className="text-sm text-gray-700">CFM 2.336/2023 + melhores práticas de +50 especialidades</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-500">
              <Sparkles className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">165 assistentes especializados</h4>
              <p className="text-sm text-gray-700">Cada um domina uma área específica (posts, stories, reels, campanhas, SEO, etc)</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-500">
              <Check className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Validação automática</h4>
              <p className="text-sm text-gray-700">Todo conteúdo gerado passa por checagem ética antes de você publicar</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-500">
              <Zap className="w-10 h-10 text-orange-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Plug & Play</h4>
              <p className="text-sm text-gray-700">Acesse, clique e use. Sem configurações complexas.</p>
            </div>
          </div>
        </div>

        {/* Facilidade de Implementação */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl md:text-3xl font-black text-center">
              Facilidade de Implementação
            </h3>
          </div>
          
          <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-8 text-center">
            "3 cliques e você está gerando conteúdo profissional:"
          </p>

          <div className="space-y-6 max-w-3xl mx-auto mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Escolha o assistente</h4>
                <p className="text-gray-300 text-sm">Ex: "Criador de Posts Carrossel"</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Diga o que precisa</h4>
                <p className="text-gray-300 text-sm">Ex: "Post sobre hipertensão para cardiologista"</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Receba o conteúdo pronto em 30 segundos</h4>
                <p className="text-gray-300 text-sm">Pronto para copiar, ajustar e publicar</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 text-black rounded-xl p-6 text-center">
            <p className="text-lg md:text-xl font-bold">
              Não precisa ser expert em marketing. Não precisa saber IA.<br />
              <span className="text-2xl">Se você sabe usar WhatsApp, sabe usar o MedMarketingAI+.</span>
            </p>
          </div>
        </div>

        {/* Tabela Comparativa */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl border-2 border-gray-200 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-8 h-8 text-yellow-600" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
              Por Que MedMarketingAI+ É ÚNICO
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-300">Característica</th>
                  <th className="p-4 font-bold text-gray-700 border-b-2 border-gray-300 text-center">ChatGPT/IA Genérica</th>
                  <th className="p-4 font-bold text-gray-700 border-b-2 border-gray-300 text-center">Agência Tradicional</th>
                  <th className="p-4 font-bold text-yellow-600 border-b-2 border-yellow-400 text-center bg-yellow-50">MedMarketingAI+</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold text-gray-900">Compliance CFM</td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-6 h-6 text-red-500" />
                      <span className="text-xs text-gray-600">Não conhece</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertTriangle className="w-6 h-6 text-yellow-500" />
                      <span className="text-xs text-gray-600">Nem sempre</span>
                    </div>
                  </td>
                  <td className="p-4 text-center bg-green-50">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-xs font-bold text-green-600">100% validado</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Custo</td>
                  <td className="p-4 text-center">
                    <div className="text-sm text-gray-700">R$ 20/mês</div>
                    <div className="text-xs text-gray-500">(exige expertise)</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-sm text-red-600 font-bold">R$ 3.000-15.000/mês</div>
                  </td>
                  <td className="p-4 text-center bg-yellow-50">
                    <div className="text-lg font-black text-green-600">R$ 997 único</div>
                    <div className="text-xs text-gray-600">Pagamento único</div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold text-gray-900">Especialização Médica</td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-6 h-6 text-red-500" />
                      <span className="text-xs text-gray-600">Genérico</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertTriangle className="w-6 h-6 text-yellow-500" />
                      <span className="text-xs text-gray-600">Varia</span>
                    </div>
                  </td>
                  <td className="p-4 text-center bg-green-50">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-xs font-bold text-green-600">+50 especialidades</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Velocidade</td>
                  <td className="p-4 text-center">
                    <div className="text-sm text-gray-700">Lento</div>
                    <div className="text-xs text-gray-500">(precisa criar prompts)</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-sm text-gray-700">Dias/semanas</div>
                  </td>
                  <td className="p-4 text-center bg-yellow-50">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <span className="text-lg font-black text-yellow-600">30 segundos</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 font-semibold text-gray-900">Disponibilidade</td>
                  <td className="p-4 text-center text-sm text-gray-700">
                    Só quando você usar
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700">
                    Horário comercial
                  </td>
                  <td className="p-4 text-center bg-green-50">
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-lg font-black text-green-600">24/7</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          
          
          <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-600" />
              Configuração em 10 minutos
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-600" />
              100% Validado CFM
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-blue-600" />
              Acesso Vitalício
            </span>
          </p>
        </div>

      </div>
    </section>;
}