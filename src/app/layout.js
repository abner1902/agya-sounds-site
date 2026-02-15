import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, background: 'black' }} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
