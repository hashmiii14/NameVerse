'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { ShieldCheck, BookOpen, AlertTriangle } from 'lucide-react';
import { ConfidenceBadge } from '../ui/ConfidenceBadge';

interface Props {
  data: NameAnalysis;
}

export const SourceConfidenceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Source & Confidence System
            </h2>
            <p className="text-xs text-slate-400">
              Academic dictionaries, historical references, and etymological confidence
            </p>
          </div>
        </div>

        <ConfidenceBadge confidence={data.confidence} />
      </div>

      {/* Sources List */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
          Trustworthy Sources & Lexicons
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data.sources.map((src, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                {src.title}
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
                {src.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Uncertainties & Caveats */}
      {data.uncertainties && data.uncertainties.length > 0 && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-200 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-rose-950 dark:text-rose-100">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            Etymological Caveats & Academic Uncertainties
          </div>
          <ul className="list-disc list-inside space-y-1">
            {data.uncertainties.map((unc, idx) => (
              <li key={idx}>{unc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
