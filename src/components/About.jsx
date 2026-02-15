'use client';
export default function About() {
  return (
    <section id="sobre" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black px-5 py-[100px]">
      {/* TEXTURA DE FUNDO - Camada de Op Art */}
      <div 
        className="absolute inset-0 z-1 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo_op_art.jpg')" }} 
      />
      
      <div className="z-10 w-full max-w-[900px] text-center">
        <p className="mb-6 font-sans text-[14px] font-bold uppercase tracking-[0.4em] text-[#B1A27A]">
          Sobre a Gravadora
        </p>
        
        <h2 className="mb-11 font-sans text-[32px] md:text-[40px] font-black uppercase text-white leading-tight">
          Agya Sounds <br/> Frequências do Terceiro Olho
        </h2>

        <p className="mx-auto max-w-[800px] font-sans text-[18px] md:text-[22px] font-normal leading-[1.5] text-white/90">
          Somos uma gravadora de música psicodélica experimental dedicada a expandir a 
          percepção humana. Através de vertentes do Darkpsy, criamos experiências sonoras 
          que funcionam como portais para estados elevados de consciência.
        </p>
      </div>
    </section>
  );
}