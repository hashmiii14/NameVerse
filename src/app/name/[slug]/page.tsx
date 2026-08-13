import React from 'react';
import { Metadata } from 'next';
import { unslugifyName } from '@/lib/utils/slugify';
import { getPrebuiltOrDynamicName } from '@/lib/data/prebuiltNames';
import { SearchBar } from '@/components/search/SearchBar';
import { NameHeaderCard } from '@/components/result/NameHeaderCard';
import { MeaningCard } from '@/components/result/MeaningCard';
import { HistoryCard } from '@/components/result/HistoryCard';
import { ReligionCultureCard } from '@/components/result/ReligionCultureCard';
import { GenderUsageCard } from '@/components/result/GenderUsageCard';
import { PronunciationCard } from '@/components/result/PronunciationCard';
import { VariantsCard } from '@/components/result/VariantsCard';
import { RelatedNamesCard } from '@/components/result/RelatedNamesCard';
import { RegionalUsageMap } from '@/components/result/RegionalUsageMap';
import { NotablePeopleCard } from '@/components/result/NotablePeopleCard';
import { FullNameAnalysisCard } from '@/components/result/FullNameAnalysisCard';
import { SourceConfidenceCard } from '@/components/result/SourceConfidenceCard';
import { RelatedSearches } from '@/components/result/RelatedSearches';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const nameTitle = unslugifyName(slug);
  const data = getPrebuiltOrDynamicName(nameTitle);

  return {
    title: `${data.name} Name Meaning, Etymology, Origin & History | NameVerse`,
    description: `Detailed etymology of the name ${data.name}. Meaning: "${data.meaning}". Origin: ${data.origin}. History, gender usage, variants, and cultural background.`,
    keywords: [data.name, `${data.name} meaning`, `${data.name} origin`, `${data.name} etymology`, `${data.origin} names`],
    openGraph: {
      title: `${data.name} Name Meaning & Origin`,
      description: `What does the name ${data.name} mean? Explore its ${data.origin} origin, linguistic root, and cultural history.`,
    },
  };
}

export default async function NameResultPage({ params }: PageProps) {
  const { slug } = await params;
  const rawName = unslugifyName(slug);
  const data = getPrebuiltOrDynamicName(rawName);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': data.name,
    'description': data.meaning,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'NameVerse Etymological Dictionary'
    },
    'termCode': data.normalized_name
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Script for JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Search Bar */}
      <div className="max-w-2xl mx-auto">
        <SearchBar initialValue={data.name} />
      </div>

      {/* 1. Name Header & Quick Facts */}
      <NameHeaderCard data={data} />

      {/* 2. Full-Name Component Breakdown (if multi-word) */}
      {data.is_full_name && <FullNameAnalysisCard data={data} />}

      {/* 3. Meaning & Etymology */}
      <MeaningCard data={data} />

      {/* 4. History of the Name */}
      <HistoryCard data={data} />

      {/* 5. Religion & Cultural Connection */}
      <ReligionCultureCard data={data} />

      {/* Grid of Gender & Pronunciation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GenderUsageCard data={data} />
        <PronunciationCard data={data} />
      </div>

      {/* 6. Alternative Spellings / Variants */}
      <VariantsCard data={data} />

      {/* 7. Related Names */}
      <RelatedNamesCard data={data} />

      {/* 8. Regional Usage */}
      <RegionalUsageMap data={data} />

      {/* 9. Notable People */}
      <NotablePeopleCard data={data} />

      {/* 10. Source & Confidence System */}
      <SourceConfidenceCard data={data} />

      {/* 11. Related Searches */}
      <RelatedSearches currentName={data.name} origin={data.origin} />
    </div>
  );
}
