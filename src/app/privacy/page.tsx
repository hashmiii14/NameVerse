import React from 'react';
import { Metadata } from 'next';
import { Lock, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | NameMeaning.fun',
  description: 'Privacy policy and data handling guidelines for NameMeaning.fun.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-500" />
            1. User Privacy
          </h2>
          <p>
            At NameMeaning.fun, we believe in privacy. We do not require account registration or personal details to analyze name meanings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-500" />
            2. Local Browser Storage
          </h2>
          <p>
            Your search history and bookmarked favorite names are stored strictly on your local browser. We do not transmit or sell your search history.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            3. Advertising & Verification
          </h2>
          <p>
            We adhere to strict Google AdSense publishing requirements (`ads.txt` publisher verification pub-7164032171965193).
          </p>
        </section>
      </div>
    </div>
  );
}
