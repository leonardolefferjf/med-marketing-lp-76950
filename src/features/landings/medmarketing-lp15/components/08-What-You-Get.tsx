import React from 'react';
import { Shield, ShieldCheck, FileText, AlertTriangle, CheckCircle, Bot, Calendar, Hash, User, Lock, BookOpen, Zap } from 'lucide-react';

export const WhatYouGet = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Plataforma Completa de{' '}
            <span className="text-green-600">Segurança CFM</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tudo focado em eliminar seu medo e proteger sua carreira
          </p>
        </div>

        {/* 3 Categories */}
        <div className="space-y-8">
          {/* Category 1: Maximum Protection */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                🛡️ PROTEÇÃO MÁXIMA
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Validador CFM Automático
                </h4>
                <p className="text-sm text-gray-600">
                  Analisa 100% do conteúdo contra CFM 2.336/2023 antes de publicar
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Sistema de Alertas
                </h4>
                <p className="text-sm text-gray-600">
                  Mostra EXATAMENTE onde está o problema e qual artigo da resolução
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Sugestões Éticas
                </h4>
                <p className="text-sm text-gray-600">
                  IA oferece alternativas 100% compliance para cada problema detectado
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Base Legal Completa
                </h4>
                <p className="text-sm text-gray-600">
                  Resolução 2.336/2023 + jurisprudência + casos reais integrados
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-200">
                <Lock className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Atualizações Automáticas
                </h4>
                <p className="text-sm text-gray-600">
                  Sistema sempre atualizado com novas resoluções e mudanças do CFM
                </p>
              </div>
            </div>
          </div>

          {/* Category 2: AI Assistants */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 rounded-lg p-3">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                🤖 ASSISTENTES DE IA
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-200">
                <Bot className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  165 Assistentes Especializados
                </h4>
                <p className="text-sm text-gray-600">
                  Para +50 especialidades médicas, todos validados pelo CFM
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-200">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  50+ Templates Seguros
                </h4>
                <p className="text-sm text-gray-600">
                  Modelos pré-aprovados 100% compliance para diversos formatos
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-200">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Geração + Validação Simultânea
                </h4>
                <p className="text-sm text-gray-600">
                  Cria o conteúdo e valida eticamente ao mesmo tempo
                </p>
              </div>
            </div>
          </div>

          {/* Category 3: Extra Tools */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600 rounded-lg p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                📚 FERRAMENTAS EXTRAS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <Hash className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  200+ Hashtags
                </h4>
                <p className="text-sm text-gray-600">Otimizadas e seguras</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <Calendar className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Calendário
                </h4>
                <p className="text-sm text-gray-600">Planejamento completo</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <User className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Bio Generator
                </h4>
                <p className="text-sm text-gray-600">Perfis compliance</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  Hub CFM
                </h4>
                <p className="text-sm text-gray-600">Centro de compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Tudo Por R$ 997 Único
          </p>
          <p className="text-xl text-white/90">
            Proteção vitalícia contra processos CFM + paz de espírito para sempre
          </p>
        </div>
      </div>
    </section>
  );
};
