'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { History, Calendar, MapPin } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const HistoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <History className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            History of the Name
          </h2>
          <p className="text-xs text-slate-400">
            Historical era, origins, and geographic spread over time
          </p>
        </div>
      </div>

      {data.historical_period && (
        <div className="flex flex-wrap gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/60">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span>Era: {data.historical_period}</span>
          </div>

          {data.geographic_spread && data.geographic_spread.length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-900/60">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>Spread: {data.geographic_spread.join(', ')}</span>
            </div>
          )}
        </div>
      )}

      <div className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 space-y-4">
        <p>{data.history}</p>
      </div>
    </div>
  );
};
