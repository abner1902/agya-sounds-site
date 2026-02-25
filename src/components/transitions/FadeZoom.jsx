'use client';

import { motion } from 'framer-motion';

/**
 * Componente de transição com fade e zoom suave
 * 
 * Props:
 * - children: conteúdo a ser animado
 * - delay: atraso antes da animação (segundos)
 * - duration: duração da animação (segundos)
 * - y: deslocamento vertical inicial (pixels)
 */
export function FadeZoom({ 
  children, 
  delay = 0, 
  duration = 0.8,
  y = 30,
  className = '' 
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.96,
        y: y
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        y: 0
      }}
      viewport={{ 
        once: true,
        margin: "-80px"
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}