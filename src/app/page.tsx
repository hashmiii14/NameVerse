import React from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { QuickFilters } from '@/components/search/QuickFilters';
import { DisclaimerBanner } from '@/components/ui/DisclaimerBanner';
import { Sparkles, ShieldCheck, Globe, Scale, BookOpen, Layers, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-300 dark:border-emerald-800 shadow-sm">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Culturally Respectful Personal Name Etymology</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Discover the meaning, history, and cultural story behind any name.
          </h1>
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Not just what a name means, but where it came from, how it developed, how different cultures use it, and what is actually known about its history.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar large={true} />

        {/* Quick Popular Searches */}
        <QuickFilters />
      </section>

      {/* Cultural Neutrality Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <DisclaimerBanner />
      </section>

      {/* Feature Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Comprehensive Onomastic Analysis
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Grounded in academic lexicons, historical records, and cross-cultural naming traditions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Meaning & Etymology
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Examines literal meanings, triconsonantal/Sanskrit root words, original languages, and academic confidence indicators.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Full-Name Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Analyzes given names, middle names, and surnames/nisbas (such as "Muhammad Hashmi") individually and in synthesis.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Global World Traditions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Covers Hindu, Muslim, Christian, Jewish, Sikh, Buddhist, Jain, African, Celtic, Scandinavian, Slavic, and Asian traditions.
            </p>
          </div>

        </div>
      </section>

      {/* Feature Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              Compare & Discover Tools
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Compare Names Side-by-Side or Discover by Meaning
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Compare two or more names across etymology, origin, gender, variants, and religious associations in a clean side-by-side matrix.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/compare"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm text-center transition-colors shadow-lg"
            >
              Compare Names
            </Link>
            <Link
              href="/discover"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center border border-white/20 transition-colors"
            >
              Find Names
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
