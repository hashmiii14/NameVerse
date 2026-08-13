'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { ShieldCheck, BookOpen } from 'lucide-react';
import { ConfidenceBadge } from '../ui/ConfidenceBadge';

interface Props {
  data: NameAnalysis;
}

export const SourceConfidenceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Sources & Onomastic References
            </h2>
            <p className="text-xs text-slate-500">
              Verified dictionaries, classical lexicons, and historical records
            </p>
          </div>
        </div>

        <ConfidenceBadge confidence={data.confidence} />
      </div>

      {/* Sources List */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
          Dictionaries & References
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data.sources.map((src, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                {src.title}
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                {src.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
