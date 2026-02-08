export default function Home() {
  return (
    <main style={{ background: 'black' }}>
      {/* SECTION 1: HERO */}
      <section style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/fundo-bg-site-agya.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
      </section>
      
      {/* SECTION 2: TESTE DE SCROLL */}
      <section style={{ height: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#333', fontSize: '50px', fontFamily: 'Gotham, sans-serif' }}>AGYA SOUNDS CONTENT</h2>
      </section>
    </main>
  );
}
