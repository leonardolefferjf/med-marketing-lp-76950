import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import ProblemsSection from './components/02-Problems-Section';
import TimeRecoveryProof from './components/02b-Time-Recovery-Proof';
import SolutionSection from './components/03-Solucao-Apresentacao-Produto';
import EspecificacoesDetalhadas from './components/04-Especificacoes-Detalhadas';
import InteractiveDemo from './components/04c-Interactive-Demo';
import HowItWorksSection from './components/05-Como-Funciona-PassoAPasso';
import AutomationDemo from './components/05b-Automation-Demo';
import ComparativeTable from './components/06-Comparative-Table';
import ManualVsAIComparison from './components/06b-Manual-vs-AI-Comparison';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import GarantiaSection from './components/11-Garantia';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import AutoridadeCredibilidade from './components/13-Autoridade-Credibilidade';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP10Config: LandingPageConfig = {
  id: 'medmarketing-lp10',
  title: 'MedMarketingAI+ LP10 - Trabalhe Menos, Ganhe Mais',
  description: 'Recupere 420 horas por ano (17 dias de vida). Marketing médico automatizado em 20 min/semana. Mais tempo com família, hobbies, descanso.',
  slug: 'medmarketing-lp10',
  metaTitle: 'Trabalhe Menos, Ganhe Mais | Marketing Médico Automatizado - MedMarketingAI+',
  metaDescription: 'Economize 420 horas/ano com IA. De 9h/semana para 20 minutos. Marketing médico automatizado para médicos exaustos. Recupere seu tempo e vida pessoal.',
  keywords: [
    'marketing médico automatizado',
    'economia de tempo médicos',
    'work-life balance médicos',
    'automação marketing médico',
    'produtividade para médicos',
    'tempo livre médicos',
    'qualidade de vida médicos',
    'burnout médicos solução',
    'MedMarketingAI',
    'marketing digital rápido médicos'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-blue))',
    secondaryColor: 'hsl(var(--medical-blue-light))',
  }
};

export const MedMarketingLP10: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP10Config}>
      <HeroSection />
      <ProblemsSection />
      <TimeRecoveryProof />
      <SolutionSection />
      <EspecificacoesDetalhadas />
      <InteractiveDemo />
      <HowItWorksSection />
      <AutomationDemo />
      <ComparativeTable />
      <ManualVsAIComparison />
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

export default MedMarketingLP10;
