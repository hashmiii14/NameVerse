import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-300 border-t border-zinc-800 py-10 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-800 pb-6 text-xs text-zinc-400 font-medium">
          
          <Link href="/" className="font-black text-lg text-white tracking-tight">
            NameMeaning<span className="text-emerald-400">.fun</span>
          </Link>

          <nav className="flex items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/find-names" className="hover:text-white transition-colors">Directory</Link>
            <Link href="/about-us" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} NameMeaning.fun. Etymological reference dictionary.</p>
          <p className="text-zinc-500">Type your name. Discover its story.</p>
        </div>
      </div>
    </footer>
  );
};
