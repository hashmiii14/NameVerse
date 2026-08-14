'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight, SlidersHorizontal, Info, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { NameRecord } from '@/types/name';

const GENDERS = ['All', 'Female', 'Male', 'Unisex'];
const ORIGINS = ['All', 'Arabic', 'Urdu', 'Persian', 'Hindi', 'Sanskrit', 'Punjabi', 'Bengali', 'Turkish', 'Hebrew', 'English'];
const RELIGIONS = ['All', 'Muslim', 'Hindu', 'Christian', 'Sikh', 'Jewish', 'Buddhist', 'Global'];
const COMMUNITIES = ['All', 'Syed', 'Sheikh', 'Ansari', 'Khan', 'Pathan', 'Brahmin', 'Rajput'];
const LETTERS = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

function FindNamesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('q') || '';
  const initialGender = searchParams.get('gender') || 'All';
  const initialOrigin = searchParams.get('origin') || 'All';
  const initialReligion = searchParams.get('religion') || 'All';
  const initialCommunity = searchParams.get('community') || 'All';
  const initialLetter = searchParams.get('letter') || 'All';
  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [gender, setGender] = useState(initialGender);
  const [origin, setOrigin] = useState(initialOrigin);
  const [religion, setReligion] = useState(initialReligion);
  const [community, setCommunity] = useState(initialCommunity);
  const [letter, setLetter] = useState(initialLetter);

  const [names, setNames] = useState<NameRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const [page, setPage] = useState(initialPage);
  const pageSize = 48;

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (searchParams.get('q') !== null) setQuery(searchParams.get('q') || '');
    if (searchParams.get('gender') !== null) setGender(searchParams.get('gender') || 'All');
    if (searchParams.get('origin') !== null) setOrigin(searchParams.get('origin') || 'All');
    if (searchParams.get('religion') !== null) setReligion(searchParams.get('religion') || 'All');
    if (searchParams.get('community') !== null) setCommunity(searchParams.get('community') || 'All');
    if (searchParams.get('letter') !== null) setLetter(searchParams.get('letter') || 'All');
  }, [searchParams]);

  const handleFilterChange = (setter: (val: string) => void, value: string) => {
    setter(value);
    setPage(1);
  };

  const fetchResults = useCallback(async () => {
    setIsFetching(true);
    try {
      const offset = (page - 1) * pageSize;
      const params = new URLSearchParams();
      if (debouncedQuery.trim()) params.set('q', debouncedQuery.trim());
      if (gender !== 'All') params.set('gender', gender);
      if (origin !== 'All') params.set('origin', origin);
      if (religion !== 'All') params.set('religion', religion);
      if (community !== 'All') params.set('community', community);
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
      setIsFetching(false);
    }
  }, [debouncedQuery, gender, origin, religion, community, letter, page, pageSize]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const clearFilters = () => {
    setQuery('');
    setDebouncedQuery('');
    setGender('All');
    setOrigin('All');
    setReligion('All');
    setCommunity('All');
    setLetter('All');
    setPage(1);
    router.push('/find-names');
  };

  // Extract top similar names row if searching
  const similarItems = (debouncedQuery && names.length > 1) ? names.slice(1, 9) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="space-y-1 text-center max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Find Names Directory
        </h1>
        <p className="text-xs sm:text-sm text-zinc-600">
          Search over 104,000+ authentic personal names by gender, origin, culture, community metadata, or letter.
        </p>
      </div>

      {/* Main Filter & Search Control Panel */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-4 sm:p-6 shadow-2xs space-y-4">
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search name or meaning (e.g. Fatima, Aarav, Rahul)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/60 text-zinc-900 text-sm font-medium outline-none focus:border-zinc-400 focus:bg-white transition-colors"
            />
            {query ? (
              <button
                onClick={() => { setQuery(''); setDebouncedQuery(''); setPage(1); }}
                className="absolute right-3 p-1 rounded-full text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-4 h-4" />
              </button>
            ) : isFetching ? (
              <Loader2 className="absolute right-3.5 w-4 h-4 text-emerald-600 animate-spin" />
            ) : null}
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
              onChange={e => handleFilterChange(setGender, e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {GENDERS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Origin / Language</label>
            <select
              value={origin}
              onChange={e => handleFilterChange(setOrigin, e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {ORIGINS.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Cultural Usage</label>
            <select
              value={religion}
              onChange={e => handleFilterChange(setReligion, e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {RELIGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Community Usage</label>
            <select
              value={community}
              onChange={e => handleFilterChange(setCommunity, e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-800 text-xs font-semibold outline-none focus:border-zinc-400"
            >
              {COMMUNITIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Community Note Notice */}
        {community !== 'All' && (
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/60">
            <Info className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>Community metadata indicates documented historical usage, not automatic individual assignment.</span>
          </div>
        )}

        {/* Alphabet Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1 pt-2 border-t border-zinc-100">
          {LETTERS.map(char => {
            const active = letter === char;
            return (
              <button
                key={char}
                onClick={() => handleFilterChange(setLetter, char)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-extrabold text-xs transition-all ${
                  active
                    ? 'bg-zinc-900 text-white shadow-2xs'
                    : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700'
                }`}
              >
                {char}
              </button>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pt-1">
          <div className="flex items-center gap-2">
            <span>Showing <span className="font-bold text-zinc-900">{total.toLocaleString()}</span> documented names</span>
            {isFetching && <Loader2 className="w-3.5 h-3.5 text-emerald-600 animate-spin" />}
          </div>
          {(query || gender !== 'All' || origin !== 'All' || religion !== 'All' || community !== 'All' || letter !== 'All') && (
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
                <select value={gender} onChange={e => handleFilterChange(setGender, e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Origin</label>
                <select value={origin} onChange={e => handleFilterChange(setOrigin, e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {ORIGINS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Cultural Usage</label>
                <select value={religion} onChange={e => handleFilterChange(setReligion, e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {RELIGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Community Usage</label>
                <select value={community} onChange={e => handleFilterChange(setCommunity, e.target.value)} className="w-full p-2.5 rounded-xl border border-zinc-200 text-xs">
                  {COMMUNITIES.map(c => <option key={c} value={c}>{c}</option>)}
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

      {/* Similar Names Highlights Row when Searching */}
      {debouncedQuery && similarItems.length > 0 && (
        <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-3xl p-5 space-y-3 shadow-2xs">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Similar &amp; Related Names for &ldquo;{debouncedQuery}&rdquo;</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {similarItems.map(sim => (
              <Link
                key={sim.slug}
                href={`/name/${sim.slug}`}
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-emerald-200/80 hover:border-emerald-500 hover:shadow-2xs transition-all text-xs font-bold text-zinc-800"
              >
                <div className="space-y-0.5">
                  <div className="text-zinc-900">{sim.name}</div>
                  <div className="text-[10px] font-medium text-zinc-500">{sim.gender} · {sim.origin}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
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
          <p className="text-zinc-800 font-bold">No names match your specific filter selection.</p>
          <p className="text-xs text-zinc-500 max-w-md mx-auto">We don&apos;t have a detailed entry for that query yet. Check spelling or try a broader search.</p>
          <button onClick={clearFilters} className="px-4 py-2 bg-zinc-900 text-white font-bold text-xs rounded-xl">Clear All Filters</button>
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-opacity duration-150 ${isFetching ? 'opacity-60' : 'opacity-100'}`}>
          {names.map(item => (
            <Link
              key={item.slug}
              href={`/name/${item.slug}`}
              className="group block bg-white border border-zinc-200 hover:border-zinc-400 rounded-2xl p-4 transition-all shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
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
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-100 font-medium">
                <span>{item.origin}</span>
                <span className="text-emerald-700 font-semibold group-hover:underline">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            disabled={page === 1 || isFetching}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700 disabled:opacity-40 hover:bg-zinc-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-zinc-700 px-3">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages || isFetching}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700 disabled:opacity-40 hover:bg-zinc-50"
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
