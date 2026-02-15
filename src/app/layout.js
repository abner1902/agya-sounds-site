import "./globals.css";

export const metadata = {
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="bg-black text-white antialiased font-sans" suppressHydrationWarning>
        {/* Removi o Navbar daqui pois você já está chamando ele dentro do page.js 
            Isso evita que a Navbar apareça duplicada ou dê erro de hidratação. */}
        {children}
      </body>
    </html>
  );
}