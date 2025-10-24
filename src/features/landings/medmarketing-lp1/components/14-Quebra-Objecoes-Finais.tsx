import React from 'react';

const QuebraObjecoes = () => {
  const objections = [
    {
      objection: "Já tentei marketing antes e não funcionou",
      response: "Porque não era validado CFM e nem focado em médicos. Agência genérica nunca vai entender seu público."
    },
    {
      objection: "Não tenho tempo para aprender isso",
      response: "Não precisa aprender nada. É literalmente copiar e colar. 5 minutos."
    },
    {
      objection: "E se o CFM me punir?",
      response: "Impossível. Tudo validado com 2.336/2023. Vários médicos usando há meses. Zero processos."
    },
    {
      objection: "Minha especialidade é diferente",
      response: "Por isso são 165 assistentes. Tem para todas especialidades e situações."
    },
    {
      objection: "Prefiro contratar agência",
      response: "Agência cobra R$ 3-5k/mês = R$ 36-60k/ano. Aqui você paga R$ 497 UMA VEZ e tem controle total."
    },
    {
      objection: "E se não der certo para mim?",
      response: "30 dias de garantia. Testa sem risco. Não gostou, devolvo tudo."
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            QUEBRA DE OBJEÇÕES FINAIS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Ainda tem <span className="text-red-600">dúvidas?</span> Vamos esclarecer
          </h2>
        </div>

        {/* Objeções */}
        <div className="space-y-6 mb-12">
          {objections.map((item, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-red-600 mb-3">
                    OBJEÇÃO: {item.objection}
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base">
                      <strong className="text-black">RESPOSTA:</strong> {item.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia Destaque */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              GARANTIA INCONDICIONAL
            </h3>
            <p className="text-xl mb-4">
              Se você não gostar do MedMarketingAI+ por QUALQUER motivo dentro de 30 dias:
            </p>
            <div className="text-left max-w-2xl mx-auto space-y-2 mb-6">
              <p>✓ Envie um email para suporte</p>
              <p>✓ Devolvo 100% do seu investimento</p>
              <p>✓ Sem perguntas, sem burocracia</p>
              <p>✓ Você pode até ficar com os bônus</p>
            </div>
            <div className="text-2xl font-bold">
              Você vai encher sua agenda ou seu dinheiro de volta. Simples assim.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuebraObjecoes;
