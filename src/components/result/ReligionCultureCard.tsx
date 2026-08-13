'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Landmark, HeartHandshake } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const ReligionCultureCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
          <Landmark className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Religion & Cultural Usage
          </h2>
          <p className="text-xs text-slate-500">
            Religious traditions and cultural background across India & Asia
          </p>
        </div>
      </div>

      {/* Religious Associations List */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-purple-600" />
          Documented Traditions (Hindu, Muslim, Sikh, Christian, Jain, Buddhist)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.religious_associations.map((assoc, idx) => {
            let badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
            if (assoc.strength === 'Shared') badgeBg = 'bg-blue-50 text-blue-800 border-blue-200';
            if (assoc.strength === 'Historical') badgeBg = 'bg-purple-50 text-purple-800 border-purple-200';

            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    {assoc.religion}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${badgeBg}`}>
                    {assoc.strength}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {assoc.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cultural Contexts */}
      {data.cultural_associations && data.cultural_associations.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Cultural Contexts
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.cultural_associations.map((cult, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
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
