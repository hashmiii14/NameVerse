import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, ArrowLeft, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — NameMeaning.fun',
  description: 'Get in touch with the NameMeaning.fun team for questions, data corrections, suggestions, or general feedback.',
};

export default function ContactPage() {
  const email = 'mdhashmi955@gmail.com';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      
      {/* Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <nav className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-bold text-zinc-900">Contact</span>
        </nav>
        <Link href="/" className="inline-flex items-center gap-1 font-semibold text-zinc-500 hover:text-zinc-900">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs text-center">
        
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-2xs">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Contact us
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mx-auto">
            Have a question, data correction, spelling variant suggestion, or general feedback? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 max-w-md mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
            Direct Email Address
          </span>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base transition-colors shadow-2xs"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{email}</span>
          </a>
          <p className="text-[11px] text-zinc-500">
            Click to send an email directly via your mail client.
          </p>
        </div>

      </div>

    </div>
  );
}
