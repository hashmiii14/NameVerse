import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | NameVerse AI',
  description: 'Privacy policy and data handling guidelines for NameVerse AI name origin tool.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Data Privacy & Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-500" />
            1. Respect for User Privacy
          </h2>
          <p>
            At NameVerse AI, we believe in privacy by design. We do not require account registration, email addresses, or personal identity details to analyze name meanings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-500" />
            2. Local Browser Storage
          </h2>
          <p>
            Your search history and bookmarked favorite names are stored strictly on your device using HTML5 LocalStorage. We do not transmit or sell your search history to third-party data brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Advertising & Cookies
          </h2>
          <p>
            We adhere to strict Google AdSense publishing requirements (`ads.txt` publisher verification pub-7164032171965193). Third-party vendors, including Google, use cookies to serve non-intrusive ads based on previous visits.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Contact Us Regarding Privacy
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please visit our <a href="/contact" className="text-emerald-600 font-semibold underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
