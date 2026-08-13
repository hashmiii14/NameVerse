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
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
          <Languages className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Alternative Spellings & Transliterations
          </h2>
          <p className="text-xs text-slate-400">
            Spelling variants across Indian languages and transliterated scripts
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.variants.map((varItem, idx) => (
          <Link
            key={idx}
            href={`/name/${slugifyName(varItem.spelling)}`}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 group-hover:text-teal-600 text-base">
                {varItem.spelling}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono">
                {varItem.region_or_lang}
              </span>
            </div>
            {varItem.notes && (
              <p className="mt-1 text-xs text-slate-500">
                {varItem.notes}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
