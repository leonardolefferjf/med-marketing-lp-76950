import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Clock, Shield, Zap, Check, X, Award, AlertTriangle, Play, ArrowRight, Users } from 'lucide-react';

export default function SolutionSection() {
  const [assistantCount, setAssistantCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Contador animado dos assistentes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let start = 0;
          const end = 165;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setAssistantCount(end);
              clearInterval(timer);
            } else {
              setAssistantCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const scrollToOffer = () => {
    const offerSection = document.querySelector(
      '#oferta-section, .oferta-section, #oferta, .oferta'
    );
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg">
            <Sparkles className="w-4 h-4" />
            A Solução Completa
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Apresentamos o{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              MedMarketingAI+
            </span>
          </h2>

          {/* Contador animado - NOVO */}
          <div ref={counterRef} className="mb-6">
            <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {assistantCount}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-bold">
              Assistentes de IA Especializados Trabalhando 24/7
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            A única plataforma de marketing médico com IA que resolve os{' '}
            <strong className="text-yellow-600">3 problemas de uma vez</strong>:{' '}
            tempo, custo e compliance CFM.
          </p>

          {/* Pillar Badges - NOVO */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-6">
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <span>✓</span> Sem cursos de 40 horas
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <span>✓</span> Sem agências de R$ 5k/mês
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <span>✓</span> Sem perder fins de semana
            </div>
          </div>

          {/* Social proof inline - NOVO */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-600" />
              <span><strong className="text-gray-900">Médicos</strong> em todo Brasil usando</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span><strong className="text-gray-900">100%</strong> validado CFM</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span><strong className="text-gray-900">4.9/5</strong> avaliação</span>
            </div>
          </div>
        </div>

        {/* Promessa Clara - OTIMIZADA */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-black rounded-2xl p-6 md:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <Sparkles className="w-12 h-12 md:w-16 md:h-16 mb-4" />
            <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              Automação completa do seu marketing em{' '}
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-lg">
                10 minutos
              </span>
            </h3>
            <p className="text-base md:text-xl leading-relaxed max-w-3xl">
              Da configuração até os primeiros posts publicados. Enquanto você atende pacientes,{' '}
              <strong>165 assistentes + 12 módulos profissionais</strong> geram conteúdo ético, persuasivo e 100% CFM para encher sua agenda.
            </p>
          </div>
        </div>

        {/* Prova Visual/Demo - NOVO */}
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-12 shadow-2xl border-2 border-gray-200">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-6">
            Veja a IA Gerando Conteúdo em Tempo Real
          </h3>
          
          {/* Placeholder para vídeo/gif - ADICIONAR DEPOIS */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
            <div className="relative z-10 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 md:w-16 md:h-16 text-yellow-600" />
              </div>
              <p className="text-gray-700 font-bold text-lg md:text-xl mb-2">
                🎬 Assista: IA criando post em 30 segundos
              </p>
              <p className="text-sm text-gray-500">
                (Adicionar vídeo demo da ferramenta aqui)
              </p>
            </div>
          </div>

          {/* Benefício visual do demo - NOVO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-black text-green-600 mb-1">30s</div>
              <div className="text-xs text-gray-600">Tempo de geração</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">3</div>
              <div className="text-xs text-gray-600">Cliques para começar</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-black text-purple-600 mb-1">0</div>
              <div className="text-xs text-gray-600">Conhecimento técnico</div>
            </div>
          </div>
        </div>

        {/* Como Funciona a Solução Completa - OTIMIZADO */}
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-12 shadow-xl border-2 border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-yellow-600" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
              Como Funciona a Solução Completa
            </h3>
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            O MedMarketingAI+ foi{' '}
            <strong className="text-yellow-600">
              construído exclusivamente para marketing médico brasileiro
            </strong>{' '}
            - eliminando cursos caros e agências mensais:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">
                    Base de conhecimento CFM
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Resolução CFM 2.336/2023 completa + melhores práticas validadas de +50 especialidades médicas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">
                    165 assistentes + 12 módulos completos
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Cada assistente domina UMA tarefa específica + módulos extras: templates, hashtags, verificador CFM, calendário, etc
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <Check className="w-10 h-10 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">
                    Validação automática 100% CFM
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Todo conteúdo passa por checagem ética automática antes de você publicar. Zero risco.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-500 hover:scale-105 transition-transform">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-10 h-10 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">
                    Plug & Play total
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Acessa, clica e usa. Zero configurações complexas. Zero curva de aprendizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilidade de Implementação - OTIMIZADA */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 md:p-10 mb-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-7 h-7 text-yellow-400" />
            <h3 className="text-2xl md:text-3xl font-black text-center">
              Facilidade Absurda de Usar
            </h3>
          </div>
          
          <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-8 text-center">
            3 cliques = conteúdo profissional pronto
          </p>

          {/* Passo a passo com storytelling - OTIMIZADO */}
          <div className="space-y-6 max-w-3xl mx-auto mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xl text-white mb-2">
                    Escolha o assistente
                  </h4>
                  <p className="text-gray-300 mb-3 text-sm md:text-base">
                    Navegue pelos 165 assistentes organizados por categoria: 
                    Posts, Stories, Reels, Campanhas, SEO...
                  </p>
                  <div className="bg-black/40 rounded-lg p-3 border-l-4 border-yellow-500">
                    <div className="text-yellow-400 text-xs font-bold mb-1">
                      EXEMPLO:
                    </div>
                    <div className="text-gray-300 text-sm">
                      "Criador de Posts Carrossel sobre Prevenção"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xl text-white mb-2">
                    Diga o que precisa (1 frase)
                  </h4>
                  <p className="text-gray-300 mb-3 text-sm md:text-base">
                    Escreva uma frase simples sobre o tema. 
                    A IA entende sua especialidade e gera conteúdo específico.
                  </p>
                  <div className="bg-black/40 rounded-lg p-3 border-l-4 border-yellow-500">
                    <div className="text-yellow-400 text-xs font-bold mb-1">
                      EXEMPLO:
                    </div>
                    <div className="text-gray-300 text-sm">
                      "Post sobre hipertensão para cardiologista"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-green-500/50 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xl text-white mb-2">
                    Pronto! Conteúdo gerado em 30 segundos
                  </h4>
                  <p className="text-gray-300 mb-3 text-sm md:text-base">
                    Post completo com: título persuasivo, texto educativo, 
                    hashtags, melhor horário de publicação e validação CFM.
                  </p>
                  <div className="bg-green-900/30 rounded-lg p-3 border-l-4 border-green-500">
                    <div className="text-green-400 text-xs font-bold mb-1">
                      RESULTADO:
                    </div>
                    <div className="text-gray-300 text-sm">
                      ✓ Copiar e colar direto no Instagram/Facebook<br/>
                      ✓ Ou ajustar com seu toque pessoal<br/>
                      ✓ 100% seguro de publicar (validado CFM)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl p-6 text-center">
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              Não precisa ser expert em marketing. Não precisa saber IA.
            </p>
            <p className="text-xl md:text-2xl font-black mt-2">
              Se você usa WhatsApp, você usa o MedMarketingAI+.
            </p>
          </div>
        </div>

        {/* Tabela Comparativa - OTIMIZADA PARA MOBILE */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl border-2 border-gray-200 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-7 h-7 text-yellow-600" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">
              Por Que MedMarketingAI+ É ÚNICO
            </h3>
          </div>

          {/* Versão Desktop - Tabela */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 md:p-4 font-bold text-gray-900 border-b-2 border-gray-300 text-sm md:text-base">
                    Característica
                  </th>
                  <th className="p-3 md:p-4 font-bold text-gray-700 border-b-2 border-gray-300 text-center text-xs md:text-sm">
                    Curso de<br/>Marketing
                  </th>
                  <th className="p-3 md:p-4 font-bold text-gray-700 border-b-2 border-gray-300 text-center text-xs md:text-sm">
                    Agência<br/>Tradicional
                  </th>
                  <th className="p-3 md:p-4 font-bold text-yellow-600 border-b-2 border-yellow-400 text-center bg-yellow-50 text-xs md:text-sm">
                    MedMarketing<br/>AI+
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 font-semibold text-gray-900 text-sm md:text-base">
                    Compliance CFM
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                      <span className="text-xs text-gray-600">Não conhece</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                      <span className="text-xs text-gray-600">Nem sempre</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-center bg-green-50">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                      <span className="text-xs font-black text-green-600">100% validado</span>
                    </div>
                  </td>
                </tr>

                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-3 md:p-4 font-semibold text-gray-900 text-sm md:text-base">
                    Custo
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="text-sm md:text-base text-red-600 font-bold">
                      R$ 2-5k
                    </div>
                    <div className="text-xs text-gray-500">(curso único)</div>
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="text-sm md:text-base text-red-600 font-bold">
                      R$ 5-15k/mês
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-center bg-yellow-50">
                    <div className="text-lg md:text-xl font-black text-green-600">
                      R$ 997
                    </div>
                    <div className="text-xs text-gray-600 font-bold">único</div>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 font-semibold text-gray-900 text-sm md:text-base">
                    Tempo para implementar
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="text-sm text-gray-700">40-80 horas</div>
                    <div className="text-xs text-gray-500">(+ aplicar na prática)</div>
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="text-sm text-gray-700">Reuniões semanais</div>
                    <div className="text-xs text-gray-500">(dependência contínua)</div>
                  </td>
                  <td className="p-3 md:p-4 text-center bg-yellow-50">
                    <div className="flex items-center justify-center gap-1">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <span className="text-lg md:text-xl font-black text-yellow-600">10 min</span>
                    </div>
                    <div className="text-xs text-gray-600">setup completo</div>
                  </td>
                </tr>

                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-3 md:p-4 font-semibold text-gray-900 text-sm md:text-base">
                    Especialização Médica
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                      <span className="text-xs text-gray-600">Você aprende</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                      <span className="text-xs text-gray-600">Eles fazem</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-center bg-green-50">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                      <span className="text-xs font-black text-green-600">+50 especialidades</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Versão Mobile - Cards */}
          <div className="md:hidden space-y-6">

            {/* Card: Compliance CFM */}
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                Compliance CFM
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Curso de Marketing</span>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="text-xs text-gray-600">Você aprende</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Agência Tradicional</span>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="text-xs text-gray-600">Nem sempre</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-500">
                  <span className="text-sm font-bold text-gray-900">MedMarketingAI+</span>
                  <div className="flex items-center gap-1">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-xs font-black text-green-600">100% validado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Custo */}
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Custo
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Curso de Marketing</span>
                  <div className="text-right">
                    <div className="text-sm text-red-600 font-bold">R$ 2-5k</div>
                    <div className="text-xs text-gray-500">(curso único)</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Agência Tradicional</span>
                  <div className="text-sm text-red-600 font-bold">R$ 5-15k/mês</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-2 border-yellow-500">
                  <span className="text-sm font-bold text-gray-900">MedMarketingAI+</span>
                  <div className="text-right">
                    <div className="text-xl font-black text-green-600">R$ 997</div>
                    <div className="text-xs text-gray-600 font-bold">único</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Especialização Médica */}
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-600" />
                Especialização Médica
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Curso de Marketing</span>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="text-xs text-gray-600">Você aprende</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Agência Tradicional</span>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="text-xs text-gray-600">Eles fazem</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-500">
                  <span className="text-sm font-bold text-gray-900">MedMarketingAI+</span>
                  <div className="flex items-center gap-1">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-xs font-black text-green-600">+50 especialidades</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Velocidade */}
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Velocidade
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">ChatGPT/IA Genérica</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-700">Lento</div>
                    <div className="text-xs text-gray-500">(criar prompts)</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Agência Tradicional</span>
                  <div className="text-sm text-gray-700">Dias/semanas</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-2 border-yellow-500">
                  <span className="text-sm font-bold text-gray-900">MedMarketingAI+</span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span className="text-xl font-black text-yellow-600">30s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Disponibilidade */}
            <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
              <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                Disponibilidade
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">ChatGPT/IA Genérica</span>
                  <span className="text-sm text-gray-700">Só quando usar</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-sm text-gray-700">Agência Tradicional</span>
                  <span className="text-sm text-gray-700">Horário comercial</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-500">
                  <span className="text-sm font-bold text-gray-900">MedMarketingAI+</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-xl font-black text-green-600">24/7</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Destaque pós-tabela - NOVO */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-500">
            <div className="text-center">
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                💡 A Diferença É Simples:
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Cursos exigem <strong className="text-red-600">tempo que você não tem</strong>.
                Agências são <strong className="text-red-600">mensalidades caras</strong>.
                MedMarketingAI+ é <strong className="text-green-600">especializado, automático e vitalício</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final da Seção - NOVO */}
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl border-4 border-yellow-500">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
            Pronto Para Transformar Sua Agenda?
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            165 assistentes + 12 módulos profissionais + validação CFM automática + acesso vitalício por apenas R$ 997
          </p>
          
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4"
          >
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mt-4">
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              Configuração em 10 minutos
            </span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-500" />
              100% Validado CFM
            </span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-blue-500" />
              Acesso Vitalício
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
