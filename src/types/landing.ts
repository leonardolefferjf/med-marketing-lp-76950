export interface LandingPageConfig {
  id: string;
  title: string;
  description: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
  };
}

export interface LandingSection {
  id: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  order: number;
  visible: boolean;
}

export interface LandingPageData {
  config: LandingPageConfig;
  sections: LandingSection[];
}

export interface LandingTemplate {
  id: string;
  name: string;
  description: string;
  preview?: string;
  defaultConfig: Partial<LandingPageConfig>;
  defaultSections: Omit<LandingSection, 'id'>[];
}