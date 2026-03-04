'use client';

import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Instagram from "@/components/Instagram";
import MusicSocialMedia from "@/components/MusicSocialMedia"; 
import YoutubeVideos from "@/components/YoutubeVideos";
import SocialLinks from "@/components/SocialLinks";
import DemoCard from "@/components/DemoCard";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section com Otimização de Imagem de Fundo */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px]">
        
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/fundo-bg-site-agya.jpg"
            alt="Fundo Agya Sounds"
            fill
            priority
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="block md:hidden absolute inset-0 z-0">
          <Image
            src="/fundo-bg-site-agya_mobile.jpg"
            alt="Fundo Agya Sounds Mobile"
            fill
            priority
            className="object-cover"
            quality={85}
          />
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Vídeo de fundo Agya Sounds desktop"
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Vídeo de fundo Agya Sounds mobile"
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/fundo-bg-site-agya_mobile_animation.mp4" type="video/mp4" />
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
      <Footer />
    </main>
  );
}