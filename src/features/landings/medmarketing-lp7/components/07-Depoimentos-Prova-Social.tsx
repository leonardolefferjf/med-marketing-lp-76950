import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Users, Star, 
  CheckCircle, Maximize2, X, Play, Pause,
  Shield, Award, TrendingUp
} from 'lucide-react';

// Imagens de prova social locais
import provaSocial1 from '@/assets/suites/prova-social1-scaled.jpg';
import provaSocial2 from '@/assets/suites/prova-social2-scaled.jpg';
import provaSocial3 from '@/assets/suites/prova-social3-scaled.jpg';
import provaSocial4 from '@/assets/suites/prova-social4-scaled.jpg';
import provaSocial5 from '@/assets/suites/prova-social5-scaled.jpg';
import provaSocial6 from '@/assets/suites/prova-social6-scaled.jpg';
import provaSocial7 from '@/assets/suites/prova-social7-scaled.jpg';
import provaSocial8 from '@/assets/suites/prova-social8-scaled.jpg';
import provaSocial9 from '@/assets/suites/prova-social9-scaled.jpg';
import provaSocial10 from '@/assets/suites/prova-social10-scaled.jpg';

const testimonialImages = [
  provaSocial1, provaSocial2, provaSocial3, provaSocial4, provaSocial5,
  provaSocial6, provaSocial7, provaSocial8, provaSocial9, provaSocial10
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonialImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') setIsZoomed(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

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
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg">
            <Users className="w-4 h-4" />
            Médicos Reais • Resultados Reais
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            O Que Dizem os Médicos{' '}
            <span className="text-green-600">de Todo o Brasil</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            Veja prints de médicos que já estão usando o MedMarketingAI+
            para transformar suas práticas e encher suas agendas
          </p>

          {/* Trust Elements - SIMPLIFICADO */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700 font-semibold">4.9/5.0 avaliação</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-semibold">Médicos de todo Brasil</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-semibold">+250% crescimento médio</span>
            </div>
          </div>
        </div>

        {/* Prova Social Numérica - OTIMIZADO */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-12 shadow-xl border-2 border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="bg-yellow-50 rounded-xl p-4 hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">4.9/5.0</div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold">Avaliação média</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 hover:scale-105 transition-transform">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-black text-gray-900">+250%</div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold">Crescimento médio</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 hover:scale-105 transition-transform">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">💰</span>
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">5-10x</div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold">Mais consultas</div>
            </div>
          </div>
        </div>

        {/* Carousel de Depoimentos - OTIMIZADO */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 rounded-2xl p-6 md:p-10 shadow-xl">
          
          {/* Badge de Número - SIMPLIFICADO */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              Depoimento #{currentSlide + 1}
            </div>
          </div>

          <div className="relative">
            {/* Imagem do Depoimento com Zoom */}
            <div 
              className={`bg-white rounded-xl p-4 shadow-2xl max-w-4xl mx-auto mb-6 cursor-zoom-in ${
                isZoomed ? 'cursor-zoom-out' : ''
              }`}
              onClick={toggleZoom}
            >
              <img 
                src={testimonialImages[currentSlide]} 
                alt={`Depoimento real de médico ${currentSlide + 1}`}
                className={`w-full h-auto rounded-lg transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                loading="lazy"
              />
              
              {/* Hint de zoom - NOVO */}
              {!isZoomed && (
                <div className="absolute top-8 right-8 bg-black/70 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  Clique para ampliar
                </div>
              )}
            </div>

            {/* Progress Bar - NOVO */}
            {isPlaying && (
              <div className="mb-6 max-w-4xl mx-auto">
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-100"
                    style={{ 
                      width: `${((currentSlide + 1) / testimonialImages.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/* Navigation - OTIMIZADO */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Play/Pause Button - NOVO */}
              <button
                onClick={togglePlay}
                className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                aria-label={isPlaying ? "Pausar carrossel" : "Reproduzir carrossel"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              
              <div className="flex gap-2">
                {testimonialImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-green-600 w-8' 
                        : 'bg-gray-400 hover:bg-gray-500 w-3'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-sm font-semibold mb-1">
                Depoimento {currentSlide + 1} de {testimonialImages.length}
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
                {isPlaying ? (
                  <>
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Troca automática a cada 5 segundos
                  </>
                ) : (
                  <>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
                    Pausado
                  </>
                )}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                💡 Use as setas do teclado (← →) para navegar
              </p>
            </div>
          </div>
        </div>

        {/* Nota Rodapé - OTIMIZADA */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Todos os prints são de médicos reais usando MedMarketingAI+.
                Resultados podem variar de acordo com a especialidade médica,
                frequência de uso e estratégias aplicadas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Após Depoimentos - NOVO */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
            Seja o Próximo Caso de Sucesso
          </h3>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Esses médicos já transformaram suas práticas com IA. 
            Sua vez de ter agenda 90-100% lotada.
          </p>
          
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-green-700 font-black text-lg md:text-xl px-10 md:px-16 py-5 md:py-6 rounded-xl transition-all duration-200 shadow-2xl hover:scale-105"
          >
            GARANTIR MINHA TRANSFORMAÇÃO
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-green-100">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Acesso imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              R$ 997 único
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Garantia 30 dias
            </span>
          </div>
        </div>

        {/* Modal Fullscreen (se implementar depois) */}
        {isZoomed && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={toggleZoom}
          >
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              onClick={toggleZoom}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={testimonialImages[currentSlide]} 
              alt={`Depoimento ${currentSlide + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm">
                Depoimento {currentSlide + 1} de {testimonialImages.length}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
