'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Template({ children }) {
  const pathname = usePathname();
  const { scrollToSection } = useSmoothScroll();

  const handleAnimationComplete = () => {
    if (pathname === '/') {
      const target = sessionStorage.getItem('scrollTo');
      if (target) {
        sessionStorage.removeItem('scrollTo');
        scrollToSection(target);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.div>
  );
}