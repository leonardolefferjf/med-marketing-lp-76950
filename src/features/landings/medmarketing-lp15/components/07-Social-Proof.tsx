import React from 'react';
import { Star, Shield, Users } from 'lucide-react';

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Dra. Mariana Costa",
      specialty: "Dermatologista",
      text: "Finalmente durmo tranquila depois de postar. O sistema valida tudo antes e me dá paz de espírito. Não tenho mais aquele medo paralisante de acordar com uma notificação do CRM.",
      rating: 5
    },
    {
      name: "Dr. Roberto Alves",
      specialty: "Cirurgião Plástico",
      text: "Antes eu criava o post e ficava horas em dúvida se estava ético. Agora o sistema alerta na hora se tem algum problema. Minha presença digital aumentou 300% porque não tenho mais medo de publicar.",
      rating: 5
    },
    {
      name: "Dr. Felipe Santos",
      specialty: "Ortopedista",
      text: "A validação automática do CFM mudou minha vida. Publico todo dia sem aquela ansiedade de estar cometendo um erro. É como ter um advogado especialista revisando cada palavra.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            +1.247 Médicos{' '}
            <span className="text-green-600">Publicando Sem Medo</span>
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
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold text-gray-700">+1.247 Médicos</span>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold text-gray-700">Zero Processos CFM</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all duration-200"
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

        {/* Main Stat Highlight */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-8 md:p-10 text-center shadow-xl">
          <Shield className="w-20 h-20 text-white mx-auto mb-6" />
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            Zero Processos CFM
          </h3>
          <p className="text-2xl text-white/90 mb-6">
            Nenhum médico usando MedMarketingAI+ <br className="hidden md:block" />
            (seguindo as recomendações do sistema) <br className="hidden md:block" />
            recebeu processo ético até hoje
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border-2 border-white/30">
            <p className="text-xl font-black text-white">
              Isso é o que realmente importa: <br className="hidden md:block" />
              DORMIR TRANQUILO depois de publicar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
