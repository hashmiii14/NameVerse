import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NameVerse — Search Name Meanings, Origins & Cultural Etymologies',
  description: 'Explore authentic name meanings, origins, languages, gender usage, and cultural traditions across Islamic, Arabic, Urdu, Persian, Indian, Sanskrit, Hebrew, and global naming heritages.',
  keywords: ['nameverse', 'name meaning', 'name origin', 'etymology', 'arabic girl names', 'muslim girl names', 'urdu names', 'persian names', 'sanskrit names', 'muslim boy names'],
  authors: [{ name: 'NameVerse Team' }],
  metadataBase: new URL('https://name-verse.vercel.app'),
  openGraph: {
    title: 'NameVerse — Name Discovery Engine',
    description: 'Find a name with meaning across Islamic, Arabic, Urdu, Persian, Indian, and global naming traditions.',
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
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
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
