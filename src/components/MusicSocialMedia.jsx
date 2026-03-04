/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";

export default function MusicSocialMedia() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Gerar meteors apenas quando isClient mudar (uma vez)
  const meteors = !isClient ? [] : Array.from({ length: 18 }).map((_, index) => ({
    top: `${(index * 5.26) % 100}%`,
    delay: (index * 0.3) % 6,
    duration: 4 + (index % 4),
    width: 80 + ((index * 13) % 200),
  }));

  // Durante a renderização no servidor, não mostra os meteors
  if (!isClient) {
    return (
      <section id="music" className="relative overflow-hidden bg-black px-6 py-20 md:px-12 lg:py-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-[1300px]">
          {/* Mesmo conteúdo, mas sem os meteors */}
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

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <iframe
              title="SoundCloud Player - Agya Sounds"
              width="100%"
              height="380"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1865702913&color=%23B1A27A&auto_play=false"
              className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
            />
            <iframe
              title="Spotify Player - Agya Sounds"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/5r9KrwsHepDB0EHVcsttif?utm_source=generator&theme=0"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
            />
            <iframe
              title="Audius Player - Agya Sounds"
              src="https://audius.co/embed/album/agyasounds/goan-spirit-debut-album?flavor=card"
              width="100%"
              height="380"
              style={{ border: "none" }}
              className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="music" className="relative overflow-hidden bg-black px-6 py-20 md:px-12 lg:py-32">
      {/* Meteors Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteors.map((meteor, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] rounded-full"
            style={{
              top: meteor.top,
              width: meteor.width,
              background: "linear-gradient(90deg, transparent, rgba(177,162,122,0.9), rgba(168,85,247,0.8), transparent)",
              filter: "blur(0.5px) drop-shadow(0 0 6px rgba(177,162,122,0.5))",
            }}
            initial={{ x: "-200px", rotate: 15 }}
            animate={{ x: "110vw" }}
            transition={{
              duration: meteor.duration,
              repeat: Infinity,
              delay: meteor.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-[1300px]">
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

        {/* Players Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <iframe
            title="SoundCloud Player - Agya Sounds"
            width="100%"
            height="380"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1865702913&color=%23B1A27A&auto_play=false"
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
          />
          <iframe
            title="Spotify Player - Agya Sounds"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5r9KrwsHepDB0EHVcsttif?utm_source=generator&theme=0"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
          />
          <iframe
            title="Audius Player - Agya Sounds"
            src="https://audius.co/embed/album/agyasounds/goan-spirit-debut-album?flavor=card"
            width="100%"
            height="380"
            style={{ border: "none" }}
            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}