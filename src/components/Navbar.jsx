'use client';

import { useState } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useTranslations } from '@/contexts/IntlContext';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

const LOCALES = ['pt', 'en', 'es'];
const DEFAULT_LOCALE = 'pt';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const { scrollToSection } = useSmoothScroll();

  const segments = (pathname || '/').split('/').filter(Boolean);
  const locale = LOCALES.includes(segments[0]) ? segments[0] : DEFAULT_LOCALE;
  const homePath = `/${locale}`;
  const isHome = pathname === homePath || pathname === `${homePath}/` || pathname === '/';

  const links = [
    { key: 'inicio', section: 'inicio' },
    { key: 'sobre', section: 'sobre' },
    { key: 'artistas', route: 'artists' },
    { key: 'lancamentos', section: 'lancamentos' },
    { key: 'videos', section: 'videos' },
    { key: 'instagram', section: 'instagram' },
    { key: 'streaming', section: 'music' },
    { key: 'contato', route: 'contact' },
    { key: 'tutoriais', external: true },
  ];

  const getHref = (item) => {
    if (item.external) return 'https://www.psychedeliclab.com.br/';
    if (item.key === 'inicio') return homePath;
    if (item.route) return `${homePath}/${item.route}`;
    return `${homePath}/#${item.section}`;
  };

  const handleClick = (e, item) => {
    if (item.external) return;
    e.preventDefault();
    setOpen(false);

    if (item.key === 'inicio') {
      isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : router.push(homePath);
      return;
    }
    if (item.route) { router.push(`${homePath}/${item.route}`); return; }

    if (isHome) scrollToSection(item.section);
    else { sessionStorage.setItem('scrollTo', item.section); router.push(homePath); }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-[60] w-full bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex h-[80px] w-full items-center justify-between px-6 md:px-12 lg:px-20">

          <Link href={homePath} className="transition-transform hover:scale-105">
            <Image src="/logo-menu-agya.webp" alt="Agya Sounds" width={180} height={45} className="h-[30px] w-auto lg:h-[45px]" priority />
          </Link>

          <ul className="hidden items-center gap-4 lg:flex">
            {links.map((item) => (
              <li key={item.key}>
                <Link
                  href={getHref(item)}
                  target={item.external ? '_blank' : '_self'}
                  onClick={(e) => handleClick(e, item)}
                  className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/70 transition-all hover:text-[#B1A27A]"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <a href="https://agyasounds.bandcamp.com" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp" className="text-2xl text-white/80 transition-colors hover:text-[#B1A27A]">
              <FaBandcamp />
            </a>

            <button onClick={() => setOpen(!open)} aria-label="Abrir menu de navegação"
              className="relative text-3xl text-white transition-colors hover:text-[#B1A27A] lg:hidden">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={open} links={links} handleClick={handleClick} getHref={getHref}
        onClose={() => setOpen(false)} />
    </>
  );
}