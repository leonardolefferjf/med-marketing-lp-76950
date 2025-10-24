import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como garantem 100% de compliance CFM?",
      answer: "Temos a Resolução CFM 2.336/2023 completa integrada ao sistema, mais jurisprudência de casos reais e análise de +50 especialidades. A IA valida automaticamente CADA palavra contra essas bases antes de você publicar. É como ter um advogado especialista em ética médica revisando tudo."
    },
    {
      question: "E se o CFM mudar as regras?",
      answer: "Atualizamos o sistema automaticamente sempre que há mudanças nas resoluções do CFM. Você tem acesso vitalício a todas as atualizações sem custo adicional. Quando o CFM muda, nosso sistema muda no mesmo dia."
    },
    {
      question: "São advogados ou especialistas jurídicos?",
      answer: "Não somos advogados. Somos desenvolvedores especializados em IA para área médica. Nosso sistema é baseado na legislação oficial do CFM (2.336/2023) + análise de centenas de casos reais + consulta com advogados especialistas em direito médico."
    },
    {
      question: "Posso confiar 100% na validação?",
      answer: "O sistema alerta problemas e sugere correções baseadas no CFM 2.336/2023. Em +1.247 médicos usando desde 2024, ZERO receberam processo CFM. Mas a responsabilidade final é sempre do médico. Recomendamos usar o sistema como uma camada extra de segurança, não como substituto do seu bom senso."
    },
    {
      question: "Já teve caso de processo entre usuários?",
      answer: "ZERO. Nenhum médico usando o MedMarketingAI+ e seguindo as recomendações do sistema recebeu processo ético até hoje. Isso inclui dermatologistas, cirurgiões plásticos, ortopedistas e outras especialidades de 'alto risco'."
    },
    {
      question: "E se MESMO ASSIM eu receber processo?",
      answer: "Se você seguiu as recomendações do sistema e mesmo assim receber processo CFM, devolvemos 100% do seu investimento + pagamos sua multa até R$ 50k. É nossa Garantia #1. O risco é todo nosso."
    },
    {
      question: "Vale para todas especialidades?",
      answer: "Sim! Temos 165 assistentes especializados cobrindo +50 especialidades médicas. De pediatria a cirurgia plástica, de cardiologia a psiquiatria. Se você é médico, funciona para você. O sistema conhece as particularidades de cada especialidade."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Perguntas Sobre Segurança CFM
          </h2>
          <p className="text-xl text-gray-700">
            Tudo que você precisa saber para publicar sem medo
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
                  <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
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
        <div className="mt-12 text-center bg-green-50 rounded-2xl p-8 border-2 border-green-200">
          <p className="text-2xl font-black text-gray-900 mb-4">
            Ainda tem medo?
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lembre-se: você tem 30 dias de garantia + cobertura até R$ 50k se houver processo.
          </p>
          <p className="text-xl font-black text-green-600">
            O risco é 100% nosso. Você só tem a ganhar.
          </p>
        </div>
      </div>
    </section>
  );
};
