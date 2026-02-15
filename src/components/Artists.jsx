'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Imports de estilo do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Artists() {
  return (
    <section id="artistas" className="relative flex min-h-[80vh] items-center justify-center gap-[100px] overflow-hidden bg-black px-[60px] py-[100px] max-[1100px]:flex-col max-[1100px]:gap-[50px] max-[1100px]:px-5">
      
      {/* Conteúdo Texto */}
      <div className="relative z-10 max-w-[530px]">
        <h2 className="mb-6 font-sans text-[40px] font-black uppercase text-white tracking-tighter">ARTISTAS</h2>
        <p className="mb-11 font-sans text-[20px] md:text-[22px] font-normal leading-[1.5] text-white/80">
          Nossos artistas canalizam frequências do terceiro olho. Cada projeto sonoro é uma jornada espiritual, conectando tecnologia, natureza e consciência expandida.
        </p>
        <a href="/contato" className="inline-flex items-center justify-center rounded-xl bg-[#6d28d9] px-10 py-4 font-sans text-[18px] font-bold uppercase text-white transition-all hover:scale-105 hover:bg-[#7c3aed] hover:shadow-[0_0_30px_rgba(109,40,217,0.4)]">
          SAIBA MAIS
        </a>
      </div>
      
      {/* Container do Carrossel */}
      <div className="relative z-10 h-[417px] w-[626px] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-md:h-[300px] max-md:w-full">
        <Swiper 
          modules={[Autoplay, EffectFade, Pagination]} 
          effect="fade" 
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          loop={true} 
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          <SwiperSlide>
            <img src="/ABSYCHO_LIVE.png" alt="ABSYCHO LIVE" className="h-full w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-white font-bold text-xl uppercase">
              Em Breve
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}