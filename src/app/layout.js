    // src/app/layout.js
    import './globals.css';
    import LocalFont from 'next/font/local';
    import Navbar from '@/components/Navbar'; // <<-- ESTA LINHA IMPORTA SUA NAVBAR!

    const gotham = LocalFont({
      src: [
        { path: '../../public/fonts/GothamLight.ttf', weight: '300', style: 'normal' },
        { path: '../../public/fonts/GothamMedium.ttf', weight: '500', style: 'normal' },
        { path: '../../public/fonts/GothamBold.ttf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/GothamBlack.ttf', weight: '900', style: 'normal' },
        { path: '../../public/fonts/GothamThin.ttf', weight: '100', style: 'normal' },
        { path: '../../public/fonts/GothamUltra.ttf', weight: '900', style: 'normal' },
        { path: '../../public/fonts/GothamXLight.ttf', weight: '200', style: 'normal' },
        { path: '../../public/fonts/GothamBlackItalic.ttf', weight: '900', style: 'italic' },
        { path: '../../public/fonts/GothamBoldItalic.ttf', weight: '700', style: 'italic' },
        { path: '../../public/fonts/GothamLightItalic.ttf', weight: '300', style: 'italic' },
        { path: '../../public/fonts/GothamMediumItalic.ttf', weight: '500', style: 'italic' },
        { path: '../../public/fonts/GothamThinItalic.ttf', weight: '100', style: 'italic' },
        { path: '../../public/fonts/GothamUltraItalic.ttf', weight: '900', style: 'italic' },
        { path: '../../public/fonts/GothamXLightItalic.ttf', weight: '200', style: 'italic' },
      ],
      variable: '--font-gotham',
      display: 'swap',
    });

    export const metadata = {
      title: "Agya Sounds | Frequências do Terceiro Olho",
      description: "Gravadora de música psicodélica experimental dedicada a expandir a percepção humana.",
    };

    export default function RootLayout({ children }) {
      return (
        <html lang="pt-br" className={`${gotham.variable} scroll-smooth`}> 
          <body className={`${gotham.className}`} suppressHydrationWarning> 
            <Navbar /> {/* <<-- SUA NAVBAR É RENDERIZADA AQUI, APARECENDO EM TODAS AS PÁGINAS! */}
            {children}
          </body>
        </html>
      );
    }