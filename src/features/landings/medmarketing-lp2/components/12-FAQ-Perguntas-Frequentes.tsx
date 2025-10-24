import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const toggleFaq = (itemId: string) => {
    setActiveItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const faqItems = [
    {
      id: 'chatgpt-pago',
      question: 'Preciso ter o ChatGPT pago para usar o MedMarketingAI+?',
      answer: 'Não. Funciona com a versão gratuita do ChatGPT. Porém, o plano grátis tem limites de uso e pode ser mais lento. Para uma experiência mais fluida e sem limites, recomendamos o plano pago — mas não é obrigatório.'
    },
    {
      id: 'conhecimento-tecnologia',
      question: 'Preciso saber usar IA ou ter conhecimento técnico?',
      answer: 'Não. Se você sabe usar WhatsApp, sabe usar o MedMarketingAI+. Os 165 assistentes já vêm prontos para uso. Basta escolher o assistente, digitar o que precisa e receber o conteúdo pronto em 30 segundos.'
    },
    {
      id: 'cfm-compliance',
      question: 'O conteúdo gerado está 100% dentro das normas do CFM?',
      answer: 'Sim. Todos os 165 assistentes foram treinados com base na resolução CFM 2.336/2023 e passam por validação automática antes de você publicar. Zero risco de infringir regras éticas.'
    },
    {
      id: 'apenas-medicos',
      question: 'Funciona para qualquer especialidade médica?',
      answer: 'Sim! O MedMarketingAI+ foi treinado com conteúdo de +50 especialidades médicas. Funciona para cardiologia, dermatologia, ortopedia, ginecologia, pediatria e todas as demais especialidades.'
    },
    {
      id: 'tempo-resultados',
      question: 'Em quanto tempo vejo resultados na minha agenda?',
      answer: 'A maioria dos médicos relata os primeiros resultados em 30-60 dias: mais seguidores, maior alcance e novas consultas vindas do Instagram/Facebook. Em 90 dias, o impacto na agenda é significativo.'
    },
    {
      id: 'marketing-anterior',
      question: 'Já tentei marketing antes e não funcionou. Isso é diferente?',
      answer: 'Sim. Diferente de agências tradicionais ou ChatGPT genérico, o MedMarketingAI+ foi treinado EXCLUSIVAMENTE para marketing médico brasileiro, com validação CFM automática. É plug & play — você não precisa saber criar prompts ou contratar especialistas.'
    },
    {
      id: 'suporte-duvidas',
      question: 'Como funciona o suporte se eu tiver dúvidas?',
      answer: 'Você terá acesso ao Hotmart Tutor, que responde dúvidas 24h dentro da área de membros, além de uma equipe de suporte dedicada. Também recebe tutoriais completos e guias práticos.'
    },
    {
      id: 'instalacao-software',
      question: 'Preciso instalar algum programa ou software?',
      answer: 'Não. O acesso é 100% online, direto pelo navegador. Você pode usar de qualquer computador ou celular. Basta ter acesso ao ChatGPT (versão gratuita ou paga).'
    },
    {
      id: 'parcelamento',
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim. Você pode pagar à vista (R$ 497) ou parcelar em até 12x de R$ 49,32 no cartão de crédito.'
    },
    {
      id: 'garantia',
      question: 'E se eu não gostar do MedMarketingAI+?',
      answer: 'Você tem 30 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do seu dinheiro sem burocracia. Risco ZERO para você.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <HelpCircle className="w-5 h-5" />
            PERGUNTAS FREQUENTES
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Tire Suas <span className="text-blue-600">Últimas Dúvidas</span> Antes de Garantir Seu Acesso
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Respostas diretas para as principais dúvidas sobre o <strong className="text-gray-900">MedMarketingAI+</strong>
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqItems.map(item => {
            const isActive = activeItems.includes(item.id);
            
            return (
              <div 
                key={item.id} 
                className={`bg-white border-2 rounded-xl overflow-hidden transition-all shadow-lg ${
                  isActive ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  
                  <div className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isActive ? 'bg-blue-600 rotate-180' : ''
                  }`}>
                    <ChevronDown className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isActive ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 border-t-2 border-gray-200 pt-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota Adicional */}
        <div className="text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-900">Ainda tem dúvidas?</strong> Entre em contato pelo suporte 
            após a compra. Nossa equipe está pronta para ajudar você a começar.
          </p>
        </div>

      </div>
    </section>
  );
}
