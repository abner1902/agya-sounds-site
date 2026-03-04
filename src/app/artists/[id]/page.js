'use client';
import { use, useEffect } from 'react';
import { allArtists } from '@/data/artists';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export default function ArtistBioPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const router = useRouter();
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
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Image 
          src="/bg_artist_page_op_art.png" 
          alt="background" 
          fill 
          priority 
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="max-w-[1323px] mx-auto px-6 pt-12 pb-24 relative z-10">
        <button 
          onClick={() => router.back()} 
          aria-label="Voltar para lista de artistas"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-10 uppercase text-[11px] font-bold tracking-[0.4em] transition-all cursor-pointer"
        >
          <ChevronLeft size={16} /> VOLTAR PARA ARTISTAS
        </button>

        <div className="relative w-full aspect-[1323/882] rounded-sm overflow-hidden shadow-2xl mb-16 border border-white/5">
          <Image src={`/images/artists/${artist.image}`} alt={artist.name} fill className="object-cover" priority />
        </div>

        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-6 justify-center flex-wrap">
            <h1 className="text-[32px] md:text-[40px] font-black uppercase italic tracking-tighter leading-none">{artist.name}</h1>
            {/* ✅ <img> → <Image> do Next.js para bandeira do país */}
            <Image
              src={`/images${artist.countryFlag}`}
              alt={artist.countryName}
              width={32}
              height={32}
              className="object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-[14px] uppercase tracking-[0.2em] text-zinc-400 mt-2 italic font-medium">{artist.role || 'PRODUTOR'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 max-w-[733px] text-[18px] leading-relaxed font-normal text-zinc-200 text-left whitespace-pre-line">
            {artist.bio}
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-12">
            <div className="w-full max-w-[497px] aspect-[497/291] rounded-[39px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`${artist.name} - Último lançamento`}
                allowFullScreen
              />
            </div>

            <div className="w-full max-w-[497px] flex items-center justify-between gap-4">
              <div className="flex gap-4 items-center flex-shrink-0">
                {artist.instagram ? (
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                    {/* ✅ <img> externo → <Image> do Next.js */}
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width={40} height={40} className="object-contain" alt="Instagram" />
                  </a>
                ) : (
                  <a href={artist.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" width={40} height={40} className="object-contain" alt="Facebook" />
                  </a>
                )}

                <a href={artist.soundcloud} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                  <Image src="/images/icons/soundcloud_icon.svg" width={40} height={40} className="object-contain" alt="SoundCloud" />
                </a>
                
                <a href={artist.spotify} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all opacity-80 hover:opacity-100">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" width={40} height={40} className="object-contain" alt="Spotify" />
                </a>
              </div>

              <a 
                href={artist.latestRelease?.bandcampUrl || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[250px] h-14 flex items-center justify-center bg-violet-700 hover:bg-violet-600 text-white text-base font-bold uppercase rounded-xl transition-all shadow-lg shadow-violet-700/20"
              >
                {artist.role === 'DJ SET' ? 'OUÇA AGORA' : 'LAST RELEASE'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}