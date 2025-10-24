import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  dashboardPrincipal,
  templatesPosts,
  bibliotecaHashtags,
  geradorBioInstagram,
  geradorRodape,
  calendarioConteudo,
  chatbotConformidadeCfm,
  cfmBibliotecaRegras,
  iaFerramentas
} from '@/assets/app-screenshots';

export default function AppScreenshotsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const screenshots = [
    {
      src: dashboardPrincipal,
      title: 'Dashboard Inteligente',
      description: '165 Assistentes IA organizados + Sistema de Recomendação',
      badge: 'Principal'
    },
    {
      src: bibliotecaHashtags,
      title: 'Biblioteca de Hashtags',
      description: '+200 hashtags validadas + Alertas de proibidas pelo CFM',
      badge: 'Compliance'
    },
    {
      src: templatesPosts,
      title: 'Templates Prontos',
      description: '+50 templates profissionais 100% CFM',
      badge: 'Popular'
    },
    {
      src: chatbotConformidadeCfm,
      title: 'Chatbot IA de Conformidade',
      description: 'Assistente inteligente que responde dúvidas sobre CFM',
      badge: 'IA'
    },
    {
      src: geradorBioInstagram,
      title: 'Gerador de Bio Instagram',
      description: '3 estilos profissionais com preview em tempo real',
      badge: 'Criativo'
    },
    {
      src: calendarioConteudo,
      title: 'Calendário de Campanhas',
      description: '+150 datas comemorativas de saúde organizadas',
      badge: 'Planejamento'
    },
    {
      src: cfmBibliotecaRegras,
      title: 'Biblioteca de Regras CFM',
      description: '+30 regras organizadas com exemplos práticos',
      badge: 'Compliance'
    },
    {
      src: geradorRodape,
      title: 'Gerador de Rodapé',
      description: '5 tipos de disclaimers CFM automáticos',
      badge: 'Proteção'
    },
    {
      src: iaFerramentas,
      title: 'Diretório de IAs',
      description: '+40 ferramentas de IA catalogadas para médicos',
      badge: 'Curadoria'
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      'Principal': 'bg-blue-500',
      'Compliance': 'bg-green-500',
      'Popular': 'bg-purple-500',
      'IA': 'bg-yellow-500',
      'Criativo': 'bg-pink-500',
      'Planejamento': 'bg-teal-500',
      'Proteção': 'bg-red-500',
      'Curadoria': 'bg-indigo-500'
    };
    return colors[badge] || 'bg-gray-500';
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 shadow-lg">
            <ZoomIn className="w-4 h-4" />
            Plataforma Real
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 px-4">
            Veja a Plataforma{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              em Funcionamento
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
            Screenshots reais da plataforma MedMarketingAI+. Clique para ampliar e ver os detalhes.
          </p>

          <p className="text-sm text-gray-500">
            💡 Use as setas do teclado (← →) para navegar entre as imagens
          </p>
        </div>

        {/* Grid de Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openImage(index)}
            >
              {/* Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className={`${getBadgeColor(screenshot.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {screenshot.badge}
                </span>
              </div>

              {/* Imagem */}
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Overlay de Zoom */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Informações */}
              <div className="p-4">
                <h3 className="font-black text-lg text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de Rodapé */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <ZoomIn className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Screenshots reais da plataforma.</strong> Todas as imagens são
                capturas autênticas do MedMarketingAI+ em funcionamento. Clique em qualquer imagem para ver
                em tamanho completo e navegar pela galeria.
              </p>
            </div>
          </div>
        </div>

        {/* Modal de Visualização Completa */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            {/* Botão Fechar */}
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-50"
              onClick={closeImage}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Botão Anterior */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Botão Próximo */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Imagem */}
            <div className="max-w-6xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
                <h3 className="text-white font-bold text-xl mb-2">
                  {screenshots[selectedImage].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {screenshots[selectedImage].description}
                </p>
                <p className="text-white/60 text-xs mt-2">
                  Imagem {selectedImage + 1} de {screenshots.length} • Use ← → para navegar
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
