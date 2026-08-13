export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export type AccuracyLabel = 
  | 'Well established' 
  | 'Likely' 
  | 'Traditional interpretation' 
  | 'Uncertain / disputed';

export type GenderType = 
  | 'Male' 
  | 'Female' 
  | 'Unisex' 
  | 'Historically Male' 
  | 'Historically Female' 
  | 'Varies by Region';

export interface ReligiousAssociation {
  religion: string;
  strength: 'Strong' | 'Moderate' | 'Shared' | 'Historical' | 'Modern';
  explanation: string;
}

export interface NotablePerson {
  name: string;
  role: string;
  region: string;
  why_notable: string;
}

export interface VariantSpelling {
  spelling: string;
  region_or_lang: string;
  notes?: string;
}

export interface RelatedName {
  name: string;
  relation_type: 'Linguistic Root' | 'Feminine Form' | 'Masculine Form' | 'Regional Variant' | 'Diminutive / Nickname' | 'Cross-Cultural Counterpart';
}

export interface RegionalUsage {
  region: string;
  popularity_data?: string;
  is_primary: boolean;
}

export interface SourceReference {
  title: string;
  type: 'Linguistic Dictionary' | 'Historical Reference' | 'Academic Resource' | 'Etymological Database' | 'Government Registry';
  url?: string;
}

export interface NameComponentAnalysis {
  component_title: string; // e.g. "First Name", "Surname / Nisba"
  name: string;
  role: string;
  origin: string;
  meaning: string;
  etymology: string;
  cultural_notes: string;
}

export interface NameAnalysis {
  name: string;
  normalized_name: string;
  gender: GenderType;
  gender_notes?: string;
  origin: string;
  languages: string[];
  meaning: string;
  root_word?: string;
  etymology: string;
  academic_status: AccuracyLabel;
  history: string;
  historical_period?: string;
  geographic_spread?: string[];
  religious_associations: ReligiousAssociation[];
  cultural_associations: string[];
  pronunciation: {
    romanized: string;
    ipa?: string;
    simple: string;
    original_script?: string;
    audio_script?: string;
  };
  variants: VariantSpelling[];
  related_names: RelatedName[];
  regional_usage: RegionalUsage[];
  notable_people: NotablePerson[];
  confidence: ConfidenceLevel;
  sources: SourceReference[];
  uncertainties?: string[];
  is_full_name?: boolean;
  components?: NameComponentAnalysis[];
  combined_analysis?: string;
}

export interface FilterOptions {
  tradition?: string;
  gender?: string;
  origin?: string;
  meaningTheme?: string;
  searchQuery?: string;
}
