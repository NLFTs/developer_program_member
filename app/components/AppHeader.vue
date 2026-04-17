<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  {
    label: 'Resources',
    children: [
      { label: 'Docs', to: '/docs', icon: 'i-lucide-book-open' },
      { label: 'FAQ', to: '/faq', icon: 'i-lucide-help-circle' },
      { label: 'Grantara', to: '/grantara', icon: 'i-lucide-award' }
    ]
  }
])

const socials = [
  { label: 'bsky', href: 'https://bsky.app', icon: 'i-simple-icons-bluesky' },
  { label: 'github', href: 'https://github.com/nlfts', icon: 'i-simple-icons-github' },
  { label: 'x', href: 'https://x.com/nlfts', icon: 'i-simple-icons-x' },
  { label: 'discord', href: 'https://discord.gg/nlfts', icon: 'i-simple-icons-discord' }
]

const { open } = useContentSearch()

const openSearch = () => {
  open.value = true
}
</script>

<template>
  <UHeader class="border-b border-white/5 bg-background/75 backdrop-blur-md">
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <AppLogo class="w-auto h-7 sm:h-8 shrink-0 transition-transform group-hover:scale-105" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="hidden lg:flex"
    />

    <template #right>
      <div class="flex items-center gap-2">
        <button
          class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white mr-2"
          type="button"
          @click="openSearch"
        >
          <UIcon name="i-lucide-search" class="w-4 h-4" />
          <span>Ctrl K</span>
        </button>

        <div class="hidden md:flex items-center">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="social.label"
            class="p-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <UIcon :name="social.icon" class="w-5 h-5 block" />
          </a>
        </div>

        <UHeaderMobileButton class="lg:hidden" />
      </div>
    </template>

    <template #body>
      <div class="space-y-6 pt-4 px-4">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="text-lg"
        />

        <USeparator class="opacity-10" />

        <div class="flex items-center justify-center gap-6">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            class="text-white/60 hover:text-white transition-colors"
          >
            <UIcon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </template>
  </UHeader>
</template>
 
