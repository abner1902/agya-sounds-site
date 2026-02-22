'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link'; 
import { allArtists } from '@/data/artists';

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
        <Link href="/artists" className="inline-flex items-center justify-center rounded-xl bg-[#6d28d9] px-10 py-4 font-sans text-[18px] font-bold uppercase text-white transition-all hover:scale-105 hover:bg-[#7c3aed] hover:shadow-[0_0_30px_rgba(109,40,217,0.4)]">
          SAIBA MAIS
        </Link>
      </div>
      
      {/* Container do Carrossel */}
      <div className="relative z-10 h-[417px] w-[626px] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-md:h-[300px] max-md:w-full border border-white/5">
        
        <Swiper 
          modules={[Autoplay, EffectFade, Pagination]} 
          effect="fade" 
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          loop={true} 
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {allArtists.map((artist) => (
            <SwiperSlide key={artist.id}>
              {/* O Link agora leva para a GALERIA GERAL (/artists) */}
              <Link href="/artists" className="group block h-full w-full relative cursor-pointer">
                <Image
                  src={`/images/artists/${artist.image}`}
                  alt={artist.name}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  priority={artist.id === 'absycho'}
                />
                {/* Overlay sutil para indicar clique */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                
                {/* Nome do artista apenas como informação visual */}
                <div className="absolute bottom-8 left-8 z-20">
                   <span className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg text-white font-bold uppercase tracking-widest text-xs border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                     VER CASTING COMPLETO
                   </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}