import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo REALMENTE preciso investir?",
      answer: "Configuração inicial: 10 minutos uma única vez. Manutenção semanal: 10-20 minutos se você quiser revisar e ajustar algo (é opcional). A IA roda 24/7 automaticamente em background. Você pode literalmente não mexer em nada por semanas e o marketing continua rodando perfeitamente. Compare com 9h/semana do método manual - você economiza 8h40min toda semana."
    },
    {
      question: "Posso automatizar 100% ou preciso fazer algo manual?",
      answer: "Você pode automatizar 100%. A IA cria, valida pelo CFM, e pode até publicar automaticamente. Mas recomendamos revisar 10-20 min/semana por 2 motivos: (1) você mantém o controle de tudo que é publicado, (2) você pode dar inputs para melhorar ainda mais. Mas tecnicamente? Sim, pode deixar 100% no automático e só monitorar resultados."
    },
    {
      question: "Preciso entender de tecnologia ou IA?",
      answer: "Não! A interface é 100% intuitiva, feita para médicos que nunca usaram IA. É mais simples que usar Instagram ou WhatsApp. Você clica em botões grandes, a IA faz o trabalho pesado. Temos médicos de 60+ anos usando sem problemas. E se tiver qualquer dúvida, o suporte responde em até 24h + comunidade de 1.200+ médicos para ajudar."
    },
    {
      question: "Funciona se eu trabalho 60-70h/semana e estou exausto?",
      answer: "Funciona ESPECIALMENTE para você! É exatamente por isso que criamos o MedMarketingAI+. Se você já está trabalhando demais, é impossível adicionar 9h/semana de marketing. A automação resolve isso: você recupera 8h40min/semana que estava gastando OU que deveria estar gastando mas não consegue. É a única forma de ter marketing consistente sem sacrificar ainda mais sua saúde e família."
    },
    {
      question: "Em quanto tempo vejo resultados na agenda?",
      answer: "Marketing médico leva tempo (diferente de produto). Em média: Primeiros posts: imediatos (primeiro dia). Engajamento inicial: 2-4 semanas. Primeiros agendamentos vindos do marketing: 4-8 semanas. Agenda consistentemente cheia: 3-6 meses. MAS a economia de tempo? Essa é imediata. Você recupera 8h40min JÁ na primeira semana. O tempo recuperado é seu desde o dia 1."
    },
    {
      question: "E se eu quiser controle manual de algo específico?",
      answer: "Você tem controle total de tudo! Pode deixar 100% automatizado OU: (1) revisar cada post antes de publicar, (2) editar o que a IA criar, (3) criar conteúdo manual quando quiser, (4) ajustar tom de voz e estilo a qualquer momento. A automação é uma FERRAMENTA que economiza seu tempo, não uma prisão. Você decide o nível de automação que funciona pra você."
    },
    {
      question: "Posso pausar a automação se ficar muito ocupado?",
      answer: "Sim! Você pode pausar, despausar, acelerar, desacelerar - total flexibilidade. Mas aqui está o irônico: quando você fica MAIS ocupado é quando mais precisa da automação rodando. Se sua agenda explodiu de pacientes, é quando você tem MENOS tempo para marketing manual. A automação garante que o fluxo não pare, mantendo sua agenda cheia nos próximos meses, mesmo quando você está ocupado demais para pensar nisso."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Perguntas Sobre Automação e Tempo
          </h2>
          <p className="text-xl text-gray-700">
            Tudo que você precisa saber sobre recuperar sua vida
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
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
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
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

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <Clock className="w-12 h-12 text-white mx-auto mb-4" />
          <p className="text-2xl font-black text-white mb-4">
            Ainda com dúvidas?
          </p>
          <p className="text-lg text-white mb-6">
            Lembre-se: cada dia que passa são mais 1.3 horas perdidas com marketing manual.
            <br />
            Você tem garantia de 30 dias. Risco zero.
          </p>
          <a
            href="#oferta-section"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-black text-xl px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:scale-105"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};
