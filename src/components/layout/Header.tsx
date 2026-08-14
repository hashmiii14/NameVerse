'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="font-black text-xl tracking-tight text-zinc-900">
            NameMeaning<span className="text-emerald-600">.fun</span>
          </span>
        </Link>

        {/* Desktop Navigation - Exactly 5 items */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-zinc-600">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>

          <Link href="/find-names" className="hover:text-zinc-900 transition-colors">
            Find Names
          </Link>

          <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">
            Privacy Policy
          </Link>

          <Link href="/contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </Link>

          <Link href="/about" className="hover:text-zinc-900 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer - Exactly 5 items */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white p-5 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1.5"
          >
            Home
          </Link>
          <Link
            href="/find-names"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1.5"
          >
            Find Names
          </Link>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1.5"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1.5"
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-bold text-zinc-800 py-1.5"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};
