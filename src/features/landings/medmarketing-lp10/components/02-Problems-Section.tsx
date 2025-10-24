import React from 'react';
import { AlertTriangle, XCircle, Clock, Users, HeartCrack, CalendarX } from 'lucide-react';

export default function ProblemsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-5 h-5" />
            A EXAUSTÃO QUE NINGUÉM VÊ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Você Escolhe Entre Família... <br />
            Ou Marketing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Todo sábado, a mesma decisão cruel: <strong className="text-white">criar posts para a semana ou estar presente com quem você ama</strong>.
          </p>
        </div>

        {/* História Real - Dra. Ana */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 mb-12 shadow-2xl border-2 border-gray-600">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-600 rounded-full p-3">
              <HeartCrack className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                História Real: Dra. Ana, Pediatra em Curitiba
              </h3>
              <p className="text-sm text-gray-400 font-semibold">*nome alterado para preservar privacidade</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Sábado, 14h.</strong> A filha de 7 anos da Dra. Ana tinha recital de balé às 15h.
              Ela ensaiava há 3 meses. Falava do evento todos os dias.
            </p>
            <p className="text-lg">
              Mas Dra. Ana olhou para o calendário de posts: <strong className="text-red-400">nada programado para segunda-feira</strong>.
              Se não criasse conteúdo AGORA no sábado, teria que fazer domingo ou acordar 2h mais cedo segunda-feira.
            </p>
            <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
              <p className="text-xl font-bold text-red-300 italic">
                "Amor, a mamãe não vai conseguir ir hoje. Preciso trabalhar. Mas vou ver o vídeo depois, prometo."
              </p>
            </div>
            <p className="text-lg">
              A filha tentou esconder a tristeza. "Tudo bem, mãe." Mas não estava tudo bem.
            </p>
            <p className="text-lg">
              Dra. Ana passou o sábado criando 5 posts para a semana. <strong className="text-white">9 horas</strong> de pesquisa, escrita, design, agendamento.
            </p>
            <p className="text-lg font-black text-red-400">
              A filha dançou. A mãe não viu. E por quê? Para fazer posts de Instagram.
            </p>
            <p className="text-lg text-gray-300 border-t-2 border-gray-700 pt-4 mt-4">
              <strong className="text-white">Três meses depois</strong>, a filha nem avisa mais sobre eventos escolares. "A mãe nunca pode ir mesmo..."
            </p>
          </div>
        </div>

        {/* Grid de Problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problema 1: Sem Tempo com Família */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-600 rounded-lg p-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white flex-1">
                Zero Tempo com Família
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Fins de semana consumidos por marketing. Filhos crescendo sem você presente.
              Aniversários, jantares, passeios - você está lá fisicamente, mas mentalmente criando posts.
            </p>
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-800">
              <p className="text-red-300 font-bold text-sm">
                💔 Resultado: Você trabalha para dar qualidade de vida à família, mas não consegue VIVER essa qualidade de vida com eles.
              </p>
            </div>
          </div>

          {/* Problema 2: Fins de Semana Mortos */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-600 rounded-lg p-3">
                <CalendarX className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white flex-1">
                Fins de Semana Consumidos
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Sábado e domingo que deveriam ser de descanso viram plantão de marketing.
              9 horas toda semana pesquisando, escrevendo, editando. Sua folga não existe.
            </p>
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-800">
              <p className="text-red-300 font-bold text-sm">
                💔 Resultado: Segunda-feira você volta exausto. Não descansou. Atende pacientes no modo piloto automático.
              </p>
            </div>
          </div>

          {/* Problema 3: Sempre Cansado */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-600 rounded-lg p-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white flex-1">
                Exaustão Crônica
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Consultório + plantões + marketing manual = zero energia. Você está sempre cansado.
              Irritado. Sem paciência. Sua saúde mental está no limite.
            </p>
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-800">
              <p className="text-red-300 font-bold text-sm">
                💔 Resultado: Você cuida da saúde dos outros, mas a sua própria está sendo sacrificada.
              </p>
            </div>
          </div>

          {/* Problema 4: Culpa de Não Estar Presente */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border-2 border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-600 rounded-lg p-3">
                <HeartCrack className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white flex-1">
                Culpa Constante
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Você sabe que deveria estar presente. Vê outros pais participando.
              A culpa come por dentro: "Trabalho tanto para eles... mas nunca estou disponível."
            </p>
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-800">
              <p className="text-red-300 font-bold text-sm">
                💔 Resultado: Sucesso profissional, mas vazio emocional. "Para quê trabalhar tanto se não posso aproveitar?"
              </p>
            </div>
          </div>
        </div>

        {/* Cenário Emocional - Recital Perdido */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-10 text-gray-200 shadow-2xl border-2 border-red-900">
          <div className="text-center mb-8">
            <HeartCrack className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-black text-white mb-4">
              O Momento Que Você Não Volta Atrás
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500">
              <p className="text-lg">
                <strong className="text-yellow-400">Sábado, 14h</strong> – Sua filha pergunta: "Você vai no meu recital hoje, né mãe?"
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500">
              <p className="text-lg">
                <strong className="text-orange-400">Sábado, 14h15</strong> – Você olha o calendário de posts vazio. Se não fizer AGORA, segunda será caos.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <p className="text-lg">
                <strong className="text-red-400">Sábado, 14h30</strong> – "Filha, desculpa, não vai dar hoje. Mas te amo muito!"
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-700">
              <p className="text-lg">
                <strong className="text-red-600">Sábado, 23h</strong> – Posts prontos. Você deveria se sentir produtiva. Mas só sente culpa e vazio.
              </p>
            </div>

            <div className="bg-red-900/30 backdrop-blur-sm rounded-xl p-6 border-2 border-red-600">
              <p className="text-xl font-black text-center text-white">
                9 horas de marketing. Zero momentos com sua filha. E isso vai se repetir no próximo sábado.
              </p>
            </div>
          </div>
        </div>

        {/* Resumo do Problema */}
        <div className="text-center mt-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-6">
            O Problema Não É Marketing. É o TEMPO Que Ele Rouba de Você.
          </h3>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Você precisa de um sistema que <strong className="text-white">faça marketing 24/7 SOZINHO</strong>,
            te devolvendo <strong className="text-white">17 dias de vida por ano</strong> para estar presente com quem importa.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-black text-lg shadow-xl">
            ↓ É exatamente isso que o MedMarketingAI+ faz
          </div>
        </div>

      </div>
    </section>
  );
}
