import React from 'react';
import { Star, Users, Stethoscope } from 'lucide-react';

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Mendes",
      specialty: "Ortopedista",
      text: "Cancelei minha agência de R$ 8k/mês. Em 2 meses com MedMarketingAI+ já recuperei o investimento e agora tenho CONTROLE TOTAL do meu marketing. Melhor decisão que tomei.",
      rating: 5
    },
    {
      name: "Dra. Paula Cardoso",
      specialty: "Dermatologista",
      text: "Pagava R$ 6k/mês e esperava 5 dias por um post simples. Agora crio conteúdo profissional em 30 segundos. É libertador não depender mais de terceiros.",
      rating: 5
    },
    {
      name: "Dr. Fernando Silva",
      specialty: "Cardiologista",
      text: "Economizei R$ 72k no primeiro ano. Minha agenda lotou mais rápido do que quando tinha agência, e o melhor: eu controlo tudo. Vale cada centavo.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Médicos Que Tomaram o{' '}
            <span className="text-red-600">Controle do Próprio Marketing</span>
          </h2>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-black text-gray-900">4.9/5.0</span>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-gray-700">+1.247 Médicos</span>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-gray-700">+50 Especialidades</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-red-500 transition-all duration-200"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-black text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <p className="text-lg text-gray-800 italic mb-2">
              "Cancelei a agência e não me arrependo nem um segundo."
            </p>
            <p className="text-sm text-gray-600">- Dr. Marcos Lima, Cirurgião Plástico</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <p className="text-lg text-gray-800 italic mb-2">
              "Economizei R$ 90k em 18 meses. Melhor investimento da minha carreira."
            </p>
            <p className="text-sm text-gray-600">- Dra. Ana Costa, Endocrinologista</p>
          </div>
        </div>
      </div>
    </section>
  );
};
