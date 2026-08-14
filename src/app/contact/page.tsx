import React from 'react';
import { Metadata } from 'next';
import { Mail, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | NameMeaning.fun',
  description: 'Contact NameMeaning.fun for inquiries, feedback, or name etymology corrections.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-2 border-b border-slate-200 pb-5 text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Have suggestions, feedback, or etymological inquiries for NameMeaning.fun? Get in touch with us.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs text-center">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            Direct Email Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            You can reach us directly via email for any questions, suggestions, or data corrections:
          </p>
          <div className="pt-2">
            <a
              href="mailto:mdhashmi955@gmail.com"
              className="inline-block px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-700 text-sm sm:text-base hover:bg-emerald-100 transition-colors"
            >
              mdhashmi955@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>We aim to respond to genuine inquiries within 24–48 hours.</span>
        </div>
      </div>

    </div>
  );
}
