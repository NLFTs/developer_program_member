<script setup lang="ts">
const route = useRoute()

// Use new auth composable (no database)
const { user, isLoggedIn, logout } = useAuth()

const isUserMenuOpen = ref(false)
const userMenuRef = ref(null)
const isMobileMenuOpen = ref(false)

onClickOutside(userMenuRef, () => {
  isUserMenuOpen.value = false
})

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const handleLogout = () => {
  isUserMenuOpen.value = false
  logout()
}

const items = [
  { label: 'Product', to: '/product' },
  { label: 'Events', to: '/events', hasMega: true },
  { label: 'Resources', to: '/docs/getting-started', hasMega: true },
  { label: 'Blog', to: '/blog' }
]

const megaMenuData = {
  Events: {
    upcoming: [
      { date: '22 APR', title: 'NLFTs Workshop Jakarta', desc: 'SCBD, Jakarta Selatan' },
      { date: '23 APR', title: 'Open Source Forum', desc: 'Online Webinar' },
      { date: '24 APR', title: 'Dev Meetup Bandung', desc: 'Dago, Bandung' },
      { date: '30 APR', title: 'Community Talk Surabaya', desc: 'Ciputra World, Surabaya' }
    ],
    featured: [
      {
        image: 'https://media.istockphoto.com/id/2205848062/photo/gedung-sate-satay-building-an-iconic-place-in-bandung-city-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=dei-qIgEcSMgzTo2Hk77VLaa2-h_MbiDaEL0cspJV_o=',
        title: 'NLFTs in Bandung',
        date: 'MAY 26-27 2026',
        location: 'BANDUNG ID'
      },
      {
        image: 'https://images.unsplash.com/photo-1707378174003-418d6262d355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVndSUyMGpvZ2phfGVufDB8fDB8fHww',
        title: 'NLFTs In Jogja',
        date: 'JUN 18-19 2026',
        location: 'YOGYAKARTA ID'
      }
    ]
  },
  Resources: {
    categories: [
      {
        title: 'Getting Started',
        to: '/docs/getting-started',
        icon: 'i-lucide-rocket',
        desc: 'Mulai perjalanan development Anda',
        items: [
          { label: 'Introduction', to: '/docs/getting-started' },
          { label: 'Protokol', to: '/docs/getting-started/protokol' },
          { label: 'Lisensi', to: '/docs/getting-started/lisensi' }
        ]
      },
      {
        title: 'HTML',
        to: '/docs/html',
        icon: 'i-lucide-code',
        desc: 'Pelajari HTML dari dasar hingga mahir',
        items: [
          { label: 'Getting Started', to: '/docs/html/getting-started' },
          { label: 'Pustaka', to: '/docs/html/pustaka' }
        ]
      },
      {
        title: 'CSS',
        to: '/docs/css',
        icon: 'i-lucide-palette',
        desc: 'Styling dan design dengan CSS',
        items: [
          { label: 'Fundamentals', to: '/docs/css/fundamentals' },
          { label: 'Advanced', to: '/docs/css/advanced' }
        ]
      },
      {
        title: 'JavaScript',
        to: '/docs/js',
        icon: 'i-lucide-zap',
        desc: 'Programming dengan JavaScript',
        items: [
          { label: 'Basics', to: '/docs/js/basics' },
          { label: 'ES6+', to: '/docs/js/es6' }
        ]
      },
      {
        title: 'TypeScript',
        to: '/docs/ts',
        icon: 'i-lucide-shield',
        desc: 'Type-safe JavaScript development',
        items: [
          { label: 'Introduction', to: '/docs/ts/introduction' },
          { label: 'Advanced Types', to: '/docs/ts/advanced' }
        ]
      },
      {
        title: 'Nuxt.js',
        to: '/docs/nuxt',
        icon: 'i-lucide-layers',
        desc: 'Full-stack Vue.js framework',
        items: [
          { label: 'Setup', to: '/docs/nuxt/setup' },
          { label: 'Components', to: '/docs/nuxt/components' }
        ]
      },
      {
        title: 'Laravel',
        to: '/docs/laravel',
        icon: 'i-lucide-server',
        desc: 'PHP framework untuk web artisans'
      },
      {
        title: 'Next.js',
        to: '/docs/nextjs',
        icon: 'i-lucide-triangle',
        desc: 'React framework untuk production'
      },
      {
        title: 'MongoDB',
        to: '/docs/mongodb',
        icon: 'i-lucide-database',
        desc: 'NoSQL database untuk modern apps'
      },
      {
        title: 'Java',
        to: '/docs/java',
        icon: 'i-lucide-coffee',
        desc: 'Enterprise programming language'
      }
    ],
    company: [
      { label: 'Blog', to: '/blog', icon: 'i-lucide-newspaper' },
      { label: 'Agensi', to: '/agency', icon: 'i-lucide-briefcase' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
      { label: 'Legal', to: '/legal', icon: 'i-lucide-scale' },
      { label: 'Enterprise', to: '/enterprise', icon: 'i-lucide-building' }
    ],
    partners: [
      'DevLovers Community',
      'OpenFoundry',
      'CloudVortex',
      'ModuleX Partners',
      'Sigma Design',
      'Redberry Apps'
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      date: 'April 14, 2026',
      title: 'How I Built an AI-Powered CRM with NLFTs in a Weekend',
      desc: 'How a senior freelance developer built a full NL/*  */FTs MVP in under 48 hours using our new AI modules.'
    },
    socials: [
      { icon: 'i-simple-icons-github', href: 'https://github.com/nlfts' },
      { icon: 'i-simple-icons-x', href: 'https://x.com/nlfts' },
      { icon: 'i-simple-icons-discord', href: 'https://discord.gg/nlfts' },
      { icon: 'i-simple-icons-linkedin', href: '#' }
    ]
  }
}

const activeMegaMenu = ref<string | null>(null)
let timeout: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = (label: string, hasMega?: boolean) => {
  if (timeout) clearTimeout(timeout)
  if (hasMega) {
    activeMegaMenu.value = label
  } else {
    activeMegaMenu.value = null
  }
}

const handleMouseLeave = () => {
  timeout = setTimeout(() => {
    activeMegaMenu.value = null
  }, 300)
}

const { open } = useContentSearch()
const openSearch = () => {
  open.value = true
}

const { gsap, setup } = useGsap()

watch(isUserMenuOpen, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      gsap.fromTo('.user-dropdown-menu',
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
      )
    })
  }
})

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      gsap.fromTo('.mobile-menu-panel',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
      gsap.staggerFromTo('.mobile-menu-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' },
        0.05
      )
    })
  } else {
    expandedMobileItems.value.clear()
  }
})

