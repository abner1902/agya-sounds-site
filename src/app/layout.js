import './globals.css';

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Frequências do Terceiro Olho",
  description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
  openGraph: {
    title: "Agya Sounds | Frequências do Terceiro Olho",
    description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    url: "https://agyasounds.com.br",
    siteName: "Agya Sounds",
    images: [
      {
        url: "/fundo-bg-site-agya.jpg",
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
    description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    images: ["/fundo-bg-site-agya.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}