'use client';

export default function About() {
  return (
    <section 
      id="sobre"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#080808] px-5 py-[120px]"
    >
      <div className="z-[3] w-full max-w-[900px]" style={{textAlign: 'center'}}>
        
        <h2 className="mb-[40px] md:mb-[25px] animate-fade-in font-sans text-[14px] md:text-[18px] font-black uppercase tracking-[0.3em] text-[#B1A27A]">
          Sobre a Gravadora
        </h2>

        <h3 className="mb-[50px] md:mb-[40px] animate-fade-in-delayed font-sans text-[32px] md:text-[48px] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white">
          Agya Sounds: Frequências do Terceiro Olho
        </h3>

        <p style={{textAlign: 'center'}} className="mx-auto w-full max-w-[750px] animate-fade-in-delayed-more font-sans text-[17px] md:text-[20px] font-light leading-[1.8] text-[#a0a0a0]">
          Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana. 
          Através de vertentes do Darkpsy, criamos experiências sonoras que funcionam como portais para 
          estados elevados de consciência. Entre, ouça e conecte-se com o seu eu superior.
        </p>

      </div>
    </section>
  );
}
