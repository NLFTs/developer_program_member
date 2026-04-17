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

const { gsap, setup } = useGsap()

setup(() => {
  gsap.from('.navbar-glow', {
    scaleX: 0,
    duration: 1.8,
    delay: 0.5,
    ease: 'expo.inOut'
  })
  
  gsap.from('.navbar-glow > div', {
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>

<template>
  <UHeader class="border-b border-white/5 bg-background/75 backdrop-blur-md relative">
    <!-- Ambient Blue Glow Line (Downward Shine) -->
    <div class="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-50 origin-center navbar-glow">
      <!-- Intense center beam -->
      <div class="absolute inset-0 bg-blue-300 blur-[1px] opacity-100" />
      
      <!-- Downward light cast (The 'Bus' effect) -->
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[90%] h-[30px] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent blur-md pointer-events-none" />
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-gradient-to-b from-blue-400/20 to-transparent blur-2xl pointer-events-none" />
    </div>

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
 
