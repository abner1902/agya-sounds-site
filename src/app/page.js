import dynamic from "next/dynamic";
import Image from "next/image";

const About = dynamic(() => import("@/components/About"));
const Artists = dynamic(() => import("@/components/Artists"));
const Releases = dynamic(() => import("@/components/Releases"));
const YoutubeVideos = dynamic(() => import("@/components/YoutubeVideos"));
const Instagram = dynamic(() => import("@/components/Instagram"));
const MusicSocialMedia = dynamic(() => import("@/components/MusicSocialMedia"));
const DemoCard = dynamic(() => import("@/components/DemoCard"));
const SocialLinks = dynamic(() => import("@/components/SocialLinks"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section Otimizada */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px] bg-black">
        
        {/* Mobile: imagem estática para máxima performance */}
        <Image
          src="/fundo-bg-site-agya_mobile.webp"
          alt="Agya Sounds Background"
          fill
          priority
          sizes="100vw"
          className="object-cover z-0 md:hidden"
          quality={45}
        />

        {/* Desktop: imagem de fundo por baixo do vídeo */}
        <Image
          src="/fundo-bg-site-agya.webp"
          alt="Agya Sounds Background"
          fill
          sizes="100vw"
          className="object-cover z-0 hidden md:block"
          quality={45}
        />

        {/* Desktop only: vídeo em loop */}
        <div className="absolute top-0 left-0 w-full h-full z-10 hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
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