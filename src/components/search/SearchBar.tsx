'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight } from 'lucide-react';
import { SearchIndexItem, NameRecord } from '@/types/name';

interface SearchBarProps {
  initialValue?: string;
  large?: boolean;
}

let cachedIndex: SearchIndexItem[] | null = null;

export const SearchBar: React.FC<SearchBarProps> = ({ initialValue = '', large = false }) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<SearchIndexItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const q = query.toLowerCase().trim();

    if (cachedIndex) {
      const matches = cachedIndex
        .filter(item => item.n.toLowerCase().includes(q) || item.s.includes(q))
        .slice(0, 6);
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      // Fast fallback to /api/search
      const timer = setTimeout(() => {
        fetch(`/api/search?q=${encodeURIComponent(q)}&limit=6`)
          .then(res => res.json())
          .then(data => {
            if (data.success && data.results) {
              const formatted: SearchIndexItem[] = data.results.map((item: NameRecord) => ({
                n: item.name,
                s: item.slug,
                g: item.gender,
                o: item.origin,
                r: item.religion,
                l: item.language,
                t: item.nameType,
                m: item.shortMeaning || item.meaning
              }));
              setSuggestions(formatted);
              setShowSuggestions(formatted.length > 0);
            }
          })
          .catch(() => {});
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [query]);

  // Pre-fetch search index lazily in background
  const handleFocus = () => {
    if (!cachedIndex) {
      fetch('/search-index.json')
        .then(res => res.json())
        .then(data => {
          cachedIndex = data;
        })
        .catch(() => {});
    }
    if (query.trim()) setShowSuggestions(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (targetSlug?: string, targetName?: string) => {
    const raw = targetName || query;
    if (!raw.trim()) return;

    setShowSuggestions(false);
    const slug = targetSlug || raw.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
    router.push(`/name/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative" ref={wrapperRef}>
      <div
        className={`relative flex items-center rounded-2xl bg-white border-2 transition-all shadow-sm ${
          large
            ? 'p-1.5 sm:p-2 border-emerald-500 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/10'
            : 'p-1 sm:p-1.5 border-slate-200 focus-within:border-emerald-500'
        }`}
      >
        <Search className={`ml-2 sm:ml-3 shrink-0 text-slate-400 ${large ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />

        <input
          type="text"
          value={query}
          onFocus={handleFocus}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={large ? 'Search any name or surname (e.g., Hashmi, Aarav, Fatima, John)...' : 'Search any name...'}
          className={`w-full bg-transparent px-2 sm:px-3 font-medium text-slate-900 placeholder-slate-400 outline-none ${
            large ? 'text-sm sm:text-base md:text-lg py-2' : 'text-sm py-1.5'
          }`}
          aria-label="Search name or surname"
        />

        {query && (
          <button
            onClick={() => { setQuery(''); setSuggestions([]); }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 mr-1 shrink-0"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleSearch()}
          className={`flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shrink-0 ${
            large ? 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base' : 'px-3 sm:px-4 py-2 text-xs sm:text-sm'
          }`}
        >
          <span>Search</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Autocomplete Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
            Matching Names & Surnames
          </div>
          {suggestions.map((item) => (
            <button
              key={item.s}
              onClick={() => handleSearch(item.s, item.n)}
              className="w-full px-4 py-2.5 text-left flex items-center justify-between text-sm hover:bg-emerald-50 text-slate-800 transition-colors border-b border-slate-100 last:border-0"
            >
              <div>
                <span className="font-bold text-slate-900">{item.n}</span>
                <span className="ml-2 text-xs text-slate-500">({item.o})</span>
              </div>
              <span className="text-xs text-slate-400 truncate max-w-[200px]">{item.t || item.m}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
