const ProblemsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header com destaque */}
        <div className="mb-12">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            O QUE IMPEDE MÉDICOS DE ENCHER A AGENDA?
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Você não está <span className="text-red-400">sozinho</span> nessa frustração
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Todo mês a mesma angústia - consultório com vagas abertas, enquanto médicos menos qualificados têm fila de espera.
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
                <h3 className="text-xl font-bold text-red-400 mb-2">Agenda vazia ou inconsistente</h3>
                <p className="text-gray-300">Mês bom, mês ruim. Impossível planejar. Insegurança financeira constante.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Zero tempo para marketing</h3>
                <p className="text-gray-300">Entre consultório, plantões e vida pessoal, quando fazer marketing? Dependência de convênios.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Medo de punição CFM</h3>
                <p className="text-gray-300">Posso postar isso? Isso é legal? Paralisia total por medo.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Investiu em agência e queimou dinheiro</h3>
                <p className="text-gray-300">R$ 3-5k/mês em agência genérica. Posts ruins, pacientes errados.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Não sabe criar conteúdo que converte</h3>
                <p className="text-gray-300">Post educativo mas ninguém agenda. Instagram tem seguidores mas não vira paciente.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Concorrentes menos qualificados lotam agenda</h3>
                <p className="text-gray-300">Médico medíocre com marketing bom vence médico excelente sem marketing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-400 text-black rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">
            🚨 Enquanto você lê isso, seus concorrentes estão usando IA para lotar a agenda!
          </h3>
          <p className="text-lg">
            A pergunta é — vai ficar assistindo ou vai agir?
          </p>
        </div>
      </div>
    </section>
  );
};

export { ProblemsSection };
