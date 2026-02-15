import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Artists from "@/components/Artists";
import Releases from "@/components/Releases";

export default function Home() {
  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Navbar fora da section (funcionamento original) */}
      <Navbar />
      
      {/* Seção de fundo com altura total e margem negativa para subir */}
      <section style={{ 
        height: '100vh', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        marginTop: '-80px' /* Ajuste conforme a altura real do seu Navbar */
      }}>
        {/* Fundo desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block" 
          style={{ 
            backgroundImage: "url('/fundo-bg-site-agya.jpg')",
            zIndex: 1 
          }} 
        />
        {/* Fundo mobile */}
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/fundo-bg-site-agya_mobile.jpg')",
            zIndex: 2
          }} 
        />
      </section>
      <About />
      <Artists />
      <Releases />
      
      <div style={{ height: '20vh', background: 'black' }} />
    </main>
  );
}
