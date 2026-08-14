import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { getNameBySlug } from '@/lib/data/namesHelper';
import { Compass, Sparkles, Heart, ArrowRight, Globe, ShieldCheck, BookOpen } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NameVerse — Search Name Meanings, Origins & Cultural Etymologies',
  description: 'Explore authentic personal name meanings, origins, languages, gender usage, and cultural heritages across Islamic, Arabic, Urdu, Persian, Indian, Sanskrit, Hebrew, and global traditions.',
};

const MUSLIM_GIRL_SLUGS = [
  'fatima', 'aisha', 'maryam', 'zainab', 'hafsa', 'aaliyah', 
  'sumayya', 'sana', 'inaya', 'hiba', 'ruqayya', 'khadija'
];

const MUSLIM_BOY_SLUGS = [
  'muhammad', 'ahmed', 'omar', 'ali', 'yusuf', 'ibrahim', 
  'hamza', 'hasan', 'hassan', 'rayyan', 'zayd', 'abdullah'
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ORIGINS_LIST = [
  { name: 'Arabic', count: 'Islamic & Middle Eastern Heritage', href: '/find-names?origin=Arabic' },
  { name: 'Urdu', count: 'South Asian & Mughal Traditions', href: '/find-names?origin=Urdu' },
  { name: 'Persian', count: 'Classical Iranian & Persian Literature', href: '/find-names?origin=Persian' },
  { name: 'Sanskrit', count: 'Ancient Indian Etymology & Roots', href: '/find-names?origin=Sanskrit' },
  { name: 'Turkish', count: 'Anatolian & Ottoman Cultural Names', href: '/find-names?origin=Turkish' },
  { name: 'Hebrew', count: 'Biblical & Ancient Semitic Names', href: '/find-names?origin=Hebrew' },
  { name: 'European', count: 'Global European & Classical Roots', href: '/find-names?origin=European' },
];

export default function HomePage() {
  const muslimGirls = MUSLIM_GIRL_SLUGS.map(s => getNameBySlug(s)).filter(Boolean);
  const muslimBoys = MUSLIM_BOY_SLUGS.map(s => getNameBySlug(s)).filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Explore names, meanings &amp; cultural roots</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Find a name with meaning.
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore thousands of names across Islamic, Arabic, Urdu, Persian, Indian, Sanskrit, and global naming traditions.
        </p>

        {/* Main Search Bar */}
        <div className="pt-2 max-w-2xl mx-auto">
          <SearchBar large={true} placeholder="Search by name, meaning, origin (e.g. Fatima, Light, Arabic girl names)..." />
        </div>

        {/* Quick Search Examples */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-400">Try searching:</span>
          <Link href="/find-names?q=Fatima" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">Fatima</Link>
          <Link href="/find-names?q=light" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">Names meaning light</Link>
          <Link href="/find-names?gender=Female&religion=Muslim" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">Arabic girl names</Link>
          <Link href="/find-names?gender=Male&religion=Muslim" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">Muslim boy names</Link>
        </div>
      </section>

      {/* 2. Popular Muslim Girl Names Module */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-rose-700 text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-100" />
              <span>Female Naming Priority</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Popular Muslim Girl Names
            </h2>
          </div>
          <Link
            href="/muslim-girl-names"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            <span>Explore all Muslim girl names</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 12-16 Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {muslimGirls.map((item) => item && (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-slate-50/70 border border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 rounded-2xl p-4 transition-all shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-bold text-slate-900 text-base group-hover:text-rose-700 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Girl
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>
              <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-100/80">
                {item.origin} · Muslim
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Popular Muslim Boy Names Module */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-blue-700 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Classic Islamic Traditions</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Popular Muslim Boy Names
            </h2>
          </div>
          <Link
            href="/muslim-boy-names"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            <span>Explore all Muslim boy names</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 12-16 Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {muslimBoys.map((item) => item && (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-slate-50/70 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 rounded-2xl p-4 transition-all shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Boy
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>
              <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-100/80">
                {item.origin} · Muslim
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Browse by Alphabet (A-Z) Module */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs text-center">
        <div className="space-y-1 max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Browse Names by Alphabet
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select any letter to discover authentic names starting from A through Z.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-4xl mx-auto">
          {ALPHABET.map((letter) => (
            <Link
              key={letter}
              href={`/names/${letter.toLowerCase()}`}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white text-slate-800 font-black text-sm sm:text-base flex items-center justify-center transition-all shadow-2xs"
            >
              {letter}
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Browse by Cultural Origin */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Explore Cultural Heritage &amp; Origins
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Discover names categorized by linguistic root, cultural geography, and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ORIGINS_LIST.map(o => (
            <Link
              key={o.name}
              href={o.href}
              className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-5 transition-all shadow-2xs hover:shadow-md space-y-2 block"
            >
              <div className="flex items-center justify-between">
                <span className="font-black text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {o.name} Names
                </span>
                <Globe className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {o.count}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Reference Quality Assurance */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Trustworthy Cultural Reference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Deep, Verified Etymological Data
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            NameVerse distinguishes between linguistic origin, cultural usage, gender history, and religious tradition. Every name card and detail page is designed to serve as a reliable reference.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap gap-4">
          <Link
            href="/find-names"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Open Full Directory Engine</span>
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-colors border border-slate-700"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read About Our Methodology</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
