import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
  icons: {
    icon: "/icon.png?v=1",
    apple: "/icon.png?v=1",
  },
  // Configuração para aparecer a imagem no WhatsApp/Redes Sociais
  openGraph: {
    title: "Agya Sounds | Frequências do Terceiro Olho",
    description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    url: "https://agyasounds.com.br",
    siteName: "Agya Sounds",
    images: [
      {
        url: "/fundo-bg-site-agya.jpg", // A imagem deve estar na pasta public
        width: 1200,
        height: 630,
        alt: "Agya Sounds - Frequências do Terceiro Olho",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}