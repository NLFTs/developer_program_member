export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://nlfts.dev'

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/product', priority: '0.9', changefreq: 'weekly' },
    { url: '/product/modules', priority: '0.8', changefreq: 'weekly' },
    { url: '/docs', priority: '0.9', changefreq: 'weekly' },
    { url: '/docs/getting-started', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/events', priority: '0.7', changefreq: 'weekly' },
    { url: '/agency', priority: '0.6', changefreq: 'monthly' },
    { url: '/careers', priority: '0.7', changefreq: 'weekly' },
    { url: '/devlovers', priority: '0.8', changefreq: 'monthly' },
    { url: '/enterprise', priority: '0.7', changefreq: 'monthly' },
    { url: '/starter-kits', priority: '0.6', changefreq: 'weekly' },
    { url: '/sponsors', priority: '0.5', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/legal', priority: '0.3', changefreq: 'yearly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/status', priority: '0.4', changefreq: 'daily' }
  ]

  // Generate current timestamp
  const now = new Date().toISOString()

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Set proper headers
  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'max-age=3600') // Cache for 1 hour

  return sitemap
})
