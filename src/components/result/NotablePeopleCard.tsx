'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Award, UserCheck } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const NotablePeopleCard: React.FC<Props> = ({ data }) => {
  if (!data.notable_people || data.notable_people.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Notable People With This Name
          </h2>
          <p className="text-xs text-slate-400">
            Historically or culturally significant figures
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.notable_people.map((person, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-500" />
                {person.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-medium">
                {person.region}
              </span>
            </div>

            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {person.role}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {person.why_notable}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
