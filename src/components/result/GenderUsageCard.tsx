'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Users, Info } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const GenderUsageCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Gender Usage
          </h2>
          <p className="text-xs text-slate-400">
            Traditional and cross-cultural gender conventions
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-4 py-2 rounded-xl bg-pink-500/10 text-pink-700 dark:text-pink-300 border border-pink-500/30 text-sm font-bold">
          Primary Usage: {data.gender}
        </span>
      </div>

      {data.gender_notes && (
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
          <p>{data.gender_notes}</p>
        </div>
      )}
    </div>
  );
};
