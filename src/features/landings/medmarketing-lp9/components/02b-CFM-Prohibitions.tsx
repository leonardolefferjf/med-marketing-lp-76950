import React from 'react';
import { Ban, AlertTriangle, XCircle, Shield, CheckCircle2 } from 'lucide-react';

export default function CFMProhibitions() {
  const prohibitions = [
    {
      title: 'Sensacionalismo',
      description: 'Promessas exageradas, milagrosas ou garantias de resultado',
      examples: [
        '❌ "Elimine 100% das rugas em 1 sessão"',
        '❌ "Resultado garantido para todos"',
        '❌ "Rejuvenesça 20 anos instantaneamente"'
      ],
      correct: '✅ "Tratamento pode reduzir rugas visíveis" (com evidências)'
    },
    {
      title: 'Autopromoção Excessiva',
      description: 'Expor-se de forma que induza autopropaganda',
      examples: [
        '❌ "Sou o melhor dermatologista do Brasil"',
        '❌ "Único médico capaz de fazer X"',
        '❌ "Somente eu domino essa técnica"'
      ],
      correct: '✅ "Especialista em dermatologia com certificação pela SBD"'
    },
    {
      title: 'Concorrência Desleal',
      description: 'Desqualificar colegas ou estabelecer comparações',
      examples: [
        '❌ "Outros médicos não sabem fazer isso"',
        '❌ "Concorrentes usam técnicas ultrapassadas"',
        '❌ "Clínicas comuns não têm essa qualidade"'
      ],
      correct: '✅ "Nossa abordagem é baseada em protocolos científicos"'
    },
    {
      title: 'Preço e Descontos',
      description: 'Anunciar preços, promoções ou facilidades de pagamento',
      examples: [
        '❌ "Botox por R$ 399"',
        '❌ "50% de desconto nesta semana"',
        '❌ "Parcelamos em até 12x sem juros"'
      ],
      correct: '✅ "Agende uma consulta para avaliar seu caso" (sem mencionar preço)'
    },
    {
      title: 'Imagens Inadequadas',
      description: 'Fotos chocantes, sensacionalistas ou sem consentimento',
      examples: [
        '❌ Antes/depois sem autorização por escrito',
        '❌ Imagens de procedimentos cirúrgicos explícitos',
        '❌ Fotos que identifiquem pacientes sem consentimento'
      ],
      correct: '✅ Imagens educativas, consentidas, com contexto adequado'
    },
    {
      title: 'Publicidade de Técnicas Não Reconhecidas',
      description: 'Divulgar procedimentos sem respaldo científico',
      examples: [
        '❌ "Técnica exclusiva sem comprovação"',
        '❌ "Método revolucionário sem estudos"',
        '❌ "Tratamento alternativo milagroso"'
      ],
      correct: '✅ Procedimentos reconhecidos por sociedades médicas e com evidências'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Ban className="w-5 h-5" />
            ENTENDA A RESOLUÇÃO CFM 2.336/2023
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            O Que o CFM Proíbe <br />
            (E Como Evitar Cada Armadilha)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Não é que você não pode fazer marketing. É que existem <strong>6 tipos de conteúdo proibidos</strong>.
            Veja cada um e como o MedMarketingAI+ te protege automaticamente.
          </p>
        </div>

        {/* Grid de Proibições */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {prohibitions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 hover:border-red-400 transition-all">
              {/* Cabeçalho */}
              <div className="flex items-start gap-4 mb-4 pb-4 border-b-2 border-gray-200">
                <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Exemplos de ERRADO */}
              <div className="mb-4">
                <p className="text-xs font-bold text-red-600 uppercase mb-2">Exemplos PROIBIDOS:</p>
                <div className="space-y-2">
                  {item.examples.map((example, i) => (
                    <div key={i} className="bg-red-50 rounded-lg p-3 text-sm text-red-800">
                      {example}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exemplo CORRETO */}
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <p className="text-xs font-bold text-green-700 uppercase mb-2">✓ FORMA CORRETA:</p>
                <p className="text-sm text-green-800 font-semibold">{item.correct}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Como o MedMarketingAI+ Protege */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Como o MedMarketingAI+ Te Protege Automaticamente
            </h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Nosso sistema analisa seu conteúdo ANTES de você publicar e alerta sobre qualquer risco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Passo 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <div className="bg-green-400 text-green-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl mb-4">
                1
              </div>
              <h4 className="text-xl font-black mb-3">Análise Automática</h4>
              <p className="text-green-100">
                Algoritmo verifica cada frase contra os 21 artigos da resolução CFM 2.336/2023
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <div className="bg-yellow-400 text-yellow-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl mb-4">
                2
              </div>
              <h4 className="text-xl font-black mb-3">Alertas em Tempo Real</h4>
              <p className="text-green-100">
                Se detectar risco, destaca a frase problemática e sugere alternativa ética
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <div className="bg-green-300 text-green-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl mb-4">
                ✓
              </div>
              <h4 className="text-xl font-black mb-3">Selo de Aprovação</h4>
              <p className="text-green-100">
                Somente quando 100% conforme, você recebe o "✓ Aprovado CFM" e pode publicar tranquilo
              </p>
            </div>
          </div>

          {/* Exemplo Visual de Validação */}
          <div className="mt-8 bg-white rounded-xl p-6">
            <p className="text-sm font-bold text-gray-600 mb-4">EXEMPLO DE VALIDAÇÃO EM TEMPO REAL:</p>

            <div className="mb-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-2">
                <p className="text-gray-800">
                  "Elimine <span className="bg-red-200 font-bold">100% das rugas</span> com nosso tratamento!"
                </p>
              </div>
              <div className="flex items-start gap-2 text-red-600 text-sm">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="font-bold">
                  ⚠️ RISCO DETECTADO: Promessa de resultado absoluto (Art. 5º, IV). Isso pode ser interpretado como sensacionalismo pelo CFM.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-2">
              <p className="text-gray-800">
                "Tratamento pode <span className="bg-green-200 font-bold">reduzir significativamente rugas visíveis</span>, conforme evidências científicas"
              </p>
            </div>
            <div className="flex items-start gap-2 text-green-600 text-sm font-bold">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ✓ APROVADO CFM - Conteúdo está em conformidade com a resolução 2.336/2023
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
            <p className="text-2xl font-black text-gray-900 mb-4">
              Chega de Adivinhar Se Seu Post Está Correto
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Deixe o sistema validar para você. Automaticamente. Em segundos.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold">
              👇 Veja como funciona a validação na prática
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
