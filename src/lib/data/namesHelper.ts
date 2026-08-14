import { NameRecord, FilterOptions } from '@/types/name';
import fs from 'fs';
import path from 'path';

let cachedNames: NameRecord[] | null = null;
let cachedSlugMap: Map<string, NameRecord> | null = null;

function loadDataset(): NameRecord[] {
  if (cachedNames && cachedNames.length > 0) return cachedNames;

  const candidatePaths = [
    path.join(process.cwd(), 'src', 'lib', 'data', 'names.json'),
    path.join(process.cwd(), 'public', 'data', 'names.json'),
    path.join(process.cwd(), 'names.json'),
    path.join(__dirname, 'names.json'),
  ];

  for (const filePath of candidatePaths) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw) as NameRecord[];
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          cachedNames = parsed;
          break;
        }
      }
    } catch (err) {
      console.error(`Failed reading dataset at ${filePath}:`, err);
    }
  }

  if (!cachedNames) {
    cachedNames = [];
  }

  // Build O(1) slug map
  cachedSlugMap = new Map<string, NameRecord>();
  for (let i = 0; i < cachedNames.length; i++) {
    const item = cachedNames[i];
    if (item && item.slug) {
      cachedSlugMap.set(item.slug.toLowerCase(), item);
      const simpleName = item.name.toLowerCase().trim();
      if (!cachedSlugMap.has(simpleName)) {
        cachedSlugMap.set(simpleName, item);
      }
    }
  }

  return cachedNames;
}

function getSlugMap(): Map<string, NameRecord> {
  if (!cachedSlugMap) {
    loadDataset();
  }
  return cachedSlugMap || new Map();
}

/**
 * Fetch a single name record by its slug or raw name in O(1) time
 */
export function getNameBySlug(slug: string): NameRecord | undefined {
  if (!slug) return undefined;
  const map = getSlugMap();
  const clean = slug.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
  return map.get(clean) || map.get(slug.toLowerCase().trim());
}

/**
 * Get all names in the master dataset
 */
export function getAllNames(): NameRecord[] {
  return loadDataset();
}

/**
 * Get list of all valid indexable slugs for dynamic static params & sitemap
 */
export function getAllSlugs(): string[] {
  return loadDataset().map(item => item.slug);
}

/**
 * High-performance server-side search & filter utility (Single-pass O(N) execution)
 */
export function queryNamesServer(options: FilterOptions, limit = 48, offset = 0): { results: NameRecord[]; total: number } {
  const dataset = loadDataset();
  
  const gender = (options.gender && options.gender !== 'All') ? options.gender.toLowerCase() : null;
  const origin = (options.origin && options.origin !== 'All') ? options.origin.toLowerCase() : null;
  const religion = (options.religion && options.religion !== 'All') ? options.religion.toLowerCase() : null;
  const language = (options.language && options.language !== 'All') ? options.language.toLowerCase() : null;
  const community = (options.community && options.community !== 'All') ? options.community.toLowerCase() : null;
  const letter = (options.letter && options.letter !== 'All') ? options.letter.toLowerCase() : null;
  const q = (options.searchQuery && options.searchQuery.trim()) ? options.searchQuery.toLowerCase().trim() : null;
  const qSlug = q ? q.replace(/[\s\W-]+/g, '-') : null;

  const matches: NameRecord[] = [];
  const ranks: number[] = [];

  for (let i = 0; i < dataset.length; i++) {
    const item = dataset[i];

    if (gender && item.gender.toLowerCase() !== gender) continue;
    if (origin && !item.origin.toLowerCase().includes(origin)) continue;
    if (letter && !item.name.toLowerCase().startsWith(letter)) continue;
    if (religion && (!item.religion || !item.religion.some(r => r.toLowerCase().includes(religion)))) continue;
    if (language && (!item.language || !item.language.some(l => l.toLowerCase().includes(language)))) continue;
    if (community) {
      const inComm = (item.community && item.community.some(c => c.toLowerCase().includes(community))) ||
                     (item.tags && item.tags.some(t => t.toLowerCase().includes(community))) ||
                     (item.description && item.description.toLowerCase().includes(community));
      if (!inComm) continue;
    }

    let rank = 0;
    if (q && qSlug) {
      const nameLower = item.name.toLowerCase();
      const slugLower = item.slug;
      if (nameLower === q || slugLower === qSlug) {
        rank = 1;
      } else if (nameLower.startsWith(q) || slugLower.startsWith(qSlug)) {
        rank = 2;
      } else if (nameLower.includes(q) || slugLower.includes(qSlug)) {
        rank = 3;
      } else if (item.meaning.toLowerCase().includes(q) || (item.origin && item.origin.toLowerCase().includes(q))) {
        rank = 4;
      } else {
        continue;
      }
    }

    matches.push(item);
    if (q) ranks.push(rank);
  }

  if (q && matches.length > 0) {
    const paired = matches.map((m, idx) => ({ item: m, rank: ranks[idx] }));
    paired.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return a.item.name.length - b.item.name.length;
    });
    const total = paired.length;
    const results = paired.slice(offset, offset + limit).map(p => p.item);
    return { results, total };
  }

  const total = matches.length;
  const results = matches.slice(offset, offset + limit);
  return { results, total };
}
