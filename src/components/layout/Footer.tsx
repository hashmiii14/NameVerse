import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-300 border-t border-zinc-800 py-10 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 text-xs text-zinc-400 font-medium">
          
          {/* Brand */}
          <div className="space-y-1">
            <Link href="/" className="font-black text-xl text-white tracking-tight">
              NameMeaning<span className="text-emerald-400">.fun</span>
            </Link>
            <p className="text-zinc-400 text-xs">
              Discover the story behind your name.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/find-names" className="hover:text-white transition-colors">Find Names</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </nav>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div className="space-y-0.5 text-center sm:text-left">
            <p>© 2026 NameMeaning.fun. All rights reserved.</p>
            <p>Contact: <a href="mailto:mdhashmi955@gmail.com" className="hover:text-zinc-300 underline">mdhashmi955@gmail.com</a> · Support UPI: <span className="font-mono text-zinc-400">8595018458@ptsbi</span></p>
          </div>
          <p className="text-zinc-400 font-medium">Type your name. Discover its story.</p>
        </div>

      </div>
    </footer>
  );
};
