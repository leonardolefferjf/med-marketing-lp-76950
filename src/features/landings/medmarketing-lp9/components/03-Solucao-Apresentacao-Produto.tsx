import React, { useState, useEffect, useRef } from 'react';
import { Shield, ShieldCheck, Lock, Zap, Check, Award, Play, ArrowRight, Users, AlertTriangle } from 'lucide-react';

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

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg">
            <ShieldCheck className="w-4 h-4" />
            A Solução Com Segurança CFM
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Apresentamos o{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              MedMarketingAI+
            </span>
          </h2>

          {/* Contador animado */}
          <div ref={counterRef} className="mb-6">
            <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {assistantCount}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-bold">
              Assistentes de IA + Validação CFM Automática
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            A única plataforma de marketing médico com IA que{' '}
            <strong className="text-green-600">valida compliance CFM automaticamente</strong>{' '}
            em cada post, ANTES de você publicar.
          </p>

          {/* Social proof inline */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-600" />
              <span><strong className="text-gray-900">Médicos</strong> em todo Brasil usando</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span><strong className="text-gray-900">Zero processos</strong> CFM</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-600" />
              <span><strong className="text-gray-900">100%</strong> validado</span>
            </div>
          </div>
        </div>

        {/* Promessa Clara - Segurança */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl p-6 md:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 mb-4" />
            <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              Poste com confiança total:{' '}
              <span className="bg-white text-green-600 px-3 py-1 rounded-lg">
                validação CFM automática
              </span>
            </h3>
            <p className="text-base md:text-xl leading-relaxed max-w-3xl">
              Cada post passa por <strong>3 camadas de validação</strong> contra a resolução CFM 2.336/2023.
              Se houver risco, sistema alerta e sugere correção. Se estiver seguro, você recebe selo de aprovação.
            </p>
          </div>
        </div>

        {/* Como funciona a segurança */}
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-12 shadow-2xl border-2 border-green-200">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
            Como a Validação CFM Te Protege
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-green-600">1</span>
              </div>
              <h4 className="font-black text-gray-900 mb-2">Você Cria o Post</h4>
              <p className="text-sm text-gray-600">
                Use qualquer dos 165 assistentes IA para gerar conteúdo sobre sua especialidade
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-yellow-600">2</span>
              </div>
              <h4 className="font-black text-gray-900 mb-2">Sistema Valida</h4>
              <p className="text-sm text-gray-600">
                3 camadas analisam seu texto e imagens contra CFM 2.336/2023 em segundos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-black text-gray-900 mb-2">Você Publica Tranquilo</h4>
              <p className="text-sm text-gray-600">
                Com selo "✓ Aprovado CFM" e certificado digital de compliance
              </p>
            </div>
          </div>

          {/* Exemplo visual */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-600">SEM validação</p>
                <p className="text-2xl font-black text-red-600">Risco</p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400" />

              <div className="text-center">
                <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-600">COM validação</p>
                <p className="text-2xl font-black text-green-600">Segurança</p>
              </div>
            </div>
          </div>
        </div>

        {/* O que está incluído - Foco em segurança */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
            O Que Você Recebe Para Ter Segurança Total
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    Validação CFM Automática
                  </h4>
                  <p className="text-sm text-gray-600">
                    3 camadas de análise contra resolução 2.336/2023. Alerta vermelho se houver risco, selo verde se aprovado.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    Certificado Digital de Compliance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cada post aprovado gera relatório técnico provando conformidade. Use como proteção em caso de denúncia.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    165 Assistentes IA Especializados
                  </h4>
                  <p className="text-sm text-gray-600">
                    Geram conteúdo já formatado para passar na validação CFM. Você só ajusta e publica.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    Banco de Dados de Processos CFM
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sistema cruzado com +500 casos reais de processos éticos. Sabe exatamente o que evitar.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    Sugestões de Correção Automáticas
                  </h4>
                  <p className="text-sm text-gray-600">
                    Se algo estiver errado, sistema mostra a frase problemática E oferece alternativa ética no lugar.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-500 transition-all bg-green-50">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 rounded-lg p-3 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-black text-green-900 mb-2">
                    🛡️ Garantia de Cobertura de Multa
                  </h4>
                  <p className="text-sm text-green-800 font-bold">
                    Se você sofrer multa usando nosso sistema (nunca aconteceu), pagamos até R$ 50 mil por você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-2xl transition-all duration-200 shadow-2xl hover:scale-105 mb-4"
          >
            QUERO SEGURANÇA CFM AUTOMÁTICA
            <ArrowRight className="w-7 h-7" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-600" />
              Acesso Imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-600" />
              Garantia 30 dias
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-green-600" />
              Cobertura de Multa
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
