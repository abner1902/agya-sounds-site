import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
  // ... resto do seu metadata mantido igual
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agya Sounds",
  url: "https://agyasounds.com.br",
  logo: "https://agyasounds.com.br/logo-menu-agya.png",
  sameAs: ["https://soundcloud.com/agya-sounds", "https://agyasounds.bandcamp.com"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* PRELOAD DE FONTES: Agora incluindo a Light que estava causando o maior atraso */}
        <link rel="preload" href="/fonts/GothamBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamLight.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* OTIMIZAÇÃO DE CONEXÕES: Google e Spotify (conforme sugerido pelo PageSpeed) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://image-cdn-fa.spotifycdn.com" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        
        {/* GA4 OTIMIZADO */}
        <GoogleAnalytics gaId="G-B4EL5CCMYE" />

        {/* PLAYER AUDIUS OTIMIZADO: strategy="lazyOnload" para não competir com o LCP */}
        <Script 
          src="https://audius.co/player.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}