import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ubconcept.vercel.app'
  
  // Define all routes
  const routes = [
    '',
    '/about-us',
    '/services',
    '/services/product-design',
    '/services/prototyping',
    '/services/manufacturing',
    '/services/market-research',
    '/services/consulting',
    '/portfolio',
    '/blogs',
    '/contact-us',
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}