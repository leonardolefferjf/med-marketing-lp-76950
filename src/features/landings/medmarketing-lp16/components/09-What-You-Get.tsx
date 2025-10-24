import React from 'react';
import { Zap, Shield, Sparkles, Clock, CheckCircle2, TrendingUp, FileText, BookOpen, BarChart3, Users, Calendar, Target } from 'lucide-react';

export const WhatYouGet = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Plataforma Completa de Automação Médica
          </h2>
          <p className="text-xl text-gray-300">
            Tudo que você precisa para nunca mais sacrificar sua vida pelo marketing
          </p>
        </div>

        {/* Category 1: Automação Total */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 rounded-full p-3">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white">Automação Total 24/7</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white text-lg mb-2">164 Assistentes IA Especializados</p>
                  <p className="text-gray-300">Trabalham 24/7 criando todo seu marketing automaticamente</p>
                  <p className="text-blue-400 text-sm mt-2 font-bold">→ Economiza 9h/semana</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white text-lg mb-2">Sistema de Agendamento Inteligente</p>
                  <p className="text-gray-300">Posts publicados no horário ideal, automaticamente</p>
                  <p className="text-blue-400 text-sm mt-2 font-bold">→ Economiza 1h/semana</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white text-lg mb-2">Geração Automática de Conteúdo</p>
                  <p className="text-gray-300">Posts educativos, carrosséis, legendas - tudo automático</p>
                  <p className="text-blue-400 text-sm mt-2 font-bold">→ Economiza 3h/semana</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white text-lg mb-2">Validação Ética Automática CFM</p>
                  <p className="text-gray-300">Todo conteúdo validado antes de publicar</p>
                  <p className="text-blue-400 text-sm mt-2 font-bold">→ Zero risco + paz mental</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category 2: Ferramentas */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-600 rounded-full p-3">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white">Ferramentas Profissionais</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <FileText className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Criador de Legendas</p>
              <p className="text-gray-300 text-sm">Legendas otimizadas em segundos</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <Sparkles className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Gerador de Hashtags</p>
              <p className="text-gray-300 text-sm">Hashtags relevantes automaticamente</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <Calendar className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Calendário Editorial</p>
              <p className="text-gray-300 text-sm">Planejamento visual de 30 dias</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <BarChart3 className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Analytics Médico</p>
              <p className="text-gray-300 text-sm">Métricas que realmente importam</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <TrendingUp className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Otimizador de Conteúdo</p>
              <p className="text-gray-300 text-sm">Melhora posts automaticamente</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
              <Shield className="w-10 h-10 text-green-400 mb-3" />
              <p className="font-black text-white text-lg mb-2">Monitor de Ética</p>
              <p className="text-gray-300 text-sm">Alerta riscos em tempo real</p>
            </div>
          </div>
        </div>

        {/* Category 3: Módulos Educativos */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-600 rounded-full p-3">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white">Módulos de Treinamento</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white mb-1">Marketing Médico do Zero</p>
                  <p className="text-gray-300 text-sm">Fundamentos para quem está começando</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white mb-1">Ética e CFM</p>
                  <p className="text-gray-300 text-sm">Tudo sobre Resolução 2.336/2023</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white mb-1">Estratégias de Conteúdo</p>
                  <p className="text-gray-300 text-sm">O que postar para encher agenda</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-500">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-black text-white mb-1">Comunidade Exclusiva</p>
                  <p className="text-gray-300 text-sm">1.200+ médicos compartilhando resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Value */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center shadow-2xl">
          <Clock className="w-16 h-16 text-white mx-auto mb-4" />
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Tudo Funciona 24/7 em Background
          </p>
          <p className="text-xl text-white">
            Enquanto você dorme, janta com a família, ou atende pacientes
          </p>
        </div>
      </div>
    </section>
  );
};
