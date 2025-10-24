import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import { ProblemsSection } from './components/02-Problems-Section';
import { ViciousCycle } from './components/03-Vicious-Cycle';
import { SolutionAutomation } from './components/04-Solution-Automation';
import { TimeProof } from './components/05-Time-Proof';
import { HowItWorks } from './components/06-How-It-Works';
import { SocialProof } from './components/07-Social-Proof';
import { TimeComparisonTable } from './components/08-Time-Comparison-Table';
import { WhatYouGet } from './components/09-What-You-Get';
import { BonusSection } from './components/10-Bonuses';
import { MainOfferCTA } from './components/11-Main-Offer-CTA';
import { TimeRecoveryGuarantee } from './components/12-Time-Recovery-Guarantee';
import { FAQSection } from './components/13-FAQ';
import { FooterSection } from './components/14-Footer';

const medMarketingLP16Config: LandingPageConfig = {
  id: 'medmarketing-lp16',
  title: 'MedMarketingAI+ LP16 - Trabalhe Menos, Ganhe Mais',
  description: 'Automatize marketing médico em 20 min/semana. Recupere 420 horas/ano (17 dias de vida). Agenda cheia sem sacrificar família.',
  slug: 'medmarketing-lp16',
  metaTitle: 'Trabalhe Menos, Ganhe Mais | Marketing Médico Automatizado - MedMarketingAI+',
  metaDescription: '20 min/semana vs 9h manuais. Economize 420h/ano (17 dias). IA trabalha 24/7 enquanto você vive. Oferta vitalícia R$ 997.',
  keywords: [
    'marketing médico automatizado',
    'economia de tempo médicos',
    'automação médico',
    'work life balance médico',
    'médico exausto solução',
    'marketing 24/7',
    'tempo livre médico',
    'qualidade de vida médico',
    'fim de semana livre',
    'médico sem sacrifício',
    'agenda cheia automática'
  ],
  theme: {
    primaryColor: 'hsl(220, 80%, 55%)',
    secondaryColor: 'hsl(220, 70%, 70%)',
  }
};

export const MedMarketingLP16: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP16Config}>
      <HeroSection />
      <ProblemsSection />
      <ViciousCycle />
      <SolutionAutomation />
      <TimeProof />
      <HowItWorks />
      <SocialProof />
      <TimeComparisonTable />
      <WhatYouGet />
      <BonusSection />
      <MainOfferCTA />
      <TimeRecoveryGuarantee />
      <FAQSection />
      <FooterSection />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP16;
