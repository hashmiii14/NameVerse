import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, BookOpen, Globe, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | NameMeaning.fun',
  description: 'Learn about NameMeaning.fun, a clean, trustworthy name dictionary built to explore name meanings, linguistic origins, and cultural backgrounds across 50,000+ names.',
};

export default function AboutUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-3 border-b border-slate-200 pb-5">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About Us
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A clean, fast, and structured etymological dictionary created to help people discover the true meanings, origins, and cultural histories of names globally.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Our Core Purpose</span>
          </h2>
          <p>
            Names carry centuries of linguistic evolution, historical context, and family heritage. NameMeaning.fun is a free online dictionary designed to make name discovery simple and factual. Users can explore given names, family surnames (such as Hashmi, Sharma, Singh, Khan, Patel, etc.), alternative spellings, and contextually similar names.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            <span>Multicultural & Inclusive Coverage</span>
          </h2>
          <p>
            Our master database contains over 50,000 name records across diverse traditions, including Sanskrit, Arabic, Hebrew, Punjabi, Tamil, Telugu, Marathi, Gujarati, Bengali, Greek, Latin, English, Persian, European, and African heritages. We represent names neutrally and distinguish carefully between linguistic origin, language, and cultural usage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Factual & Unbiased Reference</span>
          </h2>
          <p>
            We prioritize factual etymology, clean typography, fast page performance, and accessibility. We do not use speculative AI filler, horoscope predictions, or complex entertainment gimmicks.
          </p>
        </section>
      </div>

      <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
        <Link
          href="/find-names"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Explore 50,000+ Name Database</span>
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
