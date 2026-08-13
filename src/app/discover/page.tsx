import React from 'react';
import { Metadata } from 'next';
import { NameFilterGrid } from '@/components/discover/NameFilterGrid';
import { Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find & Discover Names Worldwide | NameMeaning.fun',
  description: 'Filter and discover names by tradition, religion, gender, linguistic origin, and positive traditional meanings.',
};

export default function DiscoverPage() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      <div className="text-center space-y-2 sm:space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Global Name Explorer</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Discover Names Worldwide
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          Explore personal names across traditions, religions, genders, linguistic origins, and meanings.
        </p>
      </div>

      <NameFilterGrid />
    </div>
  );
}
