import React from 'react';
import { Metadata } from 'next';
import { NameComparisonMatrix } from '@/components/compare/NameComparisonMatrix';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare Names Side-by-Side | NameVerse AI',
  description: 'Compare personal names etymologically and culturally side-by-side. Analyze meaning, origin, gender, history, and religious associations.',
};

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-semibold border border-teal-300 dark:border-teal-800">
          <Scale className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>Side-by-Side Etymology Tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Compare Personal Names
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Compare two or more names across etymological meaning, origin, gender usage, variants, and documented cultural associations.
        </p>
      </div>

      <NameComparisonMatrix />
    </div>
  );
}
