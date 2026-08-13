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
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:border-emerald-500 transition-colors shadow-xs"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
        <span className="text-xs">{langMeta.flag}</span>
        <span className="hidden sm:inline">{langMeta.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 sm:w-56 rounded-xl bg-white shadow-xl border border-slate-200 py-2 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Select Language
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm text-left hover:bg-emerald-50 transition-colors ${
                language === lang.code ? 'font-bold text-emerald-700 bg-emerald-50/70' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-normal">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
