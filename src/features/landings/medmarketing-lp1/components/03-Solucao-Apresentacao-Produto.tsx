import React from 'react';

export const SolucaoApresentacaoProduto = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            A SOLUÇÃO QUE MÉDICOS ESTAVAM ESPERANDO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            <span className="text-blue-600">MedMarketingAI+</span> - 165 Assistentes de IA Validados pelo CFM
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A primeira e única plataforma de marketing médico com IA que garante compliance total com CFM 2.336/2023
          </p>
        </div>

        {/* Como Funciona */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            COMO FUNCIONA:
          </h3>
          
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-gray-700 text-lg">
                Escolhe o assistente certo para sua necessidade (post Instagram, anúncio Google, email pacientes)
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-gray-700 text-lg">
                Cola o link no ChatGPT
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-gray-700 text-lg">
                Recebe conteúdo pronto, ético e que converte
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">1. COMPLIANCE CFM</div>
            <p className="text-gray-700">Validado com resolução 2.336/2023 completa</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2. CONVERSÃO</div>
            <p className="text-gray-700">Copy baseada em psicologia da persuasão médica</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">3. VELOCIDADE</div>
            <p className="text-gray-700">De ideia a post publicado em menos de 5 minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
