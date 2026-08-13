'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Globe2, MapPin, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface Props {
  data: NameAnalysis;
}

export const RegionalUsageMap: React.FC<Props> = ({ data }) => {
  const { t } = useLanguage();
  const hasData = data.regional_usage && data.regional_usage.length > 0;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
          <Globe2 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Where is this name used?
          </h2>
          <p className="text-xs text-slate-400">
            Documented popularity and geographical usage by country or region
          </p>
        </div>
      </div>

      {!hasData ? (
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-500 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>{t.noDataPopularity}</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.regional_usage.map((reg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1"
            >
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-sm">
                <MapPin className="w-4 h-4 text-emerald-500" />
                {reg.region}
              </div>
              {reg.popularity_data && (
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {reg.popularity_data}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
