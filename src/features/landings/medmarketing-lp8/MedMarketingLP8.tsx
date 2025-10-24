import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import ProblemsSection from './components/02-Problems-Section';
import SavingsCalculator from './components/02b-Savings-Calculator';
import SolutionSection from './components/03-Solucao-Apresentacao-Produto';
import EspecificacoesDetalhadas from './components/04-Especificacoes-Detalhadas';
import InteractiveDemo from './components/04b-Interactive-Demo';
import HowItWorksSection from './components/05-Como-Funciona-PassoAPasso';
import TimeComparison from './components/05b-Time-Comparison';
import ComparativeTable from './components/06-Comparative-Table';
import FreedomVsDependency from './components/06b-Freedom-vs-Dependency';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import GarantiaSection from './components/11-Garantia';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import AutoridadeCredibilidade from './components/13-Autoridade-Credibilidade';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP8Config: LandingPageConfig = {
  id: 'medmarketing-lp8',
  title: 'MedMarketingAI+ LP8 - Autoridade Sem Dependência',
  description: 'Pare de depender de agências caras. 165 assistentes de IA criam seu marketing médico com autonomia total.',
  slug: 'medmarketing-lp8',
  metaTitle: 'Pare de Pagar R$ 5k/mês em Agência | 165 Assistentes IA - MedMarketingAI+',
  metaDescription: 'Cancele sua agência de marketing. 165 assistentes de IA especializados em medicina criam seu conteúdo em 30 segundos. 100% CFM. R$ 997 vitalício.',
  keywords: [
    'marketing médico sem agência',
    'autonomia marketing médico',
    'IA marketing médico',
    'cancelar agência marketing',
    'marketing médico independente',
    'assistentes IA medicina',
    'economizar agência marketing',
    'controle total marketing médico',
    'MedMarketingAI',
    'marketing digital saúde autônomo'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-green))',
    secondaryColor: 'hsl(var(--medical-green-light))',
  }
};

export const MedMarketingLP8: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP8Config}>
      <HeroSection />
      <ProblemsSection />
      <SavingsCalculator />
      <SolutionSection />
      <EspecificacoesDetalhadas />
      <InteractiveDemo />
      <HowItWorksSection />
      <TimeComparison />
      <ComparativeTable />
      <FreedomVsDependency />
      <DepoimentosProvaSocial />
      <BonusSection />
      <OfertaPrincipalCTA />
      <GarantiaSection />
      <FAQPerguntasFrequentes />
      <AutoridadeCredibilidade />
      <FooterContatoInformacoes />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP8;
