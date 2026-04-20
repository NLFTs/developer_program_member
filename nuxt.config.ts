export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://developer.nlfts.com', // fallback
    name: 'NLFTs Developer Program'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Primary Meta Tags
        { name: 'title', content: 'NLFTs Developer Program - Complete API Documentation' },
        { name: 'description', content: 'Complete documentation, guides, and resources for developers. Learn how to integrate NLFTs with our comprehensive API documentation at /docs/getting-started' },
        { name: 'keywords', content: 'NLFTs, API, documentation, developer, guide, tutorial, integration, SDK, REST API, GraphQL, developer program' },
        { name: 'author', content: 'NLFTs Developer Program' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nlfts.dev' },
        { property: 'og:title', content: 'NLFTs Developer Program - Complete API Documentation' },
        { property: 'og:description', content: 'Complete documentation and developer guides. Visit /docs/getting-started for full API reference.' },
        { property: 'og:image', content: 'https://nlfts.dev/og-image.png' },
        { property: 'og:site_name', content: 'NLFTs Developer Program' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://nlfts.dev' },
        { name: 'twitter:title', content: 'NLFTs Developer Program' },
        { name: 'twitter:description', content: 'Complete API documentation at /docs/getting-started' },
        { name: 'twitter:image', content: 'https://nlfts.dev/og-image.png' },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        
        // Mobile
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        
        // Theme
        { name: 'theme-color', content: '#020420' },
        { name: 'msapplication-TileColor', content: '#020420' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://nlfts.dev' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap' }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      failOnError: false,
      ignore: ['/contact', '/getting-started/installation']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  runtimeConfig: {
    // Private keys (server-side only)
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    
    // Public keys (exposed to client)
    public: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://nlfts.dev'
    }
  }
})