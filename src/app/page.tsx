import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NameMeaning.fun — What does your name mean?',
  description: 'Discover the meaning, origin, history, and story behind your name.',
};

const FEATURED_EXAMPLES = [
  { name: 'Fatima', slug: 'fatima', origin: 'Arabic' },
  { name: 'Aarav', slug: 'aarav', origin: 'Sanskrit' },
  { name: 'Sarah', slug: 'sarah', origin: 'Hebrew' },
  { name: 'Muhammad', slug: 'muhammad', origin: 'Arabic' },
  { name: 'Zayn', slug: 'zayn', origin: 'Arabic' },
  { name: 'Rahul', slug: 'rahul', origin: 'Sanskrit' },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-24 space-y-12 text-center">
      
      {/* Hero Header Section */}
      <section className="space-y-6 max-w-2xl mx-auto">
        
        {/* Subtitle Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Personal Etymology &amp; History</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
          What does your name mean?
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-lg mx-auto">
          Discover the meaning, origin, history, and story behind your name.
        </p>

        {/* Main Visual Centerpiece: Search Input */}
        <div className="pt-4">
          <SearchBar large={true} placeholder="Enter your name (e.g. Fatima, Aarav, Sarah)..." />
        </div>

        {/* Clickable Curated Examples */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
          <span className="font-semibold text-zinc-400">People search:</span>
          {FEATURED_EXAMPLES.map((ex) => (
            <Link
              key={ex.slug}
              href={`/name/${ex.slug}`}
              className="px-3 py-1 rounded-full bg-white border border-zinc-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium text-zinc-700 shadow-2xs"
            >
              {ex.name}
            </Link>
          ))}
        </div>

      </section>

      {/* Secondary Clean Editorial Prompt */}
      <section className="pt-8 border-t border-zinc-200/60 max-w-xl mx-auto space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
          Curious to explore randomly?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/find-names"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800 text-xs font-bold transition-all shadow-2xs"
          >
            <span>Browse Name Index</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
        </div>
      </section>

    </div>
  );
}
