'use client';

import dynamic from 'next/dynamic';
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';
import { useTranslations } from '@/contexts/IntlContext';

const Particles = dynamic(
  () => import('@/components/ui/particles').then((m) => m.Particles),
  { ssr: false }
);

const RELEASES_DATA = [
  { id: 1, title: 'Story Magician EP', artist: 'Madara',
    image: '/images/releases/madara-arte-insta.webp',
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/story-magician-ep', isFree: false },
  { id: 2, title: 'Seeds of a Sunlit Mind EP', artist: 'Koothan',
    image: '/images/releases/seeds-of-a-sunlit-mind.webp',
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/seeds-of-a-sunlit-mind-ep', isFree: true },
  { id: 3, title: 'Pineal Vision EP', artist: 'ABSYCHO',
    image: '/images/releases/pineal-vision.webp',
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/pineal-vision-ep', isFree: false },
  { id: 4, title: 'V/A - Fungus Slug', artist: 'Compiled by Ovni Messenger',
    image: '/images/releases/fungus-slug.webp',
    bandcampUrl: 'https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger', isFree: false }
];

export default function Releases() {
  const t = useTranslations();

  return (
    <section id="lancamentos" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-[60px] py-[100px] max-[1100px]:px-5 max-[1100px]:py-[60px]">
      <Particles className="absolute inset-0 z-0" quantity={400} staticity={50} ease={50} size={1.2} color="#B1A27A" vx={0.15} vy={-0.08} refresh={false} />

      <div className="relative z-10 w-full max-w-[1300px] text-center">
        <TextAnimate animation="slideUp" by="word" as="h2" className="mb-6 font-sans text-[40px] font-black uppercase text-white max-md:text-[32px]">
          {t('releases.title')}
        </TextAnimate>

        <p className="mx-auto mb-[60px] max-w-[900px] font-sans text-[22px] font-normal leading-[1.5] text-white opacity-90 max-md:mb-10 max-md:text-[18px]">
          {t('releases.description')}
        </p>

        <div className="grid grid-cols-4 gap-[30px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[25px] max-[640px]:grid-cols-1 max-[640px]:gap-[30px]">
          {RELEASES_DATA.map((release) => (
            <div key={release.id} className="flex flex-col items-center rounded-[20px] bg-white/5 border border-white/5 px-5 pb-[30px] pt-[25px] text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-[5px]">
              <a href={release.bandcampUrl} target="_blank" rel="noopener noreferrer" className="group mb-5 block w-full aspect-square overflow-hidden rounded-2xl bg-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer">
                <Image src={release.image} alt={release.title} width={400} height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" quality={75}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={release.id <= 2} />
              </a>

              <h3 className="mb-2 font-sans text-[20px] font-bold text-white max-md:text-[18px]">{release.title}</h3>
              <p className="mb-3 font-sans text-[14px] font-normal text-[#B1A27A]">{release.artist}</p>
              <p className="mb-5 flex-grow font-sans text-[14px] font-light leading-[1.6] text-white/70">
                {t(`releases.item${release.id}.description`)}
              </p>

              <a href={release.bandcampUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block w-full rounded-xl bg-[#6d28d9] px-0 py-[14px] text-center font-sans text-[14px] font-bold uppercase tracking-[0.5px] text-white no-underline transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-[#7c3aed] hover:shadow-[0_0_25px_rgba(109,40,217,0.6)]">
                {release.isFree ? t('releases.free') : t('releases.download')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}