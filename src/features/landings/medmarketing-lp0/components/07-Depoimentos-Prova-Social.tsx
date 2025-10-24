import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Star } from 'lucide-react';

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

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg">
            <Users className="w-5 h-5" />
            MÉDICOS QUE JÁ USAM RECOMENDAM
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            O que dizem{' '}
            <span className="text-green-600">centenas de médicos</span>{' '}
            que já{' '}
            <span className="bg-yellow-400 px-3 py-1 rounded-lg inline-block">transformaram</span>{' '}
            seu marketing médico
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Não acredite apenas em nossas palavras. Veja depoimentos{' '}
            <strong className="text-gray-900">reais</strong> de médicos que já estão usando o MedMarketingAI+ para encher suas agendas
          </p>
        </div>

        {/* Prova Social Numérica */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-12 shadow-xl border-2 border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-black text-gray-900">42+</div>
              <div className="text-sm text-gray-600">Médicos ativos</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-3xl font-black text-gray-900">4.9/5.0</div>
              <div className="text-sm text-gray-600">Avaliação média</div>
            </div>
            <div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📈</span>
              </div>
              <div className="text-3xl font-black text-gray-900">+250%</div>
              <div className="text-sm text-gray-600">Crescimento médio</div>
            </div>
            <div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">💰</span>
              </div>
              <div className="text-3xl font-black text-gray-900">5-10x</div>
              <div className="text-sm text-gray-600">Mais consultas</div>
            </div>
          </div>
        </div>

        {/* Carousel de Depoimentos */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 rounded-2xl p-6 md:p-10 shadow-xl">
          
          <div className="relative">
            {/* Imagem do Depoimento */}
            <div className="bg-white rounded-xl p-4 shadow-2xl max-w-3xl mx-auto mb-8">
              <img
                src={testimonialImages[currentSlide]} 
                alt={`Depoimento de médico ${currentSlide + 1}`}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonialImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-green-600 w-8'
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-sm font-semibold">
                Depoimento {currentSlide + 1} de {testimonialImages.length}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Troca automática a cada 5 segundos
              </p>
            </div>
          </div>
        </div>

        {/* Nota Rodapé */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-900">Depoimentos reais e verificados.</strong> Resultados podem variar de acordo com a especialidade médica, frequência de uso e estratégias aplicadas.
          </p>
        </div>

      </div>
    </section>
  );
}
