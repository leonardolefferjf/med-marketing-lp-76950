const ProblemsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header com destaque */}
        <div className="mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            ⚠️ O PROBLEMA (você vai se identificar)
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Por que a maioria dos profissionais da saúde está <span className="text-red-400">TRAVADA</span> na produção científica?
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Pesquisas mostram que profissionais levam <strong className="text-yellow-400">6+ meses</strong> para escrever um artigo que poderia ser feito em dias
          </p>
        </div>

        {/* Lista de Problemas */}
        <div className="text-left max-w-3xl mx-auto space-y-6 mb-12">
          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Sobrecarga de Leitura</h3>
                <p className="text-gray-300">Pilhas de PDFs que nunca acabam. Horas perdidas tentando extrair o que realmente importa de cada artigo.</p>
                <div className="text-red-400 font-bold mt-2">Resultado: Paralisia por informação</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Insegurança Metodológica</h3>
                <p className="text-gray-300">Dúvida constante sobre a qualidade metodológica dos estudos. Medo de cometer erros na análise crítica.</p>
                <div className="text-red-400 font-bold mt-2">Resultado: Bloqueio na escrita</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Tempo Escasso</h3>
                <p className="text-gray-300">Falta de tempo para transformar dados em artigos publicáveis. Rotina clínica consome toda energia criativa.</p>
                <div className="text-red-400 font-bold mt-2">Resultado: Projetos eternamente inacabados</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Formatação e Normas</h3>
                <p className="text-gray-300">Horas perdidas com formatação ABNT, Vancouver, referências. Tempo que deveria ser investido no conteúdo.</p>
                <div className="text-red-400 font-bold mt-2">Resultado: Frustração e procrastinação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto Final */}
        <div className="bg-red-900 border-2 border-red-500 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            RESULTADO? Horas desperdiçadas e publicações adiadas.
          </h3>
          <div className="text-lg text-gray-200 space-y-2">
            <p>❌ <strong>Meses sem publicar</strong> nada relevante</p>
            <p>❌ <strong>Oportunidades perdidas</strong> de reconhecimento</p>
            <p>❌ <strong>Estresse acadêmico</strong> e bloqueios criativos</p>
            <p>❌ <strong>Carreira estagnada</strong> por falta de publicações</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-400 text-black rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">
            🚨 Você não precisa sofrer mais com isso!
          </h3>
          <p className="text-lg mb-4">
            Você não precisa sofrer mais com bloqueios, pilhas de PDFs, medo da banca ou revisões intermináveis.
          </p>
          <div className="text-sm font-semibold">
            Com o ArtigoAI+, você estrutura seu artigo com segurança ⬇️
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
