import React from 'react';
import { Metadata } from 'next';
import { NameFilterGrid } from '@/components/discover/NameFilterGrid';
import { Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find & Discover Names Worldwide | NameVerse AI',
  description: 'Filter and discover names by tradition, religion, gender, linguistic origin, and positive traditional meanings.',
};

export default function DiscoverPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-semibold border border-cyan-300 dark:border-cyan-800">
          <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>Global Name Explorer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Discover Names Worldwide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Explore personal names across traditions, religions, genders, linguistic origins, and positive traditional meanings.
        </p>
      </div>

      <NameFilterGrid />
    </div>
  );
}
