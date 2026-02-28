'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const TextAnimate = ({
  children,
  animation = 'slideUp',
  by = 'word',
  as: Component = 'div',
  className,
  delay = 0,
}) => {
  const elements = by === 'word' ? children.split(' ') : children.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: by === 'word' ? 0.1 : 0.03, 
        delayChildren: delay 
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: animation === 'slideUp' ? 20 : animation === 'slideDown' ? -20 : 0,
      x: animation === 'slideLeft' ? 20 : animation === 'slideRight' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  return (
    <Component className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {elements.map((el, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block whitespace-pre"
          >
            {el}{by === 'word' && i !== elements.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  );
};