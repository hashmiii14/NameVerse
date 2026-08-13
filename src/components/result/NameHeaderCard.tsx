'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { ConfidenceBadge } from '../ui/ConfidenceBadge';
import { FavoriteButton } from '../ui/FavoriteButton';
import { Globe, User, BookOpen, Volume2 } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';

interface Props {
  data: NameAnalysis;
}

export const NameHeaderCard: React.FC<Props> = ({ data }) => {
  const slug = slugifyName(data.name);

  return (
    <div className="w-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {data.name}
            </h1>
            <ConfidenceBadge confidence={data.confidence} />
            <ConfidenceBadge academicStatus={data.academic_status} type="academic" />
          </div>

          <p className="mt-2 text-base sm:text-lg font-medium text-emerald-600 dark:text-emerald-400">
            {data.meaning}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <FavoriteButton name={data.name} slug={slug} />
        </div>
      </div>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <User className="w-4 h-4 text-emerald-500" />
            Gender
          </div>
          <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            {data.gender}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4 text-teal-500" />
            Origin
          </div>
          <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            {data.origin}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4 text-cyan-500" />
            Primary Language
          </div>
          <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            {data.languages.join(', ') || data.origin}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <Volume2 className="w-4 h-4 text-indigo-500" />
            Pronunciation
          </div>
          <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            {data.pronunciation?.simple || data.name}
          </p>
        </div>
      </div>
    </div>
  );
};
