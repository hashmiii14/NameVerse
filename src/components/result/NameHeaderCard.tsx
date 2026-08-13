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

  let genderBadge = '👦 Male (लड़का)';
  let genderColor = 'text-blue-700 bg-blue-50 border-blue-200';
  if (data.gender.toLowerCase().includes('female')) {
    genderBadge = '👧 Female (लड़की)';
    genderColor = 'text-pink-700 bg-pink-50 border-pink-200';
  }
  if (data.gender.toLowerCase().includes('unisex')) {
    genderBadge = '🚻 Unisex';
    genderColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  }

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 md:p-8 shadow-sm space-y-5">
      
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-5">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 break-words">
              {data.name}
            </h1>
            <ConfidenceBadge confidence={data.confidence} />
          </div>

          <p className="text-base sm:text-lg md:text-xl font-bold text-emerald-700 break-words">
            &ldquo;{data.meaning}&rdquo;
          </p>

          {/* Gender Badge - prominent on mobile */}
          <div className="pt-1">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-extrabold border ${genderColor}`}>
              {genderBadge}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <FavoriteButton name={data.name} slug={slug} />
        </div>
      </div>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">Gender</span>
          </div>
          <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
            {data.gender}
          </p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="truncate">Origin</span>
          </div>
          <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
            {data.origin}
          </p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span className="truncate">Language</span>
          </div>
          <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
            {data.languages.slice(0, 2).join(', ') || data.origin}
          </p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Volume2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate">Say it</span>
          </div>
          <p className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
            {data.pronunciation?.simple || data.name}
          </p>
        </div>
      </div>
    </div>
  );
};
