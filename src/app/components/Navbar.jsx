export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[9999] 
    bg-gradient-to-b from-black/90 via-zinc-900/80 to-transparent 
    backdrop-blur-md
    flex items-center justify-between px-6 md:px-12">

      <img 
        src="/logo_menu_agya.png"
        alt="Agya Sounds"
        className="h-10"
      />

      <ul className="hidden md:flex gap-8 text-white text-xs tracking-widest uppercase">
        <li className="hover:text-cyan-400 transition cursor-pointer">Início</li>
        <li className="hover:text-cyan-400 transition cursor-pointer">Sobre</li>
        <li className="hover:text-cyan-400 transition cursor-pointer">Artistas</li>
        <li className="hover:text-cyan-400 transition cursor-pointer">Lançamentos</li>
        <li className="hover:text-cyan-400 transition cursor-pointer">Tutoriais</li>
        <li className="hover:text-cyan-400 transition cursor-pointer">Contato</li>
      </ul>

      <button className="md:hidden text-white text-xl">☰</button>
    </nav>
  )
}
