import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { getNameBySlug } from '@/lib/data/namesHelper';
import { Sparkles, ArrowRight, BookOpen, Compass, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NameMeaning.fun — What does your name mean?',
  description: 'Search your name and discover its meaning, origin, history and interesting details.',
};

const EXAMPLE_SEARCHES = [
  { name: 'Aisha', slug: 'aisha' },
  { name: 'Muhammad', slug: 'muhammad' },
  { name: 'Aarav', slug: 'aarav' },
  { name: 'Sarah', slug: 'sarah' },
  { name: 'Zayn', slug: 'zayn' },
];

const CATEGORIES = [
  { label: 'Female Names', href: '/find-names?gender=Female' },
  { label: 'Male Names', href: '/find-names?gender=Male' },
  { label: 'Unisex Names', href: '/find-names?gender=Unisex' },
  { label: 'Muslim Names', href: '/find-names?religion=Muslim' },
  { label: 'Hindu Names', href: '/find-names?religion=Hindu' },
  { label: 'Arabic Names', href: '/find-names?origin=Arabic' },
  { label: 'Indian Names', href: '/find-names?origin=Sanskrit' },
];

const FEATURED_SLUGS = [
  'aisha', 'muhammad', 'aarav', 'fatima', 'arjun', 'zayn', 'sarah', 'khadija'
];

export default function HomePage() {
  const featuredItems = FEATURED_SLUGS.map(s => getNameBySlug(s)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-14">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Etymology &amp; Name Discovery</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
          What does your name mean?
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-lg mx-auto">
          Search your name and discover its meaning, origin, history and interesting details.
        </p>

        <div className="pt-2">
          <SearchBar large={true} placeholder="Enter your name..." />
        </div>

        <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
          <span className="font-semibold text-zinc-400">Try:</span>
          {EXAMPLE_SEARCHES.map(ex => (
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

      {/* 2. Explore Names Categories Section */}
      <section className="pt-8 border-t border-zinc-200/80 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            Explore names
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Browse names by gender, origin and community.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.label}
              href={cat.href}
              className="px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 text-zinc-800 text-xs font-bold transition-all shadow-2xs"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured / Popular Names Grid */}
      <section className="pt-6 border-t border-zinc-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
              Popular names
            </h2>
            <p className="text-xs text-zinc-500">
              Curated documented entries from our etymological database.
            </p>
          </div>

          <Link
            href="/find-names"
            className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featuredItems.map(item => item && (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-white border border-zinc-200 hover:border-emerald-500 rounded-2xl p-4 transition-all shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-bold text-zinc-900 text-base group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700">
                  {item.gender}
                </span>
              </div>
              <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>
              <div className="text-[11px] text-zinc-400 font-medium pt-1 border-t border-zinc-100">
                {item.origin}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Editorial "Did You Know?" Section */}
      <section className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          <span>Did You Know?</span>
        </div>
        <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
          Personal names are among the oldest linguistic artifacts preserved in human culture.
        </p>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          Many names carry roots dating back thousands of years across Semitic, Indo-Aryan, and classical linguistic traditions, encoding virtue, ancestral geography, and literary heritage.
        </p>
      </section>

      {/* 5. Feeling Curious? (Surprise Me) Section */}
      <section className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-black tracking-tight">Feeling curious?</h3>
          <p className="text-xs text-zinc-400">Discover a random interesting name from our dataset.</p>
        </div>
        <Link
          href="/api/random"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Surprise me →</span>
        </Link>
      </section>

      {/* 6. Final Search CTA Section */}
      <section className="text-center space-y-3 pt-4 border-t border-zinc-200/80">
        <h3 className="text-sm font-bold text-zinc-800">
          Didn&apos;t find what you were looking for?
        </h3>
        <Link
          href="/find-names"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-zinc-300 hover:border-zinc-500 text-zinc-900 font-bold text-xs transition-all shadow-2xs"
        >
          <Compass className="w-4 h-4 text-emerald-600" />
          <span>Search all names →</span>
        </Link>
      </section>

    </div>
  );
}
