import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — NameMeaning.fun',
  description: 'Plain-English privacy policy for NameMeaning.fun covering search queries, server logging, and data handling practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      
      {/* Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <nav className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-bold text-zinc-900">Privacy Policy</span>
        </nav>
        <Link href="/" className="inline-flex items-center gap-1 font-semibold text-zinc-500 hover:text-zinc-900">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Article */}
      <article className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-1 border-b border-zinc-100 pb-5">
          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-500">
            Last Updated: February 2026 · NameMeaning.fun
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
          <p>
            At <strong className="text-zinc-900">NameMeaning.fun</strong>, we respect your privacy. This Privacy Policy outlines our straightforward data handling practices.
          </p>

          <h2 className="text-base font-bold text-zinc-900 pt-2">1. Information We Collect</h2>
          <p>
            When you use NameMeaning.fun:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong>Search Queries:</strong> Search terms typed into the search bar are processed on our servers to fetch matching etymological records.</li>
            <li><strong>Standard Web Server Logs:</strong> Like virtually all websites, standard server request headers (IP address, user agent, requested URL timestamp) are temporarily logged by server hosting providers (e.g. Vercel) for performance and security monitoring.</li>
            <li><strong>Support &amp; Contact:</strong> If you email us at <a href="mailto:mdhashmi955@gmail.com" className="text-emerald-700 underline font-semibold">mdhashmi955@gmail.com</a>, we retain your email address and message contents solely to respond to your inquiry.</li>
          </ul>

          <h2 className="text-base font-bold text-zinc-900 pt-2">2. Cookies &amp; Local Storage</h2>
          <p>
            We keep browser client state minimal. We do not track users across third-party websites or sell personal data to third parties.
          </p>

          <h2 className="text-base font-bold text-zinc-900 pt-2">3. Payment &amp; Voluntary Support</h2>
          <p>
            Voluntary contributions to NameMeaning.fun are made via direct UPI apps. We do not collect or store credit card numbers, banking passwords, or financial account credentials.
          </p>

          <h2 className="text-base font-bold text-zinc-900 pt-2">4. Contact Us</h2>
          <p>
            If you have questions regarding this policy, feel free to email us at <a href="mailto:mdhashmi955@gmail.com" className="text-emerald-700 underline font-semibold">mdhashmi955@gmail.com</a>.
          </p>
        </div>
      </article>

    </div>
  );
}
