import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToOffer } from '@/features/landings/shared/utils/scrollHelpers';
export const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show button after 300px scroll
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll(); // Check initial state

    // Wait for offer section to be loaded (for lazy-loaded sections)
    const waitForOfferSection = () => {
      const offerSection = document.querySelector('#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]');
      if (offerSection) {
        const observer = new IntersectionObserver(([entry]) => {
          setIsHidden(entry.isIntersecting);
        }, {
          threshold: 0.1
        });
        observer.observe(offerSection);
        return () => {
          observer.disconnect();
        };
      } else {
        // If not found yet, try again after a short delay (for lazy-loaded content)
        const timeoutId = setTimeout(waitForOfferSection, 500);
        return () => clearTimeout(timeoutId);
      }
    };
    const cleanupObserver = waitForOfferSection();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanupObserver) cleanupObserver();
    };
  }, []);
  if (!isVisible || isHidden) return null;
  return <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      {/* White backdrop bar with shadow */}
      <div className="relative bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-4 py-4 md:py-5">
          {/* Yellow gradient CTA button */}
          <button onClick={scrollToOffer} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-base md:text-xl py-5 md:py-6 px-6 md:px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:translate-y-[-2px] flex items-center justify-center gap-3 md:gap-4 group border-2 border-yellow-300 hover:border-yellow-500" aria-label="Quero meu acesso vitalício">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold">QUERO MEU ACESSO VITALÍCIO </span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>;
};
export default StickyCtaButton;