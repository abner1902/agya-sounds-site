'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Início', 'Sobre', 'Artistas', 'Lançamentos', 'Tutoriais', 'Contato'];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-md">

        {/* Container FULL WIDTH com padding real */}
<div className="flex h-[90px] w-full items-center justify-between px-[32px] sm:px-[64px] lg:px-[128px] xl:px-[160px]">          {/* Logo */}
          <Link href="/" className="flex-shrink-0 ml-4 sm:ml-0">
            <Image
              src="/logo-menu-agya.png"
              alt="Agya Sounds"
              width={200}
              height={54}
              className="h-[40px] w-auto lg:h-[50px]"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] font-black uppercase tracking-[0.2em] text-white opacity-70 transition-all duration-300 hover:text-[#B1A27A] hover:opacity-100 whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Lado direito */}
          <div className="flex items-center gap-6 mr-4 sm:mr-0">
            <a
              href="https://agyasounds.bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bandcamp"
              className="text-2xl text-white transition-colors duration-300 hover:text-[#B1A27A]"
            >
              <FaBandcamp />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="text-3xl text-white lg:hidden"
              aria-label="Menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-xl">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white transition-colors duration-300 hover:text-[#B1A27A]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
