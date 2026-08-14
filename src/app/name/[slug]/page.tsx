import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNameBySlug, getAllSlugs } from '@/lib/data/namesHelper';
import { SearchBar } from '@/components/search/SearchBar';
import { BookOpen, Globe, User, Shield, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for fast static rendering of top slugs
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  // Return top 500 for build static generation; rest will be rendered on-demand and cached
  return slugs.slice(0, 500).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getNameBySlug(slug);

  if (!data) {
    return {
      title: 'Name Not Found | NameMeaning.fun',
      description: 'The requested name could not be found in our database.',
    };
  }

  const relStr = data.religion && data.religion.length ? data.religion.join(', ') : 'Cultural';
  const langStr = data.language && data.language.length ? data.language.join(', ') : data.origin;

  return {
    title: `${data.name} Name Meaning, Origin & Gender | NameMeaning.fun`,
    description: `Meaning of ${data.name}: "${data.meaning}". Origin: ${data.origin}. Gender: ${data.gender}. Language: ${langStr}. Religion/Culture: ${relStr}.`,
    keywords: [data.name, `${data.name} meaning`, `${data.name} origin`, `${data.origin} names`, `${data.gender} names`],
    alternates: {
      canonical: `https://www.namemeaning.fun/name/${data.slug}`,
    },
    openGraph: {
      title: `${data.name} Name Meaning & Origin | NameMeaning.fun`,
      description: `What does the name ${data.name} mean? Explore its ${data.origin} origin, etymology, and cultural significance.`,
      url: `https://www.namemeaning.fun/name/${data.slug}`,
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

  // Schema.org Structured Data
  const jsonLdTerm = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': data.name,
    'description': data.meaning,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'NameMeaning.fun Etymological Dictionary',
      'url': 'https://www.namemeaning.fun'
    },
    'termCode': data.slug
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.namemeaning.fun'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Find Names',
        'item': 'https://www.namemeaning.fun/find-names'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.name,
        'item': `https://www.namemeaning.fun/name/${data.slug}`
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTerm) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Top Search Bar */}
      <div className="max-w-2xl mx-auto">
        <SearchBar initialValue={data.name} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-slate-500 flex items-center gap-1.5 pt-2">
        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/find-names" className="hover:text-emerald-600 transition-colors">Find Names</Link>
        <span>/</span>
        <span className="font-bold text-slate-800">{data.name}</span>
      </nav>

      {/* Main Name Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {data.name}
            </h1>
            {data.pronunciation && (
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                Pronounced: /{data.pronunciation}/
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-full ${
              data.gender === 'Male' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
              data.gender === 'Female' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
              'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}>
              {data.gender} Name
            </span>
          </div>
        </div>

        {/* Quick Attribute Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
          
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Origin</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{data.origin}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Language</span>
            </div>
            <p className="text-sm font-bold text-slate-900">
              {data.language && data.language.length ? data.language.join(', ') : data.origin}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Religion / Culture</span>
            </div>
            <p className="text-sm font-bold text-slate-900">
              {data.religion && data.religion.length ? data.religion.join(', ') : 'Cultural'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Gender Usage</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{data.gender}</p>
          </div>

        </div>
      </div>

      {/* Meaning & Detailed Explanation */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          Meaning of the Name {data.name}
        </h2>
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-900 text-sm font-semibold leading-relaxed">
          &quot;{data.meaning}&quot;
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
          {data.description}
        </p>
      </div>

      {/* Alternate Spellings */}
      {data.alternate_spellings && data.alternate_spellings.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-xs">
          <h3 className="text-base font-bold text-slate-900">
            Alternate Spellings & Transliterations
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.alternate_spellings.map(spelling => (
              <span key={spelling} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                {spelling}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Similar Names */}
      {data.similar_names && data.similar_names.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-lg font-bold text-slate-900">
              Similar & Related Names
            </h3>
            <Link href="/find-names" className="text-xs text-emerald-600 font-bold hover:underline">
              Explore All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.similar_names.map(simName => {
              const simSlug = simName.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
              return (
                <Link
                  key={simName}
                  href={`/name/${simSlug}`}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-xs font-bold text-slate-800"
                >
                  <span>{simName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
