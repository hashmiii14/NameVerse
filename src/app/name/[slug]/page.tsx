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
    title: `${data.name} Name Meaning, Origin & History | NameMeaning.fun`,
    description: `Meaning of ${data.name}: "${data.meaning}". Origin: ${data.origin}. Gender, history, variants, and cultural background.`,
    keywords: [data.name, `${data.name} meaning`, `${data.name} origin`, `${data.origin} names`],
    openGraph: {
      title: `${data.name} Name Meaning & Origin`,
      description: `What does the name ${data.name} mean? Explore its ${data.origin} origin and cultural history.`,
    },
  };
}

export default async function NameResultPage({ params }: PageProps) {
  const { slug } = await params;
  const rawName = unslugifyName(slug);
  const data = getPrebuiltOrDynamicName(rawName);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': data.name,
    'description': data.meaning,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'NameMeaning.fun Etymological Dictionary'
    },
    'termCode': data.normalized_name
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Search Bar */}
      <div className="max-w-2xl mx-auto">
        <SearchBar initialValue={data.name} />
      </div>

      {/* Name Header & Quick Facts */}
      <NameHeaderCard data={data} />

      {/* Full-Name Component Breakdown */}
      {data.is_full_name && <FullNameAnalysisCard data={data} />}

      {/* Meaning & Etymology */}
      <MeaningCard data={data} />

      {/* Gender */}
      <GenderUsageCard data={data} />

      {/* History */}
      <HistoryCard data={data} />

      {/* Religion & Cultural Connection */}
      <ReligionCultureCard data={data} />

      {/* Pronunciation */}
      <PronunciationCard data={data} />

      {/* Alternative Spellings */}
      <VariantsCard data={data} />

      {/* Related Names */}
      <RelatedNamesCard data={data} />

      {/* Regional Usage */}
      <RegionalUsageMap data={data} />

      {/* Notable People */}
      <NotablePeopleCard data={data} />

      {/* Sources */}
      <SourceConfidenceCard data={data} />

      {/* Related Searches */}
      <RelatedSearches currentName={data.name} origin={data.origin} />
    </div>
  );
}
