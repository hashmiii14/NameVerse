import { NameRecord, FilterOptions } from '@/types/name';
import fs from 'fs';
import path from 'path';

let cachedNames: NameRecord[] | null = null;
let cachedSlugMap: Map<string, NameRecord> | null = null;

function loadDataset(): NameRecord[] {
  if (cachedNames) return cachedNames;

  try {
    const filePath = path.join(process.cwd(), 'src', 'lib', 'data', 'names.json');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      cachedNames = JSON.parse(raw) as NameRecord[];
    } else {
      // Fallback require
      cachedNames = require('./names.json') as NameRecord[];
    }
  } catch (err) {
    console.error("Error reading names.json:", err);
    try {
      cachedNames = require('./names.json') as NameRecord[];
    } catch (fallbackErr) {
      cachedNames = [];
    }
  }

  // Build O(1) map
  cachedSlugMap = new Map<string, NameRecord>();
  if (cachedNames) {
    for (const item of cachedNames) {
      if (item && item.slug) {
        cachedSlugMap.set(item.slug.toLowerCase(), item);
        const simpleName = item.name.toLowerCase().trim();
        if (!cachedSlugMap.has(simpleName)) {
          cachedSlugMap.set(simpleName, item);
        }
      }
    }
  }

  return cachedNames || [];
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
 * Server-side search & filter utility
 */
export function queryNamesServer(options: FilterOptions, limit = 50, offset = 0): { results: NameRecord[]; total: number } {
  let list = loadDataset();

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
      item.religion && item.religion.some(r => r.toLowerCase().includes(options.religion!.toLowerCase()))
    );
  }

  if (options.language && options.language !== 'All') {
    list = list.filter(item =>
      item.language && item.language.some(l => l.toLowerCase().includes(options.language!.toLowerCase()))
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
