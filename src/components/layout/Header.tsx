'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Scale, Compass, History } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { RecentSearchesModal } from '../ui/RecentSearchesModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-950/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo / Title */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                NameVerse
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                AI Etymology
              </span>
            </div>
          </Link>

          {/* Nav Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/compare"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Scale className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="hidden md:inline">{t.compareBtn}</span>
            </Link>

            <Link
              href="/discover"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden md:inline">{t.discoverBtn}</span>
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
              title="Search History & Favorites"
              aria-label="Search History & Favorites"
            >
              <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </button>

            {/* Language Dropdown */}
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <RecentSearchesModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
