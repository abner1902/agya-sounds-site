'use client';

export default function MusicSocialMedia() {
  return (
    <section id="music" className="relative bg-gradient-to-b from-zinc-900 to-black px-6 py-20 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1300px]">
        
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <h2 className="font-sans text-[32px] font-black uppercase tracking-tighter text-white md:text-[50px] leading-none">
            Nossas Frequências
          </h2>
          <p className="mt-4 font-sans text-[12px] font-bold uppercase tracking-[0.5em] text-[#B1A27A]">
            Agya Sounds Streaming Hub
          </p>
        </div>

        {/* Grid de Players */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* SOUNDCLOUD - Tripdelic Vison EP */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Soundcloud</span>
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#ff5500]/30 shadow-2xl">
              <iframe 
                width="100%" 
                height="352" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1865702913&color=%23B1A27A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </div>

          {/* SPOTIFY - Agya Sounds */}
{/* SPOTIFY - Agya Sounds Oficial */}
<div className="flex flex-col gap-4">
  <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Spotify</span>
  <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#1DB954]/30 shadow-2xl">
    <iframe 
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/5r9KrwsHepDB0EHVcsttif?utm_source=generator&theme=0" 
      width="100%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    ></iframe>
  </div>
</div>

          {/* AUDIUS - Goan Spirit */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Audius</span>
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#cc00ff]/30 shadow-2xl">
              <iframe 
                src="https://audius.co/embed/album/agyasounds/goan-spirit-debut-album?flavor=card" 
                width="100%" 
                height="352" 
                allow="encrypted-media" 
                style={{ border: 'none' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}