/**
 * Convert a name string into an SEO-friendly URL slug.
 * e.g., "Muhammad Hashmi" -> "muhammad-hashmi"
 */
export function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format a slug back into a title name.
 * e.g., "muhammad-hashmi" -> "Muhammad Hashmi"
 */
export function unslugifyName(slug: string): string {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
