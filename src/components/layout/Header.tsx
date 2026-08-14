'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Menu, X, Heart, Search, Mail, Info } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="font-black text-xl tracking-tight text-zinc-900">
            NameMeaning<span className="text-emerald-600">.fun</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-600">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>

          <Link href="/find-names" className="hover:text-zinc-900 transition-colors">
            Find Names
          </Link>

          <Link href="/about" className="hover:text-zinc-900 transition-colors">
            About
          </Link>

          <Link href="/contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </Link>

          <Link href="/support" className="flex items-center gap-1 text-rose-700 hover:text-rose-800 transition-colors font-bold">
            <Heart className="w-3.5 h-3.5 fill-rose-100 text-rose-600" />
            <span>Support</span>
          </Link>

          <button
            onClick={handleSurpriseMe}
            disabled={loadingRandom}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors border border-emerald-200/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{loadingRandom ? 'Finding...' : 'Surprise me'}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white p-5 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1"
          >
            Home
          </Link>
          <Link
            href="/find-names"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1"
          >
            Find Names Directory
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1"
          >
            Contact
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-rose-700 py-1"
          >
            <Heart className="w-4 h-4 fill-rose-100 text-rose-600" />
            <span>Support NameMeaning.fun</span>
          </Link>

          <button
            onClick={handleSurpriseMe}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mt-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Surprise me with a random name</span>
          </button>
        </div>
      )}
    </header>
  );
};
