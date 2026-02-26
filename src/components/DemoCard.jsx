'use client';

export default function DemoCard() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative w-full rounded-[40px] bg-[#2D1B94] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-2xl">
          
          {/* Imagem do Personagem */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/demo-character.png" 
              alt="Produtor Agya" 
              className="w-full max-w-[400px] object-contain" 
            />
          </div>
          
          {/* Conteúdo de Texto - Centralizado no Mobile */}
<div className="w-full md:w-1/2 text-white text-center md:text-left flex flex-col items-center md:items-start">
  <h3 className="text-[32px] md:text-[45px] font-black uppercase tracking-tighter mb-4 leading-none">
    ENVIE SUA DEMO
  </h3>
  <p className="text-sm md:text-base font-medium opacity-90 mb-8 max-w-[450px] leading-snug">
    Buscamos Darkpsy autêntico. Envie seu link do SoundCloud ou Google Drive (WAV, 44.1kHz, 24-bit) com mixagem em -6dB. Mostre-nos sua evolução sonora.
  </p>
  
  {/* Botão Link Direto para Contato */}
  <a
    href="/contact?demo=true"
    className="
      inline-flex items-center justify-center h-16 px-8 
      bg-[#FFD700] text-[#2D1B94] 
      rounded-2xl font-black uppercase tracking-wider
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]
      active:scale-95
    "
  >
    📩 Enviar Demo
  </a>
</div>
        </div>
      </div>
    </section>
  );
}