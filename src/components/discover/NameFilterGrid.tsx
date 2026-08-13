'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SEED_NAMES } from '@/lib/data/prebuiltNames';
import { TRADITION_FILTERS, GENDER_FILTERS, ORIGIN_FILTERS, MEANING_THEME_FILTERS } from '@/lib/data/traditionsData';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { slugifyName } from '@/lib/utils/slugify';
import { useLanguage } from '@/lib/context/LanguageContext';

export const NameFilterGrid: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTradition, setSelectedTradition] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allNamesList = useMemo(() => Object.values(SEED_NAMES), []);

  const filteredNames = useMemo(() => {
    return allNamesList.filter((item) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMeaning = item.meaning.toLowerCase().includes(q);
        if (!matchesName && !matchesMeaning) return false;
      }

      // Gender filter
      if (selectedGender !== 'all') {
        const g = item.gender.toLowerCase();
        if (selectedGender === 'male' && !g.includes('male')) return false;
        if (selectedGender === 'female' && !g.includes('female')) return false;
        if (selectedGender === 'unisex' && !g.includes('unisex')) return false;
      }

      // Tradition filter
      if (selectedTradition !== 'all') {
        const tradMatches = item.religious_associations.some(r => 
          r.religion.toLowerCase().includes(selectedTradition) ||
          r.explanation.toLowerCase().includes(selectedTradition)
        ) || item.cultural_associations.some(c => c.toLowerCase().includes(selectedTradition));
        
        if (!tradMatches) {
          if (selectedTradition === 'hindu' && !item.origin.includes('Sanskrit') && !item.origin.includes('Indian')) return false;
          if (selectedTradition === 'muslim' && !item.origin.includes('Arabic') && !item.origin.includes('Persian')) return false;
          if (selectedTradition === 'christian' && !item.origin.includes('Hebrew') && !item.origin.includes('Greek') && !item.origin.includes('Latin')) return false;
        }
      }

      // Origin filter
      if (selectedOrigin !== 'all') {
        const origLower = item.origin.toLowerCase();
        if (!origLower.includes(selectedOrigin.toLowerCase())) return false;
      }

      // Theme filter
      if (selectedTheme !== 'all') {
        const meaningLower = item.meaning.toLowerCase();
        if (!meaningLower.includes(selectedTheme.toLowerCase())) return false;
      }

      return true;
    });
  }, [allNamesList, searchQuery, selectedGender, selectedTradition, selectedOrigin, selectedTheme]);

  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* Filter Control Bar */}
      <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6">
        
        {/* Search inside discovery */}
        <div className="relative">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 sm:left-4 top-3 sm:top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword (e.g. peaceful, light, strength)..."
            className="w-full pl-9 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm outline-none focus:border-emerald-500"
          />
        </div>

        {/* Filter Dropdowns Grid: 1-col on mobile, 2-col on tablet, 4-col on laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Tradition Filter */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.filterByTradition}
            </label>
            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-500"
            >
              {TRADITION_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.filterByGender}
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-500"
            >
              {GENDER_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Origin Filter */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.filterByOrigin}
            </label>
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-500"
            >
              {ORIGIN_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Meaning Theme Filter */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.filterByMeaning}
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-emerald-500"
            >
              {MEANING_THEME_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button if filtered */}
        {(selectedTradition !== 'all' || selectedGender !== 'all' || selectedOrigin !== 'all' || selectedTheme !== 'all' || searchQuery) && (
          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setSelectedTradition('all');
                setSelectedGender('all');
                setSelectedOrigin('all');
                setSelectedTheme('all');
                setSearchQuery('');
              }}
              className="text-xs text-rose-600 font-semibold hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Grid: 1-col mobile, 2-col tablet, 3-col laptop */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
          <span>Showing <strong>{filteredNames.length}</strong> names</span>
          <span className="flex items-center gap-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            Filtered Catalog
          </span>
        </div>

        {filteredNames.length === 0 ? (
          <div className="py-12 text-center bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <p className="text-slate-600 font-medium text-xs sm:text-sm">
              No names match your current filter combination.
            </p>
            <button
              onClick={() => {
                setSelectedTradition('all');
                setSelectedGender('all');
                setSelectedOrigin('all');
                setSelectedTheme('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {filteredNames.map((item) => (
              <Link
                key={item.name}
                href={`/name/${slugifyName(item.name)}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all shadow-xs hover:shadow-md group space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 truncate">
                    {item.name}
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                    {item.origin}
                  </span>
                </div>

                <p className="text-xs font-semibold text-emerald-700 line-clamp-2">
                  "{item.meaning}"
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="truncate">Gender: {item.gender}</span>
                  <span className="font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
