import { NameRecord, FilterOptions } from '@/types/name';
import namesData from './names.json';

const ALL_NAMES: NameRecord[] = namesData as NameRecord[];

// Fast Map for O(1) slug lookup
const NAMES_BY_SLUG = new Map<string, NameRecord>();

ALL_NAMES.forEach(item => {
  if (item && item.slug) {
    NAMES_BY_SLUG.set(item.slug.toLowerCase(), item);
    // Also index normalized simple string if different
    const simpleName = item.name.toLowerCase().trim();
    if (!NAMES_BY_SLUG.has(simpleName)) {
      NAMES_BY_SLUG.set(simpleName, item);
    }
  }
});

/**
 * Fetch a single name record by its slug or raw name in O(1) time
 */
export function getNameBySlug(slug: string): NameRecord | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
  return NAMES_BY_SLUG.get(clean) || NAMES_BY_SLUG.get(slug.toLowerCase().trim());
}

/**
 * Get all names in the master dataset
 */
export function getAllNames(): NameRecord[] {
  return ALL_NAMES;
}

/**
 * Get list of all valid indexable slugs for dynamic static params & sitemap
 */
export function getAllSlugs(): string[] {
  return ALL_NAMES.map(item => item.slug);
}

/**
 * Server-side search & filter utility
 */
export function queryNamesServer(options: FilterOptions, limit = 50, offset = 0): { results: NameRecord[]; total: number } {
  let list = ALL_NAMES;

  if (options.searchQuery && options.searchQuery.trim()) {
    const q = options.searchQuery.toLowerCase().trim();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.slug.includes(q) ||
      item.meaning.toLowerCase().includes(q)
    );
  }

  if (options.gender && options.gender !== 'All') {
    list = list.filter(item => item.gender.toLowerCase() === options.gender?.toLowerCase());
  }

  if (options.origin && options.origin !== 'All') {
    list = list.filter(item => item.origin.toLowerCase().includes(options.origin!.toLowerCase()));
  }

  if (options.religion && options.religion !== 'All') {
    list = list.filter(item => 
      item.religion.some(r => r.toLowerCase().includes(options.religion!.toLowerCase()))
    );
  }

  if (options.language && options.language !== 'All') {
    list = list.filter(item =>
      item.language.some(l => l.toLowerCase().includes(options.language!.toLowerCase()))
    );
  }

  if (options.letter && options.letter !== 'All') {
    const char = options.letter.toLowerCase();
    list = list.filter(item => item.name.toLowerCase().startsWith(char));
  }

  const total = list.length;
  const results = list.slice(offset, offset + limit);

  return { results, total };
}
