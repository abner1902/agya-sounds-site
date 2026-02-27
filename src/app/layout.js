import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
  // Isso força o navegador a carregar o SEU ícone e esquecer o da Vercel
  icons: {
    icon: "/icon.png?v=1",
    apple: "/icon.png?v=1",
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