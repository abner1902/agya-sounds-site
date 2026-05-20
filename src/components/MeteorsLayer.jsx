'use client';
import { motion } from 'framer-motion';

const METEORS = Array.from({ length: 18 }).map((_, index) => ({
  top: `${(index * 5.26) % 100}%`,
  delay: (index * 0.3) % 6,
  duration: 4 + (index % 4),
  width: 80 + ((index * 13) % 200),
}));

export default function MeteorsLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {METEORS.map((meteor, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] rounded-full"
          style={{
            top: meteor.top,
            width: meteor.width,
            background: "linear-gradient(90deg, transparent, rgba(177,162,122,0.9), rgba(168,85,247,0.8), transparent)",
            filter: "blur(0.5px) drop-shadow(0 0 6px rgba(177,162,122,0.5))",
          }}
          initial={{ x: "-200px", rotate: 15 }}
          animate={{ x: "110vw" }}
          transition={{ duration: meteor.duration, repeat: Infinity, delay: meteor.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}
