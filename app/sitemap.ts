import type { MetadataRoute } from 'next';
import { routeConfigs, SITE_URL } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return routeConfigs.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(route.contentUpdatedAt),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
