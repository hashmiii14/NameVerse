import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NameMeaning.fun',
  description: 'Privacy Policy for NameMeaning.fun explaining data collection, cookies, analytics, and Google AdSense compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
          <p>
            Welcome to <strong>NameMeaning.fun</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting any information collected through your use of our website. This Privacy Policy outlines the types of information we collect, how it is used, and your choices regarding your data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            NameMeaning.fun is a free, public name dictionary. We do not require account registration, passwords, or personal user logins.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Search Queries:</strong> Names typed into the search bar are processed in real-time to return relevant meanings and results.</li>
            <li><strong>Technical & Usage Data:</strong> Standard web server logs may record your IP address, browser type, operating system, referring URLs, and pages visited.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Cookies & Local Storage</h2>
          <p>
            We may use cookies and browser local storage to enhance site navigation, remember user preferences (such as recent search history), and analyze site performance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Advertising & Google AdSense</h2>
          <p>
            NameMeaning.fun uses Google AdSense to serve advertisements.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Google uses cookies (such as the DART cookie) to serve ads based on users&apos; visits to our site and other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Google Ads Settings</a>.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Third-Party Analytics</h2>
          <p>
            We may use third-party analytics services (such as Google Analytics) to monitor website traffic, aggregate user engagement, and optimize site speed and performance. These tools collect information anonymously.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Data Protection & Security</h2>
          <p>
            We implement standard administrative and technical safeguards to protect information against unauthorized access, loss, or alteration.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">7. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold text-slate-900">
            Email: <a href="mailto:mdhashmi955@gmail.com" className="text-emerald-600 hover:underline">mdhashmi955@gmail.com</a>
          </p>
        </section>

      </div>

    </div>
  );
}
