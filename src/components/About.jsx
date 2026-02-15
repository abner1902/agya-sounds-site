'use client';
export default function About() {
  return (
    <section id="sobre" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-5 py-[100px]">
      <div className="z-[3] w-full max-w-[900px] text-center">
        {/* Subtítulo mantido para estilo, mas com tipografia alinhada */}
        <p className="mb-6 font-sans text-[14px] font-bold uppercase tracking-[0.4em] text-[#B1A27A]">
          Sobre a Gravadora
        </p>
        
        {/* Título: Padronizado com Artistas (40px) */}
        <h2 className="mb-11 font-sans text-[32px] md:text-[40px] font-black uppercase text-white leading-tight">
          Agya Sounds <br/> Frequências do Terceiro Olho
        </h2>

        {/* Parágrafo: Padronizado com Artistas (22px) */}
        <p className="mx-auto max-w-[800px] font-sans text-[18px] md:text-[22px] font-normal leading-[1.5] text-white opacity-90">
          Somos uma gravadora de música psicodélica experimental dedicada a expandir a 
          percepção humana. Através de vertentes do Darkpsy, criamos experiências sonoras 
          que funcionam como portais para estados elevados de consciência. Entre, ouça e 
          conecte-se com o seu eu superior.
        </p>
      </div>
    </section>
  );
}