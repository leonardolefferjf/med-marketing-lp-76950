import React from 'react';
import { Shield, Zap, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export const SolutionValidation = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            E Se Você Tivesse um{' '}
            <span className="text-green-600">Auditor do CFM</span>
            {' '}Checando TUDO Antes de Publicar?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sistema de validação em 5 passos garante 100% compliance antes do clique em "Publicar"
          </p>
        </div>

        {/* 5-Step Validation Process */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              1
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Você Cria</h3>
            <p className="text-sm text-gray-700">
              Gera conteúdo com IA ou escreve manualmente
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 text-center">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              2
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">IA Valida</h3>
            <p className="text-sm text-gray-700">
              Sistema analisa automaticamente contra CFM 2.336/2023
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 text-center">
            <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              3
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Alerta Problemas</h3>
            <p className="text-sm text-gray-700">
              Se detectar risco, mostra EXATAMENTE onde está o erro
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200 text-center">
            <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              4
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Sugere Correção</h3>
            <p className="text-sm text-gray-700">
              Oferece alternativa ética para o problema detectado
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
              5
            </div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Publica Seguro</h3>
            <p className="text-sm text-gray-700">
              Você clica em "Publicar" sem medo
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border-2 border-gray-300 shadow-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
            Exemplo Real do Sistema Funcionando
          </h3>

          <div className="space-y-6">
            {/* Your Text */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 mb-2">Você escreve:</p>
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                    <p className="text-gray-800 italic">
                      "Nosso tratamento revolucionário cura 100% dos casos de acne em apenas 30 dias! Resultados garantidos ou seu dinheiro de volta!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>

            {/* AI Alerts */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-red-900 mb-2">❌ Sistema detectou 4 problemas:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-800">
                      <span className="text-red-600 font-black">•</span>
                      <span>"Revolucionário" = Sensacionalismo (CFM 2.336/2023 Art. 7)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-800">
                      <span className="text-red-600 font-black">•</span>
                      <span>"Cura 100%" = Promessa de resultado (CFM 2.336/2023 Art. 5)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-800">
                      <span className="text-red-600 font-black">•</span>
                      <span>"Resultados garantidos" = Garantia impossível (CFM 2.336/2023 Art. 5)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-800">
                      <span className="text-red-600 font-black">•</span>
                      <span>"Dinheiro de volta" = Prática comercial irregular (CFM 2.336/2023 Art. 9)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>

            {/* AI Suggests */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-green-900 mb-2">✓ Sistema sugere alternativa ética:</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                    <p className="text-gray-800 italic">
                      "Tratamento moderno para acne pode apresentar resultados significativos em 30-60 dias, conforme estudos científicos. Cada caso é único e requer avaliação individualizada."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-gray-400" />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="text-2xl font-black mb-2">
                Você publica com 100% de tranquilidade
              </p>
              <p className="text-lg">
                Zero medo. Zero risco. Zero processo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-black text-gray-900">
            É como ter um advogado especialista em CFM <br className="hidden md:block" />
            revisando CADA palavra antes de você publicar.
          </p>
        </div>
      </div>
    </section>
  );
};
