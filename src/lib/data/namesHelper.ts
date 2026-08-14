import { NameRecord, FilterOptions } from '@/types/name';
import fs from 'fs';
import path from 'path';

let cachedPopular: NameRecord[] | null = null;
const letterCache: Map<string, NameRecord[]> = new Map();

function loadPopularDataset(): NameRecord[] {
  if (cachedPopular && cachedPopular.length > 0) return cachedPopular;

  const candidatePaths = [
    path.join(process.cwd(), 'public', 'data', 'popular.json'),
    path.join(process.cwd(), 'src', 'lib', 'data', 'popular.json'),
  ];

  for (const filePath of candidatePaths) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw) as NameRecord[];
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          cachedPopular = parsed;
          return cachedPopular;
        }
      }
    } catch (err) {
      console.error(`Error loading popular dataset from ${filePath}:`, err);
    }
  }

  cachedPopular = [];
  return cachedPopular;
}

function loadLetterDataset(letterChar: string): NameRecord[] {
  const char = letterChar.toLowerCase().charAt(0);
  if (!char || char < 'a' || char > 'z') {
    return loadPopularDataset();
  }

  if (letterCache.has(char)) {
    return letterCache.get(char)!;
  }

  const candidatePaths = [
    path.join(process.cwd(), 'public', 'data', 'by-letter', `${char}.json`),
    path.join(process.cwd(), 'src', 'lib', 'data', 'by-letter', `${char}.json`),
  ];

  for (const filePath of candidatePaths) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw) as NameRecord[];
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          letterCache.set(char, parsed);
          return parsed;
        }
      }
    } catch (err) {
      console.error(`Error loading letter ${char} dataset:`, err);
    }
  }

  return loadPopularDataset();
}

/**
 * Fetch a single name record by its slug or raw name in O(1) time
 */
export function getNameBySlug(slug: string): NameRecord | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim().replace(/[\s\W-]+/g, '-');
  const firstChar = clean.charAt(0);

  // 1. Check target letter chunk
  if (firstChar >= 'a' && firstChar <= 'z') {
    const list = loadLetterDataset(firstChar);
    const item = list.find(n => n.slug.toLowerCase() === clean || n.name.toLowerCase() === slug.toLowerCase());
    if (item) return item;
  }

  // 2. Check popular fallback chunk
  const popList = loadPopularDataset();
  return popList.find(n => n.slug.toLowerCase() === clean || n.name.toLowerCase() === slug.toLowerCase());
}

/**
 * Get sample list of valid indexable slugs for dynamic static params & sitemap
 */
export function getAllSlugs(): string[] {
  return loadPopularDataset().map(item => item.slug);
}

/**
 * High-performance server-side search & filter utility (Partitioned Serverless Execution)
 */
export function queryNamesServer(options: FilterOptions, limit = 48, offset = 0): { results: NameRecord[]; total: number } {
  let dataset: NameRecord[] = [];

  const q = (options.searchQuery && options.searchQuery.trim()) ? options.searchQuery.toLowerCase().trim() : null;
  const letter = (options.letter && options.letter !== 'All') ? options.letter.toLowerCase() : null;

  // Determine target partition chunk
  if (letter && letter >= 'a' && letter <= 'z') {
    dataset = loadLetterDataset(letter);
  } else if (q) {
    const firstChar = q.charAt(0);
    if (firstChar >= 'a' && firstChar <= 'z') {
      dataset = loadLetterDataset(firstChar);
    } else {
      dataset = loadPopularDataset();
    }
  } else {
    dataset = loadPopularDataset();
  }

  const gender = (options.gender && options.gender !== 'All') ? options.gender.toLowerCase() : null;
  const origin = (options.origin && options.origin !== 'All') ? options.origin.toLowerCase() : null;
  const religion = (options.religion && options.religion !== 'All') ? options.religion.toLowerCase() : null;
  const language = (options.language && options.language !== 'All') ? options.language.toLowerCase() : null;
  const community = (options.community && options.community !== 'All') ? options.community.toLowerCase() : null;
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
