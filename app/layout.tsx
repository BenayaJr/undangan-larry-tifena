import './globals.css';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
// Tambahkan font kaligrafi romantis
const vibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-vibes' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${vibes.variable} font-sans antialiased bg-sage-500`}>
        {children}
      </body>
    </html>
  );
}