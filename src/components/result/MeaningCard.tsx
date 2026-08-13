'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { BookMarked, Sparkles, Layers } from 'lucide-react';
import { ConfidenceBadge } from '../ui/ConfidenceBadge';

interface Props {
  data: NameAnalysis;
}

export const MeaningCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Meaning & Etymology
            </h2>
            <p className="text-xs text-slate-400">
              Linguistic root words, literal translation, and academic status
            </p>
          </div>
        </div>

        <ConfidenceBadge academicStatus={data.academic_status} type="academic" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Literal Meaning Card */}
        <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/40 border border-emerald-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            Literal Meaning & Translation
          </div>
          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
            "{data.meaning}"
          </p>
          {data.root_word && (
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Root Word / Script: <span className="font-semibold text-slate-700 dark:text-slate-200">{data.root_word}</span>
            </p>
          )}
        </div>

        {/* Linguistic Root Card */}
        <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-slate-800/40 border border-teal-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-teal-500" />
            Language of Origin
          </div>
          <p className="text-base font-semibold text-slate-900 dark:text-white">
            {data.origin} ({data.languages.join(', ') || data.origin})
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Recorded in standard etymological lexicons and onomastic databases.
          </p>
        </div>
      </div>

      {/* Etymological Narrative */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Linguistic Evolution & Development
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {data.etymology}
        </p>
      </div>
    </div>
  );
};
