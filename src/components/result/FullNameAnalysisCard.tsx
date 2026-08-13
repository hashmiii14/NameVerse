'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  data: NameAnalysis;
}

export const FullNameAnalysisCard: React.FC<Props> = ({ data }) => {
  if (!data.is_full_name || !data.components || data.components.length === 0) return null;

  return (
    <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">
            Full-Name Component Breakdown
          </h2>
          <p className="text-xs text-emerald-300">
            Separate analysis of given name, middle name, surname/title, and combined synthesis
          </p>
        </div>
      </div>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.components.map((comp, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-emerald-400 tracking-wider">
                {comp.role}
              </span>
              <Link
                href={`/name/${slugifyName(comp.name)}`}
                className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                Analyze '{comp.name}' →
              </Link>
            </div>

            <h3 className="text-lg font-bold text-white">
              {comp.name}
            </h3>

            <div className="text-xs space-y-1 text-slate-300">
              <p><strong className="text-white">Origin:</strong> {comp.origin}</p>
              <p><strong className="text-white">Meaning:</strong> {comp.meaning}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Combined Analysis */}
      {data.combined_analysis && (
        <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Combined Full-Name Synthesis
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {data.combined_analysis}
          </p>
        </div>
      )}
    </div>
  );
};
