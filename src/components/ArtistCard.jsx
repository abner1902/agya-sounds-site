    // src/components/ArtistCard.jsx
    import Image from 'next/image';
    import Link from 'next/link';

    export const ArtistCard = ({ artist }) => {
      return (
        <Link 
          href={`/artists/${artist.id}`} 
          className="group relative block w-full aspect-square overflow-hidden rounded-lg
                     transform transition-transform duration-300 ease-in-out hover:scale-[1.03]" // Efeito zoom de leve
        >
          <Image
            src={`/images/artists/${artist.image}`} // Caminho da imagem na pasta public
            alt={`Foto de ${artist.name}`}
            fill // Preenche o contêiner pai
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Otimização responsiva
            className="object-cover transition-opacity duration-300 ease-in-out opacity-90 group-hover:opacity-100" // Opacidade e transição sutil
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-lg font-bold tracking-tight uppercase">
                {artist.name}
              </h3>
              {artist.countryFlag && (
                // ...
<Image
  src={`/images${artist.countryFlag}`} // <<-- CORREÇÃO: Adicionado /images no início do caminho
  alt={`Bandeira do ${artist.countryName}`}
// ...
                  width={24}
                  height={16}
                  className="rounded shadow-md"
                />
              )}
            </div>
            <p className="text-sm text-amber-400 font-medium tracking-wide uppercase mt-1">
              {artist.role}
            </p>
          </div>
        </Link>
      );
    };