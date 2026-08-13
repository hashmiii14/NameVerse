'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { History, Calendar, MapPin } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const HistoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
          <History className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            History of the Name
          </h2>
          <p className="text-xs text-slate-400">
            Historical context and geographic development over time
          </p>
        </div>
      </div>

      {data.historical_period && (
        <div className="flex flex-wrap gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Era: {data.historical_period}</span>
          </div>

          {data.geographic_spread && data.geographic_spread.length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span>Spread: {data.geographic_spread.join(', ')}</span>
            </div>
          )}
        </div>
      )}

      <div className="text-sm leading-relaxed text-slate-600 space-y-4">
        <p>{data.history}</p>
      </div>
    </div>
  );
};
