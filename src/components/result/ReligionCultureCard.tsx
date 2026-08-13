'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Landmark, HeartHandshake } from 'lucide-react';
import { DisclaimerBanner } from '../ui/DisclaimerBanner';

interface Props {
  data: NameAnalysis;
}

export const ReligionCultureCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
          <Landmark className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Religion & Cultural Connection
          </h2>
          <p className="text-xs text-slate-400">
            Neutral, respectful etymological and cultural background
          </p>
        </div>
      </div>

      {/* Neutrality Disclaimer */}
      <DisclaimerBanner />

      {/* Religious Associations List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-purple-500" />
          Documented Traditions & Strength of Association
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.religious_associations.map((assoc, idx) => {
            let badgeBg = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
            if (assoc.strength === 'Shared') badgeBg = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
            if (assoc.strength === 'Historical') badgeBg = 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300';

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {assoc.religion}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${badgeBg}`}>
                    {assoc.strength} Association
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {assoc.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cultural Associations */}
      {data.cultural_associations && data.cultural_associations.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Cultural Contexts
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.cultural_associations.map((cult, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {cult}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
