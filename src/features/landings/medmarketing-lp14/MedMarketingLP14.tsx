import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import { ProblemsSection } from './components/02-Problems-Section';
import { SolutionComparison } from './components/03-Solution-Comparison';
import { WhatYouGet } from './components/04-What-You-Get';
import { BonusSection } from './components/05-Bonuses';
import { MainOfferCTA } from './components/06-Main-Offer-CTA';
import { SocialProof } from './components/07-Social-Proof';
import { GuaranteeSection } from './components/08-Guarantee';
import { FAQSection } from './components/09-FAQ';
import { AuthoritySection } from './components/10-Authority';
import { FooterSection } from './components/11-Footer';

const medMarketingLP14Config: LandingPageConfig = {
  id: 'medmarketing-lp14',
  title: 'MedMarketingAI+ LP14 - Autoridade Sem Dependência',
  description: 'Pare de pagar R$ 138k/ano para agências. 165 assistentes de IA por R$ 997 único. Controle total do seu marketing médico.',
  slug: 'medmarketing-lp14',
  metaTitle: 'Pare de Depender de Agências de R$ 5k/mês | Marketing Médico Independente - MedMarketingAI+',
  metaDescription: '165 assistentes de IA criam seu marketing médico por R$ 997 único vs R$ 138k/ano em agências. Controle total. Zero dependência. Acesso vitalício.',
  keywords: [
    'marketing médico sem agência',
    'alternativa agência marketing médico',
    'marketing médico independente',
    'IA marketing médico',
    'economizar agência marketing',
    'marketing médico automatizado',
    'controle marketing médico',
    'MedMarketingAI',
    'assistentes IA médicos',
    'marketing médico CFM'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-red))',
    secondaryColor: 'hsl(var(--medical-orange))',
  }
};

export const MedMarketingLP14: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP14Config}>
      <HeroSection />
      <ProblemsSection />
      <SolutionComparison />
      <WhatYouGet />
      <BonusSection />
      <MainOfferCTA />
      <SocialProof />
      <GuaranteeSection />
      <FAQSection />
      <AuthoritySection />
      <FooterSection />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP14;
