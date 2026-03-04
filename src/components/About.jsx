'use client';

import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-5 py-25">
      
      {/* OTIMIZAÇÃO: Usando Next/Image para a Op Art */}
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
        <Image 
          src="/fundo_op_art.jpg" 
          alt="Op Art Texture"
          fill
          className="object-cover"
          quality={40} // Textura pode ter qualidade baixa
        />
      </div>
      
      <div className="z-10 w-full max-w-225 text-center">
        <TextAnimate 
          animation="fadeIn" 
          by="word" 
          className="mb-6 font-sans text-sm font-bold uppercase tracking-widest text-[#B1A27A]"
        >
          Sobre a Gravadora
        </TextAnimate>
        
        <div className="mb-10 font-sans text-3xl md:text-4xl font-black uppercase text-white leading-tight flex flex-col items-center">
          <TextAnimate animation="slideUp" by="character" as="h2">
            Agya Sounds
          </TextAnimate>
          
          <TextAnimate animation="slideUp" by="word" delay={0.5} className="text-white text-2xl md:text-3xl">
            Frequências do Terceiro Olho
          </TextAnimate>
        </div>

        <p className="mx-auto max-w-200 font-sans text-lg md:text-xl font-normal leading-relaxed text-white/90">
          Somos uma gravadora de música psicodélica experimental dedicada 
          a expandir a percepção humana. Através de vertentes do Darkpsy, criamos 
          experiências sonoras que funcionam como portais para estados elevados de consciência.
        </p>
      </div>
    </section>
  );
}