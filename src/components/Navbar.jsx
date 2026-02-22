'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const links = ['Início', 'Sobre', 'Artistas', 'Lançamentos', 'Streaming', 'Instagram', 'Vídeos', 'Tutoriais', 'Contato'];

  const getHref = (item) => {
    if (item === 'Tutoriais') return 'https://www.psychedeliclab.com.br/';
    
    // Início agora volta para a raiz real do site
    if (item === 'Início') return '/'; 
    
    // Adicionamos "/" antes do "#" para funcionar fora da Home
    if (item === 'Streaming') return '/#music'; 
    if (item === 'Contato') return '/#contato'; 
    if (item === 'Artistas') return '/artists'; // Se você quiser ir para a galeria geral
    
    const id = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return `/#${id}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex h-[80px] w-full items-center justify-between px-6 md:px-12 lg:px-20">
          
          {/* Logo - Agora usando "/" para garantir a volta */}
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/logo-menu-agya.png"
              alt="Agya Sounds"
              width={180}
              height={45}
              className="h-[30px] w-auto lg:h-[45px]"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-4 lg:flex">
            {links.map((item) => (
              <li key={item}>
                <Link
                  href={getHref(item)}
                  target={item === 'Tutoriais' ? "_blank" : "_self"}
                  className="text-[14px] font-bold uppercase tracking-[0.1em] text-white/70 transition-all hover:text-[#B1A27A] hover:opacity-100"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Lado direito */}
          <div className="flex items-center gap-5">
            <a
              href="https://agyasounds.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 transition-colors hover:text-[#B1A27A]"
            >
              <FaBandcamp />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="text-3xl text-white lg:hidden"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        {links.map((item) => (
          <Link
            key={item}
            href={getHref(item)}
            onClick={() => setOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-white hover:text-[#B1A27A]"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}