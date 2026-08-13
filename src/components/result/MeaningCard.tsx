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
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Meaning & Etymology
            </h2>
            <p className="text-xs text-slate-400">
              Linguistic root words, literal translation, and language roots
            </p>
          </div>
        </div>

        <ConfidenceBadge academicStatus={data.academic_status} type="academic" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Literal Meaning Card */}
        <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Literal Meaning & Translation
          </div>
          <p className="text-lg font-bold text-slate-900">
            &ldquo;{data.meaning}&rdquo;
          </p>
          {data.root_word && (
            <p className="text-xs text-slate-600 font-mono">
              Root Word / Script: <span className="font-bold text-slate-800">{data.root_word}</span>
            </p>
          )}
        </div>

        {/* Linguistic Root Card */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-teal-600" />
            Language of Origin
          </div>
          <p className="text-base font-bold text-slate-900">
            {data.origin} ({data.languages.join(', ') || data.origin})
          </p>
          <p className="text-xs text-slate-500">
            Recorded in classical dictionaries and etymological archives.
          </p>
        </div>
      </div>

      {/* Etymological Narrative */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-slate-900">
          Linguistic Development
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {data.etymology}
        </p>
      </div>
    </div>
  );
};
