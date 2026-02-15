'use client';

export default function DemoCard() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative w-full rounded-[40px] bg-[#2D1B94] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-2xl">
          {/* Ilustração */}
          <div className="w-full md:w-1/2 flex justify-center">
             <img 
               src="/demo-character.png" 
               alt="Produtor Agya" 
               className="w-full max-w-[400px] object-contain"
             />
          </div>

          {/* Texto e Form */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-[32px] md:text-[45px] font-black uppercase tracking-tighter mb-4 leading-none">
              ENVIE SUA DEMO
            </h3>
            <p className="text-sm md:text-base font-medium opacity-90 mb-8 max-w-[450px] leading-snug">
              Buscamos Darkpsy autêntico. Envie seu link do SoundCloud (WAV, 44.1kHz, 24-bit) com mixagem em -6dB. Mostre-nos sua evolução sonora.
            </p>
            
            <div className="relative w-full max-w-[500px]">
              <input 
                type="text" 
                placeholder="Link do SoundCloud..."
                className="w-full h-16 bg-white/20 border border-white/30 rounded-2xl px-6 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <button className="absolute right-3 top-3 h-10 w-14 bg-[#FFD700] rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                <span className="text-2xl">📩</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}