import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/data/namesHelper';

const SITEMAP_CHUNK_SIZE = 10000;

export async function generateSitemaps() {
  const totalSlugs = getAllSlugs().length;
  const numSitemaps = Math.ceil(totalSlugs / SITEMAP_CHUNK_SIZE) || 1;
  const ids = [];
  for (let i = 0; i < numSitemaps; i++) {
    ids.push({ id: i });
  }
  return ids;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.namemeaning.fun';

  // ID 0 includes static routes
  const staticPages: MetadataRoute.Sitemap = id === 0 ? [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/find-names`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ] : [];

  const allSlugs = getAllSlugs();
  const start = id * SITEMAP_CHUNK_SIZE;
  const end = start + SITEMAP_CHUNK_SIZE;
  const chunkSlugs = allSlugs.slice(start, end);

  const namePages: MetadataRoute.Sitemap = chunkSlugs.map(slug => ({
    url: `${baseUrl}/name/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...namePages];
}
