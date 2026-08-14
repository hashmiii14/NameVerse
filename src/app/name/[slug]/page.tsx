import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNameBySlug, getAllSlugs } from '@/lib/data/namesHelper';
import { SearchBar } from '@/components/search/SearchBar';
import { ShareButton } from '@/components/name/ShareButton';
import { BookOpen, Globe, User, Shield, ArrowRight, ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.slice(0, 1000).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getNameBySlug(slug);

  if (!data) {
    return {
      title: 'Name Not Found | NameMeaning.fun',
      description: 'The requested name could not be found in our dictionary.',
    };
  }

  const relStr = data.religion && data.religion.length ? data.religion.join(', ') : 'Cultural';
  const langStr = data.language && data.language.length ? data.language.join(', ') : data.origin;

  return {
    title: `${data.name} — Meaning, Origin & Story | NameMeaning.fun`,
    description: `What does the name ${data.name} mean? Meaning: "${data.meaning}". Origin: ${data.origin}. Gender: ${data.gender}. Language: ${langStr}. Tradition: ${relStr}.`,
    keywords: [data.name, `${data.name} meaning`, `${data.name} origin`, `${data.origin} names`, `${data.gender} names`],
    alternates: {
      canonical: `https://namemeaning.fun/name/${data.slug}`,
    },
    openGraph: {
      title: `${data.name} — Meaning & Origin | NameMeaning.fun`,
      description: `What does the name ${data.name} mean? Discover its ${data.origin} origin and etymology.`,
      url: `https://namemeaning.fun/name/${data.slug}`,
      type: 'article',
    },
  };
}

export default async function NameResultPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getNameBySlug(slug);

  if (!data) {
    notFound();
  }

  const altSpellings = data.alternateSpellings || data.alternate_spellings || [];
  const simNames = data.similarNames || data.similar_names || [];

  // Generate a playful, labeled "Name vibe"
  const nameVibes = [
    data.gender === 'Female' ? 'Graceful' : 'Dignified',
    'Timeless',
    data.origin === 'Arabic' || data.origin === 'Persian' ? 'Lyrical' : 'Classic'
  ];

  // Did You Know etymological insight
  const didYouKnowFact = `Names of ${data.origin} origin carrying roots of "${data.meaning.split(' ')[0] || 'virtue'}" are historically associated with nobility, character strength, and literary tradition.`;

  const jsonLdTerm = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': data.name,
    'description': data.meaning,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'NameMeaning.fun Etymological Dictionary',
      'url': 'https://namemeaning.fun'
    },
    'termCode': data.slug
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTerm) }}
      />

      {/* Top Compact Search */}
      <div className="max-w-xl mx-auto">
        <SearchBar initialValue="" placeholder="Search another name..." />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <nav className="flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/find-names" className="hover:text-zinc-900 transition-colors">Directory</Link>
          <span>/</span>
          <span className="font-bold text-zinc-900">{data.name}</span>
        </nav>
        
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>New Search</span>
        </Link>
      </div>

      {/* Main Reference Card */}
      <article className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
        
        {/* Name Title Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-6">
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
              {data.name}
            </h1>
            {data.pronunciation && (
              <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                Pronounced: /{data.pronunciation}/
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <ShareButton name={data.name} meaning={data.meaning} slug={data.slug} />
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              data.gender === 'Female' ? 'bg-rose-50 text-rose-800 border border-rose-200' :
              data.gender === 'Male' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
              'bg-zinc-100 text-zinc-800 border border-zinc-200'
            }`}>
              {data.gender} Name
            </span>
          </div>
        </div>

        {/* Primary Meaning Callout */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Meaning
          </h2>
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 text-base sm:text-lg font-bold leading-relaxed">
            &ldquo;{data.meaning}&rdquo;
          </div>
        </div>

        {/* Distinct Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-zinc-100">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <Globe className="w-3 h-3 text-emerald-600" />
              <span>Origin</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-900">{data.origin}</p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <BookOpen className="w-3 h-3 text-emerald-600" />
              <span>Language</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-900">
              {data.language && data.language.length ? data.language.join(', ') : data.origin}
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <Shield className="w-3 h-3 text-emerald-600" />
              <span>Cultural Usage</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-900">
              {data.religion && data.religion.length ? data.religion.join(', ') : 'Global'}
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <User className="w-3 h-3 text-emerald-600" />
              <span>Gender</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-zinc-900">{data.gender}</p>
          </div>
        </div>

        {/* Origin & Historical Context Story */}
        <div className="space-y-2 pt-2">
          <h2 className="text-sm font-bold text-zinc-900">
            Etymology &amp; Background
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Alternate Spellings */}
        {altSpellings.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-zinc-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Also Known As / Alternate Spellings
            </h3>
            <div className="flex flex-wrap gap-2">
              {altSpellings.map(spelling => (
                <span key={spelling} className="px-3 py-1 rounded-lg bg-zinc-100 text-xs font-semibold text-zinc-700 border border-zinc-200">
                  {spelling}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Labeled Playful "Name Vibe" */}
        <div className="space-y-2 pt-2 border-t border-zinc-100">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Name Vibe (Playful)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {nameVibes.map(v => (
              <span key={v} className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-medium">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Did You Know? */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Did you know?</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            {didYouKnowFact}
          </p>
        </div>

      </article>

      {/* Related Names Grid */}
      {simNames.length > 0 && (
        <section className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <h3 className="text-base font-bold text-zinc-900">
              Related &amp; Similar Names
            </h3>
            <Link href="/find-names" className="text-xs font-bold text-emerald-700 hover:underline">
              Browse Directory
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {simNames.map(simName => {
              const simSlug = simName.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
              return (
                <Link
                  key={simName}
                  href={`/name/${simSlug}`}
                  className="flex items-center justify-between p-3 rounded-2xl border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-xs font-bold text-zinc-800"
                >
                  <span>{simName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}
