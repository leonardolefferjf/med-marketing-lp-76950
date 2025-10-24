import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, HelpCircle } from 'lucide-react';

export default function FAQPerguntasFrequentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'O sistema realmente impede que eu cometa erros na resolução CFM 2.336/2023?',
      answer: `Sim. O sistema possui 3 camadas de validação que analisam seu conteúdo contra os 21 artigos da resolução CFM 2.336/2023:

**Camada 1:** Análise textual procura termos proibidos (sensacionalismo, promessas de resultado, preços, etc)

**Camada 2:** Análise de contexto avalia tom geral, imagens, fotos de antes/depois

**Camada 3:** Cruzamento com banco de +500 casos reais de processos éticos

Se algo estiver fora da norma, você recebe **alerta vermelho** mostrando exatamente qual frase está problemática E sugestão de como corrigir.

Somente quando 100% conforme, você recebe o selo "✓ Aprovado CFM" e pode publicar.

**Histórico:** Em 3 anos, nenhum usuário que publicou conteúdo com selo "✓ Aprovado CFM" sofreu processo do CFM.`
    },
    {
      question: 'E se eu sofrer multa mesmo usando o sistema?',
      answer: `Se você postar conteúdo que recebeu o selo "✓ Aprovado CFM" e, ainda assim, sofrer multa do CFM, **nós pagamos a multa por você até R$ 50.000**.

**Condições:**
• Post deve ter selo "✓ Aprovado CFM"
• Certificado digital de validação disponível (gerado automaticamente)
• Multa deve ser sobre o conteúdo validado especificamente
• Processo deve ter transitado em julgado

**Importante:** Esta garantia nunca foi acionada em 3 anos porque o sistema funciona. Oferecemos isso para você ter tranquilidade TOTAL.`
    },
    {
      question: 'O sistema está atualizado com as últimas resoluções do CFM?',
      answer: `Sim. O sistema monitora automaticamente o site do CFM e portais de direito médico em busca de:

• Novas resoluções
• Pareceres técnicos
• Jurisprudências de processos éticos
• Interpretações de artigos publicadas

Quando há atualização relevante, o algoritmo de validação é ajustado **automaticamente** e você recebe notificação sobre o que mudou.

Você não precisa ficar monitorando. O sistema faz isso por você 24/7.`
    },
    {
      question: 'Posso confiar que o sistema não vai deixar passar algum erro?',
      answer: `O sistema foi desenvolvido por **médicos + advogados especializados em direito médico** e está em produção há 3 anos com **zero processos CFM entre usuários**.

Mas entendemos que essa é uma preocupação legítima. Por isso oferecemos a **Garantia Dupla:**

**#1 - Zero Processos:** Histórico de 3 anos comprova eficácia
**#2 - Cobertura de Multa:** Se houver multa (nunca houve), pagamos até R$ 50k

Você está protegido de todas as formas possíveis.

Além disso, cada post aprovado gera um **certificado digital técnico** que documenta que o conteúdo passou pelas 3 camadas de validação. Use como proteção em caso de denúncia.`
    },
    {
      question: 'O que acontece se o sistema detectar problema no meu post?',
      answer: `Se o sistema detectar algo que viole a resolução CFM 2.336/2023, você recebe **alerta vermelho** com:

**1. Identificação clara:** A frase ou imagem problemática é destacada

**2. Explicação técnica:** Mostra qual artigo da resolução está sendo violado e por quê

**3. Sugestão de correção:** Oferece alternativa ética que você pode usar no lugar

**4. Bloqueio de publicação:** Você não consegue publicar até corrigir

Exemplo real:

❌ **DETECTADO:** "Elimine 100% das rugas"
⚠️ **PROBLEMA:** Promessa de resultado absoluto (Art. 5º, IV)
✓ **SUGESTÃO:** "Tratamento pode reduzir significativamente rugas visíveis"

Você simplesmente aplica a sugestão e o post é aprovado.`
    },
    {
      question: 'Quanto tempo demora a validação?',
      answer: `A validação é **instantânea** - de 3 a 5 segundos após você clicar em "Validar Post".

O sistema analisa:
• Todo o texto (cada palavra e frase)
• Imagens anexadas
• Contexto geral
• Cruzamento com banco de processos CFM

Em segundos você recebe:
• Alerta vermelho (se houver problema) OU
• Selo verde "✓ Aprovado CFM" (se estiver conforme)

Zero espera, zero fricção.`
    },
    {
      question: 'Posso usar o sistema apenas para validar posts que EU criei manualmente?',
      answer: `Sim! O sistema de validação CFM funciona de 3 formas:

**Opção 1:** Use os 165 assistentes IA para gerar conteúdo → sistema valida automaticamente

**Opção 2:** Escreva seu próprio post do zero → clique em "Validar CFM" → recebe análise

**Opção 3:** Traga post criado por agência ou redator → cole no sistema → valide antes de publicar

O valor está na **validação CFM automática** que protege você. Não importa quem escreveu o conteúdo.

Muitos médicos usam apenas para validar posts que criam manualmente e já consideram que vale cada centavo.`
    },
    {
      question: 'E se eu discordar da análise do sistema?',
      answer: `O sistema mostra **exatamente** qual artigo da resolução CFM 2.336/2023 está sendo violado.

Se você discordar, pode:

**1.** Ler a resolução completa dentro da plataforma (link direto para o artigo)

**2.** Consultar o banco de casos reais onde posts similares resultaram em processo

**3.** Ignorar o alerta por sua conta e risco (não recomendado, mas é possível)

**PORÉM:** Se você ignorar o alerta e publicar mesmo assim, o post **NÃO receberá** o selo "✓ Aprovado CFM" e **não estará** coberto pela garantia de multa de R$ 50k.

A proteção só vale para posts que seguiram a validação completa.

**Na prática:** Em 3 anos, 99.7% dos usuários seguem as sugestões porque percebem que o sistema está correto.`
    },
    {
      question: 'Preciso saber sobre leis e CFM para usar?',
      answer: `**Não!** Esse é exatamente o ponto.

Você não precisa:
• Ler a resolução CFM 2.336/2023 completa
• Entender jargão jurídico
• Ficar em dúvida sobre cada post

O sistema faz isso por você. Você só precisa:

**1.** Criar ou colar seu post
**2.** Clicar em "Validar CFM"
**3.** Seguir sugestões se houver alerta vermelho
**4.** Publicar quando receber selo verde

É como ter um advogado especializado em direito médico analisando cada post por você. Mas instantâneo e automático.`
    },
    {
      question: 'A garantia de 30 dias funciona mesmo?',
      answer: `Sim. É bem simples:

**Você tem 30 dias** para:
• Testar os 165 assistentes IA
• Usar a validação CFM em quantos posts quiser
• Gerar conteúdo para suas redes sociais
• Ver se o sistema te dá a tranquilidade prometida

Se em 30 dias você sentir que não vale a pena (seja qual for o motivo), é só pedir reembolso por e-mail.

**Sem perguntas difíceis.**
**Sem burocracia.**
**Dinheiro de volta total.**

Por que oferecemos isso? Porque sabemos que quando você testar a validação CFM pela primeira vez e ver o sistema aprovando seu post com selo verde, vai entender o valor.

Taxa de reembolso é menor que 3%. As pessoas testam e ficam.`
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            PERGUNTAS FREQUENTES SOBRE SEGURANÇA CFM
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Dúvidas Sobre a{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Validação CFM?
            </span>
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Respondemos as 10 perguntas mais comuns sobre segurança, garantias e compliance
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all ${
                openIndex === index ? 'border-green-500' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-green-600' : 'bg-gray-300'
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
                    <ChevronUp className="w-6 h-6 text-green-600" />
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
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white inline-block max-w-2xl">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ainda Tem Dúvidas?
            </h3>
            <p className="text-lg mb-6">
              Teste por 30 dias sem risco. Se não eliminar seu medo de processo CFM,
              devolvemos 100% do seu dinheiro.
            </p>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="font-bold text-sm">
                📧 Suporte: contato@medmarketingai.com.br
                <br />
                📱 WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
