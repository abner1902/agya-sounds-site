'use client';

export default function YoutubeVideos() {
  const videos = [
    {
      id: 1,
      title: "DJ THAÍ | AGYA SOUNDS SERIES | EP. 02",
      embedId: "iLG5NBXZMSE", 
    },
    {
      id: 2,
      title: "DJ EKLYPTO | AGYA SOUNDS SERIES | EP. 01",
      embedId: "_YjHxY07c9E", 
    },
    {
      id: 3,
      title: "PODCAST GERAÇÃO XYZ FOREVER - ABSYCHO",
      embedId: "aMqRDdPemw0",
    },
    {
      id: 4,
      title: "AFTER MOVIE AGYA EFFECT - NEKROPOLIS EDITION",
      embedId: "rNVw6f2H3k0",
    }
  ];

  return (
    <section id="videos" className="relative bg-gradient-to-b from-black via-zinc-900 to-black px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[1300px]">
        
        <div className="mb-16 text-center">
          <h2 className="font-sans text-[32px] font-black uppercase tracking-tighter text-white md:text-[50px]">
            YOUTUBE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {videos.map((video) => (
            <div key={video.id} className="group flex flex-col gap-4">
              {/* Título */}
              <h3 className="font-sans text-[13px] font-black uppercase tracking-widest text-white pl-2 group-hover:text-[#B1A27A] transition-colors">
                {video.title}
              </h3>
              
              {/* Player */}
              <div className="relative aspect-video overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950 transition-all duration-500 group-hover:border-white/20 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}