'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, Loader2 } from 'lucide-react';
import { SearchIndexItem, NameRecord } from '@/types/name';

interface SearchBarProps {
  initialValue?: string;
  large?: boolean;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = '',
  large = false,
  placeholder = 'Search your name (e.g. Rahul Kumar, Aisha, Aarav)...'
}) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<SearchIndexItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const q = query.trim();

    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(q)}&limit=6`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.results && data.results.length > 0) {
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
            setShowSuggestions(true);
          } else {
            setSuggestions([]);
            setShowSuggestions(false);
          }
        })
        .catch(err => {
          console.error("Search API error:", err);
          setSuggestions([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 150);

    return () => clearTimeout(timer);
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

  const handleSearch = (targetSlug?: string, targetName?: string) => {
    const raw = targetName || query;
    if (!raw.trim()) return;

    setShowSuggestions(false);
    
    if (targetSlug) {
      router.push(`/name/${targetSlug}`);
    } else {
      const qClean = raw.trim();
      const slugCandidate = qClean.toLowerCase().replace(/[\s\W-]+/g, '-');
      
      // If exact single-word or hyphenated slug, check or navigate directly to search directory
      router.push(`/find-names?q=${encodeURIComponent(qClean)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative" ref={wrapperRef}>
      <div
        className={`relative flex items-center rounded-2xl bg-white border border-zinc-200 transition-all shadow-xs ${
          large
            ? 'p-2 sm:p-2.5 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/10'
            : 'p-1.5 focus-within:border-emerald-600'
        }`}
      >
        <Search className={`ml-3 shrink-0 text-zinc-400 ${large ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4'}`} />

        <input
          type="text"
          value={query}
          onFocus={() => query.trim() && suggestions.length > 0 && setShowSuggestions(true)}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full bg-transparent px-3 font-medium text-zinc-900 placeholder-zinc-400 outline-none ${
            large ? 'text-base sm:text-lg py-1.5 sm:py-2' : 'text-sm py-1'
          }`}
          aria-label="Search name"
        />

        {loading && (
          <Loader2 className="w-4 h-4 text-emerald-600 animate-spin mr-2 shrink-0" />
        )}

        {query && !loading && (
          <button
            onClick={() => { setQuery(''); setSuggestions([]); }}
            className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 mr-1 shrink-0"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleSearch()}
          className={`flex items-center gap-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all shrink-0 ${
            large ? 'px-5 py-2.5 sm:py-3 text-sm sm:text-base' : 'px-3.5 py-1.5 text-xs'
          }`}
        >
          <span>Search</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Autocomplete Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden z-50 divide-y divide-zinc-100">
          {suggestions.map((item) => (
            <button
              key={item.s}
              onClick={() => handleSearch(item.s, item.n)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors text-zinc-800"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-zinc-900 text-base">{item.n}</span>
                <span className="text-xs text-zinc-400 font-medium">· {item.o}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                {item.g}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
