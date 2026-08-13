import React from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { QuickFilters } from '@/components/search/QuickFilters';
import { DisclaimerBanner } from '@/components/ui/DisclaimerBanner';
import { Compass, Scale, BookOpen, Layers, Globe } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 py-6 sm:py-10">
      
      {/* Search Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Discover the Meaning, Origin & History of Any Name
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Detailed etymology, linguistic root words, history, gender usage, and cultural background for names from all world traditions.
          </p>
        </div>

        {/* Clean Search Bar */}
        <SearchBar large={true} />

        {/* Clean Popular Tags */}
        <QuickFilters />
      </section>

      {/* Cultural Neutrality Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <DisclaimerBanner />
      </section>

      {/* Feature Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Meaning & Etymology
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Examines literal meanings, root words, original languages, and verified etymological origins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Full-Name Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Analyzes multi-part full names (such as "Muhammad Hashmi") by breaking down given names and surnames.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Global World Traditions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Covers Hindu, Muslim, Christian, Jewish, Sikh, Buddhist, Jain, African, Celtic, Slavic, and Asian naming traditions.
            </p>
          </div>

        </div>
      </section>

      {/* Explore & Compare Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">
              Explore or Compare Names
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Find names by tradition or compare two names side-by-side.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link
              href="/discover"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Find Names</span>
            </Link>
            <Link
              href="/compare"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <Scale className="w-4 h-4" />
              <span>Compare Names</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
