import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana. Através de vertentes do Darkpsy, criamos experiências sonoras únicas.",
  openGraph: {
    title: "Agya Sounds | Frequências do Terceiro Olho",
    description: "Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    url: "https://agyasounds.com.br",
    siteName: "Agya Sounds",
    images: [
      {
        url: "/og-image.png",   // ← agora aponta para sua imagem 1200x630
        width: 1200,
        height: 630,
        alt: "Agya Sounds - Frequências do Terceiro Olho",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agya Sounds | Frequências do Terceiro Olho",
    description: "Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    images: ["/og-image.png"],
  },
};

// Schema.org Organization — diz ao Google qual é o logotipo oficial da marca
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agya Sounds",
  url: "https://agyasounds.com.br",
  logo: "https://agyasounds.com.br/logo-menu-agya.png",  // logo limpo, sem fundo texto
  sameAs: [
    "https://soundcloud.com/agya-sounds",
    "https://agyasounds.bandcamp.com",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        {/* Schema.org injetado como JSON-LD — invisível pro usuário, visível pro Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}