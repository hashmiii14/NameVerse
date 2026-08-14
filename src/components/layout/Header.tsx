'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, Info, Mail, Home, FileText } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand Text */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900">
            NameMeaning<span className="text-emerald-600">.fun</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/find-names" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Find Names</span>
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-emerald-600 transition-colors">
            Privacy Policy
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 z-[60] w-[80vw] max-w-xs h-full bg-white shadow-2xl p-5 space-y-4 md:hidden">
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

            <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Home className="w-5 h-5 text-emerald-600" />
                <span>Home</span>
              </Link>
              <Link
                href="/find-names"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Compass className="w-5 h-5 text-emerald-600" />
                <span>Find Names</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Info className="w-5 h-5 text-emerald-600" />
                <span>About Us</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>Contact</span>
              </Link>
              <Link
                href="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Privacy Policy</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
