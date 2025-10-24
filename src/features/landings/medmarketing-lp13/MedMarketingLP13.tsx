import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import ProblemsSection from './components/02-Problems-Section';
import SolutionSection from './components/03-Solucao-Apresentacao-Produto';
import EspecificacoesDetalhadas from './components/04-Especificacoes-Detalhadas';
import AppScreenshotsGallery from './components/04b-App-Screenshots-Gallery';
import InteractiveDemo from './components/04c-Interactive-Demo';
import HowItWorksSection from './components/05-Como-Funciona-PassoAPasso';
import AntesDepoisComparacao from './components/06-Antes-Depois-Comparacao';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import AutoridadeCredibilidade from './components/11-Autoridade-Credibilidade';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import PartnersSection from './components/13-Parceiros-Reforcar-Autoridade';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP13Config: LandingPageConfig = {
  id: 'medmarketing-lp13',
  title: 'MedMarketingAI+ LP13 - IA para Marketing Médico',
  description: 'Plataforma completa de inteligência artificial para marketing médico - 165 assistentes + 12 módulos',
  slug: 'medmarketing-lp13',
  metaTitle: 'MedMarketingAI+ - 165 Assistentes IA + 12 Módulos | Marketing Médico Completo',
  metaDescription: 'Plataforma completa: 165 assistentes de IA + 12 módulos profissionais para marketing médico. Verificador CFM, templates, hashtags e mais. Acesso vitalício por R$ 997.',
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
    'automação marketing médico',
    'verificador CFM',
    'compliance médico',
    'templates médicos',
    'hashtags médicas'
  ],
  theme: {
    primaryColor: 'hsl(var(--medical-green))',
    secondaryColor: 'hsl(var(--medical-green-light))',
  }
};

export const MedMarketingLP13: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP13Config}>
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <EspecificacoesDetalhadas />
      <AppScreenshotsGallery />
      <InteractiveDemo />
      <HowItWorksSection />
      <AntesDepoisComparacao />
      <DepoimentosProvaSocial />
      <BonusSection />
      <OfertaPrincipalCTA />
      <AutoridadeCredibilidade />
      <FAQPerguntasFrequentes />
      <PartnersSection />
      <FooterContatoInformacoes />
      <StickyCtaButton />
    </LandingLayout>
  );
};

export default MedMarketingLP13;
