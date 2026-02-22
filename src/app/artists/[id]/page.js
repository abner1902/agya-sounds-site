'use client';
import { use, useEffect } from 'react';
import { allArtists } from '@/data/artists';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ArtistBioPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const artist = allArtists.find((a) => a.id === params.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!artist) return notFound();

  const getYoutubeEmbed = (url) => {
    if (!url) return "s592tz0wLr0";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "s592tz0wLr0";
  };
  const videoId = getYoutubeEmbed(artist.latestRelease?.embedUrl);

  return (
    <main className="min-h-screen text-white font-['GothamCustom',_sans-serif] relative">
      {/* IMAGEM DE FUNDO REAL (Não é CSS Background) */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Image 
          src="/bg_artist_page_op_art.png" 
          alt="background" 
          fill 
          priority 
          className="object-cover opacity-40"
        />
        {/* Camada de Gradiente para garantir leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="max-w-[1323px] mx-auto px-6 pt-12 pb-24 relative z-10">
        <Link href="/artists" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-10 uppercase text-[11px] font-bold tracking-[0.4em] transition-all">
          <ChevronLeft size={16} /> VOLTAR PARA ARTISTAS
        </Link>

        <div className="relative w-full aspect-[1323/882] rounded-sm overflow-hidden shadow-2xl mb-16 border border-white/5">
          <Image src={`/images/artists/${artist.image}`} alt={artist.name} fill className="object-cover" priority />
        </div>

        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-6 justify-center flex-wrap">
           <h1 className="text-[32px] md:text-[40px] font-black uppercase italic tracking-tighter leading-none">{artist.name}</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" className="w-12 h-8 object-cover rounded-sm shadow-lg" alt="BR" />
          </div>
          <p className="text-[14px] uppercase tracking-[0.2em] text-zinc-400 mt-2 italic font-medium">{artist.role || 'PRODUTOR'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 max-w-[733px] text-[18px] leading-relaxed font-normal text-zinc-200 text-left whitespace-pre-line">
            {artist.bio}
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-12">
            <div className="w-full max-w-[497px] aspect-[497/291] rounded-[39px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
            </div>

            <div className="w-full max-w-[497px] flex items-center justify-between gap-4">
              <div className="flex gap-6 items-center">
                <a href={artist.instagram} target="_blank" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="w-full h-full object-contain" alt="Instagram" />
                </a>
                <a href={artist.soundcloud} target="_blank" className="w-12 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                  <img src="/images/icons/soundcloud_icon.svg" className="w-full h-full object-contain" alt="SoundCloud" />
                </a>
                <a href={artist.spotify} target="_blank" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="w-full h-full object-contain" alt="Spotify" />
                </a>
              </div>
              <a 
                href={artist.latestRelease?.bandcampUrl || "#"} 
                target="_blank" 
                className="w-64 h-14 flex items-center justify-center bg-violet-700 hover:bg-violet-600 text-white text-xl font-bold uppercase rounded-xl transition-all shadow-lg shadow-violet-700/20"
              >
                last release
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
