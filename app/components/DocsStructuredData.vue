<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://nlfts.dev'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      'name': 'NLFTs Developer Program',
      'url': siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`,
        'width': 512,
        'height': 512
      },
      'sameAs': [
        'https://github.com/nlfts',
        'https://twitter.com/nlfts',
        'https://discord.gg/nlfts'
      ]
    },
    // Website
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      'url': siteUrl,
      'name': 'NLFTs Developer Program',
      'description': 'Complete documentation and resources for developers',
      'publisher': {
        '@id': `${siteUrl}/#organization`
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${siteUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    },
    // Documentation Page
    {
      '@type': 'TechArticle',
      '@id': `${siteUrl}/docs/getting-started#article`,
      'headline': 'NLFTs Developer Documentation - Getting Started',
      'description': 'Complete guide to getting started with NLFTs API. Includes authentication, endpoints, code examples, and best practices.',
      'url': `${siteUrl}/docs/getting-started`,
      'datePublished': '2026-04-20',
      'dateModified': new Date().toISOString(),
      'author': {
        '@id': `${siteUrl}/#organization`
      },
      'publisher': {
        '@id': `${siteUrl}/#organization`
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${siteUrl}/docs/getting-started`
      },
      'articleSection': 'Documentation',
      'keywords': 'NLFTs, API, documentation, developer guide, integration, SDK, REST API',
      'about': {
        '@type': 'Thing',
        'name': 'API Documentation',
        'description': 'Technical documentation for NLFTs API integration'
      }
    },
    // Breadcrumb
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/docs/getting-started#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': siteUrl
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Documentation',
          'item': `${siteUrl}/docs`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Getting Started',
          'item': `${siteUrl}/docs/getting-started`
        }
      ]
    },
    // FAQ Schema (if applicable)
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/docs/getting-started#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I get started with NLFTs API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Visit our getting started guide at /docs/getting-started for complete documentation, code examples, and integration guides.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where can I find the API documentation?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Complete API documentation is available at /docs/getting-started with detailed endpoint references, authentication guides, and code examples.'
          }
        }
      ]
    }
  ]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <div />
</template>
