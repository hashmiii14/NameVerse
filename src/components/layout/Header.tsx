'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Scale, Compass, History, Menu, X, Info, Mail, Home } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { RecentSearchesModal } from '../ui/RecentSearchesModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white flex items-center justify-center font-black text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                NameMeaning<span className="text-emerald-600 dark:text-emerald-400">.fun</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/discover" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.discoverBtn}</span>
            </Link>
            <Link href="/compare" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Scale className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{t.compareBtn}</span>
            </Link>
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {t.aboutUs}
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {t.contactUs}
            </Link>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Recent Searches & Favorites"
              aria-label="Recent Searches & Favorites"
            >
              <History className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white dark:bg-slate-900 h-full p-6 shadow-2xl space-y-6 overflow-y-auto animate-in slide-in-from-right duration-200 border-l border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                NameMeaning<span className="text-emerald-600">.fun</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 text-base font-medium text-slate-800 dark:text-slate-200">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Home className="w-5 h-5 text-emerald-600" />
                <span>Home</span>
              </Link>
              <Link
                href="/discover"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Compass className="w-5 h-5 text-cyan-600" />
                <span>{t.discoverBtn}</span>
              </Link>
              <Link
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Scale className="w-5 h-5 text-teal-600" />
                <span>{t.compareBtn}</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Info className="w-5 h-5 text-indigo-600" />
                <span>{t.aboutUs}</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>{t.contactUs}</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Recents & Favorites Modal */}
      <RecentSearchesModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
