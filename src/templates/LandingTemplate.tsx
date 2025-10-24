import React from 'react';
import { LandingLayout } from '@/layouts/LandingLayout';
import { LandingPageConfig, LandingSection } from '@/types/landing';

interface LandingTemplateProps {
  config: LandingPageConfig;
  sections: LandingSection[];
  className?: string;
}

export const LandingTemplate: React.FC<LandingTemplateProps> = ({
  config,
  sections,
  className
}) => {
  // Ordena seções por ordem e filtra visíveis
  const visibleSections = sections
    .filter(section => section.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <LandingLayout config={config} className={className}>
      {visibleSections.map((section) => {
        const SectionComponent = section.component;
        return (
          <SectionComponent
            key={section.id}
            {...(section.props || {})}
          />
        );
      })}
    </LandingLayout>
  );
};

// Template base para criar novas landing pages rapidamente
export const createLandingPage = (
  config: LandingPageConfig,
  sections: LandingSection[]
) => {
  const LandingPage: React.FC = () => (
    <LandingTemplate config={config} sections={sections} />
  );
  
  LandingPage.displayName = `${config.title}Landing`;
  
  return LandingPage;
};

// Templates pré-definidos
export const LANDING_TEMPLATES = {
  medassist: {
    id: 'medassist',
    name: 'MedAssist Template',
    description: 'Template para produtos de IA médica',
    defaultConfig: {
      theme: {
        primaryColor: 'hsl(var(--medical-green))',
        secondaryColor: 'hsl(var(--medical-green-light))',
      }
    },
    defaultSections: [
      { component: () => null, order: 1, visible: true }, // Hero
      { component: () => null, order: 2, visible: true }, // Product Info
      { component: () => null, order: 3, visible: true }, // Features
      { component: () => null, order: 4, visible: true }, // Problems
      { component: () => null, order: 5, visible: true }, // Solutions
    ]
  },
  
  simple: {
    id: 'simple',
    name: 'Simple Landing',
    description: 'Template simples com hero e features',
    defaultConfig: {},
    defaultSections: [
      { component: () => null, order: 1, visible: true }, // Hero
      { component: () => null, order: 2, visible: true }, // Features
      { component: () => null, order: 3, visible: true }, // CTA
    ]
  },
  
  saas: {
    id: 'saas',
    name: 'SaaS Landing',
    description: 'Template para produtos SaaS',
    defaultConfig: {
      theme: {
        primaryColor: 'hsl(var(--primary))',
        secondaryColor: 'hsl(var(--secondary))',
      }
    },
    defaultSections: [
      { component: () => null, order: 1, visible: true }, // Hero
      { component: () => null, order: 2, visible: true }, // Features
      { component: () => null, order: 3, visible: true }, // Pricing
      { component: () => null, order: 4, visible: true }, // Testimonials
      { component: () => null, order: 5, visible: true }, // CTA
    ]
  }
};