'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    'Início',
    'Sobre',
    'Artistas',
    'Lançamentos',
    'Tutoriais',
    'Contato'
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md">
        
        <div className="mx-auto w-full max-w-[1300px] h-[90px] flex items-center justify-between px-6 lg:px-10">

          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo-menu-agya.png"
              alt="Agya Sounds"
              width={150}
              height={60}
              className="h-[45px] w-auto lg:h-[55px]"
              priority
            />
          </a>

          <ul className="hidden lg:flex gap-8 xl:gap-12 items-center">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase()}
                  className="text-white text-[14px] font-black uppercase tracking-[0.2em] opacity-80 hover:opacity-100 hover:text-[#B1A27A] transition-all duration-300 whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 flex-shrink-0 pr-3 sm:pr-4 lg:pr-0">

            <a
              href="https://agyasounds.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bandcamp Agya Sounds"
              className="text-white text-2xl hover:text-[#B1A27A] transition-colors duration-300"
            >
              <FaBandcamp />
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              className="lg:hidden text-white text-3xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>

          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-40">
          {links.map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              onClick={() => setOpen(false)}
              className="text-white text-2xl font-black uppercase tracking-widest hover:text-[#B1A27A] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
