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
        className={`relative flex items-center rounded-2xl bg-white border-2 transition-all shadow-lg shadow-slate-200/50 ${
          large
            ? 'p-1.5 sm:p-2 border-emerald-400 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/15'
            : 'p-1 sm:p-1.5 border-slate-200 focus-within:border-emerald-500'
        }`}
      >
        <Search className={`ml-2 sm:ml-3 shrink-0 text-slate-400 ${large ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length > 1 && setShowSuggestions(true)}
          placeholder={large ? 'Enter any name...' : t.searchPlaceholder}
          className={`w-full bg-transparent px-2 sm:px-3 font-medium text-slate-900 placeholder-slate-400 outline-none ${
            large ? 'text-sm sm:text-base md:text-lg py-2 sm:py-2.5' : 'text-sm py-1.5'
          }`}
          aria-label="Search name"
        />

        {query && (
          <button
            onClick={() => { setQuery(''); setSuggestions([]); }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 mr-0.5 sm:mr-1 shrink-0"
            title="Clear"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleSearch()}
          className={`flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-sm transition-all active:scale-95 shrink-0 ${
            large ? 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base' : 'px-3 sm:px-4 py-2 text-xs sm:text-sm'
          }`}
        >
          <span className="hidden sm:inline">{t.exploreBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Multi-word indicator */}
      {isMultiWord && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60">
          <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Full Name Detected — each part will be analyzed separately.</span>
        </div>
      )}

      {/* Autocomplete Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
          <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
            Suggestions
          </div>
          {suggestions.map((name) => (
            <button
              key={name}
              onClick={() => handleSearch(name)}
              className="w-full px-4 py-3 text-left flex items-center justify-between text-sm hover:bg-emerald-50 text-slate-800 transition-colors border-b border-slate-100 last:border-0"
            >
              <span className="font-semibold text-slate-900">{name}</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 opacity-60 shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
