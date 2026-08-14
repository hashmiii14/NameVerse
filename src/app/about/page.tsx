import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Search, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About NameMeaning.fun — Discover the Story Behind Your Name',
  description: 'NameMeaning.fun is a clean, reliable reference dictionary designed to help you explore personal name meanings, etymologies, origins, and cultural histories.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      
      {/* Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <nav className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-bold text-zinc-900">About</span>
        </nav>
        <Link href="/" className="inline-flex items-center gap-1 font-semibold text-zinc-500 hover:text-zinc-900">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main About Card */}
      <article className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-2 border-b border-zinc-100 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Our Purpose
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            About NameMeaning.fun
          </h1>
          <p className="text-base font-semibold text-zinc-700 leading-relaxed pt-1">
            NameMeaning.fun is a simple place to learn more about the name you already have.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
          <p>
            Names are among the first gifts we receive and the most enduring markers of identity. Every personal name carries a history—a record of language, geography, spiritual tradition, or family memory.
          </p>

          <p>
            We built <strong className="text-zinc-900">NameMeaning.fun</strong> to make etymological discovery straightforward, trustworthy, and enjoyable. Instead of cluttering the experience with marketplace advertisements, fake predictions, or endless marketing lists, we focus on delivering accurate meanings, documented origins, and factual context.
          </p>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3 my-4">
            <h3 className="font-bold text-zinc-900 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>What We Prioritize</span>
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600 list-disc list-inside">
              <li><strong>Linguistic Accuracy:</strong> Distinguishing linguistic origin from cultural usage.</li>
              <li><strong>Clean Interaction:</strong> Type your name, search it, and read its story.</li>
              <li><strong>Verified Database:</strong> Continuously refining alternate spellings and etymological roots across multicultural heritages.</li>
            </ul>
          </div>

          <p>
            Whether you are researching your own name, looking up a family heritage, or simply curious about language, NameMeaning.fun is designed to serve as a fast, beautiful reference tool.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/find-names"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-xs"
          >
            <Search className="w-4 h-4" />
            <span>Explore the Directory</span>
          </Link>
          <Link
            href="/contact"
            className="text-xs font-bold text-emerald-700 hover:underline"
          >
            Have feedback or corrections? Contact us →
          </Link>
        </div>
      </article>

    </div>
  );
}
