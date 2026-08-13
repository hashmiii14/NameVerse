'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Layers, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  data: NameAnalysis;
}

export const FullNameAnalysisCard: React.FC<Props> = ({ data }) => {
  if (!data.is_full_name || !data.components || data.components.length === 0) return null;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-8 shadow-2xl space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Full-Name Component Breakdown
          </h2>
          <p className="text-xs text-emerald-300">
            Separate analysis of given name, middle name, surname/nisba, and combined synthesis
          </p>
        </div>
      </div>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.components.map((comp, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm"
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
        <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Combined Full-Name Synthesis
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {data.combined_analysis}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Note: Surnames, nisbas, or titles do not automatically prove direct genealogical descent, caste, or specific personal beliefs.</span>
          </div>
        </div>
      )}
    </div>
  );
};
