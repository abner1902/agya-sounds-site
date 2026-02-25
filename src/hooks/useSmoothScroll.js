'use client';

import { useCallback } from 'react';

/**
 * Hook para scroll suave entre seções
 * Calcula a posição exata e compensa o offset do navbar fixo (80px)
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId) => {
    // Remove o # se vier no ID
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (!element) {
      console.warn(`Seção "${id}" não encontrada`);
      return;
    }

    // Offset para compensar navbar fixo (80px de altura)
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Scroll suave
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection };
}