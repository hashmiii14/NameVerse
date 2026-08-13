export type SupportedLanguage = 
  | 'en' | 'hi' | 'ur' | 'ar' | 'bn' | 'pa' 
  | 'mr' | 'gu' | 'ta' | 'te' | 'kn' | 'ml';

export interface LanguageMeta {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

export interface TranslationDictionary {
  siteTitle: string;
  siteSubtitle: string;
  searchPlaceholder: string;
  exploreBtn: string;
  compareBtn: string;
  discoverBtn: string;
  recentSearches: string;
  favorites: string;
  quickFacts: string;
  meaningEtymology: string;
  historyOfName: string;
  religionCultureConnection: string;
  genderUsage: string;
  pronunciation: string;
  alternativeSpellings: string;
  relatedNames: string;
  regionalUsage: string;
  notablePeople: string;
  fullNameAnalysis: string;
  sourceConfidence: string;
  disclaimerTitle: string;
  disclaimerText: string;
  confidenceHigh: string;
  confidenceMedium: string;
  confidenceLow: string;
  wellEstablished: string;
  likely: string;
  traditionalInterpretation: string;
  uncertainDisputed: string;
  listenPronunciation: string;
  noDataPopularity: string;
  compareNamesTitle: string;
  compareSubtitle: string;
  discoverTitle: string;
  discoverSubtitle: string;
  filterByTradition: string;
  filterByGender: string;
  filterByOrigin: string;
  filterByMeaning: string;
  allTraditions: string;
  allGenders: string;
  allOrigins: string;
  allMeanings: string;
  privacyPolicy: string;
  aboutUs: string;
  contactUs: string;
  copyright: string;
  clearHistory: string;
  noRecentSearches: string;
  noFavorites: string;
  combinedNameTitle: string;
  componentBreakdown: string;
}
