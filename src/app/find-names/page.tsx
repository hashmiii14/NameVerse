'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchIndexItem } from '@/types/name';

const GENDERS = ['All', 'Male', 'Female', 'Unisex'];
const ORIGINS = ['All', 'Sanskrit', 'Arabic', 'Punjabi', 'Hebrew', 'European', 'Greek', 'Latin', 'Persian'];
const RELIGIONS = ['All', 'Hindu', 'Muslim', 'Sikh', 'Christian', 'Jewish'];
const LETTERS = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

function FindNamesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialGender = searchParams.get('gender') || 'All';
  const initialOrigin = searchParams.get('origin') || 'All';
  const initialReligion = searchParams.get('religion') || 'All';
  const initialLetter = searchParams.get('letter') || 'All';

  const [index, setIndex] = useState<SearchIndexItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState(initialQuery);
  const [gender, setGender] = useState(initialGender);
  const [origin, setOrigin] = useState(initialOrigin);
  const [religion, setReligion] = useState(initialReligion);
  const [letter, setLetter] = useState(initialLetter);

  const [page, setPage] = useState(1);
  const pageSize = 36;

  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => {
        setIndex(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load search index:', err);
        setLoading(false);
      });
  }, []);

  // Update query when searchParams change
  useEffect(() => {
    if (searchParams.get('q')) setQuery(searchParams.get('q') || '');
    if (searchParams.get('gender')) setGender(searchParams.get('gender') || 'All');
    if (searchParams.get('origin')) setOrigin(searchParams.get('origin') || 'All');
    if (searchParams.get('religion')) setReligion(searchParams.get('religion') || 'All');
    if (searchParams.get('letter')) setLetter(searchParams.get('letter') || 'All');
  }, [searchParams]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [query, gender, origin, religion, letter]);

  const filteredNames = useMemo(() => {
    if (!index.length) return [];
    let list = index;

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(item =>
        item.n.toLowerCase().includes(q) ||
        item.s.includes(q) ||
        item.m.toLowerCase().includes(q)
      );
    }

    if (gender !== 'All') {
      list = list.filter(item => item.g.toLowerCase() === gender.toLowerCase());
    }

    if (origin !== 'All') {
      list = list.filter(item => item.o.toLowerCase().includes(origin.toLowerCase()));
    }

    if (religion !== 'All') {
      list = list.filter(item =>
        item.r && item.r.some(r => r.toLowerCase().includes(religion.toLowerCase()))
      );
    }

    if (letter !== 'All') {
      const l = letter.toLowerCase();
      list = list.filter(item => item.n.toLowerCase().startsWith(l));
    }

    return list;
  }, [index, query, gender, origin, religion, letter]);

  const totalPages = Math.ceil(filteredNames.length / pageSize) || 1;
  const paginatedNames = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredNames.slice(start, start + pageSize);
  }, [filteredNames, page, pageSize]);

  const clearFilters = () => {
    setQuery('');
    setGender('All');
    setOrigin('All');
    setReligion('All');
    setLetter('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Title */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Find Names Database
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Search and filter over 10,000 authentic names by gender, origin, religion, language, or starting letter.
        </p>
      </div>

      {/* Search Input & Controls */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name or keyword (e.g. Aarav, Fatima, Muhammad, Light, Peace)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium outline-none focus:border-emerald-500 focus:bg-white transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
          
          {/* Gender */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Gender
            </label>
            <select
              value={gender}
              onChange={e => setGender(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {GENDERS.map(g => (
                <option key={g} value={g}>{g}</option>
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
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {ORIGINS.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Religion */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Religion / Culture
            </label>
            <select
              value={religion}
              onChange={e => setReligion(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
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
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold outline-none focus:border-emerald-500"
            >
              {LETTERS.map(l => (
                <option key={l} value={l}>{l === 'All' ? 'All Letters' : l}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Filter Summary Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredNames.length}</span> matching names
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

      {/* Results Grid */}
      {loading ? (
        <div className="py-12 text-center text-slate-500 text-sm">
          Loading 10,000+ name database...
        </div>
      ) : paginatedNames.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-3">
          <p className="text-slate-700 font-bold text-base">No matching names found.</p>
          <p className="text-xs text-slate-500">Try broadening your search query or clearing filter options.</p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-500 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedNames.map(item => (
            <Link
              key={item.s}
              href={`/name/${item.s}`}
              className="group block bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-4 transition-all shadow-2xs hover:shadow-md space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-black text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {item.n}
                </h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  item.g === 'Male' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                  item.g === 'Female' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {item.g}
                </span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.m}
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                <span>{item.o} Origin</span>
                <span>{item.t || (item.r && item.r[0] ? item.r[0] : 'Cultural')}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
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
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading Find Names...</div>}>
      <FindNamesContent />
    </Suspense>
  );
}
