/**
 * Utility functions for scroll behavior in landing pages
 */

/**
 * Scrolls to the offer section on the page
 * Tries multiple selectors to find the offer section
 */
export const scrollToOffer = () => {
  const offerSection = document.querySelector(
    '#oferta-section, .oferta-section, #oferta, .oferta, [id*="oferta"], [class*="oferta"]'
  );
  
  if (offerSection) {
    offerSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // Fallback: scroll down 1.5 screens if offer section not found
    window.scrollBy({
      top: window.innerHeight * 1.5,
      behavior: 'smooth'
    });
  }
};

/**
 * Scrolls to a specific section by selector
 */
export const scrollToSection = (selector: string) => {
  const section = document.querySelector(selector);
  
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Scrolls to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
