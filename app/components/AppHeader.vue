<script setup lang="ts">
const route = useRoute()
const { user, loginWithPopup, logout } = useGithubAuth()

const items = computed(() => [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  {
    label: 'Resources',
    children: [
      { label: 'Docs', to: '/docs', icon: 'i-lucide-book-open' },
      { label: 'FAQ', to: '/faq', icon: 'i-lucide-help-circle' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
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
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-4">
        <AppLogo class="w-auto h-8 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="hidden lg:flex text-white/80"
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

        <div class="flex items-center">
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

        <div v-if="user" class="ml-2 flex items-center border-l border-white/10 pl-4 gap-3">
          <UButton
            icon="i-lucide-log-out"
            color="neutral"
            variant="ghost"
            size="sm"
            @click="logout"
          />
        </div>
      </div>
    </template>

    <template #body>
      <div class="space-y-6 pt-4">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="text-lg"
        />

        <USeparator class="opacity-10" />

        <div class="flex items-center justify-center gap-4">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            class="text-white/60 hover:text-white transition-colors"
          >
            <UIcon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>

        <div v-if="user" class="bg-white/5 rounded-xl p-4 flex items-center gap-4">
          
          </div>
          <UButton
            icon="i-lucide-log-out"
            color="error"
            variant="soft"
            @click="logout"
          />
        </div>
    </template>
  </UHeader>
</template>
 
