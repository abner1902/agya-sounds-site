'use client';

import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Instagram from "@/components/Instagram";
import MusicSocialMedia from "@/components/MusicSocialMedia"; 
import YoutubeVideos from "@/components/YoutubeVideos";
import SocialLinks from "@/components/SocialLinks";
import DemoCard from "@/components/DemoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section Otimizada */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px] bg-black">
        
        {/* Placeholder/Poster: Carrega apenas uma imagem enquanto o vídeo não entra */}
        <Image
          src="/fundo-bg-site-agya_mobile.jpg"
          alt="Agya Sounds Background"
          fill
          priority
          className="object-cover z-0 md:hidden"
          quality={50}
        />
        <Image
          src="/fundo-bg-site-agya.jpg"
          alt="Agya Sounds Background"
          fill
          priority
          className="object-cover z-0 hidden md:block"
          quality={60}
        />

        {/* Único componente de vídeo com seleção inteligente de fonte */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          {/* Mobile WebM primeiro */}
          <source 
            src="/videos/fundo-bg-site-agya_mobile_animation.webm" 
            type="video/webm" 
            media="(max-width: 768px)" 
          />
          {/* Desktop WebM segundo */}
          <source 
            src="/videos/fundo-bg-site-agya_animation.webm" 
            type="video/webm" 
          />
          {/* Fallback MP4 apenas se necessário */}
          <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
        </video>
      </section>

      <About />
      <Artists />
      <Releases />
      <YoutubeVideos />
      <Instagram />
      <MusicSocialMedia />
      <DemoCard />
      <SocialLinks />
    </main>
  );
}