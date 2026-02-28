'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArtistCard } from '@/components/ArtistCard';
import { allArtists } from '@/data/artists';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';

function ArtistsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Pega a página da URL ou define 1 como padrão
  const pageFromUrl = parseInt(searchParams.get('page')) || 1;
  const [artistsPerPage, setArtistsPerPage] = useState(24);

  // Função para mudar de página atualizando a URL
  const handlePageChange = (newPage) => {
    router.push(`/artists?page=${newPage}`, { scroll: false });
    // Scroll suave até o título da galeria (não pro topo absoluto)
    setTimeout(() => {
      const galleryTitle = document.querySelector('h1');
      if (galleryTitle) {
        galleryTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    const handleResize = () => { 
      window.innerWidth < 768 ? setArtistsPerPage(6) : setArtistsPerPage(24); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const sortedArtists = useMemo(() => [...allArtists].sort((a, b) => a.name.localeCompare(b.name)), []);
  const currentArtists = sortedArtists.slice((pageFromUrl - 1) * artistsPerPage, pageFromUrl * artistsPerPage);
  const totalPages = Math.ceil(sortedArtists.length / artistsPerPage);
  
  return (
    <div className="min-h-screen text-white font-['Gotham',_sans-serif] relative">
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

      <div className="max-w-7xl mx-auto py-8 md:py-10 px-6 relative z-10">
        <h1 className="text-[22px] md:text-[40px] font-black text-center mb-4 uppercase italic tracking-tighter leading-none">CONHEÇA OS ARTISTAS</h1>
        <p className="text-zinc-400 text-center mb-8 md:mb-10 max-w-2xl mx-auto text-[12px] md:text-xl font-medium leading-relaxed normal-case tracking-wide italic">
          AGYA SOUNDS apresenta produtores e DJs do casting para eventos de psytrance focados em psicodelia avançada.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {currentArtists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 pb-10">
            <button 
              onClick={() => handlePageChange(Math.max(pageFromUrl - 1, 1))} 
              className="p-3 bg-zinc-900 rounded-full hover:bg-violet-700 transition-all"
            >
              <ChevronLeft size={32}/>
            </button>
            <span className="text-lg md:text-xl font-bold italic uppercase tracking-widest">Página {pageFromUrl} / {totalPages}</span>

            <button 
              onClick={() => handlePageChange(Math.min(pageFromUrl + 1, totalPages))} 
              className="p-3 bg-zinc-900 rounded-full hover:bg-violet-700 transition-all"
            >
              <ChevronRight size={32}/>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

// O Next.js exige Suspense para usar useSearchParams
export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ArtistsContent />
    </Suspense>
  );
}