'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { LANGUAGES } from '@/lib/translations/index';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, langMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-emerald-500 transition-colors shadow-sm"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span className="mr-1">{langMeta.flag}</span>
        <span>{langMeta.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Output / UI Language
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left hover:bg-emerald-50 dark:hover:bg-slate-800/60 transition-colors ${
                language === lang.code ? 'font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-slate-800/40' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </div>
              <span className="text-xs text-slate-400 font-normal">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
