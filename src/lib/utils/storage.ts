const RECENT_SEARCHES_KEY = 'nameverse_recents';
const FAVORITES_KEY = 'nameverse_favorites';

export interface StorageItem {
  name: string;
  slug: string;
  timestamp: number;
}

export function getRecentSearches(): StorageItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecentSearch(name: string, slug: string): void {
  if (typeof window === 'undefined' || !name) return;
  try {
    const current = getRecentSearches();
    const filtered = current.filter(item => item.slug !== slug);
    const updated = [{ name, slug, timestamp: Date.now() }, ...filtered].slice(0, 15);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save recent search', err);
  }
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(RECENT_SEARCHES_KEY);
}

export function removeRecentSearch(slug: string): void {
  if (typeof window === 'undefined') return;
  const current = getRecentSearches();
  const updated = current.filter(item => item.slug !== slug);
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
}

export function getFavorites(): StorageItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  const current = getFavorites();
  return current.some(item => item.slug === slug);
}

export function toggleFavorite(name: string, slug: string): boolean {
  if (typeof window === 'undefined') return false;
  const current = getFavorites();
  const exists = current.some(item => item.slug === slug);
  let updated: StorageItem[];
  
  if (exists) {
    updated = current.filter(item => item.slug !== slug);
  } else {
    updated = [{ name, slug, timestamp: Date.now() }, ...current];
  }
  
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update favorites', err);
  }
  
  return !exists;
}
