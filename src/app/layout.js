import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Gravadora de Darkpsy e Psytrance Underground",
  description: "Agya Sounds é uma gravadora brasileira de darkpsy, forest psy e psytrance underground. Artistas, releases e distribuição musical independente desde 2018.",
  keywords: ["gravadora darkpsy","gravadora psytrance brasil","darkpsy brasil","forest psy","psytrance underground","agya sounds","música psicodélica","label darkpsy","psytrance são paulo"],
  alternates: { canonical: "https://agyasounds.com.br" },
  openGraph: {
    title: "Agya Sounds | Gravadora de Darkpsy e Psytrance Underground",
    description: "Gravadora brasileira de darkpsy, forest psy e psytrance underground. Conheça nossos artistas e releases.",
    url: "https://agyasounds.com.br",
    siteName: "Agya Sounds",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agya Sounds — Gravadora de Darkpsy" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agya Sounds | Gravadora de Darkpsy",
    description: "Gravadora brasileira de darkpsy e psytrance underground. Artistas, releases e distribuição independente.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Agya Sounds",
  url: "https://agyasounds.com.br",
  logo: "https://agyasounds.com.br/logo-menu-agya.png",
  foundingDate: "2018",
  genre: ["Darkpsy", "Forest Psytrance", "Psytrance", "Dark Progressive"],
  description: "Gravadora brasileira de Darkpsy, Forest Psy e Psytrance underground, fundada em 2018 em São Paulo, Brasil.",
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [
    "https://soundcloud.com/agyasounds",
    "https://agyasounds.bandcamp.com",
    "https://open.spotify.com/playlist/5r9KrwsHepDB0EHVcsttif",
    "https://youtube.com/@agyasounds",
    "https://www.instagram.com/agya_sounds/",
    "https://www.facebook.com/Agyasounds",
    "https://www.tiktok.com/@agyasounds",
    "https://audius.co/agyasounds",
  ],
  member: [
    { "@type": "MusicGroup", name: "Absycho", url: "https://agyasounds.com.br/artists/absycho" },
    { "@type": "MusicGroup", name: "Alien Tunes", url: "https://agyasounds.com.br/artists/alien-tunes" },
    { "@type": "MusicGroup", name: "Andurá", url: "https://agyasounds.com.br/artists/andura" },
    { "@type": "MusicGroup", name: "Balanar", url: "https://agyasounds.com.br/artists/balanar" },
    { "@type": "MusicGroup", name: "Clara", url: "https://agyasounds.com.br/artists/clara" },
    { "@type": "MusicGroup", name: "Corubamba", url: "https://agyasounds.com.br/artists/corubamba" },
    { "@type": "MusicGroup", name: "Curuja", url: "https://agyasounds.com.br/artists/curuja" },
    { "@type": "MusicGroup", name: "Doonke Mage", url: "https://agyasounds.com.br/artists/doonke-mage", sameAs: "https://soundcloud.com/doonkemage" },
    { "@type": "MusicGroup", name: "Eklypto", url: "https://agyasounds.com.br/artists/eklypto", sameAs: "https://soundcloud.com/eklypto-88" },
    { "@type": "MusicGroup", name: "Genetica", url: "https://agyasounds.com.br/artists/genetica", sameAs: "https://soundcloud.com/geneticalive" },
    { "@type": "MusicGroup", name: "Gignere", url: "https://agyasounds.com.br/artists/gignere", sameAs: "https://soundcloud.com/gigneremusic" },
    { "@type": "MusicGroup", name: "Hypnozz", url: "https://agyasounds.com.br/artists/hypnozz", sameAs: "https://soundcloud.com/ivan-hypnozz" },
    { "@type": "MusicGroup", name: "Irev", url: "https://agyasounds.com.br/artists/irev", sameAs: "https://soundcloud.com/irevmusic" },
    { "@type": "MusicGroup", name: "Khandroma", url: "https://agyasounds.com.br/artists/khandroma", sameAs: "https://soundcloud.com/khandroma-live" },
    { "@type": "MusicGroup", name: "Komfuzium", url: "https://agyasounds.com.br/artists/komfuzium", sameAs: "https://soundcloud.com/komfuzium" },
    { "@type": "MusicGroup", name: "Koothan", url: "https://agyasounds.com.br/artists/koothan", sameAs: "https://soundcloud.com/koothan" },
    { "@type": "MusicGroup", name: "Kougui", url: "https://agyasounds.com.br/artists/kougui", sameAs: "https://soundcloud.com/user-980942696" },
    { "@type": "MusicGroup", name: "Krul", url: "https://agyasounds.com.br/artists/krul", sameAs: "https://soundcloud.com/krullive" },
    { "@type": "MusicGroup", name: "Mabuti", url: "https://agyasounds.com.br/artists/mabuti", sameAs: "https://soundcloud.com/agyasounds" },
    { "@type": "MusicGroup", name: "Madara", url: "https://agyasounds.com.br/artists/madara", sameAs: "https://soundcloud.com/madaradj" },
    { "@type": "MusicGroup", name: "Modulsector", url: "https://agyasounds.com.br/artists/modulsector", sameAs: "https://soundcloud.com/modulsector_forestdark" },
    { "@type": "MusicGroup", name: "Moshh3", url: "https://agyasounds.com.br/artists/moshhe", sameAs: "https://soundcloud.com/moshh3" },
    { "@type": "MusicGroup", name: "Muslabu", url: "https://agyasounds.com.br/artists/muslabu", sameAs: "https://soundcloud.com/muslabu-live" },
    { "@type": "MusicGroup", name: "Naga Baba", url: "https://agyasounds.com.br/artists/naga-baba", sameAs: "https://soundcloud.com/nagababa" },
    { "@type": "MusicGroup", name: "Needle Point", url: "https://agyasounds.com.br/artists/needle-point", sameAs: "https://soundcloud.com/needlepointtrance" },
    { "@type": "MusicGroup", name: "Nishio", url: "https://agyasounds.com.br/artists/nishio", sameAs: "https://soundcloud.com/nishiomusic" },
    { "@type": "MusicGroup", name: "OVNI Messenger", url: "https://agyasounds.com.br/artists/ovni-messenger", sameAs: "https://soundcloud.com/ovnimessenger" },
    { "@type": "MusicGroup", name: "Padawan", url: "https://agyasounds.com.br/artists/padawan", sameAs: "https://soundcloud.com/beatrice-giuzio" },
    { "@type": "MusicGroup", name: "Rizomorf", url: "https://agyasounds.com.br/artists/rizomorf", sameAs: "https://soundcloud.com/rizomorf" },
    { "@type": "MusicGroup", name: "Sacro Taré", url: "https://agyasounds.com.br/artists/sacro-tare", sameAs: "https://on.soundcloud.com/RyNhG881Px3UFDPb6" },
    { "@type": "MusicGroup", name: "Shankara", url: "https://agyasounds.com.br/artists/shankara", sameAs: "https://soundcloud.com/shankaralive" },
    { "@type": "MusicGroup", name: "Shivattva", url: "https://agyasounds.com.br/artists/shivattva", sameAs: "https://soundcloud.com/shivattva" },
    { "@type": "MusicGroup", name: "Swampfunker", url: "https://agyasounds.com.br/artists/swampfunker", sameAs: "https://soundcloud.com/swampfunker" },
    { "@type": "MusicGroup", name: "Thaí", url: "https://agyasounds.com.br/artists/thai", sameAs: "https://soundcloud.com/thaidj" },
    { "@type": "MusicGroup", name: "Tibetano", url: "https://agyasounds.com.br/artists/tibetano", sameAs: "https://soundcloud.com/tibetanolive" },
    { "@type": "MusicGroup", name: "Travis", url: "https://agyasounds.com.br/artists/travis", sameAs: "https://soundcloud.com/travislivemusic" },
    { "@type": "MusicGroup", name: "Vaidia", url: "https://agyasounds.com.br/artists/vaidia", sameAs: "https://soundcloud.com/vaidia" },
    { "@type": "MusicGroup", name: "Vajrapani", url: "https://agyasounds.com.br/artists/vajrapani", sameAs: "https://soundcloud.com/vajrapanilive" },
    { "@type": "MusicGroup", name: "Vucsetics", url: "https://agyasounds.com.br/artists/vucsetics", sameAs: "https://soundcloud.com/vucsetics" },
    { "@type": "MusicGroup", name: "Wave Savage", url: "https://agyasounds.com.br/artists/wave-savage", sameAs: "https://soundcloud.com/wavesavage" },
    { "@type": "MusicGroup", name: "WIILL", url: "https://agyasounds.com.br/artists/wiill" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preload" href="/fonts/GothamBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamLight.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://image-cdn-fa.spotifycdn.com" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-B4EL5CCMYE" />
        <Script src="https://audius.co/player.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}