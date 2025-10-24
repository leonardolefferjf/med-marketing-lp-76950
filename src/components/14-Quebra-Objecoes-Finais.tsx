import React from 'react';

export const QuebraObjecoesFinais = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const objections = [
    {
      question: "\"Mas eu não tenho tempo para aprender algo novo...\"",
      answer: "O ArtigoAI+ foi criado para ECONOMIZAR seu tempo, não consumir mais. Em 5 minutos você já está usando qualquer assistente. Não precisa de curso, treinamento ou configuração complexa."
    },
    {
      question: "\"E se eu não souber usar IA direito?\"",
      answer: "Cada assistente já vem TOTALMENTE CONFIGURADO. Você só precisa copiar o link, colar no ChatGPT e começar a conversar normalmente. É como enviar uma mensagem de WhatsApp."
    },
    {
      question: "\"Será que realmente vai me ajudar na minha área específica?\"",
      answer: "Os 15 assistentes foram treinados com mais de 10.000 trabalhos científicos de TODAS as áreas da saúde. Funciona para medicina, enfermagem, fisioterapia, nutrição, psicologia e muito mais."
    },
    {
      question: "\"E se eu não ficar satisfeito com o produto?\"",
      answer: "Você tem 30 DIAS DE GARANTIA TOTAL. Se por qualquer motivo não estiver satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
    },
    {
      question: "\"O preço não vai ficar mais barato depois?\"",
      answer: "JAMAIS! Este é o menor preço que o ArtigoAI+ terá. Após esta oferta, o preço volta para R$ 8.485. Esta promoção é exclusiva para os primeiros 100 profissionais."
    },
    {
      question: "\"Preciso pagar mensalidade depois?\"",
      answer: "NUNCA mais! É acesso VITALÍCIO. Pague uma vez e use para sempre, incluindo todas as atualizações e novos assistentes que criarmos no futuro."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            ❌ QUEBRA DE OBJEÇÕES
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ainda tem <span className="text-red-400">dúvidas</span>?
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Vamos esclarecer as principais preocupações que podem estar passando pela sua cabeça agora:
          </p>
        </div>

        {/* Objeções */}
        <div className="space-y-8 mb-16">
          {objections.map((objection, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  {objection.question}
                </h3>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>{objection.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgência Final */}
        <div className="bg-red-900 border-2 border-red-500 rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-red-400 mb-4">
            🔥 ÚLTIMAS HORAS DESTA OPORTUNIDADE
          </h3>
          <p className="text-red-300 text-lg mb-6">
            Enquanto você pensa, outros profissionais estão garantindo suas vagas.<br />
            <strong>Restam apenas algumas vagas com este desconto!</strong>
          </p>
          <div className="bg-black border border-red-500 rounded p-4 text-red-400 font-bold text-xl">
            ⏰ OFERTA EXPIRA EM POUCAS HORAS
          </div>
        </div>

        {/* Garantia Destacada */}
        <div className="bg-green-900 border-2 border-green-500 rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            🛡️ SUA COMPRA ESTÁ 100% PROTEGIDA
          </h3>
          <p className="text-green-300 text-lg mb-4">
            <strong>30 DIAS DE GARANTIA INCONDICIONAL</strong>
          </p>
          <p className="text-gray-300">
            Use o ArtigoAI+ por 30 dias. Se não estiver completamente satisfeito,<br />
            devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
          <div className="mt-4 text-green-400 font-bold text-lg">
            RISCO ZERO PARA VOCÊ!
          </div>
        </div>

        {/* CTA Final Poderoso */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold text-white mb-2">
              Não deixe esta oportunidade passar...
            </p>
            <p className="text-lg text-gray-300">
              Sua carreira científica merece essa transformação
            </p>
          </div>
          
          <button 
            onClick={scrollToOffer}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-2xl px-12 py-6 rounded-lg transition-colors shadow-lg mb-4"
          >
            🚀 SIM! QUERO TRANSFORMAR MINHA CARREIRA AGORA
          </button>
          
          <p className="text-gray-400 text-sm">
            Clique agora e garante sua vaga com 96% de desconto
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuebraObjecoesFinais;