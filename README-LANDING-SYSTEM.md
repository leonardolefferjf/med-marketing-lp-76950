# Sistema de Landing Pages

## 🚀 Estrutura Organizada

Este projeto foi estruturado para gerenciar múltiplas landing pages de forma escalável e organizada.

### 📁 Estrutura de Pastas

```
src/
├── layouts/
│   └── LandingLayout.tsx          # Layout base com SEO
├── pages/
│   └── landings/
│       └── MedAssistLanding.tsx   # Landing principal
├── templates/
│   └── LandingTemplate.tsx        # Template base para novas landings
├── hooks/
│   └── useLandingNavigation.tsx   # Hook para navegação
├── utils/
│   └── landingHelpers.ts          # Utilitários para landing pages
└── types/
    └── landing.ts                 # Types TypeScript
```

## 🎯 Como Criar uma Nova Landing Page

### Método 1: Duplicação Rápida
```tsx
// 1. Copie src/pages/landings/MedAssistLanding.tsx
// 2. Renomeie para sua nova landing
// 3. Ajuste a configuração:

const minhaNavaLandingConfig: LandingPageConfig = {
  id: 'minha-nova-landing',
  title: 'Minha Nova Landing',
  description: 'Descrição da nova landing',
  slug: 'minha-nova-landing',
  metaTitle: 'SEO Title',
  metaDescription: 'SEO Description',
  keywords: ['palavra1', 'palavra2'],
  theme: {
    primaryColor: 'hsl(200, 100%, 50%)', // Sua cor primária
  }
};
```

### Método 2: Usando Template
```tsx
import { createLandingPage } from '@/templates/LandingTemplate';
import { MinhasSecoes } from '@/components/MinhasSecoes';

const MinhaLanding = createLandingPage(
  minhaConfig,
  [
    {
      id: 'hero',
      component: MinhasSecoes.Hero,
      order: 1,
      visible: true
    },
    {
      id: 'features',
      component: MinhasSecoes.Features,
      order: 2,
      visible: true
    }
  ]
);
```

## 🛠 Ferramentas Disponíveis

### Hook de Navegação
```tsx
import { useLandingNavigation } from '@/hooks/useLandingNavigation';

const { goToLanding, currentLanding, duplicateCurrentLanding } = useLandingNavigation();
```

### Utilitários
```tsx
import { 
  generateSlug, 
  duplicateLandingConfig, 
  validateLandingConfig 
} from '@/utils/landingHelpers';

// Gerar slug automaticamente
const slug = generateSlug("Minha Nova Landing"); // "minha-nova-landing"

// Duplicar configuração
const newConfig = duplicateLandingConfig(originalConfig);

// Validar configuração
const errors = validateLandingConfig(config);
```

## 🎨 Sistema de Temas

Cada landing pode ter seu próprio tema:

```tsx
theme: {
  primaryColor: 'hsl(200, 100%, 50%)',      // Cor primária
  secondaryColor: 'hsl(180, 100%, 40%)',   // Cor secundária
  backgroundColor: 'hsl(220, 20%, 10%)',   // Cor de fundo
}
```

## 🔧 SEO Automático

O `LandingLayout` gerencia automaticamente:
- Meta tags (title, description, keywords)
- Open Graph (Facebook)
- Twitter Cards
- Structured data
- Canonical URLs

## 📊 Fluxo de Trabalho Recomendado

1. **Duplicar** uma landing existente
2. **Ajustar** a configuração (cores, textos, SEO)
3. **Modificar** as seções conforme necessário
4. **Testar** responsividade e performance
5. **Adicionar** nova rota se necessário

## 🚀 Roteamento

Para adicionar nova rota, edite `src/App.tsx`:

```tsx
import { MinhaNovaLanding } from './pages/landings/MinhaNovaLanding';

// Adicione a rota
<Route path="/minha-nova-landing" element={<MinhaNovaLanding />} />
```

## 💡 Dicas Pro

- Use o sistema de **otimização de imagens** para performance
- Aproveite os **componentes reutilizáveis** existentes
- Mantenha **consistência** no design system
- **Teste** em diferentes dispositivos
- **Valide** SEO antes de publicar

## 🎯 Próximos Passos

Com essa estrutura, você pode:
- Duplicar landing pages rapidamente
- Manter código organizado e reutilizável
- Escalar para dezenas de landing pages
- Gerenciar temas e configurações facilmente
- Manter SEO otimizado automaticamente