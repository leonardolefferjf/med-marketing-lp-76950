import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  provaSocial1,
  provaSocial2,
  provaSocial3,
  provaSocial4,
  provaSocial5,
  provaSocial6,
  provaSocial7,
  provaSocial8,
  provaSocial9,
  provaSocial10,
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-green-600 text-white px-6 py-2 rounded text-sm font-bold mb-6 uppercase">
            QUEM JÁ USA RECOMENDA
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            O que dizem os <span className="text-blue-600">centenas de profissionais</span> que já <span className="bg-yellow-300 px-2">transformaram</span> sua produção científica
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Não acredite apenas em nossas palavras. Veja depoimentos <strong>reais</strong> de profissionais que já estão usando o ArtigoAI+ em suas pesquisas
          </p>
        </div>

        {/* Carousel de Depoimentos */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-12">
          
          <div className="relative">
            {/* Imagem do Depoimento */}
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto mb-6">
              <img
                src={testimonialImages[currentSlide]} 
                alt={`Depoimento profissional ${currentSlide + 1}`}
                className="w-full h-auto rounded"
                loading="lazy"
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.05] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonialImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? 'bg-blue-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.05] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Depoimento {currentSlide + 1} de {testimonialImages.length} • Reprodução automática ativa
            </p>
          </div>
        </div>

        {/* CTA */}
        <button 
          onClick={scrollToOffer}
          className="bg-yellow-500 hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-xl text-black font-bold text-xl px-12 py-6 rounded-lg transition-all duration-200 shadow-lg"
        >
          EU TAMBÉM QUERO ESSES RESULTADOS
        </button>
        <p className="text-gray-600 text-sm mt-4">
          Transforme sua produção científica hoje mesmo
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
