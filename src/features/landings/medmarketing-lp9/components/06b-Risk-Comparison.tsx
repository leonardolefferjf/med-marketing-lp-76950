import React from 'react';
import { AlertTriangle, Shield, Lock, Unlock, DollarSign, Heart, TrendingDown, TrendingUp } from 'lucide-react';

export default function RiskComparison() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <AlertTriangle className="w-4 h-4" />
            ESCOLHA SEU CAMINHO
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 px-4">
            Dois Caminhos.{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Dois Destinos.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-bold">
            Você tem uma escolha clara para fazer AGORA sobre o futuro do seu marketing médico
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Caminho do Risco (Vermelho) */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-red-700">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">
                Caminho do Risco
              </h3>
              <p className="text-red-300 font-bold">
                Continuar postando sem validação
              </p>
            </div>

            <div className="space-y-4">
              {/* Risco 1 */}
              <div className="bg-red-950/50 rounded-xl p-5 border-2 border-red-700/50">
                <div className="flex items-start gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Multa até R$ 50 mil
                  </h4>
                </div>
                <p className="text-red-200 text-sm leading-relaxed">
                  Uma denúncia anônima, um post que alguém interprete como sensacionalismo,
                  e você recebe notificação do CFM. Processo ético pode resultar em multa pesada.
                </p>
              </div>

              {/* Risco 2 */}
              <div className="bg-red-950/50 rounded-xl p-5 border-2 border-red-700/50">
                <div className="flex items-start gap-3 mb-2">
                  <TrendingDown className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Dano à Reputação
                  </h4>
                </div>
                <p className="text-red-200 text-sm leading-relaxed">
                  Processo ético do CFM é público. Seus colegas, pacientes e concorrentes
                  vão saber. Mancha que dura anos na carreira.
                </p>
              </div>

              {/* Risco 3 */}
              <div className="bg-red-950/50 rounded-xl p-5 border-2 border-red-700/50">
                <div className="flex items-start gap-3 mb-2">
                  <Heart className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Ansiedade Constante
                  </h4>
                </div>
                <p className="text-red-200 text-sm leading-relaxed">
                  Toda vez que você posta, aquele frio na barriga: "Será que isso está certo?"
                  Você dorme mal, fica checando se alguém denunciou.
                </p>
              </div>

              {/* Risco 4 */}
              <div className="bg-red-950/50 rounded-xl p-5 border-2 border-red-700/50">
                <div className="flex items-start gap-3 mb-2">
                  <Lock className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Paralisia por Medo
                  </h4>
                </div>
                <p className="text-red-200 text-sm leading-relaxed">
                  Você cria conteúdo incrível, mas não publica. Seu concorrente menos
                  cauteloso posta e cresce. Você fica para trás por excesso de medo.
                </p>
              </div>
            </div>

            {/* Resultado Final */}
            <div className="mt-8 bg-red-950 rounded-xl p-6 border-2 border-red-600">
              <p className="text-center text-xl font-black text-red-300 mb-3">
                RESULTADO EM 1 ANO:
              </p>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Zero crescimento por medo de postar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Ou crescimento com risco real de multa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Ansiedade constante em ambos cenários</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <span>Autoridade comprometida ou inexistente</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Caminho da Segurança (Verde) */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-green-600 relative">
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-black rotate-12 shadow-xl">
              RECOMENDADO
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">
                Caminho da Segurança
              </h3>
              <p className="text-green-300 font-bold">
                Validação CFM automática em cada post
              </p>
            </div>

            <div className="space-y-4">
              {/* Benefício 1 */}
              <div className="bg-green-950/50 rounded-xl p-5 border-2 border-green-600/50">
                <div className="flex items-start gap-3 mb-2">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Zero Risco de Multa
                  </h4>
                </div>
                <p className="text-green-200 text-sm leading-relaxed">
                  Sistema valida 100% do seu conteúdo ANTES de publicar. Se algo estiver
                  fora da norma, alerta e sugere correção. Impossível errar.
                </p>
              </div>

              {/* Benefício 2 */}
              <div className="bg-green-950/50 rounded-xl p-5 border-2 border-green-600/50">
                <div className="flex items-start gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Reputação Protegida
                  </h4>
                </div>
                <p className="text-green-200 text-sm leading-relaxed">
                  Nenhum usuário do MedMarketingAI+ sofreu processo do CFM desde 2022.
                  Você constrói autoridade com segurança jurídica total.
                </p>
              </div>

              {/* Benefício 3 */}
              <div className="bg-green-950/50 rounded-xl p-5 border-2 border-green-600/50">
                <div className="flex items-start gap-3 mb-2">
                  <Heart className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Tranquilidade Mental
                  </h4>
                </div>
                <p className="text-green-200 text-sm leading-relaxed">
                  Você publica e DORME TRANQUILO. Sabe que passou por 3 camadas de validação.
                  Tem certificado digital provando compliance. Zero ansiedade.
                </p>
              </div>

              {/* Benefício 4 */}
              <div className="bg-green-950/50 rounded-xl p-5 border-2 border-green-600/50">
                <div className="flex items-start gap-3 mb-2">
                  <Unlock className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <h4 className="text-xl font-black text-white">
                    Liberdade para Crescer
                  </h4>
                </div>
                <p className="text-green-200 text-sm leading-relaxed">
                  Você posta com frequência e consistência. Cresce sua autoridade sem medo.
                  Enquanto concorrentes ficam paralisados, você domina seu nicho.
                </p>
              </div>
            </div>

            {/* Resultado Final */}
            <div className="mt-8 bg-green-950 rounded-xl p-6 border-2 border-green-500">
              <p className="text-center text-xl font-black text-green-300 mb-3">
                RESULTADO EM 1 ANO:
              </p>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Crescimento consistente e seguro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Zero processos, zero multas, zero sustos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Tranquilidade total em cada publicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Autoridade consolidada no seu nicho</span>
                </li>
              </ul>
            </div>

            {/* Garantia Extra */}
            <div className="mt-6 bg-yellow-400 text-black rounded-xl p-4 text-center">
              <p className="font-black text-sm mb-1">🛡️ GARANTIA DUPLA:</p>
              <p className="text-xs font-bold">
                Se houver multa (nunca houve), pagamos até R$ 50k por você
              </p>
            </div>
          </div>

        </div>

        {/* Pergunta Final */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-10 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
            Qual Caminho Você Vai Escolher?
          </h3>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-black font-bold leading-relaxed">
              Continue no risco e na ansiedade...
              <br />
              <span className="text-gray-800">OU</span>
              <br />
              Tenha validação CFM automática por <strong>R$ 997 únicos</strong>
              <br />
              e durma tranquilo para o resto da carreira?
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-white rounded-xl px-6 py-3 shadow-lg">
              <p className="text-lg font-black text-gray-900">
                💀 Caminho do Risco = Potencial R$ 50k de multa
              </p>
            </div>
            <p className="text-2xl font-black">VS</p>
            <div className="bg-green-600 rounded-xl px-6 py-3 shadow-lg">
              <p className="text-lg font-black text-white">
                🛡️ Caminho da Segurança = R$ 997 investimento único
              </p>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-full font-bold">
            👇 Veja a oferta completa com garantia abaixo
          </div>
        </div>

      </div>
    </section>
  );
}
