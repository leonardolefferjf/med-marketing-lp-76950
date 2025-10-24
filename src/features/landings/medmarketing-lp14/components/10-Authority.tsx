import React from 'react';
import { Award, Building2, Target } from 'lucide-react';

export const AuthoritySection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Sobre a Leffer Saúde Tech
          </h2>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 border-2 border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-4 inline-block mb-3">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl font-black text-gray-900 mb-1">Leffer Saúde Tech</p>
              <p className="text-sm text-gray-600">Health Tech especializada</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-4 inline-block mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl font-black text-gray-900 mb-1">+1.247</p>
              <p className="text-sm text-gray-600">Médicos confiando</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-4 inline-block mb-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl font-black text-gray-900 mb-1">100%</p>
              <p className="text-sm text-gray-600">Focado em médicos</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A <span className="font-black">Leffer Saúde Tech</span> foi criada por{' '}
              <span className="font-black">Leonardo Leffer</span>, desenvolvedor e empreendedor que identificou um problema crítico: médicos pagando fortunas para agências que não entendem medicina e não entregam resultados.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Depois de conversar com centenas de médicos frustrados, Leonardo desenvolveu o MedMarketingAI+: uma plataforma completa que combina inteligência artificial especializada com validação automática CFM.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-black">Missão:</span> Libertar médicos da dependência de agências caras e ineficientes, dando a eles controle total sobre seu marketing digital, sem precisar ser especialista em tecnologia ou marketing.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
            <p className="text-3xl font-black text-green-600 mb-1">R$ 82M+</p>
            <p className="text-sm text-gray-700">Economizados por médicos em agências</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
            <p className="text-3xl font-black text-green-600 mb-1">Zero</p>
            <p className="text-sm text-gray-700">Processos CFM entre usuários</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
            <p className="text-3xl font-black text-green-600 mb-1">4.9/5.0</p>
            <p className="text-sm text-gray-700">Avaliação média dos médicos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
