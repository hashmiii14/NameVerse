'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Compass } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';

const POPULAR_EXAMPLES = [
  'Muhammad',
  'Hashmi',
  'Muhammad Hashmi',
  'Aarav',
  'Aadhya',
  'Mary',
  'John',
  'David',
  'Fatima',
  'Sophia',
  'Arjun',
  'Alexander'
];

export const QuickFilters: React.FC = () => {
  return (
    <div className="mt-6 space-y-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          Popular Searches:
        </span>
        {POPULAR_EXAMPLES.map((name) => (
          <Link
            key={name}
            href={`/name/${slugifyName(name)}`}
            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-slate-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="pt-2 flex justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
        <Link href="/discover" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400">
          <Compass className="w-4 h-4 text-emerald-500" />
          <span>Explore by Tradition & Culture</span>
        </Link>
      </div>
    </div>
  );
};
