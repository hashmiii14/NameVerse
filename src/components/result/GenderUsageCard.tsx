'use client';

import React from 'react';
import { NameAnalysis } from '@/types/name';
import { Users } from 'lucide-react';

interface Props {
  data: NameAnalysis;
}

export const GenderUsageCard: React.FC<Props> = ({ data }) => {
  let genderLabel: string = data.gender;
  let genderIcon = '🚻';
  let badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';

  if (data.gender.toLowerCase().includes('male')) {
    genderLabel = 'Male (लड़का / Boy)';
    genderIcon = '👦';
    badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
  } else if (data.gender.toLowerCase().includes('female')) {
    genderLabel = 'Female (लड़की / Girl)';
    genderIcon = '👧';
    badgeColor = 'bg-pink-50 text-pink-800 border-pink-200';
  } else {
    genderLabel = 'Unisex (उभयलिंग / Universal)';
    genderIcon = '🚻';
    badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  }

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
          <Users className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Gender / लिंग
          </h2>
          <p className="text-xs text-slate-500">
            Name usage and gender classification
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-base font-extrabold border ${badgeColor}`}>
          <span className="text-xl">{genderIcon}</span>
          <span>{genderLabel}</span>
        </span>
      </div>

      {data.gender_notes && (
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
          {data.gender_notes}
        </p>
      )}
    </div>
  );
};
