'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/contexts/IntlContext';

export default function DemoCard() {
  const t = useTranslations();
  const pathname = usePathname();
  const segments = (pathname || '/').split('/').filter(Boolean);
  const locale = ['pt', 'en', 'es'].includes(segments[0]) ? segments[0] : 'pt';

  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-[1100px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full rounded-[40px] bg-[#2D1B94] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-2xl"
        >
          
          <div className="w-full md:w-1/2 flex justify-center">
            <Image 
              src="/demo-character.webp" 
              alt="Produtor Agya" 
              width={400}
              height={400}
              priority
              className="w-full max-w-[400px] h-auto object-contain" 
            />
          </div>
          
          <div className="w-full md:w-1/2 text-white text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-[32px] md:text-[45px] font-black uppercase tracking-tighter mb-4 leading-none">
              {t('demo.title')}
            </h3>
            <p className="text-sm md:text-base font-medium opacity-90 mb-8 max-w-[450px] leading-snug">
              {t('demo.description')}
            </p>
            
            <a
              href={`/${locale}/contact?demo=true`}
              className="
                inline-flex items-center justify-center h-16 px-8 
                bg-[#FFD700] text-[#2D1B94] 
                rounded-2xl font-black uppercase tracking-wider
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]
                active:scale-95
              "
            >
              📩 {t('demo.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}