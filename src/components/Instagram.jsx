'use client';

export default function Instagram() {
  const posts = [
    { id: 1, url: '/insta-1.jpg', link: 'https://www.instagram.com/p/DT_OeX-EWRw/' },
    { id: 2, url: '/insta-2.jpg', link: 'https://www.instagram.com/p/DSFmCVckTn-/' },
    { id: 3, url: '/insta-3.jpg', link: 'https://www.instagram.com/p/C-iY-VfS6t7/' },
    { id: 4, url: '/insta-4.jpg', link: 'https://www.instagram.com/p/C7Uo7v9yx9k/' },
  ];

  return (
    <section id="instagram" className="bg-black py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-center font-sans text-3xl font-black uppercase tracking-tighter text-white">Instagram @agya_sounds</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post) => (
            <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-xl">
              <img src={post.url} alt="Instagram" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center text-white font-bold">Ver Post</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}