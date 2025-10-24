import { LandingPageConfig, LandingPageData, LandingTemplate } from '@/types/landing';

/**
 * Utilitários para gerenciar landing pages
 */

// Gerar slug a partir do título
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens múltiplos
    .trim();
};

// Validar configuração de landing page
export const validateLandingConfig = (config: LandingPageConfig): string[] => {
  const errors: string[] = [];
  
  if (!config.title?.trim()) {
    errors.push('Título é obrigatório');
  }
  
  if (!config.description?.trim()) {
    errors.push('Descrição é obrigatória');
  }
  
  if (!config.slug?.trim()) {
    errors.push('Slug é obrigatório');
  } else if (!/^[a-z0-9-]+$/.test(config.slug)) {
    errors.push('Slug deve conter apenas letras minúsculas, números e hífens');
  }
  
  return errors;
};

// Duplicar configuração de landing page
export const duplicateLandingConfig = (
  originalConfig: LandingPageConfig,
  suffix: string = 'copy'
): LandingPageConfig => {
  const timestamp = Date.now();
  
  return {
    ...originalConfig,
    id: `${originalConfig.id}-${suffix}-${timestamp}`,
    title: `${originalConfig.title} - Copy`,
    slug: `${originalConfig.slug}-${suffix}-${timestamp}`,
    metaTitle: originalConfig.metaTitle ? `${originalConfig.metaTitle} - Copy` : undefined
  };
};

// Gerar dados padrão para nova landing page
export const createDefaultLandingData = (
  title: string,
  template?: keyof typeof import('@/templates/LandingTemplate').LANDING_TEMPLATES
): LandingPageData => {
  const slug = generateSlug(title);
  const id = `landing-${Date.now()}`;
  
  const config: LandingPageConfig = {
    id,
    title,
    description: `Landing page para ${title}`,
    slug,
    metaTitle: title,
    metaDescription: `Descubra tudo sobre ${title}`,
    keywords: [title.toLowerCase(), 'landing page'],
  };
  
  // Se template foi especificado, aplicar configurações do template
  if (template) {
    // Aqui você aplicaria as configurações do template escolhido
    // Por ora, deixamos a configuração básica
  }
  
  return {
    config,
    sections: []
  };
};

// Exportar dados de landing page para JSON
export const exportLandingData = (data: LandingPageData): string => {
  return JSON.stringify(data, null, 2);
};

// Importar dados de landing page do JSON
export const importLandingData = (jsonString: string): LandingPageData => {
  try {
    const data = JSON.parse(jsonString);
    
    // Validar estrutura básica
    if (!data.config || !data.sections) {
      throw new Error('Formato de dados inválido');
    }
    
    return data as LandingPageData;
  } catch (error) {
    throw new Error('Erro ao importar dados: ' + (error as Error).message);
  }
};

// Gerar preview URL para landing page
export const generatePreviewUrl = (config: LandingPageConfig): string => {
  return `${window.location.origin}/${config.slug}`;
};

// Otimizar configuração para SEO
export const optimizeForSEO = (config: LandingPageConfig): LandingPageConfig => {
  const optimized = { ...config };
  
  // Garantir que metaTitle não seja muito longo
  if (optimized.metaTitle && optimized.metaTitle.length > 60) {
    optimized.metaTitle = optimized.metaTitle.substring(0, 57) + '...';
  }
  
  // Garantir que metaDescription não seja muito longa
  if (optimized.metaDescription && optimized.metaDescription.length > 160) {
    optimized.metaDescription = optimized.metaDescription.substring(0, 157) + '...';
  }
  
  // Garantir keywords únicas
  if (optimized.keywords) {
    optimized.keywords = [...new Set(optimized.keywords)];
  }
  
  return optimized;
};

// Salvar landing page no localStorage (para desenvolvimento)
export const saveLandingToLocal = (data: LandingPageData): void => {
  const key = `landing-${data.config.id}`;
  localStorage.setItem(key, exportLandingData(data));
};

// Carregar landing page do localStorage
export const loadLandingFromLocal = (landingId: string): LandingPageData | null => {
  const key = `landing-${landingId}`;
  const saved = localStorage.getItem(key);
  
  if (saved) {
    try {
      return importLandingData(saved);
    } catch {
      return null;
    }
  }
  
  return null;
};

// Listar todas as landing pages salvas localmente
export const listLocalLandings = (): LandingPageConfig[] => {
  const landings: LandingPageConfig[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('landing-')) {
      const data = loadLandingFromLocal(key.replace('landing-', ''));
      if (data) {
        landings.push(data.config);
      }
    }
  }
  
  return landings.sort((a, b) => a.title.localeCompare(b.title));
};