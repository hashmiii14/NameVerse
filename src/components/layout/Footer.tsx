'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Info, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-10 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                N
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                NameMeaning<span className="text-emerald-400">.fun</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Discover the exact meaning, origin, and history behind personal names across global traditions.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:text-emerald-400 transition-colors">
                  Find Names
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-emerald-400 transition-colors">
                  Compare Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Traditions */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-3">
              Traditions Covered
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hindu / Sanskrit, Muslim / Arabic, Biblical / Hebrew, Christian / European, Sikh, Buddhist, Jain, African, Celtic, Scandinavian, Slavic, and Asian naming traditions worldwide.
            </p>
          </div>

          {/* Col 4: Legal & Policy */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-3">
              Legal & Information
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/privacy" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <a href="/ads.txt" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  ads.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center sm:text-left text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 NameMeaning.fun. All rights reserved.</p>
          <p className="text-slate-400">Culturally respectful etymological research.</p>
        </div>
      </div>
    </footer>
  );
};
