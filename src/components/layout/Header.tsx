'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, Compass, History, Menu, X, Info, Mail, Home } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { RecentSearchesModal } from '../ui/RecentSearchesModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
          
          {/* Brand Text Only */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="font-black text-lg sm:text-2xl tracking-tight text-slate-900">
              NameMeaning<span className="text-emerald-600">.fun</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/discover" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>{t.discoverBtn}</span>
            </Link>
            <Link href="/compare" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Scale className="w-4 h-4 text-teal-600" />
              <span>{t.compareBtn}</span>
            </Link>
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              {t.aboutUs}
            </Link>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">
              {t.contactUs}
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              title="Recent Searches"
              aria-label="Recent Searches"
            >
              <History className="w-5 h-5" />
            </button>

            <LanguageSwitcher />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 z-[60] w-[75vw] max-w-xs h-full bg-white shadow-2xl overflow-y-auto md:hidden animate-in slide-in-from-right duration-200">
            <div className="p-5 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-black text-lg text-slate-900">
                  NameMeaning<span className="text-emerald-600">.fun</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 text-sm sm:text-base font-semibold text-slate-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Home className="w-5 h-5 text-emerald-600" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/discover"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Compass className="w-5 h-5 text-cyan-600" />
                  <span>{t.discoverBtn}</span>
                </Link>
                <Link
                  href="/compare"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Scale className="w-5 h-5 text-teal-600" />
                  <span>{t.compareBtn}</span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Info className="w-5 h-5 text-indigo-600" />
                  <span>{t.aboutUs}</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>{t.contactUs}</span>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      <RecentSearchesModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
