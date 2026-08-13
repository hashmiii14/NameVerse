'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SEED_NAMES } from '@/lib/data/prebuiltNames';
import { TRADITION_FILTERS, GENDER_FILTERS, ORIGIN_FILTERS, MEANING_THEME_FILTERS } from '@/lib/data/traditionsData';
import { Sparkles, ArrowRight, Filter, Search } from 'lucide-react';
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
        if (selectedGender === 'male' && g !== 'male' && g !== 'historically male') return false;
        if (selectedGender === 'female' && g !== 'female' && g !== 'historically female') return false;
        if (selectedGender === 'unisex' && g !== 'unisex') return false;
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
    <div className="space-y-8">
      
      {/* Filter Control Bar */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">
        
        {/* Search inside discovery */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within discovery (e.g. peaceful, light, strength)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm outline-none focus:border-emerald-500"
          />
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Tradition Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.filterByTradition}
            </label>
            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 outline-none focus:border-emerald-500"
            >
              {TRADITION_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.filterByGender}
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 outline-none focus:border-emerald-500"
            >
              {GENDER_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Origin Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.filterByOrigin}
            </label>
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 outline-none focus:border-emerald-500"
            >
              {ORIGIN_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* Meaning Theme Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.filterByMeaning}
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 outline-none focus:border-emerald-500"
            >
              {MEANING_THEME_FILTERS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button if filtered */}
        {(selectedTradition !== 'all' || selectedGender !== 'all' || selectedOrigin !== 'all' || selectedTheme !== 'all' || searchQuery) && (
          <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setSelectedTradition('all');
                setSelectedGender('all');
                setSelectedOrigin('all');
                setSelectedTheme('all');
                setSearchQuery('');
              }}
              className="text-xs text-rose-600 dark:text-rose-400 font-semibold hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Showing <strong>{filteredNames.length}</strong> matching names</span>
          <span className="flex items-center gap-1 text-xs">
            <Filter className="w-3.5 h-3.5 text-emerald-500" />
            Filtered Catalog
          </span>
        </div>

        {filteredNames.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <p className="text-slate-600 dark:text-slate-300 font-medium">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredNames.map((item) => (
              <Link
                key={item.name}
                href={`/name/${slugifyName(item.name)}`}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-md group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {item.name}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {item.origin}
                  </span>
                </div>

                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 line-clamp-2">
                  "{item.meaning}"
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>Gender: {item.gender}</span>
                  <span className="font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
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
