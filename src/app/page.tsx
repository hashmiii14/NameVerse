import React from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { QuickFilters } from '@/components/search/QuickFilters';
import { Compass, Scale, BookOpen, Layers, Globe } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-10">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
            🇮🇳 India & Asian Naming Traditions
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Discover the Meaning, Origin & History of Indian & Asian Names
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Detailed etymology, Sanskrit & Arabic root words, history, gender usage, and cultural background across Hindu, Muslim, Sikh, Christian, Jain, Buddhist, and regional traditions.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar large={true} />

        {/* Trending Tags */}
        <QuickFilters />
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Sanskrit & Arabic Etymology
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Examines Sanskrit root words (धातु), Arabic roots (جذور), and verified translations.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Full Indian Name Analysis
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Analyzes multi-part full names by breaking down given names and surnames.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm sm:col-span-2 md:col-span-1">
            <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Regional Asian Cultures
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Covers North & South Indian, Punjabi/Sikh, Bengali, Marathi, Gujarati, and Asian traditions.
            </p>
          </div>

        </div>
      </section>

      {/* Explore & Compare Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl font-bold">
              Explore or Compare Names
            </h2>
            <p className="text-xs text-slate-400">
              Browse names by tradition or compare two names side-by-side.
            </p>
          </div>

          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/discover"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Find Names</span>
            </Link>
            <Link
              href="/compare"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <Scale className="w-4 h-4" />
              <span>Compare</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
