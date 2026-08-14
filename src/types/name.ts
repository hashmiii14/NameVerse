export type GenderType = 'Male' | 'Female' | 'Unisex';

export interface NameRecord {
  id?: string;
  name: string;
  slug: string;
  normalizedName?: string;
  meaning: string;
  shortMeaning?: string;
  short_meaning?: string;
  origin: string;
  language: string[];
  religion: string[];
  gender: GenderType;
  nameType?: string;
  pronunciation?: string;
  alternateSpelling?: string[];
  alternateSpellings?: string[];
  alternate_spellings?: string[];
  similarNames?: string[];
  similar_names?: string[];
  description: string;
  tags: string[];
  community?: string[];
}

export interface SearchIndexItem {
  n: string; // name
  s: string; // slug
  g: GenderType; // gender
  o: string; // origin
  r: string[]; // religion
  l: string[]; // language
  t?: string; // nameType
  m: string; // short meaning
}

export interface FilterOptions {
  gender?: string;
  origin?: string;
  religion?: string;
  language?: string;
  community?: string;
  letter?: string;
  searchQuery?: string;
}
