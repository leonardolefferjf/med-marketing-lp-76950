import React from 'react';
import { Shield, ShieldCheck, AlertTriangle, CheckCircle2, FileText, Scan, Lock } from 'lucide-react';

export default function CFMValidationProcess() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            MECANISMO DE VALIDAÇÃO CFM
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Como Funciona a{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Validação Automática
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-bold">
            3 camadas de segurança analisam seu conteúdo ANTES de você publicar
          </p>
        </div>

        {/* Processo Visual */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-green-200">

            {/* Camada 1: Análise Textual */}
            <div className="mb-8 pb-8 border-b-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Análise Textual Completa
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sistema escaneia cada palavra e frase do seu conteúdo em busca de termos proibidos pela resolução CFM 2.336/2023
                  </p>
                </div>
                <Scan className="w-8 h-8 text-green-600" />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm font-bold text-gray-600 mb-3">O QUE É VERIFICADO:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Promessas de resultado
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Termos sensacionalistas
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Autopromoção excessiva
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Menções de preço/desconto
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Comparações com concorrentes
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Técnicas não reconhecidas
                  </div>
                </div>
              </div>
            </div>

            {/* Camada 2: Análise de Contexto */}
            <div className="mb-8 pb-8 border-b-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Análise de Contexto e Imagens
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Avalia o contexto geral do post e valida imagens (antes/depois, procedimentos, identificação de pacientes)
                  </p>
                </div>
                <FileText className="w-8 h-8 text-green-600" />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm font-bold text-gray-600 mb-3">VALIDAÇÕES DE CONTEXTO:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tom geral do post (educativo vs promocional)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fotos de antes/depois possuem autorização explícita mencionada?</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Imagens são educativas ou sensacionalistas?</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Procedimentos mostrados são reconhecidos cientificamente?</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Camada 3: Cruzamento com Base CFM */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-black text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Cruzamento com Base de Processos CFM
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Compara seu conteúdo com padrões de posts que resultaram em processos éticos reais
                  </p>
                </div>
                <Lock className="w-8 h-8 text-green-600" />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm font-bold text-gray-600 mb-3">BANCO DE DADOS PROPRIETÁRIO:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>+500 casos reais de processos éticos analisados</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Padrões de conteúdo que geraram multas e penalidades</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Atualização contínua com novas resoluções e jurisprudências</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Resultado da Validação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Resultado: RISCO DETECTADO */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Se RISCO for Detectado
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p className="font-bold text-red-900 mb-2">🚨 Alerta Vermelho</p>
                <p className="text-sm text-red-800">
                  Sistema destaca exatamente qual frase ou imagem está em desconformidade
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p className="font-bold text-red-900 mb-2">📋 Explicação Detalhada</p>
                <p className="text-sm text-red-800">
                  Mostra qual artigo da resolução CFM está sendo violado e por quê
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p className="font-bold text-red-900 mb-2">✏️ Sugestão de Correção</p>
                <p className="text-sm text-red-800">
                  Oferece alternativa ética e conforme para você usar no lugar
                </p>
              </div>

              <div className="bg-red-600 text-white p-4 rounded-xl text-center">
                <p className="font-black">❌ BLOQUEIO DE PUBLICAÇÃO</p>
                <p className="text-sm mt-1">Você não consegue publicar até corrigir</p>
              </div>
            </div>
          </div>

          {/* Resultado: APROVADO */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500 relative">
            <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-black">
              SEGURO
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Se APROVADO
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                <p className="font-bold text-green-900 mb-2">✓ Selo Verde</p>
                <p className="text-sm text-green-800">
                  Você recebe o selo "✓ Aprovado CFM 2.336/2023" no seu post
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                <p className="font-bold text-green-900 mb-2">📄 Certificado Digital</p>
                <p className="text-sm text-green-800">
                  Relatório técnico provando que o post passou pelas 3 camadas de validação
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                <p className="font-bold text-green-900 mb-2">🛡️ Proteção Garantida</p>
                <p className="text-sm text-green-800">
                  Se houver processo (nunca houve), cobrimos a multa até R$ 50k
                </p>
              </div>

              <div className="bg-green-600 text-white p-4 rounded-xl text-center">
                <p className="font-black">✅ LIBERADO PARA PUBLICAR</p>
                <p className="text-sm mt-1">Poste com tranquilidade total</p>
              </div>
            </div>
          </div>

        </div>

        {/* Exemplo Prático em Ação */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Veja a Validação em Ação (Exemplo Real)
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Texto Original com Problema */}
            <div>
              <p className="text-sm font-bold text-gray-400 mb-2">VOCÊ ESCREVE:</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
                <p className="text-lg text-white">
                  "Elimine <span className="bg-red-500 px-2 py-1 rounded font-black">100% das manchas</span> com
                  nosso <span className="bg-red-500 px-2 py-1 rounded font-black">tratamento revolucionário</span> por apenas
                  <span className="bg-red-500 px-2 py-1 rounded font-black"> R$ 599</span>! Resultados
                  <span className="bg-red-500 px-2 py-1 rounded font-black"> garantidos</span>."
                </p>
              </div>
            </div>

            {/* Alerta do Sistema */}
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
              <div className="flex-1 bg-red-500/20 border-2 border-red-500 rounded-xl p-4">
                <p className="font-black text-red-400 mb-2">🚨 4 PROBLEMAS DETECTADOS</p>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• "100% das manchas" = promessa de resultado (Art. 5º, IV)</li>
                  <li>• "revolucionário" = sensacionalismo (Art. 5º, IV)</li>
                  <li>• "R$ 599" = anúncio de preço (Art. 8º)</li>
                  <li>• "garantidos" = promessa absoluta (Art. 5º, IV)</li>
                </ul>
              </div>
            </div>

            {/* Sugestão Corrigida */}
            <div>
              <p className="text-sm font-bold text-green-400 mb-2">SUGESTÃO DO SISTEMA:</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-green-500">
                <p className="text-lg text-white">
                  "Tratamento dermatológico pode <span className="bg-green-500 px-2 py-1 rounded font-black">reduzir significativamente manchas visíveis</span>,
                  conforme <span className="bg-green-500 px-2 py-1 rounded font-black">evidências científicas publicadas</span>.
                  <span className="bg-green-500 px-2 py-1 rounded font-black"> Agende consulta para avaliação personalizada</span>."
                </p>
              </div>
            </div>

            {/* Selo de Aprovação */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-green-400 animate-pulse" />
              <div className="flex-1 bg-green-500/20 border-2 border-green-500 rounded-xl p-4">
                <p className="font-black text-green-400">
                  ✓ APROVADO CFM 2.336/2023 - Pode publicar com segurança
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block max-w-2xl">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Isso É Ter Segurança Jurídica de Verdade
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Não é "achar que está tudo bem". É <strong>ter certeza técnica</strong> de que seu conteúdo está 100% conforme.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold">
              👇 Veja a comparação de risco abaixo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
