import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  metadataBase: new URL("https://agyasounds.com.br"),
  title: "Agya Sounds | Gravadora de Darkpsy e Psytrance Underground",
  description: "Agya Sounds é uma gravadora brasileira de darkpsy, forest psy e psytrance underground. Artistas, releases e distribuição musical independente desde 2018.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId="G-B4EL5CCMYE" />
      </body>
    </html>
  );
}
