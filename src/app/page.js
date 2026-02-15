import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section - Ocupa a tela toda e fica sob a Navbar */}
      <section className="relative h-screen w-full overflow-hidden -mt-[80px]">
        {/* Fundo Desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block z-1" 
          style={{ backgroundImage: "url('/fundo-bg-site-agya.jpg')" }} 
        />
        {/* Fundo Mobile */}
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat z-2"
          style={{ backgroundImage: "url('/fundo-bg-site-agya_mobile.jpg')" }} 
        />
      </section>

      <About />
      <Artists />
      <Releases />
      
      {/* Espaçador final para o Footer não colar */}
      <div className="h-[20vh] bg-black" />
    </main>
  );
}