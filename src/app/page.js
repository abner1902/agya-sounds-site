import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar />
      
      <section style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: "url('/fundo-bg-site-agya.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          zIndex: 1
        }} />
      </section>

      <About />
      
      <div style={{ height: '20vh', background: 'black' }} />
    </main>
  );
}
