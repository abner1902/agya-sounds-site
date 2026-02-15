'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Artists() {
  return (
    <section id="artistas" className="relative flex min-h-[80vh] items-center justify-center gap-[100px] overflow-hidden bg-black px-[60px] py-[100px] max-[1100px]:flex-col max-[1100px]:gap-[50px] max-[1100px]:px-5 max-[1100px]:py-[60px]">
      <div className="pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-20" style={{backgroundImage: 'url(/fundoopart.jpg)'}} />
      
      <div className="relative z-[2] max-w-[530px] animate-slide-in-left">
        <h2 className="mb-6 font-sans text-[40px] font-black uppercase text-white">ARTISTAS</h2>
        <p className="mb-11 font-sans text-[22px] font-normal leading-[1.5] text-white opacity-90">
          Nossos artistas canalizam frequências do terceiro olho. Cada projeto sonoro é uma jornada espiritual, conectando tecnologia, natureza e consciência expandida.
        </p>
        <a href="/contato" className="inline-flex items-center justify-center rounded-xl bg-[#6d28d9] px-10 py-4 font-sans text-[20px] font-bold uppercase text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(109,40,217,0.6)]">
          SAIBA MAIS
        </a>
      </div>
      
      <div className="relative z-[2] h-[417px] w-[626px] rounded-[38px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-md:h-auto max-md:w-full animate-slide-in-right">
        <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" autoplay={{ delay: 4000, disableOnInteraction: false }} loop={true} pagination={{ clickable: true }}>
          <SwiperSlide><img src="/ABSYCHOLIVE.png" alt="ABSYCHO LIVE" className="block h-full w-full object-cover" /></SwiperSlide>
          <SwiperSlide><div className="flex h-[417px] w-full items-center justify-center bg-[#111] text-[32px] font-bold text-white">EM BREVE</div></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
