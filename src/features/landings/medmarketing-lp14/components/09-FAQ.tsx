import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter ChatGPT pago?",
      answer: "Sim, o MedMarketingAI+ funciona integrado ao ChatGPT Plus (R$ 97/mês). Mas compare: agência cobra R$ 5-15k/mês. Você gasta R$ 97/mês no ChatGPT + R$ 997 único no MedMarketingAI+ = economia de R$ 58.900/ano vs agência básica de R$ 5k/mês."
    },
    {
      question: "Funciona para minha especialidade?",
      answer: "Sim! Temos 165 assistentes especializados cobrindo +50 especialidades médicas: cardiologia, dermatologia, ortopedia, pediatria, ginecologia, psiquiatria, cirurgia plástica, oftalmologia, e muito mais. Se você é médico, funciona para você."
    },
    {
      question: "Está 100% dentro das normas do CFM?",
      answer: "Sim. Todo conteúdo gerado é validado automaticamente pela Resolução CFM 2.336/2023. O sistema alerta se detectar qualquer risco de infração ética. Desde 2024, nenhum usuário recebeu processo do CFM usando o MedMarketingAI+."
    },
    {
      question: "Preciso saber usar IA?",
      answer: "Não! A plataforma é 100% intuitiva. Você escolhe o tipo de conteúdo, clica em gerar, e pronto. Em 30 segundos você tem um post profissional, validado pelo CFM, pronto para publicar. Mesmo se você nunca usou IA na vida."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você tem acesso vitalício à comunidade exclusiva de médicos usuários + Tutor IA 24/7 que responde qualquer dúvida sobre marketing médico. Além disso, nossa equipe responde dúvidas técnicas em até 24h úteis."
    },
    {
      question: "Posso parcelar?",
      answer: "Sim! Você pode parcelar em até 12x de R$ 83,08 sem juros no cartão. Compare: 1 parcela de R$ 83,08 vs 1 mês de agência de R$ 5.000. Você economiza R$ 4.916,92 já no primeiro mês."
    },
    {
      question: "E se eu não gostar?",
      answer: "Garantia incondicional de 30 dias. Use tudo, teste tudo. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-700">
            Tudo que você precisa saber antes de tomar controle do seu marketing
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-black text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">
            Ainda tem dúvidas? Fale com nosso time!
          </p>
          <p className="text-lg text-gray-600">
            Mas lembre-se: enquanto você decide, sua agenda continua vazia e sua concorrência avança.
          </p>
        </div>
      </div>
    </section>
  );
};
