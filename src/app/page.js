'use client';

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";
import Instagram from "@/components/Instagram";
import MusicSocialMedia from "@/components/MusicSocialMedia"; 
import YoutubeVideos from "@/components/YoutubeVideos";
import SocialLinks from "@/components/SocialLinks";
import DemoCard from "@/components/DemoCard"; // Novo componente separado
import Footer from "@/components/Footer";     // Footer atualizado com bio completa

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section com Vídeo Background */}
<section className="relative h-screen w-full overflow-hidden -mt-[80px]">
  
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover hidden md:block z-1"
  >
    <source src="/videos/fundo-bg-site-agya_animation.mp4" type="video/mp4" />
  </video>
  
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover md:hidden z-2"
  >
    <source src="/videos/fundo-bg-site-agya_mobile_animation.mp4" type="video/mp4" />
  </video>
  
  <div className="absolute inset-0 bg-black/30 z-3" />
  
</section>

      <About />
      <Artists />
      <Releases />
      <MusicSocialMedia />
      <Instagram />
      <YoutubeVideos />
      <SocialLinks />
      
      {/* Seção Final com fundo branco para contraste conforme o design */}
      <div className="bg-white">
        <DemoCard />
        <Footer />
      </div>
      
    </main>
  );
}