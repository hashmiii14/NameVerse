'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Heart, FileText, Mail, Info } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                NameVerse
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t.siteSubtitle}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 text-xs border border-emerald-800/80">
              <Shield className="w-3.5 h-3.5" />
              <span>AdSense Authorized (ads.txt)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home / Search
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-emerald-400 transition-colors">
                  {t.compareBtn}
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:text-emerald-400 transition-colors">
                  {t.discoverBtn}
                </Link>
              </li>
              <li>
                <Link href="/name/muhammad" className="hover:text-emerald-400 transition-colors">
                  Featured: Muhammad
                </Link>
              </li>
              <li>
                <Link href="/name/aarav" className="hover:text-emerald-400 transition-colors">
                  Featured: Aarav
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Traditions */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-3 uppercase tracking-wider">
              Traditions Covered
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hindu / Sanskrit, Muslim / Arabic, Biblical / Hebrew, Christian / European, Sikh, Buddhist, Jain, African, Celtic, Scandinavian, Slavic, East Asian, Latin American, Indigenous traditions worldwide.
            </p>
          </div>

          {/* Col 4: Legal & Policy */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-3 uppercase tracking-wider">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-xs">
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
                <a href="/ads.txt" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors text-slate-400">
                  ads.txt specification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t.copyright}</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built with academic & cultural respect</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
