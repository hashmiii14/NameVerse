'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, X, ArrowRight, UserCheck } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';
import { saveRecentSearch } from '@/lib/utils/storage';
import { useLanguage } from '@/lib/context/LanguageContext';
import { SEED_NAMES } from '@/lib/data/prebuiltNames';

interface SearchBarProps {
  initialValue?: string;
  large?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ initialValue = '', large = false }) => {
  const router = useRouter();
  const { t } = useLanguage();
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      const matches = Object.values(SEED_NAMES)
        .filter(n => n.name.toLowerCase().includes(q) || n.meaning.toLowerCase().includes(q))
        .map(n => n.name)
        .slice(0, 5);
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (nameToSearch?: string) => {
    const targetName = nameToSearch || query;
    if (!targetName.trim()) return;
    
    const slug = slugifyName(targetName);
    saveRecentSearch(targetName.trim(), slug);
    setShowSuggestions(false);
    router.push(`/name/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const isMultiWord = query.trim().split(/\s+/).length > 1;

  return (
    <div className="w-full max-w-3xl mx-auto relative" ref={wrapperRef}>
      <div
        className={`relative flex items-center rounded-2xl bg-white dark:bg-slate-900 border-2 transition-all shadow-xl shadow-emerald-500/5 ${
          large
            ? 'p-2 sm:p-3 border-emerald-500/40 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/20'
            : 'p-1.5 border-slate-200 dark:border-slate-800 focus-within:border-emerald-500'
        }`}
      >
        <Search className={`ml-3 shrink-0 text-slate-400 ${large ? 'w-6 h-6' : 'w-5 h-5'}`} />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length > 1 && setShowSuggestions(true)}
          placeholder={t.searchPlaceholder}
          className={`w-full bg-transparent px-3 font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none ${
            large ? 'text-base sm:text-lg' : 'text-sm'
          }`}
          aria-label="Search name"
        />

        {query && (
          <button
            onClick={() => { setQuery(''); setSuggestions([]); }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1"
            title="Clear input"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleSearch()}
          className={`flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold shadow-md transition-all active:scale-95 ${
            large ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'
          }`}
        >
          <span>{t.exploreBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Multi-word indicator banner */}
      {isMultiWord && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200/60 dark:border-emerald-900/50">
          <UserCheck className="w-4 h-4 text-emerald-600" />
          <span>Full Name Detected! We will analyze each part separately and provide a combined analysis.</span>
        </div>
      )}

      {/* Autocomplete Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in duration-150">
          <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
            Suggested Names
          </div>
          {suggestions.map((name) => (
            <button
              key={name}
              onClick={() => handleSearch(name)}
              className="w-full px-4 py-3 text-left flex items-center justify-between text-sm hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 transition-colors border-b border-slate-100 dark:border-slate-800/40 last:border-0"
            >
              <span className="font-semibold text-emerald-900 dark:text-emerald-300">{name}</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
