// Medical Suites Images
import clinicaMedicinaImg from './suites/clinica-medicina.png';
import pediatriaImg from './suites/pediatria.png';
import ginecologiaImg from './suites/ginecologia.png';
import cirurgiaGeralImg from './suites/cirurgia-geral.png';
import anestesiologiaImg from './suites/anestesiologia.png';
import cardiologiaImg from './suites/cardiologia.png';
import medicinaFamiliaImg from './suites/medicina-familia.png';

// Main Images
import logoArtigoAI from './logo-artigo-ai.png';
import logoMedicina4 from './NOVA-LOGO-MEDICINA-4.0-e1731192076199.png';
import logoMedMarketing from './logo-medmarketing-transparent.png';
import leonardoImg from './leonardo.jpg';
import lailaImg from './laila.jpg';
import leonardoPremioHotmart from './leonardo-leffer-com-premio-hotmart.png';
import lefferSaudeTechLogo from './leffer-saude-tech-logo.png';
import lefferSaudeTechPreto from './logo-leffer-saude-tech-preto.png';
import garantiaImg from './garantia.png';
import seloHotmart from './selo-hotmart.webp';

// Bonus Images
import bonusArtigoAI from './bonus-artigo-ai-2.png';
import bonusArtigoAI3 from './bonus-artigo-ai-3.png';
import bonusHotmartTutor from './bonus-hotmart-tutor-2.png';
import bonusHotmartTutor3 from './bonus-hotmart-tutor-3.png';
import magicMedPrompts from './magic-med-prompts-bonus.png';
import hotmartTutorBonus from './hotmart-tutor-bonus.png';

// Partner Images
import microsoft from './microsoft.png';
import nvidia from './nividia.png';
import openai from './openai.png';
import pubmed from './pubmed.png';

// Mockups
import mockupMagicMed from './suites/mockup-magicmed.png';
import mockupMedQuatro from './suites/mokcup-med-quatro.png';

export const suitesImages = {
  clinicaMedica: clinicaMedicinaImg,
  pediatria: pediatriaImg,
  ginecologia: ginecologiaImg,
  cirurgiaGeral: cirurgiaGeralImg,
  anestesiologia: anestesiologiaImg,
  cardiologia: cardiologiaImg,
  medicinaFamilia: medicinaFamiliaImg,
};

export const mainImages = {
  logoArtigoAI,
  logoMedicina4,
  logoMedMarketing,
  leonardo: leonardoImg,
  laila: lailaImg,
  leonardoPremioHotmart,
  lefferSaudeTechLogo,
  lefferSaudeTechPreto,
  garantia: garantiaImg,
  seloHotmart,
};

export const bonusImages = {
  bonusArtigoAI,
  bonusArtigoAI3,
  bonusHotmartTutor,
  bonusHotmartTutor3,
  magicMedPrompts,
  hotmartTutorBonus,
};

export const partnerImages = {
  microsoft,
  nvidia,
  openai,
  pubmed,
};

export const mockupImages = {
  mockupMagicMed,
  mockupMedQuatro,
};

// Image preloader utility
export const preloadImages = (imagePaths: string[]) => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

// Preload all suite images
export const preloadSuiteImages = () => {
  preloadImages(Object.values(suitesImages));
};