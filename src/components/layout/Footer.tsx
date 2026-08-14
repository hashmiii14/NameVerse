import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-8 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-2">
            <span className="font-black text-xl text-white tracking-tight">
              NameMeaning<span className="text-emerald-400">.fun</span>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A clean, fast, multicultural name meaning dictionary and discovery tool to explore meanings, origins, languages, and cultural backgrounds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/find-names" className="hover:text-emerald-400 transition-colors">Find Names</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-3">
              Information & Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li>
                <a href="mailto:mdhashmi955@gmail.com" className="hover:text-emerald-400 transition-colors">
                  mdhashmi955@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} NameMeaning.fun. All rights reserved.</p>
          <p className="text-slate-400">Multicultural & Inclusive Name Etymology Dictionary</p>
        </div>
      </div>
    </footer>
  );
};
