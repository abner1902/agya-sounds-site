import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
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
