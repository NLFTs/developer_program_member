export default defineNuxtPlugin(() => {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://nlfts.dev'

  // Default SEO configuration
  const defaultSeo = {
    title: 'NLFTs Developer Program - Build the Future',
    description: 'Complete documentation, guides, and resources for developers. Learn how to integrate NLFTs into your applications with our comprehensive API documentation.',
    ogImage: `${siteUrl}/og-image.png`,
    twitterCard: 'summary_large_image'
  }

  // Watch route changes and update SEO
  watch(() => route.path, (path) => {
    // Special handling for /docs/getting-started
    if (path === '/docs/getting-started' || path.startsWith('/docs')) {
      useHead({
        title: 'Getting Started - NLFTs Developer Documentation',
        meta: [
          { name: 'description', content: 'Complete guide to getting started with NLFTs. API documentation, integration guides, code examples, and best practices for developers.' },
          { name: 'keywords', content: 'NLFTs, API, documentation, developer, guide, tutorial, integration, SDK, REST API, GraphQL' },
          
          // Open Graph
          { property: 'og:title', content: 'NLFTs Developer Documentation - Getting Started' },
          { property: 'og:description', content: 'Complete API documentation and developer guides for NLFTs integration.' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `${siteUrl}${path}` },
          { property: 'og:image', content: `${siteUrl}/og-docs.png` },
          
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'NLFTs Developer Documentation' },
          { name: 'twitter:description', content: 'Complete API documentation and developer guides.' },
          { name: 'twitter:image', content: `${siteUrl}/og-docs.png` },
          
          // Additional SEO
          { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { name: 'googlebot', content: 'index, follow' },
          { name: 'bingbot', content: 'index, follow' },
          
          // Canonical
          { rel: 'canonical', href: `${siteUrl}${path}` }
        ],
        link: [
          { rel: 'canonical', href: `${siteUrl}${path}` }
        ]
      })
    }
  }, { immediate: true })
})
