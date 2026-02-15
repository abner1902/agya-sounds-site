'use client';

export default function SocialLinks() {
  const socials = [
    { 
      name: "Facebook", 
      color: "#1877F2", 
      url: "https://www.facebook.com/Agyasounds", 
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
    },
    { 
      name: "Instagram", 
      color: "#E4405F", 
      url: "https://www.instagram.com/agya_sounds/", 
      path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07s-3.585-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421-.562-.224-.96-.479-1.382-.899-.419-.419-.679-.824-.896-1.38-.164-.42-3.6-1.065-.413-2.235-.057-1.274-.07-1.649-.07-4.859s.015-3.585.055-4.85c.071-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.286-.057 1.646-.07 4.85-.07zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44c.794 0 1.44.645 1.44 1.44z" 
    },
    { 
      name: "TikTok", 
      color: "#000000", 
      url: "https://www.tiktok.com/@agyasounds", 
      path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.02.21 2.12.94 2.87.82.9 2.12 1.25 3.27 1.05 1.14-.15 2.15-.92 2.62-1.95.14-.3.2-.62.22-.94.04-4.22.02-8.43.02-12.65z" 
    },
    { 
  name: "Soundcloud", 
  color: "#FF5500", 
  url: "https://soundcloud.com/agyasounds", 
  path: "M11.56 8.87V17h9.01c1.9 0 3.43-1.54 3.43-3.43 0-1.9-1.54-3.43-3.43-3.43-.16 0-.31.02-.46.04-.37-2.34-2.39-4.14-4.83-4.14-1.37 0-2.61.55-3.52 1.44-.34-.3-.79-.47-1.27-.47-1.07 0-1.93.84-1.93 1.86zm-1.29 1.11H9.01v6.39h1.26V9.98zm-2.52 1.26H6.49v5.13h1.26v-5.13zm-2.52.63H3.97v4.5h1.26v-4.5zm-2.52.63H1.45v3.87h1.26v-3.87z" 
},
    { 
      name: "YouTube", 
      color: "#FF0000", 
      url: "https://youtube.com/@agyasounds", 
      path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
    },
    { 
      name: "Twitch", 
      color: "#9146FF", 
      url: "https://www.twitch.tv/agyasounds", 
      path: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" 
    },
   { 
  name: "Audius", 
  color: "#CC00FF", 
  url: "https://audius.co/agyasounds", 
  path: "M12 0L2.83 18.29h4.15L9.14 14H14.8l2.16 4.29h4.21L12 0zm-1.74 11l1.74-3.5L13.74 11h-3.48z" 
},
    { 
      name: "Bandcamp", 
      color: "#629aa9", 
      url: "https://agyasounds.bandcamp.com/", 
      path: "M0 18.75l7.437-13.5H24l-7.438 13.5H0z" 
    }
  ];

  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/bg-redes-sociais.jpg')" }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <h2 className="mb-20 text-center font-sans text-[28px] font-black uppercase tracking-[0.4em] text-white">
          REDES SOCIAIS
        </h2>

        <div className="grid grid-cols-2 gap-y-16 gap-x-4 md:grid-cols-4 lg:gap-y-24">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-5 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ fill: social.color }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={social.path} />
                </svg>
              </div>
              <span className="max-w-[140px] font-sans text-[10px] font-black uppercase tracking-[0.2em] text-white/90 leading-tight group-hover:text-white transition-colors">
                AGYA SOUNDS <br /> {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}