import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { queryNamesServer } from '@/lib/data/namesHelper';
import { SearchBar } from '@/components/search/SearchBar';
import { Globe } from 'lucide-react';

interface PageProps {
  searchParams: Promise<{ page?: string; letter?: string }>;
}

export const metadata: Metadata = {
  title: 'Urdu Girl Names — Meanings, Etymology & Roots | NameVerse',
  description: 'Explore thousands of authentic Urdu girl names with meanings, origins, and cultural significance.',
  alternates: {
    canonical: 'https://name-verse.vercel.app/urdu-girl-names',
  },
};

export default async function UrduGirlNamesPage({ searchParams }: PageProps) {
  const { page: pageStr, letter: letterParam } = await searchParams;
  const currentPage = parseInt(pageStr || '1', 10) || 1;
  const letter = letterParam || 'All';
  const pageSize = 36;
  const offset = (currentPage - 1) * pageSize;

  const { results, total } = queryNamesServer(
    { gender: 'Female', language: 'Urdu', letter },
    pageSize,
    offset
  );

  const totalPages = Math.ceil(total / pageSize) || 1;
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="max-w-2xl mx-auto">
        <SearchBar placeholder="Search Urdu girl names..." />
      </div>

      <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/find-names" className="hover:text-emerald-600 transition-colors">Find Names</Link>
        <span>/</span>
        <span className="font-bold text-rose-800">Urdu Girl Names</span>
      </nav>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span>South Asian & Mughal Heritage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Urdu Girl Names
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Discover authentic Urdu female personal names. Showing <span className="font-bold text-slate-900">{total.toLocaleString()}</span> documented names.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        <Link
          href="/urdu-girl-names"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            letter === 'All' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          All
        </Link>
        {ALPHABET.map(char => (
          <Link
            key={char}
            href={`/urdu-girl-names?letter=${char}`}
            className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
              letter === char ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            {char}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map(item => (
          <Link
            key={item.slug}
            href={`/name/${item.slug}`}
            className="group block bg-white border border-slate-200 hover:border-rose-400 hover:bg-rose-50/20 rounded-2xl p-4 transition-all shadow-2xs hover:shadow-md space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-black text-base text-slate-900 group-hover:text-rose-700 transition-colors">
                {item.name}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                Girl
              </span>
            </div>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {item.meaning}
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span>Urdu Language</span>
              <span className="font-medium text-slate-600">{item.religion && item.religion[0] ? item.religion[0] : 'Muslim'}</span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          {currentPage > 1 && (
            <Link
              href={`/urdu-girl-names?page=${currentPage - 1}${letter !== 'All' ? `&letter=${letter}` : ''}`}
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
              href={`/urdu-girl-names?page=${currentPage + 1}${letter !== 'All' ? `&letter=${letter}` : ''}`}
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
