import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NameMeaning.fun - Meaning, Origin & History of Personal Names',
  description: 'Discover the exact meaning, origin, history, gender, pronunciation, and cultural background of personal names globally.',
  keywords: ['name meaning', 'name origin', 'etymology', 'arabic names', 'sanskrit names', 'hebrew names', 'christian names', 'muslim names', 'hindu names', 'full name analysis', 'namemeaning'],
  authors: [{ name: 'NameMeaning Team' }],
  metadataBase: new URL('https://namemeaning.fun'),
  openGraph: {
    title: 'NameMeaning.fun - Deep Personal Name Etymology',
    description: 'Discover the meaning, origin, and history behind any personal name globally.',
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
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
