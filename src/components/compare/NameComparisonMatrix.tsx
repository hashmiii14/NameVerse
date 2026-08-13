'use client';

import React, { useState } from 'react';
import { getPrebuiltOrDynamicName } from '@/lib/data/prebuiltNames';
import { NameAnalysis } from '@/types/name';
import { Scale, Plus, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { slugifyName } from '@/lib/utils/slugify';
import { useLanguage } from '@/lib/context/LanguageContext';

export const NameComparisonMatrix: React.FC = () => {
  const { t } = useLanguage();
  const [nameInput, setNameInput] = useState('');
  const [comparedNames, setComparedNames] = useState<string[]>(['Muhammad', 'Aarav', 'Mary']);

  const handleAddName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    const clean = nameInput.trim();
    if (!comparedNames.some(n => n.toLowerCase() === clean.toLowerCase())) {
      setComparedNames([...comparedNames, clean]);
    }
    setNameInput('');
  };

  const handleRemoveName = (nameToRemove: string) => {
    if (comparedNames.length <= 1) return;
    setComparedNames(comparedNames.filter(n => n !== nameToRemove));
  };

  const analyses: NameAnalysis[] = comparedNames.map(name => getPrebuiltOrDynamicName(name));

  return (
    <div className="space-y-8">
      {/* Add Name Bar */}
      <form onSubmit={handleAddName} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Add another name to compare (e.g. Fatima, John)..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-medium text-slate-900 dark:text-white outline-none focus:border-emerald-500 text-sm shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add Name</span>
        </button>
      </form>

      {/* Comparison Grid Table */}
      <div className="w-full overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
        <table className="w-full min-w-[700px] text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
              <th className="p-4 sm:p-6 font-extrabold text-slate-400 text-xs uppercase tracking-wider w-44">
                Attribute
              </th>
              {analyses.map((item) => (
                <th key={item.name} className="p-4 sm:p-6 min-w-[200px] border-l border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={`/name/${slugifyName(item.name)}`}
                      className="text-lg font-black text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-500" />
                    </Link>

                    {comparedNames.length > 1 && (
                      <button
                        onClick={() => handleRemoveName(item.name)}
                        className="p-1 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
            {/* Meaning */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Meaning
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 font-semibold text-emerald-700 dark:text-emerald-300">
                  "{item.meaning}"
                </td>
              ))}
            </tr>

            {/* Origin & Language */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Origin & Language
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 text-slate-800 dark:text-slate-200">
                  <span className="font-bold">{item.origin}</span> ({item.languages.join(', ') || item.origin})
                </td>
              ))}
            </tr>

            {/* Gender */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Gender Usage
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 font-medium text-slate-800 dark:text-slate-200">
                  {item.gender}
                </td>
              ))}
            </tr>

            {/* Religion & Culture */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Religious / Cultural Association
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 text-xs space-y-1">
                  {item.religious_associations.map((r, i) => (
                    <div key={i} className="font-medium text-slate-700 dark:text-slate-300">
                      • <strong className="text-purple-600 dark:text-purple-400">{r.religion}:</strong> {r.explanation}
                    </div>
                  ))}
                </td>
              ))}
            </tr>

            {/* Pronunciation */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Pronunciation
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 font-mono text-blue-600 dark:text-blue-400 font-bold">
                  {item.pronunciation?.simple || item.name}
                </td>
              ))}
            </tr>

            {/* Key Variants */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Alternative Spellings
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                  {item.variants.map(v => v.spelling).join(', ') || 'None recorded'}
                </td>
              ))}
            </tr>

            {/* Academic Confidence */}
            <tr>
              <td className="p-4 sm:p-6 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/50">
                Academic Confidence
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-4 sm:p-6 border-l border-slate-100 dark:border-slate-800/60 text-xs font-semibold text-emerald-600">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{item.academic_status} ({item.confidence})</span>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
