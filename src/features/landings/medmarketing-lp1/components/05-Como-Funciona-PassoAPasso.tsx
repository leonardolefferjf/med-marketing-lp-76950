import React from 'react';

export const ComoFuncionaPassoAPasso = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            SIMPLES ASSIM - 3 PASSOS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            De <span className="text-red-600">zero</span> a marketing profissional em <span className="text-green-600">menos de 10 minutos</span>
          </h2>
        </div>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Passo 1 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Escolhe o assistente</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Acessa o dashboard MedMarketing</li>
              <li>• Filtra por objetivo (ex: quero encher agenda)</li>
              <li>• Clica no assistente ideal</li>
            </ul>
          </div>

          {/* Passo 2 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Cola no ChatGPT</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Copia o link do assistente</li>
              <li>• Cola no ChatGPT</li>
              <li>• Pronto - já está conectado</li>
            </ul>
          </div>

          {/* Passo 3 */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Recebe conteúdo pronto</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Responde as perguntas do assistente</li>
              <li>• Recebe post/anúncio/email completo</li>
              <li>• Copia e publica</li>
            </ul>
          </div>
        </div>

        {/* Resultados */}
        <div className="text-center bg-yellow-100 border border-yellow-300 rounded-lg p-8">
          <div className="text-2xl font-bold text-black mb-2">
            TEMPO TOTAL: 5-10 minutos
          </div>
          <div className="text-xl text-gray-700">
            COMPLEXIDADE: Zero - se usa ChatGPT, já sabe usar
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaPassoAPasso;
