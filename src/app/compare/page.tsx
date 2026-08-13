import React from 'react';
import { Metadata } from 'next';
import { NameComparisonMatrix } from '@/components/compare/NameComparisonMatrix';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare Names Side-by-Side | NameMeaning.fun',
  description: 'Compare personal names etymologically and culturally side-by-side. Analyze meaning, origin, gender, history, and religious associations.',
};

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      <div className="text-center space-y-2 sm:space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200">
          <Scale className="w-4 h-4 text-teal-600 shrink-0" />
          <span>Side-by-Side Etymology Tool</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Compare Personal Names
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          Compare two or more names across etymological meaning, origin, gender usage, variants, and cultural background.
        </p>
      </div>

      <NameComparisonMatrix />
    </div>
  );
}
