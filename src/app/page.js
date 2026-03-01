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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section com Vídeo */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px] bg-black flex items-center justify-center">
        
        {/* Vídeo Desktop - Mantém cover porque a tela é larga */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fundo-bg-site-agya.jpg"
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
        </video>

        {/* Vídeo Mobile - AGORA RESPEITANDO SUA ARTE SEM CORTES */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fundo-bg-site-agya.jpg"
          className="block md:hidden w-full h-auto object-contain"
        >
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
      <Footer />
    </main>
  );
}