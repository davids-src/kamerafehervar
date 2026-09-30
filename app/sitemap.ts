import type { MetadataRoute } from 'next';
import { routeConfigs, SITE_URL } from '@/lib/routes';

/** Canonical URLs only. No priority / changefreq. lastmod = contentUpdatedAt only. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routeConfigs.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(route.contentUpdatedAt),
  }));
}
