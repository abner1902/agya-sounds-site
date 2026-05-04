'use client';

import { useState } from "react";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function YoutubeVideos() {
  const [activeVideos, setActiveVideos] = useState({});

  const activateVideo = (videoId) => {
    setActiveVideos((prev) => ({ ...prev, [videoId]: true }));
  };

  const videos = [
    {
      id: 1,
      title: "DJ THAÍ | AGYA SOUNDS SERIES | EP. 02",
      embedId: "iLG5NBXZMSE", 
    },
    {
      id: 2,
      title: "DJ CLARA | AGYA SOUNDS SERIES | EP. 05",
      embedId: "C2c0Wy5FG3w?start=882", 
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
          <TextAnimate 
            animation="slideUp" 
            by="word" 
            as="h2" 
            className="font-sans text-[32px] font-black uppercase tracking-tighter text-white md:text-[50px]"
          >
            YOUTUBE
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {videos.map((video) => (
            <div key={video.id} className="group flex flex-col gap-4">
              <h3 className="font-sans text-[13px] font-black uppercase tracking-widest text-white pl-2 group-hover:text-[#B1A27A] transition-colors">
                {video.title}
              </h3>
              
              <div className="relative aspect-video overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950 transition-all duration-500 group-hover:border-white/20 shadow-2xl">
                {activeVideos[video.id] ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}?rel=0&autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    onClick={() => activateVideo(video.id)}
                    aria-label={`Reproduzir video: ${video.title}`}
                    className="absolute inset-0"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${video.embedId.split("?")[0]}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute inset-0 bg-black/35" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                      Assistir
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}