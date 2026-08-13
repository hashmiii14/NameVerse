import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NameVerse - Culturally Respectful Onomastics & Name Analysis',
  description: 'Discover the exact meaning, linguistic origin, etymology, history, and cultural background behind personal names from all major world traditions.',
  keywords: ['name meaning', 'name origin', 'etymology', 'arabic names', 'sanskrit names', 'hebrew names', 'christian names', 'muslim names', 'hindu names', 'full name analysis'],
  authors: [{ name: 'NameVerse AI Team' }],
  metadataBase: new URL('https://nameverse-ai.vercel.app'),
  openGraph: {
    title: 'NameVerse - Deep Personal Name Etymology',
    description: 'Discover the meaning, history, and cultural story behind any personal name globally.',
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
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
