'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface DisclaimerProps {
  customText?: string;
  className?: string;
}

export const DisclaimerBanner: React.FC<DisclaimerProps> = ({ customText, className = '' }) => {
  const { t } = useLanguage();

  return (
    <div className={`rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3 ${className}`}>
      <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-amber-950 dark:text-amber-100 mb-1">
          {t.disclaimerTitle}
        </h4>
        <p>
          {customText || t.disclaimerText}
        </p>
      </div>
    </div>
  );
};
