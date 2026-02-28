'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MobileMenu({ isOpen, links, labels, getHref, handleClick, onClose }) {
  const menuVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    opened: { x: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 15 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05, ease: "easeOut" }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="closed"
          variants={menuVariants}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x > 100) {
              onClose();
            }
          }}
          className="fixed inset-y-0 right-0 z-[55] w-[65%] max-w-[350px] border-l border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl lg:hidden"
        >
          <nav className="flex h-full flex-col justify-center px-10 pt-[15px]">
            <ul className="space-y-6">
              {links.map((item, i) => (
                <motion.li key={item} custom={i} variants={linkVariants}>
                  <Link 
                    href={getHref(item)} 
                    onClick={(e) => handleClick(e, item)} 
                    className="group flex flex-col items-end"
                  >
                    <span className="text-right text-lg font-bold uppercase tracking-[0.15em] text-white transition-colors group-hover:text-[#B1A27A]">
                      {labels[item]}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }} 
              className="mt-10 border-t border-white/5 pt-6 text-right"
            >
              <p className="text-[9px] italic uppercase tracking-widest text-white/20">
                Agya Sounds © 2026
              </p>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}