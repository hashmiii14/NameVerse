import React from 'react';
import { Metadata } from 'next';
import { Globe, Heart, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | NameMeaning.fun',
  description: 'Learn about NameMeaning.fun, our mission to explore personal names etymologically and culturally.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6 sm:space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About NameMeaning<span className="text-emerald-600">.fun</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Connecting humanity through the rich etymological and cultural stories behind personal names.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6 text-slate-600 text-xs sm:text-base leading-relaxed">
        
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-500 shrink-0" />
            Cultural Respect & Academic Precision
          </h2>
          <p>
            NameMeaning.fun provides deep, source-backed onomastic research. We treat naming traditions from all world cultures—Hindu, Muslim, Christian, Jewish, Sikh, Buddhist, Jain, African, European, Asian, and Indigenous traditions—with equal dignity and precision.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 shrink-0" />
            Neutrality & Respect
          </h2>
          <p>
            We firmly uphold that <strong>a name does not prove a person&apos;s religion, ethnicity, nationality, or personal beliefs.</strong> Many names are shared across languages and cultures. We clearly distinguish between etymological origin, religious tradition, and modern usage.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500 shrink-0" />
            Multilingual Support
          </h2>
          <p>
            NameMeaning supports 12 major languages with full right-to-left layout support for Arabic and Urdu, enabling users worldwide to explore onomastic heritage in their native script.
          </p>
        </div>

      </div>
    </div>
  );
}
