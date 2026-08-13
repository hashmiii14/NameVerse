'use client';

import React from 'react';
import Link from 'next/link';
import { NameAnalysis } from '@/types/name';
import { Network } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  data: NameAnalysis;
}

export const RelatedNamesCard: React.FC<Props> = ({ data }) => {
  if (!data.related_names || data.related_names.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
          <Network className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Related Names
          </h2>
          <p className="text-xs text-slate-400">
            Names sharing linguistic roots, gender forms, or cross-cultural equivalents
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {data.related_names.map((rel, idx) => (
          <Link
            key={idx}
            href={`/name/${slugifyName(rel.name)}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/30 transition-all group"
          >
            <span className="font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 text-sm">
              {rel.name}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
              {rel.relation_type}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
