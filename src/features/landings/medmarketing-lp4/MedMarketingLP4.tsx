import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig } from '@/types/landing';
import { StickyCtaButton } from '@/features/landings/shared/components/StickyCtaButton';

// Import all sections
import { HeroSection } from './components/01-Hero-Section';
import ProblemsSection from './components/02-Problems-Section';
import SolutionSection from './components/03-Solucao-Apresentacao-Produto';
import EspecificacoesDetalhadas from './components/04-Especificacoes-Detalhadas';
import HowItWorksSection from './components/05-Como-Funciona-PassoAPasso';
import AntesDepoisComparacao from './components/06-Antes-Depois-Comparacao';
import DepoimentosProvaSocial from './components/07-Depoimentos-Prova-Social';
import BonusSection from './components/08-Bonus-Extras-Inclusos';
import OfertaPrincipalCTA from './components/10-Oferta-Principal-CTA';
import AutoridadeCredibilidade from './components/11-Autoridade-Credibilidade';
import FAQPerguntasFrequentes from './components/12-FAQ-Perguntas-Frequentes';
import PartnersSection from './components/13-Parceiros-Reforcar-Autoridade';
import FooterContatoInformacoes from './components/15-Footer-Contato-Informacoes';

const medMarketingLP4Config: LandingPageConfig = {
  id: 'medmarketing-lp4',
  title: 'MedMarketingAI+ LP4 - IA para Marketing Médico',
  description: 'Plataforma de inteligência artificial para acelerar o marketing médico - Versão 4',
  slug: 'medmarketing-lp4',
  metaTitle: 'MedMarketingAI+ LP4 - Inteligência Artificial para Marketing Médico | 165 Assistentes IA',
  metaDescription: 'Descubra o MedMarketingAI+: 165 assistentes de IA para marketing médico. Crie conteúdo profissional em minutos. Acesso vitalício por R$ 997.',
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

export const MedMarketingLP4: React.FC = () => {
  return (
    <LandingLayout config={medMarketingLP4Config}>
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <EspecificacoesDetalhadas />
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

export default MedMarketingLP4;
