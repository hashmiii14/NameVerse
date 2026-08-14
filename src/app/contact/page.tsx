'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Heart, QrCode } from 'lucide-react';

export default function ContactPage() {
  const email = 'mdhashmi955@gmail.com';
  const upiId = '8595018458@ptsbi';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      
      {/* Breadcrumb Navigation */}
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

      {/* 1. Main Contact Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xs text-center">
        
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-2xs mx-auto">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Contact us
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            For questions, corrections, suggestions or feedback:
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 max-w-md mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
            Direct Email Address
          </span>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base transition-colors shadow-2xs"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{email}</span>
          </a>
        </div>

      </div>

      {/* 2. Support Section inside Contact Page */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xs text-center">
        
        <div className="space-y-2 max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 shadow-2xs mx-auto mb-1">
            <Heart className="w-5 h-5 fill-rose-100" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
            Support NameMeaning.fun
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Enjoying NameMeaning.fun? You can support the project if you&apos;d like to help keep it running and improving.
          </p>
        </div>

        {/* UPI Callout */}
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 max-w-md mx-auto space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
            Direct UPI Contribution
          </span>
          <span className="font-mono text-base sm:text-lg font-bold text-zinc-900 bg-white px-4 py-2 rounded-xl border border-zinc-200 select-all inline-block">
            {upiId}
          </span>
        </div>

        {/* QR Code Container */}
        <div className="border-t border-zinc-100 pt-6 max-w-md mx-auto space-y-3">
          <h3 className="text-sm font-bold text-zinc-900 flex items-center justify-center gap-1.5">
            <QrCode className="w-4 h-4 text-emerald-600" />
            <span>Scan to support</span>
          </h3>

          <div className="w-44 h-44 mx-auto bg-zinc-100 border border-zinc-200 rounded-2xl flex flex-col items-center justify-center p-3 text-center">
            <img
              src="/images/support-qr.png"
              alt="UPI Support QR Code"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = `
                    <div className="flex flex-col items-center justify-center text-zinc-400 space-y-1 p-2">
                      <svg class="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                      <span class="text-[10px] font-bold text-zinc-600">Scan to Support QR</span>
                      <code class="text-[9px] font-mono text-zinc-400">/public/images/support-qr.png</code>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
