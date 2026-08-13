import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Heart, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | NameVerse AI',
  description: 'Learn about NameVerse AI, our academic and culturally respectful mission to explore global personal names.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Our Mission & Ethos</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          About NameVerse AI
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Connecting humanity through the rich etymological and cultural stories behind personal names around the world.
        </p>
      </div>

      <div className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-500" />
            Cultural Respect & Academic Rigor
          </h2>
          <p>
            NameVerse AI was created to replace shallow baby-name websites with deep, source-backed onomastic research. We treat naming traditions from all major world cultures—Hindu, Muslim, Christian, Jewish, Sikh, Buddhist, Jain, African, European, Asian, and Indigenous traditions—with equal dignity and precision.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            The Anti-Assumption Principle
          </h2>
          <p>
            We firmly uphold that <strong>a name does not prove a person's religion, ethnicity, nationality, or personal beliefs.</strong> Many names are shared across languages and cultures. We clearly distinguish between etymological origin, religious tradition, and modern usage without making assumptions.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Multilingual Accessibility
          </h2>
          <p>
            NameVerse supports 12 major world languages out of the box, including full right-to-left layout support for Arabic and Urdu, so users everywhere can explore onomastic heritage in their native scripts.
          </p>
        </div>

      </div>
    </div>
  );
}
