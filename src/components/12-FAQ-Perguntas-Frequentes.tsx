import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const FAQSection: React.FC = () => {
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section');
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      });
    }
  };

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
      question: 'Preciso ter o ChatGPT pago para usar o ArtigoAI+?',
      answer: 'Não. Funciona com a versão gratuita do ChatGPT. Porém, o plano grátis tem limites de uso e pode ser mais lento. Para uma experiência mais fluida, recomendamos o plano pago — mas não é obrigatório.'
    },
    {
      id: 'conhecimento-tecnologia',
      question: 'Preciso ter conhecimento prévio em tecnologia para usar?',
      answer: 'Não. Os 16 assistentes já vêm prontos para uso. Basta colar seu texto ou PDF e você recebe o resultado estruturado.'
    },
    {
      id: 'normas-academicas',
      question: 'O ArtigoAI+ segue normas acadêmicas (ABNT, Vancouver, etc.)?',
      answer: 'Sim. Os assistentes incluem formatadores automáticos que seguem os principais padrões internacionais aceitos em artigos científicos.'
    },
    {
      id: 'apenas-saude',
      question: 'Funciona apenas para profissionais da saúde?',
      answer: 'O foco é saúde, mas o ArtigoAI+ pode ser aplicado também em outras áreas acadêmicas e de pesquisa.'
    },
    {
      id: 'tempo-finalizacao',
      question: 'Em quanto tempo consigo finalizar meu artigo ou tese?',
      answer: 'Depende do estágio atual do seu trabalho, mas a maioria dos usuários relata redução de meses para semanas — e em alguns casos, dias.'
    },
    {
      id: 'verificacao-plagio',
      question: 'Posso confiar que não haverá plágio?',
      answer: 'Sim. O ArtigoAI+ conta com um verificador de plágio integrado, que identifica trechos semelhantes e protege sua autoria.'
    },
    {
      id: 'suporte-duvidas',
      question: 'Como funciona o suporte se eu tiver dúvidas?',
      answer: 'Você terá acesso ao Hotmart Tutor, que responde dúvidas 24h dentro da área de membros, além de uma equipe de suporte dedicada.'
    },
    {
      id: 'instalacao-software',
      question: 'Preciso instalar algum programa ou software?',
      answer: 'Não. O acesso é 100% online, direto pelo navegador. Você pode usar de qualquer computador ou celular.'
    },
    {
      id: 'parcelamento',
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim. Você pode pagar à vista ou parcelar em até 12x no cartão.'
    },
    {
      id: 'garantia',
      question: 'E se eu não gostar do ArtigoAI+?',
      answer: 'Você tem 30 dias de garantia total. Se não estiver satisfeito, devolvemos 100% do seu dinheiro sem burocracia.'
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            PERGUNTAS FREQUENTES
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Tire Suas <span className="text-blue-600">Últimas Dúvidas</span> Antes de Garantir Seu Acesso
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Respostas diretas para as principais dúvidas sobre o <strong>ArtigoAI+</strong>
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4 mb-12 text-left">
          {faqItems.map(item => {
            const isActive = activeItems.includes(item.id);
            
            return (
              <div 
                key={item.id} 
                className={`bg-gray-50 border border-gray-200 rounded-lg overflow-hidden transition-all ${
                  isActive ? 'border-blue-300 shadow-lg' : 'hover:border-gray-300'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-4">
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isActive ? 'bg-blue-200 rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isActive ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Pronto para Transformar Sua Produção Científica?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Não perca mais tempo com dúvidas. <strong className="text-red-600">A oferta termina hoje</strong> e você tem 30 dias de garantia total.
          </p>
          <button 
            onClick={scrollToOffer}
            className="bg-yellow-500 hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-xl text-black font-bold text-xl px-12 py-6 rounded-lg transition-all duration-200 shadow-lg"
          >
            GARANTIR MEU ACESSO VITALÍCIO AGORA
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Acesso vitalício • R$ 297 • Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
