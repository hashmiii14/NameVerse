'use client';

import React from 'react';
import Link from 'next/link';
import { slugifyName } from '@/lib/utils/slugify';

const ASIAN_POPULAR_TAGS = [
  'Aarav',
  'Muhammad',
  'Aadhya',
  'Arjun',
  'Ananya',
  'Fatima',
  'Harpreet',
  'Vivaan',
  'Ishaan',
  'Zoya',
  'Hashmi'
];

export const QuickFilters: React.FC = () => {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
      <span className="font-semibold text-slate-400">Trending Indian & Asian Names:</span>
      {ASIAN_POPULAR_TAGS.map((name) => (
        <Link
          key={name}
          href={`/name/${slugifyName(name)}`}
          className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-slate-700 dark:hover:text-emerald-300 font-medium transition-colors"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
