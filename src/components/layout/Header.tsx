'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Search, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const router = useRouter();
  const [loadingRandom, setLoadingRandom] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSurpriseMe = async () => {
    setLoadingRandom(true);
    try {
      const res = await fetch('/api/random');
      const data = await res.json();
      if (data.success && data.slug) {
        router.push(`/name/${data.slug}`);
      } else {
        router.push('/name/fatima');
      }
    } catch {
      router.push('/name/fatima');
    } finally {
      setLoadingRandom(false);
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900">
            NameMeaning<span className="text-emerald-600">.fun</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-600">
          <Link href="/find-names" className="flex items-center gap-1 hover:text-zinc-900 transition-colors">
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </Link>

          <button
            onClick={handleSurpriseMe}
            disabled={loadingRandom}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs transition-colors border border-emerald-200/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{loadingRandom ? 'Finding...' : 'Surprise me'}</span>
          </button>

          <Link href="/about-us" className="hover:text-zinc-900 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white p-4 space-y-3">
          <Link
            href="/find-names"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-zinc-700 py-1"
          >
            Search Directory
          </Link>
          <button
            onClick={handleSurpriseMe}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-bold border border-emerald-200"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Surprise me with a name</span>
          </button>
          <Link
            href="/about-us"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-zinc-700 py-1"
          >
            About NameMeaning.fun
          </Link>
        </div>
      )}
    </header>
  );
};
