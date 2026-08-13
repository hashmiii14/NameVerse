'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  currentName: string;
  origin?: string;
}

const SUGGESTED_NAMES = ['Muhammad', 'Mary', 'Aarav', 'Fatima', 'Sophia', 'Arjun', 'John', 'Aadhya', 'Hashmi', 'David'];

export const RelatedSearches: React.FC<Props> = ({ currentName }) => {
  const filtered = SUGGESTED_NAMES.filter(n => n.toLowerCase() !== currentName.toLowerCase()).slice(0, 6);

  return (
    <div className="rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 text-center">
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-emerald-500" />
        Explore Related Searches
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {filtered.map((name) => (
          <Link
            key={name}
            href={`/name/${slugifyName(name)}`}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all hover:scale-105 shadow-sm"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
