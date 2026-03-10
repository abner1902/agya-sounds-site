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
        
        {/* Mobile: imagem estática para máxima performance */}
        <Image
          src="/fundo-bg-site-agya_mobile.jpg"
          alt="Agya Sounds Background"
          fill
          priority
          className="object-cover z-0 md:hidden"
          quality={50}
        />

        {/* Desktop: imagem de fundo por baixo do vídeo */}
        <Image
          src="/fundo-bg-site-agya.jpg"
          alt="Agya Sounds Background"
          fill
          priority
          className="object-cover z-0 hidden md:block"
          quality={60}
        />

        {/* Desktop only: vídeo em loop */}
        <div className="absolute top-0 left-0 w-full h-full z-10 hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/fundo-bg-site-agya_animation.webm" type="video/webm" />
            <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
          </video>
        </div>

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