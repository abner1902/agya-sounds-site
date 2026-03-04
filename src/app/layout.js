import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script'; // Importação necessária para o Script otimizado

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
  // ... resto do seu metadata (mantido igual)
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
        
        {/* CORREÇÃO DAS FONTES: Força o navegador a baixar as fontes principais IMEDIATAMENTE */}
        <link rel="preload" href="/fonts/GothamBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        
        {/* GA4 OTIMIZADO */}
        <GoogleAnalytics gaId="G-B4EL5CCMYE" />

        {/* PLAYER AUDIUS OTIMIZADO: strategy="lazyOnload" faz ele carregar apenas quando o resto do site já estiver pronto */}
        <Script 
          src="https://audius.co/player.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}