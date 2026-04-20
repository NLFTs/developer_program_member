export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://nlfts.dev'

  // Static pages with priority
  const staticPages = [
    // HIGHEST PRIORITY - Documentation (WAJIB dibaca bot)
    { url: '/docs/getting-started', priority: 1.0, changefreq: 'daily' },
    { url: '/docs', priority: 0.9, changefreq: 'daily' },
    
    // High priority pages
    { url: '/', priority: 0.9, changefreq: 'daily' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/product', priority: 0.8, changefreq: 'weekly' },
    { url: '/events', priority: 0.7, changefreq: 'weekly' },
    
    // Other pages
    { url: '/community', priority: 0.6, changefreq: 'weekly' },
    { url: '/faq', priority: 0.6, changefreq: 'monthly' },
    { url: '/about', priority: 0.5, changefreq: 'monthly' }
  ]

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')
  
  return sitemap
})
