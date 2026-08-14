'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight, Filter, SlidersHorizontal, Sparkles } from 'lucide-react';
import { NameRecord } from '@/types/name';

const GENDERS = ['All', 'Female', 'Male', 'Unisex'];
const ORIGINS = ['All', 'Arabic', 'Urdu', 'Persian', 'Sanskrit', 'Turkish', 'Hebrew', 'European', 'Swahili'];
const RELIGIONS = ['All', 'Muslim', 'Hindu', 'Christian', 'Sikh', 'Jewish', 'Global'];
const LETTERS = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

function FindNamesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('q') || '';
  const initialGender = searchParams.get('gender') || 'All';
  const initialOrigin = searchParams.get('origin') || 'All';
  const initialReligion = searchParams.get('religion') || 'All';
  const initialLetter = searchParams.get('letter') || 'All';

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [gender, setGender] = useState(initialGender);
  const [origin, setOrigin] = useState(initialOrigin);
  const [religion, setReligion] = useState(initialReligion);
  const [letter, setLetter] = useState(initialLetter);

  const [names, setNames] = useState<NameRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const pageSize = 36;

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  // Sync params with URL state
  useEffect(() => {
    if (searchParams.get('q') !== null) setQuery(searchParams.get('q') || '');
    if (searchParams.get('gender') !== null) setGender(searchParams.get('gender') || 'All');
    if (searchParams.get('origin') !== null) setOrigin(searchParams.get('origin') || 'All');
    if (searchParams.get('religion') !== null) setReligion(searchParams.get('religion') || 'All');
    if (searchParams.get('letter') !== null) setLetter(searchParams.get('letter') || 'All');
  }, [searchParams]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, gender, origin, religion, letter]);

  // Fetch results from server API
  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const offset = (page - 1) * pageSize;
      const params = new URLSearchParams();
      if (debouncedQuery.trim()) params.set('q', debouncedQuery.trim());
      if (gender !== 'All') params.set('gender', gender);
      if (origin !== 'All') params.set('origin', origin);
      if (religion !== 'All') params.set('religion', religion);
      if (letter !== 'All') params.set('letter', letter);
      params.set('limit', pageSize.toString());
      params.set('offset', offset.toString());

      const res = await fetch(`/api/search?${params.toString()}`);
      const data = await res.json();

      if (data.success) {
        setNames(data.results || []);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error('Failed to fetch search results:', err);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery, gender, origin, religion, letter, page, pageSize]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const totalPages = Math.ceil(total / pageSize) || 1;

  const clearFilters = () => {
    setQuery('');
    setDebouncedQuery('');
    setGender('All');
    setOrigin('All');
    setReligion('All');
    setLetter('All');
    setPage(1);
    router.push('/find-names');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Find Names Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Search and filter authentic personal names by gender, origin, religion, language, or letter.
        </p>
      </div>

      {/* Main Search Input & Mobile Filter Toggle */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name or keyword (e.g. Fatima, Aisha, Light, Peace)..."
              className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm font-medium outline-none focus:border-emerald-500 focus:bg-white transition-colors"
            />
            {query && (
              <button
                onClick={() => { setQuery(''); setDebouncedQuery(''); }}
                className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-1.5 px-3.5 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Desktop Filter Panel */}
        <div className="hidden md:grid grid-cols-4 gap-3 pt-3 border-t border-slate-100">
          
          {/* Gender */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Gender
            </label>
            <select
              value={gender}
              onChange={e => setGender(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {GENDERS.map(g => (
                <option key={g} value={g}>{g === 'Female' ? 'Girl' : g === 'Male' ? 'Boy' : g}</option>
              ))}
            </select>
          </div>

          {/* Origin */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Origin
            </label>
            <select
              value={origin}
              onChange={e => setOrigin(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {ORIGINS.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Religion / Culture */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Religion / Tradition
            </label>
            <select
              value={religion}
              onChange={e => setReligion(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {RELIGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Letter */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Starting Letter
            </label>
            <select
              value={letter}
              onChange={e => setLetter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {LETTERS.map(l => (
                <option key={l} value={l}>{l === 'All' ? 'All Letters' : l}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
          <div>
            Found <span className="font-bold text-slate-900">{total.toLocaleString()}</span> matching names
          </div>
          {(query || gender !== 'All' || origin !== 'All' || religion !== 'All' || letter !== 'All') && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-emerald-600 font-bold hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl p-6 space-y-5 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-black text-lg text-slate-900">Filter Names</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">Gender</label>
                <select
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold"
                >
                  {GENDERS.map(g => (
                    <option key={g} value={g}>{g === 'Female' ? 'Girl' : g === 'Male' ? 'Boy' : g}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">Origin</label>
                <select
                  value={origin}
                  onChange={e => setOrigin(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold"
                >
                  {ORIGINS.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">Religion / Tradition</label>
                <select
                  value={religion}
                  onChange={e => setReligion(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold"
                >
                  {RELIGIONS.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">Starting Letter</label>
                <select
                  value={letter}
                  onChange={e => setLetter(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold"
                >
                  {LETTERS.map(l => (
                    <option key={l} value={l}>{l === 'All' ? 'All Letters' : l}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={clearFilters}
                className="w-1/2 py-3 rounded-xl border border-slate-200 font-bold text-xs text-slate-700"
              >
                Reset All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-1/2 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}

      {/* Results Grid / Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 animate-pulse">
              <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
              <div className="h-3 bg-slate-100 rounded-md w-full"></div>
              <div className="h-3 bg-slate-100 rounded-md w-3/4"></div>
            </div>
          ))}
        </div>
      ) : names.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 text-center space-y-4">
          <p className="text-slate-800 font-bold text-lg">No matching names found.</p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try clearing specific filter options or explore popular categories below.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Clear All Filters
            </button>
            <Link
              href="/muslim-girl-names"
              className="px-4 py-2 bg-rose-50 text-rose-700 border border-rose-200 font-bold text-xs rounded-xl hover:bg-rose-100"
            >
              Explore Muslim Girl Names
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {names.map(item => (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-4 transition-all shadow-2xs hover:shadow-md space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-black text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  item.gender === 'Male' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                  item.gender === 'Female' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {item.gender}
                </span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                <span>{item.origin} Origin</span>
                <span className="font-medium text-slate-600">{item.religion && item.religion[0] ? item.religion[0] : 'Cultural'}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-slate-700 px-3">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}

export default function FindNamesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading Find Names Engine...</div>}>
      <FindNamesContent />
    </Suspense>
  );
}
