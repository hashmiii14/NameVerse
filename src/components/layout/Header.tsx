'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, Info, Mail, Home, Heart, Sparkles, BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0 gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-base shadow-xs">
            N
          </div>
          <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900">
            Name<span className="text-emerald-600">Verse</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/muslim-girl-names" className="flex items-center gap-1 hover:text-emerald-600 transition-colors text-rose-700 font-bold">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-100" />
            <span>Muslim Girl Names</span>
          </Link>
          <Link href="/muslim-boy-names" className="flex items-center gap-1 hover:text-emerald-600 transition-colors text-blue-700 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Muslim Boy Names</span>
          </Link>
          <Link href="/find-names" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Find Names</span>
          </Link>
          <Link href="/names/a" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>A–Z Directory</span>
          </Link>
          <Link href="/about-us" className="hover:text-emerald-600 transition-colors">
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 z-[60] w-[80vw] max-w-xs h-full bg-white shadow-2xl p-5 space-y-4 md:hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-black text-lg text-slate-900">
                Name<span className="text-emerald-600">Verse</span>
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
                href="/muslim-girl-names"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 text-rose-800 font-bold transition-colors"
              >
                <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />
                <span>Muslim Girl Names</span>
              </Link>
              <Link
                href="/muslim-boy-names"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-blue-800 font-bold transition-colors"
              >
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span>Muslim Boy Names</span>
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
                href="/names/a"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-slate-500" />
                <span>A–Z Alphabet Directory</span>
              </Link>
              <Link
                href="/about-us"
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
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
