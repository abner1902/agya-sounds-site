'use client';

import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';

export default function Instagram() {
  const posts = [
    { id: 1, url: '/insta-1.jpg', link: 'https://www.instagram.com/p/DT_OeX-EWRw/' },
    { id: 2, url: '/insta-2.jpg', link: 'https://www.instagram.com/p/DSFmCVckTn-/' },
    { id: 3, url: '/insta-3.jpg', link: 'https://www.instagram.com/p/C-iY-VfS6t7/' },
    { id: 4, url: '/insta-4.jpg', link: 'https://www.instagram.com/p/C1Dep5FsnPv/' },
  ];

  return (
    <section id="instagram" className="bg-black py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <TextAnimate 
          animation="slideUp" 
          by="word" 
          as="h2" 
          className="mb-12 text-center font-sans text-3xl font-black uppercase tracking-tighter text-white"
        >
          Instagram @agya_sounds
        </TextAnimate>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-900"
            >
              <Image 
                src={post.url} 
                alt={`Instagram post ${post.id}`} 
                // Reduzimos para 400px. O original de 1080px será ignorado
                width={400} 
                height={400}
                // O segredo está aqui: quality={75} força uma compressão WebP eficiente
                quality={75}
                // Garante que a imagem só carregue quando o usuário fizer scroll (Lazy Loading)
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-bold text-white">VER NO INSTA</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}