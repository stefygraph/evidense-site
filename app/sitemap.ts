import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://evidense.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Ajoute ici tes futures pages (ex: /about, /contact)
    // {
    //   url: 'https://evidense.io/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}