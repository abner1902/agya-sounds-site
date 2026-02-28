'use client';

import { motion } from 'framer-motion';
import { RetroGrid } from '@/components/ui/retro-grid';
import { TextAnimate } from "@/components/magicui/text-animate";

export default function MusicSocialMedia() {
  return (
    <section id="music" className="relative overflow-hidden bg-black px-6 py-20 md:px-12 lg:py-32">
      
      {/* Camada 1: Retro Grid (fundo) */}
      <RetroGrid 
        className="absolute inset-0 opacity-40"
        angle={65}
        cellSize={60}
      />
      
      {/* Camada 2: Aurora Boreal - Mesh Gradient Fluido */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blobs mantidos exatamente como no seu original */}
        <motion.div
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/40 blur-[120px]"
          animate={{ x: [0, 200, 0], y: [0, -100, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B1A27A]/35 blur-[100px]"
          animate={{ x: [0, -150, 0], y: [0, 120, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/3 h-[550px] w-[550px] rounded-full bg-blue-900/35 blur-[110px]"
          animate={{ x: [0, 140, 0], y: [0, -80, 0], scale: [1, 1.35, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-fuchsia-600/30 blur-[90px]"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px]">
        
        {/* Cabeçalho Animado */}
        <div className="mb-16 text-center">
          <TextAnimate 
            animation="slideUp" 
            by="word" 
            as="h2" 
            className="font-sans text-[32px] font-black uppercase tracking-tighter text-white md:text-[50px] leading-none"
          >
            Nossas Frequências
          </TextAnimate>
          
          <TextAnimate 
            animation="fadeIn" 
            by="word" 
            delay={0.5}
            as="div" 
            className="mt-4 font-sans text-[12px] font-bold uppercase tracking-[0.5em] text-[#B1A27A]"
          >
            Agya Sounds Streaming Hub
          </TextAnimate>
        </div>

        {/* Grid de Players - Mantido original */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* SOUNDCLOUD */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Soundcloud</span>
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#ff5500]/30 shadow-2xl">
              <iframe width="100%" height="352" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1865702913&color=%23B1A27A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </div>
          </div>

          {/* SPOTIFY */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Spotify</span>
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#1DB954]/30 shadow-2xl">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/5r9KrwsHepDB0EHVcsttif?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>

          {/* AUDIUS */}
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-black uppercase tracking-widest text-white/40 px-2">Audius</span>
            <div className="overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/50 p-1 backdrop-blur-sm transition-all hover:border-[#cc00ff]/30 shadow-2xl">
              <iframe src="https://audius.co/embed/album/agyasounds/goan-spirit-debut-album?flavor=card" width="100%" height="352" allow="encrypted-media" style={{ border: 'none' }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}