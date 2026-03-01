'use client';

import { TextAnimate } from "@/components/magicui/text-animate";

export default function About() {
  return (
    <section id="sobre" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-5 py-25">
      {/* TEXTURA DE FUNDO - Camada de Op Art */}
      <div 
        className="absolute inset-0 z-1 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo_op_art.jpg')" }} 
      />
      
      <div className="z-10 w-full max-w-225 text-center">
        {/* Label superior com fadeIn suave */}
        <TextAnimate 
          animation="fadeIn" 
          by="word" 
          className="mb-6 font-sans text-sm font-bold uppercase tracking-widest text-[#B1A27A]"
        >
          Sobre a Gravadora
        </TextAnimate>
        
        <div className="mb-10 font-sans text-3xl md:text-4xl font-black uppercase text-white leading-tight flex flex-col items-center">
          {/* Nome da Gravadora: Letra por letra (Premium) */}
          <TextAnimate animation="slideUp" by="character" as="h2">
            Agya Sounds
          </TextAnimate>
          
          {/* Slogan: Palavra por palavra com leve atraso */}
          <TextAnimate animation="slideUp" by="word" delay={0.5} className="text-white text-2xl md:text-3xl">
            Frequências do Terceiro Olho
          </TextAnimate>
        </div>

        {/* O texto corrido mantemos estático ou com um fadeIn simples para não cansar a leitura */}
        <p className="mx-auto max-w-200 font-sans text-lg md:text-xl font-normal leading-relaxed text-white/90">
          Somos uma gravadora de música psicodélica experimental dedicada 
          a expandir a percepção humana. Através de vertentes do Darkpsy, criamos 
          experiências sonoras que funcionam como portais para estados elevados de consciência.
        </p>
      </div>
    </section>
  );
}