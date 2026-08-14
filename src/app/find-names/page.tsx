'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (searchParams.get('q') !== null) setQuery(searchParams.get('q') || '');
    if (searchParams.get('gender') !== null) setGender(searchParams.get('gender') || 'All');
    if (searchParams.get('origin') !== null) setOrigin(searchParams.get('origin') || 'All');
    if (searchParams.get('religion') !== null) setReligion(searchParams.get('religion') || 'All');
    if (searchParams.get('letter') !== null) setLetter(searchParams.get('letter') || 'All');
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, gender, origin, religion, letter]);

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="space-y-1 text-center max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Name Directory &amp; Index
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600">
          Filter authentic personal names by gender, origin, religion, or starting letter.
        </p>
      </div>

      {/* Filter Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-4 sm:p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search name or meaning (e.g. Fatima, Aarav, Light)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/60 text-zinc-900 text-sm font-medium outline-none focus:border-zinc-400 focus:bg-white transition-colors"
            />
            {query && (
              <button
                onClick={() => { setQuery(''); setDebouncedQuery(''); }}
                className="absolute right-3 p-1 rounded-full text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Desktop Filter Options */}
        <div className="hidden md:grid grid-cols-4 gap-3 pt-3 border-t border-zinc-100">
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Gender</label>
            <select
              value={gender}
              onChange={e => setGender(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {GENDERS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Origin</label>
            <select
              value={origin}
              onChange={e => setOrigin(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {ORIGINS.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Culture / Religion</label>
            <select
              value={religion}
              onChange={e => setReligion(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {RELIGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Letter</label>
            <select
              value={letter}
              onChange={e => setLetter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {LETTERS.map(l => (
                <option key={l} value={l}>{l === 'All' ? 'All Letters' : l}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pt-1">
          <div>
            Showing <span className="font-bold text-zinc-900">{total.toLocaleString()}</span> names
          </div>
          {(query || gender !== 'All' || origin !== 'All' || religion !== 'All' || letter !== 'All') && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-emerald-700 font-bold hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl p-6 space-y-4 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <span className="font-bold text-base text-zinc-900">Filters</span>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-zinc-400"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Gender</label>
                <select value={gender} onChange={e => setGender(e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Origin</label>
                <select value={origin} onChange={e => setOrigin(e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {ORIGINS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Culture</label>
                <select value={religion} onChange={e => setReligion(e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Starting Letter</label>
                <select value={letter} onChange={e => setLetter(e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {LETTERS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div className="pt-2 flex gap-3">
              <button onClick={clearFilters} className="w-1/2 py-2.5 rounded-xl border border-zinc-200 text-xs font-bold">Reset</button>
              <button onClick={() => setMobileFilterOpen(false)} className="w-1/2 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold">Apply</button>
            </div>
          </div>
        </>
      )}

      {/* Grid Results */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-4 space-y-3 animate-pulse">
              <div className="h-4 bg-zinc-200 rounded w-1/2"></div>
              <div className="h-3 bg-zinc-100 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : names.length === 0 ? (
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center space-y-3">
          <p className="text-zinc-800 font-bold">No names match your specific query.</p>
          <p className="text-xs text-zinc-500">We don&apos;t have a detailed entry for that name yet. Check spelling or try a similar name.</p>
          <button onClick={clearFilters} className="px-4 py-2 bg-zinc-900 text-white font-bold text-xs rounded-xl">Clear Filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {names.map(item => (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-white border border-zinc-200 hover:border-zinc-400 rounded-2xl p-4 transition-all shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-base text-zinc-900 group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700">
                  {item.gender}
                </span>
              </div>
              <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                {item.meaning}
              </p>
              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-100">
                <span>{item.origin}</span>
                <span>{item.religion && item.religion[0] ? item.religion[0] : 'Global'}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700 disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-zinc-700 px-3">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700 disabled:opacity-40"
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
    <Suspense fallback={<div className="p-8 text-center text-zinc-500">Loading Directory...</div>}>
      <FindNamesContent />
    </Suspense>
  );
}
