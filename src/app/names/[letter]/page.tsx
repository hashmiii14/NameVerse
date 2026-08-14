import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { queryNamesServer } from '@/lib/data/namesHelper';
import { SearchBar } from '@/components/search/SearchBar';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ letter: string }>;
  searchParams: Promise<{ page?: string }>;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export async function generateStaticParams() {
  return ALPHABET.map(letter => ({ letter: letter.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { letter } = await params;
  const upper = letter.toUpperCase();

  if (!ALPHABET.includes(upper)) {
    return { title: 'Invalid Letter | NameVerse' };
  }

  return {
    title: `Names Starting with ${upper} — Meanings, Origins & History | NameVerse`,
    description: `Browse all authentic personal names beginning with the letter ${upper}. Discover meanings, etymologies, gender usages, and origins across Islamic, Arabic, Sanskrit, and global traditions.`,
    alternates: {
      canonical: `https://name-verse.vercel.app/names/${letter.toLowerCase()}`,
    },
  };
}

export default async function AlphabetPage({ params, searchParams }: PageProps) {
  const { letter } = await params;
  const { page: pageStr } = await searchParams;
  const upper = letter.toUpperCase();

  if (!ALPHABET.includes(upper)) {
    notFound();
  }

  const currentPage = parseInt(pageStr || '1', 10) || 1;
  const pageSize = 36;
  const offset = (currentPage - 1) * pageSize;

  const { results, total } = queryNamesServer(
    { letter: upper },
    pageSize,
    offset
  );

  const totalPages = Math.ceil(total / pageSize) || 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Search Header */}
      <div className="max-w-2xl mx-auto">
        <SearchBar />
      </div>

      {/* Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/find-names" className="hover:text-emerald-600 transition-colors">Find Names</Link>
          <span>/</span>
          <span className="font-bold text-slate-900">Letter {upper}</span>
        </nav>

        <Link
          href="/find-names"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Filters</span>
        </Link>
      </div>

      {/* Title Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-2xl flex items-center justify-center shadow-xs">
            {upper}
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Names Starting with &quot;{upper}&quot;
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Showing <span className="font-bold text-slate-900">{total.toLocaleString()}</span> names beginning with the letter {upper}
            </p>
          </div>
        </div>
      </div>

      {/* Alphabet Selector */}
      <div className="flex flex-wrap justify-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        {ALPHABET.map(char => {
          const isActive = char === upper;
          return (
            <Link
              key={char}
              href={`/names/${char.toLowerCase()}`}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-extrabold text-xs sm:text-sm flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-xs scale-105'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-emerald-600'
              }`}
            >
              {char}
            </Link>
          );
        })}
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center space-y-3">
          <p className="text-slate-700 font-bold text-base">No names found starting with &quot;{upper}&quot;.</p>
          <p className="text-xs text-slate-500">Explore other letters or clear search filters.</p>
          <Link href="/find-names" className="inline-block px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-500">
            Browse Full Directory
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map(item => (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-4 transition-all shadow-2xs hover:shadow-md space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-black text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  item.gender === 'Male' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                  item.gender === 'Female' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {item.gender}
                </span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                <span>{item.origin} Origin</span>
                <span className="font-medium text-slate-500">{item.religion && item.religion[0] ? item.religion[0] : 'Cultural'}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          {currentPage > 1 && (
            <Link
              href={`/names/${letter.toLowerCase()}?page=${currentPage - 1}`}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
            >
              ← Previous
            </Link>
          )}

          <span className="text-xs font-bold text-slate-700 px-3">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages && (
            <Link
              href={`/names/${letter.toLowerCase()}?page=${currentPage + 1}`}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
            >
              Next →
            </Link>
          )}
        </div>
      )}

    </div>
  );
}
