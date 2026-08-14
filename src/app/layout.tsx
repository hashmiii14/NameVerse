import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NameMeaning.fun — What does your name mean?',
  description: 'Discover the meaning, origin, history, and story behind your name. Fast, authentic etymological search.',
  keywords: ['namemeaning.fun', 'name meaning', 'what does my name mean', 'name origin', 'etymology', 'arabic names', 'sanskrit names', 'muslim names', 'global names'],
  authors: [{ name: 'NameMeaning.fun Team' }],
  metadataBase: new URL('https://namemeaning.fun'),
  openGraph: {
    title: 'NameMeaning.fun — What does your name mean?',
    description: 'Discover the meaning, origin, history, and story behind your name.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 antialiased`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 w-full overflow-x-hidden grid-background">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
