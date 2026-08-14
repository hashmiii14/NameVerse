import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, BookOpen, Globe, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | NameMeaning.fun',
  description: 'Learn about NameMeaning.fun, a clean, trustworthy name dictionary built to explore name meanings, linguistic origins, and cultural backgrounds.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-3 border-b border-slate-200 pb-5">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About NameMeaning.fun
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A clean, fast, and structured name meaning dictionary created for parents, researchers, and anyone curious about the linguistic roots and cultural history of personal names.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Our Core Purpose</span>
          </h2>
          <p>
            Names carry centuries of history, linguistic evolution, and cultural heritage. NameMeaning.fun was created to provide a simple, clean, and accessible reference platform where users can quickly understand the true meaning, origin language, gender usage, and cultural context of names from around the world.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            <span>Multicultural & Inclusive Focus</span>
          </h2>
          <p>
            We cover a broad spectrum of naming traditions including Sanskrit, Arabic, Hebrew, Punjabi, Tamil, Greek, Latin, English, European, Persian, and African heritages. Our goal is to represent names neutrally, accurately, and inclusively without bias toward any single tradition.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Clean & Lightweight Reference</span>
          </h2>
          <p>
            Unlike complex, ad-cluttered websites with artificial ratings or horoscope predictions, NameMeaning.fun stays focused strictly on factual name data. We prioritize page speed, clean typography, readable layouts, and easy search discovery.
          </p>
        </section>
      </div>

      <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
        <Link
          href="/find-names"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Explore Name Database</span>
        </Link>
        <Link
          href="/contact"
          className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
        >
          Have questions? Contact us →
        </Link>
      </div>

    </div>
  );
}
