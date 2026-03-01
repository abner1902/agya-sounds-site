'use client';

import { Particles } from '@/components/ui/particles';
import { useState, useEffect } from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';

// Movi o array para fora para deixar o componente mais limpo e performático
const RELEASES_DATA = [
  { 
    id: 1, 
    title: 'Seeds of a Sunlit Mind EP', 
    artist: 'Koothan', 
    description: 'Novo EP da Agya Sounds por Koothan, apresenta uma jornada sonora profunda e orgânica, com texturas densas, ritmos hipnóticos e energia de pista. Download gratuito para a comunidade.',
    image: '/images/releases/seeds-of-a-sunlit-mind.jpg', 
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/seeds-of-a-sunlit-mind-ep', 
    isFree: true 
  },
  { 
    id: 2, 
    title: 'Pineal Vision EP', 
    artist: 'ABSYCHO', 
    description: 'Absycho mergulha em paisagens mentais onde frequências pulsantes atuam como chaves — abrindo portais e despertando a luz silenciosa da glândula pineal.',
    image: '/images/releases/pineal-vision.jpg', 
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/pineal-vision-ep', 
    isFree: false 
  },
  { 
    id: 3, 
    title: 'V/A - Fungus Slug', 
    artist: 'Compiled by Ovni Messenger', 
    description: 'Compilação forest/darkpsy que une mentes frescas e frequências distorcidas do underground. Artistas do Brasil, Chile, Índia e Japão em mutação psicodélica.',
    image: '/images/releases/fungus-slug.jpg', 
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger', 
    isFree: false 
  },
  { 
    id: 4, 
    title: 'Ego Death EP', 
    artist: 'Naga Baba', 
    description: 'Três movimentos que mesclam dark progressivo e ecos ancestrais, criando batidas sombrias com cânticos antigos. Uma oferenda ao ciclo de morte e renascimento.',
    image: '/images/releases/ego-death.jpg', 
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/ego-death-ep', 
    isFree: false 
  }
];

export default function Releases() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // eslint-disable-line
  }, []);

  // Evita o erro de hidratação
  if (!isMounted) {
    return null;
  }

  return (
    <section id="lancamentos" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-[60px] py-[100px] max-[1100px]:px-5 max-[1100px]:py-[60px]">
      
      <Particles
        className="absolute inset-0 z-0"
        quantity={400}
        staticity={50}
        ease={50}
        size={1.2}
        color="#B1A27A"
        vx={0.15}
        vy={-0.08}
        refresh={false}
      />

      <div className="relative z-10 w-full max-w-[1300px] text-center">
        <TextAnimate 
          animation="slideUp" 
          by="word" 
          as="h2" 
          className="mb-6 font-sans text-[40px] font-black uppercase text-white max-md:text-[32px]"
        >
          ÚLTIMOS LANÇAMENTOS
        </TextAnimate>

        <p className="mx-auto mb-[60px] max-w-[900px] font-sans text-[22px] font-normal leading-[1.5] text-white opacity-90 max-md:mb-10 max-md:text-[18px]">
          Explore as novas fronteiras da psicodelia experimental. De EPs conceituais a álbuns imersivos, aqui você encontra a vanguarda do Darkpsy voltada para a elevação da consciência e exploração do terceiro olho.
        </p>
        
        <div className="grid grid-cols-4 gap-[30px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[25px] max-[640px]:grid-cols-1 max-[640px]:gap-[30px]">
          {RELEASES_DATA.map((release) => (
            <div key={release.id} className="flex flex-col items-center rounded-[20px] bg-white/5 border border-white/5 px-5 pb-[30px] pt-[25px] text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-[5px]">
              
              <a 
                href={release.bandcampUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group mb-5 block w-full aspect-square overflow-hidden rounded-2xl bg-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <Image 
                  src={release.image} 
                  alt={release.title} 
                  width={400} 
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  priority={release.id <= 2}
                />
              </a>
              
              <h3 className="mb-2 font-sans text-[20px] font-bold text-white max-md:text-[18px]">{release.title}</h3>
              <p className="mb-3 font-sans text-[14px] font-normal text-[#B1A27A]">{release.artist}</p>
              <p className="mb-5 flex-grow font-sans text-[14px] font-light leading-[1.6] text-white/70">{release.description}</p>
              
              <a 
                href={release.bandcampUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full rounded-xl bg-[#6d28d9] px-0 py-[14px] text-center font-sans text-[14px] font-bold uppercase tracking-[0.5px] text-white no-underline transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(109,40,217,0.6)]"
              >
                {release.isFree ? 'FREE DOWNLOAD' : 'DOWNLOAD'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}