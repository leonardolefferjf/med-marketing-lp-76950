import React from 'react';
import { LandingPageConfig } from '@/types/landing';

interface LandingLayoutProps {
  config: LandingPageConfig;
  children: React.ReactNode;
  className?: string;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  config,
  children,
  className = ""
}) => {
  const {
    title,
    description,
    metaTitle,
    metaDescription,
    keywords,
    ogImage,
    theme
  } = config;

  return (
    <div 
      className={`min-h-screen bg-background ${className}`}
      style={{
        backgroundColor: theme?.backgroundColor || undefined
      }}
    >
      {children}
    </div>
  );
};