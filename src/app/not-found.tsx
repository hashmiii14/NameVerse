import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { Home, Compass, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center space-y-6">
      
      <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
        <AlertCircle className="w-6 h-6" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Page Not Found (404)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The page or name you are looking for could not be found in our database.
        </p>
      </div>

      {/* Search Input */}
      <div className="pt-2">
        <SearchBar large={false} />
      </div>

      {/* Direct Navigation Links */}
      <div className="flex items-center justify-center gap-3 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
        >
          <Home className="w-4 h-4 text-emerald-400" />
          <span>Home</span>
        </Link>
        <Link
          href="/find-names"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Find Names</span>
        </Link>
      </div>

    </div>
  );
}
