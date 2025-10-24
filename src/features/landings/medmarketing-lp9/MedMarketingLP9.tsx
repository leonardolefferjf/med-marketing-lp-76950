import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import ProblemsSection from './components/02-Problems-Section';
import CFMProhibitions from './components/02b-CFM-Prohibitions';
import SolutionSection from './components/03-Solucao-Apresentacao-Produto';
import EspecificacoesDetalhadas from './components/04-Especificacoes-Detalhadas';
import InteractiveDemo from './components/04b-Interactive-Demo';
import HowItWorksSection from './components/05-Como-Funciona-PassoAPasso';
import CFMValidationProcess from './components/05b-CFM-Validation-Process';
import ComparativeTable from './components/06-Comparative-Table';
import RiskComparison from './components/06b-Risk-Comparison';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import GarantiaSection from './components/11-Garantia';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import AutoridadeCredibilidade from './components/13-Autoridade-Credibilidade';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP9Config: LandingPageConfig = {
  id: 'medmarketing-lp9',
  title: 'MedMarketingAI+ LP9 - Segurança Garantida',
  description: 'Marketing médico sem medo de processo CFM. Validação ética automática em cada post. Zero risco de multas.',
  slug: 'medmarketing-lp9',
  metaTitle: 'Marketing Médico Sem Medo de Processo CFM | Validação Ética Automática - MedMarketingAI+',
  metaDescription: '165 assistentes de IA + validação CFM automática. Poste sem medo de multa de R$ 50k. 100% compliance com resolução 2.336/2023. Garantia de segurança.',
  keywords: [
    'marketing médico seguro',
    'validação CFM automática',
    'compliance CFM 2.336/2023',
    'evitar processo CFM',
    'marketing médico sem risco',
    'multa CFM prevenção',
    'ética médica marketing',
    'resolução CFM marketing',
    'MedMarketingAI',
    'marketing digital médico seguro'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-green))',
    secondaryColor: 'hsl(var(--medical-green-light))',
  }
};

export const MedMarketingLP9: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP9Config}>
      <HeroSection />
      <ProblemsSection />
      <CFMProhibitions />
      <SolutionSection />
      <EspecificacoesDetalhadas />
      <InteractiveDemo />
      <HowItWorksSection />
      <CFMValidationProcess />
      <ComparativeTable />
      <RiskComparison />
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

export default MedMarketingLP9;
