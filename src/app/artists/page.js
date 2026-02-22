'use client';
import { useState, useMemo, useEffect } from 'react';
import { ArtistCard } from '@/components/ArtistCard';
import { allArtists } from '@/data/artists';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ArtistsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [artistsPerPage, setArtistsPerPage] = useState(24);
  
  useEffect(() => {
    const handleResize = () => { 
      window.innerWidth < 768 ? setArtistsPerPage(6) : setArtistsPerPage(24); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);
  
  const sortedArtists = useMemo(() => [...allArtists].sort((a, b) => a.name.localeCompare(b.name)), []);
  const currentArtists = sortedArtists.slice((currentPage - 1) * artistsPerPage, currentPage * artistsPerPage);
  const totalPages = Math.ceil(sortedArtists.length * 1 / artistsPerPage);
  
  return (
    <div className="min-h-screen text-white font-['Gotham',_sans-serif] relative">
      {/* IMAGEM DE FUNDO */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Image 
          src="/bg_artist_page_op_art.png" 
          alt="background" 
          fill 
          priority 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 uppercase italic tracking-tighter leading-none">CONHEÇA OS ARTISTAS</h1>
        <p className="text-zinc-400 text-center mb-20 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed normal-case tracking-widest italic">
          AGYA SOUNDS apresenta produtores e DJs do casting para eventos de psytrance focados em psicodelia avançada.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {currentArtists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 pb-10">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} className="p-3 bg-zinc-900 rounded-full hover:bg-violet-700 transition-all"><ChevronLeft size={32}/></button>
            <span className="text-xl font-bold italic uppercase tracking-widest">Página {currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} className="p-3 bg-zinc-900 rounded-full hover:bg-violet-700 transition-all"><ChevronRight size={32}/></button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
