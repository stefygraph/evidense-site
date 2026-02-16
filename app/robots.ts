import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemple si tu as un dossier que tu ne veux pas indexer
    },
    sitemap: 'https://evidense.io/sitemap.xml',
  }
}