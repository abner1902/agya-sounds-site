// src/app/artists/page.js
'use client'; // Este componente precisa ser renderizado no lado do cliente para usar hooks como useState

import { useState, useMemo, useEffect } from 'react';
import { ArtistCard } from '@/components/ArtistCard'; // Caminho ajustado para src/components
import { allArtists } from '@/src/data/artists'; // Caminho ajustado para src/data
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Ícones para as setas de navegação

export default function ArtistsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [artistsPerPage, setArtistsPerPage] = useState(24); // Padrão desktop

  // Hook para ajustar artistas por página com base no tamanho da tela (apenas para client-side)
  useEffect(() => {
    const handleResize = () => {
      // Se a largura da tela for menor que 768px (equivalente a 'md' no Tailwind)
      if (window.innerWidth < 768) {
        setArtistsPerPage(6); // 6 artistas por página no mobile
      } else {
        setArtistsPerPage(24); // 24 artistas por página no desktop
      }
    };

    // Define o valor inicial ao carregar a página
    handleResize();

    // Adiciona o event listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Executa apenas uma vez no montagem e limpeza

  // Ordena os artistas pelo nome em ordem alfabética (case-insensitive)
  // useMemo para evitar reordenar a cada renderização desnecessária
  const sortedArtists = useMemo(() => {
    return [...allArtists].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );
  }, [allArtists]); // Recalcula se allArtists mudar (improvável neste caso)

  // Calcula o índice inicial e final dos artistas para a página atual
  const indexOfLastArtist = currentPage * artistsPerPage;
  const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;

  // Filtra os artistas para exibir apenas os da página atual
  const currentArtists = useMemo(() => {
    return sortedArtists.slice(indexOfFirstArtist, indexOfLastArtist);
  }, [sortedArtists, indexOfFirstArtist, indexOfLastArtist]); // Recalcula apenas quando sortedArtists ou índices mudam

  // Calcula o número total de páginas
  const totalPages = Math.ceil(sortedArtists.length / artistsPerPage);

  // Funções para navegar entre as páginas
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título e descrição da seção - conforme o print */}
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl text-center mb-4 uppercase"
            style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}>
          CONHEÇA OS ARTISTAS
        </h1>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          AGYA SOUNDS apresenta produtores e DJs do casting para
          eventos de psytrance focados em psicodelia avançada.
        </p>

        {/* Grade responsiva para os cards dos artistas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {currentArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* Controles de Paginação */}
        {totalPages > 1 && ( // Mostra os controles apenas se houver mais de 1 página
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-amber-600 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Página anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-lg font-medium">
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-amber-600 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próxima página"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}