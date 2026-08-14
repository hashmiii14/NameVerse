import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { Compass, BookOpen, Globe, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NameMeaning.fun - Search 50,000+ Name Meanings, Origins & Etymologies',
  description: 'Search over 50,000 authentic name meanings, origins, languages, gender usage, and cultural associations across Hindu, Muslim, Sikh, Christian, Indian, Sanskrit, Arabic, Hebrew, and European naming traditions.',
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Section */}
      <section className="text-center space-y-5">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Find the Meaning, Origin & History of Any Name
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Search over 50,000 authentic given names and surnames across Hindu, Muslim, Sikh, Christian, Indian, Sanskrit, Arabic, Hebrew, and global traditions.
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
            <span>Browse & Filter All 50,000+ Names</span>
          </Link>
        </div>
      </section>

      {/* Dictionary Reference Introduction */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            About NameMeaning.fun Etymological Dictionary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>50,000+ Verified Records</span>
            </div>
            <p>
              Comprehensive coverage of given names, family surnames (such as Hashmi, Sharma, Singh, Khan, Patel, etc.), and unisex naming traditions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Multicultural Heritage</span>
            </div>
            <p>
              Covers Sanskrit, Arabic, Hebrew, Punjabi, Tamil, Telugu, Marathi, Gujarati, Bengali, Greek, Latin, Persian, European, and African traditions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Factual Etymology</span>
            </div>
            <p>
              Neutral, reference-quality explanations focused purely on true meanings, etymological roots, gender usage, and cultural context.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
