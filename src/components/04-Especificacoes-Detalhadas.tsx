import React from 'react';

export const EspecificacoesDetalhadas = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const assistants = [
    {
      number: "1",
      title: "Analisador de Artigos",
      description: "VOCÊ ENVIA: Link ou PDF • ELE DEVOLVE: Resumo crítico com checklist de evidência",
      benefit: "✓ Entenda relevância em <15 min"
    },
    {
      number: "2", 
      title: "Analisador Sintópico",
      description: "VOCÊ ENVIA: 2+ artigos • ELE DEVOLVE: Comparação automática (semelhanças e lacunas)",
      benefit: "✓ Veja consenso e direções futuras"
    },
    {
      number: "3",
      title: "Gerador de Artigos Científicos", 
      description: "VOCÊ ENVIA: Objetivo + dados • ELE DEVOLVE: Estrutura científica completa (IMRaD)",
      benefit: "✓ Publique com mais aceitação"
    },
    {
      number: "4",
      title: "Revisor Científico",
      description: "VOCÊ ENVIA: Texto bruto • ELE DEVOLVE: Versão revisada conforme normas científicas",
      benefit: "✓ Elimine erros e melhore aprovação"
    },
    {
      number: "5",
      title: "Tradutor Científico",
      description: "VOCÊ ENVIA: Texto em EN/PT • ELE DEVOLVE: Tradução técnico-acadêmica fiel ao original",
      benefit: "✓ Alcance mais revistas e leitores"
    },
    {
      number: "6",
      title: "Formatador de Referências",
      description: "VOCÊ ENVIA: Lista de fontes • ELE DEVOLVE: Formatação Vancouver ou ABNT",
      benefit: "✓ Economize horas com normas"
    },
    {
      number: "7",
      title: "Extrator de Dados",
      description: "VOCÊ ENVIA: Tabelas e gráficos • ELE DEVOLVE: Dados limpos prontos para análise", 
      benefit: "✓ Ganhe tempo com organização"
    },
    {
      number: "8",
      title: "Guia de Metodologia",
      description: "VOCÊ ENVIA: Ideia ou tema • ELE DEVOLVE: Sugestão de desenho metodológico",
      benefit: "✓ Estruture seu projeto desde o início"
    },
    {
      number: "9",
      title: "Avaliador Crítico",
      description: "VOCÊ ENVIA: Artigo ou tese • ELE DEVOLVE: Avaliação com base em critérios de banca",
      benefit: "✓ Saiba o que corrigir antes da defesa"
    },
    {
      number: "10",
      title: "Sugestor de Periódicos",
      description: "VOCÊ ENVIA: Tema + tipo de estudo • ELE DEVOLVE: Lista de revistas compatíveis",
      benefit: "✓ Encontre onde publicar mais rápido"
    },
    {
      number: "11", 
      title: "Gerador de Resumos",
      description: "VOCÊ ENVIA: Artigo completo • ELE DEVOLVE: Versões ABNT e estruturada",
      benefit: "✓ Tenha o resumo certo para cada etapa"
    },
    {
      number: "12",
      title: "Analisador de Tendências",
      description: "VOCÊ ENVIA: Tema de pesquisa • ELE DEVOLVE: Insights atualizados de publicações recentes",
      benefit: "✓ Escolha temas com maior impacto"
    },
    {
      number: "13",
      title: "Verificador de Plágio",
      description: "VOCÊ ENVIA: Texto final • ELE DEVOLVE: Indicação de trechos com similaridade",
      benefit: "✓ Proteja sua autoria com segurança"
    },
    {
      number: "14",
      title: "Navegador de Literatura",
      description: "VOCÊ ENVIA: Tema + contexto • ELE DEVOLVE: Seleção automática de artigos relevantes",
      benefit: "✓ Economize horas em buscas e filtros"
    },
    {
      number: "15",
      title: "Criador de Apresentações", 
      description: "VOCÊ ENVIA: Conteúdo do trabalho • ELE DEVOLVE: Slides prontos para defesa ou congresso",
      benefit: "✓ Apresente com impacto e clareza"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            🎯 ESPECIFICAÇÕES DETALHADAS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-blue-400">15 Assistentes de IA</span> que fazem o trabalho pesado <span className="bg-yellow-400 text-black px-2">para você</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Cada GPT já vem configurado; basta colar o link dentro do ChatGPT e começar.
          </p>
        </div>

        {/* Grid de Assistentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {assistants.map((assistant, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{assistant.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{assistant.title}</h3>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                {assistant.description}
              </p>
              
              <div className="text-green-400 font-semibold text-sm">
                {assistant.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <button 
            onClick={scrollToOffer}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-colors shadow-lg mb-4"
          >
            QUERO ACESSO AOS 15 ASSISTENTES AGORA
          </button>
          <p className="text-gray-400 text-sm">
            Continue lendo para ver como funciona na prática
          </p>
        </div>
      </div>
    </section>
  );
};

export default EspecificacoesDetalhadas;