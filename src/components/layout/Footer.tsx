'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Info } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-8 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-2">
            <span className="font-black text-base sm:text-lg text-white tracking-tight">
              NameMeaning<span className="text-emerald-400">.fun</span>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Indian & Asian name meaning, origin, and history.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-2">
              Navigate
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/discover" className="hover:text-emerald-400 transition-colors">Find Names</Link></li>
              <li><Link href="/compare" className="hover:text-emerald-400 transition-colors">Compare</Link></li>
            </ul>
          </div>

          {/* Col 3: Traditions */}
          <div className="hidden sm:block">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-2">
              Traditions
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hindu, Muslim, Sikh, Christian, Jain, Buddhist, and Asian naming traditions.
            </p>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-2">
              Legal
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/privacy" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                  <FileText className="w-3 h-3 text-emerald-400 shrink-0" />
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                  <Info className="w-3 h-3 text-emerald-400 shrink-0" />
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                  <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 NameMeaning.fun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
