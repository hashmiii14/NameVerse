'use client';

import React, { useState } from 'react';
import { getPrebuiltOrDynamicName } from '@/lib/data/prebuiltNames';
import { NameAnalysis } from '@/types/name';
import { Plus, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { slugifyName } from '@/lib/utils/slugify';

export const NameComparisonMatrix: React.FC = () => {
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
    <div className="space-y-6 sm:space-y-8">
      {/* Add Name Bar */}
      <form onSubmit={handleAddName} className="flex flex-col sm:flex-row gap-2.5 max-w-xl mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Add another name to compare (e.g. Fatima, Arjun)..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-900 outline-none focus:border-emerald-500 text-xs sm:text-sm shadow-xs"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Name</span>
        </button>
      </form>

      {/* Comparison Grid Table: Scrollable on mobile & tablet */}
      <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-3 sm:p-5 font-extrabold text-slate-400 text-[11px] sm:text-xs uppercase tracking-wider w-36 sm:w-44">
                Attribute
              </th>
              {analyses.map((item) => (
                <th key={item.name} className="p-3 sm:p-5 min-w-[180px] border-l border-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={`/name/${slugifyName(item.name)}`}
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </Link>

                    {comparedNames.length > 1 && (
                      <button
                        onClick={() => handleRemoveName(item.name)}
                        className="p-1 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50"
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

          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {/* Meaning */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Meaning
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 font-semibold text-emerald-700">
                  "{item.meaning}"
                </td>
              ))}
            </tr>

            {/* Origin & Language */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Origin & Language
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 text-slate-800">
                  <span className="font-bold">{item.origin}</span> ({item.languages.join(', ') || item.origin})
                </td>
              ))}
            </tr>

            {/* Gender */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Gender Usage
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 font-semibold text-slate-900">
                  {item.gender}
                </td>
              ))}
            </tr>

            {/* Religion & Culture */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Religious / Cultural
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 text-xs space-y-1">
                  {item.religious_associations.map((r, i) => (
                    <div key={i} className="font-medium text-slate-700">
                      • <strong className="text-emerald-700">{r.religion}:</strong> {r.explanation}
                    </div>
                  ))}
                </td>
              ))}
            </tr>

            {/* Pronunciation */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Pronunciation
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 font-mono text-emerald-600 font-bold">
                  {item.pronunciation?.simple || item.name}
                </td>
              ))}
            </tr>

            {/* Key Variants */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Alternative Spellings
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 text-xs text-slate-600">
                  {item.variants.map(v => v.spelling).join(', ') || 'None recorded'}
                </td>
              ))}
            </tr>

            {/* Academic Confidence */}
            <tr>
              <td className="p-3 sm:p-5 font-bold text-slate-700 bg-slate-50/50">
                Academic Status
              </td>
              {analyses.map((item) => (
                <td key={item.name} className="p-3 sm:p-5 border-l border-slate-100 text-xs font-semibold text-emerald-600">
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
