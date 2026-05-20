'use client';
import dynamic from 'next/dynamic';
import { TextAnimate } from "@/components/magicui/text-animate";

const MeteorsLayer = dynamic(() => import('@/components/MeteorsLayer'), { ssr: false });

export default function MusicSocialMedia() {
  return (
    <section id="music" className="relative overflow-hidden bg-black px-6 py-20 md:px-12 lg:py-32">
      <MeteorsLayer />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-[1300px]">
        <div className="mb-16 text-center">
          <TextAnimate animation="slideUp" by="word" as="h2"
            className="font-sans text-[32px] font-black uppercase tracking-tighter text-white md:text-[50px] leading-none">
            Nossas Frequências
          </TextAnimate>
          <TextAnimate animation="fadeIn" by="word" delay={0.5} as="div"
            className="mt-4 font-sans text-[12px] font-bold uppercase tracking-[0.5em] text-[#B1A27A]">
            Agya Sounds Streaming Hub
          </TextAnimate>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <iframe title="SoundCloud Player - Agya Sounds" width="100%" height="380"
            scrolling="no" frameBorder="no" allow="autoplay" loading="lazy"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1865702913&color=%23B1A27A&auto_play=false"
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"/>
          <iframe title="Spotify Player - Agya Sounds" style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5r9KrwsHepDB0EHVcsttif?utm_source=generator&theme=0"
            width="100%" height="380" loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"/>
          <iframe title="Audius Player - Agya Sounds"
            src="https://audius.co/embed/album/agyasounds/goan-spirit-debut-album?flavor=card"
            width="100%" height="380" loading="lazy" style={{ border: "none" }}
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"/>
        </div>
      </div>
    </section>
  );
}
