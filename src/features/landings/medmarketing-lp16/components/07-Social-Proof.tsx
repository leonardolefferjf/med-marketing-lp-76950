import React from 'react';
import { Star, Clock, Heart, Smile } from 'lucide-react';

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Dra. Mariana Souza",
      specialty: "Dermatologia - São Paulo/SP",
      text: "Recuperei meus finais de semana. Antes passava 4-5h no sábado criando conteúdo. Agora uso esse tempo com minha família. A agenda está cheia do mesmo jeito, mas minha qualidade de vida mudou completamente.",
      highlight: "4-5h todo sábado recuperadas",
      icon: Clock
    },
    {
      name: "Dr. Roberto Lima",
      specialty: "Ortopedia - Rio de Janeiro/RJ",
      text: "Cheguei num ponto que estava trabalhando 70h/semana e AINDA tendo que fazer marketing à noite. Estava esgotado. Com o MedMarketingAI+ recuperei minha energia. Durmo melhor. Estou mais presente em casa.",
      highlight: "De exaustão total para vida equilibrada",
      icon: Heart
    },
    {
      name: "Dr. Fernando Costa",
      specialty: "Cardiologia - Belo Horizonte/MG",
      text: "Meu filho tinha 3 anos quando comecei a fazer marketing manual. Perdi tantas manhãs de domingo no computador. Agora ele tem 4, e desde que automatizei, não perco mais nenhum momento. Vale cada centavo.",
      highlight: "Presente em cada momento que importa",
      icon: Smile
    },
    {
      name: "Dra. Paula Mendes",
      specialty: "Pediatria - Curitiba/PR",
      text: "A matemática é simples: antes gastava 8-9h por semana. Agora gasto 15 minutos. São 35h por mês que voltaram pra minha vida. Consegui retomar meu hobby de corrida que estava abandonado há 2 anos.",
      highlight: "35h/mês de vida recuperadas",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Médicos Que Recuperaram Suas Vidas
          </h2>
          <p className="text-xl text-gray-700">
            O impacto real da automação na qualidade de vida
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Highlight */}
                <div className="bg-blue-600 text-white rounded-xl p-3 mb-4 inline-flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  <span className="font-black text-sm">{testimonial.highlight}</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t-2 border-blue-200 pt-4">
                  <p className="font-black text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.specialty}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-5xl font-black text-white mb-2">1.247+</p>
              <p className="text-white text-lg">Médicos usando</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-5xl font-black text-white mb-2">420h</p>
              <p className="text-white text-lg">Economizadas/ano em média</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
              <p className="text-5xl font-black text-white mb-2">98%</p>
              <p className="text-white text-lg">Satisfação work-life balance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
