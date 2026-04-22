<script setup lang="ts">
const color = '#020618'

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'id'
  }
})

useSeoMeta({
  titleTemplate: '%s - Program Developer NLFTs',
  title: 'Anggota Program Developer NLFTs',
  description: 'Bergabunglah dengan program eksklusif Anggota Developer NLFTs. Temukan modul, komponen, dan komunitas developer terbuka kami.',
  ogTitle: 'Anggota Program Developer NLFTs',
  ogDescription: 'Bergabunglah dengan program eksklusif Anggota Developer NLFTs. Temukan modul, komponen, dan komunitas developer terbuka kami.',
  ogImage: '/og-image.png',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Anggota Program Developer NLFTs',
  twitterDescription: 'Bergabunglah dengan program eksklusif Anggota Developer NLFTs.'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/docs')?.children || []
})
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

const links = [{
  label: 'Dokumentasi',
  icon: 'i-lucide-book',
  to: '/docs/nuxt/getting-started'
}, {
  label: 'Acara',
  icon: 'i-lucide-calendar',
  to: '/events'
}, {
  label: 'Blog',
  icon: 'i-lucide-pencil',
  to: '/blog'
}, {
  label: 'Riwayat Perubahan',
  icon: 'i-lucide-history',
  to: '/changelog'
}]

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <div class="lg:max-w-[1440px] w-full mx-auto min-h-screen lg:border-x border-white/5 bg-black flex flex-col">
      <NuxtLoadingIndicator />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <ClientOnly>
        <LazyUContentSearch
          :files="files"
          shortcut="meta_k"
          :navigation="navigation"
          :links="links"
          :fuse="{ resultLimit: 42 }"
        />
      </ClientOnly>
    </div>
  </UApp>
</template>