setup(() => {
  gsap.from('.navbar-glow', {
    scaleX: 0,
    duration: 1.8,
    delay: 0.5,
    ease: 'expo.inOut'
  })
})
</script>

<template>
  <UHeader class="border-b border-white/5 bg-background/90 relative z-[200]">
    <!-- Ambient Blue Glow Line (Downward Shine) -->
    <div class="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-50 origin-center navbar-glow">
      <!-- Intense center beam -->
      <div class="absolute inset-0 bg-blue-300 blur-[1px] opacity-100" />

      <!-- Downward light cast (The 'Bus' effect) -->
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[90%] h-[30px] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent blur-md pointer-events-none" />
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-gradient-to-b from-blue-400/20 to-transparent blur-2xl pointer-events-none" />
    </div>

    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-4 group"
      >
        <AppLogo class="w-auto h-7 sm:h-8 shrink-0 transition-transform group-hover:scale-105" />
      </NuxtLink>
    </template>

    <!-- Custom Desktop Nav with Mega Menu Trigger -->
    <div class="hidden lg:flex items-center gap-8 ml-8">
      <div
        v-for="item in items"
        :key="item.label"
        class="relative py-4"
        @mouseenter="handleMouseEnter(item.label, item.hasMega)"
        @mouseleave="handleMouseLeave"
      >
        <NuxtLink
          :to="item.to"
          class="text-sm font-bold transition-all flex items-center gap-1.5"
          :class="[
            route.path.startsWith(item.to) ? 'text-white' : 'text-white/50 hover:text-white',
            activeMegaMenu === item.label ? 'text-white translate-y-[-1px]' : ''
          ]"
        >
          {{ item.label }}
          <UIcon
            v-if="item.hasMega"
            name="i-lucide-chevron-down"
            class="w-3.5 h-3.5 transition-transform duration-300"
            :class="activeMegaMenu === item.label ? 'rotate-180' : ''"
          />
        </NuxtLink>

        <!-- Render Mega Menu if exists for this item -->
        <HeaderMegaMenu
          v-if="item.hasMega"
          :active="activeMegaMenu === item.label"
          :label="item.label"
          :data="megaMenuData[item.label as keyof typeof megaMenuData]"
          @mouseenter="handleMouseEnter(item.label, true)"
          @mouseleave="handleMouseLeave"
        />
      </div>
    </div>

    <template #right>
      <div class="flex items-center gap-2">
        <button
          class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/60 transition-all hover:bg-white/5 hover:border-white/30 hover:text-white mr-2"
          type="button"
          @click="openSearch"
        >
          <UIcon
            name="i-lucide-search"
            class="w-4 h-4"
          />
          <span>Search</span>
          <span class="opacity-30 border border-white/20 rounded px-1.5 ml-1 font-mono">⌘K</span>
        </button>

        <!-- Custom Auth Section (Simplified - No Profile Link) -->
        <ClientOnly>
          <template v-if="isLoggedIn && user">
            <div
              ref="userMenuRef"
              class="relative"
            >
              <button
                class="flex items-center group outline-none focus:outline-none"
                @click="toggleUserMenu"
              >
                <UAvatar
                  :src="user.avatar"
                  :alt="user.name || user.username"
                  size="sm"
                  class="ring-2 transition-all cursor-pointer ring-white/10 group-hover:ring-blue-500/50"
                />
              </button>

              <!-- Custom Premium Dropdown Menu -->
              <div
                v-if="isUserMenuOpen"
                class="user-dropdown-menu absolute right-0 mt-3 w-64 bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[300]"
              >
                <!-- Account info -->
                <div class="px-5 py-4 border-b border-white/5 bg-white/5">
                  <p class="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-white/30">
                    Authenticated
                  </p>
                  <div class="flex items-center gap-1.5">
                    <p class="text-sm font-bold text-white truncate max-w-[200px]">
                      {{ user.name || user.username }}
                    </p>
                  </div>
                  <p class="text-xs text-white/40 mt-1">
                    @{{ user.username }}
                  </p>
                </div>

                <!-- Links -->
                <div class="py-2">
                  <NuxtLink
                    to="/docs/getting-started"
                    class="flex items-center gap-3 px-5 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    @click="isUserMenuOpen = false"
                  >
                    <UIcon
                      name="i-lucide-book"
                      class="w-4 h-4"
                    />
                    Documentation
                  </NuxtLink>
                  <NuxtLink
                    to="/community"
                    class="flex items-center gap-3 px-5 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    @click="isUserMenuOpen = false"
                  >
                    <UIcon
                      name="i-lucide-users"
                      class="w-4 h-4"
                    />
                    Community
                  </NuxtLink>
                </div>

                <!-- Logout -->
                <div class="p-2 border-t border-white/5">
                  <button
                    class="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold"
                    @click="handleLogout"
                  >
                    <UIcon
                      name="i-lucide-log-out"
                      class="w-4 h-4"
                    />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <UButton
              to="/login"
              color="white"
              variant="solid"
              size="sm"
              class="hidden sm:flex rounded-full font-bold px-5"
              label="Login"
            />
          </template>
        </ClientOnly>

        <button
          class="p-2 text-zinc-400 hover:text-white transition-colors lg:hidden ml-2"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon
            v-if="!isMobileMenuOpen"
            name="heroicons:bars-3"
            class="w-6 h-6"
          />
          <Icon
            v-else
            name="heroicons:x-mark"
            class="w-6 h-6"
          />
        </button>
      </div>
    </template>

    <!-- Mobile Menu Panel -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 lg:hidden z-[199]"
    >
      <nav class="flex flex-col divide-y divide-white/5">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="px-4 py-3 text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="px-4 py-3 text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          @click="isMobileMenuOpen = false"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/careers"
          class="px-4 py-3 text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          @click="isMobileMenuOpen = false"
        >
          Careers
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="px-4 py-3 text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          @click="isMobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </UHeader>
</template>
