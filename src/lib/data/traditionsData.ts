export interface FilterCategory {
  id: string;
  name: string;
  count?: number;
}

export const TRADITION_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Traditions' },
  { id: 'hindu', name: 'Hindu / Sanskrit / Indian' },
  { id: 'muslim', name: 'Muslim / Arabic / Persian / Urdu / Turkish' },
  { id: 'christian', name: 'Christian / Biblical / Hebrew / Greek / Latin' },
  { id: 'jewish', name: 'Jewish / Hebrew' },
  { id: 'sikh', name: 'Sikh / Punjabi' },
  { id: 'buddhist', name: 'Buddhist Traditions' },
  { id: 'jain', name: 'Jain Traditions' },
  { id: 'african', name: 'African Traditions' },
  { id: 'celtic', name: 'Celtic / Irish / Scottish / Welsh' },
  { id: 'germanic', name: 'Germanic / Scandinavian / Norse' },
  { id: 'slavic', name: 'Slavic / Eastern European' },
  { id: 'east-asian', name: 'East Asian (Japanese, Chinese, Korean)' },
  { id: 'indigenous', name: 'Indigenous & Pacific Traditions' },
];

export const GENDER_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Genders' },
  { id: 'male', name: 'Boy / Male' },
  { id: 'female', name: 'Girl / Female' },
  { id: 'unisex', name: 'Unisex / Universal' },
];

export const ORIGIN_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Origins' },
  { id: 'sanskrit', name: 'Sanskrit' },
  { id: 'arabic', name: 'Arabic' },
  { id: 'hebrew', name: 'Hebrew' },
  { id: 'persian', name: 'Persian' },
  { id: 'greek', name: 'Greek' },
  { id: 'latin', name: 'Latin' },
  { id: 'english', name: 'English / Germanic' },
  { id: 'african', name: 'African Languages' },
  { id: 'asian', name: 'East & South Asian' },
];

export const MEANING_THEME_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Meaning Themes' },
  { id: 'peace', name: 'Peace & Calm' },
  { id: 'strength', name: 'Strength & Courage' },
  { id: 'wisdom', name: 'Wisdom & Knowledge' },
  { id: 'light', name: 'Light & Brightness' },
  { id: 'love', name: 'Love & Grace' },
  { id: 'nature', name: 'Nature & Earth' },
  { id: 'leadership', name: 'Leadership & Royalty' },
  { id: 'beauty', name: 'Beauty & Purity' },
];
