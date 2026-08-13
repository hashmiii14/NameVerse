'use client';

import React from 'react';
import Link from 'next/link';
import { NameAnalysis } from '@/types/name';
import { Languages } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  data: NameAnalysis;
}

export const VariantsCard: React.FC<Props> = ({ data }) => {
  if (!data.variants || data.variants.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
          <Languages className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Alternative Spellings & Transliteration Variants
          </h2>
          <p className="text-xs text-slate-400">
            Regional variations arising from script transliterations and local dialects
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.variants.map((varItem, idx) => (
          <Link
            key={idx}
            href={`/name/${slugifyName(varItem.spelling)}`}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 text-base">
                {varItem.spelling}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
                {varItem.region_or_lang}
              </span>
            </div>
            {varItem.notes && (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {varItem.notes}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
