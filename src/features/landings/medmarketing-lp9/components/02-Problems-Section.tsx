import React from 'react';
import { AlertTriangle, XCircle, Clock, TrendingDown, Lock, DollarSign } from 'lucide-react';

export default function ProblemsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-5 h-5" />
            O MEDO QUE PARALISA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Você Fica Com o Post Pronto... <br />
            Mas Não Publica Por Medo do CFM?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Esse medo tem nome: <strong>paralisia por insegurança jurídica</strong>. E está custando sua autoridade e seus pacientes.
          </p>
        </div>

        {/* História Real - Dr. Carlos */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 shadow-xl border-2 border-red-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                História Real: Dr. Carlos, Dermatologista em SP
              </h3>
              <p className="text-sm text-gray-600 font-semibold">*nome alterado para preservar privacidade</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Sexta-feira, 22h30.</strong> Dr. Carlos tinha um post pronto sobre tratamento de acne.
              Fotos de antes e depois (com autorização), texto educativo, sem promessas milagrosas.
            </p>
            <p className="text-lg">
              Mas antes de clicar em "publicar", aquela dúvida martelou na cabeça:
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
              <p className="text-xl font-bold text-red-900 italic">
                "Será que isso pode ser considerado sensacionalismo? E se o CFM interpretar como
                promessa de resultado? E se essas fotos violarem algum artigo da resolução?"
              </p>
            </div>
            <p className="text-lg">
              Dr. Carlos <strong>não publicou</strong>. Salvou o post e foi dormir com essa angústia.
            </p>
            <p className="text-lg">
              <strong>Segunda-feira seguinte:</strong> Um colega dele, que não tinha esse cuidado,
              postou algo parecido. O post viralizou. 500 curtidas, 87 compartilhamentos, 23 mensagens
              diretas de potenciais pacientes.
            </p>
            <p className="text-lg font-black text-red-600">
              O colega arriscou e ganhou. Dr. Carlos foi cauteloso e perdeu.
            </p>
          </div>
        </div>

        {/* Grid de Problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problema 1: Medo Constante */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 rounded-lg p-3">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 flex-1">
                Medo Constante de Errar
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Toda vez que você vai postar, aquela ansiedade: "Isso pode dar problema?"
              Você relê 5 vezes, pede segunda opinião, e mesmo assim não tem certeza.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-800 font-bold text-sm">
                ⚠️ Resultado: Você publica menos, perde relevância, e seus concorrentes (que não têm esse cuidado) ganham sua audiência.
              </p>
            </div>
          </div>

          {/* Problema 2: Multa de R$ 50 mil */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 rounded-lg p-3">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 flex-1">
                Risco Real de Multa até R$ 50 mil
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Uma denúncia ao CFM pode resultar em processo ético. Multas variam de R$ 5 mil a R$ 50 mil.
              Sem contar o desgaste emocional e a mancha na reputação.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-800 font-bold text-sm">
                ⚠️ Resultado: Você investe tempo criando conteúdo, mas o medo te impede de colher os frutos.
              </p>
            </div>
          </div>

          {/* Problema 3: Resolução Complexa */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 rounded-lg p-3">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 flex-1">
                Resolução CFM 2.336/2023 É Complexa
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              São 21 artigos com dezenas de incisos. Termos jurídicos. Interpretações subjetivas.
              Você até leu a resolução, mas na hora de aplicar no seu post, ficam dúvidas.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-800 font-bold text-sm">
                ⚠️ Resultado: Você perde horas tentando entender se pode ou não pode, e no final desiste.
              </p>
            </div>
          </div>

          {/* Problema 4: Concorrentes Arriscando */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 rounded-lg p-3">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 flex-1">
                Concorrentes Arriscam e Crescem
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Enquanto você fica preso na análise jurídica, outros médicos postam sem medo (e muitas vezes sem cuidado).
              Eles crescem, você fica para trás.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-800 font-bold text-sm">
                ⚠️ Resultado: Você é mais ético, mas perde pacientes para quem é menos cauteloso.
              </p>
            </div>
          </div>
        </div>

        {/* Cenário Real de Sexta à Noite */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
          <div className="text-center mb-8">
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-black mb-4">
              O Drama de Toda Sexta à Noite
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <p className="text-lg">
                <strong className="text-red-400">21h45</strong> – Você termina de criar um post incrível sobre seu procedimento mais procurado.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500">
              <p className="text-lg">
                <strong className="text-yellow-400">22h10</strong> – Antes de publicar, bate a dúvida: "Isso está dentro das normas do CFM?"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500">
              <p className="text-lg">
                <strong className="text-orange-400">22h30</strong> – Você abre a resolução 2.336/2023, lê o artigo 5º, inciso IV... fica mais confuso ainda.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-600">
              <p className="text-lg">
                <strong className="text-red-500">23h00</strong> – Cansado e inseguro, você salva o post e NÃO PUBLICA.
              </p>
            </div>

            <div className="bg-red-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-red-500">
              <p className="text-xl font-black text-center">
                1 hora perdida. Zero resultado. E o medo continua.
              </p>
            </div>
          </div>
        </div>

        {/* Resumo do Problema */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-black text-gray-900 mb-6">
            O Problema Não É Você. É a Falta de Validação.
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Você precisa de um sistema que <strong>valide seu conteúdo ANTES de publicar</strong>,
            te dê segurança jurídica, e elimine esse medo que está te paralisando.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold">
            👇 É exatamente isso que o MedMarketingAI+ faz
          </div>
        </div>

      </div>
    </section>
  );
}
