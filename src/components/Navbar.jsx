'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToSection } = useSmoothScroll();

  const links = ['Inicio', 'Sobre', 'Artistas', 'Lancamentos', 'Videos', 'Instagram', 'Streaming', 'Contato', 'Tutoriais'];

  const labels = {
    'Inicio': 'Início',
    'Lancamentos': 'Lançamentos',
    'Videos': 'Vídeos',
    'Sobre': 'Sobre',
    'Artistas': 'Artistas',
    'Streaming': 'Streaming',
    'Instagram': 'Instagram',
    'Tutoriais': 'Tutoriais',
    'Contato': 'Contato',
  };

  const getSectionId = (item) => {
    if (item === 'Streaming') return 'music';
    return item.toLowerCase();
  };

  const getHref = (item) => {
    if (item === 'Tutoriais') return 'https://www.psychedeliclab.com.br/';
    if (item === 'Inicio') return '/';
    if (item === 'Contato') return '/contact';
    if (item === 'Artistas') return '/artists';
    return `/#${getSectionId(item)}`;
  };

  const handleClick = (e, item) => {
    if (item === 'Tutoriais') return;
    e.preventDefault();
    setOpen(false);

    if (item === 'Inicio') {
      pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : router.push('/');
      return;
    }
    if (item === 'Contato') { router.push('/contact'); return; }
    if (item === 'Artistas') { router.push('/artists'); return; }

    if (pathname === '/') {
      scrollToSection(getSectionId(item));
    } else {
      router.push(`/#${getSectionId(item)}`);
    }
  };

  return (
    <>
      {/* MUDANÇA: z-50 → z-60 para ficar ACIMA do menu */}
      <nav className="fixed top-0 left-0 z-[60] w-full bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex h-[80px] w-full items-center justify-between px-6 md:px-12 lg:px-20">

          <Link href="/" className="transition-transform hover:scale-105">
            <Image src="/logo-menu-agya.png" alt="Agya Sounds" width={180} height={45} className="h-[30px] w-auto lg:h-[45px]" priority />
          </Link>

          <ul className="hidden items-center gap-4 lg:flex">
            {links.map((item) => (
              <li key={item}>
                <Link 
                  href={getHref(item)} 
                  target={item === 'Tutoriais' ? '_blank' : '_self'} 
                  onClick={(e) => handleClick(e, item)} 
                  className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/70 transition-all hover:text-[#B1A27A]"
                >
                  {labels[item]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <a href="https://agyasounds.bandcamp.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white/80 transition-colors hover:text-[#B1A27A]">
              <FaBandcamp />
            </a>
            
            <button 
              onClick={() => setOpen(!open)} 
              className="relative text-3xl text-white transition-colors hover:text-[#B1A27A] lg:hidden"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
  isOpen={open} 
  links={links} 
  labels={labels} 
  getHref={getHref} 
  handleClick={handleClick}
  onClose={() => setOpen(false)}
/>
    </>
  );
}