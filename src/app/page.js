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
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block z-1" 
          style={{ backgroundImage: "url('/fundo-bg-site-agya.jpg')" }} 
        />
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat z-2"
          style={{ backgroundImage: "url('/fundo-bg-site-agya_mobile.jpg')" }} 
        />
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