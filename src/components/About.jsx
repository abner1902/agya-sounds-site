'use client';

import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';
import { useTranslations } from '@/contexts/IntlContext';

export default function About() {
  const t = useTranslations();

  return (
    <section id="sobre" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-5 py-25">
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
        <Image src="/fundo_op_art.webp" alt="Op Art Texture" fill sizes="100vw" className="object-cover" quality={40} />
      </div>
      
      <div className="z-10 w-full max-w-225 text-center">
        <TextAnimate animation="fadeIn" by="word" className="mb-6 font-sans text-sm font-bold uppercase tracking-widest text-[#B1A27A]">
          {t('about.eyebrow')}
        </TextAnimate>
        
        <div className="mb-10 font-sans text-3xl md:text-4xl font-black uppercase text-white leading-tight flex flex-col items-center">
          <TextAnimate animation="slideUp" by="character" as="h2">
            {t('about.heading')}
          </TextAnimate>
          <TextAnimate animation="slideUp" by="word" delay={0.5} className="text-white text-2xl md:text-3xl">
            {t('about.subtitle')}
          </TextAnimate>
        </div>

        <p className="mx-auto max-w-200 font-sans text-lg md:text-xl font-normal leading-relaxed text-white/90">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
}