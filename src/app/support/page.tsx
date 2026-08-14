'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, QrCode, ArrowLeft } from 'lucide-react';

export default function SupportPage() {
  const upiId = '8595018458@ptsbi';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <nav className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-bold text-zinc-900">Support</span>
        </nav>
        <Link href="/" className="inline-flex items-center gap-1 font-semibold text-zinc-500 hover:text-zinc-900">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Support Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xs text-center">
        
        <div className="space-y-3 max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 shadow-2xs">
            <Heart className="w-6 h-6 fill-rose-100" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Support NameMeaning.fun
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Enjoying NameMeaning.fun? You can support the project if you&apos;d like to help keep it running, ad-free, and continuously improving.
          </p>
        </div>

        {/* UPI ID Callout */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 max-w-md mx-auto space-y-2 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Direct UPI Contribution
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-base sm:text-lg font-bold text-zinc-900 bg-white px-4 py-2 rounded-xl border border-zinc-200 select-all">
              {upiId}
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 pt-1">
            Supported via BHIM, Google Pay, PhonePe, Paytm &amp; all Indian UPI apps.
          </p>
        </div>

        {/* QR Code Placeholder Component */}
        <div className="border-t border-zinc-100 pt-8 max-w-md mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-zinc-900 flex items-center justify-center gap-1.5">
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>Scan to support</span>
            </h3>
            <p className="text-xs text-zinc-500">
              Scan the QR code directly with your UPI app.
            </p>
          </div>

          <div className="w-48 h-48 mx-auto bg-zinc-100 border border-zinc-200 rounded-2xl flex flex-col items-center justify-center p-4 text-center space-y-2">
            <img
              src="/images/support-qr.png"
              alt="UPI Support QR Code"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                // Fallback placeholder if image not uploaded yet
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = `
                    <div className="flex flex-col items-center justify-center text-zinc-400 space-y-1">
                      <svg class="w-10 h-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                      <span class="text-[11px] font-bold text-zinc-500">Place Real QR Image At</span>
                      <code class="text-[10px] font-mono text-zinc-400">/public/images/support-qr.png</code>
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
