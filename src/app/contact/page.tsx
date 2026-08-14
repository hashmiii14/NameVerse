import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Heart, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | NameMeaning.fun',
  description: 'Contact NameMeaning.fun for inquiries, feedback, or name etymology corrections, and support the free project.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Title */}
      <div className="space-y-2 border-b border-slate-200 pb-5 text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Have suggestions, feedback, or etymological inquiries for NameMeaning.fun? Get in touch with us.
        </p>
      </div>

      {/* Direct Contact Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs text-center">
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
              className="inline-block px-5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-700 text-sm sm:text-base hover:bg-emerald-100 transition-colors"
            >
              mdhashmi955@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Support the Project Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 shrink-0" />
          <h2 className="text-lg font-black text-slate-900">
            Support the Project ❤️
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          This name database is completely free. If it helped you, you can support the project and help me maintain and improve it.
        </p>

        {/* UPI Details & QR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
          
          <div className="space-y-3 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Support via UPI
              </span>
              <p className="text-xs text-slate-500">Scan QR code or use UPI ID below:</p>
            </div>

            <div className="inline-block px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 font-mono font-bold text-xs sm:text-sm select-all">
              8595018458@ptsbi
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct Voluntary Contribution</span>
            </div>
          </div>

          {/* QR Code Image */}
          <div className="shrink-0 text-center">
            <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs inline-block">
              <Image
                src="/upi-qr.png"
                alt="UPI QR Code - 8595018458@ptsbi"
                width={140}
                height={140}
                className="rounded-lg"
              />
            </div>
          </div>

        </div>

        <p className="text-[11px] text-slate-400 text-center italic">
          Optional — NameMeaning.fun will always remain free.
        </p>

      </div>

    </div>
  );
}
