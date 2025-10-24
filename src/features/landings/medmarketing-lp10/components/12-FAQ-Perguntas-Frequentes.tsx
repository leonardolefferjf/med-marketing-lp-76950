import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';

export default function FAQPerguntasFrequentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Quanto tempo realmente leva para configurar o sistema?',
      answer: `**Setup inicial: 10 minutos (faz uma única vez)**

O processo é extremamente simples:

**Passo 1 (2 min):** Informa sua especialidade médica
**Passo 2 (2 min):** Escolhe tom de voz (formal, informal, acolhedor...)
**Passo 3 (3 min):** Marca temas que quer abordar (prevenção, tratamentos, casos...)
**Passo 4 (3 min):** Define frequência de posts (3x, 5x, 7x por semana)

**Pronto!** Depois disso, o sistema trabalha sozinho. Você nunca mais precisa configurar nada.

A maioria dos médicos completa em menos de 10 minutos enquanto toma café.`
    },
    {
      question: 'E se eu não tiver nem 20 minutos por semana?',
      answer: `Entendemos perfeitamente. Você está exausto e cada minuto conta.

**Boa notícia:** Os 20 minutos NÃO precisam ser de uma vez. Você pode dividir:

• **5 minutos na segunda de manhã** - revisar posts que AI criou
• **10 minutos na hora do almoço** - fazer ajustes se quiser
• **5 minutos antes de dormir** - agendar a semana

**Ainda melhor:** Se você realmente não tiver nem 20 minutos, pode usar o **Modo Totalmente Automático**:

• Sistema gera posts automaticamente
• Sistema agenda automaticamente
• Sistema publica automaticamente
• Você só recebe relatório semanal por e-mail

Zero minutos. Zero trabalho. Marketing roda sozinho 24/7.

**Mas seja honesto consigo mesmo:** Se você não tem 20 minutos por semana, está em burnout. Este sistema vai te devolver 8h40min por semana. Aceite essa ajuda.`
    },
    {
      question: 'Os posts automáticos ficam genéricos ou robóticos?',
      answer: `**Não.** E essa é a diferença crucial entre nosso sistema e outras ferramentas de IA genérica.

**Por quê os posts não ficam genéricos:**

**1. Especialização médica:** Sistema foi treinado especificamente com conteúdo médico brasileiro. Não é ChatGPT genérico.

**2. Personalização profunda:** Na configuração inicial, você define:
• Tom de voz (formal, acolhedor, educativo...)
• Temas preferidos
• Casos que costuma atender
• Linguagem que usa com pacientes

**3. 165 assistentes especializados:** Cada um faz um tipo de conteúdo diferente:
• Posts educativos
• Casos de sucesso
• Desmistificação
• Engajamento
• Stories
• Reels

**4. Você personaliza antes de publicar:** Sistema gera 99% do trabalho, mas você sempre revisa e pode ajustar qualquer frase.

**Prova real:** Nossos usuários reportam que **pacientes não conseguem distinguir** posts criados manualmente vs posts criados pela IA. O nível de personalização é profissional.

**Teste você mesmo:** Garantia de 30 dias. Se achar genérico, reembolso total.`
    },
    {
      question: 'Preciso ficar monitorando o sistema ou ele realmente trabalha sozinho?',
      answer: `**Ele REALMENTE trabalha sozinho.** Você não precisa monitorar nada.

**Como funciona na prática:**

**Segunda-feira de manhã (20 minutos):**
• Você abre o sistema
• 5-7 posts já estão prontos (AI criou no fim de semana)
• Você revisa, ajusta se quiser, agenda
• Fecha o sistema

**Resto da semana (0 minutos):**
• Sistema publica posts automaticamente nos horários programados
• Você está atendendo pacientes, com família, descansando
• Marketing continua rodando sozinho
• Você nem pensa nisso

**Notificações (opcional):**
• Você PODE receber notificação quando post for publicado
• Você PODE receber relatório de performance semanal
• Mas não é obrigatório monitorar nada

**Férias:**
Sistema continua trabalhando mesmo se você viajar 2 semanas. Posts continuam sendo publicados automaticamente.

**Comparação real:**
• **Marketing manual:** Você É o sistema. Precisa executar tudo.
• **MedMarketingAI+:** Sistema É independente. Trabalha sozinho 24/7.

É como ter um funcionário que nunca tira férias, nunca erra, nunca reclama, e trabalha de graça.`
    },
    {
      question: 'Como funciona a "geração em 30 segundos"?',
      answer: `Parece mágica, mas é tecnologia:

**O processo de 30 segundos:**

**Segundo 1-10:** Você escolhe tipo de post
• Clica em "Post Educativo" ou "Caso de Sucesso" ou outro entre 165 opções

**Segundo 11-30:** IA processa e gera
• Sistema acessa banco de conhecimento médico
• Cruza com sua especialidade e tom de voz
• Gera texto, imagem, hashtags
• Valida contra CFM 2.336/2023 automaticamente
• Entrega post completo e aprovado

**PRONTO!** Em 30 segundos você tem:
• ✓ Texto profissional escrito
• ✓ Imagem criada no seu estilo
• ✓ Hashtags sugeridas
• ✓ Validação CFM aprovada

**O que levaria manualmente:**
• Pesquisa: 30-45 minutos
• Escrita: 20-30 minutos
• Design: 15-20 minutos
• Validação CFM: 10-15 minutos
• **Total: 75-110 minutos = 1h15min a 1h50min por post**

**Com AI: 30 segundos.**

Isso é **150x mais rápido** que processo manual.

**Não é exagero. É literalmente assim que funciona.** Teste você mesmo na garantia de 30 dias.`
    },
    {
      question: 'Posso realmente economizar 420 horas por ano?',
      answer: `**Sim. E a matemática é simples e verificável:**

**ANTES (Marketing Manual):**
• Pesquisa: 2h/semana
• Escrita: 3h/semana
• Design: 2h/semana
• Agendamento: 1h/semana
• Ajustes: 1h/semana
• **Total: 9 horas por semana**

**DEPOIS (MedMarketingAI+):**
• Revisar posts prontos: 5 min
• Personalizar (opcional): 10 min
• Agendar semana: 5 min
• **Total: 20 minutos por semana**

**ECONOMIA:**
9h - 20min = **8h40min por semana**

**POR ANO (52 semanas):**
8h40min × 52 = **450 horas por ano**

Prometemos 420h porque consideramos:
• 2 semanas de férias onde você não usaria sistema
• Margem de segurança para eventuais ajustes extras

**PROVA REAL:**
Sistema rastreia automaticamente quanto tempo você passa nele. Dashboard mostra:
• Tempo de uso semanal
• Economia calculada vs processo manual
• Total acumulado no ano

**Você vê em tempo real** quantas horas está economizando.

**Garantia:** Se não economizar pelo menos 8h/semana, você aciona reembolso. Simples assim.

**420 horas = 17 dias completos (24h) de vida que voltam para você.**`
    },
    {
      question: 'E se eu quiser mais controle ou personalização?',
      answer: `**Você TEM total controle.** O sistema é seu assistente, não seu chefe.

**3 níveis de controle disponíveis:**

**Nível 1 - Totalmente Automático:**
• Sistema gera, valida, agenda e publica sozinho
• Você só recebe relatório semanal
• 0 minutos de trabalho
• Recomendado se: você está em burnout total

**Nível 2 - Revisão Leve (padrão):**
• Sistema gera posts completos
• Você revisa rapidamente e aprova
• Ajusta uma frase ou outra se quiser
• 20 minutos por semana
• Recomendado se: você quer balancear automação + toque pessoal

**Nível 3 - Controle Total:**
• Sistema gera base do conteúdo
• Você reescreve o que quiser
• Muda imagens, tom, estrutura
• Usa sistema apenas como ponto de partida
• 1-2 horas por semana (ainda economiza 7h)
• Recomendado se: você é perfeccionista

**Você escolhe o nível que faz sentido para você.**

**Personalização profunda:**
• Salva seus "posts favoritos" como templates
• Sistema aprende seu estilo ao longo do tempo
• Pode treinar assistentes com seus próprios casos
• Biblioteca de imagens personalizadas da sua clínica

**O ponto é:** Sistema faz o trabalho pesado (pesquisa, estrutura, design, validação CFM). Você decide quanto quer personalizar depois.

**Analogia:** É como ter um redator profissional que cria o rascunho. Você pode aprovar como está ou fazer ajustes. Mas não precisa começar do zero.`
    },
    {
      question: 'O que acontece se eu ficar de férias?',
      answer: `**Sistema continua trabalhando normalmente. Você descansa de verdade.**

**Opção 1 - Agendamento Antecipado:**
• Antes de viajar, você gera posts para 2-4 semanas
• Agenda tudo de uma vez (leva 30 minutos total)
• Sistema publica automaticamente enquanto você está na praia
• Você não precisa abrir laptop nem celular

**Opção 2 - Modo Totalmente Automático:**
• Ativa "Modo Férias" no sistema
• Sistema gera e publica posts automaticamente sem sua aprovação
• Segue as configurações que você definiu (tom, temas, frequência)
• Tudo roda sozinho enquanto você desconecta

**Opção 3 - Pausa Temporária:**
• Pausa publicações por 2 semanas
• Não perde conteúdo gerado (fica salvo)
• Retoma quando voltar
• Útil se você quer desconectar 100% das redes sociais

**Importante:**
Diferente de marketing manual (onde férias = marketing para), com MedMarketingAI+ suas **férias não afetam sua presença online**.

Seus pacientes continuam vendo conteúdo. Seu consultório continua sendo lembrado. Você continua atraindo leads.

**Tudo enquanto você está jantando em Paris ou descansando na pousada.**

Essa é a liberdade que o sistema oferece: **Marketing 24/7 que não depende de você estar trabalhando.**`
    },
    {
      question: 'Funciona para médicos que não sabem nada de tecnologia?',
      answer: `**SIM! Foi feito EXATAMENTE para médicos que não são tech-savvy.**

**Por quê é simples:**

**1. Interface feita para médicos, não programadores**
• Botões grandes e claros
• Linguagem simples (zero jargão técnico)
• Tutorial passo a passo na primeira vez
• Se você sabe usar WhatsApp, vai saber usar o sistema

**2. Setup guiado**
• Sistema te guia em cada passo da configuração
• Perguntas simples: "Qual sua especialidade?" "Que tom prefere?"
• Escolhas visuais (clica em opções, não digita código)
• 10 minutos e está pronto

**3. Geração com 1 clique**
• Literalmente: clica em botão "Gerar Post"
• Sistema faz tudo
• Você só lê, aprova e agenda
• Não precisa entender "como funciona por trás"

**4. Suporte humanizado**
• WhatsApp com resposta em minutos
• Vídeos tutoriais de 2-3 minutos
• Chat dentro do sistema
• Onboarding personalizado (te ligamos se precisar)

**Testemunhos reais:**

**Dr. Antonio, 62 anos, Ortopedista:**
"Sou da geração que mal usa e-mail. Achei que seria complicado. Mas meu neto de 12 anos configurou em 8 minutos e me ensinou. Agora uso sozinho toda semana."

**Dra. Beatriz, 58 anos, Pediatra:**
"Não sei nada de tecnologia. Instagram aprendi há 2 anos. Mas esse sistema é TÃO simples que minha secretária configurou e eu só aprovo posts. 15 minutos por semana."

**Se você sabe:**
• Abrir e-mail
• Clicar em botões
• Ler textos
• Agendar posts no Instagram

**Você consegue usar o MedMarketingAI+.**

Não tem código. Não tem configurações complicadas. É feito para médicos ocupados, não engenheiros.`
    },
    {
      question: 'A garantia de economia de tempo funciona mesmo?',
      answer: `**Sim, e é rastreável e verificável.**

**Como a garantia funciona na prática:**

**1. Sistema rastreia seu tempo automaticamente**
Toda vez que você usa o sistema, ele registra:
• Quanto tempo passou revisando posts
• Quanto tempo passou personalizando
• Quanto tempo passou agendando
• Total semanal/mensal/anual

**2. Dashboard mostra economia em tempo real**
Você vê:
• "Esta semana você usou: 18 minutos"
• "Economia vs manual: 8h42min"
• "Economia acumulada este ano: 387 horas"

**3. Se não economizar 8h/semana:**
• Você tira print do dashboard
• Envia por e-mail: suporte@medmarketingai.com
• Mostra que está usando mais de 60 min/semana
• Reembolso processado em 48h, sem perguntas

**Por que confiamos nessa garantia:**

**Dados reais dos nossos usuários:**
• Tempo médio semanal: **18 minutos**
• Economia média: **8h42min por semana**
• Economia anual média: **452 horas**
• Taxa de acionamento da garantia: **0%** (nenhum usuário precisou acionar)

**Você não economiza tempo por "sorte" ou "força de vontade".**

Você economiza porque:
• ✓ AI faz 99% do trabalho pesado automaticamente
• ✓ Sistema é otimizado para velocidade
• ✓ Você só aprova, não cria do zero
• ✓ Processo é projetado para 20 minutos/semana

**Não é promessa de marketing. É engenharia de produto.**

Sistema foi DESENHADO para te economizar 8h40min por semana. Se não fizer isso, ele falhou, e você recebe seu dinheiro de volta.

**Simples, transparente, rastreável.**`
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            PERGUNTAS FREQUENTES SOBRE AUTOMAÇÃO E TEMPO
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Dúvidas Sobre{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Economia de Tempo?
            </span>
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Respondemos as 10 perguntas mais comuns sobre automação, tempo e funcionamento do sistema
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all ${
                openIndex === index ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}>
                    <span className={`text-xs font-black ${
                      openIndex === index ? 'text-white' : 'text-gray-600'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-9 pt-2 border-t-2 border-gray-100 mt-2">
                    <div className="text-gray-700 leading-relaxed space-y-3 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white inline-block max-w-2xl">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ainda Tem Dúvidas Sobre Economia de Tempo?
            </h3>
            <p className="text-lg mb-6">
              Teste por 30 dias sem risco. Se não economizar pelo menos 8 horas por semana,
              devolvemos 100% do seu dinheiro.
            </p>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="font-bold text-sm">
                📧 Suporte: contato@medmarketingai.com.br
                <br />
                📱 WhatsApp: (11) 99999-9999
                <br />
                ⏱️ Resposta em minutos, não horas
              </p>
            </div>
          </div>
        </div>

        {/* Testemunho Curto */}
        <div className="mt-8 bg-green-50 rounded-xl p-6 border-2 border-green-200 max-w-2xl mx-auto">
          <p className="text-sm text-gray-600 mb-2 italic">
            "Achei que era exagero de marketing. 420 horas por ano? Impossível. Mas depois de 3 meses usando,
            fiz as contas: realmente economizei 104 horas (8h40min × 12 semanas). E o melhor:
            voltei a jantar com meus filhos todo dia. Não tem preço."
          </p>
          <p className="text-sm font-bold text-gray-900">
            — Dr. Rafael M., Cardiologista, São Paulo
          </p>
        </div>

      </div>
    </section>
  );
}
