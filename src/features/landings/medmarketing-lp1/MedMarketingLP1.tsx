import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import { ProblemsSection } from './components/02-Problems-Section';
import { SolucaoApresentacaoProduto } from './components/03-Solucao-Apresentacao-Produto';
import { EspecificacoesDetalhadas } from './components/04-Especificacoes-Detalhadas';
import { ComoFuncionaPassoAPasso } from './components/05-Como-Funciona-PassoAPasso';
import { AntesDepoisComparacao } from './components/06-Antes-Depois-Comparacao';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import EmpilhamentoValor from './components/09-Empilhamento-Valor-Total';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import AutoridadeCredibilidade from './components/11-Autoridade-Credibilidade';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import ParceirosReforcarAutoridade from './components/13-Parceiros-Reforcar-Autoridade';
import QuebraObjecoes from './components/14-Quebra-Objecoes-Finais';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP1Config: LandingPageConfig = {
  id: 'medmarketing-lp1',
  title: 'MedMarketingAI+ LP1 - IA para Marketing Médico',
  description: 'Plataforma de inteligência artificial para acelerar o marketing médico - Versão 1',
  slug: 'medmarketing-lp1',
  metaTitle: 'MedMarketingAI+ LP1 - Inteligência Artificial para Marketing Médico | 15 Assistentes IA',
  metaDescription: 'Descubra o MedMarketingAI+: 15 assistentes de IA para marketing médico. Crie conteúdo profissional em minutos. Acesso vitalício por R$ 297.',
  keywords: [
    'inteligência artificial marketing médico',
    'IA marketing',
    'marketing médico',
    'conteúdo médico',
    'MedMarketingAI',
    'assistentes IA',
    'marketing digital saúde',
    'redes sociais médico',
    'conteúdo saúde',
    'automação marketing médico'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-green))',
    secondaryColor: 'hsl(var(--medical-green-light))',
  }
};

export const MedMarketingLP1: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP1Config}>
      <HeroSection />
      <ProblemsSection />
      <SolucaoApresentacaoProduto />
      <EspecificacoesDetalhadas />
      <ComoFuncionaPassoAPasso />
      <AntesDepoisComparacao />
      <DepoimentosProvaSocial />
      <BonusSection />
      <EmpilhamentoValor />
      <OfertaPrincipalCTA />
      <AutoridadeCredibilidade />
      <FAQPerguntasFrequentes />
      <QuebraObjecoes />
      <ParceirosReforcarAutoridade />
      <FooterContatoInformacoes />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP1;
