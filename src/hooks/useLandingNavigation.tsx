import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export interface LandingNavigationItem {
  id: string;
  title: string;
  path: string;
  description?: string;
  isActive?: boolean;
}

export const useLandingNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lista de todas as landing pages disponíveis
  const landingPages: LandingNavigationItem[] = [
    {
      id: 'medassist',
      title: 'MedAssist',
      path: '/',
      description: 'IA para Medicina'
    },
    // Adicione novas landing pages aqui
    // {
    //   id: 'example',
    //   title: 'Example Landing',
    //   path: '/example',
    //   description: 'Página de exemplo'
    // }
  ];

  // Função para navegar para uma landing page específica
  const goToLanding = useCallback((landingId: string) => {
    const landing = landingPages.find(page => page.id === landingId);
    if (landing) {
      navigate(landing.path);
    }
  }, [navigate, landingPages]);

  // Função para obter a landing page atual
  const getCurrentLanding = useCallback(() => {
    return landingPages.find(page => page.path === location.pathname);
  }, [location.pathname, landingPages]);

  // Função para duplicar a landing page atual
  const duplicateCurrentLanding = useCallback(() => {
    const current = getCurrentLanding();
    if (current) {
      const newId = `${current.id}-copy-${Date.now()}`;
      const newPath = `/${newId}`;
      
      // Esta função seria expandida para realmente duplicar a configuração
      console.log('Duplicating landing:', current.id, 'as', newId);
      
      return {
        id: newId,
        title: `${current.title} Copy`,
        path: newPath,
        description: current.description
      };
    }
    return null;
  }, [getCurrentLanding]);

  // Marcar landing pages ativas
  const landingPagesWithStatus = landingPages.map(page => ({
    ...page,
    isActive: page.path === location.pathname
  }));

  return {
    landingPages: landingPagesWithStatus,
    currentLanding: getCurrentLanding(),
    goToLanding,
    duplicateCurrentLanding,
    navigate
  };
};