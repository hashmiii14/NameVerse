import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { Compass, BookOpen, Globe, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NameMeaning.fun - Search 10,000+ Name Meanings, Origins & Etymologies',
  description: 'Search 10,000+ authentic name meanings, origins, languages, gender usage, and cultural associations across Hindu, Muslim, Sikh, Christian, Indian, Sanskrit, Arabic, Hebrew, and European naming traditions.',
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 sm:space-y-14">
      
      {/* Hero Section */}
      <section className="text-center space-y-5">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Find the Meaning, Origin & History of Any Name
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Search over 10,000 authentic names across Hindu, Muslim, Sikh, Christian, Indian, Sanskrit, Arabic, Hebrew, and global traditions.
        </p>

        {/* Main Search Bar */}
        <div className="pt-2">
          <SearchBar large={true} />
        </div>

        {/* Direct Link to Find Names */}
        <div className="pt-2">
          <Link
            href="/find-names"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Browse & Filter All 10,000+ Names</span>
          </Link>
        </div>
      </section>

      {/* A-Z Alphabetical Index */}
      <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center space-y-3">
        <h2 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
          Browse Names by Starting Letter (A–Z)
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {LETTERS.map(letter => (
            <Link
              key={letter}
              href={`/find-names?letter=${letter}`}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
            >
              {letter}
            </Link>
          ))}
        </div>
      </section>

      {/* Site Introduction */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            About NameMeaning.fun Etymological Dictionary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Accurate Etymologies</span>
            </div>
            <p>
              Every entry provides factual etymological meanings, linguistic roots, and documented origin languages without fake claims or filler text.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Multicultural & Inclusive</span>
            </div>
            <p>
              Covers diverse traditions including Sanskrit, Arabic, Hebrew, Punjabi, Tamil, Greek, Latin, Persian, European, and African naming heritages.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Structured Data</span>
            </div>
            <p>
              Provides clean breakdowns of meanings, gender usage, alternate spellings, and contextually related names for easy discovery.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
