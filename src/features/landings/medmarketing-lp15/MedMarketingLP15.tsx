import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import { ProblemsSection } from './components/02-Problems-Section';
import { CFMProhibitions } from './components/03-CFM-Prohibitions';
import { ConsequenceSection } from './components/04-Consequence';
import { SolutionValidation } from './components/05-Solution-Validation';
import { DifferentiatorTable } from './components/06-Differentiator-Table';
import { SocialProof } from './components/07-Social-Proof';
import { WhatYouGet } from './components/08-What-You-Get';
import { MainOfferCTA } from './components/09-Main-Offer-CTA';
import { DoubleGuarantee } from './components/10-Double-Guarantee';
import { FAQSection } from './components/11-FAQ';
import { FooterSection } from './components/12-Footer';

const medMarketingLP15Config: LandingPageConfig = {
  id: 'medmarketing-lp15',
  title: 'MedMarketingAI+ LP15 - Medo Paralisante CFM',
  description: '1 palavra errada = R$ 50k de multa. Sistema de IA valida tudo automaticamente antes de você publicar. Zero processos CFM.',
  slug: 'medmarketing-lp15',
  metaTitle: '1 Palavra Errada = R$ 50k de Multa CFM | Validação Automática - MedMarketingAI+',
  metaDescription: 'Valide automaticamente seu marketing antes de publicar. Zero risco de multa CFM. Sistema especializado em Resolução 2.336/2023. Zero processos entre 1.247 usuários.',
  keywords: [
    'multa CFM marketing médico',
    'processo ético CFM',
    'resolução CFM 2.336/2023',
    'validação CFM automática',
    'marketing médico seguro',
    'compliance CFM',
    'evitar multa CFM',
    'publicar sem medo CFM',
    'ética médica marketing',
    'MedMarketingAI'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-green))',
    secondaryColor: 'hsl(var(--medical-green-light))',
  }
};

export const MedMarketingLP15: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP15Config}>
      <HeroSection />
      <ProblemsSection />
      <CFMProhibitions />
      <ConsequenceSection />
      <SolutionValidation />
      <DifferentiatorTable />
      <SocialProof />
      <WhatYouGet />
      <MainOfferCTA />
      <DoubleGuarantee />
      <FAQSection />
      <FooterSection />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP15;
