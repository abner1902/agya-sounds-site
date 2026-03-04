'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const ArtistCard = ({ artist }) => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const artistUrl = '/artists/' + artist.id;
  const imageSrc = '/images/artists/' + artist.image;
  const flagSrc = '/images' + artist.countryFlag;

  const handleClick = (e) => {
    e.preventDefault();
    if (clicked) return;
    setClicked(true);
    setTimeout(() => {
      router.push(artistUrl);
    }, 150);
  };

  const cardStyle = {
    transition: 'transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.25s ease',
    transform: clicked ? 'scale(1.18)' : 'scale(1)',
    opacity: clicked ? 0 : 1,
  };

  const imageStyle = {
    transition: 'transform 0.15s ease',
    transform: clicked ? 'scale(1.08)' : 'scale(1)',
  };

  return (
    <a 
      href={artistUrl} 
      onClick={handleClick} 
      className="group relative block w-full aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
      style={cardStyle}
    >
      <Image 
        src={imageSrc} 
        alt={'Foto de ' + artist.name} 
        fill 
        // CORREÇÃO: No mobile (640px) o grid é 2 colunas, então cada foto ocupa 50vw.
        // No desktop (1024px+) o grid é 4 colunas, então cada foto ocupa 25vw.
        sizes="(max-width: 768px) 50vw, 25vw"
        // O Sharp vai transformar o JPEG em AVIF com 70% de qualidade aqui:
        quality={70}
        className="object-cover opacity-90 group-hover:opacity-100" 
        style={imageStyle} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-[14px] md:text-lg font-bold tracking-tight uppercase">
            {artist.name}
          </h3>
          {artist.countryFlag && (
            <Image 
              src={flagSrc} 
              alt={'Bandeira de ' + artist.countryName} 
              width={24} 
              height={16} 
              className="rounded shadow-md" 
            />
          )}
        </div>
        <p className="text-[10px] md:text-sm text-amber-400 font-medium tracking-wide uppercase mt-1">
          {artist.role}
        </p>
      </div>
    </a>
  );
};