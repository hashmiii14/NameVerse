export type GenderType = 'Male' | 'Female' | 'Unisex';

export interface NameRecord {
  name: string;
  slug: string;
  meaning: string;
  short_meaning: string;
  origin: string;
  language: string[];
  religion: string[];
  gender: GenderType;
  pronunciation?: string;
  alternate_spellings: string[];
  similar_names: string[];
  description: string;
  tags: string[];
}

export interface SearchIndexItem {
  n: string; // name
  s: string; // slug
  g: GenderType; // gender
  o: string; // origin
  r: string[]; // religion
  l: string[]; // language
  m: string; // short meaning
}

export interface FilterOptions {
  gender?: string;
  origin?: string;
  religion?: string;
  language?: string;
  letter?: string;
  searchQuery?: string;
}
