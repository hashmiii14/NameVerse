'use client';

import React from 'react';
import { ConfidenceLevel, AccuracyLabel } from '@/types/name';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface ConfidenceBadgeProps {
  confidence?: ConfidenceLevel;
  academicStatus?: AccuracyLabel;
  type?: 'confidence' | 'academic';
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  confidence = 'High',
  academicStatus,
  type = 'confidence',
}) => {
  const { t } = useLanguage();

  if (type === 'academic' && academicStatus) {
    let colorClass = 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
    let label = t.wellEstablished;

    if (academicStatus === 'Likely') {
      colorClass = 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800';
      label = t.likely;
    } else if (academicStatus === 'Traditional interpretation') {
      colorClass = 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      label = t.traditionalInterpretation;
    } else if (academicStatus === 'Uncertain / disputed') {
      colorClass = 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      label = t.uncertainDisputed;
    }

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${colorClass}`}>
        <ShieldCheck className="w-3.5 h-3.5" />
        {label}
      </span>
    );
  }

  // Default Confidence badge
  let bg = 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
  let icon = <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
  let label = t.confidenceHigh;

  if (confidence === 'Medium') {
    bg = 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30';
    icon = <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />;
    label = t.confidenceMedium;
  } else if (confidence === 'Low') {
    bg = 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30';
    icon = <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />;
    label = t.confidenceLow;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${bg}`}>
      {icon}
      {label}
    </span>
  );
};
