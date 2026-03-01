'use client';

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Instagram from "@/components/Instagram";
import MusicSocialMedia from "@/components/MusicSocialMedia"; 
import YoutubeVideos from "@/components/YoutubeVideos";
import SocialLinks from "@/components/SocialLinks";
import DemoCard from "@/components/DemoCard";
import Footer from "@/components/Footer";
import Image from "next/image"; // Importante para o fundo carregar rápido

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section com Otimização de Imagem de Fundo */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px]">
        
        {/* IMAGEM DE FUNDO DESKTOP (Carregamento Prioritário) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/fundo-bg-site-agya.jpg"
            alt="Fundo Agya Sounds"
            fill
            priority // Diz ao Next.js para carregar AGORA
            className="object-cover"
            quality={85}
          />
        </div>

        {/* IMAGEM DE FUNDO MOBILE (Carregamento Prioritário) */}
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

        {/* Vídeo Desktop - Z-10 para ficar na frente da imagem */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
        </video>

        {/* Vídeo Mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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