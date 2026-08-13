export interface FilterCategory {
  id: string;
  name: string;
  count?: number;
}

export const TRADITION_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Asian & Global Traditions' },
  { id: 'hindu', name: 'Indian (Hindu / Sanskrit)' },
  { id: 'muslim', name: 'Indian & Asian (Muslim / Urdu / Arabic)' },
  { id: 'sikh', name: 'Sikh / Punjabi Traditions' },
  { id: 'south-indian', name: 'South Indian (Tamil, Telugu, Kannada, Malayalam)' },
  { id: 'christian', name: 'Indian & Asian (Christian / Biblical)' },
  { id: 'buddhist', name: 'Buddhist Traditions' },
  { id: 'jain', name: 'Jain Traditions' },
  { id: 'persian-central-asian', name: 'Persian & Central Asian' },
  { id: 'east-asian', name: 'East Asian (Japanese, Chinese, Korean)' },
  { id: 'southeast-asian', name: 'Southeast Asian Traditions' },
];

export const GENDER_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Genders' },
  { id: 'male', name: 'Boy / Male' },
  { id: 'female', name: 'Girl / Female' },
  { id: 'unisex', name: 'Unisex / Universal' },
];

export const ORIGIN_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Linguistic Origins' },
  { id: 'sanskrit', name: 'Sanskrit' },
  { id: 'arabic', name: 'Arabic / Urdu' },
  { id: 'persian', name: 'Persian' },
  { id: 'hebrew', name: 'Hebrew' },
  { id: 'tamil', name: 'Tamil / Dravidian' },
  { id: 'greek', name: 'Greek' },
  { id: 'latin', name: 'Latin' },
  { id: 'asian', name: 'East & Southeast Asian' },
];

export const MEANING_THEME_FILTERS: FilterCategory[] = [
  { id: 'all', name: 'All Meaning Themes' },
  { id: 'peace', name: 'Peace & Calm (శాంతి / शांति)' },
  { id: 'strength', name: 'Strength & Courage (बल / शक्ति)' },
  { id: 'wisdom', name: 'Wisdom & Knowledge (ज्ञान / विद्या)' },
  { id: 'light', name: 'Light & Brightness (प्रकाश / ज्योति)' },
  { id: 'love', name: 'Love & Grace (प्रेम / कृपा)' },
  { id: 'nature', name: 'Nature & Earth (प्रकृति)' },
  { id: 'leadership', name: 'Leadership & Royalty (राजा / నాయకుడు)' },
  { id: 'beauty', name: 'Beauty & Purity (सुंदरता / ਪਵਿੱਤਰ)' },
];
