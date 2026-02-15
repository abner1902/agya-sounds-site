'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // Lista de links com os nomes corretos
  const links = ['Início', 'Sobre', 'Artistas', 'Lançamentos', 'Streaming', 'Instagram', 'Vídeos', 'Tutoriais', 'Contato'];

  // Função para definir o destino correto do link (href)
  const getHref = (item) => {
    if (item === 'Tutoriais') return 'https://www.psychedeliclab.com.br/';
    if (item === 'Início') return '#';
    if (item === 'Streaming') return '#music'; // Link para a seção MusicSocialMedia/HUB
    if (item === 'Contato') return '#contato'; // Link para o Footer
    
    // Para os outros, remove acentos e cria o ID (ex: Vídeos -> #videos)
    return `#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex h-[80px] w-full items-center justify-between px-6 md:px-12 lg:px-20">
          
          {/* Logo */}
          <Link href="#home" className="transition-transform hover:scale-105">
            <Image
              src="/logo-menu-agya.png"
              alt="Agya Sounds"
              width={180}
              height={45}
              className="h-[35px] w-auto lg:h-[45px]"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={getHref(item)}
                  target={item === 'Tutoriais' ? "_blank" : "_self"}
                  rel={item === 'Tutoriais' ? "noopener noreferrer" : ""}
                  className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 transition-all hover:text-[#B1A27A] hover:opacity-100"
                >
                  {item}
                </a>
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
          <a
            key={item}
            href={getHref(item)}
            target={item === 'Tutoriais' ? "_blank" : "_self"}
            onClick={() => setOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-white hover:text-[#B1A27A]"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}